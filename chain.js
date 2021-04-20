class chain {
constructor(bodyA,bodyB){

var options = {
    bodyA: bodyA, 
    bodyB : bodyB,
    stiffness:0.04, length:10
}
this.body = Constraint.create(options)
World.add(world,this.body)
}
display(){
strokeWeight(4)
line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.bodyB.position.x, 
    this.body.bodyB.position.x)




}

}