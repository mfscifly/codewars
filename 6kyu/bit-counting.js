// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// My solution:

var countBits = function(n) {
    n = n.toString(2);
    let result = 0;
    for (let i=0; i<n.length; i++){
      if (n.charAt(i) === "1"){
        result++;
      }
    }
    return result;
}

// Alternate solution:

var countBitsAlternate = function(n) {
    return n.toString(2).split("0").join("").length;
}