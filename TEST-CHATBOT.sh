#!/bin/bash

echo "🤖 Testing Bionic Computer AI Chatbot..."
echo ""
echo "Sending test message to AI..."
echo ""

curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "My computer is running very slow, what should I do?",
    "conversationHistory": []
  }' 2>/dev/null | jq .

echo ""
echo "✅ Test complete!"
