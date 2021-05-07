document.addEventListener('DOMContentLoaded', (event) => {
    Trip.fetchTrips()

    const tripButton = document.querySelector('#newTrip')
    const tripForm = `<form>
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
       const buttonDiv = event.target.parentElement 
       event.target.style.display = "none"
       buttonDiv.innerHTML += tripForm
       const submitTrip = document.querySelector('#submitTrip') 
       submitTrip.addEventListener('submit', event => createTrip) 
    })
}) 