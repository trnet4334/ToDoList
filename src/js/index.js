let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
    todo: [],
    completed: []
};

renderTodoList();

// TODO: Submit multiple form data into localStorage
// 1. Including Subject, time, location, details, notes and priority tag
// 2. Time should use moment.js and Semantic UI calender
// 3. Priority tag should combine with time frame

// Check if the item data is valid
const isValidItem = item => {
    return item.name && item.value;
};

// TODO: Retrieves selected option
const convertToJSON = items => [].reduce.call(items, (data, item) => {
    if (isValidItem(item)){
        data[item.name] = item.value;
    }
    return data;
}, {});

// Handler function for submission form data
// @param {Event} e the submit event trigger by the user
// @return {void}
const handleFormSubmit = e => {
    e.preventDefault();

    const data = convertToJSON(form.items);

    // For testing the result of data converting
    // const dataContainer = document.getElementsByClassName('result')[0];
    // dataContainer.textContent = JSON.stringify(data, null, " ");
}

// form.addEventListener('submit', handleFormSubmit);

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

    if (id === 'listBody') {
        data.splice(data.indexOf(value), 1);
    }
    parent.removeChild(item);
    dataObjectUpdated();

    todoListCounter();
}

// Button action for completing the list item
function completeItem() {
    let item = this.parentNode.parentNode;
    let status = item.querySelector('.table-list-status');

    if (status.textContent === 'Ongoing') {
        item.classList.remove('ongoing-list-item');
        item.classList.add('achieved-list-item');
        status.classList.remove('warning');
        status.classList.add('positive');
        status.textContent = 'Achieved';
    } else {
        item.classList.remove('achieved-list-item');
        item.classList.add('ongoing-list-item');
        status.classList.remove('positive');
        status.classList.add('warning');
        status.textContent = 'Ongoing';
    }

    todoListCounter();
}

function addItemToDOM (text){
    let list = document.getElementById('listBody');

    let listRow = document.createElement('tr');
    listRow.classList.add('table-list-item', 'ongoing-list-item');
    let listSubject = document.createElement('td');
    listSubject.classList.add('table-list-subject', 'center', 'aligned');
    listSubject.innerText = text;

    let listStatus = document.createElement('td');
    listStatus.classList.add('table-list-status', 'center', 'aligned', 'warning');
    listStatus.style.fontWeight = 'bold';
    listStatus.innerText = 'Ongoing';

    let listPriority = document.createElement('td');
    listPriority.classList.add('center', 'aligned', 'warning');
    listPriority.style.fontWeight = 'bold';
    listPriority.innerText = 'Medium';

    let listTime = document.createElement('td');
    listTime.innerText ='2018-11-22';

    let listBtn = document.createElement('td');
    listBtn.classList.add('center', 'aligned');

    let remove = document.createElement('button');
    remove.classList.add('remove', 'ui', 'icon', 'red', 'button', 'mini');
    let removeIcon = document.createElement('i');
    removeIcon.classList.add('trash', 'icon');
    remove.appendChild(removeIcon);

    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add('complete', 'ui', 'icon', 'button', 'mini');
    let completeIcon = document.createElement('i');
    completeIcon.classList.add('check', 'circle', 'icon');
    complete.appendChild(completeIcon);

    complete.addEventListener('click', completeItem);

    listBtn.appendChild(complete);
    listBtn.appendChild(remove);
    listRow.appendChild(listSubject);
    listRow.appendChild(listStatus);
    listRow.appendChild(listPriority);
    listRow.appendChild(listTime);
    listRow.appendChild(listBtn);

    list.parentNode.insertBefore(listRow, list);

    // Button group in the list elememt
    // let buttons = document.createElement('div');
    // buttons.classList.add('buttons');
    //
    // let remove = document.createElement('button');
    // remove.classList.add('remove', 'circular', 'ui', 'icon', 'red', 'button');
    // let removeIcon = document.createElement('i');
    // removeIcon.classList.add('trash', 'icon');
    // remove.appendChild(removeIcon);

    // Click event for removing item
    // remove.addEventListener('click', removeItem);
    //
    // let complete = document.createElement('button');
    // complete.classList.add('complete', 'circular', 'ui', 'icon', 'button');
    // let completeIcon = document.createElement('i');
    // completeIcon.classList.add('check', 'circle', 'icon');
    // complete.appendChild(completeIcon);

    // Click event for adding the completed item
    // complete.addEventListener('click', completeItem);
    //
    // buttons.appendChild(complete);
    // buttons.appendChild(remove);
    // item.appendChild(inputText);
    // item.appendChild(buttons);

    // list.insertBefore(item, list.childNodes[0]);
    // todoListCounter();
}

function todoListCounter() {
    let todo = document.querySelectorAll('.ongoing-list-item');
    let completed = document.querySelectorAll('.achieved-list-item');

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

// Display list item details into new details block
function listItemDetailsDisplay() {
    let listItemDetails = document.querySelectorAll('.list-item-style');

    listItemDetails.forEach((item) => {
        item.addEventListener('click', function (e) {
            // e.preventDefault();
            let listSubject = document.getElementById('listSubject');
            listSubject.innerText = e.currentTarget.textContent;
            //    TODO: Add each list item content into new "LIST DETAILS" block
        });
    });
}

listItemDetailsDisplay();

// TODO: Edit lists category (Add, remove, edit)

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
    $('#test').click(function() {
        $('#list-data-modal').modal('show');
    });
});

