# divijshah.in

Personal website for Divij Shah.

[Visit divijshah.in](https://divijshah.in)

A small static website built with plain HTML, CSS and JavaScript. It contains the homepage, CV, contact links and links to the self-hosted services I keep online.

## Features

- Responsive static homepage
- Light and dark themes
- CV page with an in-page PDF renderer and direct download
- Separate QR landing page for the future business-card landing experience
- Local service icons
- SEO and social-sharing metadata
- JSON-LD structured data
- Sitemap and robots.txt
- Cloudflare Pages deployment

## Built with

HTML · CSS · JavaScript · GitHub · Cloudflare

There is no frontend framework or build system.

The main site uses `style.css` and `assets/site.js` for its shared layout, theme and navigation behavior. The QR landing page is intentionally isolated under `qr-site/` and has its own `style.css` and `assets/theme.js`. It does not use the main site's navigation or theme state.

The QR landing page is versioned independently from the main site. The current main site release is 1.2.5, while the QR landing page is currently 1.0.1.

## Icon attribution

The Seerr icon is sourced from [selfh.st/icons](https://github.com/selfhst/icons), licensed under CC BY 4.0.

## Development

Changes are made directly to the static files and deployed from the `main` branch.

The detailed development history is kept in [CHANGELOG.md](CHANGELOG.md).

## Version

Current main-site release: **1.2.5**

QR landing page: **1.0.1**

## Maintainer

Built and maintained by [Divij Shah](https://github.com/divijshahh).

Website: [divijshah.in](https://divijshah.in)
