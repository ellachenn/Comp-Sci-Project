// control "c" to get back to where you type "npx http-server" in terminal

function setup() {
  createCanvas(400, 400);
  console.log("Hello World")

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
  const exerpt = input.value();
  console.log(exerpt)
}
  

// function draw() {
//   background(0, 255, 0);
// }
