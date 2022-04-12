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

// Add in a parameter in the function
function sayThanks(name) {
  console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

sayThanks('Cole')

// You can set default parameters in functions for example.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs')

// Random example of functions with parameters

function monitorCount(rows, columns) {
  return rows * columns
};

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

// this builds on top of the previous example in which is called a helper function 

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Arrow functions literally takes off function and adds in => after parameters For example.

const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

// arrow functions are quick and easy if you want an inline code you can rewrite the function like this, its without the parenthesis and without the return

const plantNeedsWater = day => day === 'Wednesday' ? true : false;
