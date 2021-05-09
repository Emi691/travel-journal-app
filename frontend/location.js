class Location {
    static allLocations = []
    
    constructor(location) {
        this.name = location.name
        this.timezone = location.timezone
        this.arrival_date = location.arrival_date
        this.departure_date = location.departure_date
        Location.allLocations.push(this)
    }
}