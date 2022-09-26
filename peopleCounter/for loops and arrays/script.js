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

//-----------------------------------------------------------------------------
let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple_shelf");
let orangeShelf = document.getElementById("orange_shelf");
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function fruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        }
    }
}
fruits();

//-----------------------------------------------------------------------------
let myCourses = [
    "Learn CSS Animations",
    "UI Design Fundamentals",
    "Intro to Clean Code",
];
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function myArray(arr) {
    for (let i = 0; i < myCourses.length; i++) {
        //console.log(arr[i]);
    }
}
myArray(myCourses);

//------------------------------------------------------------------------------------------------

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
    let baseStr = `The ${arr.length} ${desc} are `;
    let lastIndex = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseStr += arr[i] + ".";
        } else {
            baseStr += arr[i] + ", ";
        }
    }
    return baseStr;
}
const newStr = generateSentence("largest countries", ["China", "India", "USA"]);
console.log(newStr);
