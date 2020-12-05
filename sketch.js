let ball;
let board;
let boxes = [];
let BOX_WIDTH = 50;
let BOX_HEIGHT = 20;
let X_SPACE = 10;
let Y_SPACE = 20;
let slider;
let goOn = false;
let firstRun = true;

function setup() {
  createCanvas(860, 500);
  ball = new Ball();
  board = new Board();

  let colors = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255), color(255, 255, 0), color(255, 0, 255), color(0, 255, 255)]
  for (let y = 0; y < colors.length; y++) {
    for (let x = 0; x < 10; x++) {
      boxes.push(new Box(160 + x * (BOX_WIDTH + X_SPACE), 100 + y * (BOX_HEIGHT + Y_SPACE), colors[y]));
    }
  }

  slider = createSlider(1, 10, 1);
}

function keyPressed() {
  if (key == " ") {
    goOn = !goOn;
  }
}

function draw() {
  // if (ball.xSpeed > 0) {
  //   ball.xSpeed = slider.value();
  //   ball.ySpeed = -slider.value();
  // } else if (ball.xSpeed < 0) {
  //   ball.xSpeed = -slider.value();
  //   ball.ySpeed = slider.value();
  // }

  if (goOn || firstRun) {
    background(0);

    ball.update();
    ball.show();

    if (!firstRun) {
      board.update();
    }
    board.show();

    for (let box of boxes) {
      box.collCheck();
      box.show();
    }

    if (ball.y > board.y) {
      background(255, 0, 0);
      noStroke();
      fill(0);
      textSize(72);
      textAlign(CENTER);
      text('Game Over!!!', width / 2, height / 2);
      noLoop();
    }

    firstRun = false;
  }
}