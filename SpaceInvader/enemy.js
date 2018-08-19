function Enemy(x, y){
  this.x = x;
  this.y = y;
  this.x_ = 2;
  this.y_ = 1;
  this.radius = 20;
  this.bullets = [];
  this.lastBullet = new Date().getTime();
  
  this.show = function(){
    this.move();
    this.shoot();
    fill(255, 200,10);
    ellipse(this.x, this.y, this.radius);
    for(var i = 0; i < this.bullets.length; i++){
      var bullet = this.bullets[i];
      bullet.show();
      if(intersect(bullet, ship)){
        this.bullets.splice(i--, 1);
        ship.die();
      }
    }
  }
  
  this.move = function(){
    if(this.x >= width || this.x <= 0){
      this.x_ = - this.x_;
    }
    this.x += this.x_;
    this.y += this.y_;
  }
  
  this.shoot = function(){
    var currentTime = new Date();
    if((currentTime.getTime() - this.lastBullet) > 350){
      this.bullets.push(new Bullet(this.x, this.y, 5));
      this.lastBullet = currentTime.getTime();
    }
  }
}