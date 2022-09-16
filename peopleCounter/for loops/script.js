// Count to ten!
// We need to specify...
// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
//    START           FINISH       STEP SIZE
for (let count = 1; count < 11; count += 1) {
    //console.log(count);
}
//------------------------------------------------------------------------------

// Create a for loop that counts from 10 to 100 in steps of 10
for (let count1 = 10; count1 < 101; count1 += 10) {
    //console.log(count1);
}

//------------------------------------------------------------------------------

let cards = [7, 3, 9];
// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should
for (let i = 0; i < cards.length; i++) {
    //console.log(cards[i]);
}
//-----------------------------------------------------------------------------

let sentence = ["Hello ", "my ", "name ", "is ", "Raeven"];
let greetingEl = document.getElementById("greeting_el");
// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = [0]; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}
//-----------------------------------------------------------------------------
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:
The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log(" The 5 largest countries in the world ");
for (let i = 0; i < largeCountries.length; i++) {
    let country = largeCountries[i];
    //console.log(" - " + country);
}
// or can be done like this
console.log("The 5 largest countries in the world");
for (let i = 0; i < largeCountries.length; i++) {
    //console.log("-" + largeCountries[i]);
}
//-----------------------------------------------------------------------------
let largeCountries1 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places
// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries1.pop();
largeCountries1.push("Pakistan");
largeCountries1.shift();
largeCountries1.unshift("China");

console.log(largeCountries1);
