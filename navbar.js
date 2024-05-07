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

navbarToggle.addEventListener('click', toggleNavbarVisibility);


if (window.innerWidth < 700) {
    navbarLinks.forEach(link => {
        link.addEventListener('click', event => {
           
            isNavbarExpanded = false;
            navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
            navbarMenu.style.opacity = '0';
            navbarMenu.style.visibility = 'hidden';

          
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
        });
    });
}
