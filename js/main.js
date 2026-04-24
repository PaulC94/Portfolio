/* ═══════════════════════════════════════════════════════════
   PAUL — Portfolio BTS SIO SLAM
   main.js
═══════════════════════════════════════════════════════════ */
'use strict';

/* ─── PROJECTS DATA (from GitHub repos) ────────────────── */
const PROJECTS = [
  {
    num: '01',
    title: 'NeoAsset Dashboard',
    category: 'Dashboard',
    stack: ['TypeScript', 'React', 'API REST', 'Tailwind'],
    desc: "Dashboard interactif de gestion d'assets numériques. Interface moderne avec graphiques temps réel et gestion de portefeuille.",
    link: 'https://github.com/PaulC94/NeoAsset-Dashboard'
  },
  {
    num: '02',
    title: 'Manga Dash',
    category: 'Hackathon',
    stack: ['React', 'API Jikan', 'CSS', 'Vercel'],
    desc: "Application web développée en hackathon. Exploration d'animes & mangas via l'API Jikan avec filtres et favoris.",
    link: 'https://manga-dash.vercel.app'
  },
  {
    num: '03',
    title: 'Scan Tracker',
    category: 'Web',
    stack: ['TypeScript', 'Next.js', 'Vercel', 'API'],
    desc: "Application de suivi de lectures manga. Tracking des chapitres lus, liste de lecture et notifications.",
    link: 'https://scan-tracker.vercel.app'
  },
  {
    num: '04',
    title: 'Gestion Auto-École',
    category: 'Client Léger',
    stack: ['PHP', 'MySQL', 'HTML/CSS', 'CRUD'],
    desc: "Application web de gestion d'auto-école : planning, élèves, moniteurs, examens. Interface admin complète.",
    link: 'https://github.com/PaulC94/Gestion-AutoEcole'
  },
  {
    num: '05',
    title: 'Puissance 4',
    category: 'Algorithmique',
    stack: ['C', 'Algorithmique', 'Terminal'],
    desc: "Jeu Puissance 4 en C. Intelligence artificielle basique, détection de victoire et interface terminal.",
    link: 'https://github.com/PaulC94/Puissance4'
  },
  {
    num: '06',
    title: 'Projet E-Commerce',
    category: 'Web',
    stack: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    desc: "Plateforme e-commerce complète avec panier, gestion produits, système de commandes et interface d'administration.",
    link: 'https://github.com/PaulC94/projet-dev-Ecommerce'
  }
];

/* ═══════════════════════════════════════════════════════════
   1. LOADER
═══════════════════════════════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    loader.classList.add('gone');
    document.body.style.overflow = '';
    revealHero();
  }, 1600);
}

function revealHero() {
  const els = [
    '.hero-label', '.hero-name', '.hero-role',
    '.hero-sub', '.hero-actions', '.hero-tags', '.hero-scroll-line'
  ];
  els.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.65s ease ${i * 0.08}s, transform 0.65s ease ${i * 0.08}s`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   2. CURSOR (mix-blend-mode: difference)
═══════════════════════════════════════════════════════════ */
function initCursor() {
  const cur = document.getElementById('cursor');
  if (!cur || window.matchMedia('(max-width:680px)').matches) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function loop() {
    cx += (mx - cx) * 0.14;
    cy += (my - cy) * 0.14;
    cur.style.left = cx + 'px';
    cur.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .proj-card, .tl-card, .c-link, .cta-main, .cta-sec').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('big'));
  });
}

/* ═══════════════════════════════════════════════════════════
   3. NAV — scroll + burger
═══════════════════════════════════════════════════════════ */
function initNav() {
  const nav     = document.getElementById('nav');
  const burger  = document.getElementById('burger');
  const overlay = document.getElementById('menu-overlay');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.menu-link').forEach(l => {
    l.addEventListener('click', () => {
      burger.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   4. TYPEWRITER
═══════════════════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById('tw-out');
  if (!el) return;
  const words = ['BTS SIO SLAM_', 'Développeur Web_', 'PHP · React · C#_', 'En alternance bientôt_'];
  let wi = 0, ci = 0, del = false;

  function tick() {
    const w = words[wi];
    if (!del) {
      ci++;
      el.textContent = w.slice(0, ci);
      if (ci === w.length) { del = true; setTimeout(tick, 1600); return; }
    } else {
      ci--;
      el.textContent = w.slice(0, ci);
      if (ci === 0) { del = false; wi = (wi + 1) % words.length; setTimeout(tick, 280); return; }
    }
    setTimeout(tick, del ? 40 : 80);
  }
  tick();
}

/* ═══════════════════════════════════════════════════════════
   5. SCRAMBLE on hover (hero name)
═══════════════════════════════════════════════════════════ */
function initScramble() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$<>';
  document.querySelectorAll('.scramble').forEach(el => {
    const final = el.dataset.final || el.textContent;
    let timer;
    el.addEventListener('mouseenter', () => {
      let iter = 0;
      clearInterval(timer);
      timer = setInterval(() => {
        el.textContent = final.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < iter) return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        iter += 0.5;
        if (iter >= final.length) { el.textContent = final; clearInterval(timer); }
      }, 28);
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   6. SCROLL REVEAL
═══════════════════════════════════════════════════════════ */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.clip-reveal').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   7. COUNTERS
═══════════════════════════════════════════════════════════ */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = parseInt(el.dataset.target, 10);
      let cur   = 0;
      const inc = end / 50;
      const t   = setInterval(() => {
        cur += inc;
        if (cur >= end) { el.textContent = end + '+'; clearInterval(t); return; }
        el.textContent = Math.floor(cur);
      }, 35);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.c-num').forEach(n => io.observe(n));
}

/* ═══════════════════════════════════════════════════════════
   8. SKILLS — animate bars on scroll
═══════════════════════════════════════════════════════════ */
function initSkills() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      /* Animate all bars inside the visible column */
      e.target.querySelectorAll('.sk-fill').forEach((bar, i) => {
        setTimeout(() => bar.classList.add('go'), i * 120);
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-col').forEach(col => io.observe(col));
}

/* ═══════════════════════════════════════════════════════════
   9. PROJECTS — render cards
═══════════════════════════════════════════════════════════ */
function initProjects() {
  const container = document.getElementById('projCards');
  if (!container) return;

  PROJECTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'proj-card clip-reveal';
    card.innerHTML = `
      <div class="pc-top">
        <span class="pc-num">${p.num}</span>
        <span class="pc-cat">${p.category}</span>
      </div>
      <h3 class="pc-title">${p.title}</h3>
      <p class="pc-desc">${p.desc}</p>
      <div class="pc-stack">
        ${p.stack.map(t => `<span class="pc-tag">${t}</span>`).join('')}
      </div>
      ${p.link ? `<a class="pc-link" href="${p.link}" target="_blank" rel="noopener">
        Voir le projet
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>` : ''}
    `;
    container.appendChild(card);
  });

  /* re-trigger reveal for dynamic cards */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  container.querySelectorAll('.clip-reveal').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   10. SMOOTH SCROLL (offset for fixed nav)
═══════════════════════════════════════════════════════════ */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   11. THREE.JS — TORUS KNOT in HERO (3D #1)
═══════════════════════════════════════════════════════════ */
function init3DHero() {
  const canvas = document.getElementById('hero3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.z = 7.2;

  /* ---- Torus Knot Wireframe ---- */
  const geo = new THREE.TorusKnotGeometry(1.2, 0.36, 180, 24, 2, 3);
  const mat = new THREE.MeshBasicMaterial({
    color: 0xD6FF4D,
    wireframe: true,
    transparent: true,
    opacity: 0.55
  });
  const knot = new THREE.Mesh(geo, mat);
  scene.add(knot);

  /* ---- Outer glow ring ---- */
  const ringGeo = new THREE.TorusGeometry(2.0, 0.015, 8, 120);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.18 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 4;
  scene.add(ring);

  /* ---- Particles around the knot ---- */
  const ptCount = 200;
  const ptPositions = new Float32Array(ptCount * 3);
  for (let i = 0; i < ptCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.random() * Math.PI * 2;
    const r     = 2.2 + Math.random() * 0.8;
    ptPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    ptPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    ptPositions[i * 3 + 2] = r * Math.cos(phi);
  }
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPositions, 3));
  const ptMat = new THREE.PointsMaterial({ color: 0xD6FF4D, size: 0.025, transparent: true, opacity: 0.5 });
  const points = new THREE.Points(ptGeo, ptMat);
  scene.add(points);

  /* ---- Mouse parallax ---- */
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 0.6;
    my = (e.clientY / window.innerHeight - 0.5) * 0.6;
  });

  function animate() {
    requestAnimationFrame(animate);
    knot.rotation.x  += 0.004;
    knot.rotation.y  += 0.006;
    ring.rotation.z  += 0.002;
    points.rotation.y += 0.001;
    knot.rotation.y  += (mx - knot.rotation.y  * 0.1) * 0.015;
    knot.rotation.x  += (my - knot.rotation.x  * 0.1) * 0.015;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const nW = canvas.offsetWidth;
    const nH = canvas.offsetHeight;
    camera.aspect = nW / nH;
    camera.updateProjectionMatrix();
    renderer.setSize(nW, nH);
  });
}

/* ═══════════════════════════════════════════════════════════
   12. THREE.JS — WIREFRAME SPHERE in ABOUT (3D #2)
═══════════════════════════════════════════════════════════ */
function init3DAbout() {
  const canvas = document.getElementById('about3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.z = 4;

  /* ---- Wireframe Icosahedron ---- */
  const icoGeo = new THREE.IcosahedronGeometry(1.3, 1);
  const icoEdges = new THREE.EdgesGeometry(icoGeo);
  const icoMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.4 });
  const ico = new THREE.LineSegments(icoEdges, icoMat);
  scene.add(ico);

  /* ---- Outer ring 1 ---- */
  const ring1Geo = new THREE.TorusGeometry(1.8, 0.008, 8, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.15 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  scene.add(ring1);

  /* ---- Outer ring 2 ---- */
  const ring2 = ring1.clone();
  ring2.rotation.x = -Math.PI / 5;
  ring2.rotation.y = Math.PI / 4;
  scene.add(ring2);

  /* ---- Dot cloud ---- */
  const dotCount = 120;
  const dotPos = new Float32Array(dotCount * 3);
  for (let i = 0; i < dotCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 1.3 + (Math.random() - 0.5) * 0.15;
    dotPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    dotPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    dotPos[i * 3 + 2] = r * Math.cos(phi);
  }
  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
  const dotMat = new THREE.PointsMaterial({ color: 0xD6FF4D, size: 0.04, transparent: true, opacity: 0.6 });
  const dots = new THREE.Points(dotGeo, dotMat);
  scene.add(dots);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    ico.rotation.x = t * 0.4;
    ico.rotation.y = t * 0.6;
    ring1.rotation.z = t * 0.3;
    ring2.rotation.z = -t * 0.25;
    dots.rotation.y = t * 0.15;
    ico.position.y = Math.sin(t * 0.7) * 0.08;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const nW = canvas.offsetWidth;
    const nH = canvas.offsetHeight;
    camera.aspect = nW / nH;
    camera.updateProjectionMatrix();
    renderer.setSize(nW, nH);
  });
}

/* ═══════════════════════════════════════════════════════════
   13. THREE.JS — DODECAHEDRON in SKILLS (3D #3)
═══════════════════════════════════════════════════════════ */
function init3DSkills() {
  const canvas = document.getElementById('skills3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.z = 4;

  /* ---- Wireframe Dodecahedron ---- */
  const dodGeo = new THREE.DodecahedronGeometry(1.2, 0);
  const dodEdges = new THREE.EdgesGeometry(dodGeo);
  const dodMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.5 });
  const dod = new THREE.LineSegments(dodEdges, dodMat);
  scene.add(dod);

  /* ---- Inner octahedron ---- */
  const octGeo = new THREE.OctahedronGeometry(0.5, 0);
  const octEdges = new THREE.EdgesGeometry(octGeo);
  const octMat = new THREE.LineBasicMaterial({ color: 0xE8A838, transparent: true, opacity: 0.35 });
  const oct = new THREE.LineSegments(octEdges, octMat);
  scene.add(oct);

  /* ---- Orbiting particles ---- */
  const orbitCount = 60;
  const orbitGeo = new THREE.BufferGeometry();
  const orbitPos = new Float32Array(orbitCount * 3);
  const orbitAngles = [];
  for (let i = 0; i < orbitCount; i++) {
    orbitAngles.push({
      angle: Math.random() * Math.PI * 2,
      speed: 0.005 + Math.random() * 0.01,
      r: 1.5 + Math.random() * 0.5,
      y: (Math.random() - 0.5) * 1.2
    });
  }
  orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPos, 3));
  const orbitMat = new THREE.PointsMaterial({ color: 0xD6FF4D, size: 0.035, transparent: true, opacity: 0.7 });
  const orbitPts = new THREE.Points(orbitGeo, orbitMat);
  scene.add(orbitPts);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;
    dod.rotation.x = t * 0.3;
    dod.rotation.y = t * 0.5;
    oct.rotation.x = -t * 0.6;
    oct.rotation.y = -t * 0.4;
    dod.position.y = Math.sin(t * 0.6) * 0.1;
    oct.position.y = dod.position.y;

    /* Update orbiting particles */
    const positions = orbitPts.geometry.attributes.position.array;
    for (let i = 0; i < orbitCount; i++) {
      const o = orbitAngles[i];
      o.angle += o.speed;
      positions[i * 3]     = Math.cos(o.angle) * o.r;
      positions[i * 3 + 1] = o.y + Math.sin(t + i) * 0.1;
      positions[i * 3 + 2] = Math.sin(o.angle) * o.r;
    }
    orbitPts.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    const nW = canvas.offsetWidth;
    const nH = canvas.offsetHeight;
    camera.aspect = nW / nH;
    camera.updateProjectionMatrix();
    renderer.setSize(nW, nH);
  });
}

/* ═══════════════════════════════════════════════════════════
   14. THREE.JS — FLOATING CUBE in PARCOURS (3D #4)
═══════════════════════════════════════════════════════════ */
function init3DCube() {
  const canvas = document.getElementById('cube3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = 220, H = 220;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 4;

  /* ---- Wireframe cube ---- */
  const boxGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
  const edges  = new THREE.EdgesGeometry(boxGeo);
  const lineMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.7 });
  const cube = new THREE.LineSegments(edges, lineMat);
  scene.add(cube);

  /* ---- Inner smaller cube ---- */
  const innerGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  const innerEdges = new THREE.EdgesGeometry(innerGeo);
  const innerMat  = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
  const inner = new THREE.LineSegments(innerEdges, innerMat);
  scene.add(inner);

  /* ---- Corner spheres ---- */
  const corners = [
    [-0.8,-0.8,-0.8],[0.8,-0.8,-0.8],[-0.8,0.8,-0.8],[0.8,0.8,-0.8],
    [-0.8,-0.8, 0.8],[0.8,-0.8, 0.8],[-0.8,0.8, 0.8],[0.8,0.8, 0.8]
  ];
  corners.forEach(([x, y, z]) => {
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xD6FF4D })
    );
    dot.position.set(x, y, z);
    scene.add(dot);
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.012;
    cube.rotation.x  = t * 0.7;
    cube.rotation.y  = t;
    inner.rotation.x = -t * 1.1;
    inner.rotation.y = -t * 0.8;
    cube.position.y  = Math.sin(t * 0.8) * 0.12;
    inner.position.y = cube.position.y;
    renderer.render(scene, camera);
  }
  animate();
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initTypewriter();
  initScramble();
  initReveal();
  initCounters();
  initSkills();
  initProjects();
  initScroll();
  init3DHero();
  init3DAbout();
  init3DSkills();
  init3DCube();
});
