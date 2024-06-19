// Link to challenge: https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

// Description: 

// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

// My solution:

function validPhoneNumber(num){
    if (num.length !== 14) {
      return false;
    } else if (num[0] !== '(') {
      return false;
    } else if (num[4] !== ')') {
      return false; 
    } else if (num[5] !== ' ') {
      return false;
    } else if (num[9] !== '-') {
      return false;
    } 
    return true;
}