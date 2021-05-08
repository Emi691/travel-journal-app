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

    static fetchTrip(configObj) {
        fetch('http://localhost:3000/trips', configObj)
            .then(resp => resp.json())
            .then(trip => {
                let newTrip = new Trip(trip.data)
                newTrip.appendTrip()
            })
            .catch(function(error) {
                alert("Failed to add trip, please try again")
            })
    }

    static createTrip(event) {
        const formFields = event.target.children

        const trip = {
            title: formFields[1].value,
            start_date: formFields[3].value,
            end_date: formFields[5].value,
            photo_url: formFields[7].value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({trip})
        }

        Trip.fetchTrip(configObj)
    }

    appendTrip() {
        let start = new Date (this.startDate)
        let end = new Date (this.endDate)
        const tripContainer = document.querySelector(".trips")
        let card = document.createElement('div')
        let title = document.createElement('h4')
        let dates = document.createElement('p')
        let img = document.createElement('img')
        let xButton = document.createElement('button')
        card.className = "card"
        card.id = this.id
        title.innerText = this.title
        dates.innerText = `${start.toDateString()} - ${end.toDateString()}`
        img.src = this.photoUrl
        img.style = "width:100%"
        xButton.innerText = "x"
        card.append(img)
        card.append(title)
        card.append(dates)
        card.append(xButton)
        tripContainer.append(card) 
   }
} 

