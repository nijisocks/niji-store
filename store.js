// ===== niji STORE DATA =====
const PRODUCTS = [
  { 
    id: 1, 
    name: '精梳棉羅紋襪 - 彩虹邊', 
    nameTC: '精梳棉羅紋襪 - 彩虹邊',
    nameJP: 'コットンリブソックス レインボーエッジ', 
    nameEn: 'Cotton Rib Socks - Rainbow Edge', 
    category: 'ladies-cotton', 
    gender: 'ladies', 
    material: 'cotton', 
    price: 880, 
    badge: 'new', 
    colors: ['#f87171','#60a5fa','#4ade80','#fbbf24'], 
    sizes: ['23-25','25-27'], 
    img: 'https://sc02.alicdn.com/kf/H946a48d8b3824a39abe06dca7dc098755.png', // Placeholder or real KJ246
    bg: '#fdfaf8', 
    descTC: '嚴選100%精梳棉製作，羅紋編織工法提供極致彈性與透氣感。足踝處的彩虹邊線，為日常穿搭增添一抹精緻的生命力。',
    descJP: '厳選されたコットン100%を使用したリブソックス。足首部分のレインボーラインがさりげないアクセント。', 
    descEn: '100% premium cotton rib socks. Rainbow accent stripe at the ankle for a subtle pop of color.' 
  },
  { 
    id: 2, 
    name: '透明網紗襪 - 稜鏡系列', 
    nameTC: '透明網紗襪 - 稜鏡系列',
    nameJP: 'シアーガラスソックス プリズム', 
    nameEn: 'Sheer Glass Socks - Prism', 
    category: 'ladies-glass', 
    gender: 'ladies', 
    material: 'glass', 
    price: 950, 
    badge: 'new', 
    colors: ['#f8f8f8','#e0d0e8','#c8dde8'], 
    sizes: ['23-25','25-27'], 
    img: 'https://sc02.alicdn.com/kf/H946a48d8b3824a39abe06dca7dc098755.png',
    bg: '#fdfaf8', 
    descTC: '專為夏日設計的透氣網紗材質，輕盈如翼。防紫外線功能與舒適的編織工藝，讓美感與機能並存。',
    descJP: '夏の足元を美しく彩る透け感ガラスソックス。UV防止機能付きで快適な着用感。', 
    descEn: 'Beautiful sheer glass socks for summer. UV protection for comfortable all-day wear.' 
  },
  { 
    id: 3, 
    name: '真絲混紡襪 - 月影系列', 
    nameTC: '真絲混紡襪 - 月影系列',
    nameJP: 'シルクブレンドソックス ムーン', 
    nameEn: 'Silk Blend Socks - Moon', 
    category: 'ladies-silk', 
    gender: 'ladies', 
    material: 'silk', 
    price: 1200, 
    badge: null, 
    colors: ['#f0e8f0','#e0d0e8','#2d2d2d'], 
    sizes: ['23-25','25-27'], 
    img: 'https://sc02.alicdn.com/kf/H946a48d8b3824a39abe06dca7dc098755.png',
    bg: '#fdfaf8', 
    descTC: '上質真絲與棉的完美比例。極致柔滑的觸感與天然的溫度調節功能，呵護您的每一寸肌膚。',
    descJP: '上質なシルクと綿の絶妙なブレンド。なめらかな肌触りと温度調整機能を兼ね備えた一足。', 
    descEn: 'Exquisite blend of silk and cotton. Smooth texture with natural temperature regulation.' 
  },
  { 
    id: 4, 
    name: '超淺口網眼隱形襪', 
    nameTC: '超淺口網眼隱形襪',
    nameJP: 'メッシュスニーカーソックス', 
    nameEn: 'Mesh Sneaker Socks', 
    category: 'ladies-cotton', 
    gender: 'ladies', 
    material: 'cotton', 
    price: 450, 
    badge: 'sale', 
    originalPrice: 680, 
    colors: ['#fff','#2d2d2d','#f87171'], 
    sizes: ['23-25','25-27'], 
    img: 'https://sc02.alicdn.com/kf/H946a48d8b3824a39abe06dca7dc098755.png',
    bg: '#fdfaf8', 
    descTC: '透氣性極佳的網眼編織。適合運動鞋與平底鞋的超淺口設計，配合矽膠防滑墊，行走時更安心。',
    descJP: '通気性抜群のメッシュ素材。スニーカーとのコーディネートに最適な浅履きタイプ。', 
    descEn: 'Breathable mesh construction. Low-cut style perfect for sneakers.' 
  }
];

// ===== CART =====
const Cart = {
  get() { return JSON.parse(localStorage.getItem('niji_cart') || '[]'); },
  save(items) { localStorage.setItem('niji_cart', JSON.stringify(items)); },
  add(productId, size, qty = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === productId && i.size === size);
    if (existing) { existing.qty += qty; } else { items.push({ id: productId, size, qty }); }
    this.save(items);
    updateCartCount();
    showToast(currentLang === 'tc' ? '已加入購物車' : (currentLang === 'jp' ? 'カートに追加しました' : 'Added to cart'));
  },
  remove(productId, size) {
    const items = this.get().filter(i => !(i.id === productId && i.size === size));
    this.save(items);
    updateCartCount();
  },
  total() {
    return this.get().reduce((sum, item) => {
      const p = PRODUCTS.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },
  count() { return this.get().reduce((sum, i) => sum + i.qty, 0); }
};

// ===== LANGUAGE =====
let currentLang = localStorage.getItem('niji_lang') || 'tc';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('niji_lang', lang);
  document.querySelectorAll('.tc').forEach(el => el.style.display = lang === 'tc' ? '' : 'none');
  document.querySelectorAll('.jp').forEach(el => el.style.display = lang === 'jp' ? '' : 'none');
  document.querySelectorAll('.en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
  
  // Update switcher UI
  document.querySelectorAll('.lang-switcher span').forEach(span => {
    span.classList.toggle('active', span.textContent.toLowerCase() === lang);
  });
}

// ===== UI HELPERS =====
function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = Cart.count();
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) { 
    toast = document.createElement('div'); 
    toast.id = 'toast'; 
    toast.className = 'toast'; 
    document.body.appendChild(toast); 
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function formatPrice(p) { return '¥' + p.toLocaleString(); }

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal active';
  card.onclick = () => window.location.href = `product.html?id=${product.id}`;

  const badge = product.badge ? `<div class="prod-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : '';
  const priceHtml = product.originalPrice
    ? `<span class="original">${formatPrice(product.originalPrice)}</span>${formatPrice(product.price)}`
    : formatPrice(product.price);

  const name = currentLang === 'tc' ? product.nameTC : (currentLang === 'jp' ? product.nameJP : product.nameEn);

  card.innerHTML = `
    <div class="div-img-wrap" style="background:${product.bg}">
      <img src="${product.img}" alt="${name}" loading="lazy">
      ${badge}
    </div>
    <div class="prod-info" style="text-align:left; padding:0 10px;">
      <p class="div-label" style="font-size:9px; margin-bottom:5px;">${product.material.toUpperCase()} Collection</p>
      <h4 style="font-size:16px; font-weight:400; margin-bottom:10px; font-family:var(--font-serif);">${name}</h4>
      <div class="prod-price" style="font-size:14px; font-weight:500;">${priceHtml} <span style="font-size:10px; color:#999; font-weight:400;">(税込)</span></div>
    </div>
  `;
  return card;
}
