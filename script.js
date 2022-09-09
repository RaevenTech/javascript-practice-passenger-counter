let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}
function decrement() {
    count = count - 1;
    countEl.innerText = count;
}

function save() {
    let countReg = count + " - ";
    saveEl.innerText += countReg;
    console.log(count);
}
