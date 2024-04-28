// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My soluton:

function count(string) {
    let result = {};
    let arr = string.split('');
    for (const char of arr){
      result[char] = result[char] ? result[char]+1 : 1;
    }
    return result;
}