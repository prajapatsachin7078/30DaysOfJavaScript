// Retrieve existing notes from localStorage or initialize an empty array
let notes = JSON.parse(localStorage.getItem('notes')) || [];

const noteTitle = document.querySelector('#noteTitle');
const noteContent = document.querySelector('#noteContent');
const notesList = document.querySelector('#notesList');

// Function to display notes
function displayNotes() {
    // Clear existing notes in the list
    notesList.innerHTML = '';

    // Loop through the notes array and create list items for each note
    notes.forEach((note, index) => {
        const noteTemplate = document.querySelector('#noteTemplate');
        const clone = noteTemplate.content.cloneNode(true);

        const noteTitleElem = clone.querySelector('.note-title');
        const noteContentElem = clone.querySelector('.note-content');
        const noteCheckboxElem = clone.querySelector('.note-checkbox');

        noteTitleElem.textContent = note.title;
        noteContentElem.textContent = note.content;
        noteCheckboxElem.dataset.index = index;

        notesList.appendChild(clone);
    });
}

// Function to save a new note
function saveNote() {
    if(noteTitle.value.trim() === '' || noteContent.value.trim() === ''){
        alert('Give the proper title and content of the note!');
        return;
    }
    const note = {
        title: noteTitle.value,
        content: noteContent.value
    };
    noteTitle.value = '';
    noteContent.value = '';
    notes.push(note);

    // Store the updated notes array in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
}

// Function to delete a note
function deleteNote() {
    const checkboxes = document.querySelectorAll('.note-checkbox:checked');

    checkboxes.forEach(checkbox => {
        const index = checkbox.dataset.index;
        notes.splice(index, 1);
    });

    // Store the updated notes array in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
}

// Function to clear all notes
function clearAllNotes() {
    notes = [];
    // Store the updated notes array in localStorage
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
}

// Function to search notes
function searchNotes() {
    const searchInput = document.querySelector('#search').value.toLowerCase();

    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(searchInput) || note.content.toLowerCase().includes(searchInput);
    });

    // Display only the filtered notes
    displayFilteredNotes(filteredNotes);
}

// Function to display filtered notes
function displayFilteredNotes(filteredNotes) {
    // Clear existing notes in the list
    notesList.innerHTML = '';

    // Loop through the filtered notes array and create list items for each note
    filteredNotes.forEach((note, index) => {
        const noteTemplate = document.querySelector('#noteTemplate');
        const clone = noteTemplate.content.cloneNode(true);

        const noteTitleElem = clone.querySelector('.note-title');
        const noteContentElem = clone.querySelector('.note-content');
        const noteCheckboxElem = clone.querySelector('.note-checkbox');

        noteTitleElem.textContent = note.title;
        noteContentElem.textContent = note.content;
        noteCheckboxElem.dataset.index = index;

        notesList.appendChild(clone);
    });
}

// Display existing notes when the page loads
displayNotes();
