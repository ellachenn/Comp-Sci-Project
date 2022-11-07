
// control "c" to get back to where you type "npx http-server" in terminal
// hi

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

function compare() {
  counter = 0
  for (i grade in grades) {
    for (word in grade) {
      for (exword in exerptArray) {
        if (word == exword) {
          // need a counter for each different grade
          counter = counter + 1
        }
      }
      }
    }
  }
  exerptArray
}

// function draw() {
//   background(0, 255, 0);
// }

// questions for dbb
// p5js doesn't recognize chinese characters from error code