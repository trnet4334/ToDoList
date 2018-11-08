// Get all buttons with class="list-navbar-item" inside the container
let navItems = document.querySelectorAll(".list-navbar-item");

// Loop through the buttons to the current/clicked button
navItems.forEach(navItem => navItem.addEventListener("click", function () {
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
}));

// Menu priority list event handler
let priorityEls = document.querySelectorAll('.menu-priority');
// Loop through the buttons to the current/clicked button
priorityEls.forEach(el => el.addEventListener("click", function () {
    if (this.id === 'UrgentPriority') {
        document.querySelectorAll('.table-list-priority').forEach(item => {
            if (item.textContent === 'Urgent') {
                item.parentNode.style.display = 'table-row';
            } else {
                item.parentNode.style.display = 'none';
            }
        });
    } else if (this.id === 'MediumPriority') {
        document.querySelectorAll('.table-list-priority').forEach(item => {
            if (item.textContent === 'Medium') {
                item.parentNode.style.display = 'table-row';
            } else {
                item.parentNode.style.display = 'none';
            }
        });
    } else {
        document.querySelectorAll('.table-list-priority').forEach(item => {
            if (item.textContent === 'Low') {
                item.parentNode.style.display = 'table-row';
            } else {
                item.parentNode.style.display = 'none';
            }
        });
    }
}));

// Flip event handler for the priority table content
// Grab all the tabs in the priority column
let priorityTabs = document.querySelectorAll('.table-list-priority');
// Loop through the buttons to the current/clicked button
priorityTabs.forEach( tab => tab.addEventListener("click", (e) => {
    let currentTab = e.target;
    if (currentTab.textContent === 'Urgent') {
        currentTab.classList.remove('negative');
        currentTab.classList.add('warning');
        currentTab.textContent = 'Medium';
    } else if (currentTab.textContent === 'Medium') {
        currentTab.classList.remove('warning');
        currentTab.classList.add('positive');
        currentTab.textContent = 'Low';
    } else if (currentTab.textContent === 'Low') {
        currentTab.classList.remove('positive');
        currentTab.classList.add('negative');
        currentTab.textContent = 'Urgent';
    }
}));