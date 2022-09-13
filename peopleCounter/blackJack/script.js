let firstCard = 10;
let secondCard = 7;
let thirdCard = 3;
let cardCount = firstCard + secondCard + thirdCard;

let hasBlackjack = false;
let stillActive = true;

let message = "";
let messageEl = document.getElementById("message_el");
let countEl = document.querySelector("#count_el");

function startGame() {
    if (cardCount <= 20) {
        countEl.textContent += " " + cardCount;
        message = "Do you want to draw another card?";
        stillActive = true;
    } else if (cardCount === 21) {
        countEl.textContent += " " + cardCount;
        message = "You have Blackjack!!";
        hasBlackjack = true;
    } else {
        countEl.textContent += " " + cardCount;
        message = "BUST! You are out of the game!";
        stillActive = false;
    }
    messageEl.textContent = message;
}
