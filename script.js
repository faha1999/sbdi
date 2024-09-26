// Toggle Hamburger Menu for Mobile
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  // Toggle mobile menu visibility
  mobileMenu.classList.toggle('open');

  // Toggle hamburger to 'X' icon
  hamburger.classList.toggle('active');
}

// Automatically close mobile menu on scroll
window.onscroll = function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  // Check if mobile menu is open and close it on scroll
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
  }
};

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
