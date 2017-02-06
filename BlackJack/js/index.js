
var myCards = [

 two_of_clubs = {value:2, src:"images/2_of_clubs.png"}, 
 two_of_diamonds = {value:2, src:"images/2_of_diamonds.png"},
 two_of_hearts = {value:2, src:"images/2_of_hearts.png"},
 two_of_spades = {value:2, src:"images/2_of_spades.png"},
 three_of_clubs = {value:3, src:"images/3_of_clubs.png"},
 three_of_diamonds = {value:3, src:"images/3_of_diamonds.png"},
 three_of_hearts = {value:3, src:"images/3_of_hearts.png"},
 three_of_spades = {value:3, src:"images/3_of_spades.png"},
 four_of_clubs = {value:4, src:"images/4_of_clubs.png"},
 four_of_diamonds = {value:4, src:"images/4_of_diamonds.png"},
 four_of_hearts = {value:4, src:"images/4_of_hearts.png"},
 four_of_spades = {value:4, src:"images/4_of_spades.png"},
 five_of_clubs = {value:5, src:"images/5_of_clubs.png"},
 five_of_diamonds = {value:5, src:"images/5_of_diamonds.png"},
 five_of_hearts = {value:5, src:"images/5_of_hearts.png"},
 five_of_spades = {value:5, src:"images/5_of_spades.png"},
 six_of_clubs = {value:6, src:"images/6_of_clubs.png"},
 six_of_diamonds = {value:6, src:"images/6_of_diamonds.png"},
 six_of_hearts = {value:6, src:"images/6_of_hearts.png"},
 six_of_spades = {value:6, src:"images/6_of_spades.png"},
 seven_of_clubs = {value:7, src:"images/7_of_clubs.png"},
 seven_of_diamonds = {value:7, src:"images/7_of_diamonds.png"},
 seven_of_hearts = {value:7, src:"images/7_of_hearts.png"},
 seven_of_spades = {value:7, src:"images/7_of_spades.png"},
 eight_of_clubs = {value:8, src:"images/8_of_clubs.png"},
 eight_of_diamonds = {value:8, src:"images/8_of_diamonds.png"},
 eight_of_hearts = {value:8, src:"images/8_of_hearts.png"},
 eight_of_spades = {value:8, src:"images/8_of_spades.png"},
 nine_of_clubs = {value:9, src:"images/9_of_clubs.png"},
 nine_of_diamonds = {value:9, src:"images/9_of_diamonds.png"},
 nine_of_hearts = {value:9, src:"images/9_of_hearts.png"},
 nine_of_spades = {value:9, src:"images/9_of_spades.png"},
 ten_of_clubs = {value:10, src:"images/10_of_clubs.png"},
 ten_of_diamonds = {value:10, src:"images/10_of_diamonds.png"},
 ten_of_hearts = {value:10, src:"images/10_of_hearts.png"},
 ten_of_spades = {value:10, src:"images/10_of_spades.png"},
 ace_of_clubs = {value:1, src:"images/ace_of_clubs.png"},
 ace_of_diamonds = {value:1, src:"images/ace_of_diamonds.png"},
 ace_of_hearts = {value:1, src:"images/ace_of_hearts.png"},
 ace_of_spades = {value:1, src:"images/ace_of_spades.png"},
 jack_of_clubs = {value:10, src:"images/jack_of_clubs.png"},
 jack_of_diamonds = {value:10, src:"images/jack_of_diamonds.png"},
 jack_of_hearts = {value:10, src:"images/jack_of_hearts.png"},
 jack_of_spades = {value:10, src:"images/jack_of_spades.png"},
 king_of_clubs = {value:10, src:"images/king_of_clubs.png"},
 king_of_diamonds = {value:10, src:"images/king_of_diamonds.png"},
 king_of_hearts = {value:10, src:"images/king_of_hearts.png"},
 king_of_spades = {value:10, src:"images/king_of_spades.png"},
 queen_of_clubs = {value:10, src:"images/queen_of_clubs.png"},
 queen_of_diamonds = {value:10, src:"images/queen_of_diamonds.png"},
 queen_of_hearts = {value:10, src:"images/queen_of_hearts.png"},
 queen_of_spades = {value:10, src:"images/queen_of_spades.png"},
 back_of_card = {value:"back", src:"images/back.png"}

]


var dealerTotal = [];
var userTotal = [];

function randNumber() {
	var number = Math.floor(Math.random() * 51);
	return number;
}
var totalChips = document.getElementsByClassName('totalChips')[0].innerHTML;
document.getElementById('dealButton').onclick = function() {
	var totalChips = document.getElementsByClassName('totalChips')[0].innerHTML;
	if (totalChips === "" || totalChips === "0") {
		alert('you need to place a bet');
	} else if (dealerTotal.length >= 1) {
		alert('You already dealed! Press "hit" button');
	} else {
		hiddenCard();
		computerCard();
		var cardSpace = document.getElementsByTagName('footer')[0];
		dealerTotalValue();
		userTotalValue();	
	}
	};	

	
function hiddenCard() {
	var hiddenCard = myCards[52].src;
	var unknownCard = document.getElementById('hiddenCard');
	unknownCard.style.display = 'unset';
}
	
function computerCard() {
	var number = randNumber();
	var myNewCard = myCards[number].src;
	var myNewValue = myCards[number].value;
	console.log(myNewValue);
	dealerTotal.push(myNewValue);
	var dealerCards = document.getElementById('dealerCards');
	var div = document.createElement('div');
	var image = document.createElement('img');
	image.setAttribute("src", myNewCard);
	dealerCards.appendChild(div).appendChild(image);
	div.className = 'dealerStack';
	creatCard();
	creatCard();
}
	
function oneCardComputer() {
	var number = randNumber();
	var myNewCard = myCards[number].src;
	var myNewValue = myCards[number].value;
	console.log(myNewValue);
	dealerTotal.push(myNewValue);

	var dealerCards = document.getElementById('dealerCards');
	var div = document.createElement('div');
	var image = document.createElement('img');
	image.setAttribute("src", myNewCard);
	dealerCards.appendChild(div).appendChild(image);
	div.className = 'dealerStack';
}

function creatCard() {
	var number = randNumber();
	var myNewCard = myCards[number].src;
	var myNewValue = myCards[number].value;
	console.log(myNewValue);
	userTotal.push(myNewValue);
	var dealerCards = document.getElementById('userCards');
	var div = document.createElement('div');
	var image = document.createElement('img');
	image.setAttribute("src", myNewCard);
	dealerCards.appendChild(div).appendChild(image);
	div.className = 'dealerStack';
}

document.getElementById('hitButton').onclick = function() {
	creatCard();
	userTotalValue();
}

function computerTotal() {
	total = 0;
	for(var i = 0; i <= dealerTotal.length -1; i++) {
		total += dealerTotal[i];
	}
	return total;
}
function userTotalCards() {
	total = 0;
	for(var i = 0; i <= userTotal.length -1; i++) {
		total += userTotal[i];
	}
	if (total > 21) {
		var notification = document.getElementById('notification');
		notification.innerHTML = 'You lose! click stay';
		notification.style.color = '#FB4A30';
	};
	return total;
}
function dealerTotalValue() {
	var totalCardValue = document.getElementById('dealerTotal');
	totalCardValue.innerHTML = computerTotal();
}

function userTotalValue() {
	var totalCardValue = document.getElementById('userTotalValue');
	totalCardValue.innerHTML = userTotalCards();
}

document.getElementById('stay').onclick = function() {
	stay();
}
document.getElementById('double').onclick = function() {
	double();	
}

function double() {
	var totalBid = document.getElementsByClassName('totalChips')[0].innerHTML;
	var doubleBid = Number(totalBid) * 2;
	document.querySelector('.totalChips').innerHTML = doubleBid;
	var computer = computerTotal();
	var user = userTotalCards();	
		creatCard();
		userTotalValue();
			oneCardComputer();
			userTotalValue();
			computerTotal();
			dealerTotalValue();
		stay();
	}


function stay() {
	var computer = computerTotal();
	var hiddenCard = document.getElementsByClassName('hiddenCard')[0];
	var user = userTotalCards();	
	while (computerTotal() < 17) {
		// hiddenCard.style.display = 'none';
		oneCardComputer();
		computerTotal();
		dealerTotalValue();
		// stay();
	}
	whoWon(); 
}
var theTotal = 0;
var items = document.getElementsByClassName('chip');
[].forEach.call(items, function(el) {
	el.addEventListener('click', addChips)
})


function addChips() {
	theTotal = Number(theTotal) + Number(this.value);
document.querySelector('.totalChips').innerHTML = theTotal;
}

function whoWon() {
	var userTotalMoney = document.querySelector('h1').innerHTML;
	var totalChips = document.querySelector('.totalChips').innerHTML;
	if (computerTotal() <= 21 && userTotalCards() < computerTotal() || computerTotal() === userTotalCards() || userTotalCards() > 21) {
		var notification = document.getElementById('notification');
		notification.innerHTML = 'You lose!';
		notification.style.color = '#ff6666';
		blowMyMoney();
	}else {
		var notification = document.getElementById('notification');
		notification.innerHTML = 'You Won!';
		notification.style.color = '#008000';
		addMoney();
	};
}

function blowMyMoney () {
	var totalAmount = 0;
	var totalBet = document.querySelector('.totalChips').innerHTML;
	var totalBetNumber = Number(totalBet);
	var myMoney = document.querySelector('h1').innerHTML;
	totalAmount = Number(myMoney) - totalBetNumber;
	document.querySelector('h1').innerHTML = totalAmount;
	setTimeout(clearCards, 2000);
}

function addMoney() {
	var totalAmount = 0;
	var totalBet = document.querySelector('.totalChips').innerHTML;
	var totalBetNumber = Number(totalBet);
	var myMoney = document.querySelector('h1').innerHTML;
	totalAmount = Number(myMoney) + totalBetNumber;
	document.querySelector('h1').innerHTML = totalAmount;
	setTimeout(clearCards, 2000);
}

function clearCards() {
	var cards = document.getElementsByClassName('dealerStack');
	for (var i = 0; i < cards.length; i++) {
	cards[i].style.display = "none";
	}
	theTotal = 0;
	totalChips.innerHTML = 0;
	var dealerTotal = document.getElementById('dealerTotal');
	var userTotalValue = document.getElementById('userTotalValue');
	userTotalValue.innerHTML = 0;
	document.getElementsByClassName('totalChips')[0].innerHTML = 0;	
	var burnAllCards = document.querySelectorAll('.dealerStack');
	var userTotal = document.getElementById('userTotal');
	var computerTotal = document.getElementById('computerTotal');
	popMyArrays();
}

function popMyArrays() {
 	dealerTotal = [];
	userTotal = [];
	var unknownCard = document.getElementById('hiddenCard');
	unknownCard.style.display = 'none';	
}

