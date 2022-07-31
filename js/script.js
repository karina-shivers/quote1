/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "All we have to decide is what to do with the time that is given us." ,
    author: "J.R.R. Tolkein",
    year: 2001,
    citation: "The Fellowship of the Ring"
  },
  {
   quote: "It matters not what someone is born, but what they grow to be.",
    author: "J.K. Rowling",
    year: 2005
    
  },
  {
    quote: "Whatever our souls are made of, his and mine are the same.",
    author: "Emily Bronte",
    year: 1847,

    
   
  },
  {
    quote: "But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.",
    author: "William Shakespeare" ,
    year: 1597, 
    
    
  
  },
  {
    quote: "Your Lack of Dedication is an Insult to Those Who Believe in You",
    author: "unknown", 
    
   
    
  }
];


/***
 * `getRandomQuote` function
***/
// program to get a random quote from an array

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber]
  return randomQuote;
}
/***
 * `printQuote` function
***/
function printQuote() {
  
  let quoteToPrint = getRandomQuote()
  let htmlToPrint = '';

    htmlToPrint += `<p class="quote"> ${quoteToPrint.quote} </p>`;
    htmlToPrint += `<p class="source"> ${quoteToPrint.source}`;
    // conditional statements to check if optional properties of the quotes exist
      if( quoteToPrint.citation !== undefined) {
        htmlToPrint += `<span class="citation"> ${quoteToPrint.citation} </span>`; 
      }
      if( quoteToPrint.year !== undefined) {
        htmlToPrint += `<span class="year"> ${quoteToPrint.year} </span>`; 
      }
      if( quoteToPrint.tag !== undefined) {
        htmlToPrint += `<span class="tag"> ${quoteToPrint.tag} </span>`; 
      }
    htmlToPrint += `</p>`;
    
  document.getElementById('quote-box').innerHTML = htmlToPrint;
  changeBackground();
}
// Function to generate random background colours using rgba() method
function changeBackground() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let alpha = Math.random();
  let element = document.querySelector('body');
  element.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
}
// Arrow function timer to change quote every 15 seconds
let autoChange = () => refresh = setInterval(printQuote,15000 );
//autoChange()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
