// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const array = [];
  for (let index = 0; index < n; index++) {
    array[index] = [];
  }

  const max = Math.pow(n, 2);
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let counter = 1;

  while (startRow <= endColumn && startRow <= endRow) {
    //First row
    for (let column = startColumn; column <= endColumn; column++) {
      array[startRow][column] = counter++;
    }
    startRow++;

    //Right column
    for (let row = startRow; row <= endColumn; row++) {
      array[row][endColumn] = counter++;
    }
    endColumn--;

    //Last row
    for (let column = endColumn; column >= startColumn; column--) {
      array[endRow][column] = counter++;
    }
    endRow--;

    //Left column
    for (let row = endRow; row >= startRow; row--) {
        array[row][startColumn] = counter++; 
    }
    startColumn++
  }

  console.log(array);
  return array;
}

module.exports = matrix;
