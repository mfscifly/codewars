// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// My refactored solution:

function isValidWalk(walk) {
    let nS = 0;
    let eW = 0;
    walk.forEach(direction => {
      switch (direction) {
          case 'n':
            nS++;
            break;
          case 's':
            nS--;
            break;
          case 'e':
            eW++;
            break;
          case 'w':
            eW--;
            break;
      }
    });
    return walk.length === 10 && nS === 0 && eW === 0;
  }

  // My original solution:

  function isValidWalk(walk) {
    let northSouth = 0;
    let eastWest = 0;
    let walkTime = walk.length;  
    if (walkTime != 10) {
      return false;
    } else {
      walk.forEach(direction => {
        switch (direction) {
            case 'n':
              northSouth ++;
              break;
            case 's':
              northSouth --;
              break;
            case 'e':
              eastWest ++;
              break;
            case 'w':
              eastWest --;
              break;
        }
      });
    }
    return northSouth === 0 && eastWest === 0;
  }