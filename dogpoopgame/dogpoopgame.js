var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState= "START";

function preload() {
  
  dogbag = loadImage('https://tabby-tammy.github.io/images/dogbag.png')
  dog = loadImage('https://tabby-tammy.github.io/images/dogpoop.png')
  grass = loadImage('https://tabby-tammy.github.io/images/grassbg.jpg')
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  imageMode(CENTER);
  
image(grass, width/2, height/2, width, height);
} // end setup


function draw() {
image(grass, width/2, height/2, width, height);
  if (gameState=="START"){
    levelStart();
  }
  if (gameState=="L1"){
  levelOne();
  }
  if (gameState=="END"){
    levelEnd();
  }
  
  if (gameState!=="START" && gameState!=="END"){
  textSize(20);
  fill(0);
  strokeWeight(0);
  text(("Poop Collected: " + score), width/2, 40);
  }
  
  if (gameState!=="START" && gameState!=="END"){
    image(dogbag, mouseX, mouseY, 64, 64);
}
  

} // end draw

function levelStart(){
  textSize(20);
  fill(0);
  strokeWeight(0);
  text("Press to Play", width/2, height-20);
  textSize(30);
  fill(0);
  strokeWeight(0);
  text("Make sure you don't piss off your neighbors!", width/2, 40);
  text("Collect 20 to Win!", width/2, height/2+50);
  textSize(100);
  text("💩", width/2, height/2+150);
  textSize(70);
  fill(163, 67, 7);
  stroke(115, 37, 6);
  strokeWeight(10);
  text("Scoop the Poop", width/2, height/2);
  if (mouseIsPressed === true) {
  gameState="L1"; 
  }
}

function levelOne(){
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width-300);
    bally= random(height-300);
    score= score +1;
  }
  if(score>=20){
// call level 2
 // fill(random(255));
 gameState= "END";
  }
  
  line(ballx, bally, mouseX, mouseY);
  image(dog, ballx, bally, ballSize, ballSize);
  
} // end level one

function levelEnd(){
    textSize(30);
  fill(0);
  strokeWeight(0);
  text("Your neighbors aren't mad at you!", width/2, height/2-10);
  text("Great job!", width/2, height/2+20);
    textSize(100);
  text("💩", width/2, height/2+150);
  text("❌", width/2, height/2+160);
    textSize(20);
  fill(0);
  strokeWeight(0);
  text("Press to Restart", width/2, height-20);

if (mouseIsPressed === true) {
  score = 0;
  ballx = 300;
  bally = 300;
  gameState="L1"; 
  }
}

// chatpgt used to assist with helping with debugging
