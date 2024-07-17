const myLibrary=[];

//function to create Book object
function Book(title,author,pages,hasread) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.hasread=new Boolean(hasread);

    this.info = function() {
        if(hasread==true){
            return `${title} by ${author}, ${pages} pages, have already read.`;
        }
        else {
            return `${title} by ${author}, ${pages} pages, have not read yet.`;
        }
    }
}

//testing
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);
const myLeftFoot=new Book("My Left Foot","Chrissy",100,false);

function addBookToLibrary(inputBook){
    myLibrary.push(inputBook);
    console.log("book added!");
}

addBookToLibrary(theHobbit);
addBookToLibrary(myLeftFoot);

const container=document.querySelector(".main-content");

//function to create book card to display on library site
function addLibraryToDisplay(book) {
    const bookCard=document.createElement("div");
    bookCard.classList.add("book-info");    
    const pTitle=document.createElement("h2");
    const pAuthor=document.createElement("h3");
    const pPages=document.createElement("p");
    const pHasRead=document.createElement("p");
    if(book.hasread==true){
        pHasRead.textContent=`Have Read`;
    }
    else {
        pHasRead.textContent=`Have Not Read`;
    }
    pTitle.textContent=`${book.title}`;
    bookCard.appendChild(pTitle);
    pAuthor.textContent=`By ${book.author}`;
    bookCard.appendChild(pAuthor);
    pPages.textContent=`${book.pages} pages`
    bookCard.appendChild(pPages);
    bookCard.appendChild(pHasRead);
    container.appendChild(bookCard);
};



//button to add new book
const showBookFormButton=document.querySelector("#showBookForm");
const dialogBookForm=document.querySelector("#dialog");
const cancelButton=document.querySelector("#cancelBtn");
const submitBookButton=document.querySelector("#addNewBookBtn");

showBookFormButton.addEventListener("click", () => {
    dialogBookForm.showModal();
});

cancelButton.addEventListener("click", () => {
    dialogBookForm.close();
});

submitBookButton.addEventListener("click", (e) => {
    const inputForm=document.querySelector("#newBookForm");
    console.log(inputForm);
    const inputTitle=document.querySelector("#title");
    const inputAuthor=document.querySelector("#author");
    const inputPages=document.querySelector("#numPages");
    const checkTrue=document.querySelector("#hasRead").checked;
    const inputBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,checkTrue);
    console.log(inputTitle,inputAuthor,inputPages,checkTrue);
    addBookToLibrary(inputBook);
    addLibraryToDisplay(inputBook);
    e.preventDefault();
    dialogBookForm.close();
    //resetting the values
    inputTitle.value="";
    inputAuthor.value="";
    inputPages.value="";
    document.querySelector("#hasRead").checked=false;
});

console.log(myLibrary);

myLibrary.forEach(addLibraryToDisplay);




