class Wires{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.Wires = Constraint.create(options);
        World.add(world, this.Wires);
    }

    fly(){
        this.Wires.bodyA = null;
    }

    display(){
        if(this.Wires.bodyA){
            var pointA = this.Wires.bodyA.position;
            var pointB = this.pointB;
            stroke("skyblue");
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}