// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    
    // Animate hamburger icon (simple cross toggle)
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (!isExpanded) {
      spans[0].classList.add('rotate-45', 'translate-y-2');
      spans[1].classList.add('opacity-0');
      spans[2].classList.add('-rotate-45', '-translate-y-2');
    } else {
      spans[0].classList.remove('rotate-45', 'translate-y-2');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-rotate-45', '-translate-y-2');
    }
  });
}

// Close mobile menu on clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const spans = mobileMenuBtn.querySelectorAll('span');
    spans[0].classList.remove('rotate-45', 'translate-y-2');
    spans[1].classList.remove('opacity-0');
    spans[2].classList.remove('-rotate-45', '-translate-y-2');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});

// FAQ Accordion
const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    
    // Toggle active classes
    answer.classList.toggle('active');
    icon.classList.toggle('active');
    
    // Close other FAQs
    faqButtons.forEach(otherBtn => {
      if (otherBtn !== button) {
        otherBtn.nextElementSibling.classList.remove('active');
        otherBtn.querySelector('.faq-icon').classList.remove('active');
      }
    });
  });
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Target elements that need animation
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.scroll-animate');
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0'; // Initial state
    observer.observe(el);
  });
});
