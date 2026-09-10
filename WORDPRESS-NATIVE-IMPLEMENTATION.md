# Plan de implementación nativa — Bicicletería Fagua

Este documento separa la maqueta visual de la implementación real. La maqueta sirve para aprobar la composición; WordPress debe conservar los datos nativos de WooCommerce y permitir editar el contenido con Elementor.

## Arquitectura canónica

| Área | Página o sistema | Regla |
|---|---|---|
| Portada | `Inicio` (ID 555) | Página WordPress editada con widgets nativos de Elementor |
| Catálogo | `Tienda` (ID 7) | Archivo dinámico de WooCommerce; no duplicar productos a mano |
| Ficha | Productos de WooCommerce | Precio, stock, variaciones y compra vienen del producto real |
| Compra | `Carrito` (565), `Finalizar Compra` (566), `Mi Cuenta` (567) | No borrar ni convertir en páginas estáticas |
| Información | `Nosotros`, `Contacto`, `Servicio Técnico` | Una sola página canónica por propósito |
| Legal | Aviso Legal, Privacidad, Cookies, Términos | Enlaces desde el pie; no saturar el menú principal |

## Traducción de la portada a Elementor gratuito

1. **Hero:** contenedor de layout + Heading + Text Editor + Image + Buttons.
2. **Beneficios:** cuatro columnas o tarjetas con Icon, Heading y Text Editor.
3. **Productos destacados:** bloque/loop de WooCommerce o widget Products disponible; la fuente debe ser el catálogo real y excluir agotados.
4. **Categorías:** tarjetas enlazadas a categorías reales (`Bicicletas`, `Componentes`, `Accesorios`).
5. **Promoción:** sección de oferta con un único CTA principal y texto editable.
6. **Asesoría:** Heading + Text Editor + Button hacia Contacto o WPForms.
7. **Pie:** Blocksy/Customizer, con políticas y contacto.

No se debe pegar el HTML completo de la maqueta en un widget HTML. Tampoco se deben copiar manualmente precios, existencias o enlaces de productos.

## Responsabilidad de cada herramienta gratuita

- **Blocksy:** cabecera, logo centrado, menú, pie, estilos globales y compatibilidad visual de WooCommerce.
- **Elementor gratuito:** contenido editable de Inicio y páginas informativas mediante widgets nativos.
- **WooCommerce:** catálogo, categorías, fichas, carrito, checkout, cuenta, precios e inventario.
- **WPForms Lite:** formulario de Contacto, con etiquetas visibles y mensaje de confirmación.

Elementor gratuito no sustituye el Theme Builder de Elementor Pro. Por eso las plantillas globales de tienda/producto y la cabecera deben resolverse con Blocksy y WooCommerce, manteniendo Elementor para el contenido que sí puede editar de forma nativa.

## Menú principal propuesto

`Inicio · Tienda · Bicicletas · Componentes · Accesorios · Servicio Técnico · Nosotros/Contacto`

Carrito y Mi Cuenta deben quedar como iconos o enlaces secundarios. Las páginas legales deben permanecer en el pie. `Indumentaria` solo se añade si hay suficiente inventario y se decide que merece una entrada propia.

## Puertas de verificación

- Antes de editar: copia de seguridad y confirmación de la ubicación de menú que usa Blocksy.
- Después de Tienda: comprobar filtros, búsqueda, orden, stock y enlace a una ficha real.
- Después de Inicio: comprobar edición con Elementor, responsive, foco, contraste, alt y ausencia de overflow.
- Antes de publicar: producto → carrito → checkout → confirmación, formulario de contacto y enlaces legales.

## Hallazgo pendiente

La configuración actual de WooCommerce apunta `woocommerce_terms_page_id` a la página 664, pero ese registro no existe en las páginas consultadas. Antes de publicar el checkout se debe asignar de forma reversible una página de términos válida y revisar su texto; no se debe inventar el correo, teléfono o dirección legal faltante.
