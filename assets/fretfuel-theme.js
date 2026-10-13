document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('mega-menu');
  const toggles = document.querySelectorAll('[data-menu-toggle]');
  const setMenu = open => {
    if (!menu) return;
    menu.hidden = !open;
    toggles.forEach(button => button.setAttribute('aria-expanded', String(open)));
  };
  toggles.forEach(button => button.addEventListener('click', () => setMenu(menu.hidden)));
  document.querySelector('[data-menu-close]')?.addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => {
    if (menu && !menu.hidden && !event.target.closest('.shop-header')) setMenu(false);
  });

  const variantSelect = document.getElementById('ProductVariant');
  const productPrice = document.querySelector('.ff-product-copy .detail-price');
  variantSelect?.addEventListener('change', () => {
    const option = variantSelect.selectedOptions[0];
    if (productPrice && option?.dataset.price) productPrice.textContent = option.dataset.price;
  });
});
