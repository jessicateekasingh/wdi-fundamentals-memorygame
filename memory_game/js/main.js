let cards =[
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
];
let cardsInPlay =[];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard(index){
	console.log("User flipped " + cards[index].rank)
	cardsInPlay.push(cards[index].rank);
	checkForMatch()
	console.log(cards[index].cardImage)
	console.log(cards[index].suit)
}

flipCard(0)
flipCard(2)
