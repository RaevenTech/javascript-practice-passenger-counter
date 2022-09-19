/*function saveInput() {
    console.log("Button Clicked");
}*/
let myLeads = [];

const saveBtn = document.getElementById("save_input_btn");
const inputEl = document.getElementById("input_el");
//console.log(inputEl);

// Push the value from the inputEl into the myLeads array
saveBtn.addEventListener("click", function () {
    let lead = inputEl.value;
    myLeads.push(lead);
    console.log(myLeads);
});
