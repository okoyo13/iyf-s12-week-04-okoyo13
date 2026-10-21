console.log("===== Day 3: Find the Largest Number =====");

const largestChallengeNumbers = [12, 45, 7, 89, 23, 56];

// Approach 1: Using a loop
function findLargestLoop(arr) {
    if (arr.length === 0) return undefined;

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Approach 2: Using reduce()
function findLargestReduce(arr) {
    if (arr.length === 0) return undefined;

    return arr.reduce((largest, current) =>
        current > largest ? current : largest
    );
}

console.log("Using loop:", findLargestLoop(largestChallengeNumbers));
console.log("Using reduce:", findLargestReduce(largestChallengeNumbers));
