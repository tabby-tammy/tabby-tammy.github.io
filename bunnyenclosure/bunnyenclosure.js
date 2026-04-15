var bun;
var enclosure;
var initials ='tt'; // your initials
var choice = '1'; // starting choice, so it is not empty
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  bun = loadImage('https://tabby-tammy.github.io/images/bunny.png');
  bun2 = loadImage('https://tabby-tammy.github.io/images/bunny2.png');
  enclosure = loadImage('https://tabby-tammy.github.io/images/bunnyenclosure.png');
  water = loadImage('https://tabby-tammy.github.io/images/bunnywater.png');
  food = loadImage('https://tabby-tammy.github.io/images/carrot.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(100, 48, 36);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
  image(enclosure, 0, 0);
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
   strokeWeight(20);
    stroke(230, 192, 142);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    strokeWeight(random(5, 10));
    stroke(219-(random(1, 40)), 168-(random(1, 40)), 123-(random(1, 40)));
      point(mouseX + random(-10, 10), mouseY + random(-10, 10));
    
  } else if (toolChoice == '3') { // third tool
  
    strokeWeight(20);
    stroke(94, 196, 69);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '4') {
    strokeWeight(5);
    stroke(94+(random(1, 40)), 196+(random(1, 40)), 69+(random(1, 40)));
      line(mouseX, mouseY, mouseX, mouseY - random(20, 50));
    
  } else if (key == '5') { // this tool calls a function
    
    image(water, mouseX-100, mouseY-100, 200, 200);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    strokeWeight(10);
    stroke(161, 247, 255);
    line(mouseX, mouseY, pmouseX, pmouseY)
    
  } else if (toolChoice == '7') {

    image(food, mouseX-100, mouseY-100, 100, 100);
    
  } else if (toolChoice == '8') {

    strokeWeight(5);
    stroke(255-(random(1, 40)), 227-(random(1, 40)), 105-(random(1, 40)));
      line(mouseX, mouseY, mouseX, mouseY - random(20, 50));
    
  } else if (toolChoice == '9') {

    image(bun, mouseX-100, mouseY-100, 200, 200);
    
  } else if (toolChoice == '0') {
    
    image(bun2, mouseX-100, mouseY-100, 200, 200);
    
  }
 }
 

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(100, 48, 36); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
