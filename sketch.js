var allMyCereals = []; //array
var cerealsNumber = 40;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  //create cereals
  for (var i = 0; i < cerealsNumber; i++) {
    //create instance
    var tempX = random(windowWidth - windowWidth / 4, windowWidth / 4);
    var tempY = random(windowHeight - windowHeight / 4, windowHeight / 4);
    var tempR = 50;

    var tempCereal = new Cereal(tempX, tempY, tempR);

    allMyCereals.push(tempCereal);
  }

}

function draw() {
  background('coral');

  var xBowl = windowWidth / 2;
  var yBowl = windowHeight / 2;

  if (windowWidth > windowHeight) {
    var diBowl = windowHeight;
  } else if (windowWidth < windowHeight) {
    var diBowl = windowWidth;
  }

  //milk bowl
  fill('slateblue');
  ellipse(xBowl, yBowl, diBowl);
  fill(255);
  ellipse(xBowl, yBowl, diBowl - diBowl / 15);
  push()
  fill(0);
  textSize(20);
  text('Click on the cereals to eat them',
    10, 40)
  pop();

  // spoon
  push()
  fill(80);
  ellipse(mouseX, mouseY, 100, 70);
  rect(mouseX, mouseY - 20, 200, 30);
  fill(120);
  ellipse(mouseX, mouseY, 80, 50);
  pop();

  // draw cereals
  for (var i = 0; i < allMyCereals.length; i++) {
    var tempCereal = allMyCereals[i];
    tempCereal.move();
    tempCereal.display();
  }

}
// eat cereals on click
function mouseClicked() {
  for (var i = 0; i < allMyCereals.length; i++) {
    allMyCereals[i].click();
  }
}

function Cereal(_x, _y, _diameter) {
  //inner properties
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  //this.speed = 3;
  this.color = 'gold';

  var xDirection = 1;
  var yDirection = 1;

  // eat the ceareal
  this.click = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.size) {
      this.size = 0;
    }
  }

  // floating cereals
  this.move = function() {
    // this.x += xDirection * this.speed;
    // this.y += yDirection * this.speed;
    // // vertical bouncing
    // if (this.y > windowHeight  || this.y < 0) {
    //   yDirection = -yDirection
    // }
    // // orizontal bouncing
    // if (this.x > windowWidth  || this.x < 0) {
    //   xDirection = -xDirection
    // }
    push()
    frameRate(15);
    this.x = this.x + random(-20, 20);
    this.y = this.y + random(-20, 20);
    pop()
  }

  //display method
  this.display = function() {
    fill(this.color);

    //cereal
    push()
    stroke(color(this.color));
    strokeWeight(this.size / 3);
    noFill();
    ellipse(this.x, this.y, this.size);
    pop();

  }
}
