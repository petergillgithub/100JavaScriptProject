// // ============ Practise of local storage===============================

// // 🎯 Practice 1: Basic Save & Retrieve

// localStorage.setItem("name", "Rahul"); //Save Karo

// // Nikalo

// const savedName = localStorage.getItem("name");
// console.log(savedName); // "Rahul" printed in Console

// console.log(localStorage.getItem("name")); // "Rahul"

// //🎯 Practice 2: Delete karna

// localStorage.removeItem("name");
// console.log(localStorage.getItem("name")); // null

// //==================== 🎯 Practice 3: Number save karna (trick wala part) =================

// localStorage.setItem("age", 25);

// // const age = localStorage.getItem("age");

// // console.log(age);
// // console.log(typeof age); // it will show string in console.

// /* Ye important hai samajhna — localStorage har cheez ko string bana deta hai, chahe tum number bhi do. Isliye agar baad mein us value pe math karna ho (jaise age + 1), to pehle usse number mein convert karna padega */

// const ageAsNumber = Number(localStorage.getItem("age"));

// console.log(ageAsNumber);
// console.log(typeof ageAsNumber);

// // ====================== 🎯 Practice 4: Array save karna (JSON ka use)==============

// const fruits = ["apple", "mango", "banana"];

// localStorage.setItem("fruits", JSON.stringify(fruits));

// const raw = localStorage.getItem("fruits");

// const parsed = JSON.parse(raw);
// console.log(typeof parsed);

// console.log(Array.isArray(parsed));
// parsed.push("orange");

// console.log(parsed);

// // localStorage.setItem("fruits", fruits);
// // console.log(localStorage.getItem("fruits")); // OutPut = apple,mango,banana

// // localStorage.setItem("fruits", JSON.stringify(fruits));

// // const savedFruits = JSON.parse(localStorage.getItem("fruits"));
// // console.log(savedFruits); // OutPut (3) ['apple', 'mango', 'banana']

// // console.log(Array.isArray(savedFruits));

// localStorage.setItem("myname", "Josephine");
// localStorage.removeItem("myname");

// console.log(localStorage.getItem("myname"));

// ================================================//

// localStorage.setItem("age", 25);

// const age = localStorage.getItem("age");

// console.log(age + 1);
// console.log(Number(age) + 1);

// ================================================//

// const fruits = ["apple", "banana", "mango"];

// localStorage.setItem("fruits", JSON.stringify(fruits));

// const saved = localStorage.getItem("fruits");
// console.log(saved);
// console.log(typeof saved);

// const parsed = JSON.parse(saved);
// console.log(parsed);
// console.log(typeof parsed);
// console.log(Array.isArray(parsed));
// ================================================//

// const person = { name: "Rahul", age: 25 };

// localStorage.setItem("person", JSON.stringify(person));

// const savedPerson = localStorage.getItem("person");
// const parsedPerson = JSON.parse(savedPerson);

// console.log(parsedPerson);
// console.log(parsedPerson.name);
// console.log(typeof parsedPerson);

// ================================================//

const people = [
  { name: "Peter Gill", age: 25 },
  { name: "Priya", age: 20 },
  { name: "Puja", age: 19 },
  { name: "Poonam", age: 30 },
];

localStorage.setItem("people", JSON.stringify(people));

const saved = JSON.parse(localStorage.getItem("people"));

console.log(saved);
console.log(saved[0]);
console.log(saved[0].name);
console.log(saved[0].age);
console.log(saved.length);
