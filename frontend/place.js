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
        let button = document.createElement('button')
        placesDiv.className = "places"
        title.innerText = "Locations:"
        button.innerText = "+"
        button.className = "add"
        button.id = "addPlace"
        placesDiv.append(title, button)
        showDiv.append(placesDiv) 
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

    newPlace() {

    }
}