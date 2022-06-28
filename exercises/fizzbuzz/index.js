// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    fizzBuzzLogic(index);
  }

  function fizzBuzzLogic(n) {
    const mutiplyOf3 = n % 3 == 0;
    const mutiplyOf5 = n % 5 == 0;

    if (mutiplyOf3 && mutiplyOf5) {
      console.log("fizzbuzz");
    } else if (mutiplyOf5) {
      console.log("buzz");
    } else if (mutiplyOf3) {
      console.log("fizz");
    } else {
      console.log(n);
    }
  }
}

module.exports = fizzBuzz;
