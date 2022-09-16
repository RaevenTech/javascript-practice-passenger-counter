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

//--------- if else --------
let age = 5;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable
function busFare() {
    if (age < 6) {
        return "free";
    } else if (age >= 6 && age < 17) {
        return "child discount";
    } else if (age >= 18 && age < 26) {
        return "student discount";
    } else if (age >= 27 && age < 66) {
        return "full price";
    } else {
        return "senior citizen discount";
    }
}
console.log(busFare());
