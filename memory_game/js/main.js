var cards = [
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
var cardsInPlay = [];
var cardId;
var score = 0;

var checkForMatch = function() {
	if (cardsInPlay.length == 2) {
		if (cardsInPlay[0] == cardsInPlay[1]) {
			alert('You found a match!');
			score += 1;
			document.getElementById('scoreBoard').innerHTML = score;
		} else {
			alert('Sorry, try again.');
		}
	}
}

var flipCard = function() {
	cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function() {
	var gameBoard = document.getElementById('game-board');
	while (gameBoard.hasChildNodes()) {
		gameBoard.removeChild(gameBoard.firstChild);
	}
	cardsInPlay = [];
	createBoard();
}

createBoard();