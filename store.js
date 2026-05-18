// ===== niji STORE DATA (Expanded to 12 items for niji-goods) =====
const PRODUCTS = [
  // ladies-cotton (4)
  { 
    id: 1, 
    nameTC: '精梳棉羅紋襪 - 彩虹邊',
    nameJP: 'コットンリブソックス レインボーエッジ', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 880, 
    badge: 'new', 
    colors: ['#f87171','#60a5fa','#4ade80','#fbbf24'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1582966298636-a1d08b302e0c?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '嚴選100%精梳棉，以柔軟的質感包裹足尖。踝處的彩虹邊線，如同雨後放晴的心情。',
    descJP: '厳選されたコットン100%を使用したリブソックス。足首部分のレインボーラインがアクセント。' 
  },
  { 
    id: 4, 
    nameTC: '有機棉舒壓短襪',
    nameJP: 'オーガニックコットン ショートソックス', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 650, 
    badge: null, 
    colors: ['#fff','#f5f5dc','#e5e5e5'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1606822472851-419b7d8d47b1?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '無染色有機棉，保留自然的純淨觸感。減壓束口設計，讓長時間穿著也毫無束縛感。',
    descJP: '無染色のオーガニックコットン。肌への優しさを第一に考えた、締め付けないデザイン。' 
  },
  { 
    id: 7, 
    nameTC: '每日精選五色套組',
    nameJP: 'デイリー5色セット', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 980, 
    badge: 'sale', 
    originalPrice: 1280,
    colors: ['#f87171','#60a5fa','#4ade80','#fbbf24','#1a1a1a'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '五種大地色系，應對一週的優雅。舒適耐穿，是回購率最高的基本款。',
    descJP: '5色のアースカラーセット。毎日のコーディネートに寄り添う、リピーター続出の定番。' 
  },
  { 
    id: 10, 
    nameTC: '輕盈透氣網眼襪',
    nameJP: '軽量メッシュソックス', 
    category: 'ladies-cotton', 
    material: 'cotton', 
    price: 580, 
    badge: null, 
    colors: ['#fff','#2d2d2d'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1590736704728-f4730bb3c370?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '大網眼編織工法，極致透氣。即使在潮濕悶熱的夏季，足部依然能自由呼吸。',
    descJP: '通気性に優れたメッシュ編み。夏でもムレにくく、さらりとした履き心地。' 
  },

  // ladies-silk (4)
  { 
    id: 2, 
    nameTC: '真絲混紡月影襪',
    nameJP: 'シルクブレンド ムーンライト', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 1200, 
    badge: 'popular', 
    colors: ['#f0e8f0','#e0d0e8','#2d2d2d'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '上質真絲與棉的完美比例。極致柔滑的觸感，呵護肌膚的每一寸敏感。',
    descJP: '上質なシルクと綿の絶妙なブレンド。なめらかな肌触りと温度調整機能を。' 
  },
  { 
    id: 5, 
    nameTC: '光澤真絲居家襪',
    nameJP: '艶シルク ルームソックス', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 950, 
    badge: null, 
    colors: ['#fff','#f8f8f8'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '如月光般的柔和光澤。適合在靜謐的夜晚，與一本書和一杯茶共度。',
    descJP: '月光のような柔らかな光沢。静かな夜にふさわしい上質なルームソックス。' 
  },
  { 
    id: 8, 
    nameTC: '蠶絲足底防護襪',
    nameJP: 'シルク フットガード', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 780, 
    badge: null, 
    colors: ['#fff','#f5f5dc'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1591530225114-177981f47f48?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '高純度蠶絲材質，自動調節溫濕度。不僅是配件，更是對足部的深度保養。',
    descJP: '高純度シルクを使用。吸湿・放湿性に優れ、一日中さらさらとした肌触り。' 
  },
  { 
    id: 11, 
    nameTC: '絲滑網面半掌襪',
    nameJP: 'シルキー 5本指ハーフ', 
    category: 'ladies-silk', 
    material: 'silk', 
    price: 520, 
    badge: 'new', 
    colors: ['#fff','#2d2d2d'], 
    sizes: ['free'], 
    img: 'https://images.unsplash.com/photo-1589133465492-49f96b27e8a9?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '針對指縫與足尖的精緻呵護。透氣真絲材質，完美隱藏於各種鞋型之中。',
    descJP: '指先のデリケートな肌を守るハーフソックス。シルクの力でムレを防ぎます。' 
  },

  // ladies-glass (4)
  { 
    id: 3, 
    nameTC: 'シアー 稜鏡透明襪',
    nameJP: 'シアーガラス プリズム', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 850, 
    badge: 'new', 
    colors: ['#f8f8f8','#e0d0e8','#c8dde8'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1502741282025-a9c68cc289ad?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '輕盈如翼的透明網紗，折射出粼粼光影。讓腳步在都市穿梭中，依然優雅朦朧。',
    descJP: '光を反射するシアー素材。都会的なスタイリングに、透明感という彩りを。' 
  },
  { 
    id: 6, 
    nameTC: '復古刺繡透膚襪',
    nameJP: 'ヴィンテージ刺繍 シアー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 920, 
    badge: null, 
    colors: ['#2d2d2d','#fff'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '精緻的復古刺繡圖騰，點綴在透明感織物上。散發如藝術品般的收藏價值。',
    descJP: '繊細な刺繍が施されたシアーソックス。ヴィンテージのような雰囲気を足元に。' 
  },
  { 
    id: 9, 
    nameTC: '波點幾何網紗襪',
    nameJP: 'ドットシアー ジオメトリー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 720, 
    badge: null, 
    colors: ['#2d2d2d','#f87171'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1521404063623-6363c3290633?auto=format&fit=crop&q=80&w=800', 
    bg: '#fdfaf8', 
    descTC: '靈動的波點設計，與透明底色形成俏皮對比。為優雅的裙裝增添一份靈動感。',
    descJP: '軽やかなドットデザイン。大人の可愛らしさを演出するシアーアイテム。' 
  },
  { 
    id: 12, 
    nameTC: '極簡透明邊界襪',
    nameJP: 'ミニマル ボーダーシアー', 
    category: 'ladies-glass', 
    material: 'glass', 
    price: 680, 
    badge: null, 
    colors: ['#fff','#999'], 
    sizes: ['23-25'], 
    img: 'https://images.unsplash.com/photo-1584288015701-d7ec78996b7b?auto=format&fit=crop&q=80&w=800', 
    bg: '#f7f7f7', 
    descTC: '無邊界的極簡設計，與膚色完美融合。追求「若有似無」的終極質感體驗。',
    descJP: '境界線のないミニマルなデザイン。肌に溶け込むような究極の透明感。' 
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
  document.body.setAttribute('lang', lang === 'tc' ? 'zh-Hant' : 'ja');
  
  // Update switcher UI
  document.querySelectorAll('.lang-switcher span').forEach(span => {
    span.classList.toggle('active', span.textContent.toLowerCase() === lang);
  });
  
  // Re-render strings (requires page-specific logic to call renderers)
  const grid = document.getElementById('productGrid');
  if (grid) {
    grid.innerHTML = '';
    // This is a bit brute force, but works for simpler multi-page apps
    if (typeof applyFilter === 'function') applyFilter(); 
    else if (typeof renderProduct === 'function') renderProduct();
    else if (grid.id === 'productGrid') {
        PRODUCTS.forEach(p => grid.appendChild(createProductCard(p)));
    }
  }
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
    ? `<span class="original" style="text-decoration:line-through; font-size:11px; color:#999; margin-right:8px;">${formatPrice(product.originalPrice)}</span>${formatPrice(product.price)}`
    : formatPrice(product.price);

  const name = currentLang === 'tc' ? product.nameTC : product.nameJP;

  card.innerHTML = `
    <div class="div-img-wrap" style="background:${product.bg}; aspect-ratio:3/4; overflow:hidden; position:relative;">
      <img src="${product.img}" alt="${name}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition: transform 0.8s ease;">
      ${badge}
    </div>
    <div class="prod-info" style="text-align:left; padding:15px 5px;">
      <p class="div-label" style="font-size:9px; margin-bottom:5px; color:var(--life-accent); letter-spacing:0.15em;">${product.material.toUpperCase()} Collection</p>
      <h4 style="font-size:15px; font-weight:400; margin-bottom:10px; font-family:var(--font-serif);">${name}</h4>
      <div class="prod-price" style="font-size:14px; font-weight:500;">${priceHtml} <span style="font-size:9px; color:#999; font-weight:400; margin-left:4px;">(税込)</span></div>
    </div>
  `;
  return card;
}
