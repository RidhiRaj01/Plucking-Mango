
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,boy,stone,mango;

function preload()
{ 
	treeImage=loadImage("tree.png");
	boyImage=loadImage("boy.png");
	stoneImage=loadImage("stone.png");
	mangoImage=loadImage("mango.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    tree = new Tree(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 tree.display();
}



