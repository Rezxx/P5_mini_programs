var bird;
var pipes = [];
var mic;
var slider;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
  mic = new p5.AudioIn();
  mic.start();
  slider = createSlider(0, 1, 0.2, 0.01);
}

function draw() {
  background(0);
  
  var vol = mic.getLevel();
  
  if(frameCount % 200 == 0){
    pipes.push(new Pipe());
  }
  for(var i = 0; i < pipes.length; i++){
    var pipe = pipes[i];
    
    if(pipe.hits(bird)){
      console.log("hit!");
    }
    if(pipe.x <= -pipe.w){
      pipes.splice(i, 1);
      continue;
    }
    pipe.update();
    pipe.show();
  }
  
  bird.update();
  bird.show();
  
  //console.log(vol);
  var threshould = slider.value();
  var ty = map(threshould, 0, 1, height, 0);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(width - 50, ty, width, ty);
  if(vol > threshould){
    bird.up();
  }
  noStroke();
  fill(0, 255, 0);
  var y = map(vol, 0 ,1, height, 0);
  rect(width - 50, y, 50, height - y);
}

function keyPressed(){
  if(key == ' '){
    bird.up();
  }
}