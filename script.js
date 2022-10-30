const addBtn = document.getElementById("add");

const modal = document.getElementById("modal-container");
const titleForm = document.getElementById("titleForm")
const authorForm = document.getElementById("authorForm")
const pagesForm = document.getElementById("pagesForm") 
const genreForm = document.getElementById("genreForm")
const statusForm = document.getElementById("statusForm")
const submitBtn = document.getElementById("submitBtn")

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
}

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

submitBtn.addEventListener("click", (event) => {
    if(titleForm.checkValidity() && authorForm.checkValidity() && pagesForm.checkValidity()) {
        event.preventDefault();
        modal.style.display = "none";
        displayBook();
        cleanForm();
    } 
})

const gridContainer = document.getElementById("grid-container");

function displayBook() {
    //div
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("id", "bookDiv");
    gridContainer.appendChild(bookDiv);
    addBookToLibrary();

    //title
    const title = document.createElement("p");
    title.classList.add("infos")
    title.setAttribute("id", "bookTitle");
    title.textContent = `"${titleForm.value}"`;
    bookDiv.appendChild(title)

    //author
    const author = document.createElement("p");
    author.classList.add("infos")
    author.textContent = `Author: ${authorForm.value}`;
    bookDiv.appendChild(author)

    //pages
    const pages = document.createElement("p");
    pages.classList.add("infos")
    pages.textContent = `Pages: ${pagesForm.value}`;
    bookDiv.appendChild(pages)

    //genre
    const genre = document.createElement("p");
    genre.classList.add("infos")
    genre.textContent = `Genre: ${genreForm.value}`;
    bookDiv.appendChild(genre)

    //status
    const status = document.createElement("p");
    status.classList.add("infos");
    status.textContent = `Status: ${statusForm.value}`;
    bookDiv.appendChild(status);

    //buttons div
    const divBtn = document.createElement("div")
    divBtn.setAttribute("id", "btnDiv");
    bookDiv.appendChild(divBtn);

    //delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("bookBtns");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.innerHTML = '<img src= "imgs/delete-icon.png">';
    divBtn.appendChild(deleteBtn);

    //modify button
    const modifyBtn = document.createElement("button");
    modifyBtn.classList.add("bookBtns");
    modifyBtn.setAttribute("id", "modifyBtn");
    modifyBtn.innerHTML = '<img src= "imgs/modify-icon.png">'
    divBtn.appendChild(modifyBtn);
}

function cleanForm() {
    titleForm.value = "";
    authorForm.value = "";
    pagesForm.value = "";
    genreForm.value = "";
    statusForm.value = "To read";
}
  