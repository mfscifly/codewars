// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My refactored solution:

function toCamelCase(str){
    return str.split('-').join('_').split('_').map((word,index) => index===0 ? word : word[0].toUpperCase()+word.slice(1)).join('');
}

// My original solution:

function toCamelCase(str){
    let arr = str.split('-').join('_').split('_');
    let camelArr = arr.map((word,index) => index===0 ? word : word[0].toUpperCase()+word.slice(1));
    return camelArr.join('');
}