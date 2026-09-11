# Checklist de aceptación — Bicicletería Fagua

## Portada móvil — comprobado en la maqueta pública

- [x] Fondo claro con negro, blanco, azul y dorado.
- [x] Logo centrado en la cabecera.
- [x] Lupa y carrito correctamente ubicados.
- [x] Menú fuera de pantalla a la izquierda y entrada de izquierda a derecha.
- [x] Fondo atenuado, scroll bloqueado y foco accesible al abrir el menú.
- [x] Barra superior de una línea, sin pausa y con bandera colombiana consistente.
- [x] Hero responsive con CTA principal y CTA secundario.
- [x] Hero incluye en la maqueta una imagen real de producto, con texto alternativo y enlace de referencia a la ficha WooCommerce; su equivalente como widget nativo de Elementor está comprobado en la auditoría de WordPress.
- [x] Productos reales con imagen, nombre, precio, disponibilidad y acción de compra.
- [x] Sin desplazamiento horizontal en móvil.
- [x] Imágenes con texto alternativo y botones táctiles amplios.

### Evidencia de la última revisión

- [x] Orden comercial responsive: escritorio hero → beneficios → categorías → destacados → promoción; móvil hero → promoción → destacados → categorías → confianza/asesoría.
- [x] Una sola sección de productos destacados; no hay duplicación accidental.
- [x] Cuatro tarjetas destacadas con enlace de producto, precio, disponibilidad y CTA.
- [x] Menú lateral probado como panel fuera de pantalla: entra de izquierda a derecha, tiene cierre visible, Escape, fondo atenuado, bloqueo de scroll y retorno del foco al botón de menú.
- [x] Barra de anuncios sin botón de pausa; la bandera se ve en la interfaz y el texto accesible es “¡Envíos a toda Colombia!”.
- [x] La franja se detiene al recibir foco o al pasar el cursor y respeta `prefers-reduced-motion`, sin añadir un botón visible.
- [x] En una vista móvil de 319 px de ancho no se detectó overflow horizontal.
- [x] Jerarquía de encabezados comprobada: un H1 para la portada y H2 para las secciones.
- [x] En GitHub Pages, Inicio y Tienda navegan dentro de la maqueta; categorías y fichas conservan enlaces al WordPress real, sin alterar la navegación de producción.

## Portada — pendiente de aprobación del propietario

- [x] Tipografía de marca Montserrat cargada y aplicada en WordPress; queda solo la aprobación visual del propietario.
- [x] En escritorio se ocultó el texto de sitio redundante bajo el logo; el logo oficial permanece visible y centrado.
- [ ] Confirmar textos, promociones y precios reales.
- [x] Revisar contraste de los colores principales y CTAs en la versión móvil auditada.
- [x] Validar escritorio.
- [x] Validar tablet a 768 px en Inicio y Tienda: sin overflow; header, logo y controles mantienen 44 px.
- [x] La comprobación post-fix de Tienda a 768 px mostró 12 productos, CTAs de 187×50 px y selector de orden de 257×44 px; el ajuste conserva el backup `fagua-mobile-shop-filters.php.bak-tablet-order-20260911` y no regresó en 390 px.
- [x] Validar búsqueda, carrito y enlaces reales; la antigua página Favoritos queda fuera del recorrido y la sección se presenta como “Productos destacados”.
- [x] Medir rendimiento base y revisar errores de consola en Inicio, Tienda y Checkout.

### Criterios de “lista para WordPress”

- [x] Los CTAs auditados llevan a destinos reales de WooCommerce o a páginas de contenido real; no se promete una funcionalidad de Favoritos inexistente.
- [x] Las cuatro tarjetas de “Destacados” corresponden a productos actualmente disponibles (`instock`); no se muestran agotados como preventa.
- [x] La tipografía Montserrat se carga de forma estable y conserva legibilidad móvil (texto normal de al menos 16 px).
- [x] El logo conserva proporción, texto alternativo y centrado en la vista móvil auditada de 319 px.
- [ ] Comprobar el logo en un ancho intermedio cercano a 390 px en un dispositivo físico.
- [x] El menú principal no repite Tienda, Nosotros, Contacto ni páginas legales.
- [x] Los botones y controles auditados tienen nombre accesible, foco visible y área táctil suficiente en las vistas comprobadas.
- [ ] Completar la comprobación de botones y controles en un teléfono físico.

## Flujo de construcción nativa (WordPress + WooCommerce + Elementor gratuito)

1. **Congelar la arquitectura.** Aprobar la portada y definir las páginas canónicas antes de borrar o mover nada.
2. **Dejar WooCommerce activo.** No se desinstala para crear la portada: Tienda, Carrito, Finalizar compra y Mi cuenta son páginas del sistema y deben seguir configuradas en WooCommerce.
3. **Preparar el catálogo.** Revisar productos, categorías, precios, inventario, imágenes y productos destacados; excluir agotados de los bloques de venta.
4. **Construir Tienda primero como archivo dinámico.** La página debe mostrar el catálogo real con filtros, búsqueda, orden y enlaces a fichas de producto; no debe ser una cuadrícula HTML fija.
5. **Reconstruir Inicio directamente en WordPress.** Usar widgets nativos de Elementor (contenedores/columnas, encabezados, imágenes, botones, iconos y separadores) y bloques o componentes nativos de WooCommerce/Blocksy. No pegar una página completa en un widget HTML.
6. **Usar Blocksy para lo global.** Con Elementor gratuito, el encabezado, el menú, el pie y las plantillas globales de WooCommerce se resuelven con Blocksy/Customizer. Elementor gratuito edita el contenido de la página, pero no sustituye por sí solo el Theme Builder de Elementor Pro.
7. **Crear contenido y legal.** Consolidar Nosotros, Contacto y Servicio Técnico; mantener las páginas legales separadas en el pie; no publicar textos con placeholders como `[Tu email]`.
8. **Configurar el menú canónico.** Inicio, Tienda, Bicicletas, Componentes, Accesorios, Servicio Técnico y Contacto. Carrito y Mi cuenta quedan como iconos o enlaces secundarios; Nosotros y las páginas legales permanecen en el pie.
9. **Hacer pruebas por puertas.** Después de cada página se verifica móvil, escritorio, teclado, lector de pantalla, enlaces, formulario, carrito y checkout antes de pasar a la siguiente.
10. **Publicar solo después del recorrido completo.** Probar producto → carrito → checkout → confirmación, formularios y estados vacíos; luego revisar rendimiento y hacer una copia de seguridad.

### Qué se crea y qué no se recrea

| Pieza | Implementación nativa | No hacer |
|---|---|---|
| Inicio | Página WordPress editada con Elementor | Insertar una página HTML completa en un widget |
| Tienda | Archivo de WooCommerce + estilos de Blocksy | Mantener una cuadrícula estática como catálogo final |
| Producto | Plantilla/ficha de WooCommerce | Copiar manualmente cada precio y stock |
| Carrito, pago, cuenta | Páginas de sistema de WooCommerce | Borrarlas para “reiniciar” |
| Cabecera, menú y pie | Blocksy/Customizer; Elementor solo si la licencia lo permite | Duplicar menús en varias ubicaciones |
| Nosotros, Contacto, Servicio Técnico | Páginas de contenido con widgets nativos | Conservar dos páginas con el mismo propósito |

La maqueta publicada es una referencia visual; el resultado final debe reconstruirse dentro de WordPress para que sea editable y mantenible como una instalación nativa.

## Auditoría del WordPress actual

### Evidencia HTTP adicional (10/09/2026)

- [x] La portada pública responde con HTTP 200 y conserva el título de Bicicletería Fagua.
- [x] La portada tiene exactamente un H1 (“Equípate para la próxima ruta.”) y siete H2 de sección.
- [x] Las imágenes de la portada tienen atributo `alt` no vacío y los botones expuestos tienen nombre accesible.
- [x] La portada no contiene widgets `elementor-widget-html` de página completa.
- [x] La franja superior contiene la bandera CSS de Colombia y no contiene control de pausa.
- [x] La portada incluye la imagen real enlazada de la bicicleta GW Lynx MTB.
- [x] La Tienda pública responde con HTTP 200 y expone productos, ordenamiento, categorías y filtro de precio.
- [x] Se validaron los enlaces internos principales de la portada (Tienda, categorías, Contacto, carrito y productos); todos respondieron con HTTP 200.
- [x] Contacto, Términos, Carrito, Finalizar compra y Mi Cuenta responden con HTTP 200; Contacto carga WPForms 579 y muestra “Enviar mensaje”.
- [x] Términos y Condiciones no contiene placeholders; el checkout requiere un producto en el carrito para mostrar métodos de pago y la casilla legal.
- [x] La casilla legal del checkout fue traducida al español y verificada visualmente; los textos ingleses anteriores quedaron guardados en opciones de respaldo reversibles.
- [x] La comprobación de checkout no creó pedidos: el recuento actual de pedidos WooCommerce permanece en cero.
- [x] La imagen principal de la ficha GW Lynx tiene ahora un título de biblioteca descriptivo y `alt` específico; se verificó en el árbol accesible del producto.
- [x] La imagen destacada visible de la ficha de producto carga con prioridad (`eager`/`fetchpriority=high`); las imágenes secundarias conservan carga diferida.
- [x] La ficha de producto muestra “Disponible” solo cuando el stock real lo permite; WooCommerce conserva su señal nativa para “Agotado”, sin inventar cantidades.
- [x] Los productos con estado WooCommerce `onbackorder` se muestran como “Disponible bajo pedido”, diferenciados de la disponibilidad inmediata.
- [x] En las fichas `onbackorder`, el aviso único “Disponible bajo pedido” reemplaza el texto nativo duplicado y conserva `role="status"`.
- [x] El aviso nativo de producto agotado expone `role="status"` para lectores de pantalla sin cambiar el flujo de compra.
- [x] La ficha de producto GW Lynx fue comprobada en viewport móvil: un H1, galería con `alt`, precio, cantidad y “Añadir al carrito” accesibles, sin overflow.
- [x] Los botones de añadir al carrito de las tarjetas usan el permalink del producto correspondiente; se corrigió el caso relacionado Lynx/Falcon sin cambiar el ID AJAX.
- [x] La ficha “Cadenilla Shimano CN-HG40” usa ahora un slug coherente; el slug CN-HG93 anterior redirige con 301 y no quedan enlaces vivos apuntando a él.
- [x] La redirección del slug antiguo descarta parámetros de compra como `add-to-cart` y `quantity` para evitar duplicar el mismo artículo; conserva solo parámetros no comerciales.
- [x] Cantidad y “Añadir al carrito” tienen ahora una altura táctil mínima de 44 px en móvil mediante CSS reversible.
- [x] El carrito móvil fue comprobado con producto, cantidad, subtotal, envío y enlace a checkout; no presenta overflow y sus acciones principales tienen 44 px.
- [x] Los controles móviles de Carrito (cantidad, quitar producto, cupón y finalizar compra) tienen ahora objetivos táctiles mínimos de 44 px mediante CSS reversible.
- [x] El enlace para quitar productos del carrito expone una etiqueta accesible en español (“Quitar … del carrito”).
- [x] Las acciones de cupón y checkout del carrito tienen ahora objetivo táctil mínimo de 44 px en móvil mediante CSS reversible.
- [x] En escritorio, los controles y acciones principales del Carrito conservan objetivos táctiles mínimos de 44 px.
- [x] El checkout móvil fue comprobado con campos de facturación, métodos de pago y términos en español; no presenta overflow.
- [x] Campos principales y “Realizar el pedido” tienen ahora objetivo táctil mínimo de 44 px en móvil mediante CSS reversible.
- [x] Los controles Select2 del checkout miden 343×44 px en móvil y 558×44 px en escritorio, sin overflow; el CSS global conserva copia de respaldo reversible.
- [x] El botón `#place_order` del checkout está limitado al formulario: mide 292×44 px en móvil y 485×44 px en escritorio, sin overflow; el ajuste pasó `php -l` y conserva el respaldo `fagua-mobile-shop-filters.php.bak-checkout44-20260911`.
- [x] Mi cuenta fue comprobada con usuario, contraseña, mostrar contraseña, recordar sesión y recuperación de acceso; conserva una H1, imágenes accesibles y el formulario nativo de WooCommerce.
- [x] El árbol accesible de Contacto expone los cuatro campos del formulario en orden: Nombre, Teléfono, Correo electrónico y Mensaje, junto con “Enviar mensaje”.
- [x] Contacto y Nosotros fueron normalizados con párrafos, encabezados y lista nativos; la dirección, horario, misión y oferta ya no quedan unidos en un solo bloque.
- [x] Se retiró el encabezado redundante que repetía el título de página en Aviso Legal, Privacidad, Cookies y Términos; queda un solo H1 visible por página.
- [x] En Aviso Legal (ID 1044) se retiró el H2 redundante “Aviso legal”; el cambio conserva copia de respaldo reversible y la página mantiene un solo H1.
- [x] Se retiró el encabezado redundante de Servicio Técnico; la página conserva un único H1 y no presenta overflow móvil.
- [x] El formulario WPForms de Contacto conserva sus etiquetas y ahora tiene campos y botón de envío con objetivo táctil mínimo de 44 px en móvil.
- [x] Servicio Técnico (ID 660) conserva su contenido de taller y ahora enlaza su CTA de agenda al formulario canónico de Contacto; se guardó el respaldo `fagua_backup_page_660_before_contact_cta_20260911`.
- [x] Los subtítulos de Servicio Técnico y las páginas legales quedaron normalizados como H2; se verificó un solo H1 y cero H3 innecesarios.
- [x] La búsqueda móvil de Blocksy quedó traducida a español (“Buscar productos”, “Escribe para buscar” y “Cerrar búsqueda”) y se comprobó una consulta real de “bicicleta”.
- [x] Las etiquetas comerciales de WooCommerce “SALE” y “SOLD OUT” quedaron traducidas como “OFERTA” y “AGOTADO”; se verificó que no queden textos ingleses visibles.
- [x] Se revisaron los enlaces internos de portada, Tienda, Contacto, Nosotros, Servicio Técnico y páginas legales; no quedan referencias a URLs antiguas de cookies ni al agregado de políticas.
- [x] Se distinguieron los dos productos Shore Color Dirty Gold como “· Hombre” y “· Mujer”; conservan SKU, stock e imágenes independientes.
- [x] Se buscó en páginas, productos y ajustes un teléfono o correo público adicional; solo existe el correo administrativo de WordPress y no se expone automáticamente en los legales.
- [x] La instalación usa locale `es_CO`, zona horaria UTC−05:00 y moneda COP; se verificó en la configuración activa de WooCommerce.
- [x] La consola del navegador no registra errores ni advertencias en Inicio, Tienda ni Checkout.
- [x] Mi Cuenta fue comprobada en móvil; campos, acceso y “Mostrar contraseña” tienen áreas táctiles mínimas de 44 px y no hay overflow.
- [x] La recuperación de contraseña fue comprobada en móvil; campo y botón están traducidos y tienen 44 px sin overflow.
- [x] Mi Cuenta, recuperación, Carrito y Checkout no muestran etiquetas inglesas residuales en sus estados principales.
- [x] Se midió una línea base de carga: la portada WordPress respondió en 3,13 s con 108 KB de HTML y la Tienda en 1,45 s con 112 KB; la maqueta pública respondió en aproximadamente 0,25 s.
- [x] Los scripts públicos `script.js` y `tienda.js` pasan comprobación de sintaxis y el repositorio no presenta errores de whitespace.
- [x] Los enlaces de la maqueta pública fueron alineados con las rutas canónicas activas (`/nosotros/`, `/contacto/`, `/terminos-condiciones/` y `/servicio-tecnico/`); las cinco rutas responden con HTTP 200.
- [x] La navegación pública marca semánticamente la página actual con `aria-current="page"` en Inicio y Tienda.
- [x] La maqueta de Inicio y Tienda mantiene un H1 por página, imágenes con `alt` y botones con nombre accesible.
- [x] La Tienda pública fue probada con filtro de Bicicletas (2 resultados), búsqueda sin coincidencias (estado vacío) y restauración del catálogo (6 productos).

- [x] WordPress público responde y expone WooCommerce Store API, Elementor y Novamira.
- [x] Instalación observada: Blocksy + Blocksy Companion, Elementor y WooCommerce activos.
- [x] Se conservan las páginas del sistema de WooCommerce: Tienda, Carrito, Finalizar compra y Mi cuenta.
- [x] Hay productos y categorías reales disponibles para la página Tienda.
- [x] WooCommerce quedó apuntando a la página válida “Términos y Condiciones” (ID 1047); el valor anterior 664 se guardó como respaldo reversible.
- [x] La portada ID 555 se reconstruyó con widgets nativos de Elementor; no quedan widgets HTML de página completa.
- [x] El menú `Primary` (ID 124) se asignó a las ubicaciones activas de Blocksy y sustituyó el fallback automático de páginas.
- [x] La cabecera activa conserva menú, logo centrado, búsqueda y carrito; el panel móvil está configurado a la izquierda.
- [x] La cabecera móvil de Blocksy fue ajustada para centrar el logo y reservar espacio para lupa y carrito sin mostrar el importe en pantallas estrechas.
- [x] La barra de envíos quedó en la fila superior de Blocksy, por encima del encabezado, con una sola instancia visible y sin botón de pausa.
- [x] La cabecera móvil nativa fue comprobada en el archivo Tienda: logo centrado, lupa y carrito separados, sin importe que provoque solapamiento.
- [x] El drawer móvil nativo fue comprobado: entra desde la izquierda, muestra los 7 enlaces canónicos, tiene cierre accesible y devuelve el foco al botón Menú.
- [x] El botón de cierre del drawer fue ajustado a un objetivo táctil de 44×44 px y verificado en la Tienda pública; se conserva el respaldo `fagua_backup_custom_css_288_before_drawer_close_20260911`.
- [x] Los controles móviles de cabecera, ordenamiento, filtro y compra tienen un objetivo táctil mínimo de 44 px.
- [x] La franja de envíos se implementó como elemento HTML nativo de la cabecera Blocksy, con bandera CSS, texto accesible y copia de respaldo de la configuración anterior.
- [x] Los destacados se limitaron a cuatro productos reales actualmente disponibles mediante shortcode de WooCommerce.
- [x] Contacto canónico actualizado: el enlace del menú y el CTA de asesoría apuntan a `/contacto/`; la página antigua se conserva como respaldo hasta aprobar su archivado.
- [x] La página Contacto conserva dirección, horario y formulario WPForms 579; el formulario vuelve a renderizarse con etiquetas y confirmación en español.
- [x] Resolver duplicados: “Nosotros y contacto” pasó a borrador reversible; “Nosotros” y “Contacto” quedan como páginas canónicas.
- [x] Resolver duplicados entre “Políticas y condiciones” y las páginas legales individuales: el agregado antiguo pasó a borrador reversible.
- [x] Se retiraron los placeholders de correo y teléfono y se usa el formulario de Contacto como canal; queda pendiente confirmar el responsable legal y el marco aplicable.
- [x] Corregir el menú: `Primary` quedó asignado a Blocksy y el enlace Contacto ya no apunta a la página duplicada.
- [x] Probar checkout con un producto real y no únicamente con carrito vacío (pedido no enviado).

### Estado de trabajo recomendado

- [x] Maqueta visual de Inicio aprobada como dirección de diseño.
- [x] Maqueta visual de Tienda disponible para comparar la arquitectura comercial.
- [x] Auditoría y copia de seguridad de menú, páginas y ajustes de WooCommerce.
- [x] Se definieron las páginas canónicas y se migró el contenido real sin sobrescribir datos sin confirmar.
- [x] Se construyó y auditó la Tienda nativa con el catálogo real de WooCommerce.
- [x] Auditar Tienda nativa con catálogo real, ordenamiento, paginación y acciones Añadir al carrito; queda pendiente su pulido visual comercial.
- [x] Añadir una introducción comercial nativa al archivo Tienda, con promesa clara y CTA de asesoría antes del catálogo.
- [x] Activar la barra lateral nativa de WooCommerce en escritorio con categorías y filtro de precio.
- [x] Añadir filtro móvil dinámico para categoría, rango de precio y disponibilidad; el panel se oculta en escritorio y conserva la consulta nativa de WooCommerce.
- [x] Corregir la categoría de producto que aparecía como “NI├▒OS”; ahora se muestra “Niños”.
- [x] Construir Inicio nativo con Elementor y Blocksy (primera versión editable).
- [x] Revisar menú, pie, legales, formularios y recorrido de compra en navegador con viewport móvil; queda pendiente la comprobación en un teléfono físico.

## Lista de aceptación para cerrar la portada

Esta es la puerta de aprobación antes de pasar a la Tienda nativa. Cada punto debe verificarse en móvil y escritorio, con teclado y con un recorrido de compra real.

- [x] Identidad: logo centrado, tipografía legible, paleta blanco/negro/azul con acento dorado.
- [x] Cabecera: aviso de envíos arriba, menú único, búsqueda y carrito visibles; ningún elemento se solapa.
- [x] Menú móvil: panel oculto a la izquierda, entra de izquierda a derecha, cierra con X y Escape, bloquea scroll y devuelve foco.
- [x] Conversión: hero con una promesa clara, CTA primario “Ver bicicletas” y CTA secundario de accesorios.
- [x] Prueba social y confianza: beneficios de producto real, envío nacional, respaldo de taller y asesoría.
- [x] Venta: destacados reales con imagen, nombre, precio, stock y enlace a ficha WooCommerce.
- [x] Descubrimiento: categorías de Bicicletas, Componentes y Accesorios con enlaces funcionales.
- [x] Asistencia: CTA visible a Contacto/WPForms y CTA a Servicio Técnico.
- [x] Pie: enlaces canónicos a Tienda, Servicio Técnico, Nosotros, Contacto y Términos.
- [x] Pie nativo de Blocksy: menú separado de información/legal, enlaces con espaciado legible en móvil y sin alterar el menú principal.
- [x] Se ocultó el selector EN no utilizado para mantener el recorrido de compra en español; no se borró contenido ni configuración de idiomas.
- [x] La página de resultados de búsqueda de Blocksy muestra “Resultados de búsqueda para …” en español, incluido en móvil.
- [x] Las leyendas de precio original y precio actual de productos en oferta aparecen en español.
- [x] El estado vacío de búsqueda muestra “Sin resultados” y conserva un campo accesible para intentar otra búsqueda.
- [x] Accesibilidad: un H1, jerarquía de encabezados, nombres accesibles, alt de imágenes, foco visible y sin overflow horizontal.
- [x] Se completó el texto alternativo de la imagen destacada de la bicicleta GW Falcon (ID 647); las tarjetas visibles de Tienda ya no tienen imágenes de producto sin `alt`.
- [x] Se completó el texto alternativo de la imagen de la Cadenilla Shimano CN-HG40 (adjunto ID 632); la auditoría posterior de Inicio no encontró imágenes de producto visibles sin `alt`.
- [x] Se añadió un respaldo nativo en `wp_get_attachment_image_attributes` para heredar el nombre del producto cuando una miniatura llegue sin `alt`; se verificó en una carga nueva de Inicio.
- [x] El mini-carrito de Blocksy/WooCommerce también conserva el nombre del producto en la miniatura cuando su plantilla intenta emitir `alt=""`; se verificó en una sesión nueva y se conserva `fagua-mobile-shop-filters.php.bak-mini-cart-alt-20260911`.
- [x] La introducción comercial de Tienda se compactó de forma reversible para adelantar el primer producto sin retirar la promesa ni el CTA de asesoría; en escritorio pasó de ~293 px a ~206 px.
- [x] La paginación de Tienda usa un objetivo táctil mínimo de 44 px en móvil (`nav.ct-pagination`); “Siguiente” fue verificado a 44 px sin overflow y se conserva `fagua_backup_custom_css_288_before_pagination_touch_fix2_20260911`.
- [x] La comprobación posterior confirma en móvil de 390 px una introducción de ~258 px, CTA visible y comienzo del primer producto dentro del primer pantallazo; a 320 px no hay overflow y los controles siguen en 44 px.
- [x] El control de quitar productos del mini-carrito también expone ahora una etiqueta accesible en español, sin alterar sus enlaces ni fragmentos AJAX.
- [x] Los CTA de Elementor y las acciones de productos destacados miden al menos 44 px en móvil.
- [x] Los enlaces “Ver categoría” de la portada también miden al menos 44 px en móvil.
- [x] En escritorio no hay overflow ni imágenes sin `alt`; los enlaces adicionales del menú se agrupan en “Más” mediante un desplegable accesible.
- [x] Las rutas canónicas de portada, Tienda, categorías, información, legales, carrito, checkout y Mi cuenta responden HTTP 200.
- [x] La portada tiene una meta descripción SEO única en español, comprobada en el HTML público.
- [x] La página Tienda tiene una meta descripción SEO única en español, comprobada en el HTML público.
- [x] Las fichas de producto generan una meta descripción SEO desde el extracto real del producto.
- [x] Las categorías de WooCommerce generan una meta descripción SEO desde su descripción o nombre real.
- [x] Contacto, Nosotros y Servicio Técnico tienen meta descripciones SEO únicas, comprobadas en el HTML público.
- [x] Portada, Tienda y fichas de producto incluyen Open Graph con título, descripción, tipo y URL canónica correctos.
- [x] Portada, Tienda y fichas de producto incluyen imagen Open Graph real para compartir en redes.
- [x] Las etiquetas SEO/Open Graph se imprimen únicamente dentro de `<head>` con saltos de línea reales; no se filtra texto `\\n<meta...>` al contenido visible.
- [x] La navegación de escritorio queda fuera del árbol de accesibilidad en móvil; el drawer móvil conserva el menú canónico.
- [ ] Validación final de copy, promociones, precios y datos legales por el propietario.

### Estado legal técnico (11/09/2026)

- [x] Aviso Legal: se retiraron los placeholders visibles y las referencias a normativa española; la dirección real quedó incorporada y correo/teléfono remiten al formulario de Contacto sin inventar datos.
- [x] Privacidad: se retiraron los placeholders visibles y las referencias a GDPR/LOPDGDD; el canal de ejercicio de derechos remite al formulario de Contacto.
- [x] Los canales de Contacto en ambas páginas legales son enlaces accesibles, no URLs largas pegadas como texto.
- [x] Los helpers de páginas del tema activo quedaron endurecidos con contenido neutral colombiano, rutas reales y WPForms 579; no incluyen placeholders, normativa española, analítica ni promesas comerciales no confirmadas. `functions.php` pasó `php -l` y conserva el respaldo `before-neutral-page-helpers-20260911`.
- [ ] Aviso Legal y Privacidad: revisión jurídica final con el propietario sobre responsable legal y marco aplicable en Colombia; la revisión técnica no sustituye asesoría jurídica.
- [x] Cookies: se documentaron las cookies técnicas observadas y se retiró la afirmación no comprobada de Google Analytics/remarketing.
- [x] Cookies: no se observaron herramientas opcionales activas; si se incorporan, se deberá actualizar la política y activar el consentimiento antes de usarlas.
- [x] Términos: se retiraron las cifras y promesas comerciales no confirmadas; el texto remite al checkout, al destino y a la normativa aplicable.
- [x] Términos: las condiciones publicadas quedan sujetas a la revisión jurídica final indicada arriba y a la aprobación general de copy, promociones y precios.
- [x] La URL histórica `/politicas-y-condiciones/` no forma parte del menú ni de los enlaces canónicos; el contenido antiguo se conserva solo como respaldo y no debe republicarse.

### Filtro móvil de Tienda — comprobado

- [x] El panel usa categorías y conteos del catálogo real; no contiene productos HTML duplicados.
- [x] “Solo disponibles” y “Agotados” modifican la consulta principal y devuelven resultados coherentes.
- [x] El rango mínimo/máximo usa los parámetros nativos de WooCommerce.
- [x] Los campos de precio vacíos se eliminan antes de consultar, evitando estados vacíos falsos al combinar categoría y disponibilidad.
- [x] El panel tiene etiquetas, campos con IDs únicos, botones de 44 px y enlace para limpiar filtros.
- [x] Si la URL ya contiene un rango de precio, los campos móviles se repueblan al abrir el panel; “Limpiar filtros” y el selector de orden alcanzan 44 px de alto/ancho táctil.
- [x] Los enlaces de categoría dentro de las tarjetas de Tienda tienen ahora un área táctil mínima de 44 px en móvil.
- [x] En escritorio permanece oculto y el sidebar nativo sigue disponible.
- [x] Las categorías duplicadas “MTB” se diferenciaron como “Bicicletas MTB” y “Llantas MTB” sin cambiar sus URLs.
- [ ] Revisar con el propietario qué categorías comerciales deben destacarse y si conviene enviar agotados al final.

## Flujo de trabajo recomendado

1. **Cerrar Inicio:** aprobar esta lista y congelar cambios visuales globales.
2. **Cerrar Tienda:** conservar el archivo dinámico de WooCommerce; validar filtros útiles (categoría, precio y disponibilidad), revisar agotados y validar móvil.
3. **Cerrar ficha de producto:** imagen/alt, precio, stock, variaciones, envío, añadir al carrito y productos relacionados.
4. **Cerrar compra:** Carrito → Finalizar compra → métodos de pago → términos en español; probar sin enviar un pedido real.
5. **Cerrar contenido:** Nosotros, Contacto/WPForms, Servicio Técnico y páginas legales, sin placeholders.
6. **Cerrar navegación:** una sola ubicación de menú principal; carrito y cuenta como acciones secundarias; legales solo en el pie.
7. **Auditoría final:** móvil 320/390 px, escritorio, teclado, contraste, enlaces, consola, rendimiento y copia de seguridad.

La maqueta pública sirve para comparar composición y conversión. La versión que se entrega debe permanecer dentro de WordPress: Elementor para el contenido editable, Blocksy para cabecera/pie y WooCommerce para catálogo, producto y compra.

### Auditoría de menús de WordPress (solo lectura)

- [x] Se encontraron tres menús: `Main Menu`, `Menú Principal` y `Primary`.
- [x] `Primary` contiene 9 enlaces: Inicio, Tienda, cinco categorías comerciales, Servicio Técnico y Contacto.
- [x] `Main Menu` y `Menú Principal` contienen enlaces parciales que duplican categorías o Inicio.
- [x] La lectura inicial devolvió `nav_menu_locations` vacío; se confirmó la cabecera activa de Blocksy y se asignó explícitamente `Primary` a sus ubicaciones.
- [x] Se creó una copia/referencia del menú activo y se dejó una sola navegación principal de 9 enlaces; las categorías vacías no se borraron.

No se deben borrar páginas ni desinstalar WooCommerce durante la fase de diagnóstico. Primero se decide la página canónica y se comprueban sus referencias en WooCommerce y el menú.

## Maqueta de Tienda — comprobado

- [x] Página pública independiente con hero de catálogo y CTA de asesoría.
- [x] Seis productos del catálogo de referencia con precio, stock y compra.
- [x] Filtros por categoría, búsqueda y ordenamiento.
- [x] Estado vacío con acción para limpiar filtros.
- [x] Imágenes cargadas sin dependencias remotas rotas.
- [x] Móvil sin overflow horizontal y controles accesibles.

La maqueta de Tienda no reemplaza el archivo de productos de WooCommerce: sirve para aprobar la composición antes de reconstruir el archivo dinámico en WordPress.
