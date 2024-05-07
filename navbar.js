const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);

    if (isNavbarExpanded) {
        navbarMenu.style.opacity = '1';
        navbarMenu.style.visibility = 'visible';
    } else {
        navbarMenu.style.opacity = '0';
        navbarMenu.style.visibility = 'hidden';
    }
};

const closeNavbar = () => {
    isNavbarExpanded = false;
    navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
    navbarMenu.style.opacity = '0';
    navbarMenu.style.visibility = 'hidden';
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

navbarLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});



