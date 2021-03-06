class Trip {
    static allTrips = []

    constructor(trip){
        this.id = trip.id
        this.title = trip.attributes.title
        this.photoUrl = trip.attributes.photoUrl
        this.startDate = trip.attributes.startDate
        this.endDate = trip.attributes.endDate
        this.places = trip.attributes.places.map(place => new Place(place))
        this.transportations = trip.attributes.transportations.map(transport => new Transportation(transport))
        this.journals = trip.attributes.journals.map(journal => new Journal(journal))
        Trip.allTrips.push(this)
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
        let tripId = document.createElement("p")
        let title = document.createElement('h3')
        let start = new Date (this.startDate)
        let end = new Date (this.endDate)
        let depDate = document.createElement('p')
        let retDate = document.createElement('p')
        let backButton = document.createElement('Button')
        tripId.innerText = this.id
        tripId.id = "tripId"
        tripId.style.display = "none"
        title.innerText = this.title
        depDate.innerText = `Departure Date: ${start.toDateString()}`
        retDate.innerText = `Return Date: ${end.toDateString()}`
        backButton.innerText = "Back"
        backButton.className = "back"
        showDiv.className = "showTrip"
        body.innerHTML = ""
        showDiv.append(title, depDate, retDate, backButton, tripId) 
        body.append(showDiv)
        Place.appendPlaces()
        Transportation.appendTransportations()
        Journal.appendJournals()

        for (const place of this.places) {
            place.appendPlace()
        }

        for (const transportation of this.transportations) {
            transportation.appendTransportation()
        }

        for (const journal of this.journals) {
            journal.appendJournal()
        }

        backButton.addEventListener('click', event => {
            const body = document.querySelector('body')
            body.innerHTML = ""
            loadPage()
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
   
   static addTwineButton() {
       let twineButton = document.createElement('button')
       let div = document.querySelector(".form")
       twineButton.innerText = "Plan a trip to the wolds larges ball of twine!"
        div.append(twineButton)

        Trip.planTwineTrip(twineButton)
   }

   static planTwineTrip(twineButton) {
       twineButton.addEventListener("click", event => {
        const trip = {
            title: "See the world's biggest ball of twine",
            start_date: new Date(), 
            end_date: new Date(),
            photo_url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TwineBallCawkerKs.jpg"
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
       })
   }

} 

