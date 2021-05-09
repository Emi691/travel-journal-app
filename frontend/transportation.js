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
}