// there are tow ways to diclare obj: letral and constructor.
// Object.create // this the way declare obj like a constructor 



const mySym = Symbol("key1") // have  to define this in your obj 

let myuser ={          // and this is lateral way 
      name:"abhi",
      age:50,
      "full name":"abhi singh rajput",
    //  mySym:"myKey1", // but its not a correct way 
        [mySym]:"mykey1", // this is the right way 
      email:"abhi@gmail.com",
      isloggedin:false,
      lastlogin: ["tuesday","sunday"]

}

console.log(myuser.email); //1st way
console.log(myuser["email"]); // 2nd way
console.log(myuser["full name"]); // there is only way to call it  line no. 11 

console.log(myuser[mySym]); // this is the way to call this the symbol element

myuser.email = "abhi8888@gmail.com" // change the  value of email
Object.freeze(myuser) // there is way to did not change there value :

myuser.greeting = function(){
    console.log(" hello js user ");
    
}
myuser.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
    
}
console.log(myuser.greeting); // output : undefined


















