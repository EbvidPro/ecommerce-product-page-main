// Products page functionality
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  
  if (!productsGrid) return;
  
  // Get category from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  // Check if we're on home page (index.html) or products page
  const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  
  // Filter products if category is specified
  let displayProducts = products;
  
  if (isHomePage) {
    // On home page, show only featured products (first 8)
    displayProducts = products.slice(0, 8);
  } else if (category) {
    // Filter by category
    displayProducts = products.filter(p => {
      const gender = p.gender || 'men';
      return gender.toLowerCase() === category.toLowerCase();
    });
  } else {
    // Show all products on products page
    displayProducts = products;
  }
  
  // Render products
  renderProducts(displayProducts);
});

function renderProducts(displayProducts) {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  displayProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement('a');
  card.href = `product.html?id=${product.id}`;
  card.className = 'product-card';
  
  // Check if product is in cart (any size)
  const isInCart = cart.some(item => item.id === product.id);
  const buttonText = isInCart ? '✓ Added to Cart' : 'Add to Cart';
  const buttonClass = isInCart ? 'product-card-button added' : 'product-card-button';
  
  const currentYear = new Date().getFullYear();
  const productYear = currentYear;
  
  card.innerHTML = `
    <div class="product-card-image-wrapper">
      <img src="${product.images[0]}" alt="${product.name}" class="product-card-image" />
    </div>
    <div class="product-card-info">
      <div class="product-card-header">
        <h2 class="product-card-name">${product.name}</h2>
        <p class="product-card-year">${productYear}</p>
      </div>
      <p class="product-card-brand">${product.brand}</p>
      <div class="product-card-footer">
        <div class="product-card-price">
          <span class="product-card-discount-price">$${product.discountPrice.toFixed(2)}</span>
          ${product.discount > 0 ? `
            <span class="product-card-original-price">$${product.price.toFixed(2)}</span>
          ` : ''}
        </div>
        <button class="${buttonClass}" data-product-id="${product.id}" onclick="addProductToCart(${product.id}, event)">
          ${isInCart ? `
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Added</span>
          ` : `
            <span>+</span>
            <span>Add to Cart</span>
          `}
        </button>
      </div>
    </div>
  `;
  
  return card;
}

function addProductToCart(productId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // If product has sizes, redirect to product detail page
  if (product.sizes && product.sizes.length > 0) {
    window.location.href = `product.html?id=${productId}`;
    return;
  }
  
  // Otherwise add directly to cart
  const success = addToCart(productId, 1, null);
  if (success) {
    // Update button to show "Added" state
    const button = event ? event.target.closest('.product-card-button') : null;
    if (button) {
      button.classList.add('added');
      button.innerHTML = `
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Added</span>
      `;
    }
  }
}

// Re-render products when cart updates (for when items are removed)
window.refreshProductCards = function() {
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    let displayProducts = products;
    if (category) {
      displayProducts = products;
    }
    renderProducts(displayProducts);
  }
};



