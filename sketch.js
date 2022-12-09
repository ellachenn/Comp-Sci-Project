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
  // console.log(sortExerpt());
  // console.log(calculate(sortExerpt()));
  // console.log(diffPoints(calculate(sortExerpt())));
  console.log(getGrade(diffPoints(calculate(sortExerpt()))));
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
  let percArr = [];
  for (let grade of sE) {
    percentage = grade.length / exerptArray.length;
    percArr.push(percentage);
  }
  return percArr;
}

function diffPoints(pA) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    counter = 100 * (pA[i] * (i + 1)) + counter;
  }
  return counter;
}

function getGrade(points) {
  if (points == 0) {
    return "undefined";
  }
  else if (points <= 100) {
    return "first grade";
  }
  else if (points <= 200) {
    return "second grade";
  }
  else if (points <= 300) {
    return "third grade";
  }
  else if (points <= 400) {
    return "fourth grade";
  }
  else if (points <= 500) {
    return "fifth grade";
  }
  else if (points <= 600) {
    return "sixth grade";
  }
}

// return corresponding number of goomba goombas as the returned grade

// graph class visualizing logic behind conclusion
// need:
// two classes (parent/child), one object

// parent class: basic bar graph
// child: bar graph with numbers on top
// object?