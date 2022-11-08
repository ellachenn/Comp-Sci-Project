
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

// idea 2
function compare() {
  // let counter = 0
  for (i of result) {
    (word + i) = result[i].split(",");
    for (word of (word + i)) {
      if (word == exword) {
        
        // need a counter for each different grade  
        // or instead of counter, create a 2d array that has an array for each grade, and i push each exerpt word into the corresponding grade array within the 2d array
        // bc then i can just do array[i].length to count how many words are in each grade level and wouldn't have to have 6 different counters
        // example to making and initializing a 2d array:
        // https://replit.com/@advanced-cs-2022-23/55-2D-Array-EllaChen5#script.js
      }
    }
  }
}



// idea 1
// function make2DArray() {
//   let twoDArray = []
//   for (let i of result) {
//     let words = result[i].split(",");
//     for (w of words) {
//       twoDArray.push(w);
//     }
//   }
//   console.log(twoDArray);
// }

// idea 1
// function compare() {
//   counter = 0
//   for (let grade of twoDArray) {
//     for (let word of grade) {
//       for (let exword of exerptArray) {
//         if (word == exword) {
//           // need a counter for each different grade
//           counter = counter + 1
//         }
//       }
//     }
//   }
//   exerptArray
// }




// getting at individual words in the grades.txt file
// word + i = result[i].split(",");
// let words = result[0].split(",");
// console.log(words[0]);

// function draw() {
//   background(0, 255, 0);
// }
