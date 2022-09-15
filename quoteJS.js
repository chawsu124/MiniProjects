// Random Quote 

const quoteText = document.querySelector(".quote");
const author = document.querySelector(".name");
const btn = document.querySelector("button");

const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    btn.innerText = "Loading Quote...";
    btn.classList.add("loading");
    // Fetching random quote from API
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
            .then(result => {
                console.log(result);
                quoteText.innerText = result.content;
                author.innerText = result.author;
                btn.innerText = "New Quote";
                btn.classList.remove("loading");
            })
}

soundBtn.addEventListener("click", () => {
    //  SpeechSynthesisUtterance is web speech api that represents speech request
    let soundQuote = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerText}`);
    speechSynthesis.speak(soundQuote); // speechSynthesis is speak method
})

copyBtn.addEventListener("click", () => {
    // writeText() property is writes the specified text string to the system clipboard 
    navigator.clipboard.writeText(quoteText.innerText);
})

twitterBtn.addEventListener("click", () => {
    let quoteURL = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(quoteURL,"_blank");// open a new twitter tab with quote in URL
})

btn.addEventListener("click", randomQuote);