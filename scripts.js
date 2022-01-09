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
	updateTable()
}

function updateTable() {
	const tbody = document.querySelector('.table__body');
	if (tbody.innerHTML) tbody.innerHTML = '';

	// iterate books in myLibrary and create a row for each of them
	let index = 0;
	myLibrary.forEach(book => {
		const tr = document.createElement('tr');

		// assign index to each row
		tr.setAttribute('data-index', `${index}`);
		index++;

		// fill the row with each book's data
		Object.keys(book).forEach(data => {
			const td = document.createElement('td');
			td.textContent = book[data];
			tr.appendChild(td);
		})
		tbody.appendChild(tr);
	})
}
