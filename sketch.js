var fixedRect, movingRect, tringal, hexagon;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  tringal = createSprite(1000, 400, 60, 40);
  tringal.shapeColor = "yellow";
  tringal.velocityX = -6;
  hexagon = createSprite(100, 400, 50, 90);
  hexagon.shapeColor = "orange";
  hexagon.velocityX = +6;
}

function draw() {
  background(0,0,0);  
   bounceOff(movingRect,fixedRect);
   bounceOff(tringal,hexagon);

  
  drawSprites();
}


