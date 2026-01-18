// ============ FILTER() METHOD ============
// filter() - Returns a NEW array with elements that pass a test (condition)
// IMPORTANT: Unlike forEach(), filter() RETURNS a new array
// Syntax: array.filter((element) => condition)
// Only elements where condition returns TRUE are included in the new array

// ============ WHY FILTER OVER forEach? ============
// forEach() does NOT return anything - it just executes code
// filter() RETURNS a new array with filtered elements
// See example below:

const coding = ["js", "ruby", "java", "python", "cpp"]

// WRONG - forEach returns undefined:
// const values = coding.forEach( (item) => {
//     return item  // forEach ignores return values!
// } )
// console.log(values);  // Output: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// CORRECT - Using filter to get numbers > 4:
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// Result: [5, 6, 7, 8, 9, 10]

// ALTERNATIVE - Using forEach with manual push:
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// ============ PRACTICAL EXAMPLE: FILTERING OBJECTS ============

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Example 1: Filter by single property (genre)
let userBooks = books.filter( (bk) => bk.genre === 'History')
// Result: Books with genre 'History'

// Example 2: Filter with multiple conditions (AND condition: &&)
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
// Result: History books published in 1995 or later

console.log(userBooks);
