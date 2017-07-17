// Array of Quotes
var quotes = [
  {
      quote:  'I am the greatest!',
      source: 'Muhammad Ali',
      citation: 'Liston vs Ali',
      year: '1964',
      color: 'darkslategrey',
      img: 'm1.jpg'
    },
    {
      quote:  ' Brotherhood is a two-way street.[.',
      source: 'Malcolm X',
      citation: 'Speech at Harvard Forum',
      year: '1964',
      color: 'darkblue',
      img: 'mx1.jpg'
    },
    {
      quote:  'Work is love made visible.',
      source: 'Kahlil Gibran',
      citation: 'The Prophet',
      year: '1923',
      color: 'cyan',
      img: 'theProphet.jpg'
    },
    {
      quote:  'I don\'t trust people who don\'t love themselves and tell me "I love you."',
      source: 'Maya Angelou',
      citation: 'The Distinguished Annie Clark Tanner Lecture',
      year: '1997',
      color: 'darkred',
      img: 'maya.jpg'
    },
    {
        quote:  'All types of knowledge, ultimately mean self knowledge.',
        source: 'Bruce Lee',
        citation: 'Bruce Lee: The Lost Interview',
        year: '1971',
        color: 'gold',
        img: 'brucelee.jpg'
  }
];
var shownQuotes = [];

// variables
var box = document.getElementById('quote-box');
var quoteElement = box.querySelectorAll('.quote')[0];
var sourceElement = box.querySelectorAll('.source')[0];
var citationElement = box.querySelectorAll('.citation')[0];
var yearElement = box.querySelectorAll('.year')[0];
var imgBox = document.getElementById('img-box');
var quoteButton = document.getElementById('loadQuote')

// function that randomizes the quotes by using math.random mulitplied by the length of the array (5) then floored to give us a random quote.
function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length)
}
//function that prints the quote
function printQuote () {
  var randomIndex = getRandomIndex();
  //starts the page with a random quote on page load
  var randomQuote = quotes.splice(randomIndex, 1)[0];
  //loads the quote text
  quoteElement.innerText = randomQuote.quote;
  //loads the string value from the array defined in var quotes
  citationElement.innerText = randomQuote.citation;
  //loads the year string from the quotes array
  yearElement.innerText = randomQuote.year;
  //loads the source of the quote
  sourceElement.innerText = randomQuote.source;
  if(citationElement != '1'){
    sourceElement.appendChild(yearElement);
    sourceElement.appendChild(citationElement);
  }
  //loads the picture into the div .img-box
  imgBox.style.backgroundImage = 'url(./img/' + randomQuote.img + ')';
  //loads the color associated with quotes
  document.body.style.backgroundColor= randomQuote.color;
  //uses pushes quote seen on screen to array shownQuotes
  shownQuotes.push(randomQuote);
  //colors the button to match the background color of the quote shown
  quoteButton.style.backgroundColor = randomQuote.color;
  //ensures that all quotes are shown before showing them again
  // if quotes array
  if (quotes.length === 0){
    quotes = shownQuotes;
    shownQuotes = [];
  }
}
printQuote();



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
