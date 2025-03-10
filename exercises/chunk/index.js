// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  const chunksCount = array.length / size;

  for (let index = 0; index <= chunksCount; index++) {
    const startPosition = index * size;
    let endPosition = startPosition + size;
    if (array.length > startPosition) {
      if (endPosition > array.length) {
        endPosition = array.length;
      }

      const chunk = array.slice(startPosition, endPosition);
      chunks[index] = chunk;
    } else {
        break;
    }
  }

  console.log(array, size, chunks);
  return chunks;
}

module.exports = chunk;
