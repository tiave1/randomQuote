// Array of Quotes
var quotes = [
  {
    quote:  'I am the greatest, I said that even before I knew I was.',
    source: 'Muhammad Ali',
    citation: 'foo',
    year: 'bar'
  },
  {
    quote:  'The future belongs to those who prepare for it today.',
    source: 'Malcolm X',
    citation: 'foo',
    year: ''
  },
  {
    quote:  'Work is love made visible.',
    source: 'Kahlil Gibran',
    citation: 'The Prophet',
    year: '1923'
  },
  {
    quote:  'You don't like something, change it. If you can't change it, change your attitude.',
    source: 'Maya Angelou',
    citation: '',
    year: ''
  },
  {
      quote:  'ahkbar',
      source: 'Muhammad ',
      citation: 'ala',
      year: 'bar'
  }
];
var shownQuotes = [];

// variables
var box = document.getElementById('quote-box');
var quoteElement = box.querySelectorAll('.quote')[0];
var sourceElement = box.querySelectorAll('.source')[0];
var citationElement = box.querySelectorAll('.citation')[0];
var yearElement = box.querySelectorAll('.year')[0];

// function that randomizes the quotes by using math.random mulitplied by the of the array then floored to give us a random quote.
function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length)
  if (shownQuotes.length === quotes.length){
      shownQuotes.length = 0;
  }
}
//function that prints the quote

function printQuote () {
  var randomIndex;
  do {
      randomIndex = getRandomIndex();
  } while (shownQuotes.indexOf(randomIndex) !== -1)
  var randomQuote = quotes[randomIndex];
  quoteElement.innerText = randomQuote.quote;
  sourceElement.innerText = randomQuote.source;
  citationElement.innerText = randomQuote.citation;
  yearElement.innerText = randomQuote.year;
  shownQuotes.push(randomIndex);
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
