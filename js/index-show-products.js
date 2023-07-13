const productsGrid = document.querySelector('#products-grid');
const topProducts = products.slice(0, 6);
topProducts.forEach((product) => {
  const item = document.createElement('div');
  item.classList.add('product-item');
  item.innerHTML = `
    <a href="${product.link}">
    <img src="${product.image}" alt="${product.name}" class="products-img">
    </a>
    <p class="product-description">${product.description}</p>
    <p class="product-price">${product.price}</p>
    <button class="buy-now">Buy Now</button>
    <button class="add-to-cart"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
  `;
  productsGrid.appendChild(item);
});
