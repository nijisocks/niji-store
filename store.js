// ===== niji-goods Product Data (12 Curated Items - Verified Rationality) =====
const PRODUCTS = [
  // CATEGORY: ladies-cotton (4)
  { 
    id: 1, 
    nameTC: '精梳棉羅紋襪 - 彩虹邊',
    nameJP: 'プレミアムコットン リブソックス', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 880, 
    badge: 'new', 
    colors: ['#F7F7F7','#2D2D2D','#E5D3C5'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1582966298636-a1d08b302e0c?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '嚴選100%精梳棉製作，羅紋編織工法提供極致彈性與透氣感。足踝處的彩虹邊線，為日常穿搭增添一抹精緻的生命力。',
    descJP: '厳選されたプレミアムコットンを使用したリブソックス。柔らかい肌触りと優れた伸縮性が、日常に小さな彩りを添えます。' 
  },
  { 
    id: 4, 
    nameTC: '有機棉減壓短襪',
    nameJP: 'オーガニックコットン ショート', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 650, 
    colors: ['#fff','#f5f5dc'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1588350164807-6b4d3f5728a4?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '無染色有機棉，保留自然的純淨觸感。減壓束口設計，讓長時間穿著也毫無束縛感。',
    descJP: '無染色のオーガニックコットンを使用。肌への優しさを第一に考え、締め付けを抑えた設計に仕上げました。' 
  },
  { 
    id: 7, 
    nameTC: '每日精選五色套組',
    nameJP: 'デイリーコットン 5色セット', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 980, 
    badge: 'popular', 
    colors: ['#f87171','#60a5fa','#4ade80','#fbbf24','#1a1a1a'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '五種大地色系，應對一週的優雅。舒適耐穿，是回購率最高的基本款。',
    descJP: '毎日のコーディネートに寄り添う5色セット。耐久性と履き心地の良さを両立した定番アイテムです。' 
  },
  { 
    id: 10, 
    nameTC: '輕盈透氣網眼襪',
    nameJP: 'メッシュコンフォート', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 580, 
    colors: ['#fff','#2d2d2d'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1540919137976-43b9e4a32777?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '大網眼編織工法，極致透氣。即使在潮濕悶熱的夏季，足部依然能自由呼吸。',
    descJP: '通気性を極限まで高めたメッシュ編みを採用。蒸れにくく、夏場でもさらりと快適な足元を保ちます。' 
  },

  // CATEGORY: ladies-silk (4)
  { 
    id: 2, 
    nameTC: '真絲混紡月影襪',
    nameJP: 'シルクブレンド ムーンライト', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 1200, 
    badge: 'new', 
    colors: ['#f0e8f0','#e0d0e8','#2d2d2d'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1590736704728-f4730bb3c370?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '上質真絲與棉的完美比例。極致柔滑的觸感與天然的溫度調節功能，呵護您的每一寸肌膚。',
    descJP: '上質なシルクをブレンドした贅沢な一足。吸湿性と放湿性に優れ、季節を問わず滑らかな肌触りを楽しめます。' 
  },
  { 
    id: 5, 
    nameTC: '光澤真絲居家襪',
    nameJP: '艶シルク ルームソックス', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 950, 
    colors: ['#fff','#f8f8f8'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1627255194483-33bc0f49c593?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '如月光般的柔和光澤。適合在靜謐的夜晚，與一本書和一杯茶共度。',
    descJP: 'シルク特有の光沢が美しいルームソックス。静かな夜のリラックスタイムに、至福の柔らかさを。' 
  },
  { 
    id: 8, 
    nameTC: '蠶絲足底防護襪',
    nameJP: 'シルク フットケアガード', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 780, 
    colors: ['#fff','#f5f5dc'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1591143825313-757876e27402?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '高純度蠶絲材質，自動調節溫濕度。不僅是配件，更是對足部的深度保養。',
    descJP: '高純度シルクを使用したフットケアソックス。保湿性に優れ、乾燥から足元を優しく守ります。' 
  },
  { 
    id: 11, 
    nameTC: '絲滑網面半掌襪',
    nameJP: 'シルキー 5本指ハーフ', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 520, 
    colors: ['#fff','#2d2d2d'], 
    sizes: ['free'], 
    img: 'https://images.unsplash.com/photo-1589133465492-49f96b27e8a9?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '針對指縫與足尖的精緻呵護。透氣真絲材質，完美隱藏於各種鞋型之中。',
    descJP: 'デリケートな指先の蒸れを防ぐシルクハーフソックス。重ね履きのインナーとしても最適です。' 
  },

  // CATEGORY: ladies-glass (4)
  { 
    id: 3, 
    nameTC: '稜鏡系列透明襪',
    nameJP: 'シアーガラス プリズム', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 850, 
    badge: 'new', 
    colors: ['#f8f8f8','#e0d0e8','#c8dde8'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1560529870-1efc5a43990f?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '輕盈如翼的透明網紗，折射出粼粼光影。讓腳步在都市穿梭中，依然優雅朦朧。',
    descJP: '光を透過する繊細なシアー素材。都会的なスタイリングに、透明感という新しい彩りを与えます。' 
  },
  { 
    id: 6, 
    nameTC: '復古刺繡透膚襪',
    nameJP: 'ヴィンテージ刺繍 シアー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 920, 
    colors: ['#2d2d2d','#fff'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1543039625-14bc3f87362b?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '精緻的復古刺繡圖騰，點綴在透明感織物上。散發如藝術品般的收藏價值。',
    descJP: 'アンティークのような気品漂う刺繍シアーソックス。足元をエレガントに、芸術的に演出します。' 
  },
  { 
    id: 9, 
    nameTC: '波點幾何網紗襪',
    nameJP: 'ドットシアー ジオメトリー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 720, 
    colors: ['#2d2d2d','#f87171'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1521404063623-6363c3290633?auto=format&fit=crop&q=80&w=1200', 
    bg: '#fdfaf8', 
    descTC: '靈動的波點設計，與透明底色形成俏皮對比。為優雅的裙裝增添一份靈動感。',
    descJP: '遊び心あふれるドット柄のシアーソックス。軽快な足取りを演出し、コーディネートのアクセントに。' 
  },
  { 
    id: 12, 
    nameTC: '極簡透明邊界襪',
    nameJP: 'ミニマル ボーダーシアー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 680, 
    colors: ['#fff','#999'], 
    sizes: ['23-25cm'], 
    img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&q=80&w=1200', 
    bg: '#f7f7f7', 
    descTC: '無邊界的極簡設計，與膚色完美融合。追求「若有似無」的終極質感體驗。',
    descJP: '境界線のない極限のミニマリズム。履いていることを忘れるような、究極の透明感。' 
  }
];

// ===== CORE LOGIC =====
let currentLang = localStorage.getItem('niji_lang') || 'jp';

const Cart = {
  get() { return JSON.parse(localStorage.getItem('niji_cart') || '[]'); },
  save(items) { localStorage.setItem('niji_cart', JSON.stringify(items)); },
  add(productId, size, qty = 1) {
    const items = this.get();
    const existing = items.find(i => i.id === productId && i.size === size);
    if (existing) { existing.qty += qty; } else { items.push({ id: productId, size, qty }); }
    this.save(items);
    updateCartCount();
    showToast(currentLang === 'tc' ? '已加入購物車' : 'カートに追加しました');
  },
  count() { return this.get().reduce((sum, i) => sum + i.qty, 0); }
};

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('niji_lang', lang);
  document.body.setAttribute('lang', lang === 'tc' ? 'zh-Hant' : 'ja');
  
  // UI Switcher Sync
  document.querySelectorAll('.lang-switcher span').forEach(span => {
    span.classList.toggle('active', span.getAttribute('data-lang') === lang);
  });
  
  // Content Refresher
  const grid = document.getElementById('productGrid');
  if (grid) {
    if (typeof applyFilter === 'function') applyFilter(); 
    else {
      grid.innerHTML = '';
      PRODUCTS.forEach(p => grid.appendChild(createProductCard(p)));
    }
  }
  
  // Static Texts
  document.querySelectorAll('[data-tc]').forEach(el => {
    el.textContent = lang === 'tc' ? el.getAttribute('data-tc') : el.getAttribute('data-jp');
  });
}

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
  card.className = 'div-card reveal active';
  card.onclick = () => window.location.href = `product.html?id=${product.id}`;

  const badge = product.badge ? `<div class="prod-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : '';
  const name = currentLang === 'tc' ? product.nameTC : product.nameJP;

  card.innerHTML = `
    <div class="div-img-wrap" style="background:${product.bg}">
      <img src="${product.img}" alt="${name}" loading="lazy">
      ${badge}
    </div>
    <div class="prod-info" style="text-align:left; padding:15px 5px;">
      <p class="section-label" style="font-size:9px; margin-bottom:5px;">${product.material.toUpperCase()} Collection</p>
      <h4 style="font-size:16px; font-weight:400; margin-bottom:12px; font-family:var(--font-serif);">${name}</h4>
      <div class="prod-price" style="font-size:14px; font-weight:500;">${formatPrice(product.price)} <span style="font-size:9px; color:#999; font-weight:400;">(税込)</span></div>
    </div>
  `;
  return card;
}
