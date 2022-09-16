//------- example &&

let hasCompletedCourse = true;
let givesCertificate = true;
// both arguments need to be true for the if statement to work
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertifiate();
}

function generateCertifiate() {
    console.log("Generating certificate...");
}
//-----------------------------------------
let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution();
}

function showSolution() {
    console.log("Showing the solution...");
}

//----------- Using the || (OR) operator --------

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie();
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you would like!");
}
