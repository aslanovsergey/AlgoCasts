// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var map = {};

    for (const char of str) {
        map[char] = (map[char] ? map[char] : 0) + 1
    }

    return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0]
}

module.exports = maxChar;
