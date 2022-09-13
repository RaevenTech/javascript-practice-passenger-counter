let firstCard = 10;
let secondCard = 7;
let thirdCard = 5;
let cardCount = firstCard + secondCard + thirdCard;

let hasBlackjack = false;
let stillActive = true;

let message = "";
let messageEl = document.getElementById("message_el");
let countEl = document.querySelector("#count_el");
let cardsEl = document.getElementById("cards_el");

function startGame() {
    if (cardCount <= 20) {
        cardsEl.textContent +=
            " " + firstCard + " + " + secondCard + " + " + thirdCard;
        countEl.textContent += " " + cardCount;
        message = "Do you want to draw another card?";
        stillActive = true;
    } else if (cardCount === 21) {
        cardsEl.textContent +=
            " " + firstCard + " + " + secondCard + " + " + thirdCard;
        countEl.textContent += " " + cardCount;

        message = "You have Blackjack!!";
        hasBlackjack = true;
    } else {
        cardsEl.textContent +=
            " " + firstCard + " + " + secondCard + " + " + thirdCard;
        countEl.textContent += " " + cardCount;

        message = "BUST! You are out of the game!";
        stillActive = false;
    }
    messageEl.textContent = message;
}
