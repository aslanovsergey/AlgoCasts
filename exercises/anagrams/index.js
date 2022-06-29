// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function stringToMap(str) {
    const map = {};

    for (const char of str) {
      if (!isLetter(char)) {
        continue;
      }
      var charLower = char.toLowerCase();
      map[charLower] = map[charLower]++ || 1;
    }

    return map;
  }

  function isLetter(c) {
    return c.match(/[a-z]/gi);
  }

  const mapA = stringToMap(stringA);
  const mapB = stringToMap(stringB);
  
  if(Object.keys(mapA).length != Object.keys(mapB).length) {
      return false;
  }

  let equal = true;
  for (const key in mapA) {
    const value = mapA[key];

    if (mapB[key] != value) {
      equal = false;
      break;
    }
  }

  return equal;
}

module.exports = anagrams;
