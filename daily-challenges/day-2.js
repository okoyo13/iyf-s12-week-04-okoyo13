console.log("===== Day 2: Reverse a String =====");

// Approach 1: Using a loop
function reverseStringLoop(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

// Approach 2: Using built-in methods
function reverseStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

console.log("Loop:", reverseStringLoop("hello"));
console.log("Built-in:", reverseStringBuiltIn("hello"));
console.log("Another test:", reverseStringLoop("JavaScript"));
