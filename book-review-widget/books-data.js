// Your actual Audible library data
const booksData = [
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoyevsky",
    "narrator": "Will Poulter",
    "length": "22h 27m",
    "rating": 4.68,
    "categories": [
      "Classics",
      "Literary Fiction"
    ],
    "description": "Often considered one of the first ever psychological thrillers, Crime and Punishment is a gripping tale of a poverty-stricken young man in Saint Petersburg, Russia, who hatches a plan to kill someone for money.",
    "finished": false,
    "dateAdded": "2025-06-16",
    "cover": "BookImages/5131S9IsOrL_80x80.jpg"
  },
  {
    "title": "Towers of Heaven (The Complete Series)",
    "author": "Cameron Milan",
    "narrator": "Steve Campbell",
    "length": "28h 49m",
    "rating": 4.33,
    "categories": [
      "Action & Adventure"
    ],
    "description": "One day, six towers appear on Earth.",
    "finished": true,
    "dateAdded": "2025-06-02",
    "cover": "BookImages/51+k5jUUZwL_80x80.jpg"
  },
  {
    "title": "Shadow Card Guardian",
    "author": "Kacey Ezell",
    "narrator": "Anna Delphine",
    "length": "9h 59m",
    "rating": 4.75,
    "categories": [
      "Fantasy",
      "Steampunk"
    ],
    "description": "Dania Ellis has faced warzones and Emergency Room chaos—but nothing prepared her for Drop Night.",
    "finished": true,
    "dateAdded": "2025-05-27",
    "cover": "BookImages/51JRocLrzuL_80x80.jpg"
  },
  {
    "title": "Ascension",
    "author": "Kerberos",
    "narrator": "Jeff Hays",
    "length": "9h 37m",
    "rating": 4.62,
    "categories": [
      "Epic"
    ],
    "description": "Sometimes, life’s greatest lessons are found in failure… With the circumvention of Aurora’s grim fate—and a heavy heart at what’d been required to avoid it—Rowan and his budding Party take their first steps toward realizing their goals; Aurora, a brilliant young woman, is determined to uncover the truths behind her father’s disappearance.",
    "finished": true,
    "dateAdded": "2025-05-23",
    "cover": "BookImages/51nhQDJdjjL_80x80.jpg"
  },
  {
    "title": "A Summoner Awakens: Origins: (A Deck Building LitRPG)",
    "author": "Kerberos",
    "narrator": "Jeff Hays",
    "length": "16h 10m",
    "rating": 4.77,
    "categories": [
      "Action & Adventure",
      "Dragons & Mythical Creatures",
      "Cyberpunk"
    ],
    "description": "Essence to gather.",
    "finished": true,
    "dateAdded": "2025-05-17",
    "cover": "BookImages/51m2T7cei1L_80x80.jpg"
  },
  {
    "title": "Card Mage: Omnibus",
    "author": "Eden Redd",
    "narrator": "Sierra Kline",
    "length": "34h 11m",
    "rating": 4.61,
    "categories": [
      "Epic"
    ],
    "description": "Card Mage: Omnibus is books 1 through 3 of the Card Mage series.",
    "finished": true,
    "dateAdded": "2025-05-15",
    "cover": "BookImages/51oDdn3QIdL_80x80.jpg"
  },
  {
    "title": "All the Skills 5: A Deck-Building LitRPG",
    "author": "Honour Rae",
    "narrator": "Luke Daniels",
    "length": "11h 12m",
    "rating": 4.78,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Dragons & Mythical Creatures",
      "Paranormal"
    ],
    "description": "To gain a formidable new card, Arthur must brave the unknown in a hive notorious for its evil side, as this thrilling deck-building fantasy continues.",
    "finished": true,
    "dateAdded": "2025-05-12",
    "cover": "BookImages/51vecJKXWvL_80x80.jpg"
  },
  {
    "title": "All the Skills 4: A Deck-Building LitRPG",
    "author": "Honour Rae",
    "narrator": "Luke Daniels",
    "length": "15h 33m",
    "rating": 4.86,
    "categories": [
      "Action & Adventure",
      "Dragons & Mythical Creatures",
      "Paranormal"
    ],
    "description": "Using a new Legendary treasure-seeking card, Arthur and Brixaby travel to an unknown kingdom in search of a way to defeat the scourglings.",
    "finished": true,
    "dateAdded": "2025-05-02",
    "cover": "BookImages/51be3Ru509L_80x80.jpg"
  },
  {
    "title": "All the Skills 3: A Deck-Building LitRPG",
    "author": "Honour Rae",
    "narrator": "Luke Daniels",
    "length": "15h 22m",
    "rating": 4.76,
    "categories": [
      "Action & Adventure",
      "Dragons & Mythical Creatures",
      "Paranormal"
    ],
    "description": "Where power is measured in cards, Arthur stands among the elite as a Legendary card wielder now forever linked to a frighteningly powerful dragon.",
    "finished": true,
    "dateAdded": "2025-05-02",
    "cover": "BookImages/51M+c41eAvL_80x80.jpg"
  },
  {
    "title": "All the Skill 2: A Deck-Building LitRPG",
    "author": "Honour Rae",
    "narrator": "Luke Daniels",
    "length": "16h 32m",
    "rating": 4.81,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Cyberpunk",
      "Paranormal"
    ],
    "description": "With his new card, Master of Body Enhancement, slotted in his heart deck, Arthur has his hands full discovering how he can best pair it with his powerful Master of Skills card.",
    "finished": true,
    "dateAdded": "2025-05-02",
    "cover": "BookImages/51bTCZC5rJL_80x80.jpg"
  },
  {
    "title": "All the Skills: A Deck-Building LitRPG",
    "author": "Honour Rae",
    "narrator": "Luke Daniels",
    "length": "13h 38m",
    "rating": 4.81,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Sword & Sorcery"
    ],
    "description": "For a boy coming of age and discovering a magical self-reliance and new powers for every occasion, the future is in the cards, in this fantasy adventure.",
    "finished": true,
    "dateAdded": "2025-04-29",
    "cover": "BookImages/51IRezk66nL_80x80.jpg"
  },
  {
    "title": "Demon Card Enforcer 2",
    "author": "John Stovall",
    "narrator": "Justin Thomas James, Jeff Hays, Tiana Camacho, Ryan H. Reid",
    "length": "10h 53m",
    "rating": 4.87,
    "categories": [
      "Gaslamp"
    ],
    "description": "One family down, four to go.",
    "finished": true,
    "dateAdded": "2025-04-23",
    "cover": "BookImages/51RWkjokg7L_80x80.jpg"
  },
  {
    "title": "Stuck",
    "author": "Chris Grabenstein",
    "narrator": "Mark Sanderlin, Elizabeth Hess, Oliver Wyman, Farah Bala, Rita Wolf, Caroline Grogan, Cynthia Darlow, Mateo D'Amato, J.J. Myers, Neil Hellegers, Genesis Oliver, Chris Grabenstein",
    "length": "3h 12m",
    "rating": 4.34,
    "categories": [
      "Social & Life Skills",
      "Fantasy & Magic"
    ],
    "description": "Peter Pan meets Groundhog Day when 11-year-old Jackson makes a birthday wish about never growing up that mysteriously comes true.",
    "finished": true,
    "dateAdded": "2025-03-06",
    "cover": "BookImages/51GKoszPFmL_80x80.jpg"
  },
  {
    "title": "Onyx Storm",
    "author": "Rebecca Yarros",
    "narrator": "Jasmin Walker, Justis Bolding, Teddy Hamilton, Rebecca Soler",
    "length": "23h 52m",
    "rating": 4.68,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Fantasy"
    ],
    "description": "After nearly eighteen months at Basgiath War College, Violet Sorrengail knows there’s no more time for lessons.",
    "finished": true,
    "dateAdded": "2025-02-01",
    "cover": "BookImages/51jQy499JiL_80x80.jpg"
  },
  {
    "title": "Determined",
    "author": "Robert M. Sapolsky",
    "narrator": "Kaleo Griffith",
    "length": "13h 42m",
    "rating": 4.39,
    "categories": [
      "Philosophy",
      "Biology"
    ],
    "description": "The instant New York Times bestseller “Excellent…Outstanding for its breadth of research, the liveliness of the writing, and the depth of humanity it conveys.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/41H6RyCz-dL_80x80.jpg"
  },
  {
    "title": "The Republic of Thieves",
    "author": "Scott Lynch",
    "narrator": "Michael Page",
    "length": "26h 38m",
    "rating": 4.64,
    "categories": [
      "Epic",
      "Adventure"
    ],
    "description": "New York Times Best Seller “A bright new voice in the fantasy genre” (George R.",
    "finished": false,
    "dateAdded": "",
    "cover": "BookImages/51TPwIwJ4FL_80x80.jpg"
  },
  {
    "title": "Demon Card Enforcer",
    "author": "John Stovall",
    "narrator": "Justin Thomas James, Jeff Hays, Tiana Camacho",
    "length": "11h 36m",
    "rating": 4.47,
    "categories": [
      "Fantasy",
      "Steampunk"
    ],
    "description": "It’s Drop Night, the one night every decade when the gods hand out cards to a lucky few.",
    "finished": true,
    "dateAdded": "2025-01-23",
    "cover": "BookImages/519xVGn8enL_80x80.jpg"
  },
  {
    "title": "Red Seas Under Red Skies",
    "author": "Scott Lynch",
    "narrator": "Michael Page",
    "length": "25h 56m",
    "rating": 4.72,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Humorous",
      "Literature & Fiction"
    ],
    "description": "In his highly acclaimed debut, The Lies of Locke Lamora, Scott Lynch took us on an adrenaline-fueled adventure with a band of daring thieves led by con artist extraordinaire Locke Lamora.",
    "finished": false,
    "dateAdded": "2025-01-23",
    "cover": "BookImages/61njpB0VpIL_80x80.jpg"
  },
  {
    "title": "Into Thin Air",
    "author": "Jon Krakauer",
    "narrator": "Philip Franklin",
    "length": "9h 8m",
    "rating": 4.66,
    "categories": [
      "Adventurers, Explorers & Survival",
      "Sports",
      "Outdoors & Nature",
      "Adventure Travel",
      "Travel Writing & Commentary"
    ],
    "description": "When Jon Krakauer reached the summit of Mt.",
    "finished": true,
    "dateAdded": "2024-12-29",
    "cover": "BookImages/51Rqs7AbmcL_80x80.jpg"
  },
  {
    "title": "Design for How People Think",
    "author": "John Whalen PhD",
    "narrator": "Mitchell Dorian",
    "length": "4h 43m",
    "rating": 4.58,
    "categories": [
      "Consumer Behavior & Market Research",
      "Marketing",
      "Business Development & Entrepreneurship"
    ],
    "description": "User experience doesn’t happen on a screen; it happens in the mind, and the experience is multidimensional and multisensory.",
    "finished": true,
    "dateAdded": "2024-12-11",
    "cover": "BookImages/51Uv55US8YS_80x80.jpg"
  },
  {
    "title": "Wind and Truth",
    "author": "Brandon Sanderson",
    "narrator": "Kate Reading, Michael Kramer",
    "length": "62h 48m",
    "rating": 4.62,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "\"The endearing husband-and-wife team of Kate Reading and Michael Kramer continue their stunning narration of the Stormlight Archive series.",
    "finished": false,
    "dateAdded": "2024-12-06",
    "cover": "BookImages/51bCtVYcLHL_80x80.jpg"
  },
  {
    "title": "Wicked",
    "author": "Gregory Maguire",
    "narrator": "John McDonough",
    "length": "19h 42m",
    "rating": 3.96,
    "categories": [
      "Classics",
      "Epic",
      "Fairy Tales",
      "Contemporary"
    ],
    "description": "Heralded as an instant classic of fantasy literature, Maguire has written a wonderfully imaginative retelling of The Wizard of Oz told from the Wicked Witch's point of view.",
    "finished": true,
    "dateAdded": "2024-11-30",
    "cover": "BookImages/51lrEQqx4cL_80x80.jpg"
  },
  {
    "title": "The Shadow of the Torturer",
    "author": "Gene Wolfe",
    "narrator": "Jonathan Davis",
    "length": "12h 7m",
    "rating": 3.97,
    "categories": [
      "Epic",
      "Science Fiction"
    ],
    "description": "The Shadow of the Torturer is the first volume in the four-volume epic, the tale of a young Severian, an apprentice to the Guild of Torturers on the world called Urth, exiled for committing the ultimate sin of his profession - showing mercy towards his victim.",
    "finished": true,
    "dateAdded": "2024-10-16",
    "cover": "BookImages/6156wOmu48L_80x80.jpg"
  },
  {
    "title": "A Wind in the Door",
    "author": "Madeleine L'Engle",
    "narrator": "Jennifer Ehle",
    "length": "5h 27m",
    "rating": 4.5,
    "categories": [
      "Fantasy & Magic",
      "Classics",
      "Science Fiction"
    ],
    "description": "Meg Murry can't help but be worried when her six-year-old brother, Charles Wallace, announces there are dragons in the vegetable garden.",
    "finished": true,
    "dateAdded": "2024-09-10",
    "cover": "BookImages/51LUsO7R5dL_80x80.jpg"
  },
  {
    "title": "Candide (Gildan Media Edition)",
    "author": "Voltaire",
    "narrator": "Don Hagen",
    "length": "3h 42m",
    "rating": 4.39,
    "categories": [
      "Classics",
      "Psychological",
      "Satire"
    ],
    "description": "Candide is a French satire written in 1759 by Voltaire, a philosopher of the Age of Enlightenment.",
    "finished": true,
    "dateAdded": "2024-07-21",
    "cover": "BookImages/61sQ99fWVXL_80x80.jpg"
  },
  {
    "title": "Sunbringer",
    "author": "Hannah Kaner",
    "narrator": "Kit Griffiths",
    "length": "16h 50m",
    "rating": 4.44,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Friendship"
    ],
    "description": "“Brilliant mythology-inspired world-building paves the foundation for Kaner’s fantasy adventure, but it’s the fully realized ensemble cast that, ultimately, makes the series so memorable.",
    "finished": true,
    "dateAdded": "2024-07-20",
    "cover": "BookImages/51S8QdFXl5L_80x80.jpg"
  },
  {
    "title": "The Complete Essays of Montaigne",
    "author": "Michel Eyquem de Montaigne, Donald M. Frame - translator",
    "narrator": "Christopher Lane",
    "length": "49h 34m",
    "rating": 4.58,
    "categories": [
      "Philosophy",
      "Essays",
      "European",
      "Consciousness & Thought"
    ],
    "description": "“A faithful translation is rare; a translation which preserves intact the original text is very rare; a perfect translation of Montaigne appears impossible.",
    "finished": true,
    "dateAdded": "2024-04-23",
    "cover": "BookImages/61sdaAI0fgL_80x80.jpg"
  },
  {
    "title": "Flowers for Algernon",
    "author": "Daniel Keyes",
    "narrator": "Jeff Woodman",
    "length": "8h 58m",
    "rating": 4.6,
    "categories": [
      "Fantasy",
      "Science Fiction"
    ],
    "description": "Charlie Gordon knows that he isn't very bright.",
    "finished": true,
    "dateAdded": "2024-03-28",
    "cover": "BookImages/41Y1zltUL9L_80x80.jpg"
  },
  {
    "title": "Crooked Kingdom",
    "author": "Leigh Bardugo",
    "narrator": "Roger Clark, Jay Snyder, Elizabeth Evans, Fred Berman, Brandon Rubin, Kevin T. Collins, Lauren Fortgang, Peter Ganim",
    "length": "17h 58m",
    "rating": 4.73,
    "categories": [
      "Fantasy",
      "Suspense"
    ],
    "description": "The highly anticipated sequel to the thrilling New York Times best-selling Six of Crows.",
    "finished": true,
    "dateAdded": "2024-02-21",
    "cover": "BookImages/51iVBOZ8fwL_80x80.jpg"
  },
  {
    "title": "The Fifth Season",
    "author": "N. K. Jemisin",
    "narrator": "Robin Miles",
    "length": "15h 27m",
    "rating": 4.41,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Action & Adventure",
      "Epic",
      "Magical Realism",
      "African American",
      "Dystopian"
    ],
    "description": "At the end of the world, a woman must hide her secret power and find her kidnapped daughter in this \"intricate and extraordinary\" Hugo Award winning novel of power, oppression, and revolution.",
    "finished": false,
    "dateAdded": "2024-02-21",
    "cover": "BookImages/61ghIRKXuSL_80x80.jpg"
  },
  {
    "title": "The Dragon's Blade Trilogy",
    "author": "Michael R. Miller",
    "narrator": "Dave Cruse",
    "length": "45h 58m",
    "rating": 4.5,
    "categories": [
      "Epic",
      "Dragons & Mythical Creatures",
      "Sword & Sorcery"
    ],
    "description": "An Amazon Overall Top 100 best-selling title! Includes all three books in the Dragon's Blade Trilogy.",
    "finished": true,
    "dateAdded": "2024-02-04",
    "cover": "BookImages/51f1IKkwENS_80x80.jpg"
  },
  {
    "title": "Godkiller",
    "author": "Hannah Kaner",
    "narrator": "Kit Griffiths",
    "length": "12h 54m",
    "rating": 4.4,
    "categories": [
      "Action & Adventure",
      "Friendship",
      "Coming of Age"
    ],
    "description": "INSTANT #1 INTERNATIONAL BESTSELLER AND USA TODAY BESTSELLER! “An epic fantasy odyssey begins.",
    "finished": true,
    "dateAdded": "2024-01-29",
    "cover": "BookImages/51xef64FkIL_80x80.jpg"
  },
  {
    "title": "Iron Flame",
    "author": "Rebecca Yarros",
    "narrator": "Rebecca Soler, Teddy Hamilton",
    "length": "28h 16m",
    "rating": 4.76,
    "categories": [
      "Epic"
    ],
    "description": "“The first year is when some of us lose our lives.",
    "finished": true,
    "dateAdded": "2023-12-16",
    "cover": "BookImages/61ECOUEnoTL_80x80.jpg"
  },
  {
    "title": "Fourth Wing",
    "author": "Rebecca Yarros",
    "narrator": "Rebecca Soler, Teddy Hamilton",
    "length": "21h 22m",
    "rating": 4.68,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Dragons & Mythical Creatures"
    ],
    "description": "Now with two bonus chapters read by Teddy Hamilton.",
    "finished": true,
    "dateAdded": "2023-11-18",
    "cover": "BookImages/61D7uTS7-TL_80x80.jpg"
  },
  {
    "title": "A Gentleman in Moscow",
    "author": "Amor Towles",
    "narrator": "Nicholas Guy Smith",
    "length": "17h 52m",
    "rating": 4.68,
    "categories": [
      "Literary Fiction",
      "Political",
      "Historical Fiction"
    ],
    "description": "The mega-bestseller with more than 2 million readers, soon to be a Showtime/Paramount series starring Ewan McGregor as Count Alexander Rostov From the #1 New York Times-bestselling author of The Lincoln Highway and Rules of Civility, a beautifully transporting novel about a man who is ordered to spend the rest of his life inside a luxury hotel In 1922, Count Alexander Rostov is deemed an unrepentant aristocrat by a Bolshevik tribunal, and is sentenced to house arrest in the Metropol, a grand hotel across the street from the Kremlin.",
    "finished": true,
    "dateAdded": "2023-10-21",
    "cover": "BookImages/512InJnw5BL_80x80.jpg"
  },
  {
    "title": "User Story Mapping",
    "author": "Jeff Patton, Peter Economy - foreword",
    "narrator": "Roy McCrerey",
    "length": "8h 19m",
    "rating": 4.58,
    "categories": [
      "Programming & Software Development"
    ],
    "description": "User story mapping is a valuable tool for software development, once you understand why and how to use it.",
    "finished": true,
    "dateAdded": "2023-09-22",
    "cover": "BookImages/51p99PPnqPL_80x80.jpg"
  },
  {
    "title": "Hell Bent",
    "author": "Leigh Bardugo",
    "narrator": "Lauren Fortgang, Michael David Axtell",
    "length": "16h 16m",
    "rating": 4.64,
    "categories": [
      "Paranormal",
      "Occult",
      "Supernatural"
    ],
    "description": "Long-listed, Barnes and Noble Best New Books of the Year, 2023 \"The magic and violence of 'Hell Bent' comes to life in audiobook form.",
    "finished": true,
    "dateAdded": "2023-06-15",
    "cover": "BookImages/41EThaWgl1L_80x80.jpg"
  },
  {
    "title": "A Prayer for Owen Meany",
    "author": "John Irving",
    "narrator": "Joe Barrett",
    "length": "27h 19m",
    "rating": 4.48,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Christian Fiction"
    ],
    "description": "Earphones Award Winner (AudioFile Magazine)  Of all of John Irving's books, this is the one that lends itself best to audio.",
    "finished": true,
    "dateAdded": "2023-05-18",
    "cover": "BookImages/51UhFL5A3mL_80x80.jpg"
  },
  {
    "title": "Dawnshard",
    "author": "Brandon Sanderson",
    "narrator": "Kate Reading, Michael Kramer",
    "length": "7h 5m",
    "rating": 4.85,
    "categories": [
      "Epic",
      "Sea Adventures"
    ],
    "description": "From Brandon Sanderson—author of the #1 New York Times bestselling Stormlight Archive and its fourth massive installment, Rhythm of War—comes a new hefty novella, Dawnshard.",
    "finished": true,
    "dateAdded": "2023-05-18",
    "cover": "BookImages/51oUwcEc9UL_80x80.jpg"
  },
  {
    "title": "The Stand",
    "author": "Stephen King",
    "narrator": "Grover Gardner",
    "length": "47h 47m",
    "rating": 4.69,
    "categories": [
      "Fantasy",
      "Suspense",
      "Horror",
      "Post-Apocalyptic"
    ],
    "description": "This is the way the world ends: with a nanosecond of computer error in a Defense Department laboratory and a million casual contacts that form the links in a chain letter of death.",
    "finished": true,
    "dateAdded": "2023-05-18",
    "cover": "BookImages/41WNRIBlxJL_80x80.jpg"
  },
  {
    "title": "A Little Hatred",
    "author": "Joe Abercrombie",
    "narrator": "Steven Pacey",
    "length": "20h 20m",
    "rating": 4.76,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Historical"
    ],
    "description": "The New York Times best-selling first book in Joe Abercrombie's The Age of Madness Trilogy where the age of the machine dawns, but the age of magic refuses to die.",
    "finished": true,
    "dateAdded": "2023-05-18",
    "cover": "BookImages/61u1vYY6gaL_80x80.jpg"
  },
  {
    "title": "First, Break All the Rules",
    "author": "Marcus Buckingham, Gallup Press, Jim Harter - foreword",
    "narrator": "Mel Foster",
    "length": "9h 51m",
    "rating": 4.47,
    "categories": [
      "Leadership",
      "Management",
      "Motivation & Self-Improvement",
      "Career Success",
      "Entrepreneurship"
    ],
    "description": "Gallup presents the remarkable findings of its revolutionary study of more than 80,000 managers in First, Break All the Rules, revealing what the world’s greatest managers do differently.",
    "finished": true,
    "dateAdded": "2023-02-15",
    "cover": "BookImages/51paLjBJGLL_80x80.jpg"
  },
  {
    "title": "Half Bad",
    "author": "Sally Green",
    "narrator": "Carl Prekopp",
    "length": "8h 33m",
    "rating": 4.41,
    "categories": [
      "Violence",
      "Paranormal",
      "Sword & Sorcery"
    ],
    "description": "The inspiration for the Netflix series The Bastard Son & The Devil Himself “An enthralling fantasy in the Harry Potter tradition.",
    "finished": true,
    "dateAdded": "2023-01-22",
    "cover": "BookImages/41q2y0Q7ClL_80x80.jpg"
  },
  {
    "title": "The Making of a Manager",
    "author": "Julie Zhuo",
    "narrator": "Karissa Vacker, Julie Zhuo",
    "length": "7h 32m",
    "rating": 4.58,
    "categories": [
      "Management",
      "Motivation & Self-Improvement"
    ],
    "description": "Congratulations, you're a manager! After you pop the champagne, accept the shiny new title, and step into this thrilling next chapter of your career, the truth descends like a fog: You don't really know what you're doing.",
    "finished": true,
    "dateAdded": "2023-01-17",
    "cover": "BookImages/412QOSJ-DOL_80x80.jpg"
  },
  {
    "title": "Ninth House",
    "author": "Leigh Bardugo",
    "narrator": "Lauren Fortgang, Michael David Axtell",
    "length": "16h 22m",
    "rating": 4.46,
    "categories": [
      "Paranormal",
      "Occult",
      "Supernatural"
    ],
    "description": "From the author of Shadow and Bone, now a hit NETFLIX series.",
    "finished": true,
    "dateAdded": "2023-01-17",
    "cover": "BookImages/410tY-Sm3OL_80x80.jpg"
  },
  {
    "title": "Ulysses",
    "author": "James Joyce",
    "narrator": "Jim Norton",
    "length": "27h 16m",
    "rating": 3.85,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Psychological"
    ],
    "description": "Ulysses is regarded by many as the single most important novel of the 20th century.",
    "finished": true,
    "dateAdded": "2023-01-17",
    "cover": "BookImages/51WbIWV9PSL_80x80.jpg"
  },
  {
    "title": "Plato at the Googleplex",
    "author": "Rebecca Goldstein",
    "narrator": "Dennis Holland",
    "length": "16h 43m",
    "rating": 4.17,
    "categories": [
      "Philosophy",
      "Ethics & Morality",
      "Greek & Roman"
    ],
    "description": "Is philosophy obsolete? Are the ancient questions still relevant in the age of cosmology and neuroscience, not to mention crowd-sourcing and cable news? The acclaimed philosopher and novelist Rebecca Newberger Goldstein provides a dazzlingly original plunge into the drama of philosophy, revealing its hidden role in today’s debates on religion, morality, politics, and science.",
    "finished": true,
    "dateAdded": "2022-09-21",
    "cover": "BookImages/51Nys7G4T0L_80x80.jpg"
  },
  {
    "title": "The Metamorphosis and Other Stories",
    "author": "Franz Kafka",
    "narrator": "George Guidall",
    "length": "8h 41m",
    "rating": 4.28,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Psychological",
      "Short Stories"
    ],
    "description": "In the bizarre world of Franz Kafka, salesmen turn into giant bugs, apes give lectures at college academies, and nightmares probe the mysteries of modern humanity’s unhappiness.",
    "finished": true,
    "dateAdded": "2022-09-21",
    "cover": "BookImages/417r-acjbKL_80x80.jpg"
  },
  {
    "title": "East of Eden",
    "author": "John Steinbeck",
    "narrator": "Richard Poe",
    "length": "25h 23m",
    "rating": 4.77,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Sagas"
    ],
    "description": "Oprah Book Club, Winner This sprawling and often brutal novel, set in the rich farmlands of California's Salinas Valley, follows the intertwined destinies of two families - the Trasks and the Hamiltons - whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51Tur5WAoAL_80x80.jpg"
  },
  {
    "title": "Fairy Tale",
    "author": "Stephen King",
    "narrator": "Seth Numrich, Stephen King",
    "length": "24h 6m",
    "rating": 4.72,
    "categories": [
      "Fantasy",
      "Suspense",
      "Supernatural"
    ],
    "description": "Winner of the 2023 Audie Award for Best Male Narrator  Master storyteller Stephen King goes into the deepest well of his imagination in this #1 New York Times bestselling and spellbinding novel about a young man who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours.",
    "finished": true,
    "dateAdded": "2022-09-21",
    "cover": "BookImages/51RBYXHu9LL_80x80.jpg"
  },
  {
    "title": "The Robert Stanek Short Story & Novella Collection",
    "author": "Robert Stanek",
    "narrator": "Karl Fehr, Gary Ryan",
    "length": "4h 38m",
    "rating": 3.99,
    "categories": [
      "Suspense",
      "Anthologies & Short Stories"
    ],
    "description": "Enter the spell-binding worlds of best-selling author Robert Stanek and dream a new dream.",
    "finished": true,
    "dateAdded": "2014-03-18",
    "cover": "BookImages/51jZA70qLsL_80x80.jpg"
  },
  {
    "title": "Words of Radiance",
    "author": "Brandon Sanderson",
    "narrator": "Michael Kramer, Kate Reading",
    "length": "48h 15m",
    "rating": 4.9,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "From number one New York Times best-selling author Brandon Sanderson, Words of Radiance, audiobook two of the Stormlight Archive, continues the immersive fantasy epic that The Way of Kings began.",
    "finished": true,
    "dateAdded": "2014-03-04",
    "cover": "BookImages/51DZfSH5qQL_80x80.jpg"
  },
  {
    "title": "The Emperor's Blades",
    "author": "Brian Staveley",
    "narrator": "Simon Vance",
    "length": "19h 22m",
    "rating": 4.44,
    "categories": [
      "Epic",
      "Military"
    ],
    "description": "Now includes special bonus content.",
    "finished": true,
    "dateAdded": "2014-02-23",
    "cover": "BookImages/518NgizY-VS_80x80.jpg"
  },
  {
    "title": "Elseerian",
    "author": "Ben Hale",
    "narrator": "Derek Perkins",
    "length": "12h 10m",
    "rating": 3.91,
    "categories": [
      "Epic",
      "Action & Adventure"
    ],
    "description": "The assassination of heroes was once a warning.",
    "finished": true,
    "dateAdded": "2014-02-23",
    "cover": "BookImages/41uCUD8RNNL_80x80.jpg"
  },
  {
    "title": "The Heroes",
    "author": "Joe Abercrombie",
    "narrator": "Michael Page",
    "length": "22h 39m",
    "rating": 4.28,
    "categories": [
      "Classics",
      "Action & Adventure",
      "Epic",
      "Military",
      "Historical"
    ],
    "description": "They say Black Dow has killed more men than winter and clawed his way to the throne of the North up a hill of skulls.",
    "finished": true,
    "dateAdded": "2014-01-17",
    "cover": "BookImages/61577-dwwkL_80x80.jpg"
  },
  {
    "title": "A Quest of Heroes",
    "author": "Morgan Rice",
    "narrator": "Wayne Farrell",
    "length": "9h 36m",
    "rating": 3.97,
    "categories": [
      "Epic",
      "Sword & Sorcery"
    ],
    "description": "The #1 Bestselling series!  A QUEST OF HEROES (BOOK #1 IN THE SORCERER’S RING) revolves around the epic coming of age story of one special boy, a 14 year old from a small village on the outskirts of the Kingdom of the Ring.",
    "finished": true,
    "dateAdded": "2014-01-09",
    "cover": "BookImages/511JNr8Dm+L_80x80.jpg"
  },
  {
    "title": "The Tyrant's Law",
    "author": "Daniel Abraham",
    "narrator": "Pete Bradbury",
    "length": "15h 24m",
    "rating": 4.46,
    "categories": [
      "Classics",
      "Epic",
      "Historical"
    ],
    "description": "The great war cannot be stopped.",
    "finished": true,
    "dateAdded": "2013-12-15",
    "cover": "BookImages/51pyuKUymcL_80x80.jpg"
  },
  {
    "title": "The King's Blood",
    "author": "Daniel Abraham",
    "narrator": "Pete Bradbury",
    "length": "15h 37m",
    "rating": 4.4,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "Acclaimed author Daniel Abraham’s works have been nominated for the Hugo Award and the World Fantasy Award.",
    "finished": true,
    "dateAdded": "2013-12-15",
    "cover": "BookImages/51Kr+HR65NL_80x80.jpg"
  },
  {
    "title": "The Dragon's Path",
    "author": "Daniel Abraham",
    "narrator": "Pete Bradbury",
    "length": "17h 17m",
    "rating": 4.0,
    "categories": [
      "Classics",
      "Epic",
      "Historical"
    ],
    "description": "Popular author Daniel Abraham’s works have been nominated for the Hugo Award and the World Fantasy Award.",
    "finished": true,
    "dateAdded": "2013-12-15",
    "cover": "BookImages/51mrStC81hL_80x80.jpg"
  },
  {
    "title": "Steelheart",
    "author": "Brandon Sanderson",
    "narrator": "MacLeod Andrews",
    "length": "12h 42m",
    "rating": 4.5,
    "categories": [
      "Action & Adventure",
      "Dystopian"
    ],
    "description": "From the number-one New York Times best-selling author of the Mistborn Trilogy, Brandon Sanderson, comes the first book in a new, action-packed thrill ride of a series - Steelheart.",
    "finished": true,
    "dateAdded": "2013-10-20",
    "cover": "BookImages/51kzMpLGP7L_80x80.jpg"
  },
  {
    "title": "Hounded",
    "author": "Kevin Hearne",
    "narrator": "Luke Daniels",
    "length": "8h 6m",
    "rating": 4.56,
    "categories": [
      "Classics",
      "Paranormal",
      "Contemporary"
    ],
    "description": "The first novel in the Iron Druid Chronicles - introducing a cool, new, funny urban fantasy hero  Atticus O’Sullivan, last of the Druids, lives peacefully in Arizona, running an occult bookshop and shape-shifting in his spare time to hunt with his Irish wolfhound.",
    "finished": true,
    "dateAdded": "2013-10-20",
    "cover": "BookImages/51EyjDux73L_80x80.jpg"
  },
  {
    "title": "The Happiness Hypothesis",
    "author": "Jonathan Haidt",
    "narrator": "George K. Wilson",
    "length": "11h 44m",
    "rating": 4.22,
    "categories": [
      "Psychology"
    ],
    "description": "This is a book about 10 \"Great Ideas\".",
    "finished": true,
    "dateAdded": "2013-10-20",
    "cover": "BookImages/512QDWjYNkL_80x80.jpg"
  },
  {
    "title": "Darkness at Noon",
    "author": "Arthur Koestler",
    "narrator": "Frank Muller",
    "length": "8h 15m",
    "rating": 4.08,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Political"
    ],
    "description": "A fictional portrayal of an aging revolutionary, this novel is a powerful commentary on the nightmare politics of the troubled 20th century.",
    "finished": true,
    "dateAdded": "2013-08-15",
    "cover": "BookImages/61TbvHlwHYL_80x80.jpg"
  },
  {
    "title": "Blood Song",
    "author": "Anthony Ryan",
    "narrator": "Steven Brand",
    "length": "23h 5m",
    "rating": 4.6,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Sword & Sorcery",
      "Coming of Age"
    ],
    "description": "From \"a new master storyteller\" comes the beginning of an epic fantasy saga of blood, honor, and destiny.",
    "finished": true,
    "dateAdded": "2013-08-07",
    "cover": "BookImages/61r5rSnwAOL_80x80.jpg"
  },
  {
    "title": "The Book of Riley",
    "author": "Mark Tufo",
    "narrator": "Sean Runnette",
    "length": "2h 58m",
    "rating": 4.71,
    "categories": [],
    "description": "When the zombie apocalypse strikes without warning one dog will hold the fate of her pack in her paws.",
    "finished": true,
    "dateAdded": "2013-08-07",
    "cover": "BookImages/51rjQbx5tvL_80x80.jpg"
  },
  {
    "title": "The Gate Thief",
    "author": "Orson Scott Card",
    "narrator": "Stefan Rudnicki, Emily Rankin",
    "length": "12h 0m",
    "rating": 4.37,
    "categories": [
      "Classics",
      "Action & Adventure",
      "Contemporary"
    ],
    "description": "In this sequel to The Lost Gate, best-selling author Orson Scott Card continues his fantastic tale of the mages of Westil, who live in exile on Earth.",
    "finished": true,
    "dateAdded": "2013-08-07",
    "cover": "BookImages/514W2bHEb9L_80x80.jpg"
  },
  {
    "title": "Warbreaker",
    "author": "Brandon Sanderson",
    "narrator": "James Yaegashi",
    "length": "24h 45m",
    "rating": 4.29,
    "categories": [
      "Classics",
      "Fantasy"
    ],
    "description": "An author whose previous, wildly successful novels have earned him a reputation as fantasy's master of magic, Brandon Sanderson continues to dazzle audiences with this tale of princesses and gods.",
    "finished": true,
    "dateAdded": "2013-08-07",
    "cover": "BookImages/51152BW4MZL_80x80.jpg"
  },
  {
    "title": "The Rithmatist",
    "author": "Brandon Sanderson, Ben McSweeney",
    "narrator": "Michael Kramer",
    "length": "10h 23m",
    "rating": 4.71,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "Audie Award Finalist, Fantasy, 2014 From #1 New York Times bestselling author Brandon Sanderson: his debut novel for the young adult audience More than anything, Joel wants to be a Rithmatist.",
    "finished": true,
    "dateAdded": "2013-05-31",
    "cover": "BookImages/61T+MB4DqPL_80x80.jpg"
  },
  {
    "title": "Dragons of Autumn Twilight",
    "author": "Margaret Weis, Tracy Hickman",
    "narrator": "Paul Boehmer",
    "length": "20h 0m",
    "rating": 4.38,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Dragons & Mythical Creatures"
    ],
    "description": "Lifelong friends, they went their separate ways.",
    "finished": true,
    "dateAdded": "2013-05-31",
    "cover": "BookImages/61B-eksENbL_80x80.jpg"
  },
  {
    "title": "Red Seas Under Red Skies",
    "author": "Scott Lynch",
    "narrator": "Michael Page",
    "length": "25h 34m",
    "rating": 4.61,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Humorous"
    ],
    "description": "After a brutal battle with the underworld that nearly destroyed him, Locke Lamora and his trusted sidekick, Jean, fled the island city of their birth and landed on the exotic shores of Tal Verrar to nurse their wounds.",
    "finished": true,
    "dateAdded": "2013-05-31",
    "cover": "BookImages/61JQHCJk+RL_80x80.jpg"
  },
  {
    "title": "Elantris",
    "author": "Brandon Sanderson",
    "narrator": "Jack Garrett",
    "length": "27h 30m",
    "rating": 4.42,
    "categories": [
      "Epic"
    ],
    "description": "Legendary science fiction author Orson Scott Card calls Brandon Sanderson a writer to watch.",
    "finished": true,
    "dateAdded": "2013-05-31",
    "cover": "BookImages/61nY4EiXZ3L_80x80.jpg"
  },
  {
    "title": "The Lost Gate",
    "author": "Orson Scott Card",
    "narrator": "Stefan Rudnicki, Emily Janice Card",
    "length": "12h 22m",
    "rating": 4.29,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Contemporary",
      "Urban"
    ],
    "description": "Orson Scott Card’s The Lost Gate is the first book in the Mithermages series from the New York Times bestselling author of Ender’s Game.",
    "finished": true,
    "dateAdded": "2013-04-11",
    "cover": "BookImages/41LfIRXiHgL_80x80.jpg"
  },
  {
    "title": "The Hunger Games (The Hunger Games, Book One)",
    "author": "Suzanne Collins",
    "narrator": "Carolyn McCormick",
    "length": "11h 11m",
    "rating": 4.58,
    "categories": [
      "Social & Life Skills",
      "Action & Adventure",
      "Dystopian"
    ],
    "description": "The Hunger Games: Special Edition, narrated by Emmy Award winner Tatiana Maslany, is available here.",
    "finished": true,
    "dateAdded": "2013-04-11",
    "cover": "BookImages/51AplZZIpPL_80x80.jpg"
  },
  {
    "title": "Gauntlgrym",
    "author": "R. A. Salvatore",
    "narrator": "Victor Bevine",
    "length": "13h 40m",
    "rating": 4.63,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Dragons & Mythical Creatures"
    ],
    "description": "Drizzt joins Bruenor on his quest for the fabled dwarven kingdom of Gauntlgrym: ruins said to be rich with ancient treasure and arcane lore.",
    "finished": true,
    "dateAdded": "2013-03-01",
    "cover": "BookImages/51H-tEPKDFL_80x80.jpg"
  },
  {
    "title": "Theft of Swords",
    "author": "Michael J. Sullivan",
    "narrator": "Tim Gerard Reynolds",
    "length": "22h 38m",
    "rating": 4.65,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "Audie Award Nominee, Fantasy, 2013  Acclaimed author Michael J.",
    "finished": true,
    "dateAdded": "2013-03-01",
    "cover": "BookImages/51mI2XSIblL_80x80.jpg"
  },
  {
    "title": "The Warded Man",
    "author": "Peter V. Brett",
    "narrator": "Pete Bradbury",
    "length": "18h 10m",
    "rating": 4.49,
    "categories": [
      "Epic",
      "Adventure",
      "Horror"
    ],
    "description": "Peter V.",
    "finished": true,
    "dateAdded": "2013-03-01",
    "cover": "BookImages/51myqt8K77L_80x80.jpg"
  },
  {
    "title": "The Lies of Locke Lamora",
    "author": "Scott Lynch",
    "narrator": "Michael Page",
    "length": "21h 59m",
    "rating": 4.57,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Humorous"
    ],
    "description": "An orphan's life is harsh---and often short---in the island city of Camorr, built on the ruins of a mysterious alien race.",
    "finished": false,
    "dateAdded": "2013-03-01",
    "cover": "BookImages/61zfL9LfZXL_80x80.jpg"
  },
  {
    "title": "Fifty Shades of Grey",
    "author": "E. L. James",
    "narrator": "Becca Battoe",
    "length": "19h 48m",
    "rating": 3.95,
    "categories": [
      "Women's Fiction",
      "Contemporary"
    ],
    "description": "More than 150 million copies sold worldwide.",
    "finished": true,
    "dateAdded": "2013-02-24",
    "cover": "BookImages/518oxB+qxSL_80x80.jpg"
  },
  {
    "title": "A Memory of Light",
    "author": "Robert Jordan, Brandon Sanderson",
    "narrator": "Michael Kramer, Kate Reading",
    "length": "41h 47m",
    "rating": 4.9,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "Now an original series starring Rosamund Pike as Moiraine!   Since its debut in 1990, The Wheel of Time® by Robert Jordan has captivated millions of readers and listeners around the globe with its scope, originality, and compelling characters.",
    "finished": true,
    "dateAdded": "2012-12-26",
    "cover": "BookImages/51fQx7bZg1L_80x80.jpg"
  },
  {
    "title": "Prince of Thorns",
    "author": "Mark Lawrence",
    "narrator": "James Clamp",
    "length": "9h 19m",
    "rating": 4.17,
    "categories": [
      "Action & Adventure",
      "Fantasy",
      "Epic",
      "Sword & Sorcery"
    ],
    "description": "Author Mark Lawrence has won over audiences everywhere with Prince of Thorns, his exciting debut novel.",
    "finished": true,
    "dateAdded": "2012-12-26",
    "cover": "BookImages/51utq2JtfvL_80x80.jpg"
  },
  {
    "title": "First Lord's Fury",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "23h 57m",
    "rating": 4.78,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "The next book in the thrilling New York Times best-selling series.",
    "finished": true,
    "dateAdded": "2012-11-19",
    "cover": "BookImages/51xN3Zck09L_80x80.jpg"
  },
  {
    "title": "Princeps' Fury",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "17h 41m",
    "rating": 4.76,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "Tavi of Calderon, now recognized as Princeps Gaius Octavian and heir to the crown, has achieved a fragile alliance with Alera's oldest foes, the savage Canim.",
    "finished": true,
    "dateAdded": "2012-11-19",
    "cover": "BookImages/61K4ghWrhjL_80x80.jpg"
  },
  {
    "title": "Captain's Fury",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "19h 34m",
    "rating": 4.79,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "In his acclaimed Codex Alera novels, best-selling author Jim Butcher has created a fascinating world in which the powerful forces of nature take physical form.",
    "finished": true,
    "dateAdded": "2012-10-20",
    "cover": "BookImages/51aUvPSylhL_80x80.jpg"
  },
  {
    "title": "Cursor's Fury",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "20h 27m",
    "rating": 4.8,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "The power-hungry High Lord of Kalare has launched a rebellion against the aging First Lord, Gaius Sextus, who with the loyal forces of Alera must fight beside the unlikeliest of allies - the equally contentious High Lord of Aquitaine.",
    "finished": true,
    "dateAdded": "2012-10-20",
    "cover": "BookImages/514l5JrsBUL_80x80.jpg"
  },
  {
    "title": "Furies of Calderon",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "19h 58m",
    "rating": 4.52,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "In the realm of Alera, where people bond with the furies - elementals of earth, air, fire, water, and metal - 15-year-old Tavi struggles with his lack of furycrafting.",
    "finished": true,
    "dateAdded": "2012-09-19",
    "cover": "BookImages/6176HpaHGaL_80x80.jpg"
  },
  {
    "title": "Academ's Fury",
    "author": "Jim Butcher",
    "narrator": "Kate Reading",
    "length": "21h 0m",
    "rating": 4.69,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "For 1,000 years, the people of Alera have united against the aggressive and threatening races that inhabit the world, using their unique bond with the Furies - elementals of earth, air, fire, water, and metal.",
    "finished": true,
    "dateAdded": "2012-09-19",
    "cover": "BookImages/61w91eUaLOL_80x80.jpg"
  },
  {
    "title": "Last Argument of Kings",
    "author": "Joe Abercrombie",
    "narrator": "Steven Pacey",
    "length": "27h 3m",
    "rating": 4.61,
    "categories": [
      "Fantasy"
    ],
    "description": "The end is coming.",
    "finished": true,
    "dateAdded": "2012-08-14",
    "cover": "BookImages/51++pLVQyJL_80x80.jpg"
  },
  {
    "title": "Before They Are Hanged",
    "author": "Joe Abercrombie",
    "narrator": "Steven Pacey",
    "length": "22h 38m",
    "rating": 4.63,
    "categories": [
      "Fantasy"
    ],
    "description": "Bitter and merciless war is coming to the frozen north.",
    "finished": true,
    "dateAdded": "2012-08-14",
    "cover": "BookImages/51o7IDcrz6L_80x80.jpg"
  },
  {
    "title": "The Blade Itself",
    "author": "Joe Abercrombie",
    "narrator": "Steven Pacey",
    "length": "22h 15m",
    "rating": 4.53,
    "categories": [
      "Fantasy"
    ],
    "description": "Inquisitor Glokta, a crippled and bitter relic of the last war, former fencing champion turned torturer, is trapped in a twisted and broken body - not that he allows it to distract him from his daily routine of torturing smugglers.",
    "finished": true,
    "dateAdded": "2012-07-26",
    "cover": "BookImages/51aSZ+0kJRL_80x80.jpg"
  },
  {
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "narrator": "Nick Podehl",
    "length": "27h 55m",
    "rating": 4.7,
    "categories": [
      "Literary Fiction",
      "Epic",
      "Paranormal"
    ],
    "description": "Discover #1 New York Times bestselling Patrick Rothfuss’ epic fantasy series, The Kingkiller Chronicle.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/61Csiq-T2hL_80x80.jpg"
  },
  {
    "title": "The Blood Mirror",
    "author": "Brent Weeks",
    "narrator": "Simon Vance",
    "length": "20h 30m",
    "rating": 4.76,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "The nail-biting continuation of the Lightbringer series from New York Times best seller Brent Weeks.",
    "finished": true,
    "dateAdded": "2016-10-20",
    "cover": "BookImages/519teXBNWaL_80x80.jpg"
  },
  {
    "title": "The Broken Eye",
    "author": "Brent Weeks",
    "narrator": "Simon Vance",
    "length": "29h 33m",
    "rating": 4.81,
    "categories": [
      "Literary Fiction",
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "The Broken Eye continues the spectacular Lightbringer series from the New York Times best-selling author of The Black Prism and The Blinding Knife.",
    "finished": true,
    "dateAdded": "2016-09-12",
    "cover": "BookImages/51HBWQSZeFL_80x80.jpg"
  },
  {
    "title": "The Blinding Knife",
    "author": "Brent Weeks",
    "narrator": "Simon Vance",
    "length": "24h 14m",
    "rating": 4.78,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "Gavin's powers are fading and his end draws near as war rages across the satrapies in the second novel of the New York Times best-selling Lightbringer series by Brent Week.",
    "finished": true,
    "dateAdded": "2016-09-12",
    "cover": "BookImages/51UH7a7wlIL_80x80.jpg"
  },
  {
    "title": "The Black Prism",
    "author": "Brent Weeks",
    "narrator": "Simon Vance",
    "length": "21h 26m",
    "rating": 4.71,
    "categories": [
      "Epic",
      "Historical"
    ],
    "description": "In a world where magic is tightly controlled, the most powerful man in history must choose between his kingdom and his son in the first book in the epic NYT best-selling Lightbringer series.",
    "finished": true,
    "dateAdded": "2016-08-24",
    "cover": "BookImages/51+royu+13L_80x80.jpg"
  },
  {
    "title": "Son of the Black Sword",
    "author": "Larry Correia",
    "narrator": "Tim Gerard Reynolds",
    "length": "16h 21m",
    "rating": 4.63,
    "categories": [
      "Epic",
      "Historical"
    ],
    "description": "Audie Award Finalist, Fantasy, 2016  After the War of the Gods, the demons were cast out and fell to the world.",
    "finished": true,
    "dateAdded": "2016-08-24",
    "cover": "BookImages/516DzvIC8vL_80x80.jpg"
  },
  {
    "title": "A Darker Shade of Magic",
    "author": "V. E. Schwab",
    "narrator": "Steven Crossley",
    "length": "11h 34m",
    "rating": 4.3,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Gaslamp",
      "Historical",
      "Alternate History"
    ],
    "description": "Kell is one of the last Travelers - magicians with a rare, coveted ability to travel between parallel universes.",
    "finished": true,
    "dateAdded": "2016-08-24",
    "cover": "BookImages/51G8cQ3WB1L_80x80.jpg"
  },
  {
    "title": "The White Mage Omnibus",
    "author": "Ben Hale",
    "narrator": "Derek Perkins",
    "length": "32h 27m",
    "rating": 4.54,
    "categories": [
      "Epic"
    ],
    "description": "A new series from the world of The Chronicles of Lumineia.",
    "finished": true,
    "dateAdded": "2016-08-02",
    "cover": "BookImages/41b7BPsCauL_80x80.jpg"
  },
  {
    "title": "The Dragons of Dorcastle",
    "author": "Jack Campbell",
    "narrator": "MacLeod Andrews",
    "length": "11h 57m",
    "rating": 4.32,
    "categories": [
      "Epic"
    ],
    "description": "The first book in a thrilling new epic fantasy saga, written exclusively for Audible by Jack Campbell, the New York Times best-selling author of The Lost Fleet series! For centuries, the two Great Guilds have controlled the world of Dematr.",
    "finished": true,
    "dateAdded": "2016-08-02",
    "cover": "BookImages/61WRg07xH5L_80x80.jpg"
  },
  {
    "title": "Werewolf versus Dragon",
    "author": "David Sinden, Matthew Morgan",
    "narrator": "Gerard Doyle",
    "length": "2h 57m",
    "rating": 4.11,
    "categories": [
      "Social & Life Skills",
      "Action & Adventure",
      "Dragons & Mythical Creatures"
    ],
    "description": "When a dragon arrives at the royal society for the Prevention of Cruelty to Beasts, a rescue center for rare and endangered beasts, Ulf the werewolf uncovers a dark and terrifying secret.",
    "finished": true,
    "dateAdded": "2016-07-02",
    "cover": "BookImages/51pepp8r62L_80x80.jpg"
  },
  {
    "title": "The Lair of Bones",
    "author": "David Farland",
    "narrator": "Ray Porter",
    "length": "15h 46m",
    "rating": 4.65,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "Prince Gaborn, the Earth King, has defeated the forces arrayed against him each time before: the magical and human forces marshaled by Raj Ahten, who seeks immortality at any cost and has given up his humanity in trade; and the inhuman, innumerable, insectile hordes of the giant Reavers from under the Earth, whose unknowable motives are inimical to human life.",
    "finished": true,
    "dateAdded": "2016-06-03",
    "cover": "BookImages/61e38QC81YL_80x80.jpg"
  },
  {
    "title": "Titans",
    "author": "Leila Meacham",
    "narrator": "Casey Holloway, Brian Hatch",
    "length": "18h 41m",
    "rating": 4.41,
    "categories": [
      "Classics",
      "Coming of Age",
      "Historical Fiction",
      "Sagas",
      "Family Life"
    ],
    "description": "A sweeping new drama from the beloved, best-selling author of Roses.",
    "finished": true,
    "dateAdded": "2016-05-08",
    "cover": "BookImages/61HTfgNuzFL_80x80.jpg"
  },
  {
    "title": "Wizardborn",
    "author": "David Farland",
    "narrator": "Ray Porter",
    "length": "19h 15m",
    "rating": 4.57,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "Wizardborn continues the story of the struggle of Gaborn, now the Earth King, who has lost his powers but continues to lead his people.",
    "finished": true,
    "dateAdded": "2016-03-15",
    "cover": "BookImages/61m3gcEAisL_80x80.jpg"
  },
  {
    "title": "Brotherhood of the Wolf",
    "author": "David Farland",
    "narrator": "Ray Porter",
    "length": "22h 41m",
    "rating": 4.5,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "David Farland delivers the second in his high fantasy Runelords series, featuring a complex system of magic and a wondrous, expertly realized world.",
    "finished": true,
    "dateAdded": "2016-03-15",
    "cover": "BookImages/61b2mz5CnLL_80x80.jpg"
  },
  {
    "title": "The Sum of All Men",
    "author": "David Farland",
    "narrator": "Ray Porter",
    "length": "21h 56m",
    "rating": 4.41,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "David Farland's acclaimed Runelords series introduces a world where the social structure is based upon the magical exchange of \"endowments\" such as stamina, grace, and wit.",
    "finished": true,
    "dateAdded": "2016-03-01",
    "cover": "BookImages/61mzKiPgDFL_80x80.jpg"
  },
  {
    "title": "Calamity",
    "author": "Brandon Sanderson",
    "narrator": "MacLeod Andrews",
    "length": "12h 18m",
    "rating": 4.69,
    "categories": [
      "Dystopian",
      "Action & Adventure"
    ],
    "description": "From the best-selling author of the Mistborn series and Words of Radiance comes Calamity, the final book in the New York Times best-selling Reckoners series.",
    "finished": true,
    "dateAdded": "2016-02-16",
    "cover": "BookImages/51IWUGFcmyL_80x80.jpg"
  },
  {
    "title": "Blood of Elves",
    "author": "Andrzej Sapkowski",
    "narrator": "Peter Kenny",
    "length": "10h 55m",
    "rating": 4.64,
    "categories": [
      "Action & Adventure",
      "Epic"
    ],
    "description": "Watch for the signs! What signs these shall be, I say unto you: first the earth will flow with the blood of Aen Seidhe, the Blood of Elves.",
    "finished": true,
    "dateAdded": "2016-02-16",
    "cover": "BookImages/51Ix2QVSdCL_80x80.jpg"
  },
  {
    "title": "Les Liaisons Dangereuses",
    "author": "Choderlos de Laclos",
    "narrator": "Dominic West, Janet McTeer, Una Stubbs, Elaine Cassidy, Adjoa Andoh, Edward Holcroft, Morfydd Clark",
    "length": "2h 9m",
    "rating": 3.76,
    "categories": [
      "Classics"
    ],
    "description": "From the sumptuous private drawing rooms of 18th-century Paris to the decadent estates and chateaus of the French countryside, La Marquise de Merteuil and Le Vicomte de Valmont hatch a long-distance plan of vengeance and seduction.",
    "finished": true,
    "dateAdded": "2016-01-31",
    "cover": "BookImages/51iHS5h5ywL_80x80.jpg"
  },
  {
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "narrator": "Julia Whelan, Kirby Heyborne",
    "length": "19h 57m",
    "rating": 4.36,
    "categories": [
      "Suspense",
      "Mystery",
      "Psychological"
    ],
    "description": "#1 NEW YORK TIMES BESTSELLER • The “mercilessly entertaining” (Vanity Fair) instant classic “about the nature of identity and the terrible secrets that can survive and thrive in even the most intimate relationships” (Lev Grossman, Time)—now featuring never-before-published deleted scenes NAMED ONE OF THE MOST INFLUENTIAL BOOKS OF THE DECADE BY CNN AND ONE OF THE BEST BOOKS OF THE DECADE BY TIME AND ENTERTAINMENT WEEKLY  NAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY Janet Maslin, The New York Times • People • Entertainment Weekly • O: The Oprah Magazine • Slate • Kansas City Star • USA Today • Christian Science Monitor On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne’s fifth wedding anniversary.",
    "finished": true,
    "dateAdded": "2016-01-17",
    "cover": "BookImages/41x6HtLdEhL_80x80.jpg"
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "narrator": "Tim Robbins",
    "length": "5h 1m",
    "rating": 4.49,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Suspense",
      "Movie, TV & Video Game Tie-Ins"
    ],
    "description": "Earphones Award Winner (AudioFile Magazine)  Ray Bradbury's internationally acclaimed novel Fahrenheit 451 is a masterwork of 20th-century literature set in a bleak, dystopian future, narrated here by Academy Award-winning actor Tim Robbins.",
    "finished": true,
    "dateAdded": "2015-12-16",
    "cover": "BookImages/510aIzH7XfL_80x80.jpg"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "narrator": "Frederick Davidson",
    "length": "61h 6m",
    "rating": 4.12,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Sagas",
      "War & Military"
    ],
    "description": "Often called the greatest novel ever written, War and Peace is at once an epic of the Napoleonic wars, a philosophical study, and a celebration of the Russian spirit.",
    "finished": false,
    "dateAdded": "2015-12-16",
    "cover": "BookImages/51IbpDJCYcL_80x80.jpg"
  },
  {
    "title": "The Chimes",
    "author": "Charles Dickens",
    "narrator": "Richard Armitage",
    "length": "3h 40m",
    "rating": 3.54,
    "categories": [
      "Classics"
    ],
    "description": "The magnificent Richard Armitage (Hamlet: King of Denmark: A Novel) performs The Chimes by Charles Dickens.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51PALpvR+bL_80x80.jpg"
  },
  {
    "title": "The Black Company",
    "author": "Glen Cook",
    "narrator": "Marc Vietor",
    "length": "10h 54m",
    "rating": 4.24,
    "categories": [
      "Action & Adventure",
      "Fantasy",
      "Epic",
      "Military"
    ],
    "description": "Some feel the Lady, newly risen from centuries in thrall, stands between humankind and evil.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51DWCtXP-bL_80x80.jpg"
  },
  {
    "title": "The Autumn Republic",
    "author": "Brian McClellan",
    "narrator": "Christian Rodska",
    "length": "19h 25m",
    "rating": 4.72,
    "categories": [
      "Epic",
      "Historical",
      "War & Military"
    ],
    "description": "Tamas, Taniel, and Adamat have been betrayed and Adro now lies in the hands of a foreign invader.",
    "finished": true,
    "dateAdded": "2015-11-18",
    "cover": "BookImages/61saMemY27L_80x80.jpg"
  },
  {
    "title": "The Crimson Campaign",
    "author": "Brian McClellan",
    "narrator": "Christian Rodska",
    "length": "20h 3m",
    "rating": 4.71,
    "categories": [
      "Epic",
      "Historical"
    ],
    "description": "A staggering defeat on the border of Adro and Kez leaves Tamas and his powder mages in grave danger and cut off from all aid.",
    "finished": true,
    "dateAdded": "2015-11-01",
    "cover": "BookImages/51vKsMkMhVL_80x80.jpg"
  },
  {
    "title": "Promise of Blood",
    "author": "Brian McClellan",
    "narrator": "Christian Rodska",
    "length": "19h 1m",
    "rating": 4.48,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "\"Just plain awesome\" (Brandon Sanderson) Civil unrest cripples the citizens of Adro in the aftermath of the revolution that obliterated the monarchy.",
    "finished": true,
    "dateAdded": "2015-10-15",
    "cover": "BookImages/51o2OTyUOhL_80x80.jpg"
  },
  {
    "title": "Beyond the Shadows",
    "author": "Brent Weeks",
    "narrator": "Paul Boehmer",
    "length": "22h 44m",
    "rating": 4.63,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "Logan Gyre is king of Cenaria, a country under siege, with a threadbare army and little hope.",
    "finished": true,
    "dateAdded": "2015-09-15",
    "cover": "BookImages/51vwHFF85JL_80x80.jpg"
  },
  {
    "title": "Shadow's Edge",
    "author": "Brent Weeks",
    "narrator": "Paul Boehmer",
    "length": "20h 26m",
    "rating": 4.62,
    "categories": [
      "Epic"
    ],
    "description": "Kylar Stern has rejected the assassin's life.",
    "finished": true,
    "dateAdded": "2015-09-15",
    "cover": "BookImages/51VlCQNsHFL_80x80.jpg"
  },
  {
    "title": "The Way of Shadows",
    "author": "Brent Weeks",
    "narrator": "Paul Boehmer",
    "length": "21h 4m",
    "rating": 4.44,
    "categories": [
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "For Durzo Blint, assassination is an art---and he is the city's most accomplished artist, his talents required from alleyway to courtly boudoir.",
    "finished": true,
    "dateAdded": "2015-09-01",
    "cover": "BookImages/51z2fmMwFRL_80x80.jpg"
  },
  {
    "title": "The Dawning of Power",
    "author": "Brian Rathbone",
    "narrator": "Chris Snelgrove",
    "length": "27h 35m",
    "rating": 3.89,
    "categories": [
      "Epic",
      "Magical Realism"
    ],
    "description": "Power is back and no one is prepared.",
    "finished": true,
    "dateAdded": "2015-08-10",
    "cover": "BookImages/51qtETDpTXL_80x80.jpg"
  },
  {
    "title": "The Farseer: Assassin's Apprentice",
    "author": "Robin Hobb",
    "narrator": "Paul Boehmer",
    "length": "17h 18m",
    "rating": 4.43,
    "categories": [
      "Action & Adventure",
      "Fantasy",
      "Epic"
    ],
    "description": "With unforgettable characters, a sweeping backdrop, and passionate storytelling, this is a fantasy debut to rival that of Robert Jordan.",
    "finished": true,
    "dateAdded": "2015-08-10",
    "cover": "BookImages/61-wM-ZrdGL_80x80.jpg"
  },
  {
    "title": "Go Set a Watchman",
    "author": "Harper Lee",
    "narrator": "Reese Witherspoon",
    "length": "6h 57m",
    "rating": 4.1,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Family Life",
      "Small Town & Rural"
    ],
    "description": "Performed by Reese Witherspoon Number one New York Times best seller “Go Set a Watchman is such an important book, perhaps the most important novel on race to come out of the white South in decades.",
    "finished": true,
    "dateAdded": "2015-07-21",
    "cover": "BookImages/519S+dvEBxL_80x80.jpg"
  },
  {
    "title": "The Cycle of Arawn",
    "author": "Edward W. Robertson",
    "narrator": "Tim Gerard Reynolds",
    "length": "65h 54m",
    "rating": 4.45,
    "categories": [
      "Epic",
      "Historical"
    ],
    "description": "The White Tree (book one): In Mallon, the dark magic of the nether has been banned for centuries.",
    "finished": true,
    "dateAdded": "2015-06-20",
    "cover": "BookImages/41xJ7E3D7rL_80x80.jpg"
  },
  {
    "title": "Neuromancer",
    "author": "William Gibson",
    "narrator": "Robertson Dean",
    "length": "10h 31m",
    "rating": 4.28,
    "categories": [
      "Classics",
      "Cyberpunk",
      "Technothrillers",
      "Hard Science Fiction"
    ],
    "description": "Twenty years ago, it was as if someone turned on a light.",
    "finished": true,
    "dateAdded": "2015-06-07",
    "cover": "BookImages/51vkqHfvAyL_80x80.jpg"
  },
  {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "narrator": "Jay O. Sanders",
    "length": "19h 57m",
    "rating": 4.07,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Historical Fiction",
      "War & Military",
      "Education",
      "Parenting & Families",
      "Relationships",
      "Combat Sports & Self-Defense",
      "Arts & Entertainment",
      "Literature & Fiction"
    ],
    "description": "Catch-22 is like no other novel we have ever read.",
    "finished": true,
    "dateAdded": "2015-05-18",
    "cover": "BookImages/519q0REHpiL_80x80.jpg"
  },
  {
    "title": "Suldrun’s Garden",
    "author": "Jack Vance",
    "narrator": "Kevin T. Collins",
    "length": "18h 49m",
    "rating": 4.03,
    "categories": [
      "Fantasy"
    ],
    "description": "The Elder Isles, located in what is now the Bay of Biscay off the coast of Old Gaul, are made up of 10 contending kingdoms, all vying with each other for control.",
    "finished": true,
    "dateAdded": "2015-04-28",
    "cover": "BookImages/51qiRW-cfZL_80x80.jpg"
  },
  {
    "title": "A Farewell to Arms",
    "author": "Ernest Hemingway",
    "narrator": "John Slattery",
    "length": "8h 32m",
    "rating": 4.44,
    "categories": [
      "Classics",
      "Literary Fiction",
      "War & Military"
    ],
    "description": "The best American novel to emerge from World War I, A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse.",
    "finished": true,
    "dateAdded": "2015-04-28",
    "cover": "BookImages/516hnMgZE0L_80x80.jpg"
  },
  {
    "title": "The Assassin's Blade",
    "author": "Sarah J. Maas",
    "narrator": "Elizabeth Evans",
    "length": "12h 52m",
    "rating": 4.6,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Romance"
    ],
    "description": "Celaena Sardothien is her kingdom's most feared assassin.",
    "finished": true,
    "dateAdded": "2015-04-12",
    "cover": "BookImages/51gneWRPzrL_80x80.jpg"
  },
  {
    "title": "Firefight",
    "author": "Brandon Sanderson",
    "narrator": "MacLeod Andrews",
    "length": "12h 5m",
    "rating": 4.67,
    "categories": [
      "Action & Adventure",
      "Dystopian"
    ],
    "description": "Brandon Sanderson, the number one New York Times best-selling author of Words of Radiance, co-author of Robert Jordan’s Wheel of Time series, and creator of the internationally best-selling Mistborn Trilogy, presents the second book in the Reckoners series: Firefight, the sequel to the #1 best seller Steelheart.",
    "finished": true,
    "dateAdded": "2015-02-18",
    "cover": "BookImages/51FD7Nc05jL_80x80.jpg"
  },
  {
    "title": "Gone with the Wind",
    "author": "Margaret Mitchell",
    "narrator": "Linda Stephens",
    "length": "49h 2m",
    "rating": 4.77,
    "categories": [
      "Classics",
      "Historical Fiction"
    ],
    "description": "Winner of the Pulitzer Prize for Literature, Margaret Mitchell's great novel of the South is one of the most popular books ever written.",
    "finished": true,
    "dateAdded": "2015-02-18",
    "cover": "BookImages/51k3VnE2uXL_80x80.jpg"
  },
  {
    "title": "Legend of the Guardians: The Owls of Ga'Hoole",
    "author": "Kathryn Lasky",
    "narrator": "Pamela Garelick",
    "length": "16h 42m",
    "rating": 4.26,
    "categories": [
      "Action & Adventure",
      "Animals",
      "Birds",
      "Animal Fiction"
    ],
    "description": "This box set contains the first three books by Kathryn Lasky, which are the basis of the animated movie, Legend of the Guardians: The Owls of Ga’Hoole.",
    "finished": true,
    "dateAdded": "2015-02-18",
    "cover": "BookImages/51jTSgyOMIL_80x80.jpg"
  },
  {
    "title": "The Slow Regard of Silent Things",
    "author": "Patrick Rothfuss",
    "narrator": "Patrick Rothfuss",
    "length": "3h 39m",
    "rating": 4.34,
    "categories": [
      "Fantasy",
      "Epic"
    ],
    "description": "Deep below the University, there is a dark place.",
    "finished": true,
    "dateAdded": "2014-12-15",
    "cover": "BookImages/51IMLdpQB6L_80x80.jpg"
  },
  {
    "title": "The Snow Queen",
    "author": "Hans Christian Andersen",
    "narrator": "Julia Whelan",
    "length": "1h 14m",
    "rating": 3.6,
    "categories": [
      "Adaptations"
    ],
    "description": "Audible's 2014 Narrator of the Year Julia Whelan performs one of Hans Christian Andersen's most beloved fairy tales, The Snow Queen.",
    "finished": true,
    "dateAdded": "2014-12-15",
    "cover": "BookImages/51DKJPYJ9NL_80x80.jpg"
  },
  {
    "title": "FREE: Mitosis: A Reckoners Story",
    "author": "Brandon Sanderson",
    "narrator": "MacLeod Andrews",
    "length": "1h 3m",
    "rating": 4.28,
    "categories": [
      "Fantasy",
      "Action & Adventure",
      "Dystopian",
      "Arts & Entertainment"
    ],
    "description": "From Brandon Sanderson, the #1 New York Times best-selling author of Words of Radiance, coauthor of Robert Jordan's Wheel of Time series, and creator of the internationally best-selling Mistborn Trilogy, comes \"Mitosis\", a short story set in the action-packed world of Steelheart: The Reckoners series.",
    "finished": true,
    "dateAdded": "2014-10-09",
    "cover": "BookImages/51bK7jY6IlL_80x80.jpg"
  },
  {
    "title": "Red Rising",
    "author": "Pierce Brown",
    "narrator": "Tim Gerard Reynolds",
    "length": "16h 12m",
    "rating": 4.72,
    "categories": [
      "Fantasy",
      "Adventure",
      "Dystopian"
    ],
    "description": "Darrow is a Red, a member of the lowest caste in the color-coded society of the future.",
    "finished": true,
    "dateAdded": "2014-09-18",
    "cover": "BookImages/51IM+e-toYL_80x80.jpg"
  },
  {
    "title": "The Widow's House",
    "author": "Daniel Abraham",
    "narrator": "Pete Bradbury",
    "length": "15h 10m",
    "rating": 4.55,
    "categories": [
      "Literary Fiction",
      "Epic",
      "Sagas",
      "Action & Adventure"
    ],
    "description": "The rise of the dragon and the fall of kings Lord Regent Geder Palliako's war has led his nation and the priests of the spider goddess to victory after victory.",
    "finished": true,
    "dateAdded": "2014-08-30",
    "cover": "BookImages/51V4VfbkQQL_80x80.jpg"
  },
  {
    "title": "The Gathering",
    "author": "Ben Hale",
    "narrator": "Derek Perkins",
    "length": "12h 28m",
    "rating": 4.25,
    "categories": [
      "Epic",
      "Action & Adventure"
    ],
    "description": "Born of darkness, the ultimate army has been unleashed.",
    "finished": true,
    "dateAdded": "2014-08-12",
    "cover": "BookImages/41Ob646pQAL_80x80.jpg"
  },
  {
    "title": "Tower Lord",
    "author": "Anthony Ryan",
    "narrator": "Steven Brand",
    "length": "24h 39m",
    "rating": 4.55,
    "categories": [
      "Literary Fiction",
      "Action & Adventure",
      "Epic",
      "Sword & Sorcery",
      "Political",
      "War & Military"
    ],
    "description": "Vaelin Al Sorna, warrior of the Sixth Order, called Darkblade, called Hope Killer.",
    "finished": true,
    "dateAdded": "2014-08-12",
    "cover": "BookImages/61pSQJ9YJGL_80x80.jpg"
  },
  {
    "title": "Seven Days",
    "author": "Ben Hale",
    "narrator": "Derek Perkins",
    "length": "10h 22m",
    "rating": 4.38,
    "categories": [
      "Epic",
      "Action & Adventure"
    ],
    "description": "Forced to ally, the world has gathered against the endless night.",
    "finished": true,
    "dateAdded": "2014-08-12",
    "cover": "BookImages/41xL8c3BtqL_80x80.jpg"
  },
  {
    "title": "Red Country",
    "author": "Joe Abercrombie",
    "narrator": "Steven Pacey",
    "length": "19h 52m",
    "rating": 4.79,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Sword & Sorcery",
      "Westerns"
    ],
    "description": "A New York Times best seller! They burned her home.",
    "finished": true,
    "dateAdded": "2014-04-17",
    "cover": "BookImages/61Sxbj8l47L_80x80.jpg"
  },
  {
    "title": "Lives of the Stoics",
    "author": "Ryan Holiday, Stephen Hanselman",
    "narrator": "Ryan Holiday",
    "length": "10h 8m",
    "rating": 4.48,
    "categories": [
      "Philosophy",
      "Motivation & Self-Improvement",
      "Greek & Roman",
      "Personal Success"
    ],
    "description": "Instant New York Times Advice & Business best seller, USA Today best seller, and Wall Street Journal number one best seller! A New York Times Noteworthy Pick and a \"stellar work\" by Publishers Weekly From the best-selling authors of The Daily Stoic comes an inspiring guide to the lives of the Stoics, and what the ancients can teach us about happiness, success, resilience, and virtue.",
    "finished": true,
    "dateAdded": "2022-09-06",
    "cover": "BookImages/41nDGEqEPkL_80x80.jpg"
  },
  {
    "title": "Vicious",
    "author": "V. E. Schwab",
    "narrator": "Jeremy Arthur",
    "length": "9h 23m",
    "rating": 4.36,
    "categories": [
      "Paranormal",
      "Contemporary",
      "Superhero"
    ],
    "description": "V.",
    "finished": true,
    "dateAdded": "2022-04-18",
    "cover": "BookImages/41JdZV+6kyL_80x80.jpg"
  },
  {
    "title": "Spellmonger",
    "author": "Terry Mancour",
    "narrator": "John Lee",
    "length": "18h 22m",
    "rating": 4.32,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Dragons & Mythical Creatures"
    ],
    "description": "Nominee, Audie Awards - Fantasy, 2018 Minalan gave up a promising career as a professional warmage to live the quiet life of a village spellmonger in the remote mountain valley of Boval.",
    "finished": true,
    "dateAdded": "2022-04-18",
    "cover": "BookImages/51-hqxxyWCL_80x80.jpg"
  },
  {
    "title": "Six of Crows",
    "author": "Leigh Bardugo",
    "narrator": "Jay Snyder, Brandon Rubin, Fred Berman, Lauren Fortgang, Roger Clark, Elizabeth Evans, Tristan Morris",
    "length": "15h 4m",
    "rating": 4.55,
    "categories": [
      "Crime",
      "Thrillers & Suspense",
      "Action & Adventure"
    ],
    "description": "Ketterdam: a bustling hub of international trade where anything can be had for the right price - and no one knows that better than criminal prodigy Kaz Brekker.",
    "finished": true,
    "dateAdded": "2022-04-18",
    "cover": "BookImages/61tuZtK6xoL_80x80.jpg"
  },
  {
    "title": "The Young Elites",
    "author": "Marie Lu",
    "narrator": "Carla Corvo, Lannon Killea",
    "length": "10h 3m",
    "rating": 4.06,
    "categories": [
      "Paranormal",
      "Action & Adventure",
      "Dark Fantasy"
    ],
    "description": "Adelina Amouteru is a survivor of the blood plague: marked by a jagged scar, snow-white hair, and lashes.",
    "finished": true,
    "dateAdded": "2022-04-18",
    "cover": "BookImages/51oxpMzYgAL_80x80.jpg"
  },
  {
    "title": "The Chronicles of Narnia Complete Audio Collection",
    "author": "C. S. Lewis",
    "narrator": "Kenneth Branagh, Alex Jennings, Michael York, Lynn Redgrave, Derek Jacobi, Jeremy Northam, Patrick Stewart",
    "length": "33h 45m",
    "rating": 4.84,
    "categories": [
      "Epic",
      "Anthologies & Short Stories"
    ],
    "description": "For over 60 years, readers of all ages have been enchanted by the magical realms, the epic battles between good and evil, and the unforgettable creatures of Narnia.",
    "finished": true,
    "dateAdded": "2022-04-18",
    "cover": "BookImages/51K+xUkrkaL_80x80.jpg"
  },
  {
    "title": "Articulating Design Decisions",
    "author": "Tom Greever",
    "narrator": "Ric Chetter",
    "length": "6h 56m",
    "rating": 4.57,
    "categories": [
      "Management",
      "Decision-Making & Problem Solving",
      "Communication & Social Skills"
    ],
    "description": "Talking to people about your designs might seem like a basic skill, but it can be difficult to do well.",
    "finished": true,
    "dateAdded": "2021-12-08",
    "cover": "BookImages/51BIa1PQtGS_80x80.jpg"
  },
  {
    "title": "Information Architecture",
    "author": "Louis Rosenfeld, Peter Morville, Jorge Arango",
    "narrator": "Theodore O'Brien",
    "length": "11h 0m",
    "rating": 4.39,
    "categories": [
      "Programming & Software Development",
      "Computer Science",
      "Engineering"
    ],
    "description": "Newly adapted for audio.",
    "finished": true,
    "dateAdded": "2021-12-08",
    "cover": "BookImages/51Nt4VAv39L_80x80.jpg"
  },
  {
    "title": "Inspired",
    "author": "Marty Cagan",
    "narrator": "Marty Cagan",
    "length": "7h 45m",
    "rating": 4.64,
    "categories": [
      "Leadership",
      "Management",
      "Customer Service",
      "New Business Enterprises",
      "Industrial & Manufacturing"
    ],
    "description": "How do today's most successful tech companies - Amazon, Google, Facebook, Netflix, Tesla - design, develop, and deploy the products that have earned the love of literally billions of people around the world? Perhaps surprisingly, they do it very differently from the vast majority of tech companies.",
    "finished": true,
    "dateAdded": "2021-12-08",
    "cover": "BookImages/41OrmnAM5FL_80x80.jpg"
  },
  {
    "title": "Hooked: How to Build Habit-Forming Products",
    "author": "Nir Eyal, Ryan Hoover",
    "narrator": "Nir Eyal",
    "length": "4h 40m",
    "rating": 4.39,
    "categories": [
      "Consumer Behavior & Market Research"
    ],
    "description": "Note to Audible Listeners: As of December 2019, this version of the Hooked audiobook has been revised and rerecorded to greatly improve audio quality.",
    "finished": true,
    "dateAdded": "2021-12-08",
    "cover": "BookImages/51o-DT4Z33L_80x80.jpg"
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "narrator": "Jeremy Irons",
    "length": "4h 0m",
    "rating": 4.71,
    "categories": [
      "Literary Fiction",
      "Metaphysical & Visionary"
    ],
    "description": "Paulo Coelho's enchanting novel has inspired a devoted following around the world.",
    "finished": true,
    "dateAdded": "2021-12-08",
    "cover": "BookImages/517pfctTa9L_80x80.jpg"
  },
  {
    "title": "Ethics",
    "author": "Benedict de Spinoza",
    "narrator": "Antony Ferguson",
    "length": "9h 6m",
    "rating": 4.34,
    "categories": [
      "Ethics & Morality"
    ],
    "description": "Benedict de Spinoza's Ethics, first published in 1677, constitutes a major systematic critique of the traditional and religious foundations of philosophical thought.",
    "finished": true,
    "dateAdded": "2021-11-22",
    "cover": "BookImages/41xgVRmY+XL_80x80.jpg"
  },
  {
    "title": "Beyond Good and Evil",
    "author": "Friedrich Nietzsche",
    "narrator": "Alex Jennings, Roy McMillan",
    "length": "8h 24m",
    "rating": 4.31,
    "categories": [
      "Ethics & Morality"
    ],
    "description": "Continuing where Thus Spoke Zarathustra left off, Nietzsche's controversial work Beyond Good and Evil is one of the most influential philosophical texts of the 19th century and one of the most controversial works of ideology ever written.",
    "finished": true,
    "dateAdded": "2021-11-22",
    "cover": "BookImages/61sDWwvb2TL_80x80.jpg"
  },
  {
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "narrator": "Neil Hellegers",
    "length": "10h 39m",
    "rating": 4.59,
    "categories": [
      "Career Success",
      "Psychology",
      "Industrial & Manufacturing"
    ],
    "description": "Design doesn't have to be complicated, which is why this guide to human-centered design shows that usability is just as important as aesthetics.",
    "finished": true,
    "dateAdded": "2021-08-06",
    "cover": "BookImages/51Dl6lXXesL_80x80.jpg"
  },
  {
    "title": "The Product-Led Organization",
    "author": "Todd Olson",
    "narrator": "Basil Sands",
    "length": "8h 15m",
    "rating": 4.54,
    "categories": [
      "Business Development & Entrepreneurship"
    ],
    "description": "There's a common strategy used by the fastest growing and most successful businesses of our time.",
    "finished": true,
    "dateAdded": "2021-08-06",
    "cover": "BookImages/51kUGp2BNbL_80x80.jpg"
  },
  {
    "title": "The Complete Book of Five Rings",
    "author": "Miyamoto Musashi, Kenji Tokitsu - editor/translator",
    "narrator": "Brian Nishii",
    "length": "5h 3m",
    "rating": 4.49,
    "categories": [
      "Career Success",
      "Combat Sports & Self-Defense",
      "Eastern"
    ],
    "description": "The Complete Book of Five Rings is an authoritative version of Musashi's classic The Book of Five Rings, translated and annotated by a modern martial arts master, Kenji Tokitsu.",
    "finished": true,
    "dateAdded": "2021-08-04",
    "cover": "BookImages/51KfgvOF9HL_80x80.jpg"
  },
  {
    "title": "Influence",
    "author": "Kenneth G. Brown, The Great Courses",
    "narrator": "Kenneth G. Brown",
    "length": "6h 11m",
    "rating": 4.34,
    "categories": [
      "Communication & Social Skills"
    ],
    "description": "Don't just let influence just happen to you.",
    "finished": true,
    "dateAdded": "2021-06-04",
    "cover": "BookImages/41C8U18j-UL_80x80.jpg"
  },
  {
    "title": "Language and the Mind",
    "author": "Spencer D. Kelly, The Great Courses",
    "narrator": "Spencer D. Kelly",
    "length": "11h 50m",
    "rating": 4.67,
    "categories": [
      "Psychology",
      "Ancient",
      "World"
    ],
    "description": "What is our species' greatest invention? Medicine, computers, space travel? Not even close.",
    "finished": true,
    "dateAdded": "2021-06-04",
    "cover": "BookImages/51Q7LWdXfhL_80x80.jpg"
  },
  {
    "title": "The Enchiridion & Discourses",
    "author": "Epictetus",
    "narrator": "Haward B. Morse",
    "length": "13h 16m",
    "rating": 4.73,
    "categories": [
      "Philosophy"
    ],
    "description": "The Enchiridion is the famous manual of ethical advice given in the second century by the Stoic philosopher Epictetus.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/41m8cldqemL_80x80.jpg"
  },
  {
    "title": "Thinking, Fast and Slow",
    "author": "Daniel Kahneman",
    "narrator": "Patrick Egan",
    "length": "20h 2m",
    "rating": 4.45,
    "categories": [
      "Psychology",
      "Decision-Making & Problem Solving"
    ],
    "description": "The guru to the gurus at last shares his knowledge with the rest of us.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/41JgsMOR9wL_80x80.jpg"
  },
  {
    "title": "Tao Te Ching",
    "author": "Stephen Mitchell, Lao Tzu",
    "narrator": "Stephen Mitchell",
    "length": "1h 41m",
    "rating": 4.73,
    "categories": [
      "Eastern",
      "Religious",
      "Other Religions, Practices & Sacred Texts"
    ],
    "description": "In 81 brief chapters, Lao Tzu's Tao Te Ching, or Book of the Way, provides advice that imparts balance and perspective, as well as a serene and generous spirit.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/41y5tX783CL_80x80.jpg"
  },
  {
    "title": "History of Bourbon",
    "author": "Ken Albala, The Great Courses",
    "narrator": "Ken Albala",
    "length": "3h 55m",
    "rating": 4.45,
    "categories": [
      "United States",
      "Food & Wine"
    ],
    "description": "Is bourbon the quintessential American liquor? Bourbon is not just alcohol—the amber-colored drink is deeply ingrained in American culture and tangled in American history.",
    "finished": true,
    "dateAdded": "2021-03-08",
    "cover": "BookImages/51YbF-pykmL_80x80.jpg"
  },
  {
    "title": "Man's Search for Meaning",
    "author": "Viktor E. Frankl",
    "narrator": "Simon Vance",
    "length": "4h 44m",
    "rating": 4.74,
    "categories": [
      "Philosophy",
      "Psychology"
    ],
    "description": "Man’s Search for Meaning is the chilling yet inspirational story of Viktor Frankl’s struggle to hold on to hope during the unspeakable horrors of his years as a prisoner in Nazi concentration camps.",
    "finished": true,
    "dateAdded": "2021-01-25",
    "cover": "BookImages/41QyFpuBhfL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Deathly Hallows, Book 7",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "21h 36m",
    "rating": 4.96,
    "categories": [
      "Social & Life Skills",
      "Action & Adventure",
      "Growing Up & Facts of Life",
      "Family Life"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/61yMjtQzKcL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Goblet of Fire, Book 4",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "20h 36m",
    "rating": 4.94,
    "categories": [
      "Social & Life Skills",
      "Action & Adventure",
      "Growing Up & Facts of Life",
      "Family Life"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": false,
    "dateAdded": "",
    "cover": "BookImages/61m99NmM4jL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Half-Blood Prince, Book 6",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "18h 32m",
    "rating": 4.95,
    "categories": [
      "Action & Adventure"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51sImF7gqML_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Order of the Phoenix, Book 5",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "26h 28m",
    "rating": 4.93,
    "categories": [
      "Action & Adventure"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51KHVovUpGL_80x80.jpg"
  },
  {
    "title": "Ready Player Two",
    "author": "Ernest Cline",
    "narrator": "Wil Wheaton",
    "length": "13h 46m",
    "rating": 4.28,
    "categories": [
      "Adventure",
      "Dystopian"
    ],
    "description": "Number-One New York Times Best Seller The thrilling sequel to the beloved worldwide best seller Ready Player One, the near-future adventure that inspired the blockbuster Steven Spielberg film.",
    "finished": true,
    "dateAdded": "2020-11-24",
    "cover": "BookImages/51XI-UQzsAL_80x80.jpg"
  },
  {
    "title": "Rhythm of War",
    "author": "Brandon Sanderson",
    "narrator": "Kate Reading, Michael Kramer",
    "length": "57h 26m",
    "rating": 4.81,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "\"Powerhouse narrating duo Michael Kramer and Kate Reading bring their outstanding skills to this stunning continuation of the Stormlight Archive series.",
    "finished": true,
    "dateAdded": "2020-11-17",
    "cover": "BookImages/51+MGwgwVsL_80x80.jpg"
  },
  {
    "title": "Free the Darkness",
    "author": "Kel Kade",
    "narrator": "Nick Podehl",
    "length": "16h 34m",
    "rating": 4.65,
    "categories": [
      "Epic",
      "Coming of Age"
    ],
    "description": "Raised and trained in seclusion at a secret fortress on the edge of the northern wilds of the Kingdom of Ashai, a young warrior called Rezkin is unexpectedly thrust into the outworld when a terrible battle destroys all that he knows.",
    "finished": true,
    "dateAdded": "2020-09-23",
    "cover": "BookImages/51k2g6uPmfL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Prisoner of Azkaban, Book 3",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "11h 49m",
    "rating": 4.94,
    "categories": [
      "Social & Life Skills",
      "Action & Adventure",
      "Growing Up & Facts of Life",
      "Family Life"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "2020-09-23",
    "cover": "BookImages/51O29wSqEsL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Chamber of Secrets, Book 2",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "9h 2m",
    "rating": 4.92,
    "categories": [
      "Action & Adventure"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "2020-09-23",
    "cover": "BookImages/61fmfnA-uCL_80x80.jpg"
  },
  {
    "title": "Harry Potter and the Sorcerer's Stone, Book 1",
    "author": "J.K. Rowling",
    "narrator": "Jim Dale",
    "length": "8h 18m",
    "rating": 4.91,
    "categories": [
      "Action & Adventure"
    ],
    "description": "Jim Dale's Grammy Award-winning performance of J.",
    "finished": true,
    "dateAdded": "2020-09-23",
    "cover": "BookImages/51xJbFMRsxL_80x80.jpg"
  },
  {
    "title": "Shadows for Silence in the Forests of Hell & Perfect State",
    "author": "Brandon Sanderson",
    "narrator": "Christian Rummel, Kate Reading",
    "length": "4h 11m",
    "rating": 4.55,
    "categories": [
      "Anthologies & Short Stories"
    ],
    "description": "Shadows for Silence in the Forest of Hell is a novella set in the Cosmere.",
    "finished": true,
    "dateAdded": "2020-08-27",
    "cover": "BookImages/51r8gJuqvPL_80x80.jpg"
  },
  {
    "title": "Something Wicked This Way Comes",
    "author": "Ray Bradbury",
    "narrator": "Christian Rummel",
    "length": "9h 5m",
    "rating": 4.26,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Science Fiction"
    ],
    "description": "Few American novels written this century have endured in the heart and mind as has this one - Ray Bradbury's incomparable masterwork of the dark fantastic.",
    "finished": true,
    "dateAdded": "2020-08-08",
    "cover": "BookImages/5172mjVg2KL_80x80.jpg"
  },
  {
    "title": "The Art of Storytelling: From Parents to Professionals",
    "author": "Hannah B. Harvey, The Great Courses",
    "narrator": "Hannah B. Harvey",
    "length": "12h 30m",
    "rating": 3.94,
    "categories": [
      "Communication & Social Skills"
    ],
    "description": "An absolute treat for the heart and mind, these 24 lectures demonstrate how to master the art of storytelling, offering insight into the process of crafting and delivering a tale to enhancing the stories you tell everyday - to your children at bedtime, in your conversational anecdotes, and in your presentations at work.",
    "finished": true,
    "dateAdded": "2020-08-08",
    "cover": "BookImages/51FWmux2u+L_80x80.jpg"
  },
  {
    "title": "The Tales of Beedle the Bard",
    "author": "J.K. Rowling",
    "narrator": "Warwick Davis, Noma Dumezweni, Jason Isaacs, Jude Law, Evanna Lynch, Sally Mortemore, Bonnie Wright",
    "length": "1h 35m",
    "rating": 4.59,
    "categories": [
      "Action & Adventure",
      "Collections & Anthologies"
    ],
    "description": "A collection of well-loved stories for witches and wizards of all ages, The Tales of Beedle the Bard are the wizarding world's Grimm's Fairytales.",
    "finished": true,
    "dateAdded": "2020-07-16",
    "cover": "BookImages/51xmjwvJL7L_80x80.jpg"
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "narrator": "Michael York",
    "length": "8h 0m",
    "rating": 4.11,
    "categories": [
      "Classics",
      "Dystopian",
      "Hard Science Fiction",
      "Genetic Engineering"
    ],
    "description": "Originally published in 1932, this outstanding work of literature is more crucial and relevant today than ever before.",
    "finished": true,
    "dateAdded": "2020-05-11",
    "cover": "BookImages/51PpzUbiLeL_80x80.jpg"
  },
  {
    "title": "Watership Down",
    "author": "Richard Adams",
    "narrator": "Peter Capaldi",
    "length": "17h 31m",
    "rating": 4.78,
    "categories": [
      "Classics",
      "Epic",
      "Coming of Age",
      "Movie, TV & Video Game Tie-Ins"
    ],
    "description": "One of the most beloved novels of our time, Watership Down is an epic journey, a stirring tale of adventure, courage, and survival.",
    "finished": true,
    "dateAdded": "2020-05-11",
    "cover": "BookImages/512H-gZMD-L_80x80.jpg"
  },
  {
    "title": "Walden",
    "author": "Henry David Thoreau",
    "narrator": "Alec Sand",
    "length": "10h 5m",
    "rating": 4.11,
    "categories": [
      "Classics",
      "Outdoors & Nature",
      "Authors",
      "Nature & Ecology"
    ],
    "description": "Thoreau's classic account of the solitary life, describing his attempts to simplify his life and sort out his priorities by living alone in a cabin beside Walden Pond for nearly two years, is one of the most influential books ever written.",
    "finished": true,
    "dateAdded": "2020-03-07",
    "cover": "BookImages/410WH8fwJaL_80x80.jpg"
  },
  {
    "title": "Data Analytics: 3 Books in 1",
    "author": "J. F. Thompson",
    "narrator": "Weston Gritt",
    "length": "5h 7m",
    "rating": 4.48,
    "categories": [
      "Mathematics"
    ],
    "description": "Data analytics is used in the real world in a lot of jobs that you may be looking to get yourself into.",
    "finished": true,
    "dateAdded": "2020-02-24",
    "cover": "BookImages/51N89hBeOvL_80x80.jpg"
  },
  {
    "title": "Letters from a Stoic",
    "author": "Lucius Seneca",
    "narrator": "Austin Vanfleet",
    "length": "6h 19m",
    "rating": 4.56,
    "categories": [
      "Philosophy",
      "Ethics & Morality",
      "Greek & Roman",
      "Memoirs, Diaries & Correspondence"
    ],
    "description": "Seneca's Letters from a Stoic is considered one of the thought-leaders of philosophy in the history of classical literature.",
    "finished": true,
    "dateAdded": "2020-02-24",
    "cover": "BookImages/61pNl5OvsbL_80x80.jpg"
  },
  {
    "title": "Antifragile",
    "author": "Nassim Nicholas Taleb",
    "narrator": "Joe Ochman",
    "length": "16h 14m",
    "rating": 4.49,
    "categories": [
      "Philosophy",
      "Decision-Making & Problem Solving",
      "Stocks",
      "Social Sciences",
      "Sociology"
    ],
    "description": "From the best-selling author of The Black Swan and one of the foremost thinkers of our time, Nassim Nicholas Taleb, a book on how some things actually benefit from disorder.",
    "finished": true,
    "dateAdded": "2020-02-24",
    "cover": "BookImages/51yVeIZ2ymL_80x80.jpg"
  },
  {
    "title": "Artificial Unintelligence",
    "author": "Meredith Broussard",
    "narrator": "Andrea Emmes",
    "length": "7h 46m",
    "rating": 4.22,
    "categories": [
      "Computer Science",
      "Technology & Society"
    ],
    "description": "In Artificial Unintelligence, Meredith Broussard argues that our collective enthusiasm for applying computer technology to every aspect of life has resulted in a tremendous amount of poorly designed systems.",
    "finished": true,
    "dateAdded": "2020-02-24",
    "cover": "BookImages/51n20KQLBtL_80x80.jpg"
  },
  {
    "title": "Gloomwalker",
    "author": "Alex Lang",
    "narrator": "Guy Williams",
    "length": "14h 49m",
    "rating": 3.83,
    "categories": [
      "Fantasy"
    ],
    "description": "As a boy of 11, Kyris made a vow to kill a man.",
    "finished": true,
    "dateAdded": "2019-12-30",
    "cover": "BookImages/51VIYx7P6eL_80x80.jpg"
  },
  {
    "title": "Our Magnificent Bastard Tongue",
    "author": "John McWhorter",
    "narrator": "John McWhorter",
    "length": "5h 22m",
    "rating": 4.1,
    "categories": [
      "World",
      "Social Sciences",
      "Words, Language & Grammar"
    ],
    "description": "A survey of the quirks and quandaries of the English language, focusing on our strange and wonderful grammar.",
    "finished": true,
    "dateAdded": "2019-09-04",
    "cover": "BookImages/51pPcRGTCrL_80x80.jpg"
  },
  {
    "title": "Altered Carbon",
    "author": "Richard K. Morgan",
    "narrator": "Todd McLaren",
    "length": "17h 10m",
    "rating": 4.28,
    "categories": [
      "Fantasy",
      "Science Fiction"
    ],
    "description": "In the 25th century, humankind has spread throughout the galaxy, monitored by the watchful eye of the U.",
    "finished": true,
    "dateAdded": "2019-09-04",
    "cover": "BookImages/51iyAjqG1zL_80x80.jpg"
  },
  {
    "title": "The Shadow of the Wind",
    "author": "Carlos Ruiz Zafón",
    "narrator": "Jonathan Davis",
    "length": "18h 5m",
    "rating": 4.26,
    "categories": [
      "Literary Fiction",
      "Historical Fiction"
    ],
    "description": "Barry Award Book Sense Book of the Year Borders Original Voices Award Gumshoe Award Horror Guild Award Joseph-Beth and Davis-Kidd Booksellers Fiction Award NYPL Books to Remember Barcelona, 1945: Just after the war, a great world city lies in shadow, nursing its wounds, and a boy named Daniel awakes on his 11th birthday to find that he can no longer remember his mother's face.",
    "finished": true,
    "dateAdded": "2019-09-04",
    "cover": "BookImages/51TEkM+zRKL_80x80.jpg"
  },
  {
    "title": "In the Woods",
    "author": "Tana French",
    "narrator": "Steven Crossley",
    "length": "20h 24m",
    "rating": 4.12,
    "categories": [
      "Suspense",
      "Psychological",
      "Crime Fiction",
      "Police Procedurals"
    ],
    "description": "Anthony Award winner Edgar Allan Poe Award for Best Novel winner Macavity Award winner The bestselling debut, with over a million copies sold, that launched Tana French, author of the forthcoming novel The Hunter and “the most important crime novelist to emerge in the past 10 years” (The Washington Post).",
    "finished": true,
    "dateAdded": "2019-07-24",
    "cover": "BookImages/51b2mt7fyOL_80x80.jpg"
  },
  {
    "title": "Understanding Complexity",
    "author": "Scott E. Page, The Great Courses",
    "narrator": "Scott E. Page",
    "length": "6h 4m",
    "rating": 4.59,
    "categories": [
      "Social Sciences",
      "Theory"
    ],
    "description": "Recent years have seen the introduction of concepts from the new and exciting field of complexity science that have captivated the attention of economists, sociologists, engineers, businesspeople, and many others.",
    "finished": true,
    "dateAdded": "2019-06-26",
    "cover": "BookImages/51FnCAYMjJL_80x80.jpg"
  },
  {
    "title": "The Great Ideas of Philosophy, 2nd Edition",
    "author": "Daniel N. Robinson, The Great Courses",
    "narrator": "Daniel N. Robinson",
    "length": "30h 11m",
    "rating": 4.45,
    "categories": [
      "Philosophy"
    ],
    "description": "Grasp the important ideas that have served as the backbone of philosophy across the ages with this extraordinary 60-lecture series.",
    "finished": true,
    "dateAdded": "2019-06-26",
    "cover": "BookImages/51RVaGZqD-L_80x80.jpg"
  },
  {
    "title": "The Science of Information: From Language to Black Holes",
    "author": "Benjamin Schumacher, The Great Courses",
    "narrator": "Benjamin Schumacher",
    "length": "12h 19m",
    "rating": 4.58,
    "categories": [
      "Physics"
    ],
    "description": "The science of information is the most influential, yet perhaps least appreciated field in science today.",
    "finished": true,
    "dateAdded": "2019-06-26",
    "cover": "BookImages/51U9WNEt0xL_80x80.jpg"
  },
  {
    "title": "The Way of Kings",
    "author": "Brandon Sanderson",
    "narrator": "Kate Reading, Michael Kramer",
    "length": "45h 30m",
    "rating": 4.84,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "From number one New York Times best-selling author Brandon Sanderson, The Way of Kings, book one of the Stormlight Archive, begins an incredible new saga of epic proportion.",
    "finished": true,
    "dateAdded": "2019-05-07",
    "cover": "BookImages/51hAwcG3oNL_80x80.jpg"
  },
  {
    "title": "The Dispatcher",
    "author": "John Scalzi",
    "narrator": "Zachary Quinto",
    "length": "2h 18m",
    "rating": 4.5,
    "categories": [
      "Fantasy",
      "Adventure"
    ],
    "description": "Earphones Award Winner (AudioFile Magazine)  Winner, 2017 APA Audie Awards - Original Work  From master storyteller and Hugo Award-winner John Scalzi comes this Audible Original novella, winner of the 2017 Audie Award for Best Original Work.",
    "finished": true,
    "dateAdded": "2019-04-16",
    "cover": "BookImages/51m35+cvJYL_80x80.jpg"
  },
  {
    "title": "The Darkwater Bride",
    "author": "Marty Ross",
    "narrator": "Clare Corbett, Donal Finn, Jamie Glover, Freya Mavor, Adrian Scarborough",
    "length": "6h 45m",
    "rating": 3.76,
    "categories": [
      "Ghosts",
      "Historical"
    ],
    "description": "Late Victorian London.",
    "finished": true,
    "dateAdded": "2019-04-16",
    "cover": "BookImages/51ju0WbTTlL_80x80.jpg"
  },
  {
    "title": "Brain on Fire",
    "author": "Susannah Cahalan",
    "narrator": "Heather Henderson",
    "length": "7h 48m",
    "rating": 4.28,
    "categories": [
      "Medical",
      "Physical Illness & Disease"
    ],
    "description": "In 2009, Susannah Cahalan woke up in a strange hospital room strapped to a bed, under guard, and unable to move or speak.",
    "finished": true,
    "dateAdded": "2019-03-27",
    "cover": "BookImages/51KrHkCOncL_80x80.jpg"
  },
  {
    "title": "Sherlock Holmes: The Definitive Collection",
    "author": "Arthur Conan Doyle, Stephen Fry - introductions",
    "narrator": "Stephen Fry",
    "length": "71h 57m",
    "rating": 4.84,
    "categories": [
      "Traditional Detectives"
    ],
    "description": "\"Fry's Holmes is crisp and high-handed, his Watson enthusiastic and bemused, and the rest of the narration colorful without being mannered.",
    "finished": false,
    "dateAdded": "2019-02-24",
    "cover": "BookImages/51JbzD3S8oL_80x80.jpg"
  },
  {
    "title": "Skyward",
    "author": "Brandon Sanderson",
    "narrator": "Suzy Jackson",
    "length": "15h 28m",
    "rating": 4.8,
    "categories": [
      "Dystopian",
      "Action & Adventure",
      "Fantasy"
    ],
    "description": "\"Narrator Suzy Jackson's assured, brassy tones and forceful delivery are an exceptional match for Sanderson's high-stakes, battle-driven space opera.",
    "finished": true,
    "dateAdded": "2019-01-28",
    "cover": "BookImages/5184kxKmovL_80x80.jpg"
  },
  {
    "title": "Meditations",
    "author": "Marcus Aurelius, George Long - translator, Duncan Steen - translator",
    "narrator": "Duncan Steen",
    "length": "5h 9m",
    "rating": 4.59,
    "categories": [
      "Classics",
      "Philosophy",
      "Greek & Roman",
      "Collections"
    ],
    "description": "One of the most significant books ever written by a head of state, the Meditations are a collection of philosophical thoughts by the Emperor Marcus Aurelius (121 - 180 ce).",
    "finished": true,
    "dateAdded": "2019-01-28",
    "cover": "BookImages/51E2LCvj1ZL_80x80.jpg"
  },
  {
    "title": "The Christmas Hirelings",
    "author": "Mary Elizabeth Braddon",
    "narrator": "Richard Armitage",
    "length": "3h 53m",
    "rating": 4.33,
    "categories": [
      "Classics"
    ],
    "description": "Richard Armitage modernizes a classic hidden gem of Christmas Past… Sir John Penlyon is planning to spend Christmas at his estate with his niece and his friend Danby, the closest thing he has to family since disowning his daughter years ago.",
    "finished": true,
    "dateAdded": "2018-12-10",
    "cover": "BookImages/5181yv5E95L_80x80.jpg"
  },
  {
    "title": "Real Magic",
    "author": "Dean Radin",
    "narrator": "Mark Bramhall",
    "length": "8h 8m",
    "rating": 4.64,
    "categories": [
      "Psychology",
      "Personal Success",
      "Parapsychology"
    ],
    "description": "The chief scientist at the Institute of Noetic Sciences (IONS) turns a critical eye toward such practices as telepathy, clairvoyance, precognition, and psychokinesis.",
    "finished": true,
    "dateAdded": "2018-11-29",
    "cover": "BookImages/51wblqImxrL_80x80.jpg"
  },
  {
    "title": "The Society of the Sword Trilogy",
    "author": "Duncan M. Hamilton",
    "narrator": "Derek Perkins",
    "length": "31h 24m",
    "rating": 4.53,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Sword & Sorcery",
      "Anthologies & Short Stories"
    ],
    "description": "Fans have described the trilogy as Game of Thrones meets The Three Musketeers.",
    "finished": true,
    "dateAdded": "2018-11-29",
    "cover": "BookImages/51iUunddQ3L_80x80.jpg"
  },
  {
    "title": "Lolita",
    "author": "Vladimir Nabokov, Claire Messud",
    "narrator": "Jeremy Irons, Cassandra Campbell",
    "length": "11h 56m",
    "rating": 4.42,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Coming of Age"
    ],
    "description": "The most famous and controversial novel from one of the greatest writers of the twentieth century tells the story of Humbert Humbert’s obsessive, devouring, and doomed passion for the nymphet Dolores Haze.",
    "finished": true,
    "dateAdded": "2018-11-29",
    "cover": "BookImages/318o-KWzn8L_80x80.jpg"
  },
  {
    "title": "Oryx and Crake",
    "author": "Margaret Atwood",
    "narrator": "Campbell Scott",
    "length": "10h 30m",
    "rating": 4.32,
    "categories": [
      "Literary Fiction",
      "Dystopian",
      "Post-Apocalyptic"
    ],
    "description": "A stunning and provocative new novel by the internationally celebrated author of The Blind Assassin, winner of the Booker Prize  Margaret Atwood’s new novel is so utterly compelling, so prescient, so relevant, so terrifyingly-all-too-likely-to-be-true, that listeners may find their view of the world forever changed after listening to it.",
    "finished": true,
    "dateAdded": "2018-11-29",
    "cover": "BookImages/51PG+W+o1pL_80x80.jpg"
  },
  {
    "title": "Rise of the Robots",
    "author": "Martin Ford",
    "narrator": "Jeff Cummings",
    "length": "10h 18m",
    "rating": 4.27,
    "categories": [
      "Technology & Society",
      "Economics",
      "Politics & Government",
      "Automation & Robotics"
    ],
    "description": "In a world of self-driving cars and big data, smart algorithms and Siri, we know that artificial intelligence is getting smarter every day.",
    "finished": true,
    "dateAdded": "2018-10-12",
    "cover": "BookImages/51Pt2bpmbTL_80x80.jpg"
  },
  {
    "title": "Reality Is Broken",
    "author": "Jane McGonigal",
    "narrator": "Julia Whelan",
    "length": "13h 23m",
    "rating": 4.17,
    "categories": [
      "Psychology",
      "Social Sciences",
      "Sociology",
      "Technology & Society"
    ],
    "description": "In today’s society, games are fulfilling real human needs in ways that reality is not.",
    "finished": true,
    "dateAdded": "2018-10-12",
    "cover": "BookImages/51cIhdwcZWL_80x80.jpg"
  },
  {
    "title": "The Sword of Light: The Complete Trilogy",
    "author": "Aaron Hodges",
    "narrator": "David Stifel",
    "length": "29h 40m",
    "rating": 3.81,
    "categories": [
      "Fantasy",
      "Epic",
      "Anthologies & Short Stories"
    ],
    "description": "For 500 years, the Gods have united the Three Nations in harmony.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51Qn74xDHjL_80x80.jpg"
  },
  {
    "title": "Big Data",
    "author": "Viktor Mayer-Schöberger, Kenneth Cukier",
    "narrator": "Jonathan Hogan",
    "length": "8h 36m",
    "rating": 4.15,
    "categories": [
      "Management",
      "Technology & Society"
    ],
    "description": "Oxford professor and author Viktor Mayer-Schönberger joins Economist data editor and commentator Kenneth Cukier to deliver insight into the hottest trend in technology.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51YKRl2hTbL_80x80.jpg"
  },
  {
    "title": "White Fang",
    "author": "Jack London",
    "narrator": "John Lee",
    "length": "7h 49m",
    "rating": 4.6,
    "categories": [
      "Classics"
    ],
    "description": "In the desolate, frozen northwest of Canada, a lone wolf fights a heroic daily fight for life in the wild.",
    "finished": true,
    "dateAdded": "2018-08-05",
    "cover": "BookImages/51COTLVBM4L_80x80.jpg"
  },
  {
    "title": "A Wrinkle in Time",
    "author": "Madeleine L'Engle",
    "narrator": "Hope Davis, Ava DuVernay, Madeleine L'Engle, Charlotte Jones Voiklis",
    "length": "6h 27m",
    "rating": 4.31,
    "categories": [
      "Fantasy & Magic",
      "Classics",
      "Time Travel"
    ],
    "description": "Madeleine L’Engle’s ground-breaking science fiction and fantasy classic, now a major motion picture.",
    "finished": true,
    "dateAdded": "2018-07-16",
    "cover": "BookImages/61Pl0vLNfDL_80x80.jpg"
  },
  {
    "title": "Cloud Atlas (20th Anniversary Edition)",
    "author": "David Mitchell, Gabrielle Zevin",
    "narrator": "Scott Brick, Cassandra Campbell, Kim Mai Guest, Kirby Heyborne, John Lee, Richard Matthews, David Mitchell, Gabrielle Zevin",
    "length": "19h 48m",
    "rating": 4.11,
    "categories": [
      "Literary Fiction",
      "Epic",
      "Historical Fiction"
    ],
    "description": "By the New York Times best-selling author of The Bone Clocks  Shortlisted for the Man Booker Prize A postmodern visionary and one of the leading voices in 21st-century fiction, David Mitchell combines flat-out adventure, a Nabokovian love of puzzles, a keen eye for character, and a taste for mind-bending, philosophical, and scientific speculation in the tradition of Umberto Eco, Haruki Murakami, and Philip K.",
    "finished": true,
    "dateAdded": "2018-07-16",
    "cover": "BookImages/51WiFmPVACL_80x80.jpg"
  },
  {
    "title": "The Paper Magician",
    "author": "Charlie N. Holmberg",
    "narrator": "Amy McFadden",
    "length": "7h 25m",
    "rating": 4.05,
    "categories": [
      "Steampunk",
      "Paranormal",
      "Gaslamp",
      "Fantasy"
    ],
    "description": "“Charlie is a vibrant writer with an excellent voice and great world building.",
    "finished": true,
    "dateAdded": "2018-05-21",
    "cover": "BookImages/5155AhE1H4L_80x80.jpg"
  },
  {
    "title": "Ready Player One",
    "author": "Ernest Cline",
    "narrator": "Wil Wheaton",
    "length": "15h 40m",
    "rating": 4.76,
    "categories": [
      "Fantasy",
      "Adventure",
      "Dystopian",
      "Hard Science Fiction"
    ],
    "description": "#1 NEW YORK TIMES BESTSELLER • Now a major motion picture directed by Steven Spielberg.",
    "finished": true,
    "dateAdded": "2018-05-21",
    "cover": "BookImages/41Eptolyo+L_80x80.jpg"
  },
  {
    "title": "Sync",
    "author": "Steven Strogatz",
    "narrator": "Kevin T. Collins",
    "length": "13h 58m",
    "rating": 4.23,
    "categories": [
      "Biology",
      "Physics"
    ],
    "description": "The tendency to synchronize may be the most mysterious and pervasive drive in all of nature.",
    "finished": true,
    "dateAdded": "2018-05-21",
    "cover": "BookImages/51ZPERweqtL_80x80.jpg"
  },
  {
    "title": "American Pharoah",
    "author": "Joe Drape",
    "narrator": "Aaron Abano",
    "length": "8h 36m",
    "rating": 3.88,
    "categories": [
      "Sports",
      "Entertainment & Celebrities",
      "Equestrian Sports",
      "Sports History"
    ],
    "description": "New York Times best seller.",
    "finished": true,
    "dateAdded": "2018-05-06",
    "cover": "BookImages/51Y-XZhxpBL_80x80.jpg"
  },
  {
    "title": "The Three-Body Problem",
    "author": "Cixin Liu",
    "narrator": "Luke Daniels",
    "length": "13h 26m",
    "rating": 4.4,
    "categories": [
      "Literary Fiction",
      "Hard Science Fiction",
      "First Contact",
      "Space Exploration"
    ],
    "description": "Soon to be a Netflix Original series! “War of the Worlds for the 21st century.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51bCgl4RT5L_80x80.jpg"
  },
  {
    "title": "West Cork",
    "author": "Sam Bungey, Jennifer Forde",
    "narrator": "Sam Bungey, Jennifer Forde",
    "length": "7h 50m",
    "rating": 4.08,
    "categories": [
      "Murder"
    ],
    "description": "Two days before Christmas 1996, the broken, battered body of Sophie Toscan du Plantier was found outside her vacation home in West Cork, a serene region on Ireland’s idyllic southern coast.",
    "finished": true,
    "dateAdded": "2018-02-08",
    "cover": "BookImages/614EzfyjFEL_80x80.jpg"
  },
  {
    "title": "Gather ‘Round the Sound",
    "author": "Paulo Coelho, Yvonne Morrison, Charles Dickens",
    "narrator": "Angele Masters, Daniel Frances Berenson, Magda Szubanski, Simon Callow, Dan Starkey, John Banks, Vern",
    "length": "1h 12m",
    "rating": 3.23,
    "categories": [
      "Contemporary Fiction"
    ],
    "description": "Gather 'Round the Sound: Holiday Stories from Beloved Authors and Great Performers Across the Globe 2017 has been a monumental year for Audible, having just celebrated our 20th anniversary, a milestone that would have never been possible without our wonderful and loyal listeners.",
    "finished": true,
    "dateAdded": "2017-12-10",
    "cover": "BookImages/519bexV7O-L_80x80.jpg"
  },
  {
    "title": "Arcanum Unbounded: The Cosmere Collection",
    "author": "Brandon Sanderson",
    "narrator": "Michael Kramer, Kate Reading",
    "length": "22h 31m",
    "rating": 4.82,
    "categories": [
      "Epic",
      "Short Stories",
      "Anthologies & Short Stories"
    ],
    "description": "An all-new Stormlight Archive novella, Edgedancer, is the crown jewel of Arcanum Unbounded: The Cosmere Collection, the first audiobook of short fiction by number New York Times best-selling author Brandon Sanderson.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51CMXJmtxqL_80x80.jpg"
  },
  {
    "title": "Oathbringer",
    "author": "Brandon Sanderson",
    "narrator": "Kate Reading, Michael Kramer",
    "length": "55h 5m",
    "rating": 4.84,
    "categories": [
      "Action & Adventure",
      "Epic",
      "Military"
    ],
    "description": "The eagerly awaited sequel to the New York Times best-selling Words of Radiance, from epic fantasy author Brandon Sanderson at the top of his game.",
    "finished": true,
    "dateAdded": "2017-11-07",
    "cover": "BookImages/51fKpuTPMdL_80x80.jpg"
  },
  {
    "title": "The Grace of Kings",
    "author": "Ken Liu",
    "narrator": "Michael Kramer",
    "length": "21h 37m",
    "rating": 4.15,
    "categories": [
      "Literary Fiction",
      "Epic",
      "Historical",
      "Action & Adventure"
    ],
    "description": "Two men rebel together against tyranny - and then become rivals - in this first sweeping book of an epic fantasy series from Ken Liu, recipient of Hugo, Nebula, and World Fantasy awards.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/514JddjMrcL_80x80.jpg"
  },
  {
    "title": "The Lions of Lucerne",
    "author": "Brad Thor",
    "narrator": "Armand Schultz",
    "length": "15h 23m",
    "rating": 4.36,
    "categories": [
      "Suspense",
      "Political",
      "War & Military",
      "Traditional Detectives",
      "Military",
      "Espionage"
    ],
    "description": "In a daring and chilling debut, Brad Thor draws us into a sinister labyrinth of political intrigue and international terrorism, serving up an explosive cocktail of unrelenting action as one man is pushed to the edge.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51rXDlyAC7L_80x80.jpg"
  },
  {
    "title": "Private",
    "author": "James Patterson, Maxine Paetro",
    "narrator": "Peter Hermann",
    "length": "7h 4m",
    "rating": 4.02,
    "categories": [
      "Suspense",
      "Crime Fiction",
      "Police Procedurals"
    ],
    "description": "The police can't help you.",
    "finished": true,
    "dateAdded": "2017-08-20",
    "cover": "BookImages/51+0-R3zExL_80x80.jpg"
  },
  {
    "title": "The Handmaid's Tale: Special Edition",
    "author": "Margaret Atwood, Valerie Martin - essay",
    "narrator": "Claire Danes, full cast, Margaret Atwood, Tim Gerard Reynolds",
    "length": "12h 6m",
    "rating": 4.48,
    "categories": [
      "Literary Fiction",
      "Dystopian",
      "Women's Fiction"
    ],
    "description": "\"Are there any questions?\" The final line in Margaret Atwood's modern classic, The Handmaid's Tale, has teased and perplexed fans since the book's original release more than 30 years ago.",
    "finished": true,
    "dateAdded": "2017-08-15",
    "cover": "BookImages/51vj7MXbQpL_80x80.jpg"
  },
  {
    "title": "The Dark Tower I",
    "author": "Stephen King",
    "narrator": "George Guidall",
    "length": "7h 20m",
    "rating": 4.33,
    "categories": [
      "Fantasy",
      "Suspense",
      "Supernatural",
      "Movie, TV & Video Game Tie-Ins"
    ],
    "description": "“An impressive work of mythic magnitude that may turn out to be Stephen King’s greatest literary achievement” (The Atlanta Journal-Constitution), The Gunslinger is the first volume in the epic Dark Tower Series.",
    "finished": true,
    "dateAdded": "2017-08-15",
    "cover": "BookImages/41u6rwC56UL_80x80.jpg"
  },
  {
    "title": "Never Let Me Go",
    "author": "Kazuo Ishiguro",
    "narrator": "Rosalyn Landor",
    "length": "9h 40m",
    "rating": 4.0,
    "categories": [
      "Literary Fiction",
      "Psychological",
      "Coming of Age",
      "Genetic Engineering"
    ],
    "description": "NOBEL PRIZE WINNER • From the acclaimed, bestselling author of The Remains of the Day comes “a Gothic tour de force\" (The New York Times) with an extraordinary twist—a moving, suspenseful, beautifully atmospheric modern classic.",
    "finished": true,
    "dateAdded": "2017-08-15",
    "cover": "BookImages/51TTmfVeNpL_80x80.jpg"
  },
  {
    "title": "Cesar Millan's Guide to Audiobooks for Dogs",
    "author": "Cesar Millan",
    "narrator": "Cesar Millan",
    "length": "0h 47m",
    "rating": 4.04,
    "categories": [],
    "description": "Cesar Millan - the best-selling author, TV star, and internationally acclaimed dog-behavior expert - introduces his favorite way to keep our canine companions calm and happy when they're alone.",
    "finished": true,
    "dateAdded": "2017-08-09",
    "cover": "BookImages/51SfmRn0jwL_80x80.jpg"
  },
  {
    "title": "Speaks the Nightbird",
    "author": "Robert R. McCammon",
    "narrator": "Edoardo Ballerini",
    "length": "30h 42m",
    "rating": 4.36,
    "categories": [
      "Suspense",
      "Supernatural",
      "Historical"
    ],
    "description": "Audie Award Nominee, Fiction, 2013 Judgment of the WitchThe Carolinas, 1699: The citizens of Fount Royal believe a witch has cursed their town with inexplicable tragedies - and they demand that beautiful widow Rachel Howarth be tried and executed for witchcraft.",
    "finished": true,
    "dateAdded": "2017-05-16",
    "cover": "BookImages/61z1+4cRzFL_80x80.jpg"
  },
  {
    "title": "The Wise Man's Fear",
    "author": "Patrick Rothfuss",
    "narrator": "Nick Podehl",
    "length": "42h 55m",
    "rating": 4.8,
    "categories": [
      "Fantasy",
      "Epic",
      "Paranormal",
      "Action & Adventure"
    ],
    "description": "Discover #1 New York Times-bestselling Patrick Rothfuss’ epic fantasy series, The Kingkiller Chronicle.",
    "finished": true,
    "dateAdded": "2017-05-16",
    "cover": "BookImages/51f2XSzLauL_80x80.jpg"
  },
  {
    "title": "Even Cowgirls Get the Blues",
    "author": "Tom Robbins",
    "narrator": "Michael Nouri",
    "length": "13h 36m",
    "rating": 4.12,
    "categories": [
      "Literary Fiction",
      "Satire",
      "Action & Adventure",
      "Metaphysical & Visionary"
    ],
    "description": "Sissy Hankshaw, an almost flawlessly beautiful small-town girl with big-time dreams, hitchhikes her way into your heart, your hopes, and your sleeping bag in Tom Robbins's magical, funny, and most famous novel.",
    "finished": true,
    "dateAdded": "2017-04-25",
    "cover": "BookImages/616ueFYb7RL_80x80.jpg"
  },
  {
    "title": "In the Lake of the Woods",
    "author": "Tim O'Brien",
    "narrator": "L. J. Ganser",
    "length": "8h 50m",
    "rating": 3.77,
    "categories": [
      "Psychological",
      "Suspense",
      "Political",
      "Mystery",
      "War & Military",
      "Contemporary Fiction",
      "Military"
    ],
    "description": "On a lake deep in the Minnesota woods, Kathy Wade comforts her husband John, a rising political star, after a devastating electoral defeat in which he's been pursued by rumors of the atrocities he committed in Vietnam.",
    "finished": true,
    "dateAdded": "",
    "cover": "BookImages/51OmsQUq8SL_80x80.jpg"
  },
  {
    "title": "Mindfulness",
    "author": "Mark Williams, Danny Penman, Jon Kabat-Zinn - foreword",
    "narrator": "Mark Williams, Jon Kabat-Zinn (foreword)",
    "length": "2h 35m",
    "rating": 4.29,
    "categories": [
      "Meditation",
      "Mood Disorders",
      "Psychotherapy",
      "Stress Management"
    ],
    "description": "Everyday life is so frantic and full of troubles that we have largely forgotten how to live a joyful existence.",
    "finished": true,
    "dateAdded": "2017-04-04",
    "cover": "BookImages/51N+nK9capL_80x80.jpg"
  },
  {
    "title": "Lightning",
    "author": "Dean Koontz",
    "narrator": "Christopher Lane",
    "length": "12h 58m",
    "rating": 4.39,
    "categories": [
      "Suspense",
      "Supernatural",
      "Short Stories",
      "Women's Fiction",
      "Anthologies & Short Stories",
      "Crime Thrillers",
      "Time Travel"
    ],
    "description": "#1 New York Times bestselling author Dean Koontz’s brilliantly thrilling novel of suspense.",
    "finished": true,
    "dateAdded": "2017-04-04",
    "cover": "BookImages/51TxqJzVdHL_80x80.jpg"
  },
  {
    "title": "The Mountain Story",
    "author": "Lori Lansens",
    "narrator": "Corey Brill",
    "length": "10h 3m",
    "rating": 4.43,
    "categories": [
      "Literary Fiction",
      "Women's Fiction",
      "Women's Adventure"
    ],
    "description": "From New York Times best-selling author Lori Lansens comes a harrowing survival story about four strangers who spend five days lost in the mountain wilderness above Palm Springs.",
    "finished": true,
    "dateAdded": "2017-03-21",
    "cover": "BookImages/51sfs3NrB+L_80x80.jpg"
  },
  {
    "title": "The Sympathizer",
    "author": "Viet Thanh Nguyen",
    "narrator": "Francois Chau",
    "length": "13h 53m",
    "rating": 4.33,
    "categories": [
      "Literary Fiction",
      "Espionage",
      "Asian American & Pacific Islander"
    ],
    "description": "Pulitzer Prize, Fiction, 2016  A profound, startling, and beautifully crafted debut novel, The Sympathizer is the story of a man of two minds, someone whose political beliefs clash with his individual loyalties.",
    "finished": true,
    "dateAdded": "2017-03-13",
    "cover": "BookImages/41n4VPBabNL_80x80.jpg"
  },
  {
    "title": "The Blind Assassin",
    "author": "Margaret Atwood",
    "narrator": "Margot Dionne",
    "length": "18h 27m",
    "rating": 3.89,
    "categories": [
      "Literary Fiction",
      "Dystopian",
      "Women's Fiction",
      "World Literature"
    ],
    "description": "Margaret Atwood takes the art of storytelling to new heights in a dazzling new novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist.",
    "finished": true,
    "dateAdded": "2017-02-05",
    "cover": "BookImages/514gtaxBeRL_80x80.jpg"
  },
  {
    "title": "Adventures of Huckleberry Finn: A Signature Performance by Elijah Wood",
    "author": "Mark Twain",
    "narrator": "Elijah Wood",
    "length": "10h 10m",
    "rating": 4.58,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Coming of Age"
    ],
    "description": "Earphones Award Winner (AudioFile Magazine) Ernest Hemingway said, “All modern American literature comes from one book by Mark Twain called Huckleberry Finn\".",
    "finished": true,
    "dateAdded": "2016-12-30",
    "cover": "BookImages/517qEjjMXyL_80x80.jpg"
  },
  {
    "title": "The Cuckoo's Calling",
    "author": "Robert Galbraith",
    "narrator": "Robert Glenister",
    "length": "15h 54m",
    "rating": 4.44,
    "categories": [
      "Crime Fiction",
      "Private Investigators"
    ],
    "description": "Published under a pseudonym, J.",
    "finished": true,
    "dateAdded": "2016-12-30",
    "cover": "BookImages/510w6itDJWL_80x80.jpg"
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez, Gregory Rabassa - translator",
    "narrator": "John Lee",
    "length": "14h 4m",
    "rating": 4.14,
    "categories": [
      "Classics",
      "Literary Fiction",
      "Magical Realism"
    ],
    "description": "Includes a bonus PDF with a character chart!  One of the twentieth century’s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world and the ultimate achievement in a Nobel Prize–winning career.",
    "finished": true,
    "dateAdded": "2016-12-30",
    "cover": "BookImages/51mUm2WjTNL_80x80.jpg"
  },
  {
    "title": "All the Light We Cannot See",
    "author": "Anthony Doerr",
    "narrator": "Zach Appelman",
    "length": "16h 2m",
    "rating": 4.52,
    "categories": [
      "Literary Fiction",
      "Historical Fiction",
      "War & Military"
    ],
    "description": "Winner of the 2015 Audie Award for Fiction Marie-Laure lives with her father in Paris near the Museum of Natural History, where he works as the master of its thousands of locks.",
    "finished": true,
    "dateAdded": "2016-12-13",
    "cover": "BookImages/51yYP57jLzL_80x80.jpg"
  }
];

// Helper functions for filtering and searching
function getUniqueCategories() {
  const categories = new Set();
  booksData.forEach(book => {
    book.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).sort();
}

function getUniqueAuthors() {
  const authors = new Set();
  booksData.forEach(book => authors.add(book.author));
  return Array.from(authors).sort();
}

function searchBooks(query) {
  if (!query) return booksData;
  
  const searchTerm = query.toLowerCase();
  return booksData.filter(book => 
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.description.toLowerCase().includes(searchTerm) ||
    book.categories.some(cat => cat.toLowerCase().includes(searchTerm))
  );
}

function filterByCategory(category) {
  if (!category || category === 'all') return booksData;
  return booksData.filter(book => book.categories.includes(category));
}

function filterByAuthor(author) {
  if (!author || author === 'all') return booksData;
  return booksData.filter(book => book.author === author);
}

function getBooksByRating(minRating = 0) {
  return booksData.filter(book => book.rating >= minRating).sort((a, b) => b.rating - a.rating);
}

function getRecentlyAdded(limit = 10) {
  return booksData
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, limit);
}

function getFinishedBooks() {
  return booksData.filter(book => book.finished);
}

function getCurrentlyReading() {
  return booksData.filter(book => !book.finished);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    booksData,
    getUniqueCategories,
    getUniqueAuthors,
    searchBooks,
    filterByCategory,
    filterByAuthor,
    getBooksByRating,
    getRecentlyAdded,
    getFinishedBooks,
    getCurrentlyReading
  };
}
