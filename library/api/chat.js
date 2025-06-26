export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, books } = req.body;

  if (!message || !books) {
    return res.status(400).json({ error: 'Missing message or books data' });
  }

  if (!process.env.CLAUDE_API_KEY) {
    return res.status(500).json({ error: 'Claude API key not configured' });
  }

  try {
    // Create a detailed context about the user's library
    const libraryContext = books.map(book => {
      let bookInfo = `"${book.title}" by ${book.author}`;
      if (book.genre) bookInfo += ` (${book.genre})`;
      if (book.rating) bookInfo += ` - Rating: ${book.rating}/5`;
      if (book.description) bookInfo += ` - ${book.description}`;
      if (book.myReview) bookInfo += ` - Personal review: ${book.myReview}`;
      if (book.dateRead) bookInfo += ` - Read on: ${book.dateRead}`;
      if (book.format) bookInfo += ` - Format: ${book.format}`;
      if (book.duration) bookInfo += ` - Duration: ${book.duration}`;
      return bookInfo;
    }).join('\n');

    const prompt = `You are a helpful assistant discussing a user's personal book library. You should provide engaging, knowledgeable responses about their books, make recommendations from their collection, and discuss themes and topics.

Here is their complete library:
${libraryContext}

User question: "${message}"

Please provide a helpful, conversational response about their books. You can:
- Discuss specific books they've mentioned
- Make recommendations from their existing library
- Compare books in their collection
- Discuss themes, genres, or authors
- Share insights about their reading patterns
- Answer questions about specific titles

Keep your response engaging and personal, as if you're a knowledgeable friend discussing their book collection.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CLAUDE_API_KEY}`,
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', response.status, errorData);
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
      throw new Error('Invalid response format from Claude API');
    }

    res.json({ 
      success: true,
      response: data.content[0].text 
    });

  } catch (error) {
    console.error('Error calling Claude API:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to get response from Claude',
      message: error.message 
    });
  }
}
