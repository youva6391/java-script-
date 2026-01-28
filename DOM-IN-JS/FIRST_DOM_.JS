

/*
DOM = Document Object Model
Browser HTML ko tree structure me convert karta hai
JS isi tree ke through HTML ko change karti hai
*/

// document = poori HTML file ka root object
console.log(document);

/* ================================
   ACCESSING CHILD NODES
================================ */

// childNodes → ALL nodes (text + elements)
console.log(document.body.childNodes);

/*
NOTE:
- Text nodes (spaces / new lines) bhi count hote hain
- Isliye childNodes beginners ke liye risky hota hai
*/

// Node type check
document.body.childNodes.forEach(node => {
  console.log(node.nodeType); 
  // 1 = element
  // 3 = text
});

/* ================================
   FIRST & LAST ELEMENT CHILD
================================ */

// firstElementChild → first HTML element only
let firstEl = document.body.firstElementChild;
console.log(firstEl);

// lastElementChild → last HTML element only
let lastEl = document.body.lastElementChild;
console.log(lastEl);

/*
NOTE:
- ElementChild text nodes ignore karta hai
- Ye childNodes se zyada safe hota hai
*/

// Style change example
firstEl.style.color = "red";
lastEl.style.border = "2px solid black";

/* ================================
   PARENT ELEMENT
================================ */

// kisi element ka parent access karna
let someElement = document.body.firstElementChild;
console.log(someElement.parentElement);

/*
NOTE:
- parentElement sirf HTML element deta hai
- parentNode text / document bhi de sakta hai
*/

/* ================================
   PREVIOUS & NEXT ELEMENT SIBLING
================================ */

// sibling navigation
let middleEl = document.body.children[1]; // example element

console.log(middleEl.previousElementSibling);
console.log(middleEl.nextElementSibling);

/*
NOTE:
- previousElementSibling / nextElementSibling
  sirf ELEMENTS dete hain
- previousSibling / nextSibling me text nodes aate hain
*/

/* ================================
   TABLE DOM METHODS
================================ */

// table specific DOM methods
let table = document.querySelector("table");

if (table) {
  console.log(table.rows);          // all rows
  console.log(table.rows[0].cells); // cells of first row

  // change cell text
  table.rows[0].cells[0].innerText = "Updated";
}

/*
NOTE:
- Table ke liye special properties hoti hain
- rows, cells direct access dete hain
*/

