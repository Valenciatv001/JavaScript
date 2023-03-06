// Define an array of quotes with their respective authors
const quotes = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Agwu Ezekiel"
    },
    {
        text: "Destiny is adventure of individualities.",
        author: "Agwu Ezekiel"
    },
    {
      text: "So many of you are connected to God and not collecting to God",
      author: "Seun Fagbemi"
    },
    {
      text: "There is no gift of reading but only the descipline of reading",
      author: "Albert Oduwole"
    },
    {
      text: "Don't date anyhow.... Date a man with vision so you can end up showing in the Television",
      author: "Grace Man"
    },
    {
      text: "Study to thyself Approve",
      author: "The Holy Bible"
    }
  ];
  
  // Get references to the HTML elements
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const generateButton = document.getElementById("generateButton");
  
  // Function to generate a random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  }
  
  // Add an event listener to the button
  generateButton.addEventListener("click", generateQuote);
  
  // Generate a quote when the page loads
  generateQuote();
  