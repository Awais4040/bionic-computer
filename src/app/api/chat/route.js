import Anthropic from "@anthropic-ai/sdk";

let anthropicClient;

function getAnthropicClient() {
  if (!anthropicClient) {
    anthropicClient = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  return anthropicClient;
}

const systemPrompt = `You are Bionic Computer's professional AI support agent. You are helpful, friendly, and knowledgeable about IT solutions.

ABOUT BIONIC COMPUTER:
- Location: Karachi, Pakistan
- Services: Hardware Repair, Software Support, Network Setup, Website Development, 24/7 Support
- Phone: +92 311 1444299
- Email: contact@bioniccomputer.com.pk
- Working Hours: Mon-Fri 9AM-7PM, Sat 10AM-6PM, Sun Closed
- Emergency: 24/7 available
- Warranty: 6 months on repairs
- Facebook: facebook.com/thebioniccomputer
- Instagram: instagram.com/bionic_computer
- Google Business: https://share.google/1Ac0XtKE9eCRl9g0F

YOUR RESPONSIBILITIES:
1. Help troubleshoot technical issues
2. Explain solutions in simple terms
3. Guide customers through steps
4. Recommend when professional help is needed
5. Book appointments when customer needs physical service
6. Be empathetic and professional

WHEN TO SUGGEST BOOKING APPOINTMENT:
- Customer has serious hardware issues
- Software problems persist after basic troubleshooting
- Data recovery needed
- Network setup required
- Professional diagnosis needed
- Customer specifically asks for appointment

RESPONSE STYLE:
- Keep responses concise and clear
- Use bullet points for steps
- Ask clarifying questions if needed
- Be friendly and professional
- Offer next steps
- Suggest appointment booking when appropriate

If customer asks to book appointment, inform them you'll help collect their information.`;

export async function POST(request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: "Chat is not configured" },
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

    // Build messages array with history
    const history = Array.isArray(conversationHistory)
      ? conversationHistory
      : [];

    const messages = [
      ...history.map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ];

    const response = await getAnthropicClient().messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    });

    const aiResponse =
      response.content[0].type === "text" ? response.content[0].text : "";

    return Response.json({
      response: aiResponse,
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
