class Trip {
    static allTrips = []

    constructor(trip){
        this.id = trip.id
        this.title = trip.attributes.title
        this.photoUrl = trip.attributes.photoUrl
        this.startDate = trip.attributes.startDate
        this.endDate = trip.attributes.endDate
        this.locations = []
        Trip.allTrips.push(this)
    }

    

    static fetchTrips() {
            fetch('http://localhost:3000/trips')
                .then(resp => resp.json())
                .then(obj => {
                    let trips = obj.data
                    for ( const trip of trips) {
                        let newTrip = new Trip(trip)
                        let tripLocations = trip.attributes.locations
                        for (const location of tripLocations){
                             newTrip.locations.push(new Location(location))
                        }
                        debugger
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
                document.querySelector('#newTrip').style.display = "block"
                document.querySelector('.form').innerHTML = ""
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
        xButton.className = "cardButton"
        card.append(img, title, dates, xButton)
        tripContainer.append(card)
        
        Trip.clickButton(xButton)

        Trip.clickTitle(title) 
   }

   static clickButton(xButton) {
    xButton.addEventListener('click', event => {
        Trip.deleteEvent(event)
    })
   }

   static clickTitle(title) {
    title.addEventListener('click', event => {
        let tripId = event.target.parentElement.id
        let trip = Trip.allTrips.find(trip => trip.id === tripId)
        trip.showTrip(event)
        
    })
   }

   showTrip(event) {
        let body = document.querySelector('body')
        let showDiv = document.createElement('div')
        let title = document.createElement('h3')
        let start = new Date (this.startDate)
        let end = new Date (this.endDate)
        let depDate = document.createElement('p')
        let retDate = document.createElement('p')
        let backButton = document.createElement('Button')
        title.innerText = this.title
        depDate.innerText = `Departure Date: ${start.toDateString()}`
        retDate.innerText = `Return Date: ${end.toDateString()}`
        backButton.innerText = "Back"
        backButton.className = "back"
        showDiv.className = "showTrip"
        body.innerHTML = ""
        showDiv.append(title, depDate, retDate, backButton)
        body.append(showDiv)
        
        backButton.addEventListener('click', event => {
            location.reload()
        })
   }

   static deleteEvent(event){
    const tripId = event.target.parentElement.id

    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({trip: {id: tripId}})
    }

    Trip.fetchTripId(configObj, tripId)
   }

   static fetchTripId(configObj, tripId) {
    fetch(`http://localhost:3000/trips/${tripId}`, configObj)
        .then(resp => resp.json())
        .then(obj => {
            document.getElementById(`${obj.id}`).remove()
        })
   } 

} 

