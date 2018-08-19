function Bullet(x, y, y_){
  this.x = x;
  this.y = y;
  this.y_ = y_
  
  this.show = function(){
    this.update();
    noStroke();
    fill(0, 200, 255);
    ellipse(this.x, this.y, 5, 15);
  }
  
  this.update = function(){
    this.y += this.y_;
  }
  
}