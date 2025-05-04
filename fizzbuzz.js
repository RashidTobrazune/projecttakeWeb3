for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz'; // Check 3 first
    if (i % 5 === 0) output += 'Buzz'; // Then check 5
    console.log(output || i); // If output is empty, print the number
  }
  