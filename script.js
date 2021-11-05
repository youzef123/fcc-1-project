window.onload = init;

// All the quotes and authors
const quotesCollection = [
    { quote:"Waste no more time arguing what a good man should be. Be One.",
    author:"-Marcus Aurelius" },
    { quote:"He who fears death will never do anything worth of a man who is alive.",
    author:"-Seneca" },
    { quote:"How long are you going to wait before you demand the best for yourself?",
    author:"-Epictetus" },
    { quote: "Wealth consists not in having great possessions, but in having few wants.",
     author: "-Epictetus"}
]
  
// Initial values of first load
function init(){
    generate();
}
// Wisdom Background Images
const bgImages = [
    "url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg')",
    "url('css/images/1.jpg')",
    "url('css/images/2.jpg')",
    "url('css/images/3.jpg')"
]

// It genertes quotes if the buttons is clicked
function generate(){
    document.body.style.backgroundImage = bgImages[Math.floor(Math.random() * bgImages.length)];
    const {quote, author} = randomQuote();
    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    const quoteInApiFormat = quote.replace(/\s/g,'%20');
    const authorApiFormat = author.replace(/\s/g,'%20');

    twitterLink += quoteInApiFormat + '%20' + authorApiFormat
    document.getElementById('tweet-quote').href = twitterLink
    document.getElementById('text').innerHTML = quote
    document.getElementById('author').innerHTML = author
}

// Gets called when the button clicked and generate random quotes
function randomQuote(){
  return quotesCollection[Math.floor(Math.random() * quotesCollection.length)]
}
