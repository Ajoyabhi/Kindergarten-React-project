import 'owl.carousel';
import WOW from 'wowjs';

export function initScripts() {
  // Initiate the wowjs
  new WOW.WOW().init(); 

  // Spinner
  const spinner = () => {
    setTimeout(() => {
      const spinnerElement = document.getElementById('spinner');
      if (spinnerElement) {
        spinnerElement.classList.remove('show');
      }
    }, 1);
  };
  spinner();

  // Sticky Navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.sticky-top');
    if (window.scrollY > 300) {
      if (navbar) {
        navbar.classList.add('shadow-sm');
        navbar.style.top = '0px';
      }
    } else {
      if (navbar) {
        navbar.classList.remove('shadow-sm');
        navbar.style.top = '-100px';
      }
    }
  });

  // Back to top button
  window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      if (backToTopButton) {
        backToTopButton.style.display = 'block';
      }
    } else {
      if (backToTopButton) {
        backToTopButton.style.display = 'none';
      }
    }
  });

  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize owl carousels using jQuery
  const headerCarousel = document.querySelector('.header-carousel');
  if (headerCarousel) {
    $(headerCarousel).owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
    });
  }

  const testimonialCarousel = document.querySelector('.testimonial-carousel');
  if (testimonialCarousel) {
    $(testimonialCarousel).owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      margin: 24,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class "bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    });
  }
}
