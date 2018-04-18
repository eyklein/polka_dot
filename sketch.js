function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  background(0)
}

function draw() {
  background(0,.02)
  fill(random(360),255,255);
  ellipse(random(width),random(height),20,20);
}

