// Link to challenge: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution (passes tests of str1.length = 260,000):

function scramble (one, two){
    one = one.split('');
    two = two.split('');
    let obj1 = {}, 
        obj2 = {};
    for (const letter of one) {
        obj1[letter] = obj1[letter] ? obj1[letter]+1 : 1;
    }
    for (const letter of two){
        obj2[letter] = obj2[letter] ? obj2[letter]+1 : 1;
    }
    for (const key in obj2){
        if (obj1[key] < obj2[key] || obj1[key] === undefined){
            return false;
        }
    }
    return true;
}