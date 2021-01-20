class Slingshot{
	constructor(bodyA,pointB){		
		var options={ 
			bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:0.004, 
			length:1
        }
        
        this.slingshot=Constraint.create(options);
        this.bodyA=bodyA;
		this.pointB=pointB;
		World.add(world,this.slingshot);
	}

	attach(body) {
		this.slingshot.bodyA=body;
	}

	fly() {
		this.slingshot.bodyA=null;
	}

	display() {
		if(this.slingshot.bodyA) {
			var pointA=this.slingshot.bodyA.position;
			var pointB=this.pointB;
			strokeWeight(4);
			stroke("red");
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}