class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
			
			
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
		
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var string1X=pointA.x;
		var string1Y=pointA.y;

		var string2X=pointB.x+this.offsetX;
	     var string2Y=pointB.y;

		line(string1X,string1Y,string2X,string2Y);
	}

}