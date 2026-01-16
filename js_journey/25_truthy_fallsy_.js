const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {        // same as line 23
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // check there is obj empty
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       //The Nullish Coalescing Operator (??) in JavaScript is used to
                        //  provide a default value when a variable is either null or undefined — but not when it’s 0,                        //  false, or an empty string ("").
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator   //The ternary operator in JavaScript is a shorthand way to write an if...else statement.
                    //    It has the syntax:

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// false = "" output is true
// false = 0: true
// 0 == ""    true 