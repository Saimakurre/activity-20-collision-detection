var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 400, 50, 80);
 fixedRect.shapeColor = "aqua";

 movingRect = createSprite(200,200,80,30);
 movingRect.shapeColor = "pink";
}

function draw() {
  background("lightgrey"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x< movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y< movingRect.width/2+fixedRect.width/2 
    && fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2 ){
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
  }
  else{
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "aqua";
  }

  drawSprites();
}