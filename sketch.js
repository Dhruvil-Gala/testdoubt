
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var box;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	
	box = new Roof(400,100,600,30);

	bob1 = new Bob(400,500,80);
	bob2 = new Bob(480,500,80);
	bob3 = new Bob(560,500,80);
	bob4 = new Bob(320,500,80);
	bob5 = new Bob(240,500,80);

	chain1 = new Rope(bob1.body,box.body,0,0);
	chain2 = new Rope(bob2.body,box.body,80,0);
	chain3 = new Rope(bob3.body,box.body,160,0);
	chain4 = new Rope(bob4.body,box.body,-80,0);
	chain5 = new Rope(bob5.body,box.body,-160,0);


	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  box.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
       console.log("Force");
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:20,y:-20})
	}
}


