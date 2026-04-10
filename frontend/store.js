// ===== niji STORE DATA =====
const PRODUCTS = [
  { id:1, name:'コットンリブソックス レインボーエッジ', nameEn:'Cotton Rib Socks - Rainbow Edge', category:'ladies-cotton', gender:'ladies', material:'cotton', price:880, badge:'new', colors:['#f87171','#60a5fa','#4ade80','#fbbf24'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#fce7e7,#fff3e0)', desc:'厳選されたコットン100%を使用したリブソックス。足首部分のレインボーラインがさりげないアクセント。', descEn:'100% premium cotton rib socks. Rainbow accent stripe at the ankle for a subtle pop of color.' },
  { id:2, name:'シアーガラスソックス プリズム', nameEn:'Sheer Glass Socks - Prism', category:'ladies-glass', gender:'ladies', material:'glass', price:950, badge:'new', colors:['#f8f8f8','#e0d0e8','#c8dde8'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#e2eef5,#c8dde8)', desc:'夏の足元を美しく彩る透け感ガラスソックス。UV防止機能付きで快適な着用感。', descEn:'Beautiful sheer glass socks for summer. UV protection for comfortable all-day wear.' },
  { id:3, name:'シルクブレンドソックス ムーン', nameEn:'Silk Blend Socks - Moon', category:'ladies-silk', gender:'ladies', material:'silk', price:1200, badge:null, colors:['#f0e8f0','#e0d0e8','#2d2d2d'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#f0e8f0,#e0d0e8)', desc:'上質なシルクと綿の絶妙なブレンド。なめらかな肌触りと温度調整機能を兼ね備えた一足。', descEn:'Exquisite blend of silk and cotton. Smooth texture with natural temperature regulation.' },
  { id:4, name:'メッシュスニーカーソックス', nameEn:'Mesh Sneaker Socks', category:'ladies-cotton', gender:'ladies', material:'cotton', price:450, badge:'sale', originalPrice:680, colors:['#fff','#2d2d2d','#f87171'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#f8f8f8,#f0f0f0)', desc:'通気性抜群のメッシュ素材。スニーカーとのコーディネートに最適な浅履きタイプ。', descEn:'Breathable mesh construction. Low-cut style perfect for sneakers.' },
  { id:5, name:'メンズコットンビジネスソックス', nameEn:"Men's Cotton Business Socks", category:'mens-cotton', gender:'mens', material:'cotton', price:660, badge:'new', colors:['#2d2d2d','#555','#888','#fff'], sizes:['25-27','27-29'], bg:'linear-gradient(145deg,#f0f0f0,#e0e0e0)', desc:'ビジネスシーンに最適なシンプルで高品質なコットンソックス。耐久性と履き心地を両立。', descEn:'Simple, high-quality cotton socks for business. Durable and comfortable for all-day wear.' },
  { id:6, name:'メンズシルクタッチソックス ナイト', nameEen:"Men's Silk Touch Socks - Night", nameEn:"Men's Silk Touch Socks - Night", category:'mens-silk', gender:'mens', material:'silk', price:980, badge:null, colors:['#1a1a1a','#2d3436','#4a4a4a'], sizes:['25-27','27-29'], bg:'linear-gradient(145deg,#2d2d2d,#1a1a1a)', desc:'スーツスタイルを格上げするシルクタッチの高級ソックス。さりげない光沢感が上品。', descEn:'Premium silk-touch socks to elevate your suit style. Subtle sheen for a refined look.' },
  { id:7, name:'ギフトセット 3足入り にじ', nameEn:'Gift Set 3-Pair - Niji', category:'gift', gender:'unisex', material:'cotton', price:2400, badge:'gift', colors:['#f87171','#60a5fa','#4ade80'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#fce7e7,#eff6ff)', desc:'人気のコットンソックス3足セット。にじをイメージしたカラフルなギフトボックス入り。', descEn:'3-pair set of popular cotton socks in a colorful rainbow gift box. Perfect present.' },
  { id:8, name:'サマーレースガラスソックス', nameEn:'Summer Lace Glass Socks', category:'ladies-glass', gender:'ladies', material:'glass', price:780, badge:'new', colors:['#fff','#fce7e7','#f0e8f0'], sizes:['23-25','25-27'], bg:'linear-gradient(145deg,#fdf2f8,#fce7e7)', desc:'繊細なレース模様が美しい夏用ガラスソックス。女性らしさを引き立てる上品なデザイン。', descEn:'Delicate lace pattern glass socks for summer. Elegant design that enhances femininity.' },
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
    showToast(currentLang === 'jp' ? 'カートに追加しました' : 'Added to cart');
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
let currentLang = localStorage.getItem('niji_lang') || 'jp';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('niji_lang', lang);
  document.querySelectorAll('.jp').forEach(el => el.style.display = lang === 'jp' ? '' : 'none');
  document.querySelectorAll('.en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
}

// ===== UI HELPERS =====
function updateCartCount() {
  const el = document.getElementById('cartCount');
  if (el) el.textContent = Cart.count();
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function formatPrice(p) { return '¥' + p.toLocaleString(); }

function createProductCard(product, rank = null) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.onclick = () => window.location.href = `product.html?id=${product.id}`;

  const badge = rank
    ? `<div class="prod-rank ${rank<=3?'rank-'+rank:''}">${rank}</div>`
    : (product.badge ? `<div class="prod-badge ${product.badge}">${product.badge === 'new' ? 'NEW' : product.badge === 'sale' ? 'SALE' : 'GIFT'}</div>` : '');

  const priceHtml = product.originalPrice
    ? `<span class="original">${formatPrice(product.originalPrice)}</span>${formatPrice(product.price)}`
    : formatPrice(product.price);

  card.innerHTML = `
    <div class="prod-img-wrap">
      <div class="prod-img-placeholder" style="background:${product.bg}">
        <span style="font-size:11px;letter-spacing:2px;color:rgba(0,0,0,0.2)">${product.material.toUpperCase()}</span>
      </div>
      ${badge}
    </div>
    <p class="prod-name jp">${product.name}</p>
    <p class="prod-name en" style="display:${currentLang==='en'?'':'none'}">${product.nameEn}</p>
    <p class="prod-sub">${product.material.toUpperCase()} · ${product.gender === 'ladies' ? (currentLang==='jp'?'レディース':'Women') : product.gender === 'mens' ? (currentLang==='jp'?'メンズ':'Men') : (currentLang==='jp'?'ユニセックス':'Unisex')}</p>
    <div class="prod-price">${priceHtml}<span style="font-size:11px;color:#aaa;font-weight:400;margin-left:4px">(税込)</span></div>
    <button class="prod-add" onclick="event.stopPropagation();Cart.add(${product.id},'${product.sizes[0]}',1)">
      <span class="jp">カートに入れる</span>
      <span class="en" style="display:${currentLang==='en'?'':'none'}">Add to Cart</span>
    </button>
  `;
  return card;
}
