# Checklist de aceptación — Bicicletería Fagua

## Portada móvil — comprobado en la maqueta pública

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

### Evidencia de la última revisión

- [x] Orden comercial: hero → beneficios → productos destacados → categorías → asesoría → CTA final.
- [x] Una sola sección de productos destacados; no hay duplicación accidental.
- [x] Cuatro tarjetas destacadas con enlace de producto, precio, disponibilidad y CTA.
- [x] Menú lateral probado como panel fuera de pantalla: entra de izquierda a derecha, tiene cierre visible, Escape, fondo atenuado, bloqueo de scroll y retorno del foco al botón de menú.
- [x] Barra de anuncios sin botón de pausa; la bandera se ve en la interfaz y el texto accesible es “¡Envíos a toda Colombia!”.
- [x] En una vista móvil de 319 px de ancho no se detectó overflow horizontal.
- [x] Jerarquía de encabezados comprobada: un H1 para la portada y H2 para las secciones.

## Portada — pendiente de aprobación del propietario

- [ ] Confirmar tipografía definitiva.
- [ ] Confirmar textos, promociones y precios reales.
- [ ] Revisar contraste WCAG en la versión de WordPress.
- [ ] Validar tablet y escritorio.
- [ ] Validar búsqueda, favoritos, carrito y enlaces reales.
- [ ] Medir rendimiento y revisar errores de consola.

### Criterios de “lista para WordPress”

- [ ] Todos los CTAs llevan a destinos reales de WooCommerce o a una página de contenido real.
- [ ] No quedan productos agotados dentro de “Destacados” salvo que se quiera usarlos como preventa.
- [ ] La tipografía final se carga de forma estable y conserva legibilidad móvil (texto normal de al menos 16 px).
- [ ] El logo conserva proporción, texto alternativo y centrado en 320–390 px.
- [ ] El menú no repite Tienda, Nosotros, Contacto ni páginas legales.
- [ ] Cada botón y control de icono tiene nombre accesible, foco visible y área táctil suficiente.

## Flujo de construcción nativa (WordPress + WooCommerce + Elementor gratuito)

1. **Congelar la arquitectura.** Aprobar la portada y definir las páginas canónicas antes de borrar o mover nada.
2. **Dejar WooCommerce activo.** No se desinstala para crear la portada: Tienda, Carrito, Finalizar compra y Mi cuenta son páginas del sistema y deben seguir configuradas en WooCommerce.
3. **Preparar el catálogo.** Revisar productos, categorías, precios, inventario, imágenes y productos destacados; excluir agotados de los bloques de venta.
4. **Construir Tienda primero como archivo dinámico.** La página debe mostrar el catálogo real con filtros, búsqueda, orden y enlaces a fichas de producto; no debe ser una cuadrícula HTML fija.
5. **Reconstruir Inicio directamente en WordPress.** Usar widgets nativos de Elementor (contenedores/columnas, encabezados, imágenes, botones, iconos y separadores) y bloques o componentes nativos de WooCommerce/Blocksy. No pegar una página completa en un widget HTML.
6. **Usar Blocksy para lo global.** Con Elementor gratuito, el encabezado, el menú, el pie y las plantillas globales de WooCommerce se resuelven con Blocksy/Customizer. Elementor gratuito edita el contenido de la página, pero no sustituye por sí solo el Theme Builder de Elementor Pro.
7. **Crear contenido y legal.** Consolidar Nosotros, Contacto y Taller; mantener las páginas legales separadas en el pie; no publicar textos con placeholders como `[Tu email]`.
8. **Configurar el menú canónico.** Inicio, Tienda, Bicicletas, Componentes, Accesorios, Taller y Nosotros/Contacto. Carrito y Mi cuenta quedan como iconos o enlaces secundarios; las páginas legales no van en el menú principal.
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
| Nosotros, Contacto, Taller | Páginas de contenido con widgets nativos | Conservar dos páginas con el mismo propósito |

La maqueta publicada es una referencia visual; el resultado final debe reconstruirse dentro de WordPress para que sea editable y mantenible como una instalación nativa.

## Auditoría del WordPress actual

- [x] WordPress público responde y expone WooCommerce Store API, Elementor y Novamira.
- [x] Instalación observada: Blocksy + Blocksy Companion, Elementor y WooCommerce activos.
- [x] Se conservan las páginas del sistema de WooCommerce: Tienda, Carrito, Finalizar compra y Mi cuenta.
- [x] Hay productos y categorías reales disponibles para la página Tienda.
- [x] WooCommerce quedó apuntando a la página válida “Términos y Condiciones” (ID 1047); el valor anterior 664 se guardó como respaldo reversible.
- [x] La portada ID 555 se reconstruyó con widgets nativos de Elementor; no quedan widgets HTML de página completa.
- [x] El menú `Primary` (ID 124) se asignó a las ubicaciones activas de Blocksy y sustituyó el fallback automático de páginas.
- [x] La cabecera activa conserva menú, logo centrado, búsqueda y carrito; el panel móvil está configurado a la izquierda.
- [x] La franja de envíos se añadió como contenido editable de Elementor, con bandera CSS y texto accesible.
- [x] Los destacados se limitaron a cuatro productos reales actualmente disponibles mediante shortcode de WooCommerce.
- [x] Contacto canónico actualizado: el enlace del menú y el CTA de asesoría apuntan a `/contacto/`; la página antigua se conserva como respaldo hasta aprobar su archivado.
- [x] La página Contacto conserva dirección, horario y formulario WPForms 579; el formulario vuelve a renderizarse con etiquetas y confirmación en español.
- [ ] Resolver duplicados: “Nosotros y contacto” frente a “Nosotros” + “Contacto” (requiere aprobación antes de archivar páginas).
- [ ] Resolver duplicados entre “Políticas y condiciones” y las páginas legales individuales.
- [x] Corregir el menú: `Primary` quedó asignado a Blocksy y el enlace Contacto ya no apunta a la página duplicada.
- [ ] Probar checkout con un producto real y no únicamente con carrito vacío.

### Estado de trabajo recomendado

- [x] Maqueta visual de Inicio aprobada como dirección de diseño.
- [x] Maqueta visual de Tienda disponible para comparar la arquitectura comercial.
- [ ] Auditoría y copia de seguridad de menú, páginas y ajustes de WooCommerce.
- [ ] Definir páginas canónicas y migrar contenido real sin sobrescribir datos sin confirmar.
- [ ] Construir Tienda nativa con el catálogo real.
- [x] Construir Inicio nativo con Elementor y Blocksy (primera versión editable).
- [x] Revisar menú, pie, legales, formularios y recorrido de compra (primera pasada; falta prueba móvil física).

### Auditoría de menús de WordPress (solo lectura)

- [x] Se encontraron tres menús: `Main Menu`, `Menú Principal` y `Primary`.
- [x] `Primary` contiene 8 enlaces: Inicio, Tienda, Bicicletas, Componentes, Indumentaria, Accesorios, Servicio Técnico y Contacto.
- [x] `Main Menu` y `Menú Principal` contienen enlaces parciales que duplican categorías o Inicio.
- [x] La lectura inicial devolvió `nav_menu_locations` vacío; se confirmó la cabecera activa de Blocksy y se asignó explícitamente `Primary` a sus ubicaciones.
- [x] Se creó una copia/referencia del menú activo y se dejó una sola navegación principal de 8 enlaces; queda pendiente decidir si `Indumentaria` permanece visible.

No se deben borrar páginas ni desinstalar WooCommerce durante la fase de diagnóstico. Primero se decide la página canónica y se comprueban sus referencias en WooCommerce y el menú.

## Maqueta de Tienda — comprobado

- [x] Página pública independiente con hero de catálogo y CTA de asesoría.
- [x] Seis productos del catálogo de referencia con precio, stock y compra.
- [x] Filtros por categoría, búsqueda y ordenamiento.
- [x] Estado vacío con acción para limpiar filtros.
- [x] Imágenes cargadas sin dependencias remotas rotas.
- [x] Móvil sin overflow horizontal y controles accesibles.

La maqueta de Tienda no reemplaza el archivo de productos de WooCommerce: sirve para aprobar la composición antes de reconstruir el archivo dinámico en WordPress.
