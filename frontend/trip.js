class Trip {
    constructor(title, startDate, endDate){
        this.title = title
        this.startDate = startDate
        this.endDate = endDate
    }

    renderTrips() {
        fetch('http://localhost:3000/trips')
            .then(response => response.json())
            .then(object => console.log(object))
    }

}

