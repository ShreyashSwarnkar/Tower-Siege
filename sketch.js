const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
var wire;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  polygon = new Polygon(150,200);
  wire = new Wires(polygon.body,{x:150,y:200});
 
  //level one
  blockf1 = new Block(300,275,30,40);
  blockf2 = new Block(330,275,30,40);
  blockf3 = new Block(360,275,30,40);
  blockf4 = new Block(390,275,30,40);
  blockf5 = new Block(420,275,30,40);
  blockf6 = new Block(450,275,30,40);
  blockf7 = new Block(480,275,30,40);
  //level two
  blockf8 = new Block(330,235,30,40);
  blockf9 = new Block(360,235,30,40);
  blockf10 = new Block(390,235,30,40);
  blockf11 = new Block(420,235,30,40);
  blockf12 = new Block(450,235,30,40);
  //level three
  blockf13 = new Block(360,195,30,40);
  blockf14 = new Block(390,195,30,40);
  blockf15 = new Block(420,195,30,40);
  //top
  blockf16 = new Block(390,155,30,40);

//level one
blocks1 = new Block(635,175,30,40);
blocks2 = new Block(665,175,30,40);
blocks3 = new Block(695,175,30,40);
blocks4 = new Block(725,175,30,40);
blocks5 = new Block(755,175,30,40);
//level two
blocks6 = new Block(665,135,30,40);
blocks7 = new Block(695,135,30,40);
blocks8 = new Block(725,135,30,40);
//top
blocks9 = new Block(695,95,30,40);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  polygon.display();
  wire.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blockf1.display();
  blockf2.display();
  blockf3.display();
  blockf4.display();
  blockf5.display();
  blockf6.display();
  blockf7.display();
  fill("pink");
  blockf8.display();
  blockf9.display();
  blockf10.display();
  blockf11.display();
  blockf12.display();
  fill("turquoise");
  blockf13.display();
  blockf14.display();
  blockf15.display();
  fill("grey");
  blockf16.display();
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink");
  blocks9.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  wire.fly();
}
