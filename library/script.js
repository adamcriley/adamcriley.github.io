class BookReviewWidget {
    constructor() {
        this.books = [];
        this.config = WIDGET_CONFIG;
        this.initializeEventListeners();
        this.loadPersonalLibrary(); // Load your actual books
        this.updateWelcomeMessage();
        this.updateLibraryStats();
    }

    initializeEventListeners() {
        const loadLibraryBtn = document.getElementById('loadLibrary');
        const sendMessageBtn = document.getElementById('sendMessage');
        const chatInput = document.getElementById('chatInput');

        loadLibraryBtn.addEventListener('click', () => this.loadLibrary());
        sendMessageBtn.addEventListener('click', () => this.sendMessage());
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    updateWelcomeMessage() {
        const welcomeElement = document.querySelector('.assistant-message .message-content');
        if (welcomeElement && this.config.welcomeMessage) {
            welcomeElement.textContent = this.config.welcomeMessage;
        }
    }

    async loadLibrary() {
        this.showLoading(true);
        
        try {
            // For GitHub Pages, we'll use the static data
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
            this.loadPersonalLibrary();
            this.renderLibrary();
            this.updateLibraryStats();
        } catch (error) {
            this.showError('Failed to load library: ' + error.message);
        } finally {
            this.showLoading(false);
        }
    }

    loadPersonalLibrary() {
        // Load your actual book data from the books-data.js file
        this.books = MY_BOOKS || [];
        this.renderLibrary();
    }

    updateLibraryStats() {
        const statsElement = document.getElementById('libraryStats');
        if (statsElement && this.books.length > 0) {
            const totalBooks = this.books.length;
            const avgRating = (this.books.reduce((sum, book) => sum + book.rating, 0) / totalBooks).toFixed(1);
            const formats = [...new Set(this.books.map(book => book.format))].filter(Boolean);
            
            statsElement.innerHTML = `
                <span class="stat-item">${totalBooks} books</span>
                <span class="stat-item">⭐ ${avgRating} avg rating</span>
                <span class="stat-item">${formats.join(', ')}</span>
            `;
        }
    }

    renderLibrary() {
        const libraryGrid = document.getElementById('libraryGrid');
        
        if (this.books.length === 0) {
            libraryGrid.innerHTML = `
                <div class="empty-library">
                    <p>No books found in your library.</p>
                    <p>Add your books to the books-data.js file to display them here.</p>
                </div>
            `;
            return;
        }

        libraryGrid.innerHTML = this.books.map(book => `
            <div class="book-card" onclick="bookWidget.selectBook('${book.title.replace(/'/g, "\\'")}')">
                <div class="book-cover">
                    ${book.cover ? `<img src="${book.cover}" alt="${book.title}" onerror="this.parentElement.innerHTML='📖'">` : '📖'}
                </div>
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author}</div>
                <div class="book-rating">⭐ ${book.rating}</div>
                ${book.duration ? `<div class="book-duration">🎧 ${book.duration}</div>` : ''}
                ${book.dateRead ? `<div class="book-date">📅 ${new Date(book.dateRead).toLocaleDateString()}</div>` : ''}
                ${book.format ? `<div class="book-format">${this.getFormatIcon(book.format)} ${book.format}</div>` : ''}
            </div>
        `).join('');
    }

    getFormatIcon(format) {
        const icons = {
            'audiobook': '🎧',
            'ebook': '📱',
            'physical': '📖',
            'kindle': '📱',
            'hardcover': '📚',
            'paperback': '📖'
        };
        return icons[format.toLowerCase()] || '📄';
    }

    selectBook(title) {
        const book = this.books.find(b => b.title === title);
        if (book) {
            const question = `Tell me about "${book.title}" by ${book.author}`;
            document.getElementById('chatInput').value = question;
            this.sendMessage();
        }
    }

    async sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;

        // Add user message to chat
        this.addMessageToChat(message, 'user');
        chatInput.value = '';

        // Show loading
        this.showLoading(true);

        try {
            // For GitHub Pages, we'll use enhanced local responses
            const response = await this.getEnhancedResponse(message);
            this.addMessageToChat(response, 'assistant');
        } catch (error) {
            this.addMessageToChat('Sorry, I encountered an error while processing your question. Please try again.', 'assistant');
        } finally {
            this.showLoading(false);
        }
    }

    async getEnhancedResponse(message) {
        // Simulate thinking time
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const lowerMessage = message.toLowerCase();
        
        // Check if asking about a specific book
        const mentionedBook = this.books.find(book => 
            lowerMessage.includes(book.title.toLowerCase()) || 
            lowerMessage.includes(book.author.toLowerCase())
        );

        if (mentionedBook) {
            let response = `"${mentionedBook.title}" by ${mentionedBook.author} is a ${mentionedBook.genre.toLowerCase()} book with a ${mentionedBook.rating}/5 rating. ${mentionedBook.description}`;
            
            if (mentionedBook.duration) {
                response += ` The audiobook is ${mentionedBook.duration} long.`;
            }
            
            if (mentionedBook.myReview) {
                response += ` My thoughts: ${mentionedBook.myReview}`;
            }
            
            if (mentionedBook.dateRead) {
                response += ` I read this on ${new Date(mentionedBook.dateRead).toLocaleDateString()}.`;
            }
            
            if (mentionedBook.format) {
                response += ` I read this as a ${mentionedBook.format}.`;
            }
            
            response += " Would you like to know more about this book or discuss its themes?";
            return response;
        }

        // Check for recommendation requests
        if (lowerMessage.includes('recommend') || lowerMessage.includes('suggest')) {
            const topRated = [...this.books].sort((a, b) => b.rating - a.rating).slice(0, 3);
            let response = `Based on my library, I'd recommend these highly-rated books: `;
            response += topRated.map(book => `"${book.title}" by ${book.author} (${book.rating}⭐)`).join(', ');
            response += ". ";
            
            // Add genre-specific recommendations
            const genres = [...new Set(this.books.flatMap(book => book.genre.split(', ')))];
            response += `I have books in these genres: ${genres.join(', ')}. Which genre interests you most?`;
            return response;
        }

        // Check for genre questions
        const genres = [...new Set(this.books.flatMap(book => book.genre.split(', ')))];
        const mentionedGenre = genres.find(genre => lowerMessage.includes(genre.toLowerCase()));
        
        if (mentionedGenre) {
            const genreBooks = this.books.filter(book => book.genre.toLowerCase().includes(mentionedGenre.toLowerCase()));
            let response = `I have ${genreBooks.length} ${mentionedGenre} book(s) in my library: `;
            response += genreBooks.map(book => `"${book.title}" by ${book.author} (${book.rating}⭐)`).join(', ');
            
            if (genreBooks.length > 0) {
                const topGenreBook = genreBooks.sort((a, b) => b.rating - a.rating)[0];
                response += `. My highest-rated ${mentionedGenre.toLowerCase()} book is "${topGenreBook.title}" at ${topGenreBook.rating}⭐.`;
                if (topGenreBook.myReview) {
                    response += ` ${topGenreBook.myReview}`;
                }
            }
            return response;
        }

        // Check for statistics questions
        if (lowerMessage.includes('how many') || lowerMessage.includes('total') || lowerMessage.includes('count')) {
            const totalBooks = this.books.length;
            const avgRating = (this.books.reduce((sum, book) => sum + book.rating, 0) / totalBooks).toFixed(1);
            const topGenres = this.getTopGenres();
            const formats = this.getFormatStats();
            
            return `I have ${totalBooks} books in my library with an average rating of ${avgRating}⭐. My most read genres are: ${topGenres.slice(0, 3).map(g => g.genre).join(', ')}. I read in these formats: ${formats.join(', ')}. What would you like to know more about?`;
        }

        // Check for recent reads
        if (lowerMessage.includes('recent') || lowerMessage.includes('latest') || lowerMessage.includes('last')) {
            const recentBooks = this.books
                .filter(book => book.dateRead)
                .sort((a, b) => {
                    const dateA = new Date(a.dateRead);
                    const dateB = new Date(b.dateRead);
                    return dateB - dateA;
                })
                .slice(0, 3);
                
            if (recentBooks.length > 0) {
                let response = "My most recent reads are: ";
                response += recentBooks.map(book => {
                    const date = new Date(book.dateRead).toLocaleDateString();
                    return `"${book.title}" (${date})`;
                }).join(', ');
                response += ". Which one interests you?";
                return response;
            }
        }

        // Default enhanced response
        const totalBooks = this.books.length;
        const topRated = [...this.books].sort((a, b) => b.rating - a.rating)[0];
        const topGenres = this.getTopGenres();
        
        return `I can help you explore my library of ${totalBooks} books! My highest-rated book is "${topRated.title}" (${topRated.rating}⭐). I enjoy reading ${topGenres.slice(0, 2).map(g => g.genre).join(' and ')}. You can ask me about specific books, request recommendations, or discuss themes and genres. What would you like to know?`;
    }

    getTopGenres() {
        const genreCount = {};
        this.books.forEach(book => {
            book.genre.split(', ').forEach(genre => {
                genreCount[genre] = (genreCount[genre] || 0) + 1;
            });
        });
        
        return Object.entries(genreCount)
            .map(([genre, count]) => ({ genre, count }))
            .sort((a, b) => b.count - a.count);
    }

    getFormatStats() {
        const formatCount = {};
        this.books.forEach(book => {
            if (book.format) {
                formatCount[book.format] = (formatCount[book.format] || 0) + 1;
            }
        });
        
        return Object.keys(formatCount).sort((a, b) => formatCount[b] - formatCount[a]);
    }

    addMessageToChat(message, sender) {
        const chatHistory = document.getElementById('chatHistory');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-content">${message}</div>
        `;
        
        chatHistory.appendChild(messageDiv);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    showLoading(show) {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (show) {
            loadingOverlay.classList.add('active');
        } else {
            loadingOverlay.classList.remove('active');
        }
    }

    showError(message) {
        const libraryGrid = document.getElementById('libraryGrid');
        libraryGrid.innerHTML = `
            <div class="error-message">
                <strong>Error:</strong> ${message}
            </div>
        `;
    }

    askSuggestion(question) {
        document.getElementById('chatInput').value = question;
        this.sendMessage();
    }
}

// Initialize the widget when the page loads
let bookWidget;
document.addEventListener('DOMContentLoaded', () => {
    bookWidget = new BookReviewWidget();
});
