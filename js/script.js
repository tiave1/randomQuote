// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var quote = ['I am the greatest, I said that even before I knew I was.','The future belongs to those who prepare for it today.','Work is love made visible.',"You don't like something, change it. If you can't change it, change your attitude.","I’m not in this world to live up to your expectations and you’re not in this world to live up to mine."]
var source = ['Muhammad Ali', 'Malcolm X', 'Kahlil Gibran']

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
