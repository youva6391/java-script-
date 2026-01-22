let input = Number(prompt("enter a no. :-"))

function fizzbuzz(input) {
    for (let i = 1; i <= input; i++) {
        if (isNaN(input) || input <= 0) {
            console.log("enter a valid no.");
        break

        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log(i+ "-"+ "fizzbuzz");

        } else if (i % 3 == 0) {
            console.log(i+ "-"+ "fizz");

        } else if (i % 5 == 0) {
            console.log(i+ "-"+ "buzz");

        } else {
            console.log(i + " - " + i);


        }


    }

}
fizzbuzz(20)