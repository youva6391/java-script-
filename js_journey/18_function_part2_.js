// function calculatecartprice(...num1){   // ... this is used as rest operator 
//     return num1 
// }

// console.log(calculatecartprice(200,400,500));

function calculatecartprice(val1,val2,...num1){   // ... this is used as rest operator 
    return num1 
 }
 console.log(calculatecartprice(200,400,500)); // output is [200,400] taking as value of val1 =200 and val2=400

const user = {
    username:"naveen",
    Price:2999,

}

function hadleobject(anyobject){
         console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);
}

// handleobject(user)
hadleobject({
     username:"sam",
     price:399

})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue (getArray) {
return getArray [1]
}

console.log(returnSecondValue (myNewArray) ) ;






