# Brad Dealey — Portfolio

**Live:** https://bjdealey.github.io/portfolio/

Personal portfolio website. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies.

## Stack

- **HTML/CSS/JS** — zero build tooling, runs anywhere
- **`content.js`** — single config file for all site content and theme
- **CSS custom properties** — fully themeable design system, auto light/dark mode
- **Formspree** — contact form backend
- **Umami** — privacy-friendly analytics
- **Microsoft Clarity** — heatmaps and session recordings
- **marked.js (CDN)** — client-side markdown rendering for blog posts

## Running locally

```bash
git clone https://github.com/bjdealey/portfolio.git
cd portfolio
python3 -m http.server 8888
# open http://localhost:8888
```

Any static file server works. The site has no server-side logic.

## Editing content

Everything visible on the site lives in **`content.js`**. `index.html` and `script.js` rarely need touching.

| What to change | Where in `content.js` |
|---|---|
| Name, email, GitHub, LinkedIn | top of file |
| Hero headline & subtitle | `hero: { ... }` |
| About paragraphs & skill tags | `about.body`, `about.tags` |
| Scrolling ticker skills | `ticker` array |
| Stats strip | `stats` array |
| Career timeline | `timeline` array |
| Expertise cards | `expertise` array |
| Projects | `projects` array |
| Certifications | `certifications` array |
| Testimonials | `testimonials.show` + `items` |
| Contact blurb | `contact.subtitle` |
| Footer links | `footer.links` array |
| CV page | `cvFile` (set to `null` to hide) |
| Accent colours | `accentDark`, `accentLight` |
| Show/hide sections | `sections: { ... }` |

### Theming

Change the accent colour for dark and light mode independently — no CSS editing needed:

```js
accentDark:  "#F5A623",  // amber (dark mode)
accentLight: "#2A6041",  // forest green (light mode)
```

All derived values (glows, shadows, SVG illustrations, hover states) recalculate automatically.

### Hiding sections

Set any section to `false` to remove it from the page entirely:

```js
sections: {
  stats:          true,
  ticker:         true,
  timeline:       true,
  expertise:      true,
  work:           true,
  certifications: true,
  pricing:        false,  // hidden — portfolio site, not consultancy
  writing:        true,   // shows recent posts on the homepage
}
```

## Blog

Posts live in `blog/posts/` as markdown files. The manifest `blog/posts.json` drives both the blog listing and the "Recent posts" preview on the homepage.

### Adding a post

1. Write the post as `blog/posts/your-slug.md` (standard markdown, H1 as the title)
2. Add an entry to `blog/posts.json`:

```json
{
  "slug": "your-slug",
  "title": "Post title",
  "date": "2026-06-10",
  "excerpt": "One-sentence summary shown in listings.",
  "tags": ["Tag", "Another Tag"]
}
```

Posts are rendered client-side via marked.js. No build step required.

## Features

- Auto light/dark mode (`prefers-color-scheme`)
- Animated hero background — breathing amber glow
- Nav logo expands on hover: `<BD />` → `<BD name="Brad Dealey" />`
- Cursor glow that snaps to interactive elements
- Scroll-reveal animations (bidirectional)
- Scrolling skills ticker strip
- Animated stat counters
- Career timeline
- Expertise panels with icon illustrations
- Project cards with bespoke SVG illustrations
- Certifications section with credential links
- Markdown-based blog with listing page, post reader, and homepage preview
- Auto-generated CV page (`cv.html`) — print to PDF
- Working contact form via Formspree
- Umami analytics with event tracking
- Microsoft Clarity heatmaps
- Custom 404 page
- Favicon, Open Graph, and Twitter Card meta tags
- Scroll snap between sections
- Page load animation
- Responsive — mobile and desktop
- Konami code easter egg

## File structure

```
index.html        — page skeleton
style.css         — design system and all styles
script.js         — rendering, theme injection, interactions
content.js        — all editable content and config
cv.html           — auto-generated CV (renders from content.js)
404.html          — custom error page
favicon.svg       — <BD /> monogram favicon
profile.jpg       — profile photo

blog/
  index.html      — post listing page
  post.html       — post reader (renders markdown via marked.js)
  blog.js         — shared JS for all blog pages
  posts.json      — post manifest (slug, title, date, excerpt, tags)
  posts/
    *.md          — post content in markdown
```

## Known issues

- [#1 Scroll snap causes navigation issues from bottom of page](https://github.com/bjdealey/portfolio/issues/1)
- [#2 Hero background animation choppy / not visible enough](https://github.com/bjdealey/portfolio/issues/2)
