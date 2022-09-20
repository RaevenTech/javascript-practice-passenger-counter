let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

const saveBtn = document.getElementById("save_input_btn");
const inputEl = document.getElementById("input_el");
let ulEl = document.getElementById("ul_el");
//console.log(inputEl);

// Push the value from the inputEl into the myLeads array
saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop
// Render the leads in the unordered list using ulEl.innerHTML
let listItems = [];
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
    console.log(listItems);
}
ulEl.innerHTML = listItems;

// line 27 to 29 is the same as line 16

/*  // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
