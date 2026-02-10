(function() {
  const init = () => {
    const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
    mobileMenuBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = btn.closest('nav');
        const menu = nav.querySelector('.mobile-menu');
        if (menu) {
          menu.classList.toggle('hidden');
        }
      });
    });

    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.classList.add('bg-emerald-600');
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove('bg-emerald-600');
          form.reset();
        }, 2500);
      });
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId !== '#') {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }
          }
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();