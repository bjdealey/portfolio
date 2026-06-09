# Brad Dealey — Portfolio

Personal portfolio website. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step, no dependencies.

## Stack

- **HTML/CSS/JS** — zero build tooling, runs anywhere
- **`content.js`** — single config file for all site content
- **CSS custom properties** — amber design system, fully themeable
- **Vanilla ES modules** — no bundler required

## Running locally

```bash
git clone https://github.com/bjdealey/portfolio.git
cd portfolio
python3 -m http.server 8888
# open http://localhost:8888
```

Any static file server works. The site uses no server-side logic.

## Editing content

All text, links, and data live in **`content.js`**. You never need to touch `index.html` or `script.js` for content changes.

| What to change | Where in `content.js` |
|---|---|
| Name, email, GitHub, LinkedIn | top of file |
| Hero headline & subtitle | `hero: { ... }` |
| About paragraphs | `about.body` array |
| Skill tags | `about.tags` array |
| Scrolling ticker skills | `ticker` array |
| Stats strip | `stats` array |
| Expertise cards | `expertise` array |
| Projects | `projects` array |
| Testimonials | `testimonials.show` + `items` |
| Contact blurb | `contact.subtitle` |
| Footer links | `footer.links` array |

## Structure

```
index.html     — page skeleton (rarely needs editing)
style.css      — full design system
script.js      — rendering + interactions
content.js     — all editable content lives here
```

## Features

- Amber / editorial design with serif–sans contrast in the hero
- Cursor glow that follows the mouse
- Scrolling skills ticker strip
- Numbered expertise panels with `>` list markers
- Bento-grid project layout
- Animated stat counters on scroll
- Scroll-reveal animations
- Responsive — works on mobile
- Zero dependencies, zero build step
