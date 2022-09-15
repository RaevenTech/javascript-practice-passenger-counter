let randomNumber = Math.random();
console.log(randomNumber);
// output: numbers between 0.00 and 0.999

let randomNumber1 = Math.random() * 6;
console.log(randomNumber1);
// output: numbers between 0 and 5.999

let flooredNumber = Math.floor(3.456);
console.log(flooredNumber);
// output: number rounded to the nearest whole number = 3

let randomNumber2 = Math.floor(Math.random() * 6);
console.log(randomNumber2);
// output: random numbers between 0 and 5

let randomNumber3 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber3);
// output: random numbers between 1 and 6

function rollDice() {
    let randomNumber4 = Math.floor(Math.random() * 6) + 1;
    return randomNumber4;
}
let dice = rollDice();
console.log(dice);
// output: randomnumbers on a dice piece
