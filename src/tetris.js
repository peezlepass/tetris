// E = empty
// B = border

export function generateTetrisField(width, height) {
  let tetrisField = [];

  // This is the 1st row with all edges
  for (let i = 0; i < width + 2; i++) {
    tetrisField.push("B");
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width + 2; j++) {
      if (j === 0 || j === width + 1) {
        tetrisField.push("B");
      } else {
        tetrisField.push("E");
      }
    }
  }
  // This is the last row with all edges
  for (let i = 0; i < width + 2; i++) {
    tetrisField.push("B");
  }
  return tetrisField;
}

export function generateEmptyField(width, height) {
  let emptyField = [];
  for (let i = 0; i < (width + 2) * (height + 2); i++) {
    emptyField.push(null);
  }
  return emptyField;
}

export function generateQueue(count) {
  let queue = [];
  const figures = [
    "left-zig-zag",
    "l-shaped",
    "j-shaped",
    "right-zig-zag",
    "square",
    "straight",
    "t-shaped",
  ];

  for (let i = 0; i < count; i++) {
    let randomIndex = Math.floor(Math.random() * figures.length);
    queue.push(figures[randomIndex]);
  }
  return queue;
}

export function combineFields(a, b) {
  return a.map((cell, i) => {
    return b[i] || cell;
  });
}
