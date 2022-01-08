const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype = {
	info: function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "I've read this" : "not read yet"}.`
	}
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
}

