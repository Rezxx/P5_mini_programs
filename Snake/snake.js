function Snake(scl) {
  var cols = floor(width / scl);
  var raws = floor(height / scl);
  this.x = floor(random(5, cols - 5)) * scl;
  this.y = floor(random(5, raws - 5)) * scl;
  this.xspeed = 1;
  this.yspeed = 0;
  this.score = 0;
  this.trace = [createVector(this.x, this.y)];

  this.eat = function(food) {
    if (dist(this.x, this.y, food.x, food.y) < 1) {
      this.score++;
      this.trace.splice(0, 0, createVector(food.x, food.y));
      return true;
    }
    return false;
  }

  this.die = function() {
    for (var i = 0; i < this.trace.length - 1; i++) {
      if (dist(this.trace[i].x, this.trace[i].y, this.x, this.y) < 1) {
        console.log("YEAH");
        return true;
      }
    }
    if (this.x > width - scl || this.y > height - scl || this.x < 0 || this.y < 0) {
      return true;
    }
    return false;
  }

  this.update = function() {
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
    this.trace.splice(0, 1);
    this.trace.push(createVector(this.x, this.y));
  }

  this.show = function() {
    fill(255);
    for (body of this.trace) {
      rect(body.x, body.y, scl, scl);
    }

  }

  this.dir = function(x, y) {
    if ((this.xspeed == x && this.yspeed == -y) || (this.xspeed == -x && this.yspeed == y)) {
      if (this.score != 0) {
        return;
      }
    }
    this.xspeed = x;
    this.yspeed = y;
  }
}