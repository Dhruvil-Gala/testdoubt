class Bob {
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restiution:0.3,
        friction:0.0,
        density:0.8
    }
    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius = radius/2;
    
    //World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);
    fill(210,105,30);
    ellipse(0, 0, this.radius, this.radius);
    pop()
  }
};