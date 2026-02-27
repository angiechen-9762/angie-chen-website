// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===== Navbar Scroll Shadow =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Active Nav Link =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links a');

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -60% 0px' }
);

sections.forEach((section) => activeLinkObserver.observe(section));

// ===== Mobile Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');
const drawerOverlay = document.getElementById('drawerOverlay');

function toggleMenu() {
  hamburger.classList.toggle('active');
  navLinksEl.classList.toggle('open');
  drawerOverlay.classList.toggle('active');
  document.body.style.overflow = navLinksEl.classList.contains('open') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);
drawerOverlay.addEventListener('click', toggleMenu);

// Close menu when a nav link is clicked
navLinksEl.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinksEl.classList.contains('open')) {
      toggleMenu();
    }
  });
});
