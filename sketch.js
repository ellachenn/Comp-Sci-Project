
// control "c" to get back to where you type "npx http-server" in terminal

let result;

function preload() {
  result = loadStrings('grades.txt');
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

function make2DArray() {
  let twoDArray = []
  for (let i of result) {
    let words = result[i].split(",");
    for (w of words) {
      twoDArray.push(w);
    }
  }
  console.log(twoDArray);
}


function compare() {
  counter = 0
  for (let grade of twoDArray) {
    for (let word of grade) {
      for (let exword of exerptArray) {
        if (word == exword) {
          // need a counter for each different grade
          counter = counter + 1
        }
      }
    }
  }
  exerptArray
}

// getting at individual words in the grades.txt file
// word + i = result[i].split(",");
// let words = result[0].split(",");
// console.log(words[0]);

// function draw() {
//   background(0, 255, 0);
// }
