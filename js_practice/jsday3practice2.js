// ******************Number guessing program************
let guessing = Number(prompt("give me a no. :-"))
if (isNaN(guessing)) {
    console.log("this is not a number ");
} else if (guessing === 7) {
    console.log("welldone your guess is to right ");
} else if (guessing < 7) {
    console.log("your no. is just smaller bro ");

} else if (guessing > 7) {
    console.log("your no. is just bigger ");

}

else {
    console.log("you are from another world");
}





