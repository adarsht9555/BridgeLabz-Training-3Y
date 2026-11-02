class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Success: "${this.title}" has been issued.`);
        } else {
            console.log(`Error: "${this.title}" is already issued.`);
        }
    }

    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Success: "${this.title}" has been returned.`);
        } else {
            console.log(`Error: "${this.title}" was not issued.`);
        }
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
    new Book("1984", "George Orwell", "9780451524935", true),
    new Book("Moby Dick", "Herman Melville", "9781503280786")
];

function displayAvailableBooks(books) {
    console.log("=== Available Books in Library ===");
    const available = books.filter(book => !book.isIssued);
    if (available.length === 0) {
        console.log("No available books.");
    } else {
        available.forEach(b => console.log(`- ${b.title} by ${b.author} (ISBN: ${b.ISBN})`));
    }
}

function issueBookByISBN(books, isbn) {
    const book = books.find(b => b.ISBN === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log(`Error: Book with ISBN ${isbn} not found.`);
    }
}

displayAvailableBooks(library);

console.log("\nAttempting to issue book with ISBN 9780061120084...");
issueBookByISBN(library, "9780061120084");

console.log("\nUpdated Available Books:");
displayAvailableBooks(library);
