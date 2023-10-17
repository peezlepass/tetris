// E = edge
// B = blank

export function generateTetrisField(width, height) {
  let arr = [];

  // This is the 1st row with all edges
  for (let i = 0; i < width + 2; i++) {
    arr.push("E");
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width + 2; j++) {
      if (j === 0 || j === width + 1) {
        arr.push("E");
      } else {
        arr.push("B");
      }
    }
  }
  // This is the last row with all edges
  for (let i = 0; i < width + 2; i++) {
    arr.push("E");
  }
  return arr;
}
