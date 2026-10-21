console.log("===== Day 4: Remove Duplicates =====");

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 5];

// Approach 1: Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}

// Approach 2: Using filter()
function removeDuplicatesFilter(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log("Using Set:", removeDuplicatesSet(duplicateNumbers));
console.log("Using filter:", removeDuplicatesFilter(duplicateNumbers));
