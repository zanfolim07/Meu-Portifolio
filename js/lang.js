import { atualizarTextoApresentacao } from "../js/apresentacao.js";

let currentLang = localStorage.getItem('lang') || 'pt';

async function loadLang(lang) {
  const response = await fetch(`json/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Ignora nome e cargo pois são controlados pela animação
    if (key === 'nome' || key === 'cargo') return;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  atualizarTextoApresentacao(lang);
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

export function iniciarLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      loadLang(btn.dataset.lang);
    });
  });
  loadLang(currentLang);
}