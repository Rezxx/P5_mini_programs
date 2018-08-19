var s;
var scl = 20;
var food;
var start = false;
var highest = 0;;
var score;

function setup() {
  createCanvas(600,600);
}

function draw() {
  if(start == false){
    background(255);
    textSize(22);
    if(score != null){
      fill(255, 0, 50);
      text('Your Score: ' + score, 60, 60);
      text('Highest Score: ' + highest, 60, 100);
    }
    fill(0, 102, 200);
    text('Press ENTER to play the Snake Game!', 30, 150);
  }else{
    background(50);
    s.update();
    s.show();
    food.show();
    if(s.eat(food)){
      food = new Food(scl);
    }else{
      if(s.die()){
        if(s.score > highest){
          highest = s.score;
        }
        score = s.score;
        start = false;
      }
    }
    fill(200, 102, 200, 100);
    text('Score: ' + s.score, 250, 50);
  }
}

function startGame(){
  s = new Snake(scl);
  food = new Food(scl);
  frameRate(10);
  score = 0;
  start = true;
}

function keyPressed(){
  if(start == false){
    if(keyCode == ENTER){
      startGame();
    }
  }else{
    if(keyCode == UP_ARROW){
      s.dir(0,-1);
    }else if(keyCode == DOWN_ARROW){
      s.dir(0,1);
    }else if(keyCode == LEFT_ARROW){
      s.dir(-1,0);
    }else if(keyCode == RIGHT_ARROW){
      s.dir(1,0);
    }
  }
}
