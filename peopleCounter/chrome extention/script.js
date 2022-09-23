let myLeads = [];

const saveBtn = document.getElementById("save_input_btn");
const delBtn = document.getElementById("del_input_btn");
const inputEl = document.getElementById("input_el");
const warningEl = document.getElementById("warning_el");
let ulEl = document.getElementById("ul_el");

// Get the leads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

/*const clearMyLeads = () => {
    myLeads = [];
};*/

delBtn.addEventListener("dblclick", function () {
    console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    console.log(myLeads);
    ulEl.innerHTML = [];
    renderLeads();
});

delBtn.addEventListener("mouseover", function () {
    warningEl.textContent = "Double Click to delete all!";
});
delBtn.addEventListener("mouseout", function () {
    warningEl.textContent = " ";
});

// Push the value from the inputEl into the myLeads array
saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    console.log(localStorage.getItem("myLeads"));
});

// Log out the items in the myLeads array using a for loop
// Render the leads in the unordered list using ulEl.innerHTML
function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target="_blank" href="${myLeads[i]}">${myLeads[i]}<a/></li>`;
        ulEl.innerHTML = listItems;
    }
}

// line 31 to 33 is the same as line 16

/*  // create element
    // set text content
    // append to ul
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)*/
