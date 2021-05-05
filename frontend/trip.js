class Trip {
    constructor(trip){
        this.title = trip.title
        this.startDate = trip.startDate
        this.endDate = trip.endDate
    }

    static fetchTrips() {
            fetch('http://localhost:3000/trips')
                .then(resp => resp.json())
                .then(trips => console.log(trips))
    }
   
} 
