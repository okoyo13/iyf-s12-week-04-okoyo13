console.log("===== Day 5: Palindrome Checker =====");

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log("racecar:", isPalindrome("racecar"));
console.log("hello:", isPalindrome("hello"));
console.log(
    "A man a plan a canal Panama:",
    isPalindrome("A man a plan a canal Panama")
);
