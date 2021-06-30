
var snowflake,snowflakeImg
var backgroundImg
var boy, boyImg

function preload() {
  snowflakeImg = loadImage("snow4.webp");
  backgroundImg = loadImage("snow2.jpg");
  boyImg = loadImage("boy.png")
}

function setup() {
  createCanvas(1400,780);
   boy=createSprite(700,650,50,50);
   boy.addImage(boyImg)
   boy.scale = 0.3
}

function draw() {
  background(backgroundImg); 

  if(keyDown(LEFT_ARROW)){
    boy.x += -5;
  }
   if(keyDown(RIGHT_ARROW)){
    boy.x += 5;
  }

  Snowflake();
  drawSprites();
}

function Snowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,1400), 0, 100, 50);
  snowflake.addImage(snowflakeImg);
  snowflake.velocityY = 5;
  snowflake.scale = 0.2;
  }
}
