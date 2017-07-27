var shownQuotes = [];

// variables
var box = document.getElementById('quote-box');
var quoteElement = box.querySelectorAll('.quote')[0];
var sourceElement = box.querySelectorAll('.source')[0];
var citationElement = box.querySelectorAll('.citation')[0];
var yearElement = box.querySelectorAll('.year')[0];
var imgBox = document.getElementById('img-box');
var quoteButton = document.getElementById('loadQuote')


//random color function that returns hex value.
function getRandomColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

//Refreshes quote in three seconds
function refreshQuote(refreshRate) {
    return window.setInterval(printQuote, refreshRate);
}

// function that randomizes the quotes by using math.random mulitplied by the length of the array (5) then floored to give us a random quote.
function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length);
}
//function that prints the quote
function printQuote () {

  //prints random quote on click
  var randomIndex = getRandomIndex();
  //starts the page with a random quote on page load
  var randomQuote = quotes.splice(randomIndex, 1)[0];
  //loads random color function
  var randomColor = getRandomColor();
  //loads the quote text
  quoteElement.innerText = randomQuote.quote;
  //loads the string value from the array defined in var quotes
  citationElement.innerText = randomQuote.citation;
  //loads the year string from the quotes array
  yearElement.innerText = randomQuote.year;
  //loads the source of the quote
  sourceElement.innerText = randomQuote.source;


//checks if citation property has a value if not it doesn't append the span
  if (citationElement.innerText !== '') {
    sourceElement.appendChild(citationElement);
  } else {

  }
//checks if year property has a value if not it doesn't append the span
  if (yearElement.innerText !== '') {
    sourceElement.appendChild(yearElement);
  }else {

  }
  //loads the picture into the div .img-box
  imgBox.style.backgroundImage = 'url(./img/' + randomQuote.img + ')';

  //uses pushes quote seen on screen to array shownQuotes
  shownQuotes.push(randomQuote);
  //colors the button to match the background color of the quote shown
  quoteButton.style.backgroundColor = randomColor;

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

  // Change body Background Color
   document.body.style.background = randomColor;
   //colors the button to match the background color of the quote shown
   quoteButton.style.backgroundColor = randomColor;
}
printQuote();



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote,  refreshQuote(10000), false);
