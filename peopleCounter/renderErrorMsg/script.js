let errorMsg = document.getElementById("error");
// console.log(errorMsg) always check whith console logs
let msg = "Something went wrong, please try again";

function error() {
    // console.log("Button clicked") always check whith console logs
    msg = msg;
    errorMsg.textContent = msg;
}
