
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree;
var stone;
var boy;
var m1,m2,m3,m4,m5;
var launcher1;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	var canvas = createCanvas(1000,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree = new Tree(800,200,350,400);
	stone = new Stone(130,230,50,50);
	m1 = new Mango(700,100,50,50);
	m2 = new Mango(800,180,50,50);
	m3 = new Mango(850,120,50,50);
	m4 = new Mango(750,150,50,50);
	m5 = new Mango(900,180,50,50);
	launcher1 = new Launcher(stone.body,{x:130, y:230});

	Engine.run(engine);

	boy = createSprite(200,300,100,200);
	boy.addImage(boyImg);
	boy.scale=0.12;
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display(); 
  ground.display();
  stone.display();
  launcher1.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher1.fly();
}

function detectollision (lstone,lmango) {
   mangobodypostion=lmango.body.postion;
   stonebodypostion=lstone.body.postion;

   var distance=dist(stonebodypostion.x,stonebodypostion.y,mangobodypostion.x,mangobodypostion.y);
   if (distance<=lmango.r+lstone.r) {
       Matter.body.setStatic(lmango.body,false)
   }


}

function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.setPosition(stone.body,{x:130,y:230});
	  launcher1.attach(stone.body)

	}
}




