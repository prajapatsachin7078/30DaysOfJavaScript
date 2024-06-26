
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
const toggleList = (e,index) => {
   
    if (index !== -1) {
        const book = books[index];
        console.log(book);
        books[index].read = !book.read;
        if (book.read) {
            e.target.classList.add('read');
        } else {
            e.target.classList.remove('read');
        }
        
        updateBooks();
    }
}

// Function to delete a book
const deleteItem = (event,index) => {
    event.stopPropagation(); // avoid propagation/event bubbling
   

    if (index !== -1) {
        books.splice(index, 1);
        updateBooks();
        renderBooks();
    }
}

// Function to render the list of books
const renderBooks = () => {
    list.innerHTML = '';
    books.forEach((book,index) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.innerHTML = 'Delete';
        btn.classList.add('delete');

        li.textContent = book.name.trim();

        btn.addEventListener('click', (e)=>deleteItem(e,index));
        li.appendChild(btn);
        li.addEventListener('click', (e)=>toggleList(e,index));

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
