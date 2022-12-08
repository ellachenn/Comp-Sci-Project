// control "c" to get back to where you type "npx http-server" in terminal
// option shift f = automatically indents

// tester: 你好讨厌耳朵衣

let wordList;
let listArray = [];
let exerptArray = [];

function preload() {
  wordList = loadStrings("grades.txt");
}

function setup() {
  createCanvas(400, 400);

  // make button
  input = createInput();
  input.position(20, 65);
  button = createButton("submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(submitted);
  greeting = createElement("h2", "input exerpt from book");
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
  listToArray();
}

function submitted() {
  exerptArray = input.value();
  // console.log(exerptArray);
  // console.log(sortExerpt());
  calculate(sortExerpt());
  // console.log(calculate(sortExerpt))
}

// fills out listArray, soring grade words into a 2D array comrpised of each grade's words separately
function listToArray() {
  for (let grade of wordList) {
    let character = grade.split(",");
    listArray.push(character);
  }
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

function sortExerpt() {
  let sortedExerptArray = [];
  for (let r = 0; r <= 5; r++) {
    sortedExerptArray[r] = [];
  }
  for (let word of exerptArray) {
    if (getGradeLevel(word) != -1) {
      sortedExerptArray[getGradeLevel(word)].push(word);
    }
  }
  return sortedExerptArray;
}

function calculate(sE) {
  percArr = [];
  // console.log(sE);
  for (let grade of sE) {
    percentage = grade.length / exerptArray.length;
    percArr.push(percentage);
  }
  console.log(percArr);
  // return percArr;
  // can't return it but can print it for some reason. says sE on 75 is not iterable?
}

// once i've returned percArr:
function getGrade() {
  if ()
}


do the math for what percentages correspond to what grades
if over 80% are first grade words, first grade
if over 80% are first and second grade words and over