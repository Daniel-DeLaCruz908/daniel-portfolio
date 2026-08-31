const button = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

button.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    button.textContent = nav.classList.contains('nav-open') ? 'x' : '☰';
});

nav.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    button.textContent = nav.classList.contains('nav-open') ? 'x' : '☰';
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      document.querySelectorAll('nav a').forEach(function(link) {
        link.classList.remove('active-link');
      });
      const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active-link');
      }
    }
  });
}, {
  threshold: 0.6 
});

sections.forEach(function(section) {
  observer.observe(section);
});

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  autoHeight: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
})