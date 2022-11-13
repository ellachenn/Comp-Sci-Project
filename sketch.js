
// control "c" to get back to where you type "npx http-server" in terminal

let wordList;
let listArray = [];
let exerptArray = [];

function preload() {
  wordList = loadStrings('grades.txt');
}

function setup() {
  createCanvas(400, 400);
  console.log("Hello World")

  // make button 
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
  greeting = createElement('h2', 'input exercpt from book');
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
  make2DArray()
}

function greet() {
  // exerpt is variable for user input
  const exerpt = input.value();
  console.log(exerpt)
}
  
function convertToArray() {
  const exerptArray = split(exerpt, " ");
  console.log(exerptArray)
}


// idea 2: sorting exerpt word into array

// need a counter for each different grade  
// or instead of counter, create a 2d array that has an array for each grade, and i push each exerpt word into the corresponding grade array within the 2d array
// bc then i can just do array[i].length to count how many words are in each grade level and wouldn't have to have 6 different counters
// example to making and initializing a 2d array:
// https://replit.com/@advanced-cs-2022-23/55-2D-Array-EllaChen5#script.js

// fills out listArray, soring grade words into a 2D array comrpised of each grade's words separately
function listToArray() {
  for (i of wordList) {
    (word + i) = wordList[i].split(",");
    for (word of (word + i)) {
      for (let r = 0; r < 6; r++) {
        listArray[r] = [];
        for (let c = 0; c < listArray[r].length; c++) {
          listArray[r][c].push(word);
        }
      }
    }
  }
}

function compare() {
  for (character in exerptArray) {
    for (grade in listArray) {
      for (word in grade) {
        if (character == word) {
          // push character into the appropriate grade array in exerptArray
        }
      }
    }
  }
}


// idea 1
// function make2DArray() {
//   let twoDArray = []
//   for (let i of wordList) {
//     let words = wordList[i].split(",");
//     for (w of words) {
//       twoDArray.push(w);
//     }
//   }
//   console.log(twoDArray);
// }




// getting at individual words in the grades.txt file
// word + i = wordList[i].split(",");
// let words = wordList[0].split(",");
// console.log(words[0]);

// function draw() {
//   background(0, 255, 0);
// }