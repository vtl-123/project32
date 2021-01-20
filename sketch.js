const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img, backgroundImg;
var score=0;
var bg = "images/bg1.png";
function preload(){
  getBackgroundImage();
  polygonImage=loadImage("images/polygon_2.0.png");
  
}
function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
    stand1 = new Ground(500, 550, 250, 20);
    groundObject = new Ground(500, 600, 1000, 20);
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    slingshotObject = new Slingshot(this.polygon, {x:250, y:300});

    //fourth row
    box1 = new Box(410, 520, 30, 40);
    box2 = new Box(440, 520, 30, 40);
    box3 = new Box(470, 520, 30, 40);
    box4 = new Box(500, 520, 30, 40);
    box5 = new Box(530, 520, 30, 40);
    box6 = new Box(560, 520, 30, 40);
    box7 = new Box(590, 520, 30, 40);

    //third row

    box8 = new Box(440, 480, 30, 40);
    box9 = new Box(470, 480, 30, 40);
    box10 = new Box(500, 480, 30, 40);
    box11 = new Box(530, 480, 30, 40);
    box12 = new Box(560, 480, 30, 40);

    //second row
    box13 = new Box(470, 440, 30, 40);
    box14 = new Box(500, 440, 30, 40);
    box15 = new Box(530, 440, 30, 40);

    //first row
    box16 = new Box(500, 400, 30, 40);

    Engine.run(engine);
}

function draw() {
  //background(56,44,44); 
  if(backgroundImg)
    background(backgroundImg);
  //Engine.update(engine);
    
    stand1.display();
    groundObject.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    slingshotObject.display();
    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y);
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    fill("white");
    textSize(20);
    text("Score: " + score, 500, 20);
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshotObject.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshotObject.attach(this.polygon);
  }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "images/bg1.png";
    }
    else{
        bg = "images/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}