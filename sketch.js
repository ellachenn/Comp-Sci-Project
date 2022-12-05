// control "c" to get back to where you type "npx http-server" in terminal
// option shift f = automatically indents

// next steps!
  // get length of each array within the sortedExerptArray to conclude how many exerpt words are from each grade
  // calculate percentages so grade length divided by total number of expert words
  // return reading level

let wordList;
let listArray = [];
let exerptArray = [];

function preload() {
  wordList = loadStrings("grades.txt");
}

function setup() {
  createCanvas(400, 400);
  // console.log("Hello World")

  // make button
  input = createInput();
  input.position(20, 65);
  button = createButton("submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(submitted);
  greeting = createElement("h2", "input exercpt from book");
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
  listToArray();
  // console.log(getGradeLevel('你')); // 0
  // arrayTrial();
  // having this arrayTrial is breaking it. it won't even print line 38 exerpt array when this isn't commented out. why?
}

// anything that needs to happen after the submit button is pressed has to be in greet
function submitted() {
  exerptArray = input.value();
  // console.log(exerptArray);
  console.log(sortExerpt());
}

function arrayTrial() {
  for (let character of exerptArray) {
    console.log(character);
  }
}

// fills out listArray, soring grade words into a 2D array comrpised of each grade's words separately
function listToArray() {
  for (let grade of wordList) {
    let character = grade.split(",");
    listArray.push(character);
  }
}

// in next function, do array[i].length to count how many words are in each grade level
function sortExerpt() {
  let sortedExerptArray = [];
  for (let r = 0; r <= 6; r++) {
    sortedExerptArray[r] = [];
  }
  for (let word of exerptArray) {
    if (getGradeLevel(word) != -1) {
      sortedExerptArray[getGradeLevel(word)].push(word);
    }
  }
  return sortedExerptArray;
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
