/* ═══════════════════════════════════════════════════════════
   PAUL — Portfolio BTS SIO SLAM
   main.js
═══════════════════════════════════════════════════════════ */
'use strict';

/* ─── PROJECTS DATA ─────────────────────────────────────── */
const PROJECTS = [
  {
    num: '01',
    title: 'Manga Explorer',
    category: 'Hackathon',
    stack: ['React', 'API Jikan', 'Axios', 'Tailwind'],
    desc: "App web développée en hackathon. API Jikan pour animes & mangas.",
    link: null
  },
  {
    num: '02',
    title: 'Application Fullstack',
    category: 'Fullstack',
    stack: ['Node.js', 'React', 'Express', 'MySQL'],
    desc: "Solution web complète backend + frontend. REST API + auth.",
    link: null
  },
  {
    num: '03',
    title: 'Application Client Lourd',
    category: 'Client Lourd',
    stack: ['C#', '.NET', 'WPF', 'SQL Server'],
    desc: "Logiciel bureau pour gestion de données locales. Interface WPF.",
    link: null
  },
  {
    num: '04',
    title: 'Site Client Léger',
    category: 'Client Léger',
    stack: ['HTML', 'CSS', 'PHP', 'MySQL'],
    desc: "Interface web intranet, gestion dynamique côté serveur.",
    link: null
  },
  {
    num: '05',
    title: 'Plateforme E-Learning',
    category: 'Client Léger',
    stack: ['Wix', 'CMS', 'Web Design'],
    desc: "Site éducatif responsive pour l'apprentissage en ligne.",
    link: 'https://paulc94.ovh'
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
    '.hero-sub', '.hero-actions', '.hero-scroll-line'
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
  if (!cur || window.matchMedia('(max-width:600px)').matches) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  (function loop() {
    cx += (mx - cx) * 0.14;
    cy += (my - cy) * 0.14;
    cur.style.left = cx + 'px';
    cur.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .proj-row, .tl-card, .c-link, .cta-main, .cta-sec').forEach(el => {
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
  const words = ['Dev Fullstack_', 'Futur Data Engineer_', 'BTS SIO SLAM_', 'Passionné d\'IT_'];
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
   8. PROJECTS — render + hover
═══════════════════════════════════════════════════════════ */
function initProjects() {
  const list = document.getElementById('projList');
  if (!list) return;

  PROJECTS.forEach(p => {
    const row = document.createElement('div');
    row.className = 'proj-row clip-reveal';
    row.innerHTML = `
      <span class="proj-num">${p.num}</span>
      <div class="proj-main">
        <div class="proj-title-txt">${p.title}</div>
        <div class="proj-cat">${p.category}</div>
        <div class="proj-stack-row">${p.stack.join(' · ')}</div>
      </div>
      <div class="proj-right">
        ${p.link ? `<a class="proj-ext-link" href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Voir le site ↗</a>` : ''}
        <div class="proj-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>`;
    list.appendChild(row);
  });

  /* re-trigger reveal for dynamic rows */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  list.querySelectorAll('.clip-reveal').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   9. SMOOTH SCROLL (offset for fixed nav)
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
   10. THREE.JS — TORUS KNOT in HERO (3D #1)
═══════════════════════════════════════════════════════════ */
function init3DHero() {
  const canvas = document.getElementById('hero3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;
  canvas.width  = W * window.devicePixelRatio;
  canvas.height = H * window.devicePixelRatio;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.z = 5;

  /* ---- Torus Knot Wireframe ---- */
  const geo = new THREE.TorusKnotGeometry(1.4, 0.42, 180, 24, 2, 3);
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

    /* Smooth parallax */
    knot.rotation.y  += (mx - knot.rotation.y  * 0.1) * 0.015;
    knot.rotation.x  += (my - knot.rotation.x  * 0.1) * 0.015;

    renderer.render(scene, camera);
  }
  animate();

  /* Resize */
  window.addEventListener('resize', () => {
    const nW = canvas.offsetWidth;
    const nH = canvas.offsetHeight;
    camera.aspect = nW / nH;
    camera.updateProjectionMatrix();
    renderer.setSize(nW, nH);
  });
}

/* ═══════════════════════════════════════════════════════════
   11. THREE.JS — FLOATING CUBE in PARCOURS section (3D #2)
═══════════════════════════════════════════════════════════ */
function init3DCube() {
  const canvas = document.getElementById('cube3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = 200, H = 200;
  canvas.width  = W * window.devicePixelRatio;
  canvas.height = H * window.devicePixelRatio;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
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
    /* Bobbing */
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
  initProjects();
  initScroll();
  init3DHero();
  init3DCube();
});
