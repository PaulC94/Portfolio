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
    link: 'https://github.com/PaulC94/NeoAsset-Dashboard'
  },
  {
    num: '02', title: 'Manga Dash', category: 'Hackathon',
    stack: ['React', 'API Jikan', 'CSS', 'Vercel'],
    desc: "Application web développée en hackathon. Exploration d'animes & mangas via l'API Jikan avec filtres et favoris.",
    link: 'https://manga-dash.vercel.app'
  },
  {
    num: '03', title: 'Scan Tracker', category: 'Web',
    stack: ['TypeScript', 'Next.js', 'Vercel', 'API'],
    desc: "Application de suivi de lectures manga. Tracking des chapitres lus, liste de lecture et notifications.",
    link: 'https://scan-tracker.vercel.app'
  },
  {
    num: '04', title: 'Gestion Auto-École', category: 'Client Léger',
    stack: ['Java', 'MySQL', 'HTML/CSS', 'CRUD'],
    desc: "Application web de gestion d'auto-école : planning, élèves, moniteurs, examens. Interface admin complète.",
    link: ''
  },
  {
    num: '05', title: 'Puissance 4', category: 'Algorithmique',
    stack: ['C', 'Algorithmique', 'Terminal'],
    desc: "Jeu Puissance 4 en C. Intelligence artificielle basique, détection de victoire et interface terminal.",
    link: 'https://github.com/PaulC94/Puissance4'
  },
  {
    num: '06', title: 'Projet E-Commerce', category: 'Web',
    stack: ['Java', 'MySQL', 'JavaScript', 'CSS'],
    desc: "Plateforme e-commerce complète avec panier, gestion produits, système de commandes et interface d'administration.",
    link: ''
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
      ${p.link ? `<a class="proj-link" href="${p.link}" target="_blank" rel="noopener">
        Voir le projet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>` : ''}
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
