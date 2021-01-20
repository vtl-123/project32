class Box {
  constructor(x, y, width, height){
    var options = {
      //isStatic: true,
      restitution : 0.4,
      friction:0.4
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  this.Visiblity = 225;
  World.add(world, this.body);
}
  display(){
    if (this.body.speed < 3){
      var pos = this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("green")
      strokeWeight(2)
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }

    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      pop();  
    }
  }
  score() {
    if (this.Visiblity < 0 && this.Visiblity > -105) {
      score += 100;
    }
  }
}