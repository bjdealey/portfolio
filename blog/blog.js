/* blog.js — shared across blog/index.html and blog/post.html */

const C = window.CONTENT || {};

// ── HELPERS ───────────────────────────────────────────────────────────────────

function fmtDate(str) {
  return new Date(str + 'T00:00:00').toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function fmtDateShort(str) {
  return new Date(str + 'T00:00:00').toLocaleDateString('en-GB', {
    month: 'short', year: 'numeric',
  });
}

// ── NAV + FOOTER ──────────────────────────────────────────────────────────────

function initShell() {
  // Disable scroll snap — not needed on blog pages
  document.documentElement.style.scrollSnapType = 'none';

  // Logo text
  const ni = document.getElementById('nav-initials');
  const nf = document.getElementById('nav-fullname');
  const fi = document.getElementById('footer-initials');
  const fn = document.getElementById('footer-name');
  const fc = document.getElementById('footer-copy');
  const fl = document.getElementById('footer-links');

  if (ni) ni.textContent = C.initials || 'BD';
  if (nf) nf.textContent = C.name     || 'Brad Dealey';
  if (fi) fi.textContent = C.initials || 'BD';
  if (fn) fn.textContent = C.name     || 'Brad Dealey';
  if (fc) fc.textContent = `© ${(C.footer || {}).year || new Date().getFullYear()} ${C.name}. All rights reserved.`;
  if (fl && C.footer && C.footer.links) {
    fl.innerHTML = C.footer.links.map(l =>
      `<a href="${l.href}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${l.label}</a>`
    ).join('');
  }

  // Logo expand animation
  const navLogo = document.querySelector('.nav-logo');
  const attr    = document.querySelector('.logo-tag-attr');
  if (navLogo && attr) {
    attr.style.transition = 'none';
    attr.style.width      = 'auto';
    const w = attr.offsetWidth;
    attr.style.width      = '0';
    requestAnimationFrame(() => { attr.style.transition = ''; });
    navLogo.addEventListener('mouseenter', () => { attr.style.width = w + 'px'; });
    navLogo.addEventListener('mouseleave', () => { attr.style.width = '0'; });
  }

  // Nav background — blog pages have no hero, so always show it
  const nav = document.getElementById('nav');
  if (nav) nav.classList.add('scrolled');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.add('scrolled');
  }, { passive: true });

  // Burger menu
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
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
  }
}

// ── POST LIST (blog/index.html) ────────────────────────────────────────────────

async function renderPostList() {
  const list = document.getElementById('post-list');
  if (!list) return;

  try {
    const res   = await fetch('posts.json');
    const posts = await res.json();

    if (!posts.length) {
      list.innerHTML = '<p class="post-list-empty">No posts yet — check back soon.</p>';
      return;
    }

    list.innerHTML = posts.map(p => `
      <article class="post-card">
        <div class="post-card-meta">
          <time class="post-date">${fmtDate(p.date)}</time>
          ${(p.tags || []).map(t => `<span class="post-tag">${t}</span>`).join('')}
        </div>
        <h2 class="post-card-title">
          <a href="post.html?slug=${p.slug}">${p.title}</a>
        </h2>
        <p class="post-card-excerpt">${p.excerpt}</p>
        <a href="post.html?slug=${p.slug}" class="post-card-link">Read post →</a>
      </article>
    `).join('');
  } catch {
    list.innerHTML = '<p class="post-list-empty">Could not load posts.</p>';
  }
}

// ── SINGLE POST (blog/post.html) ──────────────────────────────────────────────

async function renderPost() {
  const content = document.getElementById('post-content');
  if (!content) return;

  const slug = new URLSearchParams(window.location.search).get('slug');
  if (!slug) {
    content.innerHTML = '<p>No post specified.</p>';
    return;
  }

  try {
    const [metaRes, mdRes] = await Promise.all([
      fetch('posts.json'),
      fetch(`posts/${slug}.md`),
    ]);

    if (!mdRes.ok) throw new Error('Not found');

    const posts    = await metaRes.json();
    const meta     = posts.find(p => p.slug === slug) || {};
    const markdown = await mdRes.text();

    // Page title
    if (meta.title) document.title = `${meta.title} — Brad Dealey`;

    // Meta strip
    const dateEl = document.getElementById('post-date');
    const tagsEl = document.getElementById('post-tags');
    if (dateEl && meta.date) dateEl.textContent = fmtDate(meta.date);
    if (tagsEl && meta.tags) {
      tagsEl.innerHTML = meta.tags.map(t => `<span class="post-tag">${t}</span>`).join('');
    }

    // Render markdown
    content.innerHTML = marked.parse(markdown);

  } catch {
    content.innerHTML = '<p>Could not load this post.</p>';
  }
}

// ── INIT ──────────────────────────────────────────────────────────────────────

initShell();
renderPostList();
renderPost();
