let addBtn = document.getElementById('add');
let container = document.getElementById('container');
let removeBtn = document.getElementById('delete');

addBtn.addEventListener('click', function() {
    let newNote = document.createElement('input');
    newNote.type = 'text';
    newNote.placeholder = 'Enter new to-do item';
    newNote.value = 'New To-Do Item';
    container.appendChild(newNote);
});

container.addEventListener('click', function(event){
    if(event.target.tagName === 'INPUT'){
        let selectedNotes = document.querySelectorAll('.selected');
        selectedNotes.forEach(function(note){
            note.classList.remove("selected");
        });
        event.target.classList.add("selected");
    }
});

removeBtn.addEventListener('click', function(){
    let selectedNote = container.querySelector('.selected');
    if(selectedNote){
        selectedNote.remove();
    }
});