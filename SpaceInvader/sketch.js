var ship;
var enemies = [];
var n_enemy = 5;
var bullets = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  var interval = width/ (n_enemy+1);
  for(var i = 0; i < n_enemy; i++){
    enemies.push(new Enemy(interval*(i+1), 50));
  }
}

function draw() {
  background(50);
  ship.show();
  for(enemy of enemies){
    enemy.show();
  }
  
  for(var i = 0; i < bullets.length; i++){
    var bullet = bullets[i];
    bullet.show();
    for(var j = 0; j < enemies.length; j++){
      var enemy = enemies[j];
      if(intersect(bullet, enemy)){
        bullets.splice(i--, 1);
        enemies.splice(j--, 1);
      }
    }
  }
  
}

function intersect(a, b){
  return dist(a.x, a.y, b.x, b.y) < b.radius;
}

function keyReleased() {
  if (keyCode == LEFT_ARROW || keyCode == RIGHT_ARROW) {
    ship.setDir(0, ship.gety_());
  }else if(keyCode == UP_ARROW || keyCode == DOWN_ARROW){
     ship.setDir(ship.getx_(), 0);
  }
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    ship.setDir(-1, ship.gety_());
  }else if(keyCode == RIGHT_ARROW){
    ship.setDir(1, ship.gety_());
  }else if(keyCode == UP_ARROW){
    ship.setDir(ship.getx_(), -1);
  }else if(keyCode == DOWN_ARROW){
    ship.setDir(ship.getx_(), 1);
  }else if(key == " "){
    bullets.push(new Bullet(ship.x, ship.y - 20, -10));
  }
}