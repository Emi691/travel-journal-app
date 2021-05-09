class Place {
    static allPlaces = []

    constructor(place) {
        this.id = place.id
        this.name = place.name
        this.arrival_date = place.arrival_date
        this.departure_date = place.departure_date
        Place.allPlaces.push(this)
    }

    static appendPlaces(){
        let showDiv = document.querySelector('.showTrip')
        let placesDiv = document.createElement('div')
        let title = document.createElement('h4')
        let formDiv = document.createElement('div')
        let button = document.createElement('button')
        placesDiv.className = "places"
        title.innerText = "Locations:"
        button.innerText = "+"
        button.className = "add"
        button.id = "addPlace"
        formDiv.append(button)
        placesDiv.append(title, formDiv)
        showDiv.append(placesDiv)
        
        Place.newPlace()
    }

    appendPlace() {
        let placesDiv = document.querySelector('.places')
        let placeDiv = document.createElement('div')
        let name = document.createElement('p')
        let dates = document.createElement('p')
        name.innerText = this.name
        name.className = "name"
        dates.innerText = `arriving: ${this.arrival_date} departing: ${this.departure_date}`
        dates.className = "dates"
        name.append(dates)
        placeDiv.append(name)
        placesDiv.append(placeDiv)
    }

    static newPlace() {
        let button = document.querySelector('#addPlace')
        button.addEventListener('click', event => Place.addPlaceForm(event))
    }

    static addPlaceForm(event) {
        const button = event.target
        const placesDiv = button.parentElement
        const form = document.createElement('div')
        const formHTML = `<form>
        <label>Name: </label> 
        <input type = 'text' name = 'name'></input>
        <label>Arrival Date: </label>  
        <input type = 'date' name = 'arrivalDate'></input>
        <label>Departure Date: </label>  
        <input type = 'date' name = 'departureDate'></input>
        <input type = "submit" id = "submitTrip" value = "Bon Voyage!"></input> 
        </form>`

        form.id = "newPlaceForm"
        form.innerHTML = formHTML
        button.style.display = "none"
        placesDiv.prepend(form)
    }

}