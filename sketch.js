var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Box1,Bottomsprite;
var Box2,Leftsprite;
var Box3,Rightsprite

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 Box1 = Bodies.rectangle(400,650,200,20,{isStatic:true});
	 World.add(world,Box1);

	 Box2 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	 World.add(world,Box2);

	 Box3 = Bodies.rectangle(500,610,20,100,{isStatic:true});
	 World.add(world,Box3);

	 Bottomsprite=createSprite(400,650,200,20);
	 Bottomsprite.shapeColor=color(0,0,155)

	 Leftsprite=createSprite(300,610,20,100);
     Leftsprite.shapeColor=color(0,0,155)

	 Rightsprite=createSprite(500,610,20,100);
	 Rightsprite.shapeColor=color(0,0,155)

     

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  fill(255,0,0);
  rect(Box1.position.x,Box1.position.y,200,20);
  rect(Box2.position.x,Box2.position.y,20,100);
  rect(Box3.position.x,Box3.position.y,20,100);

 //packageSprite.bounce(Box1);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }