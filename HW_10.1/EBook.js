const Book = require("./Book");

const ALLOWED_FORMATS = ["pdf", "epub", "mobi", "fb2", "txt"];

class EBook extends Book {
  #fileFormat;

  constructor(title, author, yearPublished, fileFormat) {
    super(title, author, yearPublished);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this.#fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a non-empty string");
    }

    const format = value.trim().toLowerCase();

    if (!ALLOWED_FORMATS.includes(format)) {
      throw new Error(
        `Invalid file format. Allowed: ${ALLOWED_FORMATS.join(", ")}`
      );
    }

    this.#fileFormat = format;
  }

  printInfo() {
    super.printInfo();
    console.log(`File format - ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error("Argument must be an instance of the Book class");
    }

    return new EBook(
      book.title,
      book.author,
      book.yearPublished,
      fileFormat
    );
  }
}

module.exports = EBook;
