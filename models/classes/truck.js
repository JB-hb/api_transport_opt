//class that manage the truck data

export class truck{

	#destinations
	#content

	constructor(id, nombre, maxCap){
		this.id = id
		this.nombre = nombre
		this.maxCap = maxCap
		this.destinations = []
		this.content = {}
	}

	addProducts({ destination, products }){
		this.destination.push(destination)
		const delivery = {
			[destination]:{
				...products
			}
		}
		this.content = {
			...content,
			...delivery
		}
	}

	#generateRoute(){

	}
}
