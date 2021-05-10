class Journal {
    static allJournals = []

    constructor(journal) {
        this.id = journal.id
        this.photo_url = journal.photo_url
        this.content = journal.content
        Journal.allJournals.push(this)
    }

    static appendJournals(){
        let showDiv = document.querySelector('.showTrip')
        let journalsDiv = document.createElement('div')
        let title = document.createElement('h4')
        let button = document.createElement('button')
        let formDiv = document.createElement('div')
        journalsDiv.className = "journals"
        title.innerText = "Journal:"
        button.innerText = "+"
        button.className = "add"
        button.id = "addJournal"
        formDiv.append(button)
        journalsDiv.append(title, formDiv)
        showDiv.append(journalsDiv)
        
        Journal.newJournal()
    }

    appendJournal() {
        let journalsDiv = document.querySelector('.journals')
        let journalDiv = document.createElement('div')
        let photo
        let content = document.createElement('p')
        if(this.photo_url.length > 0){
            photo = document.createElement('img')
            photo.className = "pic"
            photo.src = this.photo_url
            journalDiv.append(photo)
        }
        
        content.innerText = this.content
        journalDiv.append(content)
        journalsDiv.append(journalDiv)
    }

    static newJournal() {
        let button = document.querySelector('#addJournal')
        button.addEventListener('click', event => Journal.addJournalForm(event))
    }

    static addJournalForm(event) {
        const button = event.target
        const journalsDiv = button.parentElement
        const form = document.createElement('div')
        const formHTML = `<form>
        <label>Journal Entry: </label> 
        <input type = 'textarea' name = 'content'></input>
        <label>Arrival Add a photo! url: </label>  
        <input type = 'text' name = 'photoUrl'></input>
        <input type = "submit" id = "submitJournal" value = "Add Entry"></input> 
        </form>`

        form.id = "newPlaceForm"
        form.innerHTML = formHTML
        button.style.display = "none"
        journalsDiv.prepend(form)

        form.addEventListener('submit', event => {
            event.preventDefault()
            const form = event.target.children
            const tripId = document.querySelector("#tripId").innerText
            const journal = { 
                trip: {
                    id: tripId
                },
                journal: {
                    content: form[1].value,
                    photo_url: form[3].value
                }
            }
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(journal)
            }
            Journal.fetchNewJournal(configObj)
        })
    }

    static fetchNewJournal(configObj) {
        fetch("http://localhost:3000/journals", configObj)
            .then(resp => resp.json())
            .then(journal => {
                let attributes = journal.data.attributes
                let formatJournal = {...attributes, ...journal.data}
                let newJournal = new Journal(formatJournal)
                newJournal.appendJournal()
            })
    }

}