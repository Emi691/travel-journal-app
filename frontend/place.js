class Place {
    static allPlaces = []

    constructor(place) {
        this.id = place.id
        this.name = place.name
        this.arrival_date = place.arrival_date
        this.departure_date = place.departure_date
        Place.allPlaces.push(this)
    }

    static appendPlaces(){
        let showDiv = document.querySelector('.showTrip')
        let placesDiv = document.createElement('div')
        let title = document.createElement('h4')
        let formDiv = document.createElement('div')
        let button = document.createElement('button')
        placesDiv.className = "places"
        title.innerText = "Locations:"
        button.innerText = "+"
        button.className = "add"
        button.id = "addPlace"
        formDiv.append(button)
        placesDiv.append(title, formDiv)
        showDiv.append(placesDiv)
        
        Place.newPlace()
    }

    appendPlace() {
        let placesDiv = document.querySelector('.places')
        let placeDiv = document.createElement('div')
        let name = document.createElement('p')
        let dates = document.createElement('p')
        let startDate = new Date (this.arrival_date)
        let endDate = new Date (this.departure_date)
        name.innerText = this.name
        name.className = "name"
        dates.innerText = `Arriving: ${startDate.toDateString()} Departing: ${endDate.toDateString()}`
        dates.className = "dates"
        name.append(dates)
        placeDiv.append(name)
        placesDiv.append(placeDiv)
    }

    static newPlace() {
        let button = document.querySelector('#addPlace')
        button.addEventListener('click', event => Place.addPlaceForm(event))
    }

    static addPlaceForm(event) {
        const button = event.target
        const placesDiv = button.parentElement
        const form = document.createElement('div')
        const formHTML = `<form>
        <label>Name: </label> 
        <input type = 'text' name = 'name'></input>
        <label>Arrival Date: </label>  
        <input type = 'date' name = 'arrivalDate'></input>
        <label>Departure Date: </label>  
        <input type = 'date' name = 'departureDate'></input>
        <input type = "submit" id = "submitTrip" value = "Add Location"></input> 
        </form>`

        form.id = "newPlaceForm"
        form.innerHTML = formHTML
        button.style.display = "none"
        placesDiv.prepend(form)

        form.addEventListener('submit', event => {
            event.preventDefault()
            const form = event.target.children
            const tripId = document.querySelector("#tripId").innerText
            const place = { 
                trip: {
                    id: tripId
                },
                place:{
                    name: form[1].value,
                    arrival_date: form[3].value, 
                    departure_date: form[5].value,
                }
            }
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(place)
            }
            Place.fetchNewPlace(configObj)
        })
    }

    static fetchNewPlace(configObj) {
        fetch("http://localhost:3000/places", configObj)
            .then(resp => resp.json())
            .then(place => {
                let attributes = place.data.attributes
                let formatPlace = {...attributes, ...place.data}
                let newPlace = new Place(formatPlace)
                newPlace.appendPlace()
            })
    }

}