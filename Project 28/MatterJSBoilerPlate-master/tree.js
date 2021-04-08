class tree{
    constructor(x,y,width,height,angle) {
        var options={
            isStatic: true,
            restitution: 0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/tree.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.boyd.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}