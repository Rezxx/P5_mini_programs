function Ship(){
  this.x = width/2;
  this.y = height - 20;
  this.radius = 20;
  this.x_ = 0;
  this.y_ = 0;
  
  this.setDir = function(x_, y_){
    this.x_ = x_;
    this.y_ = y_;
  }
  
  this.getx_ = function(){
    return this.x_;
  }
  this.gety_ = function(){
    return this.y_;
  }
  
  this.show = function(){
    this.move(this.x_, this.y_);
    fill(255);
    rectMode(CENTER);
    ellipse(this.x, this.y, this.radius);
  }
  
  this.move = function(x_, y_){
    this.x += x_*5;
    this.y += y_*5;
  }
  
  this.die = function(){
    alert("You Just Died !");
  }
}