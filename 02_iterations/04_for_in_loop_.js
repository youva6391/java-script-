// for...in loops through object KEYS
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

                         
const programming = ["js", "rb", "py", "java", "cpp"]  // for...in on arrays gives indices (not recommended - use for...of instead)

for (const key in programming) {
    //console.log(programming[key]);
}

// for...in doesn't work with Maps (not enumerable)
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // won't print anything
// }