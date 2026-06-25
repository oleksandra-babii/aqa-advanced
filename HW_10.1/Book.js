class Book {
  #title;
  #author;
  #yearPublished;

  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }
    this.#title = value.trim();
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }
    this.#author = value.trim();
  }

  get yearPublished() {
    return this.#yearPublished;
  }

  set yearPublished(value) {
    const year = Number(value);
    const currentYear = new Date().getFullYear();

    if (!Number.isInteger(year) || year < 1 || year > currentYear) {
      throw new Error(
        `Year of publication must be an integer between 1 and ${currentYear}`
      );
    }

    this.#yearPublished = year;
  }

  printInfo() {
    console.log(`Title - ${this.title}`);
    console.log(`Author - ${this.author}`);
    console.log(`Year of publication - ${this.yearPublished}`);
  }

  static findOldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Array of books cannot be empty");
    }

    return books.reduce((oldest, book) =>
      book.yearPublished < oldest.yearPublished ? book : oldest
    );
  }
}

module.exports = Book;
