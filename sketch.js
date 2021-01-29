var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4,gameObject5;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject5 = createSprite(700,100,50,50);
  gameObject5.velocityX=-3;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  gameObject3.shapeColor="green";
  gameObject4.shapeColor="green";
  gameObject5.shapeColor="blue";

 if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
 }

  if(isTouching(movingRect,gameObject1)){
   gameObject1.shapeColor="red";
  movingRect.shapeColor="red";
 }
 
 if(isTouching(movingRect,gameObject2)){
  gameObject2.shapeColor="red";
 movingRect.shapeColor="red";
}

 if(isTouching(movingRect,gameObject3)){
  gameObject3.shapeColor="red";
 movingRect.shapeColor="red";
}

 if(isTouching(movingRect,gameObject4)){
  gameObject4.shapeColor="red";
 movingRect.shapeColor="red";
}
 
bounceOff(gameObject1,gameObject5);

  drawSprites();
}

