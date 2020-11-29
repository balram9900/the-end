
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  bgIMG = loadImage("track.jpg")
 dustbinIMG = loadImage("dustbingreen.png")
 carIMG = loadImage("car3.png")
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-30);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  fill("green")
road1 = createSprite (0,200,500,1000)
  road2 = createSprite (700,200,300,1000)
  test = createSprite (140,240,30,30)
 test.addImage(dustbinIMG)
 
  car1 = createSprite (400,400,30,30)
  car1.addImage(carIMG)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgIMG);
  
road1.shapeColor = "green";
  test.scale =0.2;
    road1.visible = false;
    road2.visible = false;
    image (bgIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
fill ("red")
  //car1.display();
  fill ("green")
  //groundd.display();
  drawSprites();
 
}



function keyPressed() {
  if (keyCode === UP_ARROW) {
  car1.y = car1.y-10
  camera.position.y = car1.y
     
   }
   if (keyCode === DOWN_ARROW) {
    car1.y = car1.y+10
    camera.position.y = car1.y
   }
 }
 