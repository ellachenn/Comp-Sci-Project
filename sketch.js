function setup() {
    createCanvas(400, 400);
    console.log("Hello World")
}
  
function draw() {
  background(0, 255, 0);
}

let booktext = prompt("Enter exerpt from book: ");
// how do you extract a response from user input from prompt?
// booktext = parseFloat(booktext);
console.log(booktext);

