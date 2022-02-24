
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let   world;
let   engine;
let   ball; 
let  chao;
function setup() {
 createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
ball_options = {
 restitution:0.95,
frictionAir:0.01,
  }
chao_options={
isStatic:true


}

ball= Bodies.circle (200,10,20,ball_options);
World.add(world,ball);
chao=Bodies.rectangle(0,380,400,10,chao_options);
World.add(world,chao);

ellipseMode(RADIUS);
}

function draw() 
{background("red");
Engine.update(engine) 
ellipse(ball.position.x,ball.position.y,20);
rect(chao.position.x,chao.position.y,400,10);
}

