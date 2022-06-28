// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  if (n <= 0) {
    return;
  }

  for (let index = 1; index <= n; index++) {
    const hashes = "#".repeat(index);
    const spaces = ` `.repeat(n - index);

    console.log(`${hashes}${spaces}`);
  }
}

module.exports = steps;
