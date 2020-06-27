const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ball;
var bin1,bin2,bin3;
var ground;


function setup() {
	createCanvas(2000, 800);


	engine = Engine.create();
	world = engine.world;

	
	

	ball = new Ball(100,100);
	bin1 = new Dustbin(1960,630,20,250);
	bin2 = new Dustbin(1640,630,20,250);
	bin3 = new Dustbin(1800,730,300,20)
  ground = new Ground(width/2,750,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:73,y:-73});
  }
}



