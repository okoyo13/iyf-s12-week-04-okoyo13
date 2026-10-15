// Variable declarations
let name = "Rodricks Okoyo";
let age = 28;
const birthYear = 1998;

// typeof operator
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof true); // boolean

// let vs const
let score = 100;
score = 150; // Works!

const PI = 3.14159;
// PI = 3; // Error! const cannot be reassigned
// Task 7.1: Variable Practice

// 1. My name (string)
let myName = "Rodricks Okoyo";

// 2. My age (number)
let myAge = 28;

// 3. Am I a student? (boolean)
let isStudent = true;

// 4. My favorite colors (array)
let favoriteColors = ["Gray", "Black", "White"];

// 5. Today's date (Date object)
let today = new Date();

// Display each variable with a descriptive message
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", today);

console.log("\n--- Task 7.2: Data Types & Operators ---");

// Exercise 1: Number Operations
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus (remainder):", a % b);
console.log("Exponentiation:", a ** b);

// Increment and Decrement
let count = 0;
count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);

console.log("\n--- Exercise 2: String Operations ---");

let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Template literals
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log("Greeting:", greeting);
console.log("Message:", message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First character:", firstName.charAt(0));
console.log("Includes John:", fullName.includes("John"));

console.log("\n--- Exercise 3: Comparison & Logical Operators ---");

// Comparison operators
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("5 === 5:", 5 === 5);
console.log('5 == "5":', 5 == "5");
console.log("5 !== 3:", 5 !== 3);

// Logical operators
console.log("AND (true && true):", true && true);
console.log("OR (true || false):", true || false);
console.log("NOT (!true):", !true);

console.log("\n--- Challenge: Age Calculations ---");

// Use the age variable from Task 7.1
let ageInDays = Math.round(age * 365.25);
let ageInHours = ageInDays * 24;
let yearTurning100 = new Date().getFullYear() + (100 - age);

console.log("My age in days (approximately):", ageInDays);
console.log("My age in hours (approximately):", ageInHours);
console.log("The year I will turn 100:", yearTurning100);
