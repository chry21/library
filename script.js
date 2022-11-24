//Data structure

class Book {
    constructor(title, author, pages, genre, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.status = status;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(newBook) {
        if(!this.isAlreadyInLibrary(newBook)) {
            addBookModal.style.display = "none";
            this.myLibrary.push(newBook);
            displayBook(library.lastBook);
        }
        else { 
            displayErrorMsg();
        }
    }

    isAlreadyInLibrary(newBook) {
        return this.myLibrary.some((book) => book.title === newBook.title) 
    }

    modifyBookStatus(titleElement, statusElement) {
        const options = ["To Read", "Reading", "Finished", "Abandoned"];
        const title = titleElement.textContent.replaceAll('"', '');

        let indexBookToModify = this.myLibrary.findIndex(book => book.title === title);
        let currentStatusIndex = options.indexOf(this.myLibrary[indexBookToModify].status);

        this.myLibrary[indexBookToModify].status = (currentStatusIndex === options.length-1) ? options[0] : options[currentStatusIndex+1];
        statusElement.textContent = `Status: ${this.myLibrary[indexBookToModify].status}`;
    }

    deleteBook(title) { //here i pass the title to find the book in the library by the title, and remove it from the library array
        title.parentNode.remove()
        this.myLibrary = this.myLibrary.filter(book => book.title !== title.textContent);
    }

    get lastBook() {
        return this.myLibrary[this.myLibrary.length - 1];
    }
}

const library = new Library();


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


addBtn.addEventListener("click", () => {
    addBookModal.style.display = "flex";
    clearForm();  
});

const getValuesFromInput = () => {
    const title = titleForm.value;
    const author = authorForm.value;
    const pages = pagesForm.value;
    const genre = genreForm.value;
    const status = statusForm.value;

    return new Book(title, author, pages, genre, status)
}

//form functions 

submitBtn.addEventListener("click", (event) => {  
        if(titleForm.checkValidity() && authorForm.checkValidity() && pagesForm.checkValidity()) {
            event.preventDefault();
            library.addBookToLibrary(getValuesFromInput());
        }
})

let displayedError = false;

const displayErrorMsg = () => {
    if(!displayedError) {
        const errorMsg = document.createElement("p");
        errorMsg.setAttribute("id", "errorMsg");
        errorMsg.textContent = "This book already exists in the library!";
        errorMsg.style.color = "red";
        addBookModal.style.height = "400px";
        addBookForm.appendChild(errorMsg);
    }

    displayedError = true;
}

const clearForm = () => {
    if(displayedError) {
        addBookModal.style.height = "370px";
        document.getElementById("errorMsg").remove();
        displayedError = false;
    }
    
    addBookForm.reset();
}

//Book's functions 

const displayBook = (book) => {
    //div
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("id", "bookDiv");
    gridContainer.appendChild(bookDiv);
    
    //title
    const titleElement = document.createElement("h1");
    titleElement.classList.add("infos")
    titleElement.setAttribute("id", "bookTitle")
    titleElement.textContent = `"${book.title}"`;
    bookDiv.appendChild(titleElement)

    //author
    const authorElement = document.createElement("p");
    authorElement.classList.add("infos")
    authorElement.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(authorElement)

    //pages
    const pagesElement = document.createElement("p");
    pagesElement.classList.add("infos")
    pagesElement.textContent = `Pages: ${book.pages}`;
    bookDiv.appendChild(pagesElement)

    //genre
    const genreElement = document.createElement("p");
    genreElement.classList.add("infos")
    genreElement.textContent = `Genre: ${book.genre}`;
    bookDiv.appendChild(genreElement)

    //status
    const statusElement = document.createElement("p");
    statusElement.classList.add("infos");
    statusElement.textContent = `Status: ${book.status}`;
    bookDiv.appendChild(statusElement);

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
        titleElement.textContent = title.textContent.replaceAll('"', '') //to remove the "" for the filter() method
        library.deleteBook(titleElement);
    })
    
    modifyBtn.addEventListener("click", () => {
        library.modifyBookStatus(titleElement, statusElement)
    });
}



