const welcomEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
    welcomEl.textContent = `${greeting}, ${name}👋`;
}
greetUser("Hi", "Raeven");

// Create a function, add(), that adds two numbers together and returns the sum
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // should log 7
console.log(add(9, 102)); // should log 111

// Create a function, getFirst(arr), that returns the first item in the array
function getFirst(arr) {
    return arr[0];
}
let firstIndex = getFirst([1, 2, 3, 4, 5]);
console.log(firstIndex);
