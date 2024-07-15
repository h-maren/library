const myLibrary=[];

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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, false);
console.log(theHobbit);
console.log(theHobbit.info());


function addBookToLibrary(inputBook){
    myLibrary.push(inputBook);
}

addBookToLibrary(theHobbit);
console.log(myLibrary);
console.log(theHobbit.title);



function addLibraryToDisplay(book) {
    let container=document.querySelector(".main-content");
    console.log(container);
    console.log(book);
    console.log(book.title);
    const bookCard=document.createElement("div");
    bookCard.classList.add("book-info");
    const pTitle=document.createElement("p");
    const pAuthor=document.createElement("p");
    const pPages=document.createElement("p");
    const pHasRead=document.createElement("p");
    let hasReadText="No";
    if(book.hasread==true){
        hasReadText="Yes";
    }
    else {
        hasReadText="No";
    }
    pTitle.textContent=`Title: ${book.title}`;
    bookCard.appendChild(pTitle);
    pAuthor.textContent=`By: ${book.author}`;
    bookCard.appendChild(pAuthor);
    pPages.textContent=`Pages: ${book.pages}`
    bookCard.appendChild(pPages);
    pHasRead.textContent=`Already Read: ${hasReadText}`;
    bookCard.appendChild(pHasRead);
    container.appendChild(bookCard);
};

myLibrary.forEach(addLibraryToDisplay);

