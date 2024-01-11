const navbarToggle = document.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
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

navbarToggle.addEventListener('click', toggleNavbarVisibility);


