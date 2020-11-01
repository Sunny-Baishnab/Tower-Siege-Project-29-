class Pentagon{
    constructor(x, y){
      var options={
        isStatic:false,
        restitution:1
      }
      this.body=Bodies.circle(x,y,50,options);
      this.radius=50;
      this.image=loadImage("1024px-Full_pentagon.svg.png");
      World.add(world,this.body);
    }
    display(){
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          fill(255,192,203);
          image(this.image,0,0,50,50);
          pop();
    }
  };