let firstCard = 10;
let secondCard = 7;
let thirdCard = 5;
let cardCount = firstCard + secondCard + thirdCard;

let hasBlackjack = false;
let stillActive = true;

let message = "";

if (cardCount <= 20) {
    message = "Do you want another card?";
    stillActive = true;
} else if (cardCount === 21) {
    message = "Wohoo! You have Blackjack!!";
    if ((hasBlackjack = true)) {
        message = " You won! Would you like to play again?";
    }
} else {
    message = "BUST! You are out of the game!";
    if ((stillActive = false)) {
        message = "Would you like to play another hand?";
    }
}
console.log(message);
console.log(cardCount);
console.log(stillActive);
