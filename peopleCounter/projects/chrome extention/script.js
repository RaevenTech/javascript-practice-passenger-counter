let myLeads = [];

const saveBtn = document.getElementById("save_input_btn");
const saveTab = document.getElementById("save_url_btn");
const delBtn = document.getElementById("del_all_btn");
const inputEl = document.getElementById("input_el");
const warningEl = document.getElementById("warning_el");
let ulEl = document.getElementById("ul_el");

// Get the leads from the localStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

saveTab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

// Log out the items in the myLeads array using a for loop
// Render the leads in the unordered list using ulEl.innerHTML
function render(leads) {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target="_blank" href="${leads[i]}">${leads[i]}<a/></li>`;
        ulEl.innerHTML = listItems;
    }
}

// Push the value from the inputEl into the myLeads array
saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    console.log(localStorage.getItem("myLeads"));
});

// clear local storage and the ul element
delBtn.addEventListener("dblclick", function () {
    console.log("double clicked!");
    localStorage.clear();
    myLeads = [];
    console.log(myLeads);
    ulEl.innerHTML = [];
    render(myLeads);
});

delBtn.addEventListener("mouseover", function () {
    warningEl.textContent = "Double Click to delete all!";
});
delBtn.addEventListener("mouseout", function () {
    warningEl.textContent = " ";
});
