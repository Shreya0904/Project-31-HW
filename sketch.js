const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var divisions=[];
var particles=[];
var plinkos=[];
var divisionHeight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(240,780,480,40);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }
    for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }
  
    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

    for (var j = 75; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }
}

function draw() {
  background("blue");  
  drawSprites();
Engine.update(engine);
if(frameCount%60===0){
  particles.push(new Particles(random(width/2-10, width/2+10),10,10));
}

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  ground.display();
  for (var j = 0; j < plinkos.length; j++) {
  plinkos[j].display();
  }

  for (var p = 0; p < particles.length; p++) {
    particles[p].display();
    }
}