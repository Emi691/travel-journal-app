class Transportation {
    static allTransportations = []

    constructor(transportation) {
        this.start_location = transportation.start_location
        this.end_location = transportation.end_location
        this.mode = transportation.mode
        this.departure_date = transportation.departure_date
        this.arrival_date = transportation.arrival_date
        Transportation.allTransportations.push(this)
    }

    appendTransportation() {
        let transDiv = document.createElement('div')
        let startLocation = document.createElement('p')
        let endLocation = document.createElement('p')
        let mode = document.createElement('p')
        let arrivalDate = document.createElement('p')
        let departureDate = document.createElement('p')
        startLocation.innerText = this.start_location
        endLocation.innerText = this.end_location
        mode.innerText = this.mode
        arrivalDate.innerText = this.arrival_date
        departureDate.innerText = this.departure_date
        transDiv.append(startLocation, endLocation, mode, arrivalDate, departureDate)
    }
}