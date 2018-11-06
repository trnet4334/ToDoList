// Get the container element
let listNav = document.getElementById("listNavbar");
// Get all buttons with class="list-navbar-item" inside the container
let navItem = listNav.getElementsByClassName("list-navbar-item");

// Loop through the buttons to the current/clicked button
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
        if (this.id === 'todoAll') {
            document.querySelectorAll('.ongoing-list-item').forEach(item => {
                item.style.display = 'table-row';
            });
            document.querySelectorAll('.achieved-list-item').forEach(item => {
                item.style.display = 'table-row';
            });
        } else if (this.id === 'todoUndone') {
            document.querySelectorAll('.ongoing-list-item').forEach(item => {
                item.style.display = 'table-row';
            });
            document.querySelectorAll('.achieved-list-item').forEach(item => {
                item.style.display = 'none';
            });
        } else {
            document.querySelectorAll('.ongoing-list-item').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.achieved-list-item').forEach(item => {
                item.style.display = 'table-row';
            });
        }
    });
}