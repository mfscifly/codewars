// Link to challenge: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// My refactored solution:

function generateHashtag (str) {
    let result = '#'+str.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    return result.length === 1 || result.length > 140 ? false : result;
}

// My original solution:

function generateHashtag (str) {
    let result = '#'+str.trim().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    if (str.trim()==='' || result.length > 140){
        return false;
    } else {
        return result;  
    }
}