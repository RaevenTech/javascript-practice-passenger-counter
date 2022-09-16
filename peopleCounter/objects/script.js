// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Castle",
    available: true,
    guests: 4,
    date: ["Sat", "Sun"],
};

console.log(castle.title);
console.log(castle.available);
console.log(castle.guests);
console.log(castle.date);

//------ methods on objects-----------------------

let player = {
    name: "Raeven",
    chips: 350,
    // a function inside a object will create a method
    sayHello: function () {
        console.log("Welcome back");
    },
};
player.sayHello();
// output: Welcome back

//-------- practice ---------------------------

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
    name: "Raeven",
    age: 40,
    country: "Portugal",
};

// Create a function, logData(), that uses the person object to create a
function logData() {
    return (
        person.name + " is " + person.age + " and lives in " + person.country
    );
}
// string in the following format:
// "Per is 35 years old and lives in Norway"
console.log(logData());
// Call the logData() function to verify that it works
