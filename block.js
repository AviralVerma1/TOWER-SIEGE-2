class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      this.Visiblity = this.Visiblity - 0;
      rect(pos.x,pos.y,this.width, this.height);

      if (this.Visiblity < 0 && this.Visiblity > - 1005){
        score++;
      }
    }  
}