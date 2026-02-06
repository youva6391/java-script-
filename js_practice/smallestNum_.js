function smallestNumber(a,b,c){
    if (isNaN(a)|| isNaN(b)|| isNaN(c)) {
        return "enter valid input"
    }
    if (a < b && a < c ) {
       return a 
    } 
     else if (b < c && b < a ) {
       return b 
    }   
    else if (c < b && c < a ) {
       return c 
    }  
}
console.log("smallestNumber(8,9,10)", smallestNumber(8,9,10))
console.log("smallestNumber(8,9,10)", smallestNumber("iuhuhfifv",9,10))
