# Real Claude API Integration Options for GitHub Pages

Since GitHub Pages only supports static files, here are the best ways to add real Claude API integration:

## 🚀 Option 1: Vercel Serverless Functions (Recommended)

**Setup:**
1. Deploy your widget to Vercel (imports from GitHub automatically)
2. Create API endpoints as serverless functions
3. Keep your API keys secure on the server

**File: `api/chat.js`**
```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, books } = req.body;
  
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`,
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `You are discussing a user's personal book library. Here are their books:
${books.map(book => `"${book.title}" by ${book.author} - ${book.description}`).join('\n')}

User question: "${message}"

Provide a helpful response about their books.`
        }]
      })
    });

    const data = await response.json();
    res.json({ response: data.content[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response' });
  }
}
```

**Environment Variables:**
```
CLAUDE_API_KEY=your_claude_api_key_here
```

**Deploy Steps:**
1. Push your code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Your widget will be live with real Claude integration!

## 🌐 Option 2: Netlify Functions

**File: `netlify/functions/chat.js`**
```javascript
exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message, books } = JSON.parse(event.body);
  
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`,
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Discuss the user's book library. Books: ${books.map(b => b.title).join(', ')}. Question: ${message}`
        }]
      })
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ response: data.content[0].text })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to get response' })
    };
  }
};
```

## ⚡ Option 3: Cloudflare Workers

**File: `worker.js`**
```javascript
export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const { message, books } = await request.json();
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.CLAUDE_API_KEY}`,
          'Content-Type': 'application/json',
          'x-api-key': env.CLAUDE_API_KEY
        },
        body: JSON.stringify({
          model: 'claude-3-sonnet-20240229',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `User's library: ${books.map(b => b.title).join(', ')}. Question: ${message}`
          }]
        })
      });

      const data = await response.json();
      return Response.json({ response: data.content[0].text });
    } catch (error) {
      return Response.json({ error: 'Failed to get response' }, { status: 500 });
    }
  }
};
```

## 🔧 Option 4: Update Your Widget for API Integration

**Modified `script-github-pages.js`:**
```javascript
async getClaudeResponse(message) {
    try {
        // Try calling your serverless function
        const response = await fetch('/api/chat', { // or your Vercel/Netlify endpoint
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                books: this.books
            })
        });
        
        const data = await response.json();
        return data.response;
    } catch (error) {
        // Fallback to simulated response
        console.log('API not available, using simulated response');
        return this.generateIntelligentResponse(message);
    }
}
```

## 📋 Comparison

| Platform | Pros | Cons | Setup Difficulty |
|----------|------|------|------------------|
| **Vercel** | Easy GitHub integration, generous free tier | Learning curve for serverless | ⭐⭐ |
| **Netlify** | Simple deployment, good docs | Smaller free tier | ⭐⭐ |
| **Cloudflare** | Fast global edge network | More complex setup | ⭐⭐⭐ |
| **GitHub Pages + External API** | Keep current hosting | Need separate API service | ⭐⭐⭐⭐ |

## 🎯 Recommended Approach

**For easiest setup:** Use **Vercel**
1. Import your GitHub repo to Vercel
2. Add the `api/chat.js` file
3. Set environment variables
4. Deploy!

Your widget will have:
- ✅ Real Claude AI responses
- ✅ Secure API key storage
- ✅ Fast global CDN
- ✅ Automatic deployments from GitHub
- ✅ Free tier that's generous for personal use

## 🔒 Security Benefits

- API keys stored securely on server
- No client-side exposure of credentials
- CORS handled by your serverless function
- Rate limiting can be implemented

Would you like me to help you set up any of these options?
