// Shared functionality for all pages
document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart UI
  updateCartUI();
  
  
  // Initialize cart items rendering if on a page with cart
  const cartItemsContainer = document.querySelector('.cart-items-container');
  if (cartItemsContainer) {
    renderCartItems(cartItemsContainer);
  }
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const hamburgIcon = document.querySelector('.hamburg-icon');
  
  if (mobileMenuToggle && mainNav && hamburgIcon) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isActive = mainNav.classList.contains('active');
      hamburgIcon.src = isActive ? 'images/icon-close.svg' : 'images/icon-menu.svg';
    });
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburgIcon.src = 'images/icon-menu.svg';
      });
    });
  }
  
  // Cart toggle functionality
  const cartIconBtn = document.querySelector('.cart-icon-btn');
  const cartBasket = document.querySelector('.cartBasket');
  
  if (cartIconBtn && cartBasket) {
    cartIconBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (cartBasket.style.display === 'none' || cartBasket.style.display === '') {
        cartBasket.style.display = 'block';
      } else {
        cartBasket.style.display = 'none';
      }
    });
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      if (!cartBasket.contains(e.target) && !cartIconBtn.contains(e.target)) {
        cartBasket.style.display = 'none';
      }
    });
  }
  
});

