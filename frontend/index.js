document.addEventListener('DOMContentLoaded', (event) => {
    loadPage()
}) 

function loadPage() {
     loadBody()
    buttonEventListener()
    Trip.fetchTrips()
    Trip.addTwineButton()
}

function loadBody() {
    const header = document.createElement('h1')
    const subheader = document.createElement('h3')
    const button = document.createElement('button')
    const formDiv = document.createElement('div')
    const myTrips = document.createElement('h3')
    const tripsContainer = document.createElement('div')

    header.innerText = "My Travel Journal"
    subheader.innerText = "Fill up your suitcase!"
    button.id = "newTrip"
    button.innerText = "Plan a new trip"
    formDiv.className = "form"
    myTrips.innerText = "MyTrips"
    tripsContainer.className = "trips"
    document.querySelector('body').append(header, subheader, button, formDiv, myTrips, tripsContainer) 
}

function buttonEventListener() {
    const tripButton = document.querySelector('#newTrip')
    const tripFormDiv = document.querySelector('.form')
    const tripForm = 
    `<form>
    <label>Title: </label> 
    <input type = 'text' name = 'title'></input>
    <label>Departure Date: </label>  
    <input type = 'date' name = 'start date'></input>
    <label>Return Date: </label>  
    <input type = 'date' name = 'end date'></input>
    <label>Add a photo url: </label>  
    <input type = "text" name = "photo url"></input> 
    <input type = "submit" id = "submitTrip" value = "Bon Voyage!"></input> 
    </form>`
    
    tripButton.addEventListener('click', event => {
       event.target.style.display = "none"
       tripFormDiv.innerHTML = tripForm 
       tripFormDiv.addEventListener('submit', event => {
            event.preventDefault() 
            Trip.createTrip(event)
        }) 
    })
}
