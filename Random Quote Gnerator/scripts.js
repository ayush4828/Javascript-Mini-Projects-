let quotes = [
"The secret of getting ahead is getting started. - Mark Twain",
  "Code is like humor. When you have to explain it, it’s bad. - Cory House",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "The best way to predict the future is to create it. - Peter Drucker",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
  "Dream big. Start small. Act now. - Robin Sharma",
  "Every expert was once a beginner. - Helen Hayes",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Success is not final; failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "Sometimes it’s the people no one imagines anything of who do the things no one can imagine. - Alan Turing",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "Failure is not the opposite of success; it’s part of success. - Arianna Huffington",
  "Make it work, make it right, make it fast. - Kent Beck",
  "What you do today can improve all your tomorrows. - Ralph Marston",
  "Small steps every day lead to big results. - Anonymous",
  "Learning never exhausts the mind. - Leonardo da Vinci",
"Life is really simple, but we insist on making it complicated. - Confucius",
"The purpose of our lives is to be happy. - Dalai Lama",
"In the middle of every difficulty lies opportunity. - Albert Einstein",
"Believe you can and you’re halfway there. - Theodore Roosevelt",
"Opportunities don't happen, you create them. - Chris Grosser",
"Act as if what you do makes a difference. It does. - William James",
"Do what you can, with what you have, where you are. - Theodore Roosevelt",
"It always seems impossible until it’s done. - Nelson Mandela",
"Try not to become a man of success, but rather try to become a man of value. - Albert Einstein",
"Happiness depends upon ourselves. - Aristotle",
"Turn your wounds into wisdom. - Oprah Winfrey",
"Life is either a daring adventure or nothing at all. - Helen Keller",
"Don't let yesterday take up too much of today. - Will Rogers",
"Everything you can imagine is real. - Pablo Picasso",
"The harder you work for something, the greater you’ll feel when you achieve it. - Anonymous",
"Sometimes later becomes never. Do it now. - Anonymous",
"The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
"The best revenge is massive success. - Frank Sinatra",
"Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
"Your time is limited, don't waste it living someone else’s life. - Steve Jobs",
"Don’t wait. The time will never be just right. - Napoleon Hill",
"Everything you’ve ever wanted is on the other side of fear. - George Addair",
"Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
"You become what you believe. - Oprah Winfrey",
"Your life becomes better when you become better. - Brian Tracy",
"Discipline is the bridge between goals and accomplishment. - Jim Rohn",
"Great things never come from comfort zones. - Anonymous",
"Do something today that your future self will thank you for. - Sean Patrick Flanery",
"You don't have to be great to start, but you have to start to be great. - Zig Ziglar"
];

let button = document.querySelector('button');
let quote =document.querySelector('h1');

button.addEventListener('click' , ()=>{
    const index = Math.floor(Math.random()*50);      //key step
    quote.textContent = quotes[index];

})
