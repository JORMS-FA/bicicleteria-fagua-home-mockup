# Checklist de aceptación — Bicicletería Fagua

## Portada móvil — comprobado

- [x] Fondo claro con negro, blanco, azul y dorado.
- [x] Logo centrado en la cabecera.
- [x] Lupa y carrito correctamente ubicados.
- [x] Menú fuera de pantalla a la izquierda y entrada de izquierda a derecha.
- [x] Fondo atenuado, scroll bloqueado y foco accesible al abrir el menú.
- [x] Barra superior de una línea, sin pausa y con bandera colombiana consistente.
- [x] Hero responsive con CTA principal y CTA secundario.
- [x] Productos reales con imagen, nombre, precio, disponibilidad y acción de compra.
- [x] Sin desplazamiento horizontal en móvil.
- [x] Imágenes con texto alternativo y botones táctiles amplios.

## Portada — pendiente de aprobación

- [ ] Confirmar tipografía definitiva.
- [ ] Confirmar textos, promociones y precios reales.
- [ ] Revisar contraste WCAG en la versión de WordPress.
- [ ] Validar tablet y escritorio.
- [ ] Validar búsqueda, favoritos, carrito y enlaces reales.
- [ ] Medir rendimiento y revisar errores de consola.

## Flujo de construcción nativa

1. Aprobar la composición de la portada.
2. Configurar WooCommerce, productos, categorías y páginas del sistema.
3. Crear y validar la página Tienda con datos dinámicos.
4. Reconstruir la portada en WordPress con widgets nativos de Elementor y componentes de WooCommerce/Blocksy.
5. Crear Nosotros, Contacto, Taller y páginas legales.
6. Configurar menú, cabecera, pie y enlaces.
7. Probar compra completa, formularios, responsive, accesibilidad y rendimiento.

La maqueta publicada es una referencia visual; el resultado final debe reconstruirse dentro de WordPress para que sea editable y mantenible como una instalación nativa.

## Auditoría del WordPress actual

- [x] WordPress público responde y expone WooCommerce Store API, Elementor y Novamira.
- [x] Instalación observada: Blocksy + Blocksy Companion, Elementor y WooCommerce activos.
- [x] Se conservan las páginas del sistema de WooCommerce: Tienda, Carrito, Finalizar compra y Mi cuenta.
- [x] Hay productos y categorías reales disponibles para la página Tienda.
- [ ] Resolver duplicados: “Nosotros y contacto” frente a “Nosotros” + “Contacto”.
- [ ] Resolver duplicados entre “Políticas y condiciones” y las páginas legales individuales.
- [ ] Corregir el menú después de decidir qué páginas se conservan.
- [ ] Probar checkout con un producto real y no únicamente con carrito vacío.

No se deben borrar páginas ni desinstalar WooCommerce durante la fase de diagnóstico. Primero se decide la página canónica y se comprueban sus referencias en WooCommerce y el menú.
