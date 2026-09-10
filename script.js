const ghAssets='https://jorms-fa.github.io/bicicleteria-fagua-home-mockup/assets/';
const products=[
  {id:611,name:'Bicicleta GW Lynx 3×7 Velocidades MTB Rin 29',category:'MTB',price:1250000,image:ghAssets+'product-611.png',url:'/producto/bicicleta-gw-lynx-3x7-velocidades-aluminio-mtb-rin-29/',stock:true,tag:'MÁS ELEGIDA'},
  {id:69,name:'Bicicleta GW Falcon 3×8 Velocidades MTB Rin 29',category:'MTB',price:950000,image:ghAssets+'product-69.jpeg',url:'/producto/bicicleta-gw-falcon-mtb-negro-aluminio-8vel/',stock:true,tag:'FAVORITA'},
  {id:938,name:'Zapatillas Ruta Snake Amarillo GW',category:'Calzado',price:320000,image:ghAssets+'product-938.png',url:'/producto/zapatillas-ruta-snake-amarillo/',stock:true,tag:'NUEVO'},
  {id:928,name:'Multiherramientas PRO 22 Funciones',category:'Herramientas',price:128600,image:ghAssets+'product-928.png',url:'/producto/multiherramientas-pro-22-funciones/',stock:true,tag:'TALLER'},
  {id:910,name:'Luz Trasera EBL-035RB 100 lm GW',category:'Seguridad',price:27600,image:'https://ironman.tailcdf25e.ts.net/wp-content/uploads/2026/07/luces__luz-trasera-ebl-035rb-100lm-gw__01_dark_studio_4x3.png',url:'/producto/luz-trasera-ebl-035rb-100lm-gw/',stock:true,tag:''},
  {id:901,name:'Guantes Cortos Air Line Gris',category:'Accesorios',price:58900,image:'https://ironman.tailcdf25e.ts.net/wp-content/uploads/2026/07/guantes__guantes-cortos-air-line-gris__01_dark_studio_4x3.png',url:'/producto/guantes-cortos-air-line-gris/',stock:true,tag:''}
];
const formatCOP=value=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value);
const heartIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 10-8.8 10s-8.8-5-8.8-10A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.8Z"/></svg>';
function renderProducts(list){
  const grid=document.querySelector('#product-grid'),empty=document.querySelector('#empty-products');
  grid.innerHTML=list.map(product=>`<article class="product-card"><div class="product-card__image"><a href="${product.url}" aria-label="Ver ${product.name}"><img src="${product.image}" alt="${product.name}" width="600" height="600" loading="lazy"></a>${product.tag?`<span class="product-card__tag">${product.tag}</span>`:''}<button class="product-card__fav" type="button" aria-label="Añadir ${product.name} a favoritos" aria-pressed="false">${heartIcon}</button></div><div class="product-card__body"><span class="product-card__category">${product.category}</span><h3><a href="${product.url}">${product.name}</a></h3><div class="product-card__price"><span class="price">${formatCOP(product.price)}</span></div><span class="stock ${product.stock?'':'stock--off'}">${product.stock?'Disponible para envío':'Consultar disponibilidad'}</span><a class="button button--primary" href="${product.url}">Comprar <span aria-hidden="true">→</span></a></div></article>`).join('');
  empty.hidden=list.length>0;grid.hidden=list.length===0;
  grid.querySelectorAll('.product-card__fav').forEach(button=>button.addEventListener('click',()=>{const liked=button.classList.toggle('is-liked');button.setAttribute('aria-pressed',liked);button.setAttribute('aria-label',liked?'Quitar de favoritos':'Añadir a favoritos')}));
}
renderProducts(products.slice(0,4));
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',open);menuToggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
const searchToggle=document.querySelector('.search-toggle'),searchPanel=document.querySelector('#search-panel');
searchToggle.addEventListener('click',()=>{const open=searchPanel.hidden;searchPanel.hidden=!open;searchToggle.setAttribute('aria-expanded',open);if(open)document.querySelector('#product-search').focus()});
document.querySelector('.search-form').addEventListener('submit',event=>{event.preventDefault();const query=document.querySelector('#product-search').value.trim().toLowerCase();renderProducts(query?products.filter(product=>`${product.name} ${product.category}`.toLowerCase().includes(query)):products.slice(0,4));document.querySelector('#productos').scrollIntoView({behavior:'smooth',block:'start'})});
const slides=[...document.querySelectorAll('.announcement__slide')],pauseButton=document.querySelector('.announcement__pause');let slideIndex=0,carouselTimer=null,carouselPaused=false;
function showSlide(index){slides.forEach((slide,i)=>slide.classList.toggle('is-visible',i===index));}
function stopCarousel(){if(carouselTimer){clearInterval(carouselTimer);carouselTimer=null;}}
function startCarousel(){if(carouselPaused||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;stopCarousel();carouselTimer=setInterval(()=>{slideIndex=(slideIndex+1)%slides.length;showSlide(slideIndex)},4200)}
pauseButton.addEventListener('click',()=>{carouselPaused=!carouselPaused;pauseButton.setAttribute('aria-pressed',carouselPaused);pauseButton.setAttribute('aria-label',carouselPaused?'Reanudar mensajes':'Pausar mensajes');pauseButton.querySelector('span').textContent=carouselPaused?'▶':'Ⅱ';if(carouselPaused)stopCarousel();else startCarousel()});
const announcement=document.querySelector('.announcement');announcement.addEventListener('mouseenter',stopCarousel);announcement.addEventListener('mouseleave',startCarousel);announcement.addEventListener('focusin',stopCarousel);announcement.addEventListener('focusout',startCarousel);startCarousel();
