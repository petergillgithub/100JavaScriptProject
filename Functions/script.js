// 1.Named Function

function greet() {
  return "Hello ";
}
console.log(greet());

//2. Anonymous Function

const greet1 = function () {
  return "Hi There !";
};

console.log(greet1());

//3. Function Expression

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

//4. Arrow Function (ES6)

const square = (n) => n * n;

console.log(square(4));

//5. Callback Functions

function num(n, callback) {
  return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));

// 6. Constructor Function

/* const student1 = {
  name: "Peter",
  age: 22,
  course: "JavaScript",
};
console.log(student1);
 */
/* function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

const student1 = new Student("Peter", 20, "JavaScript");
const student2 = new Student("John", 22, "Web Developer");

console.log(student1, student2); */

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;

  this.introduce = function () {
    console.log(`My name is ${this.name} and i study ${this.course}.`);
  };
}

const student1 = new Student("Peter", 25, "JavaScript");

// student1.introduce();

student1.introduce();

function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;

  this.selection = function () {
    const list = document.createElement("h1");
    // list.textContent = "list";
    list.classList.add("list");
    list.textContent = `My Car  name is ${this.brand} Corsa and model number is ${this.model} and color is ${this.color}. `;
    document.body.appendChild(list);
  };
}

const car1 = new Car("Vauxhall", "Corsa", "White");
const car2 = new Car("HondaCity", "Ivtech", "Pearl White");

car1.selection();
car2.selection();
