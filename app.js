document.querySelectorAll('.max-w-\\[1200px\\].overflow-x-auto .min-w-\\[160px\\].border.rounded-lg').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function () {
    const img = card.querySelector('img');
    if (img) {
      localStorage.setItem('selectedProductImg', img.getAttribute('src'));
    }
    window.location.href = 'product.html';
  });
});

document.querySelectorAll('.bg-white.rounded-lg').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', function () {
    const img = card.querySelector('img');
    if (img) {
      localStorage.setItem('selectedProductImg', img.getAttribute('src'));
    }
    window.location.href = 'product.html';
  });
  const btn = card.querySelector('button');
  if (btn) {
    btn.addEventListener('click', function(e) {
      e.stopOpen();
    });
  }
});