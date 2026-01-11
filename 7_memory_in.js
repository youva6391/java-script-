// **********************************************

// stack (primitive), Heap(non- primitive)

let mypetName= "rocky"

let anothername = mypetName // in primitive you will get there copy 
anothername = "tommy"
 
console.log(anothername);



//Heap

let userOne = {
    email : "user@google.com", // IN  non primitive data types you will get there refernce 
    upi : " user@ybl"
    
}

let userTwo = userOne

userTwo.email = "abhishek23456@gmail.com" // it is a way call it any variable when in obj using dot 
 
console.log(userOne.email);
console.log(userTwo.email);

// this information won'nt let you understand completely so research on it and use documentation on "ecma script" or "mdn"



