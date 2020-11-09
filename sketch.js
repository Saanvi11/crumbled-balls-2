
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground, bottomBox, rightBox, leftbox;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650, 800, 1300, 20);
	//Create the Bodies Here.
	paperBall = new Paper(200, 100, 40);
	bottomBox = new Bin(1000, 20, 200, 20);
	rightBox = new Bin(990, 20, 20, 150);
	leftBox = new Bin(1010, 20, 20, 150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	paperBall.display();
	bottomBox.display();
	ground.display();
	rightBox.display();
	leftBox.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:85});
	}
}



