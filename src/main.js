import './style.css';

// Navbar Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Sticky Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.padding = '10px 0';
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.padding = '20px 0';
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    navbar.style.boxShadow = 'none';
  }
});


// Typing Animation
const typeTarget = document.querySelector('.type-target');
const roles = ["Full Stack Developer", "Computer Science Student", "Java Developer", "Web Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typeTarget.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50;
  } else {
    typeTarget.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500; // Pause before new word
  }

  setTimeout(type, typeSpeed);
}

// Start typing animation
if (typeTarget) {
  setTimeout(type, 1000);
}


// Scroll Spy (Active Link Highlight)
const sections = document.querySelectorAll('section, header');
const navLi = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });
});
