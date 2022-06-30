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
  const array = [0, 1];

  for (let index = 2; index <= n; index++) {

      const first = array[array.length - 1];
      const second = array[array.length - 2];

      array[index] = first + second;
    
  }

  return array[n];
}

module.exports = fib;
