// === NAVIGATION SCROLL ===
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// === MENU BURGER ===
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Fermer le menu au clic sur un lien
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// Fermer le menu au clic dehors
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  }
});

// === SCROLL ANIMATIONS (Intersection Observer) ===
const fadeEls = document.querySelectorAll(
  '.hypnose-card, .accompagnement-item, .step, .tarif-card, .contact-item, .section-header'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// === SMOOTH SCROLL pour ancres natives (fallback) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// === FORMULAIRE — feedback visuel ===
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
  });
}

// Gestion retour Formspree (si redirection désactivée)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('submitted') === 'true') {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const msg = document.createElement('div');
    msg.style.cssText = 'background:#EFF4F1;border-left:3px solid #7A9E8E;border-radius:0 8px 8px 0;padding:1rem 1.5rem;margin-bottom:1.5rem;color:#2D2D2D;font-size:0.95rem;';
    msg.textContent = 'Votre message a bien été envoyé. Pascale vous répondra dans les plus brefs délais.';
    const formEl = contactSection.querySelector('.contact-form');
    if (formEl) formEl.parentNode.insertBefore(msg, formEl);
  }
}
