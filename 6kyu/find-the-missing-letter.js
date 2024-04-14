// Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// My solution:

function findMissingLetter(array){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (array[0] === array[0].toUpperCase()) {
      alphabet = alphabet.map(x => x.toUpperCase());
    }
    return alphabet.slice(alphabet.indexOf(array[0]),alphabet.indexOf(array[array.length-1])+1).filter(letter => array.indexOf(letter) < 0).toString();
}

// My original solution:

function findMissingLetter(array) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let first = array[0];
    if (first === first.toUpperCase() ){
      alphabet = alphabet.map(letter => letter.toUpperCase());
    }  
    for (let i=0; i<array.length; i++){
      if (array[i] !== alphabet[alphabet.indexOf(first)+i]) {
        return alphabet[alphabet.indexOf(first)+i];
      } 
    }
}