const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log("Book instances:");
book1.printInfo();
console.log();
book2.printInfo();
console.log();
book3.printInfo();

const ebook = new EBook(
  "The Little Prince",
  "Antoine de Saint-Exupéry",
  1943,
  "epub"
);

console.log("\nEBook instance:");
ebook.printInfo();

book1.title = "The Little Prince";
console.log(`\nUpdated title of book1: ${book1.title}`);

const ebookFromBook = EBook.fromBook(book2, "pdf");
console.log("\nEBook created from Book via static method:");
ebookFromBook.printInfo();

const books = [book1, book2, book3, ebook, ebookFromBook];
const oldestBook = Book.findOldest(books);

console.log("\nOldest book:");
oldestBook.printInfo();
