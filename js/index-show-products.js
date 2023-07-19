const productsGrid = document.querySelector('#products-grid');
const topProducts = products.slice(0, 15);
topProducts.forEach((product) => {
  const item = document.createElement('div');
  item.classList.add('product');
  item.innerHTML = `
    <a href="${product.link}">
    <img src="${product.image}" alt="${product.name}" class="products-img">
    </a>
    <p class="product-description">${product.description}</p>
    <p class="product-price"> ${product.price}</p>
`;
  productsGrid.appendChild(item);
});
