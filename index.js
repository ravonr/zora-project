document.addEventListener("DOMContentLoaded", function() {
   newQuoteHandler()
   console.log(quotesArray);
})

function newQuoteHandler() {
    let button = document.getElementById("quote-button")
    button.addEventListener("click", () => {
        let quoteContentDiv = document.querySelector(".quotes-content")
        getRandomQuote()
    })
}
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random () * quotesArray.length)
    displayQuote(quotesArray[randomQuote])
}
function displayQuote(quote) {
    console.log(quote);
    let quoteContentDiv = document.querySelector(".quotes-content") 
    quoteContentDiv.innerText = quote
}

const quotesArray = [
	`Chapter 1
	
	All that you touch
	You Change.
	All that you Change
	Changes you.
	The only lasting truth
	Is Change.
	God Is Change.`,
	`Chapter 2
	
	A gift of God
	May sear unready fingers.`,
	`Chapter 3
	
	We do not worship God.
	We perceive and attend God.
	We learn from God.
	With forethought and work,
	We shape God.
	In the end, we yield to God.
	We adapt and endure,
	For we are Earthseed
	And God is Change.`
]