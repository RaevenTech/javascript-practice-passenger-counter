// --------------------- local storage --------------------
// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings.

//localStorage.setItem("myName", "Raeven gonçalves");
//let fullName = localStorage.getItem("myName");
//console.log(fullName);
//localStorage.clear();

//------------  converting arrays with JSON --------------------

let myLeads = `["www.awesomelead.com"]`;

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads);
console.log(myLeads);
// 2. Push a new value to the array
myLeads.push("www.testing.com");
console.log(myLeads);
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
console.log(myLeads);
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads);
