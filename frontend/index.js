document.addEventListener('DOMContentLoaded', (event) => {
    Trip.fetchTrips()
 
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
    
}) 