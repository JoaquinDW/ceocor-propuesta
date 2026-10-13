# CEOCOR — propuesta de landing page

Rediseño editorial del Centro Odontológico Corrientes. HTML, CSS y JavaScript estáticos, sin compilación ni dependencias de aplicación. Tipografías y fotografías alojadas localmente.

## Abrir localmente

Desde esta carpeta: `python3 -m http.server 4173 --directory dist`. Abrir http://localhost:4173.

## Funcionalidad

Menú móvil, tratamientos y preguntas desplegables, enlaces de ubicación y teléfono, preselección del tratamiento al consultar, formulario validado que prepara un mensaje de WhatsApp. El visitante decide cuándo enviarlo. El formulario no almacena ni envía información a un servidor propio.

## Contenido y fotografía

Información comercial y contactos extraídos de https://ceocor.com/ el 13 de octubre de 2026. No se añadieron testimonios, nombres de especialistas, matrículas, estadísticas ni promesas de respuesta. Confirmar con la clínica los servicios, horarios, convenios y datos antes del lanzamiento público.

Las fotografías de `sonrisa-editorial.jpg` y `espacio-editorial.jpg` fueron generadas con ImageGen para esta propuesta. Se identifican como ilustrativas en la página. No representan pacientes, resultados ni instalaciones reales. Los prompts exactos están incorporados en los metadatos JPEG y acompañan el paquete en `ASSETS.md`. Se recomienda sustituirlas por una producción fotográfica real de la clínica para la versión definitiva.

## Validación

Se comprobaron los recursos locales, anclas, identificadores, opciones de servicio y sintaxis JavaScript. Pruebas en navegador: navegación móvil, despliegue de tratamientos, preselección, validación de nombre y preparación del enlace de WhatsApp. Composición revisada a 1440 y 390 píxeles y en el ancho de la vista del usuario. Se incluye foco visible, navegación por teclado, controles semánticos y reducción de movimiento.

## Despliegue

La implementación está en `dist/`. Se puede alojar en cualquier hosting estático. La publicación de Sites es una propuesta privada independiente del dominio ceocor.com.
