let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray); // → [1, 2, 3, 4, 5, 6]




// Approach:


// The reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// The concat method is used to merge two or more arrays into a new array.

// Flattening the array:

// Use reduce to iterate over each sub-array in the main array.

// For each sub-array, use concat to merge it with the accumulator (initially an empty array []).

// This process combines all sub-arrays into a single flattened array.







// Explanation:


// The reduce method starts with an empty array [] as the initial value of the accumulator.

// Iteration:

// In the first iteration, accumulator is [] and currentArray is [1, 2, 3]. Concatenating them gives [1, 2, 3].

// In the second iteration, accumulator is [1, 2, 3] and currentArray is [4, 5]. Concatenating them gives [1, 2, 3, 4, 5].

// In the third iteration, accumulator is [1, 2, 3, 4, 5] and currentArray is [6]. Concatenating them gives [1, 2, 3, 4, 5, 6].


// Result:

// The final flattened array is [1, 2, 3, 4, 5, 6].

