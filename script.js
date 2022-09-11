let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}
function decrement() {
    count = count - 1;
    countEl.textContent = count;
}

const reset = () => {
    count = 0;
};

function save() {
    let countReg = count + " - ";
    saveEl.textContent += countReg;
    console.log(count);
}
