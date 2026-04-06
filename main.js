// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  updateCartCount();
  initHeader();
  initLangToggle();
  initMobileNav();
  renderHomePage();
});

function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    setLang(currentLang === 'jp' ? 'en' : 'jp');
    btn.textContent = currentLang === 'jp' ? 'JP / EN' : 'EN / JP';
    renderHomePage();
  });
}

function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

function renderHomePage() {
  const newGrid = document.getElementById('newArrivalsGrid');
  const rankGrid = document.getElementById('rankingGrid');
  if (!newGrid && !rankGrid) return;

  if (newGrid) {
    newGrid.innerHTML = '';
    PRODUCTS.filter(p => p.badge === 'new').slice(0, 4).forEach(p => newGrid.appendChild(createProductCard(p)));
  }
  if (rankGrid) {
    rankGrid.innerHTML = '';
    PRODUCTS.slice(0, 4).forEach((p, i) => rankGrid.appendChild(createProductCard(p, i + 1)));
  }
}
