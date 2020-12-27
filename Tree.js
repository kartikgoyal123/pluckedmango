class Tree {
    constructor(x,y,width,height) {
     // var options = {
       //   isStatic: true
      //}
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking mangoes/tree.png");
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image, 800, 200, this.width, this.height);
    }
  };