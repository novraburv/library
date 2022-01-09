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

		// fill the row with each book's data
		Object.keys(book).forEach(data => {
			const td = document.createElement('td');
			td.textContent = book[data];
			tr.appendChild(td);
		})

		// add delete button at the end
		const delButton = document.createElement('button');
		delButton.classList.add('btn', 'btn-del');
		delButton.setAttribute('data-index', index);
		delButton.innerHTML = '<i class="fa fa-trash"></i>';
		index++;
		tr.appendChild(delButton);

		tbody.appendChild(tr);
	})
}

function showForm() {
	form.removeAttribute('hidden');
}

function hideForm() {
	form.setAttribute('hidden', 'true')
}

function submit() {
	addBookToLibrary(formTitle.value, formAuthor.value, formPages.value,formRead.checked);
	resetForm();
	hideForm();
}

function resetForm() {
	formTitle.value = '';
	formAuthor.value = '';
	formPages.value = '';
	formRead.checked = false;
}

const btnAdd = document.querySelector('.btn-add');
const btnSubmit = document.querySelector('.btn-submit');
const form = document.querySelector('.form');

const formTitle = form.querySelector('#title');
const formAuthor = form.querySelector('#author');
const formPages = form.querySelector('#pages');
const formRead = form.querySelector('#read');

btnAdd.addEventListener('click', showForm);

btnSubmit.addEventListener('click', submit);