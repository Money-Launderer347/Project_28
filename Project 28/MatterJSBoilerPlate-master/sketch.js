
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stoneObj;
var boy;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new stone(235,420,30);

	mango1 = new mango(400,170,30,20);
	mango2 = new mango(425,210,30,20);
    mango3 = new mango(524,156,30,20);
	mango4 = new mango(467,232,30,20);
	mango5 = new mango(476,187,30,20);

	boy = image("images/boy.png");
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectollsion(stoneObj, mango1);
  detectollsion(stoneObj, mango2);
  detectollsion(stoneObj, mango3);
  detectollsion(stoneObj, mango4);
  detectollsion(stoneObj, mango5);

 
}

function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function detectollsion(Lstone, Lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}


