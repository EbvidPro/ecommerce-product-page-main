// Product detail page functionality
let currentProduct = null;
let currentImageIndex = 0;
let selectedSize = null;
let selectedColor = null;

document.addEventListener('DOMContentLoaded', () => {
  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id')) || 1;
  
  // Find product
  currentProduct = products.find(p => p.id === productId);
  
  if (!currentProduct) {
    // Redirect to home page if product not found
    window.location.href = 'index.html';
    return;
  }
  
  // Reset selections when loading new product
  selectedSize = null;
  selectedColor = null;
  
  // Render breadcrumbs
  renderBreadcrumbs(currentProduct);
  
  // Render product
  renderProduct(currentProduct);
  
  // Setup image navigation
  setupImageNavigation();
  
  // Setup modal
  setupModal();
});

function renderBreadcrumbs(product) {
  const breadcrumbsContainer = document.getElementById('breadcrumbs');
  if (!breadcrumbsContainer) return;
  
  const categoryMap = {
    'sneakers': 'Shoes',
    'running': 'Shoes',
    'boots': 'Shoes',
    'training': 'Shoes',
    'basketball': 'Shoes',
    'casual': 'Shoes',
    'tennis': 'Shoes',
    'skateboarding': 'Shoes',
    'golf': 'Shoes',
    'soccer': 'Shoes',
    'cycling': 'Shoes',
    'dress': 'Shoes',
    'hiking': 'Shoes'
  };
  
  const category = categoryMap[product.category] || 'Shoes';
  
  breadcrumbsContainer.innerHTML = `
    <a href="index.html">Clothes and shoes</a>
    <span class="breadcrumb-separator">></span>
    <a href="products.html">${category}</a>
    <span class="breadcrumb-separator">></span>
    <span class="breadcrumb-current">${product.brand}</span>
  `;
}

function renderProduct(product) {
  const productSection = document.getElementById('productSection');
  if (!productSection) return;
  
  // Generate product ID (e.g., HR1325R0O--8)
  const productCode = `HR${String(product.id).padStart(3, '0')}R0O--${product.id}`;
  
  // Default colors - you can extend this based on product data
  const availableColors = ['White', 'Grey', 'Black'];
  const colorCodes = {
    'White': '#FFFFFF',
    'Grey': '#808080',
    'Black': '#000000'
  };
  
  // Show first 4 thumbnails, indicate if more exist
  const visibleThumbnails = product.thumbnails.slice(0, 4);
  const moreCount = Math.max(0, product.thumbnails.length - 4);
  
  productSection.innerHTML = `
    <div class="image-section">
      <div class="currentImage">
        <div class="prev">
          <img src="images/icon-previous.svg" alt="previous" class="previous" />
        </div>
        <div class="nex">
          <img src="images/icon-next.svg" alt="next" class="next" />
        </div>
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          class="presentImage"
        />
      </div>
      <div class="thumbnails-wrapper">
        <div class="thumbnails" id="productThumbnails">
          ${visibleThumbnails.map((thumb, index) => `
            <img
              src="${thumb}"
              alt="thumbnail ${index + 1}"
              class="thumbnail-img"
              data-index="${index}"
            />
          `).join('')}
        </div>
        ${moreCount > 0 ? `<span class="more-thumbnails">+${moreCount} more</span>` : ''}
      </div>
    </div>
    <div class="productInformation">
      <div class="info">
        <p class="infoTitle">${product.brand}</p>
        <p class="product-id">${productCode}</p>
        <h1>${product.name}</h1>
        <div class="rating-section">
          <div class="stars">
            ${Array(5).fill(0).map(() => `
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            `).join('')}
          </div>
          <span class="review-count">42 reviews</span>
        </div>
        <div class="price-section">
          <p class="discount-value">$${product.discountPrice.toFixed(2)}</p>
          ${product.discount > 0 ? `<p class="current-prize">$${product.price.toFixed(2)}</p>` : ''}
        </div>
        <p class="product-description">${product.description}</p>
      </div>
      
      ${availableColors.length > 0 ? `
        <div class="color-selection">
          <p class="color-label">Color <span class="selected-color-name" id="selectedColorName">${availableColors[0]}</span></p>
          <div class="color-options">
            ${availableColors.map(color => `
              <button 
                class="color-option ${color === availableColors[0] ? 'active' : ''}" 
                data-color="${color}"
                style="background-color: ${colorCodes[color]}; border: 2px solid ${color === availableColors[0] ? '#000' : '#ddd'};"
                aria-label="${color}"
              ></button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      ${product.sizes && product.sizes.length > 0 ? `
        <div class="size-selection">
          <div class="size-header">
            <p class="size-label">Size EU Men</p>
            <a href="#size-guide" class="size-guide-link">Size guide</a>
          </div>
          <div class="size-options-grid">
            ${product.sizes.map(size => `
              <button class="size-option" data-size="${size}">${size}</button>
            `).join('')}
          </div>
          <p class="size-error" id="sizeError" style="display: none;">Please select a size</p>
        </div>
      ` : ''}
      
      <div class="action-buttons">
        <button class="add-cart-btn">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
      
      <div class="delivery-info">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
        <span>Free delivery on orders over $30.0</span>
      </div>
    </div>
  `;
  
  // Setup color selection
  setupColorSelection(availableColors);
  
  // Setup size selection
  setupSizeSelection(product);
  
  // Setup add to cart
  setupAddToCart(product);
  
  // Update button state based on current cart
  updateAddToCartButton(product);
  
  // Setup thumbnail clicks
  setupThumbnails();
}

function setupColorSelection(colors) {
  const colorOptions = document.querySelectorAll('.color-option');
  const selectedColorName = document.getElementById('selectedColorName');
  
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      colorOptions.forEach(opt => {
        opt.classList.remove('active');
        opt.style.borderColor = '#ddd';
      });
      
      option.classList.add('active');
      option.style.borderColor = '#000';
      selectedColor = option.getAttribute('data-color');
      
      if (selectedColorName) {
        selectedColorName.textContent = selectedColor;
      }
      
      // Update button state when color changes
      if (currentProduct) {
        updateAddToCartButton(currentProduct);
      }
    });
  });
  
  // Set first color as selected
  if (colors.length > 0) {
    selectedColor = colors[0];
  }
}

function setupSizeSelection(product) {
  if (!product.sizes || product.sizes.length === 0) return;
  
  const sizeOptions = document.querySelectorAll('.size-option');
  const sizeError = document.getElementById('sizeError');
  
  sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove active class from all options
      sizeOptions.forEach(opt => opt.classList.remove('active'));
      // Add active class to clicked option
      option.classList.add('active');
      selectedSize = option.getAttribute('data-size');
      
      if (sizeError) {
        sizeError.style.display = 'none';
      }
      
      // Update button state when size changes
      if (currentProduct) {
        updateAddToCartButton(currentProduct);
      }
    });
  });
}

function updateAddToCartButton(product) {
  const addCartBtn = document.querySelector('.add-cart-btn');
  if (!addCartBtn) return;
  
  // Check if size is required and selected
  const requiresSize = product.sizes && product.sizes.length > 0;
  if (requiresSize && !selectedSize) {
    // Size not selected yet, show normal add to cart
    addCartBtn.innerHTML = `
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
      <span>Add to cart</span>
    `;
    addCartBtn.classList.remove('in-cart');
    return;
  }
  
  // Check if this exact product (same size and color) is already in cart
  const cartQuantity = getCartItemQuantity(product.id, selectedSize, selectedColor);
  
  if (cartQuantity > 0) {
    // Item already in cart, show quantity
    addCartBtn.innerHTML = `
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
      <span>In Cart (${cartQuantity})</span>
    `;
    addCartBtn.classList.add('in-cart');
  } else {
    // Not in cart, show normal add to cart
    addCartBtn.innerHTML = `
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
      <span>Add to cart</span>
    `;
    addCartBtn.classList.remove('in-cart');
  }
}

function setupAddToCart(product) {
  const addCartBtn = document.querySelector('.add-cart-btn');
  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      // Check if size is required and selected
      if (product.sizes && product.sizes.length > 0 && !selectedSize) {
        const sizeError = document.getElementById('sizeError');
        if (sizeError) {
          sizeError.style.display = 'block';
        }
        return;
      }
      
      // Check if already in cart with same size and color
      const cartQuantity = getCartItemQuantity(product.id, selectedSize, selectedColor);
      
      if (cartQuantity > 0) {
        // Already in cart, just increase quantity
        const quantity = 1;
        const success = addToCart(product.id, quantity, selectedSize, selectedColor);
        if (success) {
          updateAddToCartButton(product);
          updateCartUI();
        }
        return;
      }
      
      // Not in cart, add it
      const quantity = 1;
      const success = addToCart(product.id, quantity, selectedSize, selectedColor);
      
      if (success) {
        // Show feedback
        const originalHTML = addCartBtn.innerHTML;
        addCartBtn.innerHTML = '<span>✓ Added to Cart!</span>';
        addCartBtn.style.opacity = '0.8';
        setTimeout(() => {
          updateAddToCartButton(product);
          addCartBtn.style.opacity = '';
        }, 2000);
        updateCartUI();
      }
    });
  }
}

function setupThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnail-img');
  const mainImage = document.querySelector('.presentImage');
  
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      if (mainImage && currentProduct) {
        mainImage.src = currentProduct.images[index];
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
  const thumbnails = document.querySelectorAll('.thumbnail-img');
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.style.border = '2px solid #000';
      thumb.style.opacity = '1';
    } else {
      thumb.style.border = '2px solid transparent';
      thumb.style.opacity = '0.7';
    }
  });
}

function setupImageNavigation() {
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.previous');
  const mainImage = document.querySelector('.presentImage');
  
  if (nextBtn && currentProduct) {
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
      if (mainImage) {
        mainImage.src = currentProduct.images[currentImageIndex];
        updateActiveThumbnail(currentImageIndex);
      }
    });
  }
  
  if (prevBtn && currentProduct) {
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
      if (mainImage) {
        mainImage.src = currentProduct.images[currentImageIndex];
        updateActiveThumbnail(currentImageIndex);
      }
    });
  }
}

function setupModal() {
  const mainImage = document.querySelector('.presentImage');
  const modal = document.querySelector('.imageModal');
  const closeModal = document.querySelector('.closeModal');
  const modalImage = document.querySelector('.modalPresentImage');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const modalNext = document.querySelector('.modalNext');
  const modalPrev = document.querySelector('.modalPrevious');
  
  if (mainImage && modal) {
    mainImage.addEventListener('click', () => {
      if (currentProduct) {
        modalImage.src = currentProduct.images[currentImageIndex];
        modal.style.display = 'block';
        
        // Render modal thumbnails
        if (modalThumbnails) {
          modalThumbnails.innerHTML = currentProduct.thumbnails.map((thumb, index) => `
            <img
              src="${thumb}"
              alt="thumbnail ${index + 1}"
              onclick="changeModalImage(${index})"
            />
          `).join('');
        }
      }
    });
  }
  
  if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  if (modalNext && currentProduct) {
    modalNext.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % currentProduct.images.length;
      if (modalImage) {
        modalImage.src = currentProduct.images[currentImageIndex];
      }
    });
  }
  
  if (modalPrev && currentProduct) {
    modalPrev.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + currentProduct.images.length) % currentProduct.images.length;
      if (modalImage) {
        modalImage.src = currentProduct.images[currentImageIndex];
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
}

function changeModalImage(index) {
  const modalImage = document.querySelector('.modalPresentImage');
  if (modalImage && currentProduct) {
    currentImageIndex = index;
    modalImage.src = currentProduct.images[index];
  }
}
