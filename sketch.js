function setup() {
  createCanvas(400, 400, WEBGL);

  describe("A purple cube wireframe spinning on a black canvas.");
}

function draw() {
  background("#222222");

  //  style the box.
  noFill();
  stroke(100, 100, 240);

  // Rotate the coordinate.
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Draw rge box.
  box(45);
}
