class Box{
    constructor(x,y,angle){
        var options = {
           restitution:0.3,
            friction : 0.3,
             density : 0.04
        }
        this.body=Bodies.rectangle(x,y,70,70,options)
        this.width = 70
        this.height = 70
        World.add(world,this.body)

    }
    
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")
        fill("white")
        rect(0,0,70,70)
        pop()

    }
}