// Basic for loop - iterates from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    // Condition to check if current value is 5
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element); // element is not accessible outside the for loop (block scope)

// Nested for loops - outer loop runs 10 times, inner loop runs 10 times for each outer iteration
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    // Multiplication table example
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length); // Get array length (3)

// Loop through array using index - safer when you need the index
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue keywords

// Example with break - stops the loop when condition is met
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break  // Exits the entire loop
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// Example with continue - skips current iteration and goes to next
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue  // Skips printing for index 5, goes to next iteration
    }
   console.log(`Value of i is ${index}`);
    
}