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

//arrays example

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

const hobbies = ['string', 'string', 'string'];
console.log(hobbies);

//Accessing elements in array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0]
console.log(listItem);
console.log(famousSayings[2]);
// If you want to access an element that is not there, it will be undefined.
console.log(famousSayings[3]);

// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

//Arrays with let and const (you can change the insides of both arrays, you can change the whole array with let arrays but cannot with const)

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon'
console.log(utensils);


// The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);


// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('watch tv', 'code')
console.log(chores);

// The .pop() method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop()
console.log(chores)

// More Array Methods 
// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
// pops the 1st element from the array
groceryList.shift();
console.log(groceryList);
// adds an element to the front of the array
groceryList.unshift('popcorn');
console.log(groceryList);
// slice is non-mutating
console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex);

// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  return arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  return newArr.pop()
}
removeElement(concept);
console.log(concept);

//Nested Arrays

let numberClusters = [[1,2], [3,4], [5,6]];

const target = numberClusters[2][1];
console.log(target);

// The For Loop
// Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console.

for (let counter = 5; counter <= 10; counter++) {
 console.log(counter);
}

// Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

// iterating over arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);


// nested loops arrays (finding mutual followers)
 
// Write your code below
let bobsFollowers = ['Jeffrey', 'Ryan', 'Jp', 'Shane'];
let tinasFollowers = ['Jeffrey', 'Ryan', 'Lili'];
let  mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
 
//  while loops go continously when its true, but when its false it stops
 const array1 = [1,2,3,4,5,6,7]
 let i = 0;
 while (i < array1.length) {
  console.log(array1[i]);
  i++;
 }
 
//  another example of while loops
 
 const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

 let currentCard
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


