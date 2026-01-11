// today i will learn about coversion  and Operation .


let score = 33

console.log(typeof score);
console.log(typeof(score));  // both method are same so no worries .

let score_string = "33"

let valueInNumber = Number(score_string) // returnig no.

console.log(typeof valueInNumber);
console.log(typeof score_string);  // giving string


let score_maxalpha = "33abc"

let valueofnumAlpha = Number(score_maxalpha) // returnig no.



console.log(typeof valueofnumAlpha);
console.log(typeof score_maxalpha);  // giving NaN "NOT A NUMBER"


let score_nothing = null

let valueofnothing = Number(score_nothing)


console.log(typeof valueofnothing);   // returnig no. 
console.log(typeof score_nothing);     // giving 0

let score_undifined = undefined

let scoreofundifined = Number(score_undifined)


console.log(typeof scoreofundifined); // returnig no.
console.log(typeof score_undifined);  // Giving NaN 
 

// true == 1   if you check there types of booleans 
// false == 0


let login = 1 
let login_1 = "" 
let changelog = Boolean(login)

console.log(typeof login_1); // giving false 

console.log(typeof changelog); // giving true it means there actully valu is true 

// "sooo" its giving true 

// just like all the value you can change any other data_types 




