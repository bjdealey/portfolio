'use strict';

// ── HELPERS ──────────────────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function arrowSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="16" height="16">
    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

// ── POPULATE FROM content.js ─────────────────────────────────────────────────

function populate() {
  const C = CONTENT;

  // Page title
  document.title = `${C.name} — Portfolio`;

  // Nav
  document.querySelectorAll('.logo-text').forEach(e => e.textContent = C.initials);
  el('nav-initials').textContent  = C.initials;
  el('footer-initials').textContent = C.initials;
  el('nav-cta').textContent = C.hireMeText;
  el('nav-cta').dataset.umamiEvent = 'Nav: Hire Me';

  // Hero
  el('hero-availability').textContent = C.availableForWork ? 'Available for work' : 'Currently unavailable';
  el('hero-eyebrow').querySelector('.dot').style.display = C.availableForWork ? '' : 'none';
  el('hero-title-line1').textContent  = C.hero.titleLine1;
  el('hero-title-accent').textContent = C.hero.titleAccent;
  el('hero-sub').textContent          = C.hero.subtitle;

  // CV download buttons
  if (C.cvFile) {
    ['hero-cv-btn', 'about-cv-btn'].forEach(id => {
      const btn = el(id);
      if (btn) { btn.href = C.cvFile; btn.style.display = ''; }
    });
  }

  // Stats
  el('stats-inner').innerHTML = C.stats.map((s, i) => `
    ${i > 0 ? '<div class="stat-div"></div>' : ''}
    <div class="stat" data-count="${s.count}">
      <span class="stat-num">0</span>
      <span class="stat-label">${s.label}</span>
    </div>`
  ).join('');

  // About
  el('about-title-1').textContent = C.about.titleLine1;
  el('about-title-2').textContent = C.about.titleLine2;
  el('about-body').innerHTML = C.about.body
    .map(p => `<p class="about-body">${p}</p>`).join('');
  el('about-tags').innerHTML = C.about.tags
    .map(t => `<span class="tag">${t}</span>`).join('');

  // Timeline
  const timelineList = el('timeline-list');
  if (timelineList && C.timeline && C.timeline.length) {
    timelineList.innerHTML = C.timeline.map((entry, i) => `
      <div class="timeline-entry">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
        </div>
        <div class="timeline-body">
          <p class="timeline-period">${entry.period}</p>
          <h3 class="timeline-role">${entry.role}</h3>
          <p class="timeline-company">${entry.company}</p>
          <p class="timeline-desc">${entry.description}</p>
        </div>
      </div>`
    ).join('');
  }

  // Expertise cards
  el('expertise-grid').innerHTML = C.expertise.map((card, i) => `
    <div class="expertise-card" style="transition-delay:${i * 80}ms">
      <div class="card-icon">${expertiseIcon(i)}</div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <div class="card-rule"></div>
      <ul class="card-list">
        ${card.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>`
  ).join('');

  // Projects
  el('work-grid').innerHTML = C.projects.map(p => `
    <article class="work-card ${p.featured ? 'work-card--featured' : ''}">
      <div class="work-card-img" style="--hue:220">
        <div class="work-card-placeholder">
          ${p.featured
            ? '<div class="placeholder-lines"><div class="pl pl-1"></div><div class="pl pl-2"></div><div class="pl pl-3"></div></div>'
            : '<div class="placeholder-circle"></div>'}
        </div>
      </div>
      <div class="work-card-body">
        <div class="work-card-meta">
          ${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.linkHref}" class="work-link" ${p.linkHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} data-umami-event="Project: ${p.title}">
          ${p.linkText} ${arrowSvg()}
        </a>
      </div>
    </article>`
  ).join('');

  // Certifications
  const certGrid = el('cert-grid');
  if (certGrid && C.certifications && C.certifications.length) {
    certGrid.innerHTML = C.certifications.map(c => `
      <div class="cert-card">
        <div class="cert-badge">${c.issuerInitials}</div>
        <div class="cert-body">
          <p class="cert-issuer">${c.issuer}</p>
          <h3 class="cert-title">${c.title}</h3>
          <div class="cert-meta">
            <span class="cert-date">Issued ${c.issued}</span>
            <span class="cert-id">ID&nbsp;${c.credentialId}</span>
          </div>
        </div>
      </div>`
    ).join('');
  }

  // Testimonials
  const tsec = el('testimonials-section');
  if (C.testimonials.show && C.testimonials.items.length) {
    tsec.style.display = '';
    el('testimonial-grid').innerHTML = C.testimonials.items.map(t => `
      <div class="testimonial-card">
        <div class="quote-mark">"</div>
        <p>${t.quote}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initials}</div>
          <div>
            <strong>${t.name}</strong>
            <span>${t.role}</span>
          </div>
        </div>
      </div>`
    ).join('');
  }

  // Contact
  el('contact-sub').textContent = C.contact.subtitle;
  el('contact-links').innerHTML = [
    { icon: emailSvg(),    href: `mailto:${C.email}`, label: C.email,                             event: 'Contact: Email' },
    { icon: githubSvg(),   href: C.github,             label: C.github.replace('https://', ''),   event: 'Contact: GitHub' },
    ...(C.linkedin ? [{ icon: linkedinSvg(), href: C.linkedin, label: C.linkedin.replace('https://', ''), event: 'Contact: LinkedIn' }] : []),
  ].map(l => `
    <a href="${l.href}" class="contact-link" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} data-umami-event="${l.event}">
      ${l.icon} ${l.label}
    </a>`
  ).join('');

  // Footer
  el('footer-name').textContent  = C.name;
  el('footer-copy').textContent  = `© ${C.footer.year} ${C.name}. All rights reserved.`;
  el('footer-links').innerHTML = C.footer.links.map(l => `
    <a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} data-umami-event="Footer: ${l.label}">${l.label}</a>`
  ).join('');
}

// ── ICON HELPERS ─────────────────────────────────────────────────────────────

function expertiseIcon(i) {
  const icons = [
    // AI / Agent
    `<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="14" r="6" stroke="#F5A623" stroke-width="1.5"/>
      <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M26 20l4 2-4 2" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    // Backend
    `<svg viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="28" height="24" rx="3" stroke="#F5A623" stroke-width="1.5"/>
      <path d="M13 18l4 4 10-8" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    // Frontend
    `<svg viewBox="0 0 40 40" fill="none"><path d="M8 12h24M8 20h16M8 28h20" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="32" cy="28" r="4" stroke="#F5A623" stroke-width="1.5"/></svg>`,
    // DevOps
    `<svg viewBox="0 0 40 40" fill="none"><rect x="6" y="14" width="28" height="18" rx="2" stroke="#F5A623" stroke-width="1.5"/>
      <path d="M14 14V10a6 6 0 1112 0v4" stroke="#F5A623" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="20" cy="23" r="2" fill="#F5A623"/></svg>`,
  ];
  return icons[i % icons.length];
}

function emailSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="18" height="18">
    <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
}
function githubSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="18" height="18">
    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" stroke-width="1.5"/>
    <path d="M13.5 4.5c0 2-1.5 5.5-3.5 5.5S6.5 6.5 6.5 4.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M2.5 13.5c1.5-2 4-3 7.5-3s6 1 7.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
}
function linkedinSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="18" height="18">
    <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" stroke-width="1.5"/>
    <path d="M6 9.5V14M6 6.5V6.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M10 14v-2.5a2 2 0 114 0V14M10 9.5V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

// ── TICKER ───────────────────────────────────────────────────────────────────

function buildTicker() {
  const track = document.getElementById('ticker-track');
  if (!track || !CONTENT.ticker) return;
  const str = CONTENT.ticker.join('  ·  ') + '  ·  ';
  // Duplicate for seamless loop
  track.textContent = str + str;
}

// ── CURSOR GLOW ──────────────────────────────────────────────────────────────

function initCursorGlow() {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.prepend(glow);
  let tx = -999, ty = -999;
  window.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
    glow.style.left = tx + 'px';
    glow.style.top  = ty + 'px';
  }, { passive: true });
}

// ── RUN POPULATE FIRST ────────────────────────────────────────────────────────

populate();
buildTicker();
initCursorGlow();
requestAnimationFrame(() => document.body.classList.add('loaded'));

// ── NAV: scroll state + mobile menu ──────────────────────────────────────────

const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll(
  '.expertise-card, .work-card, .timeline-entry, .testimonial-card, .about-grid, .contact-inner'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── STATS COUNTER ANIMATION ───────────────────────────────────────────────────

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    statsObserver.unobserve(entry.target);
    entry.target.querySelectorAll('.stat').forEach(stat => {
      const target = parseInt(stat.dataset.count, 10);
      const numEl  = stat.querySelector('.stat-num');
      const dur    = 1400;
      const start  = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        numEl.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else numEl.textContent = target;
      };
      requestAnimationFrame(tick);
    });
  });
}, { threshold: 0.5 });

const statsStrip = document.querySelector('.stats-strip');
if (statsStrip) statsObserver.observe(statsStrip);

// ── CONTACT FORM ──────────────────────────────────────────────────────────────

const FORMSPREE = 'https://formspree.io/f/xgobyqvb';

const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const spinCSS = document.createElement('style');
spinCSS.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinCSS);

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn  = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = `
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18"
        style="animation:spin .6s linear infinite">
        <circle cx="10" cy="10" r="7" stroke="currentColor"
          stroke-width="1.5" stroke-dasharray="22 12"/>
      </svg> Sending…`;

    try {
      const res = await fetch(FORMSPREE, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        form.reset();
        success.textContent = "Message sent! I'll be in touch soon.";
        success.style.color = '';
        if (window.umami) umami.track('Contact Form: Submitted');
      } else {
        success.textContent = 'Something went wrong — please email me directly.';
        success.style.color = '#f87171';
      }
    } catch {
      success.textContent = 'Could not send — please email me directly.';
      success.style.color = '#f87171';
    }

    btn.disabled = false;
    btn.innerHTML = orig;
    success.classList.add('visible');
    setTimeout(() => success.classList.remove('visible'), 5000);
  });
}

// ── ACTIVE NAV LINK ───────────────────────────────────────────────────────────

const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--fg)' : '';
    });
  });
}, { threshold: 0.4 }).observe;

sections.forEach(s => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute('id');
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--fg)' : '';
      });
    });
  }, { threshold: 0.4 }).observe(s);
});

// ── HERO PARALLAX ─────────────────────────────────────────────────────────────

const heroContent = document.querySelector('.hero-content');
const heroGlow    = document.querySelector('.hero-glow');

if (heroContent && heroGlow) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.18}px)`;
      heroGlow.style.transform    = `translateX(-50%) translateY(${y * 0.08}px)`;
    }
  }, { passive: true });
}
