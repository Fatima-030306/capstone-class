class Boggie{
    constructor(x,y,w,h){
       var options= {
        isStatic = false
    }
    this.Body=body.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    this.image=loadImage(coach.png);
    World.add=(myWorld,this.body);
    Matter.Body.setMass=(this.body,this.body.mass*5)
    }
    show(){
        imageMode=(CENTER);
        image=(this.image,this.body.x,this.body.y,this.w,this.h)
    }
}