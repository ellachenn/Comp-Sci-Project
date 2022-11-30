
// control "c" to get back to where you type "npx http-server" in terminal
// option shift f = automatically indents

let wordList;
let listArray = [];
let exerptArray = [];
let sortedExerptArray = [];

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
  listToArray();
  // console.log(compareAndSort());
  // console.log(getGradeLevel())
  console.log(getGradeLevel('服')); // 0
}

function greet() {
  // exerpt is variable for user input
  const exerpt = input.value();
  exerptArray.push(exerpt);
  console.log(exerptArray)
}

// sort exerpt word into 2D array
// do array[i].length to count how many words are in each grade level
// example to making and initializing a 2d array:
// https://replit.com/@advanced-cs-2022-23/55-2D-Array-EllaChen5#script.js

// fills out listArray, soring grade words into a 2D array comrpised of each grade's words separately
function listToArray() {
  for (let grade of wordList) {
    let character = grade.split(',');
    listArray.push(character);
  }
  // return listArray;
}

function compareAndSort() {
  // for (let character of exerptArray) {
  //   for (let grade of listArray) {
  //     sortedExerptArray[grade]= [];
  //     for (let word of grade) {
  //       if (character == word) {
  //          // push character into the appropriate grade array in exerptArray
  //         sortedExerptArray[grade].push(character);
  //       }
  //     }
  //   }
  // }
  // return sortedExerptArray;
}



function getGradeLevel(character) {
  let g = 0;
    for (let grade of listArray) {
      for (let word of grade) {
        if (character == word) {
          return g;
        }
      }
      g++;
    }
    return -1;
}