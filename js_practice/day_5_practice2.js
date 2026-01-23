let n = Number(prompt("enter a no."))

for (let i = 1; i <= n; i++) {    // outer loop decide how many lines get printed.

   for (let j = 1; j <= n ; j++) {  // inner loop prints numbers in each line
      process.stdout.write(i)       // normal bhasa main outer loop = "kitni baar print karna hai"  inner loop = "ek line main kya print karna hai"
      
   }
console.log()

}
