// Product page functionality for index.html (Fall Limited Edition Sneakers)
let currentImageIndex = 0;
const productId = 1; // Fall Limited Edition Sneakers
const product = products.find(p => p.id === productId);

if (!product) {
  console.error('Product not found');
}

document.addEventListener('DOMContentLoaded', () => {
  if (!product) return;
  
  setupImageNavigation();
  setupThumbnails();
  setupQuantityControls();
  setupAddToCart();
  setupModal();
});

function setupImageNavigation() {
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.previous');
  const mainImage = document.querySelector('.presentImage');
  
  if (nextBtn && product) {
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % product.images.length;
      if (mainImage) {
        mainImage.src = product.images[currentImageIndex];
        updateActiveThumbnail(currentImageIndex);
      }
    });
  }
  
  if (prevBtn && product) {
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
      if (mainImage) {
        mainImage.src = product.images[currentImageIndex];
        updateActiveThumbnail(currentImageIndex);
      }
    });
  }
}

function setupThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const mainImage = document.querySelector('.presentImage');
  
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      if (mainImage && product) {
        mainImage.src = product.images[index];
        updateActiveThumbnail(index);
      }
    });
  });
  
  // Set first thumbnail as active
  if (thumbnails.length > 0) {
    updateActiveThumbnail(0);
  }
}

function updateActiveThumbnail(index) {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.style.border = '3px solid var(--orange-color)';
      thumb.style.opacity = '0.6';
    } else {
      thumb.style.border = 'none';
      thumb.style.opacity = '1';
    }
  });
}

function setupQuantityControls() {
  let quantity = 1;
  const addBtn = document.querySelector('.add');
  const subBtn = document.querySelector('.sub');
  const quantityDisplay = document.querySelector('.value-in-cart');
  const discountValue = document.querySelector('.discount-value');
  const currentPrice = document.querySelector('.current-prize');
  
  if (addBtn && product) {
    addBtn.addEventListener('click', () => {
      quantity++;
      if (quantityDisplay) quantityDisplay.textContent = quantity;
      if (discountValue) {
        discountValue.textContent = `$${(product.discountPrice * quantity).toFixed(2)}`;
      }
      if (currentPrice) {
        currentPrice.textContent = `$${(product.price * quantity).toFixed(2)}`;
      }
    });
  }
  
  if (subBtn && product) {
    subBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        if (quantityDisplay) quantityDisplay.textContent = quantity;
        if (discountValue) {
          discountValue.textContent = `$${(product.discountPrice * quantity).toFixed(2)}`;
        }
        if (currentPrice) {
          currentPrice.textContent = `$${(product.price * quantity).toFixed(2)}`;
        }
      }
    });
  }
}

function setupAddToCart() {
  const addCartBtn = document.querySelector('.add-cart-btn');
  if (addCartBtn && product) {
    addCartBtn.addEventListener('click', () => {
      const quantity = parseInt(document.querySelector('.value-in-cart').textContent) || 1;
      addToCart(product.id, quantity);
      
      // Show feedback
      const originalHTML = addCartBtn.innerHTML;
      addCartBtn.innerHTML = '<p>✓ Added to Cart!</p>';
      addCartBtn.style.opacity = '0.7';
      setTimeout(() => {
        addCartBtn.innerHTML = originalHTML;
        addCartBtn.style.opacity = '';
      }, 2000);
    });
  }
}

function setupModal() {
  const mainImage = document.querySelector('.presentImage');
  const modal = document.querySelector('.imageModal');
  const closeModal = document.querySelector('.closeModal');
  const modalImage = document.querySelector('.modalPresentImage');
  const modalThumbnails = document.querySelector('.imageModal .thumbnails');
  const modalNext = document.querySelector('.modalNext');
  const modalPrev = document.querySelector('.modalPrevious');
  
  if (mainImage && modal && product) {
    mainImage.addEventListener('click', () => {
      if (modalImage) {
        modalImage.src = product.images[currentImageIndex];
        modal.style.display = 'block';
      }
    });
  }
  
  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  if (modalNext && product) {
    modalNext.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % product.images.length;
      if (modalImage) {
        modalImage.src = product.images[currentImageIndex];
      }
    });
  }
  
  if (modalPrev && product) {
    modalPrev.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
      if (modalImage) {
        modalImage.src = product.images[currentImageIndex];
      }
    });
  }
  
  // Close modal on background click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  // Modal thumbnail functions (keeping original onclick handlers)
  window.changeImage5 = function() {
    if (modalImage && product) modalImage.src = product.images[0];
    currentImageIndex = 0;
  };
  window.changeImage6 = function() {
    if (modalImage && product) modalImage.src = product.images[1];
    currentImageIndex = 1;
  };
  window.changeImage7 = function() {
    if (modalImage && product) modalImage.src = product.images[2];
    currentImageIndex = 2;
  };
  window.changeImage8 = function() {
    if (modalImage && product) modalImage.src = product.images[3];
    currentImageIndex = 3;
  };
}

// Keep original thumbnail functions for compatibility
window.changeImage1 = function() {
  const mainImage = document.querySelector('.presentImage');
  if (mainImage && product) {
    mainImage.src = product.images[0];
    currentImageIndex = 0;
    updateActiveThumbnail(0);
  }
};
window.changeImage2 = function() {
  const mainImage = document.querySelector('.presentImage');
  if (mainImage && product) {
    mainImage.src = product.images[1];
    currentImageIndex = 1;
    updateActiveThumbnail(1);
  }
};
window.changeImage3 = function() {
  const mainImage = document.querySelector('.presentImage');
  if (mainImage && product) {
    mainImage.src = product.images[2];
    currentImageIndex = 2;
    updateActiveThumbnail(2);
  }
};
window.changeImage4 = function() {
  const mainImage = document.querySelector('.presentImage');
  if (mainImage && product) {
    mainImage.src = product.images[3];
    currentImageIndex = 3;
    updateActiveThumbnail(3);
  }
};

