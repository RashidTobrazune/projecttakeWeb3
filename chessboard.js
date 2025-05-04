const size = 8; // Change this value for different dimensions
let chessboard = "";

for (let row = 0; row < size; row++) {
  let line = "";
  for (let col = 0; col < size; col++) {
    // Add ' ' if (row + col) is even, else '#'
    line += (row + col) % 2 === 0 ? " " : "#";
  }
  chessboard += line + "\n"; // Append the line and a newline
}

console.log(chessboard);