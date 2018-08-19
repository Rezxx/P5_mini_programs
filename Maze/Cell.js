function Cell(i, j){
  this.i = i;
  this.j = j;
  this.wall = [true, true, true, true];
  this.visited = false;

  this.checkNeighbours = function(){
     var neighbours = [];

     var top = grid[index(i, j-1)];
     var right = grid[index(i+1, j)];
     var bottom = grid[index(i, j+1)];
     var left = grid[index(i-1, j)];
     if(top && !top.visited){
       neighbours.push(top);
     }
     if(right && !right.visited){
       neighbours.push(right);
     }
     if(bottom && !bottom.visited){
       neighbours.push(bottom);
     }
     if(left && !left.visited){
       neighbours.push(left);
     }

     if(neighbours.length > 0){
       var r =  floor(random(0, neighbours.length));
         return neighbours[r];
    }else{
        return undefined;
    }
  }

  this.show = function(){
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    noFill();
    if(this.wall[0]){
      line(x, y, x+w, y);
    }
    if(this.wall[1]){
      line(x+w, y, x+w, y+w);
    }
    if(this.wall[2]){
      line(x+w, y+w, x, y+w);
    }
    if(this.wall[3]){
      line(x, y+w, x, y)
    }
  }
}
