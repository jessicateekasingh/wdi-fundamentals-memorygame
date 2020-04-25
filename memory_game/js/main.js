let cards =["queen","queen","king","king"];
let cardsInPlay =[];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard(index){
	console.log("User flipped " + cards[index])
	cardsInPlay.push(cards[index]);
	checkForMatch()
}

flipCard(0)
flipCard(2)
