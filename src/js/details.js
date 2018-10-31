// List details div event listener
// document.querySelectorAll('#todo').addEventListener('click', function(e){
//     let detailDiv = document.getElementById('list-details-div');
//     let listDetails = document.createElement('div');
//
//
//     detailDiv.appendChild(listDetails);
// })

// Get the container element
let listNav = document.getElementById("listNavbar");
// Get all buttons with class="list-navbar-item" inside the container
let navItem = listNav.getElementsByClassName("list-navbar-item");


// Loop through the buttons to the current/clicked button
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        if(this.id === 'todoAll') {
            document.getElementById('todo-list-div').style.display = 'block';
            document.getElementById('completed-list-div').style.display = 'block';
        } else if(this.id === 'todoUndone') {
            document.getElementById('todo-list-div').style.display = 'block';
            document.getElementById('completed-list-div').style.display = 'none';
        } else {
            document.getElementById('todo-list-div').style.display = 'none';
            document.getElementById('completed-list-div').style.display = 'block';
        }
    });
}

