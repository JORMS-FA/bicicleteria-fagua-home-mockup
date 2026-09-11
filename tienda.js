const shopAssets='https://jorms-fa.github.io/bicicleteria-fagua-home-mockup/assets/';
const shopProducts=[
  {id:611,name:'Bicicleta GW Lynx 3×7 Velocidades MTB Rin 29',category:'MTB',price:1250000,image:shopAssets+'product-611.png',url:'/producto/bicicleta-gw-lynx-verde-29/',stock:true,tag:'MÁS ELEGIDA'},
  {id:69,name:'Bicicleta GW Falcon 3×8 Velocidades MTB Rin 29',category:'MTB',price:950000,image:shopAssets+'product-69.jpeg',url:'/producto/gw-falcon-29/',stock:true,tag:'FAVORITA'},
  {id:938,name:'Zapatillas Ruta Snake Amarillo GW',category:'Accesorios',price:320000,image:shopAssets+'product-938.png',url:'/producto/zapatillas-ruta-snake-amarillo/',stock:true,tag:'NUEVO'},
  {id:928,name:'Multiherramientas PRO 22 Funciones',category:'Herramientas',price:128600,image:shopAssets+'product-928.png',url:'/producto/multiherramientas-pro-22-funciones/',stock:true,tag:'TALLER'},
  {id:910,name:'Luz Trasera EBL-035RB 100 lm GW',category:'Accesorios',price:27600,image:shopAssets+'placeholder-luz.svg',url:'/producto/luz-trasera-ebl-035rb-100lm-gw/',stock:true,tag:''},
  {id:901,name:'Guantes Cortos Air Line Gris',category:'Accesorios',price:58900,image:shopAssets+'placeholder-guantes.svg',url:'/producto/guantes-cortos-air-line-gris/',stock:true,tag:''}
];
const formatShopCOP=value=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);
const shopHeart='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.8Z"/></svg>';
const shopState={query:'',category:'all',sort:'featured'};
const shopGrid=document.querySelector('#shop-grid'),shopEmpty=document.querySelector('#shop-empty'),resultsCount=document.querySelector('#results-count');
function renderShop(){
  const query=shopState.query.toLowerCase();
  let list=shopProducts.filter(product=>(shopState.category==='all'||product.category===shopState.category||shopState.category==='Componentes'&&product.category==='Componentes')&&(!query||`${product.name} ${product.category}`.toLowerCase().includes(query)));
  if(shopState.sort==='price-asc')list=[...list].sort((a,b)=>a.price-b.price);
  if(shopState.sort==='price-desc')list=[...list].sort((a,b)=>b.price-a.price);
  if(shopState.sort==='name')list=[...list].sort((a,b)=>a.name.localeCompare(b.name,'es'));
  shopGrid.innerHTML=list.map(product=>`<article class="product-card"><div class="product-card__image"><a href="${product.url}" aria-label="Ver ${product.name}"><img src="${product.image}" alt="${product.name}" width="600" height="600" loading="lazy"></a>${product.tag?`<span class="product-card__tag">${product.tag}</span>`:''}<button class="product-card__fav" type="button" aria-label="Añadir ${product.name} a favoritos" aria-pressed="false">${shopHeart}</button></div><div class="product-card__body"><span class="product-card__category">${product.category}</span><h3><a href="${product.url}">${product.name}</a></h3><div class="product-card__price"><span class="price">${formatShopCOP(product.price)}</span></div><span class="stock">Disponible para envío</span><a class="button button--primary" href="${product.url}">Comprar <span aria-hidden="true">→</span></a></div></article>`).join('');
  shopGrid.hidden=list.length===0;shopEmpty.hidden=list.length>0;resultsCount.textContent=`${list.length} ${list.length===1?'producto disponible':'productos disponibles'}`;
  shopGrid.querySelectorAll('.product-card__fav').forEach(button=>button.addEventListener('click',()=>{const liked=button.classList.toggle('is-liked');button.setAttribute('aria-pressed',String(liked));button.setAttribute('aria-label',liked?'Quitar de favoritos':'Añadir a favoritos')}));
}
function updateShop(){shopState.query=document.querySelector('#shop-search').value.trim();renderShop();}
document.querySelector('#shop-search').addEventListener('input',updateShop);
document.querySelector('#shop-sort').addEventListener('change',event=>{shopState.sort=event.target.value;renderShop()});
document.querySelectorAll('.category-chip').forEach(chip=>chip.addEventListener('click',()=>{shopState.category=chip.dataset.category;document.querySelectorAll('.category-chip').forEach(item=>item.classList.toggle('is-active',item===chip));renderShop()}));
document.querySelector('#clear-filters').addEventListener('click',()=>{shopState.query='';shopState.category='all';document.querySelector('#shop-search').value='';document.querySelectorAll('.category-chip').forEach(item=>item.classList.toggle('is-active',item.dataset.category==='all'));renderShop()});
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav'),navScrim=document.querySelector('.nav-scrim'),navClose=document.querySelector('.nav-close');
function setMenu(open){const mobile=window.matchMedia('(max-width:820px)').matches;nav.classList.toggle('is-open',open);nav.hidden=mobile&&!open;navScrim.hidden=!open;document.body.classList.toggle('menu-open',open);menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');if(open)navClose.focus();else menuToggle.focus()}
function syncMenuForViewport(){if(!window.matchMedia('(max-width:820px)').matches){nav.hidden=false;nav.classList.remove('is-open');navScrim.hidden=true;document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menú')}}
menuToggle.addEventListener('click',()=>setMenu(!nav.classList.contains('is-open')));navScrim.addEventListener('click',()=>setMenu(false));navClose.addEventListener('click',()=>setMenu(false));nav.querySelectorAll('.site-nav__link').forEach(link=>link.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',event=>{if(!nav.classList.contains('is-open'))return;if(event.key==='Escape'){event.preventDefault();setMenu(false);return}if(event.key==='Tab'){const focusables=[navClose,...nav.querySelectorAll('.site-nav__link')].filter(el=>el&&!el.disabled);const first=focusables[0],last=focusables[focusables.length-1];if(!first||!last)return;if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}});window.addEventListener('resize',syncMenuForViewport);syncMenuForViewport();
const searchToggle=document.querySelector('.search-toggle'),searchPanel=document.querySelector('#search-panel'),headerSearch=document.querySelector('#header-search');
searchToggle.addEventListener('click',()=>{const open=searchPanel.hidden;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',String(open));if(open)headerSearch.focus()});
searchPanel.querySelector('form').addEventListener('submit',event=>{event.preventDefault();document.querySelector('#shop-search').value=headerSearch.value;searchPanel.hidden=true;searchToggle.setAttribute('aria-expanded','false');updateShop();document.querySelector('#catalog-title').scrollIntoView({behavior:'smooth',block:'start'})});
renderShop();
