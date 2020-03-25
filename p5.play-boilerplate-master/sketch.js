
var sun,mars,mercury,venus,jupiter,saturn,uranus,neptune,pluto;

function setup() {
  createCanvas(1400,1400);
  //sun
  sun=createSprite(600,250,200,200)
  sun.shapeColor="yellow";
  
  //planets
  mars=createSprite(400,290,20,20);
  mars.shapeColor="red";
  venus=createSprite(500,290,20,20);
  venus.shapeColor="orange";
  //mercury=createSprite(200,200,20,20);
  //mercury.shapeColor="darkorange";
  jupiter=createSprite(400,450,30,30);
  jupiter.shapeColor="brown";
  uranus=createSprite(700,400,20,20);
  uranus.shapeColor="green";
  saturn=createSprite(800,350,20,20);
  saturn.shapeColor="purple";
  neptune=createSprite(900,100,20,20);
  neptune.shapeColor="aqua";

  //pluto
  pluto=createSprite(600,100,10,10);
  pluto.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  
if(mousePressedOver(sun)){
sun.height=sun.height+10;
sun.width=sun.width+10;
}
sun.collide(pluto);
sun.collide(jupiter);
sun.collide(saturn);
sun.collide(uranus);
sun.collide(neptune);

//sun.collide(mercury);
sun.collide(venus);
sun.collide(mars);
 
if (sun.collide(pluto)) {
   pluto.destroy();
 }
 if (sun.collide(neptune)) {
  neptune.destroy();
}
if (sun.collide(saturn)) {
  saturn.destroy();
}
if (sun.collide(jupiter)) {
  jupiter.destroy();
}
//if (sun.collide(mercury)) {
 // mercury.destroy();
//}
if (sun.collide(venus)) {
  venus.destroy();
}
if (sun.collide(mars)) {
  mars.destroy();
}

if (sun.collide(uranus)) {
  uranus.destroy();
}

text("tap on the sun and destroy the planets" ,200,50);
drawSprites();

}