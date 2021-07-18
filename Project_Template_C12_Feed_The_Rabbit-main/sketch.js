var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaves, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.x = garden.width/2;
garden.velocityX = -4;

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX = 4;
rabbit.x = World.mouseX;
}

// creating apples 
function createApple() {
  apple = createSprite(25, 30, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 4;
  apple.lifetime = 70;
}

//creating leaves
function createLeaves() {
  leaves = createSprite(100, 30, 10, 10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.05;
  leaves.velocityY = 4;
  leaves.lifetime = 70;
}

//spawning apples and leaves in random places (per certain frames)
function spawnObstacles() {
  var obstacle = Math.round(random(1,10));
  if(frameCount % 80 === 0) {
    if(obstacle == 1){
      createApple();
    }
    else {
      createLeaves();
    }
  }
}

function draw() {

  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (garden.x < 150) {
    garden.x = garden.width/2;
  }

  drawSprites();

  spawnObstacles();


}