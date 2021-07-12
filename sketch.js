
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;



function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	roof=new Roof(500,100,600,20)
	
	//create the bobs here
	
	
	
	
	
	
	
	

	

	Engine.run(engine);
  
}


function draw() {
  background("pink");
  roof.display();
	
	
	
	
	
	

  
 

}



