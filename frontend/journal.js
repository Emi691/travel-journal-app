class Journal {
    static allJournals = []

    constructor(journal) {
        this.photo_url = journal.photo_url
        this.content = journal.content
        Journal.allJournals.push(this)
    }
}