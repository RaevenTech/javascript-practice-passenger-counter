let firstCard = getRandomCard();
let secondCard = getRandomCard();

let cardCount = firstCard + secondCard;
let cards = [firstCard, secondCard];

let hasBlackjack = false;
let stillActive = true;

let message = "";
let messageEl = document.getElementById("message_el");
let countEl = document.querySelector("#count_el");
let cardsEl = document.getElementById("cards_el");

function startGame() {
    //function for start game btn
    renderGame();
}

function getRandomCard() {
    return 5;
}

function renderGame() {
    // functionn that controle the game rendering between lines 23-43
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }

    countEl.textContent = "Count: " + cardCount;

    if (cardCount <= 20) {
        message = "Do you want to draw another card?";
        stillActive = true;
    } else if (cardCount === 21) {
        message = "Blackjack!! YOU WIN!!";
        hasBlackjack = true;
    } else {
        message = "BUST! You are out of the game!";
        stillActive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    // function for drawing a new random card Btn
    messageEl.textContent = "Drawing a new card from the deck!";
    let card = getRandomCard();
    cardCount += card;
    cards.push(card);
    renderGame();
}
