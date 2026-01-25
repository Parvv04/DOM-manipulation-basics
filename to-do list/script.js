let addBtn = document.getElementById('add');
let container = document.getElementById('container');
let removeBtn = document.getElementById('delete');

addBtn.addEventListener('click', function() {
    let newNote = document.createElement('input');
    newNote.type = 'text';
    newNote.placeholder = 'Enter new to-do item';
    container.appendChild(newNote);

    newNote.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            saveInput(newNote);
        }
    });
        
    newNote.addEventListener('blur', function(){
        saveInput(newNote);
    });
});

container.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
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

container.addEventListener('dblclick', function(event){
    if(event.target.tagName === 'LI'){
        let li = event.target;
        let input = document.createElement('input');
        input.type = 'text';
        input.value = li.textContent;
        li.replaceWith(input);

        input.addEventListener('keydown', function(event){
            if(event.key === 'Enter'){
                saveInput(input);
            }
        });
        input.addEventListener('blur', function(){
            saveInput(input);
        });
    }
});

function saveInput(input){
    let li = document.createElement('li');
    li.textContent = input.value || 'New To-Do Item';
    input.replaceWith(li);
}