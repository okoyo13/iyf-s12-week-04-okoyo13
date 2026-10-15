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

console.log("\n--- Task 7.3: Functions ---");

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function (a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with a body
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

// Test the functions
console.log(greet("Rodricks"));
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(4, 3));
console.log("Division:", divide(10, 2));
console.log("Division by zero:", divide(10, 0));

console.log("\n--- Exercise 2: Build These Functions ---");

// 1. Calculate the area of a rectangle
function calculateArea(width, height) {
  return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 3. Check whether a number is even
function isEven(number) {
  return number % 2 === 0;
}

// 4. Get initials from a full name
function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
}

// 5. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Test the functions
console.log("Rectangle area:", calculateArea(5, 4));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Initials:", getInitials("John Doe"));
console.log("Reversed string:", reverseString("JavaScript"));

console.log("\n--- Exercise 3: Default Parameters ---");

function greetWithDefault(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Alice"));
console.log(greetWithDefault("Bob", "Hi"));

console.log("\n--- Build: Calculate Tip ---");

function calculateTip(bill, tipPercent = 15) {
  return (bill * tipPercent) / 100;
}

// Test the function
console.log("Tip on KSh 1,000 at 15%:", calculateTip(1000));
console.log("Tip on KSh 1,000 at 20%:", calculateTip(1000, 20));
