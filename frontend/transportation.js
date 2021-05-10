class Transportation {
    static allTransportations = []

    constructor(transportation) {
        this.id = transportation.id
        this.start_location = transportation.start_location
        this.end_location = transportation.end_location
        this.mode = transportation.mode
        this.departure_date = transportation.departure_date
        this.arrival_date = transportation.arrival_date
        Transportation.allTransportations.push(this)
    }

    static appendTransportations(){
        let showDiv = document.querySelector('.showTrip')
        let transportDiv = document.createElement('div')
        let title = document.createElement('h4')
        let formDiv = document.createElement('h4')
        let button = document.createElement('button')
        transportDiv.className = "transports"
        title.innerText = "Transportation:"
        button.innerText = "+"
        button.className = "add"
        button.id = "addTransport"
        formDiv.append(button)
        transportDiv.append(title, formDiv)
        showDiv.append(transportDiv) 

        Transportation.newTransportation()
    }

    appendTransportation() {
        let transportDiv = document.querySelector('.transports')
        let transDiv = document.createElement('div')
        let transportations = document.createElement('p')
        let mode = document.createElement('p')
        let dates = document.createElement('p')
        let deleteButton = document.createElement('button')
        let endDate = new Date (this.departure_date)
        let startDate = new Date (this.arrival_date)
        transportations.innerText = `${this.start_location} - ${this.end_location}`
        transportations.className = "transPlaces"
        deleteButton.innerText = "x"
        deleteButton.id = "deleteButton"
        mode.innerText = this.mode
        mode.className = "mode"
        dates.innerHTML = `<p><b>departing:</b> ${endDate.toDateString()} <b>arriving:</b> ${startDate.toDateString()}<p>`
        dates.className = "dates"
        transportations.id = this.id
        transportations.append(deleteButton, mode, dates)
        transDiv.append(transportations)
        transportDiv.append(transDiv)

        deleteButton.addEventListener('click', event => Transportation.deleteTransport(event))
    }

    static newTransportation() {
        let button = document.querySelector('#addTransport')
        button.addEventListener('click', event => Transportation.addTransportForm(event))
    }

    static addTransportForm(event) {
        const button = event.target
        const transportsDiv = button.parentElement
        const form = document.createElement('div')
        const formHTML = `<form>
        <label>Start Location: </label> 
        <input type = 'text' name = 'startLocation'></input>
        <label>End Location: </label> 
        <input type = 'text' name = 'endLocation'></input>
        <label>Mode: </label>  
        <input type = 'text' name = 'mode'></input>
        <label>Arrival Date: </label>  
        <input type = 'date' name = 'arrivalDate'></input>
        <label>Departure Date: </label>  
        <input type = 'date' name = 'departureDate'></input>
        <input type = "submit" id = "submitTrip" value = "Add Location"></input> 
        </form>`

        form.id = "newTransportForm"
        form.innerHTML = formHTML
        button.style.display = "none"
        transportsDiv.prepend(form)

        form.addEventListener('submit', event => {
            event.preventDefault()
            const form = event.target.children
            const tripId = document.querySelector("#tripId").innerText
            const transport = { 
                trip: {
                    id: tripId
                },
                transportation:{
                    start_date: form[1].value,
                    end_date: form[3].value, 
                    mode: form[5].value,
                    departure_date: form[7].value,
                    arrival_date: form[9].value
                }
            }
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(transport)
            }
            Transportation.fetchNewTransport(configObj)
        })
    }

    static fetchNewTransport(configObj) {
        fetch("http://localhost:3000/transportations", configObj)
            .then(resp => resp.json())
            .then(transportation => {
                let attributes = transportation.data.attributes
                let formatTransport = {...attributes, ...transportation.data}
                let newTransport = new Transportation (formatTransport)
                newTransport.appendTransportation()
            })
    }

    static deleteTransport(event) {
        const transportation = Transportation.allTransportations.find(element => element.id === parseInt(event.target.parentElement.id))
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(transportation)
        }
        Transportation.fetchDeleteTransport(configObj, transportation)
        
    }

    static fetchDeleteTransport(configObj, transportation) {
        fetch(`http://localhost:3000/transportations/${transportation.id}`, configObj)
            .then(resp => resp.json())
            .then(transportation => {
                let transportDiv = document.getElementById(transportation.id)
                const transportObj = Transportation.allTransportations.find(element => element.id === parseInt(transportation.id))
                const index = Transportation.allTransportations.indexOf(transportObj)
                transportDiv.remove()
                Transportation.allTransportations.splice(index, 1)
            })
    }
}