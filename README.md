# divijshah.in

Personal website for Divij Shah.

[Visit divijshah.in](https://divijshah.in)

A small static website built with plain HTML, CSS and JavaScript. It started as a simple personal homepage and grew into the place I use for my CV, contact links and the services I keep online.

## What is here

- Home page
- About page
- CV with an in-page PDF viewer
- Light and dark themes
- Links to my personal and professional profiles
- Links to my self-hosted services
- Responsive layout
- SEO and social sharing metadata
- Sitemap and robots.txt

## Homelab

The site is also connected to a much older project of mine: my homelab. I started with a Raspberry Pi and gradually kept adding things, learning what I needed along the way. Over time it grew into a TrueNAS SCALE server running the services I actually use, with storage, media, photos, files, monitoring and other self-hosted applications. I eventually put a public layer in front of it using Cloudflare, an Oracle Cloud VM and Caddy, with Tailscale connecting the public server back to my home network. What started as experimenting with a Raspberry Pi has turned into a fairly complete setup that I run and maintain myself.

## Built with

HTML · CSS · JavaScript · GitHub · Cloudflare

There is no frontend framework or build system.

## Repository

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
├── og-image.png
├── robots.txt
├── sitemap.xml
├── _headers
├── CHANGELOG.md
└── README.md
```

## Development

The site is intentionally simple. Changes are made directly to the static files and deployed from the `main` branch.

The detailed development history is kept in [CHANGELOG.md](CHANGELOG.md).

## Version

Current release: **1.0.6**

## About

Built and maintained by [Divij Shah](https://github.com/divijshahh).

Website: [divijshah.in](https://divijshah.in)
