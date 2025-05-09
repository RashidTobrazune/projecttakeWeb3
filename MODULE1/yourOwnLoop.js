function loop(initialValue, test, update, body) {
    for (let value = initialValue; test(value); value = update(value)) {
      body(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1


//   Approach:

// The loop starts with an initial value.

// Before each iteration, the test function is called to determine if the loop should continue.

// If the test passes, the body function is executed with the current value.

// The current value is then updated using the update function, and the process repeats.

// Use a while loop or recursion to repeatedly execute the test, body, and update steps.

// Start with the initial value and continue looping as long as the test function returns true.





// Explanation:


// The loop function is called with 3 as the initial value, a test function n => n > 0, an update function n => n - 1, and console.log as the body function.



// First iteration:

// value is 3. The test 3 > 0 is true, so the body console.log(3) is executed, printing 3.

// The update function 3 - 1 sets value to 2.

// Second iteration:

// value is 2. The test 2 > 0 is true, so the body console.log(2) is executed, printing 2.

// The update function 2 - 1 sets value to 1.

// Third iteration:

// value is 1. The test 1 > 0 is true, so the body console.log(1) is executed, printing 1.

// The update function 1 - 1 sets value to 0.

// Termination:

// value is 0. The test 0 > 0 is false, so the loop stops.