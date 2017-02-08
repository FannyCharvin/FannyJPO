

function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
}

function draw(){
  polygon(250,250,20,3);

}


function polygon(x, y, radius, npoints) {
   var angle = TWO_PI / npoints;
   beginShape();
   fill(0,46,56);
   for (var a = PI/6; a < TWO_PI; a += angle) {
     var sx = x + cos(a) * radius;
     var sy = y + sin(a) * radius;
     vertex(sx, sy);
   }
   endShape(CLOSE);
 }
