# Informe QA — Bicicletería Fagua

**Fecha de revisión:** 11/09/2026  
**Entorno real:** WordPress + Blocksy + Elementor gratuito + WooCommerce  
**Maqueta pública:** <https://jorms-fa.github.io/bicicleteria-fagua-home-mockup/>

## Matriz de vistas

| Vista | Resultado |
| --- | --- |
| 300–320 px | Sin overflow; controles móviles accesibles |
| 390–412 px | Sin overflow; logo centrado; drawer funcional |
| 768 px | Cabecera y controles centrados; sin overflow |
| 1280 px | Sin overflow; navegación de escritorio visible |

## Accesibilidad y conversión

- Una sola H1 en Inicio, Tienda, categorías, producto, carrito, checkout y páginas informativas.
- Imágenes visibles con texto alternativo; no se detectaron `alt` vacíos.
- CTA, filtros, carrito, checkout, paginación y cierre del drawer con objetivos táctiles de al menos 44 px en móvil.
- Drawer móvil cerrado por defecto, entra desde la izquierda, bloquea el scroll, admite Escape y devuelve el foco.
- Carrusel superior de una línea, con banderas colombianas visibles, sin botón de pausa y con reducción de movimiento.
- Consola sin errores ni advertencias durante las pruebas públicas.

## Flujo de compra

- Tienda real: catálogo, categorías, búsqueda, ordenamiento, filtros, estados disponible/agotado y paginación.
- Ficha de producto: imagen, precio, disponibilidad y añadir al carrito.
- Carrito: cantidad, quitar producto, cupón, actualización y finalizar compra.
- Checkout: facturación, departamento, métodos de pago, términos y botón de pedido.
- Mi cuenta: acceso, mostrar contraseña, recordar sesión y recuperación.

## Compatibilidad nativa

- Inicio publicado como Elementor JSON: 53 widgets, 0 widgets HTML y 1 shortcode de productos.
- Widgets usados: Heading, Text Editor, Image, Button y shortcode de WooCommerce.
- Blocksy conserva la cabecera, el pie y el drawer; WooCommerce conserva catálogo, producto, carrito y checkout.
- El menú principal tiene 7 enlaces canónicos; los menús antiguos permanecen sin asignar como respaldo reversible.

## Pendientes del propietario

- Confirmar precios, promociones y textos comerciales definitivos.
- Elegir categorías prioritarias y el orden de agotados.
- Revisar jurídicamente responsable, jurisdicción, privacidad y términos en Colombia.
- Probar visualmente en el teléfono físico antes de publicar cambios comerciales.

La maqueta pública mantiene Inicio y Tienda dentro de GitHub Pages; sus categorías y fichas enlazan al WordPress real para conservar el flujo auténtico.
