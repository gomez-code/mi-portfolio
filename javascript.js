// Obtener el elemento nav y su elemento padre
const nav = document.querySelector('nav');
const parentElement = nav.parentElement;

// Observar cambios en el color de fondo del elemento padre
const observer = new MutationObserver(() => {
  const backgroundColor = getComputedStyle(parentElement).backgroundColor;
  const isLightBackground = isLightColor(backgroundColor);

  // Ajustar el color del texto según el fondo
  if (isLightBackground) {
    nav.classList.add('dark-text');
  } else {
    nav.classList.remove('dark-text');
  }
});

// Configurar y comenzar la observación del color de fondo
observer.observe(parentElement, { attributes: true });

// Función para verificar si un color es claro u oscuro
function isLightColor(color) {
  const rgb = color.match(/\d+/g).map(Number);
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness > 125;
}
