class TrashCan{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(world,this.body);
    }

    display()
    {
        push();
        imageMode(CENTER);
        image(this.image, 900, 415, this.width, 250);
        pop();
    }
}