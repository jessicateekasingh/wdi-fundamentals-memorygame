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

function createBoard(){
	for (let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', function(){
			flipCard(cardElement)
		})
		document.getElementById('game-board').appendChild(cardElement)
	}
}

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
	} else {
	  alert("Sorry, try again.");
	}
}

function flipCard(cardElement){
	let index = cardElement.getAttribute('data-id')
	console.log("User flipped " + cards[index].rank)
	cardsInPlay.push(cards[index].rank);
	checkForMatch()
	console.log(cards[index].cardImage)
	console.log(cards[index].suit)
	cardElement.setAttribute('src', cards[index].cardImage);
}

// flipCard(0)
// flipCard(2)

createBoard()
