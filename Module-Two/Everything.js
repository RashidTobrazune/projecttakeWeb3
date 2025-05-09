//Loop-based solution

function every(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10)); // → true
  console.log(every([2, 4, 16], n => n < 10)); // → false
  console.log(every([], n => n < 10)); // → true


  //some-based solution
  function every(array, test) {
    return !array.some(element => !test(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10)); // → true
  console.log(every([2, 4, 16], n => n < 10)); // → false
  console.log(every([], n => n < 10)); // → true



//   Explanation:
// Loop-based Version:

// The loop iterates over each element in the array.

// If any element fails the predicate (!test(element)), the function immediately returns false.

// If the loop completes without finding a failing element, the function returns true.

// some-based Version:

// The some method checks if at least one element in the array fails the predicate (!test(element)).

// If some returns true, it means at least one element failed, so every should return false (hence the !).

// If some returns false, it means no elements failed, so every returns true.



// Key Points:
// The loop-based version is straightforward and efficient, exiting early if any element fails.

// The some-based version leverages De Morgan’s laws for a concise implementation.

// Both versions correctly handle edge cases, such as an empty array (returns true).