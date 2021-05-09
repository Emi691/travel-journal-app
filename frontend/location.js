class Location {
    static allLocations = []

    constructor(location) {
        this.name = location.name
        this.timezone = location.timezone
        this.arrival_date = location.arrival_date
        this.departure_date = location.departure_date
        Location.allLocations.push(this)
    }

    appendLocation(locationsDiv) {
        let locDiv = document.createElement('div')
        let name = document.createElement('p')
        let timeZone = document.createElement('p')
        let arrivalDate = document.createElement('p')
        let departureDate = document.createElement('p')
        name.innerText = this.name
        timeZone.innerText = this.timezone
        arrivalDate.innerText = this.arrival_date
        departureDate.innerText = this.departure_date
        locDiv.append(name, timeZone, arrivalDate, departureDate)
        locationsDiv.append(locDiv)
    }
}