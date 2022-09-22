let myLeads = [];

const saveBtn = document.getElementById("save_input_btn");
const inputEl = document.getElementById("input_el");
let ulEl = document.getElementById("ul_el");
//console.log(inputEl);

// Get the leads from the localStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

// Push the value from the inputEl into the myLeads array
saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    return renderLeads();
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
