const addBtn = document.getElementById("add");

const modal = document.getElementById("modal-container");
const submitBtn = document.getElementById("submitBtn")
const titleForm = document.getElementById("titleForm")
const authorForm = document.getElementById("authorForm")
const pagesForm = document.getElementById("pagesForm") 
const genreForm = document.getElementById("genreForm")

const gridContainer = document.getElementById("grid-container");


let myLibrary = [];

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    const newBook = new Book(titleForm.value, authorForm.value, pagesForm.value, genreForm, "reading");
    myLibrary.push(newBook);
    console.log(myLibrary)
}

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

submitBtn.addEventListener("click", (event) => {
    if(titleForm.checkValidity() && authorForm.checkValidity() && pagesForm.checkValidity()) {
        event.preventDefault();
        modal.style.display = "none";
        displayBook();
    } 
})

function displayBook() {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv")
    gridContainer.appendChild(bookDiv);
    addBookToLibrary();
}

  