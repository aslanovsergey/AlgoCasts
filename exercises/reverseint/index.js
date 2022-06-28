// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var revIntStr = [...n.toString()].reverse().join("");
  var revInt = parseInt(revIntStr);
  return n < 0 ? revInt * -1 : revInt;
}

module.exports = reverseInt;
