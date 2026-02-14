// this function: reffers the current context

const { use } = require("react");

const user= {
    username:"naveen",
    price:2999,
    welcomeuser: function(){
        console.log(`welcome ${this.username} , welcome to my website`); // here this reffers to current user object
        console.log(this); // output the whole user object:
        
    },
}
user.welcomeuser() // execute the function
user.username= "sam" // overwrite the username property of user object
user.welcomeuser() // execute the function
 console.log(this); // in the global context this reffers to global object : in node js its empty object {} in browser its window object
 
// in browser this reffers to "window object"important point


function coffee(){
    let username = "naveen"
    console.log(`coffee for ${username}`); // here we can access username because its in the same function
    console.log(this); // in normal function this reffers to global object : in node js its empty object {} in browser its window object
}

const chai = function(){
    let username = "sam"
    console.log(`chai for ${username}`); // output : undefined because this reffers to global object and there is no username property in global object
    console.log(this.username); // in normal function this reffers to global object : in node js its empty object {} in browser its window object
}

chai() // output :  undefined

// *****************Arrow function and this keyword**************

const drink = () => {
    let username = "john"
    console.log(`drink for ${username}`); // output : undefined because this reffers to global object and there is no username property in global object
    console.log(this.username); // in arrow function this reffers to global object : in node js its empty object {} in browser its window object
    console.log(this); // output: {}

    
}
drink() // output :  undefined



// const addtow = (num1,num2) => { // explicit return 
//     return num1 + num2
// }   
// console.log(addtow(3,4)); // output : 7

// const addtow = (num1,num2) =>  (num1 + num2) // implicit return if there is only one line of code we can write like this

const addtow = (num1,num2) =>  (username="naveen") // if we have to return object we have to wrap it in paranthesis


console.log(addtow(3,4)); // output : 7

// ************Important point about arrow function and this keyword************

// 1. arrow function do not have their own this keyword.
// 2. arrow function this keyword reffers to the this keyword of the surrounding lexical context    
