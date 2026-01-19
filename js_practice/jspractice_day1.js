// +++++++++++++++++++++++BASIC CALCULATOR+++++++++++++++++++++++

let input = Number(prompt("enter a no."))
let opr = (prompt("enter a opr."))
let input2 = Number(prompt("enter a no."))
if (opr=="+") {
    console.log(input+input2);
    
}else if (opr == "*") {
    console.log(input*input2);
    
} else if (opr == "/") {
    console.log(input/input2);
    
} else if (opr=="-") {
    console.log(input-input2);
    
} else if (opr=="**") {
    console.log(input**input2);
    
} else if (opr == "even") {
    if (opr == "even" && input%2==0) {
    console.log("its even");
     } else {
        console.log("Its odd");
    }

   
} 
   else{
        console.log("invalid opr")
    }
 
    

    

    
