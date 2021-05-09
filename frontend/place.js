class Place {
    static allPlaces = []

    constructor(place) {
        this.name = place.name
        this.timezone = place.timezone
        this.arrival_date = place.arrival_date
        this.departure_date = place.departure_date
        Place.allPlaces.push(this)
    }

    appendplace() {
        let placesDiv = document.querySelector('.places')
        let placeDiv = document.createElement('div')
        let name = document.createElement('p')
        let timeZone = document.createElement('p')
        let arrivalDate = document.createElement('p')
        let departureDate = document.createElement('p')
        name.innerText = this.name
        timeZone.innerText = this.timezone
        arrivalDate.innerText = this.arrival_date
        departureDate.innerText = this.departure_date
        placeDiv.append(name, timeZone, arrivalDate, departureDate)
        placesDiv.append(locDiv)
    }
}