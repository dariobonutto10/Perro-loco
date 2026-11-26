const puppy = document.getElementById('puppy');
const speech = document.getElementById('speech');
let speechTimer;
const phrases = ['¡Guau! 🐾', '¿Un cafecito?', 'Estoy trabajando…', '¡Qué lindo día!', '¿Salimos a pasear?', 'Te acompaño ❤️'];
function say(message) {
  speech.textContent = message;
  speech.classList.add('show');
  clearTimeout(speechTimer);
  speechTimer = setTimeout(() => speech.classList.remove('show'), 1900);
}
puppy.addEventListener('click', () => say(phrases[Math.floor(Math.random() * phrases.length)]));
puppy.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  window.puppy.contextMenu();
});
// Cada tanto el cachorro levanta la mirada y saluda, sin interrumpir la animación.
setInterval(() => {
  if (Math.random() > 0.62) say('');
}, 18000);
