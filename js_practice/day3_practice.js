// this one is created by me 

let user = Number(prompt("enter a no."))
if (user%3==0) {
    console.log("fizz");
    
}else if ( user%5 == 0) {
    console.log("buzz");
    
} else if (user%3 && user%5 == 0) {
    console.log("fizzbuzz");
    
} else {
    console.log("your enter no. is not valid");
    
    
}
// there is a correct one 

let user1 = Number(prompt("enter a no."))
if (user1%3 == 0 && user1%5 == 0) {
    console.log("fizzbuzz");
    
}else if ( user1%3 == 0) {
    console.log("fizz");
    
} else if (user1%5 == 0) {
    console.log("buzz");
    
} else {
    console.log("your enter no. is not valid");
    
    
}
