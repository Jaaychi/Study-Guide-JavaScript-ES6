// Ternary Operator

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.')

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!')

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")

// Else If Statements

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// Heres another example

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}

// switch statements
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'

//another example of switch statement

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!')
    break;
  case 'second place':
    console.log('You get the silver medal!')
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.')
    break;
}

//  functions
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks()
sayThanks()
sayThanks()
