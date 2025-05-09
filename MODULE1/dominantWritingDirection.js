function dominantDirection(text) {
    // Count the characters by their script's direction
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");
  
    if (counted.length == 0) return "ltr"; // Default if no scripts found
  
    // Find the direction with the highest count
    return counted.reduce((a, b) => a.count > b.count ? a : b).direction;
  }
  
  // Example usage:
  console.log(dominantDirection("Hello!")); // → "ltr"
  



//   Explanation:
// Character Script Identification:

// For each character in the input string, characterScript is used to find its associated script (if any).

// The script's direction property ("ltr", "rtl", or "ttb") is then used for grouping.

// Counting Directions:

// The countBy function groups characters by their script's direction and counts them.

// Characters without an associated script (direction "none") are filtered out.

// Determining the Dominant Direction:

// The reduce method compares the counts of each direction and returns the one with the highest count.

// If no valid directions are found (e.g., empty input or all punctuation), the function defaults to returning "ltr".



// Key Points:
// Helper Functions: Assumes characterScript and countBy are predefined (as in the textbook).

// Edge Handling: Returns "ltr" if no scripted characters are found (though the problem examples suggest this case is rare).