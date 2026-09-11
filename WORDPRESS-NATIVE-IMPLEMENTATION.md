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

- **Blocksy:** cabecera (incluida la franja superior de envíos), logo centrado, menú, pie, estilos globales y compatibilidad visual de WooCommerce.
- **Elementor gratuito:** contenido editable de Inicio y páginas informativas mediante widgets nativos.
- **WooCommerce:** catálogo, categorías, fichas, carrito, checkout, cuenta, precios e inventario.
- **WPForms Lite:** formulario de Contacto, con etiquetas visibles y mensaje de confirmación.

Elementor gratuito no sustituye el Theme Builder de Elementor Pro. Por eso las plantillas globales de tienda/producto y la cabecera deben resolverse con Blocksy y WooCommerce, manteniendo Elementor para el contenido que sí puede editar de forma nativa.

## Menú principal actual y regla de simplificación

El menú `Primary` (ID 124) está asignado a las ubicaciones activas de Blocksy y contiene siete entradas comprobadas:

`Inicio · Tienda · Bicicletas · Componentes · Accesorios · Servicio Técnico · Contacto`

Carrito y Mi Cuenta quedan como iconos secundarios. `Nosotros` se mantiene como página informativa enlazada desde el pie, sin duplicar Contacto. Las páginas legales permanecen en el pie. `Indumentaria` se retiró de la navegación visible porque la categoría está vacía; la categoría y sus productos futuros no se borraron.

## Puertas de verificación

- Antes de editar: copia de seguridad y confirmación de la ubicación de menú que usa Blocksy.
- Después de Tienda: comprobar filtros, búsqueda, orden, stock y enlace a una ficha real.
- Después de Inicio: comprobar edición con Elementor, responsive, foco, contraste, alt y ausencia de overflow.
- Antes de publicar: producto → carrito → checkout → confirmación, formulario de contacto y enlaces legales.

## Cambios aplicados y pendientes de validación

Se corrigió de forma reversible `woocommerce_terms_page_id` para usar la página válida 1047 (`/terminos-condiciones/`) y se guardó el valor anterior en `fagua_backup_woocommerce_terms_page_id`. La portada 555 ya usa widgets nativos de Elementor, incluye un hero con imagen real de producto y el menú `Primary` 124 está asignado a Blocksy con distribución logo-centro / búsqueda-carrito-derecha. La franja de envíos se muestra una sola vez en la fila superior de Blocksy (por encima del encabezado) y el duplicado dentro de Elementor queda oculto con una regla reversible. Los destacados muestran cuatro IDs reales con stock disponible.

El archivo de Tienda mantiene el catálogo dinámico de WooCommerce, ahora con barra lateral nativa de categorías y precio, tarjetas estilizadas desde Blocksy y objetivos táctiles móviles de 44 px. El MU-plugin `fagua-mobile-shop-filters.php` añade en móvil filtros dinámicos de categoría, rango de precio y disponibilidad; en escritorio permanece oculto para conservar el sidebar nativo. La página duplicada “Nosotros y contacto” y el agregado antiguo “Políticas y condiciones” se conservaron como borradores reversibles; “Nosotros”, “Contacto” y las páginas legales individuales quedan como páginas canónicas.

La auditoría móvil confirmó el drawer desde la izquierda, foco y Escape, logo centrado, ausencia de overflow y el orden comercial de la portada. La auditoría de escritorio tampoco encontró overflow ni imágenes sin `alt`; los enlaces adicionales del menú quedan agrupados en un desplegable “Más” accesible. La búsqueda de Blocksy está traducida al español, incluido el encabezado de resultados “Resultados de búsqueda para …”; el estado sin coincidencias muestra “Sin resultados” y permite intentar otra búsqueda. Las etiquetas de oferta, agotado y las leyendas de precio original/actual también están localizadas. Los CTA de Elementor, los enlaces de categorías y las acciones de productos destacados de la portada quedaron con objetivos táctiles mínimos de 44 px. También se verificaron ficha, carrito, checkout, Contacto, Nosotros, Servicio Técnico y las páginas legales; sus campos y acciones principales tienen objetivos táctiles de 44 px y jerarquías de encabezado consistentes. Falta la validación final de copy, precios/promociones y datos legales que todavía no estén confirmados; no se debe inventar correo, teléfono o dirección.
