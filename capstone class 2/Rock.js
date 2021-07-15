class Rock{
    constructor(x,y,w,h){
        var options= {
         isStatic = false
     }
     this.Body=body.rectangle(x,y,w,h,options);
     this.w=w;
     this.h=h;
     this.image=loadImage(rock.png);
     World.add=(myWorld,this.body);
     
     }
     show(){
         var pos = this.body.position
         imageMode=(CENTER);
         fill ('black');
         stroke ("grey");
         image=(this.image,pos.x,pos.y,this.w,this.h)
     } 
    }