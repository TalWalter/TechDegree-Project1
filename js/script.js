/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/*
Create an array of atleast 5 objects, 
I did 8 only with the quotes and source properties showing on the browser.
I couldnt figure out how to get the citation and year to show. 
*/

let quotes = [
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    source: " Steve Jobs"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    source: " Ralph Waldo Emerson"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    source: " Arthur Ashe"
  },
  {
    quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    source: " Hellen Keller"
  },
  {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    source: " Maya Angelou"
  },
  {
    quote: "Happiness is not something readymade. It comes from your own actions.",
    source: " Dalai Lama"
  },
  {
    quote: "Life is not so short but that there is always time enough for courtesy.",
    source: " Ralph Waldo Emerson",
    citation: " 'Letters and Social Aims'",
    year: 1876
    
 },
 {
  quote: "I can accept failure. Everyone fails at something. But I can't accept not trying [no hard work].", 
  source: " Michael Jordan",
  citation: " 'I Can't Accept Not Trying : Michael Jordan on the Pursuit of Excellence'",
  year: 1994
  
 }

];



/*
  Create the `getRandomQuote` function to:
   
*/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

/*
  Create the `printQuote` function: 
  - call the getRandomQuote funtion in a variable with 'quotes' as the argument
  - initiate the string that will display on the browser
  - create a conditional statement to check for citation or year properties. 
*/

function printQuote () {
  let random = getRandomQuote(quotes);
  let result = '';
  result += '<p class="quote">' + random.quote + '</p>';
  result += '<p class="source">' + random.source + '</p>';
  if (random.citation === true && random.year === true) {
    result += '<p class="source">' + '<span class="citation">' + random.citation + '</span>' + '</p>';
    result += '<p class="source">' + '<span class="year">' + random.year + '</span>' + '</p>';
} 
  
  document.getElementById('quote-box').innerHTML = result;

}


/***
  I was told to leave whats below alone
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


