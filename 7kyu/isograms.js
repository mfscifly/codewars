// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// my solution

function isIsogram(str){
    let lowercase = str.toLowerCase();
    for (let i = 0; i < lowercase.length; i++){
      if (lowercase.includes(lowercase[i],i+1)){
        return false;
      }
    } 
    return true;
  }