var toggleMenu = document.getElementById('toggle-menu'),
    nav = document.getElementById('menubar');

toggleMenu.addEventListener('click', function() {
    nav.classList.toggle('showMenuBar');
});

var toggleOptions = document.getElementById('toggle-tools'),
    div = document.getElementById('tools__options');

toggleOptions.addEventListener('click', function() {
    div.classList.toggle('showToolsOptions');
});

var toggleTasks = document.getElementById('tasks-list__course__toggle'),
    tasks = document.getElementById('tasks-list__task');

toggleTasks.addEventListener('click', function() {
    tasks.classList.toggle('showTask');
});
