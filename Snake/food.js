function Food(scl){
  var cols = floor(width/scl);
  var raws = floor(height/scl);
  this.x = floor(random(0, cols))* scl;
  this.y = floor(random(0, raws)) * scl;
  
  this.show = function(){
    fill(255,50,50);
    rect(this.x, this.y, scl, scl);
  }
}