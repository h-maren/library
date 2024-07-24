class library {
    constructor(){
        this.library=[];
    }

    addBookToLibrary(inputBook){
        this.library.push(inputBook);
        //console.log("book added!");
    };
    removeBookFromLibrary(inputBook){
        let index=this.library.indexOf(inputBook);
        this.library.splice(index,1);
        //console.log(this.library.indexOf(inputBook));
        //console.log(this);
        return this.library;
    };
};

let myLibrary=new library;

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

//class to create book class
class Book {
    constructor(title,author,pages,hasread){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.hasread=new Boolean(hasread);
    }

    addBookToDisplay(){
        const bookCard=document.createElement("div");
        bookCard.classList.add("book-info");
        const pTitle=document.createElement("h2");
        const pAuthor=document.createElement("h3");
        const pPages=document.createElement("p");
        const pHasRead=document.createElement("p");
        pHasRead.classList.add("has-read-info");
        pHasRead.classList.add(`${this.title}`.toLowerCase().split(" ").join("-"));
        if(this.hasread==true){
            pHasRead.textContent=`Have Read`;
        }
        else {
            pHasRead.textContent=`Have Not Read`;
        }
        pTitle.textContent=`${this.title}`;
        bookCard.appendChild(pTitle);
        pAuthor.textContent=`By ${this.author}`;
        bookCard.appendChild(pAuthor);
        pPages.textContent=`${this.pages} pages`
        bookCard.appendChild(pPages);
        bookCard.appendChild(pHasRead);
        //make button container at end
        let deleteBtn=document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent="Remove Book";
        deleteBtn.classList.add(`${this.title}`.toLowerCase().split(" ").join("-"));
        deleteBtn.addEventListener("click",removeBook);
        const hasReadBtn=document.createElement("button");
        hasReadBtn.classList.add("has-read-btn");
        hasReadBtn.textContent="Change Read Status";
        hasReadBtn.classList.add(`${this.title}`.toLowerCase().split(" ").join("-"));
        hasReadBtn.addEventListener("click",toggleHasRead);
        const btnDiv=document.createElement("div");
        btnDiv.classList.add("book-btn-section");
        btnDiv.appendChild(deleteBtn);
        btnDiv.appendChild(hasReadBtn);
        bookCard.appendChild(btnDiv);
        //adding to main body
        const container=document.querySelector(".main-content");
        container.appendChild(bookCard);
    };
    checkBookClass(){
        return this.title.toLowerCase().split(" ").join("-");
    };
};

//add initial books
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 300, true);
const myLeftFoot= new Book("My Left Foot","Christy Brown",184,false);

myLibrary.addBookToLibrary(theHobbit);
myLibrary.addBookToLibrary(myLeftFoot);

submitBookButton.addEventListener("click", (e) => {
    const inputTitle=document.querySelector("#title");
    const inputAuthor=document.querySelector("#author");
    const inputPages=document.querySelector("#numPages");
    const checkTrue=document.querySelector("#hasRead").checked;
    const inputBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,checkTrue);
    myLibrary.addBookToLibrary(inputBook);
    e.preventDefault();
    dialogBookForm.close();
    //resetting the values
    inputTitle.value="";
    inputAuthor.value="";
    inputPages.value="";
    document.querySelector("#hasRead").checked=false;
    inputBook.addBookToDisplay();
});

//button to remove book from library
function removeBook() {
    //console.log(this);
    myLibrary.library.forEach(book => {
        let checkBookClass=book.checkBookClass();
        //console.log(checkBookClass);
        const container=document.querySelector(".main-content");
        if((this.classList[0]=="delete-btn")&&(checkBookClass==this.classList[1])){   
            const bookContainer=document.querySelector(`button.${checkBookClass}`).parentNode.parentNode;
            container.removeChild(bookContainer);
            myLibrary.removeBookFromLibrary(book);
        };
    });
};

//button to toggle if book has been read
function toggleHasRead () {
    //console.log(this);
    myLibrary.library.forEach(book => {
        let checkBookClass=book.checkBookClass();
        if((this.classList[0]=="has-read-btn")&&(checkBookClass==this.classList[1])){
            const pToggle=document.querySelector(`p.${checkBookClass}`);
            //console.log(checkBookClass);
            //console.log(this);
            //console.log(pToggle);
            if(book.hasRead==true){
                book.hasRead=false;
                pToggle.textContent='Have Not Read';
            } else {
                book.hasRead=true;
                pToggle.textContent='Have Read';
            }
        };
    });
};

myLibrary.library.forEach(book=>book.addBookToDisplay());
