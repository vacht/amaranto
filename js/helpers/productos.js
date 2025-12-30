export function productos() {
  const buttons = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-card');

  if (!buttons.length || !products.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      products.forEach(product => {
        const category = product.dataset.category;

        if (filter === 'all' || category === filter) {
          product.classList.remove('hidden');
        } else {
          product.classList.add('hidden');
        }
      });
    });
  });

  console.log('Productos inicializado ✅');
}
