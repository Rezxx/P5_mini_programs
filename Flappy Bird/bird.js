function Bird(){
  this.x = 10;
  this.y = height/2;
  this.radius = 32;
  
  this.gravity = 0.5;
  this.lift = -10;
  this.velocity = 0;
  
  this.show = function(){
    fill(255);
    ellipse(this.radius, this.y, this.radius, this.radius);
  }
  
  this.up = function(){
    this.velocity += this.lift;
  }
  
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    if(this.y >= height - this.radius){
      this.y = height - this.radius;
      this.velocity = 0;
    }
    if(this.y < this.radius){
      this.y = this.radius;
      this.velocity = 0;
    }
  }
}