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

var slides   = document.querySelectorAll('.hero-slide');
var dots     = document.querySelectorAll('.hero-dot');
var prevBtn  = document.getElementById('heroPrev');
var nextBtn  = document.getElementById('heroNext');
var current  = 0;
var autoPlay;

function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
}

function startAuto() {
    autoPlay = setInterval(function () { goTo(current + 1); }, 4000);
}

function resetAuto() {
    clearInterval(autoPlay);
    startAuto();
}

nextBtn.addEventListener('click', function () { goTo(current + 1); resetAuto(); });
prevBtn.addEventListener('click', function () { goTo(current - 1); resetAuto(); });

dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); resetAuto(); });
});

startAuto();