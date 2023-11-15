//class that it going to request the distance between the origin and the
//destinations

import fetch from 'node-fetch'

export class distance{

	#destinationsURL = ''
	#originsURL = ''	
	#url=`https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destinationsURL}&origins=${originURL}&units=metric&key=AIzaSyAkIqCzSqwTWVzjH0gTmfR65I-sCXrEN48`

	static async getDistancia({ origin, destinations }){
		try{
			this.#setDestinationsURL(destinations)
			this.#setOriginURL(origin)
			const result = await fetch(this.#url)
			const data = await result.json()
			const distancias = {
				succes:true,
				...data
			}
			return distancias
		}catch(error){
			const result = {
				error:true,
				message: error
			}
			return result
		}
	}

	#setDestinationsURL(destinations, cont = 0){
		if(cont < destinations.length()){
			let temp
			if(destinations[cont].includes(" ") === true){
				temp = destinations[cont].replace(" ","%20")
			}
			if(destinations[cont].includes('"') === true){
				temp = destinations[cont].replace('"',"%22")
			}
			if(destinations[cont].includes("<") === true){
				temp = destinations[cont].replace("<","%3C")
			}
			if(destinations[cont].includes(">") === true){
				temp = destinations[cont].replace(">","%3E")
			}
			if(destinations[cont].includes("#") === true){
				temp = destinations[cont].replace("#","%23")
			}
			if(destinations[cont].includes("%") === true){
				temp = destinations[cont].replace("%","%25")
			}
			if(destinations[cont].includes("|") === true){
				temp = destinations[cont].replace("|","%7C")
			}
			if(cont === 0){
				this.#destinationsURL.push(`${temp}`)
			}else{
				this.#destinationsURL.push(`%7C${temp}`)
			}
			cont+=1
			return(this.#setDestinationsURL(destinations,cont))
		}
		return true
	}

	#setOriginURL(origin){
		let temp
		if(origin.includes(" ") === true){
			temp = destinations[cont].replace(" ","%20")
		}
		if(origin.includes('"') === true){
			temp = destinations[cont].replace('"',"%22")
		}
		if(origin.includes("<") === true){
			temp = destinations[cont].replace("<","%3C")
		}
		if(origin.includes(">") === true){
			temp = destinations[cont].replace(">","%3E")
		}
		if(origin.includes("#") === true){
			temp = destinations[cont].replace("#","%23")
		}
		if(origin.includes("%") === true){
			temp = destinations[cont].replace("%","%25")
		}
		if(origin.includes("|") === true){
			temp = destinations[cont].replace("|","%7C")
		}
		this.#originURL.push(`${temp}`)
		return(true)
	}
}
