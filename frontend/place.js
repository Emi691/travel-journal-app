class Place {
    static allPlaces = []

    constructor(place) {
        this.name = place.name
        this.arrival_date = place.arrival_date
        this.departure_date = place.departure_date
        Place.allPlaces.push(this)
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
}