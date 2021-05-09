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
        journalsDiv.className = "Journals"
        title.innerText = "Journal:"
        button.innerText = "+"
        button.className = "addTransport"
        journalsDiv.append(title, button)
        showDiv.append(journalsDiv) 
    }

    appendJournal() {
        let journalsDiv = document.querySelector('.journals')
        let journalDiv = document.createElement('div')
        let photo = document.createElement('img')
        let content = document.createElement('p')
        photo.src = this.photo_url
        content.innerText = this.content
        journalDiv.append(photo, content)
        journalsDiv.append(journalDiv)
    }
}