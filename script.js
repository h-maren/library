function Book(title,author,pages,hasread) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    hasread=new Boolean(hasread);

    this.info = function() {
        if(hasread==true){
            return `${title} by ${author}, ${pages} pages, have already read.`;
        }
        else {
            return `${title} by ${author}, ${pages} pages, have not read yet.`;
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, true);
console.log(theHobbit);
console.log(theHobbit.info());