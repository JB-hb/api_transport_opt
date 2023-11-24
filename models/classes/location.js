//class that will contain the information of one location

export class Local{

	constructor(id, direction, weight){
		this.id = id
		this.direction = direction
		this.demanda = weight
	}

	getDirection(){
		return this.direction
	}

	getDemanda(){
		return this.demanda
	}

	setDemanda(weight){
		this.demanda = weight
	}
}
