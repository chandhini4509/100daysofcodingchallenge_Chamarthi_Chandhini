let book = {
    title: 'Calm Coding',
    author: 'CCR',
    pages: '171',
    read: true,
    library: [], 
    addabook(title, author, pages, read) {
        const newBook = { title, author, pages, read };
        this.library.push(newBook);
    },
    listallbooks() {
            this.library.forEach((book, index) => {
                console.log(`${index + 1}. ${book.title} by ${book.author} - ${book.pages} pages. Read: ${book.read ? 'Yes' : 'No'}`);
            });
        
    },
     markabook(index) {
     this.library[index].read = true;
    }
};


book.addabook("Great Gats", "F. Scott", 180, false);
book.addabook("Mockingbird", "Harper", 281, true);
book.addabook("kenichee", " Orwell", 328, false);

book.listallbooks(); 

book.markabook(0);

book.listallbooks();
