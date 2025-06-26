const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Configuration
const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const AUDIBLE_API_KEY = process.env.AUDIBLE_API_KEY;

// Routes

// Serve the main widget page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Load Goodreads library
app.get('/api/library/goodreads', async (req, res) => {
    try {
        // In a real implementation, you would use the Goodreads API
        // Note: Goodreads API is deprecated, you might need to use web scraping or alternative methods
        
        if (!GOODREADS_API_KEY) {
            return res.json({
                success: false,
                message: 'Goodreads API key not configured. Using sample data.',
                books: getSampleGoodreadsBooks()
            });
        }

        // Placeholder for actual Goodreads API call
        // const response = await axios.get(`https://www.goodreads.com/review/list/${userId}.xml`, {
        //     params: {
        //         key: GOODREADS_API_KEY,
        //         v: 2,
        //         shelf: 'read'
        //     }
        // });

        // For now, return sample data
        res.json({
            success: true,
            books: getSampleGoodreadsBooks()
        });

    } catch (error) {
        console.error('Error loading Goodreads library:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to load Goodreads library',
            error: error.message
        });
    }
});

// Load Audible library
app.get('/api/library/audible', async (req, res) => {
    try {
        // In a real implementation, you would use the Audible API or web scraping
        // Note: Audible doesn't have a public API, so you'd need to use web scraping
        
        if (!AUDIBLE_API_KEY) {
            return res.json({
                success: false,
                message: 'Audible API key not configured. Using sample data.',
                books: getSampleAudibleBooks()
            });
        }

        // For now, return sample data
        res.json({
            success: true,
            books: getSampleAudibleBooks()
        });

    } catch (error) {
        console.error('Error loading Audible library:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to load Audible library',
            error: error.message
        });
    }
});

// Chat with Claude about books
app.post('/api/chat', async (req, res) => {
    try {
        const { message, books } = req.body;

        if (!CLAUDE_API_KEY) {
            return res.json({
                success: false,
                message: 'Claude API key not configured. Using simulated response.',
                response: generateIntelligentResponse(message, books)
            });
        }

        // Create context about the user's library
        const libraryContext = books.map(book => 
            `"${book.title}" by ${book.author} (${book.genre}) - ${book.description}`
        ).join('\n');

        const prompt = `You are a helpful assistant discussing a user's personal book library. Here are the books in their library:

${libraryContext}

The user asks: "${message}"

Please provide a helpful, engaging response about their books. You can discuss themes, make recommendations from their library, compare books, or answer questions about specific titles. Keep your response conversational and informative.`;

        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [{
                role: 'user',
                content: prompt
            }]
        }, {
            headers: {
                'Authorization': `Bearer ${CLAUDE_API_KEY}`,
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY
            }
        });

        res.json({
            success: true,
            response: response.data.content[0].text
        });

    } catch (error) {
        console.error('Error calling Claude API:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to get response from Claude',
            response: generateIntelligentResponse(req.body.message, req.body.books)
        });
    }
});

// Helper functions
function getSampleGoodreadsBooks() {
    return [
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            rating: 4.2,
            cover: null,
            description: "A novel about life, death, and all the lives in between.",
            genre: "Fiction, Philosophy"
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            rating: 4.4,
            cover: null,
            description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
            genre: "Self-Help, Psychology"
        },
        {
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            rating: 4.3,
            cover: null,
            description: "A reclusive Hollywood icon finally tells her story.",
            genre: "Fiction, Romance"
        },
        {
            title: "Educated",
            author: "Tara Westover",
            rating: 4.1,
            cover: null,
            description: "A Memoir about education, family, and the struggle for self-invention.",
            genre: "Memoir, Biography"
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            rating: 4.3,
            cover: null,
            description: "Timeless lessons on wealth, greed, and happiness.",
            genre: "Finance, Psychology"
        },
        {
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            rating: 4.2,
            cover: null,
            description: "A mystery and coming-of-age story set in the marshes of North Carolina.",
            genre: "Fiction, Mystery"
        }
    ];
}

function getSampleAudibleBooks() {
    return [
        {
            title: "Becoming",
            author: "Michelle Obama",
            rating: 4.5,
            cover: null,
            description: "A memoir by the former First Lady of the United States.",
            genre: "Memoir, Biography",
            duration: "19 hrs and 3 mins"
        },
        {
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            rating: 4.2,
            cover: null,
            description: "A Counterintuitive Approach to Living a Good Life",
            genre: "Self-Help, Philosophy",
            duration: "5 hrs and 17 mins"
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            rating: 4.4,
            cover: null,
            description: "A Brief History of Humankind",
            genre: "History, Anthropology",
            duration: "15 hrs and 17 mins"
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            rating: 4.1,
            cover: null,
            description: "A magical story about following your dreams.",
            genre: "Fiction, Philosophy",
            duration: "4 hrs and 10 mins"
        }
    ];
}

function generateIntelligentResponse(message, books) {
    const lowerMessage = message.toLowerCase();
    
    // Check if asking about a specific book
    const mentionedBook = books.find(book => 
        lowerMessage.includes(book.title.toLowerCase()) || 
        lowerMessage.includes(book.author.toLowerCase())
    );

    if (mentionedBook) {
        return `"${mentionedBook.title}" by ${mentionedBook.author} is a ${mentionedBook.genre.toLowerCase()} book with a ${mentionedBook.rating}/5 rating. ${mentionedBook.description} ${mentionedBook.duration ? `The audiobook is ${mentionedBook.duration} long.` : ''} Would you like to know more about this book or discuss its themes?`;
    }

    // Check for recommendation requests
    if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
        const topRated = books.sort((a, b) => b.rating - a.rating).slice(0, 3);
        return `Based on your library, I'd recommend these highly-rated books: ${topRated.map(book => `"${book.title}" by ${book.author} (${book.rating}⭐)`).join(', ')}. Which genre interests you most?`;
    }

    // Check for genre questions
    const genres = [...new Set(books.flatMap(book => book.genre.split(', ')))];
    const mentionedGenre = genres.find(genre => lowerMessage.includes(genre.toLowerCase()));
    
    if (mentionedGenre) {
        const genreBooks = books.filter(book => book.genre.toLowerCase().includes(mentionedGenre.toLowerCase()));
        return `You have ${genreBooks.length} ${mentionedGenre} book(s) in your library: ${genreBooks.map(book => `"${book.title}"`).join(', ')}. ${genreBooks[0] ? `"${genreBooks[0].title}" is particularly well-rated at ${genreBooks[0].rating}⭐.` : ''}`;
    }

    // Default response
    return `I can help you explore your library of ${books.length} books! You can ask me about specific books, request recommendations, or discuss themes and genres. What would you like to know?`;
}

// Start server
app.listen(PORT, () => {
    console.log(`Book Review Widget server running on http://localhost:${PORT}`);
    console.log('Make sure to set up your environment variables:');
    console.log('- CLAUDE_API_KEY: Your Claude API key');
    console.log('- GOODREADS_API_KEY: Your Goodreads API key (optional)');
    console.log('- AUDIBLE_API_KEY: Your Audible API key (optional)');
});
