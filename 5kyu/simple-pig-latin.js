// Link to challenge: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// My solution:

function pigIt(str) {
    let arrayWord = str.split(' ');
    return arrayWord.map((word) => {
        if (word.toLowerCase() === word.toUpperCase()){ //check for non-letters
            return word;
        } 
        let firstLetter = word.charAt(0);
        return word.slice(1) + firstLetter + 'ay';  
        }
    ).join(' ');
}