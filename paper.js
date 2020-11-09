class Paper{
    constructor(x, y, r){
        //JSON Format 
        var options = {
           // 'key': value,
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        } 

        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }

    display(){

        push();

        translate(this.body.position.x, this.body.position.y);

        rotate(this.body.angle);

        fill("pink");
        ellipse(this.body.position.x, this.body.position.y, 40, 40);

        pop();

    }

     
}