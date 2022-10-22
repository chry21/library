const addBtn = document.getElementById("add");

let myLibrary = [];

function Book(title, author, genre, pages, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    const newBook = new Book("Ricordi", "Marco Aurelio", "Filosofia", 200, "reading");
    myLibrary.push(newBook);
}

