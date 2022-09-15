let player1Time = 106;
let player2Time = 109;

function getFastestPlayerTime() {
    if (player1Time < player2Time) {
        return player1Time + " Player 1 wins";
    } else if (player1Time > player2Time) {
        return player2Time + " Player 2 wins";
    } else {
        return player1Time + " Both players have equal times";
    }
}
//  let fastestTime = getFastestPlayerTime();
//  console.log(fastestTime);

//--------------------------------------------------------------------------------------------------

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalRaceTime() {
    return player1Time + player2Time;
}
let raceTime = totalRaceTime();
console.log(raceTime);

//--------------------------------------------------------------------------------------------------
