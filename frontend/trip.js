class Trip {
    constructor(trip){
        this.id = trip.id
        this.title = trip.attributes.title
        this.photoUrl = trip.attributes.photoUrl
        this.startDate = trip.attributes.startDate
        this.endDate = trip.attributes.endDate
    }

    static fetchTrips() {
            fetch('http://localhost:3000/trips')
                .then(resp => resp.json())
                .then(obj => {
                    let trips = obj.data
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
       img.src = this.photoUrl
       img.style = "width:100%"
       card.append(img)
       card.append(div)
       tripContainer.append(card) 
   }
} 

