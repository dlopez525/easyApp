var toggleMenu = document.getElementById('toggle-menu'),
    nav = document.getElementById('menubar');

toggleMenu.addEventListener('click', function() {
    nav.classList.toggle('showMenuBar');
});
