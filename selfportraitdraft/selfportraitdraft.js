function setup() {
createCanvas(600, 600);
background(135, 209, 255)

}


function draw() {
  
  // hood back
  
  noStroke();
fill(107, 56, 224);
quad(280, 550, 280, 480, 150, 400, 190, 550);

noStroke();
fill(107, 56, 224);
quad(130, 550, 120, 490, 170, 400, 200, 550);

// neck
noStroke();
  fill(255, 192, 120);
quad(250, 450, 275, 550, 325, 550, 450, 350);

// back hair
noStroke();
  fill(43, 24, 5);
quad(100, 300, 150, 450, 500, 300, 450, 450);

// head
noStroke();
  fill(255, 192, 120);
ellipse(300, 300, 350, 350);

noStroke();
  fill(255, 192, 120);
ellipse(450, 300, 150, 150);

noStroke();
  fill(255, 192, 120);
ellipse(150, 300, 150, 150);

// hair
noStroke();
  fill(43, 24, 5);
quad(250, 100, 250, 200, 500, 350, 550, 200);

noStroke();
  fill(43, 24, 5);
quad(250, 100, 450, 100, 550, 200, 350, 250);

noStroke();
  fill(43, 24, 5);
quad(250, 100, 250, 200, 100, 400, 150, 200);

// eyes
fill(255);
ellipse(225, 325, 140, 140);

fill(255);
ellipse(385, 325, 140, 140);

fill(0);
arc(225, 325, 140, 140, radians(260), radians(50));

fill(0);
arc(385, 325, 140, 140, radians(260), radians(50));

// glasses
strokeWeight(10);
stroke(107, 56, 224);
noFill();
ellipse(225, 325, 140, 140);

strokeWeight(10);
stroke(107, 56, 224);
noFill();
ellipse(385, 325, 140, 140);

strokeWeight(10);
stroke(107, 56, 224);
noFill();
line(300, 325, 310, 325)

// mouth
stroke(0);
arc(320, 420, 50, 50,  radians(330), radians(130));

// hood front
noStroke();
fill(107, 56, 224);
quad(310, 550, 340, 480, 450, 400, 440, 550);

noStroke();
fill(107, 56, 224);
quad(500, 550, 520, 480, 450, 400, 430, 550);
}
