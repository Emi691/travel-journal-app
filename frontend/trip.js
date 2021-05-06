class Trip {
    constructor(trip){
        this.id = trip.id
        this.title = trip.title
        this.photo_url = trip.photo_url
        this.startDate = trip.start_date
        this.endDate = trip.end_date
    }

    static fetchTrips() {
            fetch('http://localhost:3000/trips')
                .then(resp => resp.json())
                .then(trips => {
                    for ( const trip of trips) {
                        let newTrip = new Trip(trip)
                        newTrip.appendTrip()
                    }
                })
    }

   appendTrip() {
       const tripContainer = document.querySelector(".trips")
       let card = document.createElement('div')
       let div = document.createElement('div')
       let img = document.createElement('img')
       card.className = "card"
       card.id = this.id
       div.innerText = this.title
       img.src = this.image_url
       card.append(img)
       card.append(div)
       tripContainer.append(card) 
   }
} 

