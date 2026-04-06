let c1,c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color(112, 191, 255);
  c2 = color(33, 93, 222);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}
function draw() {
if (mouseIsPressed) {
fill(255);
} else {
noFill();
}
noStroke();
ellipse(mouseX, mouseY, 80);
}
