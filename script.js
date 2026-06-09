'use strict';

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);

function jumpToTop() {
  document.documentElement.style.scrollBehavior = 'auto';
  document.documentElement.style.scrollSnapType = 'none';
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = '';
    document.documentElement.style.scrollSnapType = '';
  });
}

jumpToTop();
// iOS Safari restores scroll asynchronously — pageshow + setTimeout runs after it
window.addEventListener('pageshow', () => setTimeout(jumpToTop, 50));

// ── HELPERS ──────────────────────────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

function arrowSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="16" height="16">
    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function calSvg() {
  return `<svg viewBox="0 0 20 20" fill="none" width="18" height="18">
    <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.4"/>
    <path d="M3 8h14" stroke="currentColor" stroke-width="1.4"/>
    <path d="M7 2v3M13 2v3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <circle cx="10" cy="13" r="1.2" fill="currentColor"/>
    <circle cx="6.5" cy="13" r="1.2" fill="currentColor"/>
    <circle cx="13.5" cy="13" r="1.2" fill="currentColor"/>
  </svg>`;
}

function githubRepo(url) {
  const m = url && url.match(/github\.com\/([^/]+\/[^/?#]+)/);
  return m ? m[1] : null;
}

// ── PROJECT VISUALS ──────────────────────────────────────────────────────────

function projectVisual(type) {
  if (type === 'phone-cards') return phoneCardsSvg();
  if (type === 'phone-list')  return phoneListSvg();
  if (type === 'flow')        return flowSvg();
  return '';
}

function phoneSvg(screenContent) {
  return `<svg viewBox="0 0 100 180" fill="none" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;max-height:280px;color:var(--accent)" aria-hidden="true">
    <rect x="8" y="4" width="84" height="172" rx="13"
      stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity=".04"/>
    <rect x="14" y="18" width="72" height="140" rx="3"
      fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-opacity=".12" stroke-width="1"/>
    <circle cx="50" cy="11" r="2.5" stroke="currentColor" stroke-width="1" opacity=".45"/>
    <rect x="43" y="167" width="14" height="2.5" rx="1.25" fill="currentColor" opacity=".25"/>
    ${screenContent}
  </svg>`;
}

function phoneCardsSvg() {
  const cards = [
    [20,48,.22,1.3],[41,48,.1,.4],[62,48,.3,1.5],
    [20,76,.1,.35],[41,76,.2,1.2],[62,76,.1,.4],
    [20,104,.15,.6],[41,104,.28,1.4],[62,104,.1,.35],
    [20,132,.1,.3],[41,132,.14,.55],[62,132,.2,1.1],
  ].map(([x,y,a,sw]) =>
    `<rect x="${x}" y="${y}" width="18" height="25" rx="2"
      fill="currentColor" fill-opacity="${a}" stroke="currentColor" stroke-width="${sw}"/>`
  ).join('');
  return phoneSvg(`
    <rect x="18" y="22" width="18" height="2.5" rx="1" fill="currentColor" opacity=".3"/>
    <rect x="72" y="22" width="8"  height="2.5" rx="1" fill="currentColor" opacity=".3"/>
    <rect x="18" y="30" width="30" height="4"   rx="1" fill="currentColor" opacity=".55"/>
    <rect x="18" y="38" width="44" height="3"   rx="1" fill="currentColor" fill-opacity=".18"
      stroke="currentColor" stroke-opacity=".3" stroke-width=".8"/>
    ${cards}
    <rect x="14" y="148" width="72" height="10" rx="0"
      fill="currentColor" fill-opacity=".07" stroke="currentColor" stroke-opacity=".1" stroke-width="1"/>
    <circle cx="28" cy="153" r="2.5" fill="currentColor" opacity=".8"/>
    <circle cx="42" cy="153" r="2.5" fill="currentColor" fill-opacity=".3"/>
    <circle cx="57" cy="153" r="2.5" fill="currentColor" fill-opacity=".3"/>
    <circle cx="71" cy="153" r="2.5" fill="currentColor" fill-opacity=".3"/>
  `);
}

function phoneListSvg() {
  const items = [44, 68, 92, 116, 140].map((y, i) => `
    <circle cx="24" cy="${y+8}" r="7"
      fill="currentColor" fill-opacity="${i===0?.2:.08}"
      stroke="currentColor" stroke-opacity="${i===0?1:.3}" stroke-width="1"/>
    <rect x="36" y="${y+4}"  width="${30+i%3*6}" height="3" rx="1"
      fill="currentColor" fill-opacity="${i===0?1:.35}"/>
    <rect x="36" y="${y+11}" width="${18+i%2*8}" height="2" rx="1"
      fill="currentColor" fill-opacity=".2"/>
    ${i<4?`<rect x="18" y="${y+21}" width="64" height=".8" rx=".4" fill="currentColor" fill-opacity=".1"/>`:''}
  `).join('');
  return phoneSvg(`
    <rect x="18" y="22" width="18" height="2.5" rx="1" fill="currentColor" opacity=".3"/>
    <rect x="72" y="22" width="8"  height="2.5" rx="1" fill="currentColor" opacity=".3"/>
    <rect x="18" y="30" width="28" height="4"   rx="1" fill="currentColor" opacity=".55"/>
    <rect x="18" y="38" width="64" height="4"   rx="2"
      fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-opacity=".25" stroke-width=".8"/>
    <rect x="20" y="39.5" width="8" height="1.5" rx=".75" fill="currentColor" fill-opacity=".3"/>
    ${items}
  `);
}

function flowSvg() {
  const nodes = [
    [14, 'Data'],
    [40, 'Fetch'],
    [66, 'Bot'],
    [92, 'Output'],
  ];
  const boxes = nodes.map(([x, label], i) => {
    const isBot = label === 'Bot';
    return `
      <rect x="${x}" y="72" width="22" height="22" rx="4"
        fill="currentColor" fill-opacity="${isBot?.22:.07}"
        stroke="currentColor" stroke-opacity="${isBot?1:.4}"
        stroke-width="${isBot?1.5:1}"/>
      <text x="${x+11}" y="${isBot?85.5:85}" text-anchor="middle"
        font-family="'Courier New',monospace" font-size="4.5"
        fill="currentColor" fill-opacity="${isBot?1:.7}">${label}</text>
      ${i<3?`<path d="M${x+22} 83 L${nodes[i+1][0]} 83"
        stroke="currentColor" stroke-width="1" opacity=".4"
        marker-end="url(#arr)"/>`:''}
    `;
  }).join('');

  return `<svg viewBox="0 0 120 165" fill="none" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;color:var(--accent)" aria-hidden="true">
    <defs>
      <marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
        <path d="M0 0 L5 2.5 L0 5" fill="none" stroke="currentColor" stroke-width=".8" opacity=".5"/>
      </marker>
    </defs>
    <rect x="4" y="4" width="112" height="157" rx="4"
      fill="currentColor" fill-opacity=".03" stroke="currentColor" stroke-opacity=".1" stroke-width="1"/>
    <rect x="10" y="12" width="40" height="3" rx="1" fill="currentColor" opacity=".5"/>
    <rect x="10" y="19" width="60" height="2" rx="1" fill="currentColor" fill-opacity=".25"/>
    <rect x="10" y="25" width="46" height="2" rx="1" fill="currentColor" fill-opacity=".15"/>
    <path d="M10 40 Q60 35 110 40" stroke="currentColor" stroke-opacity=".15" stroke-width=".8" fill="none"/>
    <rect x="10" y="50" width="100" height="1" fill="currentColor" fill-opacity=".08"/>
    <rect x="10" y="58" width="26" height="2" rx="1" fill="currentColor" fill-opacity=".3"/>
    <rect x="10" y="64" width="18" height="1.5" rx=".75" fill="currentColor" fill-opacity=".2"/>
    ${boxes}
    <rect x="10" y="104" width="100" height="1" fill="currentColor" fill-opacity=".08"/>
    <rect x="10" y="112" width="40" height="3" rx="1" fill="currentColor" fill-opacity=".15"/>
    <rect x="10" y="119" width="60" height="2" rx="1" fill="currentColor" fill-opacity=".1"/>
    <rect x="10" y="125" width="50" height="2" rx="1" fill="currentColor" fill-opacity=".1"/>
    <rect x="10" y="131" width="36" height="2" rx="1" fill="currentColor" fill-opacity=".08"/>
    <rect x="10" y="140" width="24" height="6" rx="2"
      fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width=".8" opacity=".7"/>
    <text x="22" y="144.5" text-anchor="middle"
      font-family="'Courier New',monospace" font-size="3.5"
      fill="currentColor" opacity=".8">VIEW</text>
  </svg>`;
}

// ── POPULATE FROM content.js ─────────────────────────────────────────────────

function populate() {
  const C = CONTENT;

  // Page title
  document.title = `${C.name} — Portfolio`;

  // Nav
  el('nav-initials').textContent    = C.initials;
  el('nav-fullname').textContent    = C.name;
  el('footer-initials').textContent = C.initials;
  el('nav-cta').textContent = C.hireMeText;
  el('nav-cta').dataset.umamiEvent = 'Nav: Hire Me';
  el('nav-cta').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });

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
  el('work-grid').innerHTML = C.projects.map(p => {
    const repo = githubRepo(p.linkHref);
    return `
    <article class="work-card ${p.featured ? 'work-card--featured' : ''}"${repo ? ` data-repo="${repo}"` : ''}>
      <div class="work-card-img">
        <div class="work-card-visual">${projectVisual(p.visual)}</div>
      </div>
      <div class="work-card-body">
        <div class="work-card-meta">
          ${p.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          ${repo ? '<span class="work-github-stats"></span>' : ''}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.linkHref}" class="work-link" ${p.linkHref.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} data-umami-event="Project: ${p.title}">
          ${p.linkText} ${arrowSvg()}
        </a>
      </div>
    </article>`;
  }).join('');

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
          ${c.credentialUrl ? `<a href="${c.credentialUrl}" class="cert-link" target="_blank" rel="noopener" data-umami-event="Cert: ${c.title}">View credential →</a>` : ''}
        </div>
      </div>`
    ).join('');
  }

  // Pricing
  const pricingGrid = el('pricing-grid');
  if (pricingGrid && C.pricing && C.pricing.plans) {
    el('pricing-title').textContent  = C.pricing.tagline;
    el('pricing-subtitle').textContent = C.pricing.subtitle;
    pricingGrid.innerHTML = C.pricing.plans.map(p => {
      const href = p.ctaHref === 'calLink' ? (C.calLink || '#contact') : p.ctaHref;
      const isExternal = href.startsWith('http');
      return `
      <div class="pricing-card${p.featured ? ' pricing-card--featured' : ''}"${p.featured ? ` data-label="${p.label}"` : ''}>
        <p class="pricing-plan-name">${p.featured ? '' : p.label}</p>
        <div class="pricing-price">
          <span class="pricing-amount">${p.price}</span>
          <span class="pricing-period">${p.period}</span>
        </div>
        <p class="pricing-desc">${p.description}</p>
        <ul class="pricing-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <a href="${href}" class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'} pricing-cta"
          ${isExternal ? 'target="_blank" rel="noopener"' : ''}
          data-umami-event="Pricing: ${p.name}">
          ${p.cta}
        </a>
      </div>`;
    }).join('');
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
    ...(C.calLink  ? [{ icon: calSvg(),      href: C.calLink,  label: 'Book a call',              event: 'Contact: Book a Call' }] : []),
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
    // RPA / Automation
    `<svg viewBox="0 0 40 40" fill="none" style="color:var(--accent)"><circle cx="20" cy="14" r="6" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M26 20l4 2-4 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    // Power Platform
    `<svg viewBox="0 0 40 40" fill="none" style="color:var(--accent)"><rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" stroke-width="1.5"/>
      <path d="M13 18l4 4 10-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    // App Dev
    `<svg viewBox="0 0 40 40" fill="none" style="color:var(--accent)"><path d="M8 12h24M8 20h16M8 28h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="32" cy="28" r="4" stroke="currentColor" stroke-width="1.5"/></svg>`,
    // IT & Systems
    `<svg viewBox="0 0 40 40" fill="none" style="color:var(--accent)"><rect x="6" y="14" width="28" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M14 14V10a6 6 0 1112 0v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="20" cy="23" r="2" fill="currentColor"/></svg>`,
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

  let cx = -999, cy = -999, tracking = true;

  window.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    if (tracking) {
      glow.style.left = cx + 'px';
      glow.style.top  = cy + 'px';
    }
  }, { passive: true });

  const snapTargets = document.querySelectorAll(
    '.expertise-card, .work-card, .cert-card, .btn, .contact-link, .nav-links a, .footer-links a, .work-link, .cert-link, .timeline-role'
  );

  snapTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      tracking = false;
      const r    = el.getBoundingClientRect();
      const size = Math.max(r.width, r.height) * 1.6;
      glow.style.width  = size + 'px';
      glow.style.height = size + 'px';
      glow.style.left   = (r.left + r.width  / 2) + 'px';
      glow.style.top    = (r.top  + r.height / 2) + 'px';
      glow.classList.add('snapped');
    });

    el.addEventListener('mouseleave', () => {
      glow.classList.remove('snapped');
      glow.style.width  = '';
      glow.style.height = '';
      glow.style.left   = cx + 'px';
      glow.style.top    = cy + 'px';
      tracking = true;
    });
  });
}

// ── CAL.COM LIVE AVAILABILITY ────────────────────────────────────────────────

async function loadCalAvailability() {
  if (!CONTENT.calLink) return;
  try {
    const res  = await fetch('availability.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.text) return;

    const label = el('hero-availability');
    const dot   = document.querySelector('.hero-eyebrow .dot');
    if (label) label.textContent = data.text;

    if (dot) {
      if (data.status === 'unavailable') {
        dot.style.display = 'none';
      } else if (data.status === 'soon') {
        dot.style.background = 'var(--accent)';
        dot.style.boxShadow  = '0 0 8px var(--accent)';
      }
      // 'available' keeps the default green from CSS
    }

    if (data.status === 'unavailable') {
      // Remove booking link from contact links
      document.querySelectorAll('.contact-link[href*="cal.com"]')
        .forEach(l => l.remove());
      // Redirect pricing CTA to contact form
      document.querySelectorAll('.pricing-cta[href*="cal.com"]').forEach(l => {
        l.href        = '#contact';
        l.textContent = 'Get in Touch';
      });
    }
  } catch {
    // silently fall back to static value from content.js
  }
}

// ── GITHUB STATS ─────────────────────────────────────────────────────────────

async function loadGithubStats() {
  const cards = document.querySelectorAll('.work-card[data-repo]');
  for (const card of cards) {
    try {
      const res = await fetch(`https://api.github.com/repos/${card.dataset.repo}`);
      if (!res.ok) continue;
      const d = await res.json();
      const el = card.querySelector('.work-github-stats');
      if (!el) continue;
      const parts = [];
      if (d.stargazers_count > 0) parts.push(`★ ${d.stargazers_count}`);
      if (d.language) parts.push(d.language);
      if (d.pushed_at) {
        parts.push(new Date(d.pushed_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }));
      }
      if (parts.length) el.textContent = parts.join(' · ');
    } catch {}
  }
}

// ── MICROSOFT CLARITY ─────────────────────────────────────────────────────────

function loadClarity() {
  const id = CONTENT.clarityId;
  if (!id) return;
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,'clarity','script',id);
}

// ── THEME ─────────────────────────────────────────────────────────────────────

function applyTheme() {
  const dark  = (CONTENT.accentDark  || '#F5A623').trim();
  const light = (CONTENT.accentLight || '#2A6041').trim();

  function toRgba(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  const s = document.createElement('style');
  s.textContent = `
    :root {
      --accent:     ${dark};
      --accent-dim: ${toRgba(dark, .15)};
    }
    @media (prefers-color-scheme: light) {
      :root {
        --accent:      ${light};
        --accent-dim:  ${toRgba(light, .09)};
        --accent-glow: ${toRgba(light, .12)};
      }
    }
  `;
  document.head.appendChild(s);
}

// ── SECTION VISIBILITY ────────────────────────────────────────────────────────

function applySections() {
  const S = CONTENT.sections || {};
  const map = {
    stats:          '.stats-strip',
    ticker:         '.ticker',
    timeline:       '.timeline-section',
    expertise:      '.expertise',
    work:           '.work',
    certifications: '.certifications',
    pricing:        '.pricing-section',
  };
  Object.entries(map).forEach(([key, sel]) => {
    if (S[key] === false) {
      const node = document.querySelector(sel);
      if (node) node.style.display = 'none';
    }
  });
}

// ── RUN ───────────────────────────────────────────────────────────────────────

function setupLogoExpand() {
  const navLogo = document.querySelector('.nav-logo');
  const attr    = document.querySelector('.logo-tag-attr');
  if (!navLogo || !attr) return;

  // Measure natural width with transition disabled so nothing animates
  attr.style.transition = 'none';
  attr.style.width      = 'auto';
  const w = attr.offsetWidth;   // forces layout, reads true content width
  attr.style.width      = '0';
  requestAnimationFrame(() => { attr.style.transition = ''; });

  navLogo.addEventListener('mouseenter', () => { attr.style.width = w + 'px'; });
  navLogo.addEventListener('mouseleave', () => { attr.style.width = '0'; });
}

function easterKonami() {
  const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let i = 0;
  document.addEventListener('keydown', e => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    i = key === seq[i] ? i + 1 : key === seq[0] ? 1 : 0;
    if (i < seq.length) return;
    i = 0;
    const toast = document.createElement('div');
    toast.className = 'konami-toast';
    toast.innerHTML = `<span class="logo-tag-bracket">&lt;</span>BD <span class="logo-attr-key">cheat_code</span>=<span class="logo-attr-val">"activated"</span><span class="logo-tag-bracket"> /&gt;</span>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('konami-toast--in'));
    setTimeout(() => {
      toast.classList.remove('konami-toast--in');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, 2500);
  });
}

loadClarity();
applyTheme();
applySections();
populate();
setupLogoExpand();
easterKonami();
loadGithubStats();
loadCalAvailability();
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
    entry.target.classList.toggle('visible', entry.isIntersecting);
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
