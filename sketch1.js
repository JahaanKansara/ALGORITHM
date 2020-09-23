var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 100, 30, 80);
  movingRect = createSprite(400, 600, 80, 30);

  fixedRect.velocityY = 3;
  movingRect.velocityY = -3;
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255); 
  console.log(fixedRect.x - movingRect.x)
  
 
  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){
        fixedRect.velocityX = fixedRect.velocityX * -1;
        movingRect.velocityX = movingRect.velocityX * -1;
    }




    if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
        fixedRect.velocityY = fixedRect.velocityY * -1;
        movingRect.velocityY = movingRect.velocityY * -1;
  }
 

  drawSprites();
}