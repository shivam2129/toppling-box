const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,myworld;
var box1,box2;
var ground;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  box1 = new Box(200,100,50,50);
  box2 = new Box(190,70,60,30);
  box3 = new Box(200,100,50,50);
  box4 = new Box(180,40,60,30);
  ground = new Ground(200,400,400,10)
}

function draw() {
  background(0);  
  Engine.update(myengine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  ground.display();
}