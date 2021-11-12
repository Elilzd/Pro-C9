function setup() {
  createCanvas(1200,600);
  background(51);
  box = createSprite(550,250,30,30);
}

function draw() {

  // escribir el código para cambiar el color del fondo, rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha) 
  if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  

  if (keyIsDown(LEFT_ARROW)) {
    background("blue");
    box.positionX
    
  }

 
    if (keyIsDown(UP_ARROW)) {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) {
    background("green");
  }

  
  drawSprites();
}

