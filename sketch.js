//Create variables here

var dog, happyDog, database, foodS, foodStock;
var dogImage;
function preload()
{
  //load images here
  dogImage = loadImage("images/dog.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  dog.addImage(dogImage);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here
  
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  }else{
    x=x+1;
  }
  database.ref('/').update({
    Food:x
  });
}



