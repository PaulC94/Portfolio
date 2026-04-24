/* ═══════════════════════════════════════════════════════════
   EXAMEN PAGE — Three.js scenes + init
═══════════════════════════════════════════════════════════ */
'use strict';

/* ═══════════════════════════════════════════════════════════
   1. THREE.JS — DNA HELIX in EXAM HERO (3D #1)
═══════════════════════════════════════════════════════════ */
function init3DExamHero() {
  const canvas = document.getElementById('examHero3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
  camera.position.z = 6;

  /* ---- DNA Double Helix ---- */
  const helixGroup = new THREE.Group();
  scene.add(helixGroup);

  const helixPoints1 = [];
  const helixPoints2 = [];
  const segments = 200;
  const helixRadius = 1.2;
  const helixHeight = 8;
  const turns = 3;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2 * turns;
    const y = t * helixHeight - helixHeight / 2;

    helixPoints1.push(new THREE.Vector3(
      Math.cos(angle) * helixRadius,
      y,
      Math.sin(angle) * helixRadius
    ));

    helixPoints2.push(new THREE.Vector3(
      Math.cos(angle + Math.PI) * helixRadius,
      y,
      Math.sin(angle + Math.PI) * helixRadius
    ));
  }

  const curve1 = new THREE.CatmullRomCurve3(helixPoints1);
  const curve2 = new THREE.CatmullRomCurve3(helixPoints2);

  const tubeMat1 = new THREE.MeshBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.5 });
  const tubeMat2 = new THREE.MeshBasicMaterial({ color: 0xE8A838, transparent: true, opacity: 0.4 });

  const tube1 = new THREE.Mesh(new THREE.TubeGeometry(curve1, 100, 0.03, 6, false), tubeMat1);
  const tube2 = new THREE.Mesh(new THREE.TubeGeometry(curve2, 100, 0.03, 6, false), tubeMat2);
  helixGroup.add(tube1, tube2);

  /* ---- Cross bridges between helices ---- */
  const bridgeMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.15 });
  for (let i = 0; i < segments; i += 8) {
    const t = i / segments;
    const angle = t * Math.PI * 2 * turns;
    const y = t * helixHeight - helixHeight / 2;

    const p1 = new THREE.Vector3(Math.cos(angle) * helixRadius, y, Math.sin(angle) * helixRadius);
    const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * helixRadius, y, Math.sin(angle + Math.PI) * helixRadius);

    const geo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
    helixGroup.add(new THREE.Line(geo, bridgeMat));
  }

  /* ---- Floating particles ---- */
  const ptCount = 150;
  const ptPositions = new Float32Array(ptCount * 3);
  for (let i = 0; i < ptCount; i++) {
    ptPositions[i * 3] = (Math.random() - 0.5) * 6;
    ptPositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    ptPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPositions, 3));
  const ptMat = new THREE.PointsMaterial({ color: 0xD6FF4D, size: 0.025, transparent: true, opacity: 0.4 });
  const particles = new THREE.Points(ptGeo, ptMat);
  scene.add(particles);

  /* ---- Mouse parallax ---- */
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
    my = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    helixGroup.rotation.y = t + mx * 0.5;
    helixGroup.rotation.x = Math.sin(t * 0.3) * 0.15 + my * 0.3;
    particles.rotation.y += 0.001;
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
   2. THREE.JS — MORPHING SPHERE in E5 (3D #2)
═══════════════════════════════════════════════════════════ */
function init3DE5() {
  const canvas = document.getElementById('e5-3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
  camera.position.z = 4;

  /* ---- Wireframe sphere with distortion ---- */
  const geo = new THREE.SphereGeometry(1.3, 32, 32);
  const originalPositions = geo.attributes.position.array.slice();

  const edges = new THREE.EdgesGeometry(geo);
  const mat = new THREE.LineBasicMaterial({ color: 0xE8A838, transparent: true, opacity: 0.45 });
  const sphere = new THREE.LineSegments(edges, mat);
  scene.add(sphere);

  /* ---- Inner tetrahedron ---- */
  const tetraGeo = new THREE.TetrahedronGeometry(0.6, 0);
  const tetraEdges = new THREE.EdgesGeometry(tetraGeo);
  const tetraMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.5 });
  const tetra = new THREE.LineSegments(tetraEdges, tetraMat);
  scene.add(tetra);

  /* ---- Orbit ring ---- */
  const ringGeo = new THREE.TorusGeometry(1.8, 0.008, 8, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xE8A838, transparent: true, opacity: 0.2 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 3;
  scene.add(ring);

  /* ---- Orbiting dot ---- */
  const orbDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xD6FF4D })
  );
  scene.add(orbDot);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;

    sphere.rotation.x = t * 0.3;
    sphere.rotation.y = t * 0.5;
    tetra.rotation.x = -t * 0.8;
    tetra.rotation.y = -t * 0.6;
    ring.rotation.z = t * 0.2;

    /* Orbiting dot */
    const orbAngle = t * 1.5;
    const orbR = 1.8;
    orbDot.position.set(
      Math.cos(orbAngle) * orbR,
      Math.sin(orbAngle) * orbR * Math.sin(Math.PI / 3),
      Math.sin(orbAngle) * orbR * Math.cos(Math.PI / 3)
    );

    /* Floating */
    sphere.position.y = Math.sin(t * 0.5) * 0.08;
    tetra.position.y = sphere.position.y;

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
   3. THREE.JS — PARTICLE NETWORK in VEILLE (3D #3)
═══════════════════════════════════════════════════════════ */
function init3DVeille() {
  const canvas = document.getElementById('veille3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = 250, H = 250;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 4;

  /* ---- Octahedron wireframe ---- */
  const octGeo = new THREE.OctahedronGeometry(1.2, 0);
  const octEdges = new THREE.EdgesGeometry(octGeo);
  const octMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.5 });
  const oct = new THREE.LineSegments(octEdges, octMat);
  scene.add(oct);

  /* ---- Outer wireframe sphere ---- */
  const sphGeo = new THREE.IcosahedronGeometry(1.6, 1);
  const sphEdges = new THREE.EdgesGeometry(sphGeo);
  const sphMat = new THREE.LineBasicMaterial({ color: 0xD6FF4D, transparent: true, opacity: 0.12 });
  const sph = new THREE.LineSegments(sphEdges, sphMat);
  scene.add(sph);

  /* ---- Corner dots ---- */
  const vertices = octGeo.attributes.position;
  for (let i = 0; i < vertices.count; i++) {
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xD6FF4D })
    );
    dot.position.set(vertices.getX(i), vertices.getY(i), vertices.getZ(i));
    oct.add(dot);
  }

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.012;
    oct.rotation.x = t * 0.5;
    oct.rotation.y = t * 0.7;
    sph.rotation.x = -t * 0.2;
    sph.rotation.y = -t * 0.3;
    oct.position.y = Math.sin(t * 0.6) * 0.1;
    renderer.render(scene, camera);
  }
  animate();
}

/* ═══════════════════════════════════════════════════════════
   4. THREE.JS — GLOWING TORUS in CV (3D #4)
═══════════════════════════════════════════════════════════ */
function init3DCV() {
  const canvas = document.getElementById('cv3d');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = 500, H = 500;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(W, H);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 5;

  /* ---- Torus ---- */
  const torusGeo = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
  const torusMat = new THREE.MeshBasicMaterial({
    color: 0xD6FF4D,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  scene.add(torus);

  /* ---- Inner ring ---- */
  const innerGeo = new THREE.TorusGeometry(0.8, 0.15, 12, 60);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0xE8A838,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const inner = new THREE.Mesh(innerGeo, innerMat);
  inner.rotation.x = Math.PI / 2;
  scene.add(inner);

  /* ---- Particles ---- */
  const ptCount = 100;
  const ptPos = new Float32Array(ptCount * 3);
  for (let i = 0; i < ptCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = 1.5 + (Math.random() - 0.5) * 1;
    ptPos[i * 3] = Math.cos(angle) * r;
    ptPos[i * 3 + 1] = (Math.random() - 0.5) * 2;
    ptPos[i * 3 + 2] = Math.sin(angle) * r;
  }
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPos, 3));
  const ptMat = new THREE.PointsMaterial({ color: 0xD6FF4D, size: 0.03, transparent: true, opacity: 0.5 });
  scene.add(new THREE.Points(ptGeo, ptMat));

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    torus.rotation.x = t * 0.4;
    torus.rotation.y = t * 0.6;
    inner.rotation.y = -t * 0.5;
    inner.rotation.z = t * 0.3;
    renderer.render(scene, camera);
  }
  animate();
}

/* ═══════════════════════════════════════════════════════════
   EXAMEN PAGE INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  /* 3D scenes */
  init3DExamHero();
  init3DE5();
  init3DVeille();
  init3DCV();

  /* Reveal on scroll for exam page elements */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.clip-reveal').forEach(el => io.observe(el));
});
