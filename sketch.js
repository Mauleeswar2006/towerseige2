const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(200,300,300,10);
  stand2 = new Stand(700,300,300,10);

  //level one
 
  block1 = new Block(100,275,30,40);
  block2 = new Block(130,275,30,40);
  block3 = new Block(160,275,30,40);
  block4 = new Block(190,275,30,40);
  block5 = new Block(220,275,30,40);
  block6 = new Block(250,275,30,40);
  block7 = new Block(280,275,30,40);

  //level two
  block8 = new Block(130,240,30,40);
  block9 = new Block(160,240,30,40);
  block10 = new Block(190,240,30,40);
  block11 = new Block(220,240,30,40);
  block12 = new Block(250,240,30,40);

  //level three
  block13 = new Block(160,210,30,40);
  block14 = new Block(190,210,30,40);
  block15 = new Block(220,210,30,40);
  //top
  block16 = new Block(190,180,30,40);
  

 // stand2 bottom
 block17 = new Block(610,275,30,40);
 block18 = new Block(640,275,30,40);
 block19 = new Block(670,275,30,40);
 block20 = new Block(700,275,30,40);
 block21 = new Block(730,275,30,40);
 block22 = new Block(760,275,30,40);
 block23 = new Block(790,275,30,40);
 
 // stand2 upperbottom
 block24 = new Block(640,240,30,40);
 block25 = new Block(670,240,30,40);
 block26 = new Block(700,240,30,40);
 block27 = new Block(730,240,30,40);
 block28 = new Block(760,240,30,40);
 
 // stand2 bottom up
 block29 = new Block(670,210,30,40);
 block30 = new Block(700,210,30,40);
 block31 = new Block(730,210,30,40);
 //block32 = new Block(750,125,30,40);
// stand 2 uppest one
block32 = new Block(700,180,30,40);
/*
// Boundary 1 
block   = new Block(270,275,30,40);
block33 = new Block(270,235,30,40);
block34 = new Block(270,195,30,40);
block35 = new Block(270,155,30,40);
block36 = new Block(270,125,30,40);

// boundary 2 
/*
block37 = new Block(510,275,30,40);
block38 = new Block(510,235,30,40);
block39 = new Block(510,195,30,40);
block40 = new Block(510,155,30,40);
block41 = new Block(510,125,30,40);
block44 = new Ground(510,155,50,10);
*/

// 1st stand 
stand10 = new Ground(270,195,50,10);

polygon = Bodies.circle(450,50,20);
World.add(world,polygon);

sling = new SlingShot(polygon,{x:450,y:50});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  
  stand1.display();
  
  stand2.display();
 // stand3.display();
  /*
  block.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  */
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  
  //stand2 bottom
  fill("skyblue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  
  fill("pink")
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  
  fill("turquoise");
  block29.display();
  block30.display();
  block31.display();

  fill("grey");
  block32.display();  
  
  sling.display();

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);


}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}
