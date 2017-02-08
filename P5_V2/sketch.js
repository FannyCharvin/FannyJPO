
var osc;
var mic;
var processingCode = "...";
var jsCode = Processing.compile(processingCode).sourceCode;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(440);
  osc.amp(0);
  osc.start();
  delay = new p5.Delay();
  delay.process(osc, .52, 0.2, 2300);
  mic = new p5.AudioIn()
  mic.start();

}


function draw() {
  micLevel = mic.getLevel();
  var test = constrain(height-micLevel*height*1, 0, height);
  var ra = random(0,200);
  var size = map(ra,0, windowWidth, 0,555 );
  background(233);
  push();
  translate(96, 55);
  pop();
  polygon(250,250,test/5,3);
  osc.freq(mouseX+200)
  if(mouseY>test/2){
    circle(250,250,ra/3);
    circle(250,250,test/2);
    circle(250,250,ra/7);
  }
}


function mousePressed(){
  osc.amp(0.5);
}

function mouseReleased(){
  osc.amp(0);
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

 function circle(x,y,diameter){
   stroke(128,180,160);
   strokeWeight(1);
   noFill();
   ellipse(x,y,diameter, diameter);
 }
