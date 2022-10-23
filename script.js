const addBtn = document.getElementById("add");
const modal = document.getElementById("modal-container");
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

addBtn.addEventListener("click", () => {
    displayModal();
});

function displayModal() {
    modal.style.display = "flex";
}

