// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  if (n > 0) {
    const rowLength = n * 2 - 1;
    let hashesNumber;
    for (let rowNumber = 1; rowNumber <= n; rowNumber++) {
      if (rowNumber == 1) {
        hashesNumber = rowNumber;
      } else {
        hashesNumber = hashesNumber + 2
      }
      const hashesString = "#".repeat(hashesNumber);
      const spacesNumber = rowLength - hashesNumber;
      const spacesHalfString = spacesNumber ? " ".repeat(spacesNumber / 2) : "";
      const row = `${spacesHalfString}${hashesString}${spacesHalfString}`;

      console.log(row);
    }
  }
}

module.exports = pyramid;
