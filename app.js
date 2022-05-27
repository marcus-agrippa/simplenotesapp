// DOM Selectors
const form = document.querySelector('#note-form');
const newNote = document.getElementById('new-note');
const clearBtn = document.getElementById('clear-all-btn');
const notesContainer = document.querySelector('.notes-container');
const addNoteBtn = document.getElementById('add-note-btn');
const noteBox = document.querySelector('#note-box');

// Event Listeners

loadEventListeners();

function loadEventListeners() {

  form.addEventListener('submit', addNote);

  clearBtn.addEventListener('click', clearAll);
}

// Add note to UI

function addNote(e) {
  if(newNote.value === '') {
    alert('Please add a note.');
  } else {
      // Create note element
  const noteBox = document.createElement('div');
  // Add a class to note element
  noteBox.className = 'note-box';
  noteBox.id = 'note-box';
  // Create text note and append to div
  const noteText = document.createElement('p');
  noteText.appendChild(document.createTextNode(newNote.value));
  noteBox.appendChild(noteText);

  // Append div to container 
  notesContainer.appendChild(noteBox);

  newNote.value = '';
  }

  e.preventDefault();
}

// Clear all notes using clear all button

function clearAll(e) {
  while (notesContainer.lastChild) {
    notesContainer.removeChild(notesContainer.lastChild);
    alert('Confirm delete all?');
  }

  e.preventDefault();
}

// Event listener for deleting individual notes

document.getElementById('notes-container').addEventListener('click', handleClick);

// Function to delete individual notes

function handleClick(e) {
  if (e.target.classList.contains("note-box")) {
      confirm('Confirm delete?');
      e.target.remove();
  } else if (e.target.getElementsByTagName("p")) {
      confirm('Confirm delete?');
      e.target.parentNode.remove();
  } 

  e.preventDefault();
}