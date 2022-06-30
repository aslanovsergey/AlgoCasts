// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const array = [0, 1];

//   for (let index = 2; index <= n; index++) {
//       const first = array[array.length - 1];
//       const second = array[array.length - 2];
//       array[index] = first + second;
//   }

//   return array[n];
// }

// function fib(n, array = [0, 1]) {
//   if (array.length <= n) {
//     const a = array[array.length - 1];
//     const b = array[array.length - 2];
//     array.push(a + b);

//     fib(n, array);
//   }

//   return array[n];
// }

function memoize(fn) {
  const cache = {};

  return function (n) {
    if (!cache[n]) {
        const value = fn(n);
        cache[n] = value;
    }
    
    return cache[n];
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

var fib = memoize(slowFib);

module.exports = fib;
