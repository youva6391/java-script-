// dates these are consider as a object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());           // search yourself what's there output 
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof(myDate));

// syntax

 // let myCreatedDate = new Date(2023, 0, 23)
 // let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 // let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console. log(myCreatedDate.toLocaleString());
console.log(mycreatedDate.toDateString);

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(myCreatedDate.getTime()); // easily for comparing:
// console.log(Math.floor(DataTransfer.now()/1000)); // search it about this syntax what that's mean:


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);// +1 for because js start numbering from 0
//getday()
// getSecond()
// and other types of function we have 

// `${newDate.getDate()} and the time is `

 newDate.toLocaleDateString("default",{
     weekday: "long",                   //there is many way to coutomize your date and time in .toLocaleString()

 })







