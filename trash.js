class trash{
  constructor(x,y,r)
  {
     var options={
          restitution:0.3,
          friction:0.5,
          density:1.2,
     }
     this.x = x;
     this.y = y;
     this.r = r;
     this.body = Bodies.circle(this.x,this.y,this.r,options);
     this.image = loadImage("crumpled ball.png");
     World.add(world,this.body);
  }

  display()
  { 
    var angle = this.body.angle;
    var trashPos = this.body.position
    push();
    translate(trashPos.x, trashPos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
  }

}