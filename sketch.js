const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rstick,cstick,lstick,ground;

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;

  ground = new stick(width/2,550,width,20);

  lstick = new stick(800,415,20,250);
  rstick = new stick(1000,415,20,250);
  cstick = new TrashCan(900,530,220,20);

	ball = new trash(250,400,40);

	Engine.run(engine);
  
}


function draw() 
{
  Engine.update(engine);
  background("blue");

  if(keyDown("up_arrow"))
  {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});
  }

  ellipseMode(CENTER);
  rectMode(CENTER)
  
  ball.display();

  lstick.display();
  rstick.display();
  cstick.display();

  ground.display();

  
}



