// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const array = [];

  for (let index = 0; index <= n; index++) {
    if (index == 0) {
      array[index] = 0;
    } else if (index == 1) {
      array[index] = 1;
    } else {
      const first = array[array.length - 1];
      const second = array[array.length - 2];

      array[index] = first + second;
    }
  }

  return array[array.length - 1];
}

module.exports = fib;
