class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 4
        }
        
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    
    
    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            
            
            strokeWeight(3)
            stroke("turquoise")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
           
           
            
            
        }
    }
    
}