// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {    
    const stringArr = [...str];
    const newStrArr = [];

    for (let index = 0; index < stringArr.length; index++) {
        const char = stringArr[index];
        
        if(char.match(/[A-Za-z]/) && (index === 0 || stringArr[index - 1] == " ")) {
            newStrArr[index] = char.toUpperCase();
        }
        else {
            newStrArr[index] = char;
        }
    }

    return newStrArr.join("")
}

module.exports = capitalize;
