// Who remembers back to their time in the schoolyard, when you would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the you would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// My solution:

function howMuchILoveYou(nbPetals) {  
    switch (nbPetals%6) {
        case 1:
          return "I love you";
          break;
        case 2:
          return "a little";
          break;
        case 3:
          return "a lot";
          break;
        case 4:
          return "passionately";
          break;
        case 5:
          return "madly";
          break;
        case 0:
          return "not at all";
          break;
    }
}