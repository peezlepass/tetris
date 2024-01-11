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

export function generateUserField(width, height) {
  let userField = [];
  for (let i = 0; i < (width + 2) * (height + 2); i++) {
    userField.push(null);
  }
  return userField;
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
  // return a.map((cell, i) => {
  //   return b[i] || cell;
  // });

  let finalField = [];
  for (let i = 0; i < a.length; i++) {
    finalField.push(b[i] || a[i]);
  }
  return finalField;
}

export function placeFigure(figure, width) {
  const m = Math.floor(width / 2);
  const w = width + 2;
  const figureMap = {
    "left-zig-zag": [m + w + 1, m + 2 * w + 1, m + 2 * w, m + 3 * w],
    "l-shaped": [m + w, m + 2 * w, m + 3 * w, m + 3 * w + 1],
    "j-shaped": [m + w, m + 2 * w, m + 3 * w, m + 3 * w - 1],
    "right-zig-zag": [m + w, m + 2 * w, m + 2 * w + 1, m + 3 * w + 1],
    "square": [m + w, m + 1 + w, m + 2 * w, m + 1 + 2 * w],
    "straight": [m - 1 + w, m + w, m + 1 + w, m + 2 + w],
    "t-shaped": [m + w, m - 1 + 2 * w, m + 2 * w, m + 1 + 2 * w],
  };
  return figureMap[figure];
}

export function figureToColor(figure) {
  const colorMap = {
    "left-zig-zag": "red",
    "l-shaped": "blue",
    "j-shaped": "orange",
    "right-zig-zag": "green",
    "square": "yellow",
    "straight": "cyan",
    "t-shaped": "purple",
  };
  return colorMap[figure];
}

[18, 30, 29, 41];

export function rotateFigure(figure, location, currentDegrees) {
  const rotationMap = {
    "left-zig-zag": {
      0: [12, -1, -12, -25],
      90: [11, 0, 13, 2],
      180: [-25, -12, -1, 12],
      270: [2, 13, 0, 11],
    },
    "t-shaped": {
      0: [13, -11, 0, 11],
      90: [11, 13, 0, -13],
      180: [-13, 11, 0, -11],
      270: [-11, -13, 0, +13],
    },
  };

  const modifications = rotationMap[figure][currentDegrees];
  return location.map((element, index) => {
    return element + modifications[index];
  });
}
