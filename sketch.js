
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbinObj, paperObject,groundObject;	
var world, engine;


function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
    paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
  
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





