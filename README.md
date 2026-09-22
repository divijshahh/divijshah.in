# divijshah.in

Personal website and self-hosted service directory for [divijshah.in](https://divijshah.in).

The site is intentionally small and static. It is built with plain HTML and CSS, with a small amount of JavaScript for theme switching, and is deployed through Cloudflare Pages from this repository.

## Live site

**Website:** https://divijshah.in

## Features

- Persistent bottom navigation dock across all pages

- Personal landing page
- Responsive layout for desktop and mobile
- Light and dark themes with system-theme detection and persisted manual preference
- Links to personal contact and professional profiles
- Directory for self-hosted services
- Minimal client-side JavaScript
- Open Graph and social sharing metadata
- Canonical URL metadata and a dedicated 1200×630 social preview image
- No frontend framework or build step

## Tech stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Behaviour | Vanilla JavaScript |
| Hosting | Cloudflare Pages |
| Source control | GitHub |

## Repository structure

```text
.
├── index.html
├── style.css
├── about/
│   └── index.html
├── cv/
│   └── index.html
├── cv.pdf
├── assets/
│   ├── favicon-light.svg
│   ├── favicon-dark.svg
│   └── seerr-logo.svg
├── og-image.png
├── CHANGELOG.md
└── README.md
```text
.
├── index.html       # Page structure, content and theme logic
├── style.css        # Layout, typography, responsive styles and themes
├── favicon-light.svg # Light-mode favicon
├── favicon-dark.svg  # Dark-mode favicon
├── og-image.png      # Social preview image
├── seerr-logo.svg   # Local Seerr logo asset
├── CHANGELOG.md     # Release history
└── README.md        # Project documentation
```

## Development

There is no build process or package manager.

Clone the repository and open `index.html` directly in a browser, or serve the directory with any static HTTP server.

For example:

```bash
git clone https://github.com/divijshahh/divijshah.in.git
cd divijshah.in
```

A local static server is useful when testing browser behaviour:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Deployment

The `main` branch is connected to Cloudflare Pages. Changes merged or pushed to `main` are deployed through the configured Pages deployment pipeline.

No application server is required for the website itself.

## Versioning

The website uses a simple `v0.x` version number while the design and structure are actively evolving.

The displayed version is maintained in `index.html` and release notes are recorded in [CHANGELOG.md](CHANGELOG.md). The site currently uses v0.5.6.2.

Version changes are intended to be meaningful rather than tied to every individual Git commit.

## Project conventions

- Keep the site dependency-free unless a dependency provides a clear benefit.
- Prefer small, targeted changes over unnecessary rewrites.
- Keep external assets stable and use local assets where appropriate.
- Test responsive behaviour when changing layout or typography.
- Test both system color schemes and manual theme switching.
- Update the changelog for notable user-facing changes.
- Keep commit messages short and descriptive.

## Maintainer

Maintained by [Divij Shah](https://github.com/divijshahh).

For the public site, visit [divijshah.in](https://divijshah.in).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the release history.
