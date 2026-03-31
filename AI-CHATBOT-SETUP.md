# 🤖 AI Chatbot Setup Guide

## Overview

Your Bionic Computer website now has an **intelligent AI agent** powered by Anthropic's Claude AI. This agent can:

- Have natural conversations with customers
- Troubleshoot technical issues
- Recommend professional services
- Book appointments when needed
- Provide personalized assistance

---

## Setup Instructions

### Step 1: Get Anthropic API Key

1. Visit https://console.anthropic.com/
2. Sign up or log in with your account
3. Go to **API Keys** section
4. Create a new API key
5. Copy the key (starts with `sk-ant-`)

### Step 2: Add API Key to Environment

1. Create `.env.local` file in your project root
2. Add your API key:
   ```
   ANTHROPIC_API_KEY=your_key_here
   ```
3. Save the file

### Step 3: Install Dependencies

```bash
npm install
```

This installs the Anthropic SDK (`@anthropic-ai/sdk`)

### Step 4: Run the Website

```bash
npm run dev
```

The chatbot will now work with AI intelligence!

---

## How It Works

### User Flow:

```
1. Customer opens website
2. Clicks chat button (bottom-right)
3. Asks a question or describes issue
4. AI Agent processes the message
5. AI provides intelligent response
6. If professional help needed, suggests appointment
7. Customer can book appointment directly
```

### AI Agent Logic:

✅ **Troubleshooting Mode**
- Customer describes technical issue
- AI asks clarifying questions
- Provides step-by-step solutions
- Suggests professional help if needed

✅ **Service Information Mode**
- Customer asks about services
- AI explains all services
- Provides pricing information
- Offers appointment booking

✅ **Appointment Booking Mode**
- Customer needs professional service
- AI collects appointment details
- Books appointment in system
- Sends confirmation

---

## Configuration

### AI Agent System Prompt

The AI is configured with:

**Company Information:**
- Services offered
- Contact information
- Working hours
- Warranty details
- Social media links

**Behavior Guidelines:**
- Be helpful and friendly
- Provide clear solutions
- Know when to suggest professional help
- Maintain professional tone
- Guide customers appropriately

### Customization

To modify AI behavior, edit `src/app/api/chat/route.js`:

```javascript
const systemPrompt = `You are Bionic Computer's support agent...`
```

Change:
- Company information
- Service details
- Support guidelines
- Tone and style

---

## Features

### Intelligent Responses
- Natural language understanding
- Context-aware answers
- Multi-turn conversations
- Personalized assistance

### Appointment Booking
- Easy integration in chat
- Collects all needed info
- Instant confirmation
- Sends to your system

### Conversation History
- Maintains context
- Remembers previous messages
- Better recommendations
- Continuous support

### Error Handling
- Graceful failures
- Fallback support options
- Error messages
- Manual contact info

---

## API Usage & Costs

### Anthropic Pricing

- **Input**: $3 per 1M tokens
- **Output**: $15 per 1M tokens
- Average chat: 200-500 tokens
- Estimated cost: $0.001-$0.005 per chat

### Free Trial

- Anthropic offers free credits for new accounts
- Usually $5-$10 initial credits
- Great for testing

### Monitor Usage

Check your usage at: https://console.anthropic.com/account/usage

---

## Troubleshooting

### API Key Issues

**Problem:** "Invalid API key"
**Solution:**
1. Check key is correct (starts with `sk-ant-`)
2. Verify `.env.local` file exists
3. Restart development server
4. Check Console for errors

### Chatbot Not Responding

**Problem:** "Failed to get response"
**Solution:**
1. Check internet connection
2. Verify API key in `.env.local`
3. Check Anthropic API status
4. Look at browser console for errors

### Slow Responses

**Problem:** Chatbot takes too long to respond
**Solution:**
1. This is normal for first response (1-2 seconds)
2. Check your internet speed
3. Reduce message length
4. Check API status

---

## Best Practices

### 1. API Security
- Never commit `.env.local` to Git
- Use `.env.local` for local development
- Use `.env.production` for production
- Rotate API keys regularly

### 2. Cost Management
- Monitor API usage monthly
- Set usage alerts
- Test with smaller conversations first
- Optimize system prompts

### 3. User Experience
- Keep responses concise
- Ask clarifying questions
- Provide next steps
- Suggest alternatives

### 4. Maintenance
- Update system prompt quarterly
- Monitor conversation logs
- Gather user feedback
- Improve AI responses

---

## Advanced Configuration

### Custom Instructions

Edit system prompt for specific behaviors:

```javascript
// Add company-specific info
"Our latest promotion: ..."

// Add new services
"We now offer: ..."

// Change tone
"Use more technical language..."
```

### Integration

The chatbot API is at `/api/chat`:

```javascript
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    message: "User message",
    conversationHistory: [...]
  })
});
```

### Database Integration

To save conversations:

```javascript
// Add to route.js
const conversation = {
  userId: user.id,
  messages: conversationHistory,
  createdAt: new Date(),
  appointment: appointmentData
};

// Save to database
await db.conversations.create(conversation);
```

---

## Deployment

### Docker

Already configured! Build with:

```bash
docker build -t bionic-computer .
docker run -p 3000:3000 -e ANTHROPIC_API_KEY=your_key bionic-computer
```

### Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Add `ANTHROPIC_API_KEY` in Environment Variables
4. Deploy!

### Environment Variables

**Development:** `.env.local`
**Production:** Set in deployment platform (Vercel, Docker, etc.)

---

## Support

### Getting Help

1. **Anthropic Docs:** https://docs.anthropic.com
2. **API Status:** https://status.anthropic.com
3. **Community:** Discord/Forums
4. **Email Support:** support@anthropic.com

### Common Issues

- API limit exceeded: Upgrade account
- Token limit: Shorten messages
- Slow responses: Check internet
- Wrong answers: Improve system prompt

---

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          ← AI endpoint
│   └── page.jsx
├── components/
│   └── Chatbot.jsx              ← UI component
└── ...

.env.local                        ← API key (create this)
.env.example                      ← Template
```

---

## Next Steps

1. ✅ Add API key to `.env.local`
2. ✅ Install dependencies
3. ✅ Run development server
4. ✅ Test chatbot
5. ✅ Deploy to production
6. ✅ Monitor usage
7. ✅ Optimize based on feedback

---

## Cost Estimation

### Light Usage (10 chats/day)
- Monthly: ~$1-2
- Yearly: ~$20-30

### Medium Usage (50 chats/day)
- Monthly: ~$5-10
- Yearly: ~$60-120

### Heavy Usage (200+ chats/day)
- Monthly: ~$20-50
- Yearly: ~$240-600

---

## Ready to Go!

Your AI chatbot is now intelligent and can help customers like a real support agent would.

**Start using it now:** http://localhost:3000

🚀 **Provide better customer support with AI!**
