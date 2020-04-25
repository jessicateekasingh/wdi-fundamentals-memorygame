console.log("Up and running!");

let cards =["queen","queen","king","king"];

let cardsInPlay =[];
let cardOne = cards[0]; // first card 
// let cardOne = "queen";
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[1];
// let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}