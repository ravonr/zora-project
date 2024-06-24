document.addEventListener("DOMContentLoaded", function() {
   newQuoteHandler()
   dragElement(document.querySelector(".quotes-container"))
   dragElement(document.getElementById("image-1"))
   dragElement(document.getElementById("image-2"))
   dragElement(document.getElementById("image-3"))
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

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elmnt.onmousedown = dragMouseDown;
	
	function dragMouseDown(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // get the mouse cursor position at startup:
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  document.onmouseup = closeDragElement;
	  // call a function whenever the cursor moves:
	  document.onmousemove = elementDrag;
	}
	
	function elementDrag(e) {
	  e = e || window.event;
	  e.preventDefault();
	  // calculate the new cursor position:
	  pos1 = pos3 - e.clientX;
	  pos2 = pos4 - e.clientY;
	  pos3 = e.clientX;
	  pos4 = e.clientY;
	  // set the element's new position:
	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
	  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	
	function closeDragElement() {
	  // stop moving when mouse button is released:
	  document.onmouseup = null;
	  document.onmousemove = null;
	}
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