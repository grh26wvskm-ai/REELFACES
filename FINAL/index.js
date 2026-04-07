var genreToggle = document.getElementById('genreToggle');
var genreMenu   = document.getElementById('genreMenu');
var genreFrame  = document.getElementById('genreFrame');

genreToggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var isOpen = genreMenu.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

// close nya yungg genre menu kapag nag-click ka outside
document.addEventListener('click', function (e) {
    if (!genreMenu.contains(e.target) && e.target !== genreToggle) {
        closeMenu();
    }
});

// Wire up every dropdown link 
var dropdownLinks = document.querySelectorAll('.dropdown-link');

dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        var page = this.getAttribute('data-page');

        // load the page into the iframe
        genreFrame.src = page;

        // highlight the active link
        dropdownLinks.forEach(function (l) { l.classList.remove('active'); });
        this.classList.add('active');

        // sarado nya yungh dropdown after magpick ng genre
        closeMenu();
    });
});

// Helpers
function openMenu() {
    genreMenu.classList.add('open');
}

function closeMenu() {
    genreMenu.classList.remove('open');
}