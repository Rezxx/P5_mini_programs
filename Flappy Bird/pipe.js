function Pipe(){
  var spacing = random(100, height / 2);
  var center = random(spacing/2 + 20, height - spacing/2 - 20);
  this.top = center - spacing/2;
  this.bottom = height - spacing/2 - center;
  this.w = random(20, 40);
  this.x = width;
  this.speed = 1;
  this.highlight = false;
  
  this.show = function(){
    fill(255);
    if(this.highlight){
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom , this.w, this.bottom);
  }
  
  this.update = function(){
    this.x -= this.speed;
  }
  
  this.hits = function(bird){
    if((bird.y - bird.radius < this.top || bird.y + bird.radius > height - this.bottom)&&(bird.x + bird.radius > this.x && bird.x - bird.radius < this.x + this.w)){
      this.highlight = true;
      return true;
    }else{
      this.highlight = false;
    }
  }
}