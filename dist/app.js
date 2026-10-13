'use strict';
const menu = document.querySelector('.menu-button');
const nav = document.getElementById('nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menú'); nav.classList.remove('is-open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); nav.classList.toggle('is-open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.addEventListener('resize', () => { if(window.innerWidth > 800) closeMenu(); });
const treatments = [...document.querySelectorAll('.treatment')];
treatments.forEach(detail => detail.querySelector('summary').addEventListener('click', () => { if(!detail.open) treatments.forEach(other => { if(other !== detail) other.open = false; }); }));
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.getElementById('servicio').value = link.dataset.service; }));
const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('nombre');
  const status = document.getElementById('form-status');
  name.setCustomValidity('');
  if(!name.value.trim()) { name.setCustomValidity('Escribí tu nombre para preparar la consulta.'); name.reportValidity(); return; }
  const service = document.getElementById('servicio').value;
  const message = document.getElementById('mensaje').value.trim();
  const text = `Hola CEOCOR, soy ${name.value.trim()}. Quisiera consultar por: ${service}.${message ? '\n\n' + message : ''}`;
  const url = 'https://wa.me/543794759547?text=' + encodeURIComponent(text);
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  status.replaceChildren(document.createTextNode('Tu consulta está preparada. '));
  const fallback = document.createElement('a'); fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener'; fallback.textContent = 'Abrir WhatsApp'; status.appendChild(fallback);
});
document.getElementById('nombre').addEventListener('input', event => event.target.setCustomValidity(''));
document.getElementById('year').textContent = new Date().getFullYear();
