var a,b,c;

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 50);
  b=createSprite(100,200,50,50);
  c=createSprite(50,150,50,50);
  c.shapeColor="yellow";
  a.shapeColor="green";
  b.shapeColor="green";
  b.velocityX=2;
  c.velocityX=4;
}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;

  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 &&
  a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }
 if(c.x-b.x<c.width/2+b.width/2 && b.x-c.x<c.width/2+b.width/2 ){
c.velocityX=c.velocityX*-5;
b.velocityX=b.velocityX*-5;

 }
 if(c.y-b.y<c.height/2+b.height/2 && b.y-c.y<c.height/2+b.height/2){
c.velocityY=c.velocityY*-5;
b.velocityY=b.velocityY*-5;
 }

  drawSprites();
}