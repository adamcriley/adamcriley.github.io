# Book Review Widget

A beautiful, interactive web widget that allows users to browse your personal library (from Goodreads or Audible) and ask questions about your books, with responses powered by Claude AI.

## Features

- 📚 **Library Integration**: Fetch books from Goodreads or Audible
- 🤖 **AI-Powered Chat**: Ask questions about books and get intelligent responses from Claude
- 🎨 **Beautiful UI**: Modern, responsive design with smooth animations
- 📱 **Mobile Friendly**: Works great on all devices
- ⚡ **Fast & Lightweight**: Optimized for performance

## Demo

The widget includes sample book data so you can try it immediately without API keys. Simply open `index.html` in your browser or run the server to see it in action.

## Quick Start

### Option 1: Static Version (No Backend)
1. Open `index.html` directly in your browser
2. The widget will work with sample data and simulated responses

### Option 2: Full Version with Backend
1. Install Node.js (version 14 or higher)
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
5. Add your API keys to `.env` (optional - works with sample data without keys)
6. Start the server:
   ```bash
   npm start
   ```
7. Open http://localhost:3000 in your browser

## Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Claude API Configuration
CLAUDE_API_KEY=your_claude_api_key_here

# Goodreads API Configuration (Optional)
GOODREADS_API_KEY=your_goodreads_api_key_here

# Audible API Configuration (Optional)
AUDIBLE_API_KEY=your_audible_api_key_here

# Server Configuration
PORT=3000
```

### API Keys Setup

#### Claude API Key
1. Sign up at [Anthropic](https://www.anthropic.com/)
2. Get your API key from the dashboard
3. Add it to your `.env` file

#### Goodreads API Key
⚠️ **Note**: The Goodreads API has been deprecated. For production use, you'll need to implement web scraping or use alternative methods.

1. ~~Sign up at [Goodreads Developer](https://www.goodreads.com/api)~~
2. ~~Get your API key~~
3. ~~Add it to your `.env` file~~

#### Audible Integration
⚠️ **Note**: Audible doesn't provide a public API. For production use, you'll need to implement web scraping or use unofficial libraries.

## Usage

### Loading Your Library
1. Select your preferred source (Goodreads or Audible)
2. Click "Load Library" to fetch your books
3. Browse through your book collection

### Asking Questions
- Click on any book to ask about it specifically
- Type questions like:
  - "What's this book about?"
  - "Recommend me something similar to [book title]"
  - "What are your highest-rated books?"
  - "Tell me about books in the psychology genre"

### Sample Questions to Try
- "What are your top-rated books?"
- "Recommend me a fiction book"
- "Tell me about Atomic Habits"
- "What psychology books do you have?"
- "Which book should I read next?"

## Customization

### Styling
Edit `styles.css` to customize the appearance:
- Colors and themes
- Layout and spacing
- Animations and transitions

### Book Data
Modify the sample data in `script.js` or `server.js`:
- Add your own books
- Include book covers (URLs)
- Add more metadata

### AI Responses
Customize the response logic in:
- `script.js` (client-side simulation)
- `server.js` (server-side with Claude API)

## File Structure

```
book-review-widget/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # Frontend JavaScript
├── server.js           # Backend server (optional)
├── package.json        # Node.js dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## API Endpoints

When running the server, these endpoints are available:

- `GET /` - Serve the main widget
- `GET /api/library/goodreads` - Fetch Goodreads library
- `GET /api/library/audible` - Fetch Audible library
- `POST /api/chat` - Chat with Claude about books

## Development

### Running in Development Mode
```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

### Adding New Features
1. **New Library Sources**: Add new API integrations in `server.js`
2. **Enhanced AI**: Modify the Claude prompts for better responses
3. **UI Improvements**: Update `styles.css` and `index.html`
4. **New Functionality**: Extend `script.js` with new features

## Deployment

### Option 1: Static Deployment (GitHub Pages, Netlify, etc.)
1. Upload `index.html`, `styles.css`, and `script-github-pages.js`
2. The widget will work with sample data and simulated AI responses

### Option 2: Vercel Deployment with Real AI Responses

This is the **recommended approach** for getting real Claude AI responses while maintaining easy deployment.

#### Prerequisites
- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Claude API key from [Anthropic](https://console.anthropic.com/)

#### Step-by-Step Deployment Guide

**1. Prepare Your Repository**
```bash
# Clone or fork the repository
git clone [your-repo-url]
cd book-review-widget

# Ensure you have these key files:
# - index.html
# - styles.css  
# - script-github-pages.js
# - api/chat.js (Vercel serverless function)
# - vercel.json (Vercel configuration)
```

**2. Get Your Claude API Key**
- Sign up at [Anthropic Console](https://console.anthropic.com/)
- Create a new API key
- Copy the key (starts with `sk-ant-`)

**3. Deploy to Vercel**

**Option A: Deploy via Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - Variable: `CLAUDE_API_KEY`
   - Value: Your Claude API key
5. Click "Deploy"

**Option B: Deploy via Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel

# Add environment variable
vercel env add CLAUDE_API_KEY
# Enter your Claude API key when prompted

# Redeploy with environment variables
vercel --prod
```

**4. Configure Environment Variables**
In your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `CLAUDE_API_KEY` = `your_claude_api_key_here`
4. Redeploy the project

**5. Update Your Books Data**
Edit `books-data.js` to include your personal library:
```javascript
const booksData = [
    {
        title: "Your Book Title",
        author: "Author Name",
        cover: "BookImages/cover.jpg", // Local image path
        description: "Book description...",
        rating: 4.5,
        categories: ["Fiction", "Mystery"],
        length: "8 hrs 32 mins",
        narrator: "Narrator Name",
        dateAdded: "2024-01-15",
        finished: true
    },
    // Add more books...
];
```

**6. Add Book Cover Images**
1. Create a `BookImages/` folder in your project
2. Add book cover images (recommended: 80x80px)
3. Reference them in your `books-data.js` file
4. Commit and push changes

#### Vercel Configuration Files

The project includes these Vercel-specific files:

**`vercel.json`** - Vercel deployment configuration:
```json
{
  "functions": {
    "api/chat.js": {
      "maxDuration": 30
    }
  },
  "env": {
    "CLAUDE_API_KEY": "@claude_api_key"
  }
}
```

**`api/chat.js`** - Serverless function for Claude API:
- Handles POST requests to `/api/chat`
- Processes chat messages with Claude AI
- Returns intelligent responses about your books

#### How It Works

1. **Frontend**: `script-github-pages.js` sends chat messages to `/api/chat`
2. **Serverless Function**: `api/chat.js` processes the request with Claude API
3. **AI Response**: Claude analyzes your book library and provides intelligent answers
4. **Fallback**: If API fails, falls back to simulated responses

#### Testing Your Deployment

After deployment, test these features:
- Browse your book library
- Click on books to ask about them
- Try these sample questions:
  - "What are your highest-rated books?"
  - "Recommend me a fantasy book"
  - "Tell me about [specific book title]"
  - "What genres do you read most?"

#### Troubleshooting Vercel Deployment

**API Key Issues:**
```bash
# Check if environment variable is set
vercel env ls

# Add missing environment variable
vercel env add CLAUDE_API_KEY

# Redeploy after adding variables
vercel --prod
```

**Function Timeout:**
- Increase timeout in `vercel.json` if needed
- Default is 10s, maximum is 60s for Pro plans

**CORS Issues:**
- The `api/chat.js` includes proper CORS headers
- Ensure your domain is correctly configured

**Debugging:**
```bash
# View function logs
vercel logs [deployment-url]

# Local development with Vercel
vercel dev
```

### Option 3: Traditional Server Deployment (Heroku, Railway, etc.)
1. Deploy all files including `server.js`
2. Set environment variables in your hosting platform
3. Ensure Node.js is available

## Troubleshooting

### Common Issues

**Books not loading:**
- Check your API keys in `.env`
- Verify internet connection
- Check browser console for errors

**Chat not working:**
- Ensure Claude API key is valid
- Check server logs for errors
- Verify the API endpoint is accessible

**Styling issues:**
- Clear browser cache
- Check for CSS conflicts
- Verify all files are properly linked

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers supported
- Internet Explorer not supported

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you encounter issues:
1. Check the troubleshooting section
2. Review browser console errors
3. Verify your API keys and configuration
4. Check that all dependencies are installed

## Future Enhancements

- [ ] Real Goodreads integration (web scraping)
- [ ] Audible integration (web scraping)
- [ ] Book cover image support
- [ ] Reading progress tracking
- [ ] Book recommendations engine
- [ ] Export/import library data
- [ ] Multiple library sources
- [ ] Advanced search and filtering
- [ ] Reading statistics and analytics
- [ ] Social sharing features

---

Enjoy exploring your library with AI assistance! 📚✨
