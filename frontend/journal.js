class Journal {
    static allJournals = []

    constructor(journal) {
        this.photo_url = journal.photo_url
        this.content = journal.content
        Journal.allJournals.push(this)
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