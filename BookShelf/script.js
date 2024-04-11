
// Function to update books array in localStorage
const updateBooks = () => {
    localStorage.setItem('books', JSON.stringify(books));
}

// Function to add a new book to the bookshelf
const addBook = () => {
    const bookNameValue = bookName.value.trim();
    if (bookNameValue === '') {
        return;
    }

    const newBook = {
        name: bookNameValue,
        read: false
    };

    books.push(newBook);
    updateBooks();
    bookName.value = '';
    renderBooks();
}

// Function to toggle the read status of a book
const toggleList = (event) => {
    const li = event.currentTarget;
    const bookName = li.textContent.trim().replace('Delete', '');
    const bookIndex = books.findIndex(book => book.name === bookName);

    if (bookIndex !== -1) {
        const book = books[bookIndex];
        book.read = !book.read;

        if (book.read) {
            li.classList.add('read');
        } else {
            li.classList.remove('read');
        }

        updateBooks();
    }
}

// Function to delete a book
const deleteItem = (event) => {
    event.stopPropagation(); // avoid propagation/event bubbling
    const li = event.target.parentElement;
    const bookName = li.textContent.trim().replace('Delete', '');
    const bookIndex = books.findIndex(book => book.name === bookName);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        updateBooks();
        renderBooks();
    }
}

// Function to render the list of books
const renderBooks = () => {
    list.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        btn.classList.add('delete');

        li.textContent = book.name.trim();
        btn.addEventListener('click', deleteItem);
        li.appendChild(btn);
        li.addEventListener('click', toggleList);

        if (book.read) {
            li.classList.add('read');
        }

        list.appendChild(li);
    });
}

// Initialization
const bookName = document.getElementById('bookName');
const list = document.getElementById('bookList');
let books = JSON.parse(localStorage.getItem('books')) || [];

// Render the initial list of books
renderBooks();
