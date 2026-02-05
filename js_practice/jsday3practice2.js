// ******************Number guessing program************
let guessing = Number(prompt("Guess a number (0-9):"));

if (isNaN(guessing)) {
    console.log("Not a number!");
} else {
    let randomNumber = getRandom(10);

    if (guessing === randomNumber) {
        console.log("🎉 Correct Guess!");
    } else {
        console.log("❌ Wrong! Number was:", randomNumber);
    }
}


