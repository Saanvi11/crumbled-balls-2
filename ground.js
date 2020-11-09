class Ground{
    //properties
    constructor(x,y,width,height){
       //JASON format of storing data in Javascript
        var options = {
            //boolean datatype
            //ground will be static
            isStatic : true
        } 

        this.body = Bodies.rectangle(x,y, 1300, 20, options);
        World.add(world, this.body);
    }

    //funcitons
    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, 1300, 20);
    }
};