let hands = ["Rock", "Paper", "Scissors"];

function rockPaperScissors1() {
    let hand = hands[Math.floor(Math.random() * hands.length)];
    return hand;
}
function rockPaperScissors() {
    let hand = hands[Math.floor(Math.random() * hands.length)];
    return hand;
}
console.log(rockPaperScissors1());
console.log(rockPaperScissors());
//----------------------------------------------------------------

// another way to get a random index from the array

function getHand() {
    let randomIndex = Math.floor(Math.random() * 3);
    return hands[randomIndex];
}
console.log(getHand());
