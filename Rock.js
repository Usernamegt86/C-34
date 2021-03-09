class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}

      this.image=loadImage("images/rock1.png")
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  