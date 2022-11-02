//Data structure

function Book(title, author, pages, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.status = status;
}

//User interface

const addBtn = document.getElementById("add");
const gridContainer = document.getElementById("grid-container");

const addBookModal = document.getElementById("modal-container");
const addBookForm = document.getElementById("form-container");
const titleForm = document.getElementById("titleForm")
const authorForm = document.getElementById("authorForm")
const pagesForm = document.getElementById("pagesForm") 
const genreForm = document.getElementById("genreForm")
const statusForm = document.getElementById("statusForm")
const submitBtn = document.getElementById("submitBtn")

let myLibrary = [];

function addBookToLibrary() {
    const newBook = new Book(titleForm.value, authorForm.value, pagesForm.value, genreForm.value, statusForm.value);
    myLibrary.push(newBook);
}

let creatingNewBook = false;
let displayedError = false;
addBtn.addEventListener("click", () => {
    displayedError = false;
    addBookModal.style.display = "flex";
    creatingNewBook = true;
});

//form functions 

submitBtn.addEventListener("click", (event) => {
    if(!alreadyExists()) {
        if(titleForm.checkValidity() && authorForm.checkValidity() && pagesForm.checkValidity()) {
            event.preventDefault();
            addBookModal.style.display = "none";
            addBookToLibrary();
            displayBook(myLibrary[myLibrary.length - 1]);
            clearForm();
        }
    } 
    else {
        displayError()
        displayedError = true;
        event.preventDefault();
    }
})

function alreadyExists() {
    if(myLibrary.length > 0) {
        for(book of myLibrary) {
            if(book.title === titleForm.value) {
                return true;
            }
        }
    }
    return false;
}

function displayError() {
    if(!displayedError) {
        error = document.createElement("p");
        error.setAttribute("id", "errorMsg")
        error.textContent = "This book already exists in the library!";
        error.style.color = "red";
        addBookModal.style.height = "400px"
        addBookForm.appendChild(error)
    }
}

function clearForm() {
    if(displayedError) {
        addBookModal.style.height = "370px"
        document.getElementById("errorMsg").remove()
    }
    addBookForm.reset()
}

//Book's functions 

function displayBook(book) {
    //div
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("id", "bookDiv");
    gridContainer.appendChild(bookDiv);
    
    //title
    const title = document.createElement("h1");
    title.classList.add("infos")
    title.setAttribute("id", "bookTitle")
    title.textContent = `"${book.title}"`;
    bookDiv.appendChild(title)

    //author
    const author = document.createElement("p");
    author.classList.add("infos")
    author.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(author)

    //pages
    const pages = document.createElement("p");
    pages.classList.add("infos")
    pages.textContent = `Pages: ${book.pages}`;
    bookDiv.appendChild(pages)

    //genre
    const genre = document.createElement("p");
    genre.classList.add("infos")
    genre.textContent = `Genre: ${book.genre}`;
    bookDiv.appendChild(genre)

    //status
    const status = document.createElement("p");
    status.classList.add("infos");
    status.textContent = `Status: ${book.status}`;
    bookDiv.appendChild(status);

    //buttons div
    const divBtn = document.createElement("div")
    divBtn.setAttribute("id", "btnDiv");
    bookDiv.appendChild(divBtn);

    //delete button
    const deleteBtn = document.createElement("button");    
    deleteBtn.classList.add("bookBtns");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<img src= "imgs/delete-icon.png">';
    divBtn.appendChild(deleteBtn);

    //modify button 
    const modifyBtn = document.createElement("button");
    modifyBtn.classList.add("bookBtns");
    modifyBtn.classList.add("modifyBtn");
    modifyBtn.innerHTML = '<img src= "imgs/modify-icon.png">'
    divBtn.appendChild(modifyBtn);

    //Event listeners for buttons 
    
    deleteBtn.addEventListener("click", () => {
        title.textContent = title.textContent.replaceAll('"', '') //to remove the "" for the filter() method
        deleteBook(title);
    })
    /*
    modifyBtn.addEventListener("click", () => {
        title.textContent = title.textContent.replaceAll('"', '') //to remove the "" for the filter() method
        creatingNewBook = false;
        displayModifyModal(title);
    });*/
}

function deleteBook(title) { //here i pass the title to find the book in the library by the title, and remove it from the library array
    title.parentNode.remove()
    myLibrary = myLibrary.filter(book => book.title !== title.textContent);
}
/*
function displayModifyModal(title) {
    const isThisBook = (book) => book.title === title.textContent;
    let bookToModify = myLibrary.findIndex(isThisBook);

    titleForm.value = myLibrary[bookToModify].title;
    authorForm.value = myLibrary[bookToModify].author;
    pagesForm.value = myLibrary[bookToModify].pages;
    genreForm.value = myLibrary[bookToModify].genre;
    statusForm.value = myLibrary[bookToModify].status;
    addBookModal.style.display = "flex";

    submitBtn.addEventListener("click", () => {
        modifyBook(bookToModify, title)
    })
}

function modifyBook(bookToModify, title) {
    console.log(title)
    myLibrary[bookToModify] = new Book(titleForm.value, authorForm.value, pagesForm.value, genreForm.value, statusForm.value);
    const parent = title.parentNode;
    parent.children[0].textContent = `"${myLibrary[bookToModify].title}"`
    parent.children[1].textContent = `Author: ${myLibrary[bookToModify].author}`
    parent.children[2].textContent = `Pages: ${myLibrary[bookToModify].pages}`
    parent.children[3].textContent = `Genre: ${myLibrary[bookToModify].genre}`
    parent.children[4].textContent = `Status: ${myLibrary[bookToModify].status}`

    clearForm()
}
*/

