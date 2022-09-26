let openBox = document.getElementById("box");

openBox.addEventListener("click", function () {
    console.log("I want to open the box!");
});
//---------------------------------------------------------

let data = [
    {
        player: "Jane",
        score: "46",
    },
    {
        player: " Mark",
        score: "88",
    },
];
// Fetch the button from the DOM, store it in a variable
let scoreBtn = document.getElementById("score_btn");
// Use addEventListener() to listen for button click
// Log Jane's score when the button is clicked (via data)
scoreBtn.addEventListener("click", function () {
    console.log(data[0].score);
});
