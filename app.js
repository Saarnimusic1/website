const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.navbar__links');

// Add click event listener to mobileMenu
mobileMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('is-active'); // toggle class is-active
  navbarMenu.classList.toggle('active'); // toggle class active
});

// Add click event listener to each navbar link
navbarLinks.forEach(function(navbarLink) {
  navbarLink.addEventListener('click', function() {
    mobileMenu.classList.remove('is-active'); // remove class is-active
    navbarMenu.classList.remove('active'); // remove class active
  });
});

// Add click event listener to window
window.addEventListener('click', function(event) {
  if(event.target !== mobileMenu && event.target.parentNode !== mobileMenu) {
    // If the clicked element is not the mobile menu or one of its child nodes, close the navigation bar
    mobileMenu.classList.remove('is-active'); // remove class is-active
    navbarMenu.classList.remove('active'); // remove class active
  }
});
