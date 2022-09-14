let firstCard = 10;
let secondCard = 7;

let cardCount = firstCard + secondCard;
let cards = [firstCard, secondCard];

let hasBlackjack = false;
let stillActive = true;

let message = "";
let messageEl = document.getElementById("message_el");
let countEl = document.querySelector("#count_el");
let cardsEl = document.getElementById("cards_el");

function startGame() {
    renderGame();
}

function renderGame() {
    if (cardCount <= 20) {
        cardsEl.textContent = "Cards: " + cards[0] + " + " + cards[1];
        countEl.textContent = "Count: " + cardCount;
        message = "Do you want to draw another card?";
        stillActive = true;
    } else if (cardCount === 21) {
        cardsEl.textContent = "Cards: " + firstCard + " + " + secondCard;
        countEl.textContent = "Count: " + cardCount;
        message = "Blackjack!! YOU WIN!!";
        hasBlackjack = true;
    } else {
        cardsEl.textContent = "Cards: " + firstCard + " + " + secondCard;
        countEl.textContent = "Count: " + cardCount;
        message = "BUST! You are out of the game!";
        stillActive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!";
    let card = 2;
    cardCount += card;
    cards.push(card);
    renderGame();
}
