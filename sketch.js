
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  
}


function draw() {
  background("pink");
  
  
 

}



