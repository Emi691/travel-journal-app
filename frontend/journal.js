class Journal {
    static allJournals = []

    constructor(journal) {
        this.photo_url = journal.photo_url
        this.content = journal.content
        Journal.allJournals.push(this)
    }

    appendJournal() {
        let locDiv = document.createElement('div')
        let photo = document.createElement('img')
        let content = document.createElement('p')
        photo.src = this.photo_url
        content.innerText = this.content
        locDiv.append(photo, content)
    }
}