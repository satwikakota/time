function setup() {
  createCanvas(800,400);
  angleMode(DEGREES); 
}

function draw() {
  background(255,255,255);  
  var hr=hour()%12;
  var mn=minute();
  var scc=second();
  translate(200,200);
  rotate(-90);

  var secAngle=map(scc,0,60,0,360);
  push();
  stroke("red");
  strokeWeight(10);
  rotate(secAngle);
  line(0,0,100,0);
  pop();

  var mnAngle=map(mn,0,60,0,360);
  push();
  stroke("green");
  strokeWeight(10);
  rotate(mnAngle);
  line(0,0,75,0);
  pop();

  var hrAngle=map(hr,0,12,0,360);
  push()
  stroke("blue");
  strokeWeight(10);
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  stroke("red");
  noFill();
  arc(0,0,300,300,0,secAngle);

  stroke("green");
  arc(0,0,280,280,0,mnAngle); 

  stroke("blue");
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}