// control "c" to get back to where you type "npx http-server" in terminal
// option shift f = automatically indents

let wordList;
let listArray = [];
let exerptArray = [];
let input;
let graph;

function preload() {
  wordList = loadStrings("grades.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  makeButton();
  graph = new Graph(100, 400, 300);
}

function submitted() {
  exerptArray = input.value();
  // conslog();
  let perc = calcPerc(sortExerpt());
  graph.createBars(perc);
  graph.display();
}

// prints each step of the calculation for clarity
function conslog() {
  console.log(sortExerpt());
  console.log(calcPerc(sortExerpt()));
  console.log(diffPoints(calcPerc(sortExerpt())));
  console.log(getGrade(diffPoints(calcPerc(sortExerpt()))));
}

function draw() {
  let calcedGrade = getGrade(diffPoints(calcPerc(sortExerpt())));
  textSize(20);
  text(calcedGrade, 80, 120);
}

function makeButton() {
  input = createInput();
  input.position(20, 65);
  let button = createButton("submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(submitted);
  let greeting = createElement("h2", "input exerpt from book");
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
  listToArray();
}

// fills out listArray, soring grade words into a 2D array comrpised of each grade's words separately
function listToArray() {
  for (let grade of wordList) {
    let character = grade.split(",");
    listArray.push(character);
  }
}

// gets the grade level of each input character
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

// sorts input into a 2D array organized by grade
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

// calculates the percentage of input words in each grade level and sorts the percentages into an array with six elements
function calcPerc(sE) {
  let percArr = [];
  for (let grade of sE) {
    percentage = (grade.length / exerptArray.length) * 100;
    percArr.push(ceil(percentage));
  }
  return percArr;
}

// using the above array to generate a point(number) for the input exerpt
function diffPoints(pA) {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    counter = pA[i] * (i + 1) + counter;
  }
  return counter;
}

// using the number generated, the if statements will return the grade that the exerpt is appropriate reading material for
function getGrade(points) {
  if (points == 0) {
    return "undefined";
  } else if (points <= 100) {
    return "first grade";
  } else if (points <= 200) {
    return "second grade";
  } else if (points <= 300) {
    return "third grade";
  } else if (points <= 400) {
    return "fourth grade";
  } else if (points <= 500) {
    return "fifth grade";
  } else if (points <= 600) {
    return "sixth grade";
  }
}