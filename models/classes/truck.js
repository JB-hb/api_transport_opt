//class that manage the truck data
import { distance } from '../distance.js'

export class Truck{

	#destinations
	#content

	constructor(id, nombre, maxCap, origin){
		this.id = id
		this.origin = origin
		this.nombre = nombre
		this.maxCap = maxCap
		this.destinations = []
		this.content = {}
	}

	addProducts({ destination, weight }){
		this.#destinations.push(destination)
		const delivery = {
			[destination]:weight
		}
		this.content = {
			...content,
			...delivery
		}
	}

	#generateRoute(originSearch=this.origin, destinationsSearch=this.destinations, route=[]){
		const search = {
			origin:originSearch,
			destinations:destinationsSearch
		}
		data = distance.getDistancia(search)	
		let min = {
			local:'',
			index:0,
			distance:0
		}
		data.rows.elements.forEach((element, index) => {
			const dist = parseFloat(element.distance.text.replace(" km",''))
			if(min.distance === 0){
				min.local = data.destination_addresses[index]
				min.index = index
				min.distance = dist
			}
			if(dist < min.distance){
				min.local = data.destination_addresses[index]
				min.index = index
				min.distance = dist
			}
		})	
		route.push(min.local)
		destinationsSearch.splice(min.index,1)
		if(destinationsSearch.length() > 0){
			this.#generateRoute(route[route.length()-1], destinationsSearch, route)
		}else{
			return route
		}
	}

	getAvaiSpace(){
		let total = 0
		for(const [key, value] of Object.entries(this.content)){
			total += value
		}
		return(this.maxCap - total)
	}

	isEmpty(){
		return(Object.keys(this.content).length === 0)
	}
}
