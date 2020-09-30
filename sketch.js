var car,wall;
var speed, weight;
var cardeform;

function setup() {
  createCanvas(900,400);
  speed = random(55,90);
  weight = random(400,900);
  car = createSprite(50, 200, 40, 40);
  car.shapeColor="blue";

  wall = createSprite(800,200,40,200);
  wall.shapeColor="blue";
}
function draw() {
  background("black");

  car.velocityX=speed;
  
  if(car.x-wall.x < wall.width/2+car.width/2
    &&wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    car.x = wall.x-25;
    car.y= wall.y;
    cardeform = 0.5 * weight * speed * speed / 22500 ;
    if(cardeform<100){
      car.shapeColor="green";
      wall.shepeColor="green";
      textSize(20);
      fill("green");
     
    }
    else if(cardeform>100 && cardeform<180){
      car.shapeColor="yellow";
      wall.shepeColor="yellow";
    
    }
    else if(cardeform>180){
       car.shapeColor = "red";
       textSize(20);
       fill("red");
       
    }
    console.log(cardeform);  
    
    fill("red");
   
    fill("blue");
   
    fill("pink");
    
  }

  drawSprites();
}