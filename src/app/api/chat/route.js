import Anthropic from "@anthropic-ai/sdk";

const systemPrompt = `You are Bionic Computer's website support agent for customers in Karachi.

ABOUT BIONIC COMPUTER:
- Location: Karachi, Pakistan
- Services: IT consulting and support, computer/laptop hardware repair, printer/accessory support, network setup, structured cabling, cybersecurity and backup guidance, cloud and infrastructure management, annual maintenance agreements, Windows/Linux support, software support, website development
- Phone: +92 311 1444299
- Email: contact@bioniccomputer.com.pk
- Working Hours: Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun Closed
- Emergency: 24/7 support is available by phone for urgent business issues
- Warranty: 6 months on repairs
- Facebook: facebook.com/thebioniccomputer
- Instagram: instagram.com/bionic_computer
- Google Business: https://share.google/1Ac0XtKE9eCRl9g0F

YOUR RESPONSIBILITIES:
1. Greet customers warmly and quickly understand their issue.
2. Ask one useful clarifying question when needed.
3. Give safe first troubleshooting steps for common IT problems.
4. Recommend the right Bionic service when professional help is better.
5. Encourage booking or calling when there is hardware damage, business downtime, network failure, data loss risk, security concern, printer/server issue, or an urgent office support need.
6. Collect only practical lead details: name, phone/WhatsApp, service needed, location/area, preferred time, and short issue description.
7. Never claim an appointment is confirmed. Say the team will confirm by call or WhatsApp.

RESPONSE STYLE:
- Keep replies under 120 words unless the customer asks for details.
- Use plain, professional English.
- Use short bullet points for troubleshooting steps.
- Do not use markdown tables.
- Do not mention that you are an AI model.
- Do not invent prices, inventory, warranties, or availability beyond the facts above.
- For emergencies, tell the customer to call +92 311 1444299.

If the customer wants service, booking, quotation, on-site visit, callback, or appointment, ask them to use the booking form or call +92 311 1444299.`;

const bookingSignals = [
  "appointment",
  "book",
  "visit",
  "on-site",
  "onsite",
  "send technician",
  "repair",
  "quote",
  "quotation",
  "call me",
  "contact me",
  "whatsapp",
  "urgent",
  "emergency",
  "office",
  "network down",
  "data recovery",
  "not turning on",
];

function shouldOfferBooking(text) {
  const value = String(text || "").toLowerCase();
  return bookingSignals.some((signal) => value.includes(signal));
}

// Call Google Gemini API via REST
async function callGemini(apiKey, message, conversationHistory) {
  const history = Array.isArray(conversationHistory) ? conversationHistory.slice(-10) : [];
  
  const contents = [
    ...history
      .filter((msg) => msg && typeof msg.text === "string" && msg.text.trim())
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text.slice(0, 1200) }],
      })),
    { role: "user", parts: [{ text: message }] },
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: contents,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Gemini API Error ${response.status}: ${errorData}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  return text;
}

// Call Anthropic API fallback
async function callAnthropic(apiKey, message, conversationHistory) {
  const anthropic = new Anthropic({ apiKey });
  const history = Array.isArray(conversationHistory) ? conversationHistory.slice(-10) : [];

  const messages = [
    ...history
      .filter((msg) => msg && typeof msg.text === "string" && msg.text.trim())
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text.slice(0, 1200),
      })),
    { role: "user", content: message },
  ];

  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages,
  });

  return response.content[0].type === "text" ? response.content[0].text : "";
}

export async function POST(request) {
  try {
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    const anthropicKey = process.env.ANTHROPIC_API_KEY;

    if (!geminiKey && !anthropicKey) {
      return Response.json(
        { error: "Chat is not configured. Please set GEMINI_API_KEY or ANTHROPIC_API_KEY in environment variables." },
        { status: 503 }
      );
    }

    const { message, conversationHistory } = await request.json();

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    let aiResponse = "";

    if (geminiKey) {
      aiResponse = await callGemini(geminiKey, message, conversationHistory);
    } else if (anthropicKey) {
      aiResponse = await callAnthropic(anthropicKey, message, conversationHistory);
    }

    return Response.json({
      response: aiResponse,
      shouldShowBooking: shouldOfferBooking(message) || shouldOfferBooking(aiResponse),
      quickReplies: [
        "Book a technician visit",
        "Request office IT support",
        "Ask about annual maintenance",
      ],
      success: true,
    });
  } catch (error) {
    console.error("AI API Error:", error);
    return Response.json(
      {
        error: "Failed to get response",
      },
      { status: 500 }
    );
  }
}
