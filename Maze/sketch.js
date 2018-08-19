var cols, rows;
var w = 40;
var grid = [];
var stack = [];

var current;

function setup() {
  createCanvas(1000, 1000);
  cols = floor(width / w);
  rows = floor(height / w);

  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
  frameRate(10);
}

function draw() {
  background(51);
  for(var i = 0; i < grid.length; i++){
    grid[i].show();
  }
  noStroke();
  fill(255, 0, 133, 50);
  rect(current.i*w, current.j*w, w, w);

  current.visited = true;
  var next = current.checkNeighbours();
  if(next){
    next.visited = true;

    stack.push(current);

    removeWalls(current, next);

    current = next;
  }else if (stack.length != 0){
    current = stack.pop();
  }
  fill(255, 0, 133, 100);
  rect(current.i*w, current.j*w, w, w);

}

function index(i, j){
  if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
    return -1;
  }
  return i + j*cols;
}


function removeWalls(a, b){
  var x = a.i - b.i;
  if(x == 1){
    a.wall[3] = false;
    b.wall[1] = false;
  }else if(x == -1){
    a.wall[1] = false;
    b.wall[3] = false;
  }

  var y = a.j - b.j
  if(y == 1){
    a.wall[0] = false;
    b.wall[2] = false;
  }else if(y == -1){
    a.wall[2] = false;
    b.wall[0] = false;
  }

}
