let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: [],
    completed: []
};

renderTodoList();


// User click add button to activate add function
// If there is any text inside the message box, it will be add into todo list.
document.getElementById('add').addEventListener('click', function(){
   let value = document.getElementById('item').value;
   if (value) {
       data.todo.push(value);
       addItemToDOM(value);
       document.getElementById('item').value = '';

       dataObjectUpdated();
   }
});

document.getElementById('item').addEventListener('keydown', function(e){
    let value = this.value;
    if (e.code === 'Enter' && value) {
        addItem(value);
    }
});

function addItem (value) {
    addItem(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    dataObjectUpdated();
}

// User can store todo list data in local storage
function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length)
        return;
    for (let i = 0; i < data.todo.length; i++){
        let value = data.todo[i];
        addItemToDOM(value);
    }

    for (let j = 0; j < data.completed.length; j++){
        let value = data.completed[j];
        addItemToDOM(value, true);
    }
}

function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }
    dataObjectUpdated();

    parent.removeChild(item);
    todoListCounter();
}

// Button action for completing the list item
function completeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }

    // Check out the item should be added to completed or not
    if (id === 'todo') {
        let target = document.getElementById('completed');
        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
        target.querySelector('.check').classList.add('green');
    } else {
        let target = document.getElementById('todo');
        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
        target.querySelector('.check').classList.remove('green');
    }
    todoListCounter();
}

function addItemToDOM (text, completed){
    let list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

    let item = document.createElement('li');
    item.classList.add('list-item-style');

    // Input text group in the list element
    let inputText = document.createElement('div');

    let todoText = document.createElement('label');
    todoText.innerText = text;

    inputText.appendChild(todoText);

    // Button group in the list elememt
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let remove = document.createElement('button');
    remove.classList.add('remove', 'circular', 'ui', 'icon', 'red', 'button');
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('trash', 'icon');
    remove.appendChild(removeIcon);

    // Click event for removing item
    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add('complete', 'circular', 'ui', 'icon', 'button');
    let completeIcon = document.createElement('i');
    completeIcon.classList.add('check', 'circle', 'icon');
    complete.appendChild(completeIcon);

    // Click event for adding the completed item
    complete.addEventListener('click', completeItem);

    buttons.appendChild(complete);
    buttons.appendChild(remove);
    item.appendChild(inputText);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
    todoListCounter();
}

function todoListCounter() {
    let todo = document.querySelectorAll('#todo li');
    let completed = document.querySelectorAll('#completed li');

    let todoCount = todo.length;
    let completedCount = completed.length;
    let allCount = todoCount + completedCount;

    let todoAllLabel = document.getElementById('todo-all-label');
    todoAllLabel.innerText = allCount;
    let todoUndoneLabel = document.getElementById('todo-undone-label');
    todoUndoneLabel.innerText = todoCount;
    let todoDoneLabel = document.getElementById('todo-done-label');
    todoDoneLabel.innerText = completedCount;
};


// TODO: Counter for unread message
// function unreadMessageCounter() {
//     let unreadMessage = document.querySelector('#message-content div');
//     let unreadMessageCount = unreadMessage.length;
//     console.log(unreadMessageCount);

    // let unreadMessageLabel = document.getElementById('inbox-message-label');
    // unreadMessageLabel.innerText = unreadMessageCount;
// }

// TODO: Display modal use pure javaScript
// document.getElementById('message-box').addEventListener('click', function() {
//     let messageModal = document.getElementById('message-box-modal');
//     messageModal.modal('show');
// })

$(function(){
    $('#message-box').click(function() {
        $('#message-box-modal').modal('show');
    });
});
