//Creating variables.
var bullet, speed, weight;
var wall, thickness;

function setup() 
{
  //Creating canvas.
  createCanvas(1600,400);

  //Creating random speed, weight nad thickness.
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  //Creating bullet and wall and assigning a speed for bullet and thickness for the wall.
  bullet = createSprite(0,200,15,5);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);

}

function draw() 
{
  background(0);  

  //Detecting bullet shot and helping to get an approximate strength of the wall by assigning it some colours.
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    
    //Damage formula. 
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if(damage < 10)
    {
      wall.shapeColor = "green";
    }

    if(damage > 10)
    {
      wall.shapeColor = "red";
    }

  }
 
  
  drawSprites();
}

//Helps to detect the collision between the bullet and the wall.
function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  } else
  {
    return false;
  }
}
