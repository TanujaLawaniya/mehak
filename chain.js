class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:400
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos1=this.chain.bodyA.position;
        var pos2=this.chain.pointB;
        strokeWeight(3);
        fill(0);
        line(pos1.x,pos1.y-50,pos2.x,pos2.y);
    }
}