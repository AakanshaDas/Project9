
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  if(keyIsDown(DOWN_ARROW))
  {
    background('red');

  }
  if(KeyIsDown(LEFT_ARROW))
  {
    background('pink');

  }
  if(KeyIsDown(RIGHT_ARROW))
  {
    background('blue');

  }
  if(KeyIsDown(UP_ARROW))
  {
    background('green');
    
  }
background(30);
  drawSprites();

}




