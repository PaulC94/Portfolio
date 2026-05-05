/* ═══════════════════════════════════════════════
   PAUL — Portfolio BTS SIO SLAM · Simplified
═══════════════════════════════════════════════ */
'use strict';

/* ─── PROJECTS DATA ─── */
const PROJECTS = [
  {
    num: '01', title: 'NeoAsset Dashboard', category: 'Dashboard',
    stack: ['TypeScript', 'React', 'API REST', 'Tailwind'],
    desc: "Dashboard interactif de gestion d'assets numériques. Interface moderne avec graphiques temps réel et gestion de portefeuille.",
    link: 'https://github.com/PaulC94/NeoAsset-Dashboard',
    comps: [
      { code: 'C11', label: 'Référencer les services en ligne — SEO et déploiement' },
      { code: 'C13', label: 'Analyser les objectifs et les modalités du projet' },
      { code: 'C14', label: 'Planifier les activités du projet' },
      { code: 'C15', label: "Évaluer les indicateurs de suivi et d'avancement" },
      { code: 'C16', label: "Réaliser les tests d'intégration et d'acceptation" }
    ]
  },
  {
    num: '02', title: 'Manga Dash', category: 'Hackathon',
    stack: ['React', 'API Jikan', 'CSS', 'Vercel'],
    desc: "Application web développée en hackathon. Exploration d'animes & mangas via l'API Jikan avec filtres et favoris.",
    link: 'https://manga-dash.vercel.app',
    comps: [
      { code: 'C13', label: 'Analyser les objectifs — cahier des charges hackathon' },
      { code: 'C14', label: 'Planifier les activités — coordination Trello (groupe de 5)' },
      { code: 'C15', label: "Évaluer les indicateurs de suivi du projet" }
    ]
  },
  {
    num: '03', title: 'Scan Tracker', category: 'Web',
    stack: ['TypeScript', 'Next.js', 'Vercel', 'API'],
    desc: "Application de suivi de lectures manga. Tracking des chapitres lus, liste de lecture et notifications.",
    link: 'https://scan-tracker.vercel.app',
    comps: [
      { code: 'C11', label: 'Référencer les services en ligne — déploiement Vercel' },
      { code: 'C13', label: 'Analyser les objectifs et les modalités du projet' },
      { code: 'C15', label: "Évaluer les indicateurs de suivi" },
      { code: 'C16', label: "Réaliser les tests d'intégration" },
      { code: 'C17', label: 'Déployer un service — mise en production Vercel' }
    ]
  },
  {
    num: '04', title: 'Gestion Auto-École', category: 'Client Léger',
    stack: ['Java', 'MySQL', 'HTML/CSS', 'CRUD'],
    desc: "Application web de gestion d'auto-école : planning, élèves, moniteurs, examens. Interface admin complète.",
    link: '',
    comps: [
      { code: 'C1', label: 'Recenser les ressources numériques — gestion des données' },
      { code: 'C7', label: 'Collecter et suivre les demandes — interface CRUD' },
      { code: 'C13', label: 'Analyser les objectifs du projet' },
      { code: 'C14', label: 'Planifier les activités du projet' },
      { code: 'C15', label: "Évaluer les indicateurs de suivi" },
      { code: 'C16', label: "Réaliser les tests d'intégration — tests CRUD" }
    ]
  },
  {
    num: '05', title: 'Puissance 4', category: 'Algorithmique',
    stack: ['C', 'Algorithmique', 'Terminal'],
    desc: "Jeu Puissance 4 en C. Intelligence artificielle basique, détection de victoire et interface terminal.",
    link: 'https://github.com/PaulC94/Puissance4',
    comps: [
      { code: 'C13', label: 'Analyser les objectifs — conception algorithmique' },
      { code: 'C15', label: "Évaluer les indicateurs — détection de victoire, IA" }
    ]
  },
  {
    num: '06', title: 'Projet E-Commerce', category: 'Web',
    stack: ['Java', 'MySQL', 'JavaScript', 'CSS'],
    desc: "Plateforme e-commerce complète avec panier, gestion produits, système de commandes et interface d'administration.",
    link: '',
    comps: [
      { code: 'C13', label: 'Analyser les objectifs — cahier des charges complet' },
      { code: 'C14', label: 'Planifier les activités du projet' },
      { code: 'C15', label: "Évaluer les indicateurs — priorisation MVP" },
      { code: 'C16', label: "Réaliser les tests d'intégration — tests CRUD Java" }
    ]
  }
];

/* ═══════ NAV — burger toggle ═══════ */
function initNav() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ═══════ SMOOTH SCROLL ═══════ */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 64,
        behavior: 'smooth'
      });
    });
  });
}

/* ═══════ FADE IN ON SCROLL ═══════ */
function initFadeIn() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

/* ═══════ COUNTERS ═══════ */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = parseInt(el.dataset.target, 10);
      let cur = 0;
      const inc = end / 40;
      const t = setInterval(() => {
        cur += inc;
        if (cur >= end) { el.textContent = end + '+'; clearInterval(t); return; }
        el.textContent = Math.floor(cur);
      }, 40);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach(n => io.observe(n));
}

/* ═══════ PROJECTS — render cards ═══════ */
function initProjects() {
  const container = document.getElementById('projCards');
  if (!container) return;

  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proj-card fade-in';

    const compsHTML = p.comps ? `
      <div class="proj-comps">
        <div class="proj-comps-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Compétences validées
        </div>
        ${p.comps.map(c => `<div class="proj-comp-item"><span class="proj-comp-code">${c.code}</span>${c.label}</div>`).join('')}
      </div>` : '';

    card.innerHTML = `
      <div class="proj-top">
        <span class="proj-num">${p.num}</span>
        <span class="proj-cat">${p.category}</span>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.desc}</p>
      <div class="proj-stack">
        ${p.stack.map(t => `<span class="proj-tag">${t}</span>`).join('')}
      </div>
      ${compsHTML}
      <div class="proj-actions">
        ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener">
          Voir le projet
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>` : ''}
        <button class="proj-toggle" onclick="this.closest('.proj-card').classList.toggle('open')">
          <span class="proj-toggle-show">Voir les compétences ↓</span>
          <span class="proj-toggle-hide">Masquer ↑</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ═══════ INIT ═══════ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScroll();
  initProjects();
  initFadeIn();
  initCounters();
});
