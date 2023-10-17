export function generateTetrisField(width, height) {
  let arr = [];
  for (let i = 0; i < width * height; i++) {
    arr.push("O");
  }
  return arr;
}
