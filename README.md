# Maqueta de Inicio · Bicicletería Fagua

Esta carpeta contiene una maqueta visual independiente para aprobar la dirección de la portada antes de tocar WordPress.

## Revisar

- [Portada pública](https://jorms-fa.github.io/bicicleteria-fagua-home-mockup/)
- [Maqueta de Tienda](https://jorms-fa.github.io/bicicleteria-fagua-home-mockup/tienda.html)
- [Checklist de aceptación](CHECKLIST.md)
- [Plan de implementación nativa en WordPress](WORDPRESS-NATIVE-IMPLEMENTATION.md)

En GitHub Pages, los enlaces de Inicio y Tienda permanecen dentro de esta maqueta para facilitar la revisión desde el teléfono. Las categorías, fichas de producto, carrito y checkout siguen apuntando al WordPress real; esa adaptación solo se activa en el dominio de la maqueta.

## Archivos

- `index.html`: estructura semántica de la portada.
- `styles.css`: tokens de marca, responsive y estados de interacción.
- `script.js`: búsqueda local de demostración, favoritos visuales y render de productos reales.

## Fuente de los productos

Los seis productos mostrados corresponden al catálogo público actual de WooCommerce. Cuatro usan imágenes locales del catálogo; dos usan placeholders locales declarados mientras se incorpora la fotografía oficial. La maqueta no modifica productos, pedidos ni la biblioteca de medios.

## Traducción a Elementor

La portada no debe pegarse como un widget HTML único. La reconstrucción posterior debe usar una sección por cada atributo `data-elementor-section` y estos elementos nativos:

- `hero`: contenedor de layout + Heading + Text Editor + Image + Buttons.
- `beneficios`: cuatro bloques con Icon + Heading + Text Editor.
- `categorias`: tres enlaces con Heading, Text Editor e Image/forma de fondo del contenedor.
- `productos-destacados`: Products/Loop Grid de WooCommerce o cuatro columnas con Image, Heading, Price y Button.
- `cta-intermedio`: Heading + Text Editor + Button para asesoría de compra.
- `cta-final`: Heading + Button.
- `footer`: se configura globalmente en Blocksy; las políticas permanecen en el pie.

La portada prioriza la conversión: productos reales, precios, disponibilidad y botones de compra. La reconstrucción posterior debe usar widgets nativos de Elementor (Heading, Text Editor, Image, Products/Loop Grid y Button). Los wrappers de layout no sustituyen esos widgets.
