const addBtn = document.getElementById("add");

const modal = document.getElementById("modal-container");
const submitBtn = document.getElementById("submitBtn")
const titleForm = document.getElementById("titleForm")
const authorForm = document.getElementById("authorForm")
const pagesForm = document.getElementById("pagesForm") 
const genreForm = document.getElementById("genreForm")

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
    } 
})

const gridContainer = document.getElementById("grid-container");

const titleIcon = document.createElement("img");
titleIcon.src = "imgs/title-icon.png";
const authorIcon = document.createElement("img");
authorIcon.src = "imgs/author-icon.png";
const pagesIcon = document.createElement("img");
pagesIcon.src = "imgs/pages-icon.png";
const genreIcon = document.createElement("img");
genreIcon.src = "imgs/genre-icon.png";
const readingIcon = document.createElement("img");
readingIcon.src = "imgs/reading-icon.png";

function displayBook() {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDiv");
    gridContainer.appendChild(bookDiv);
    addBookToLibrary();

    //title
    bookDiv.appendChild(titleIcon)
    const title = document.createElement("p");
    title.classList.add("infos")
    title.textContent = titleForm.value;
    bookDiv.appendChild(title)

    //author
    bookDiv.appendChild(authorIcon)
    const author = document.createElement("p");
    author.classList.add("infos")
    author.textContent = authorForm.value;
    bookDiv.appendChild(author)

    //pages
    bookDiv.appendChild(pagesIcon)
    const pages = document.createElement("p");
    pages.classList.add("infos")
    pages.textContent = pagesForm.value;
    bookDiv.appendChild(pages)

    //genre
    bookDiv.appendChild(genreIcon)
    const genre = document.createElement("p");
    genre.classList.add("infos")
    genre.textContent = genreForm.value;
    bookDiv.appendChild(genre)

    //status
    bookDiv.appendChild(readingIcon)
    const status = document.createElement("p");
    status.classList.add("infos")
    status.textContent = statusForm.value;
    bookDiv.appendChild(status)
}

  