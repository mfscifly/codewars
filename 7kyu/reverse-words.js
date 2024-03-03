// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// my solution:

function reverseWords(str) {
    let words = str.split(" ");
    for (let i = 0; i<words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}

// another solution:

function reverseWords2(str) {
    return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
}