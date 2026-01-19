function sumandave(n) {
    if (typeof n !== "number" || isNaN(n) || n <= 0) {
        console.log("Please enter a valid no.")
        return;
    }
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;


    }
    let average = sum/n;
console.log("Sum:",sum);
console.log("Average:",average);

}
sumandave(10)
