// destructuring in obj 


const course = {
    coursename: "js in english ",
    price : "9300948954795",
    courseInstructor : "Naveen"

}
// course.courseInstructor 

// second way 
const {courseInstructor : instructor } = course // there is way to short there name 

console(courseInstructor) // there is a way to do that 
console.log(instructor); // both output is same :









//{             // its a json
//    "name":"naveen",
//    "coursename" : "bs in hindi",; // some part of json
//    "price":"free";

//}

// [


//     {
//         "name":"abhi ",
//         "coursename" : "bs in hindi",
//         "price":"free"
//     }

//                      // this is array json
//     {
//         "name":"abhi",
//         "coursename" : "bs in hindi",
//         "price":"free"  
//     }
// ]

