var bird;
var pipes = [];
var gameOver = false;
var time = 0;
var newTime = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe());
  setInterval(timeDown, 1000);
}

function draw() {
  
  background(0);
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].draw();
    pipes[i].update();
    
    if (pipes[i].hits(bird)) {
      console.log("HIT");
      bird.lives -= 1;
    }
    
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (bird.lives == 0) {
    gameOver = true;
    background(255);
    textSize(50);
    fill(255, 0, 0);
    text('Game over!', 20, 70);
  }
  
  if (gameOver) {
    background(255);
    textSize(50);
    fill(255, 0, 0);
    text('Game over!', 20, 70);
  }

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

  textSize(50);
  text(newTime, width-60, 70);
  
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function mouseClicked() {
  bird.up();
}

function timeDown(){
  time++;
  if (gameOver==false) {
    newTime = time;
  }
}
