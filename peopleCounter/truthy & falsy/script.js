// falsy values to remeber

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

// use Boolean() to check the value

console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(100)); // true
console.log(Boolean(null)); // false
console.log(Boolean([0])); // true
console.log(Boolean(-0)); // false
console.log(Boolean(-45)); // true
