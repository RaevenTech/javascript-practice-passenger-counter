const recipient = "James";

// Refactor the email string below to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per";
const sender = "Raeven";
// Create a new variable, sender, and set its value to your name
// Use your sender variable instead of "Per"

const email = `
Hey ${recipient}! 
How is it going? 
Cheers ${sender}.
`;

console.log(email);
