# Project Context

> Persistent agent handoff for `divijshah.in`.
> **Authoritative current-state document:** this file.
> README.md and CHANGELOG.md are supporting/historical documentation and may contain stale wording.
> Last updated: 2026-09-28.

## 1. Purpose

This folder exists so a new AI agent can continue the project across chats without making the user reconstruct the project's architecture, design decisions, completed work, rejected approaches, or outstanding plans.

The repository contains two deliberately separate static sites:

- Main site: `divijshah.in`
- QR/business-card site: `qr.divijshah.in`, source under `qr-site/`

Both are plain HTML/CSS/JavaScript. There is no frontend framework or build system.

## 2. Non-negotiable agent rules

1. Read this file before modifying the repository.
2. Read the latest entries in `PROMPT_LOG.md` before continuing a previous task.
3. Inspect the actual current GitHub tree/files before making assumptions.
4. Never treat PLANNED/DISCUSSED work as implemented.
5. Never resurrect deleted or rejected work merely because it exists in Git history.
6. Preserve the existing architecture unless the user explicitly asks to change it.
7. Modify the existing implementation rather than creating parallel systems.
8. Do not silently redesign unrelated parts of the site while implementing a narrow request.
9. Do not commit secrets, passwords, tokens, cookies, private keys, or credential contents.
10. For substantive website changes, update the affected site's visible version according to the project's versioning practice.
11. After meaningful work, update this file and append the work to `PROMPT_LOG.md`.
12. If current files contradict memory/documentation, verify the files and use the actual repository state as the source of truth.
13. Do not claim browser/live QA unless it was actually performed.

### Infrastructure instruction style

For server/configuration work:

- state prerequisites/warnings before actions;
- do not give unexplained commands;
- when editing a configuration file, include `sudo nano <file>`;
- after a configuration change, include a validation command;
- do not assume Nginx/Nginx Proxy Manager exists on TrueNAS;
- do not expose internal services without checking authentication/network requirements.

## 3. Current status

| Area | Status | Current state |
|---|---|---|
| Main homepage | IMPLEMENTED/STABLE | v1.2.5 |
| Main theme/lamp | IMPLEMENTED/STABLE | light/dark |
| Main service grid | IMPLEMENTED/STABLE | Files, Media, Photos, Requests, Status |
| Main navigation | IMPLEMENTED/STABLE | Home + CV |
| CV page | IMPLEMENTED/STABLE | v1.2.5 |
| Custom 404 | IMPLEMENTED/STABLE | main visual system |
| SEO/metadata | IMPLEMENTED/STABLE | canonical, OG/Twitter, JSON-LD, sitemap, robots |
| QR shell | IMPLEMENTED | v1.0.2 |
| QR placeholder | IMPLEMENTED | local under-construction SVG |
| Final QR business-card experience | PLANNED | not implemented |
| home.divijshah.in | PLANNED | custom static frontend replacing Homarr-facing experience |
| read.divijshah.in | PLANNED | Karakeep frontend |
| Public homelab ingress | IMPLEMENTED | Oracle + Caddy + Tailscale |
| Authelia | IMPLEMENTED | authentication/OIDC |
| Cloudflare Pages/DNS | IMPLEMENTED | current deployment |
| Cloudflare Email Routing | IN PROGRESS/SETUP | inbound domain mail |
| Self-hosted mail server | NOT PURSUED | discussed, not chosen |
| Outbound @divijshah.in | PLANNED/DISCUSSED | likely provider/SMTP approach |
| Catch-all mail | DISABLED BY CHOICE | do not enable without request |
| Email subaddressing | DISABLED BY CHOICE | do not enable without request |

## 4. Repository map

Current repository structure:

```
divijshah.in/
├── 404.html
├── CHANGELOG.md
├── README.md
├── _headers
├── assets/
│   ├── favicon-dark.svg
│   ├── favicon-light.svg
│   ├── site.js
│   └── services/
│       ├── immich.svg
│       ├── jellyfin.svg
│       ├── nextcloud.svg
│       ├── seerr-dark.svg
│       ├── seerr-light.svg
│       ├── uptime-kuma-dark.svg
│       └── uptime-kuma-light.svg
├── cv/
│   └── index.html
├── cv.pdf
├── index.html
├── og-image.png
├── qr-site/
│   ├── index.html
│   ├── style.css
│   └── assets/
│       ├── favicon-dark.svg
│       ├── favicon-light.svg
│       ├── theme.js
│       └── underconstruction.svg
├── robots.txt
├── sitemap.xml
├── style.css
└── Project Context/
    ├── MASTER_CONTEXT.md
    └── PROMPT_LOG.md
```

The context folder is documentation only. It must not be treated as a website/deployment directory.

## 5. Main site current state

### Identity and copy

The main hero is:

- DIVIJ SHAH
- "Law student based in Bombay"

Current study section:

- Government Law College, Mumbai · Law

Footer:

- Bombay, India
- © 2026 Divij Shah
- v1.2.5

Important personal-state constraint: the user is **not a lawyer yet**. Do not write "lawyer" into the site/bio/signature unless the user explicitly changes this.

### Visual direction

The site is deliberately minimal, personal, typography-led and restrained.

Established design rules:

- centered DIVIJ SHAH is the primary visual focus;
- no generic corporate/marketing styling;
- no "Homelab Hobbyist";
- service cards use a uniform background treatment;
- varied backgrounds for individual cards were explicitly rejected as looking shabby;
- service icons should be visually substantial rather than tiny;
- status dots are present on service cards and use the Uptime Kuma visual language;
- DS favicon/mark is the identity mark;
- no unnecessary decorative elements;
- no animations unless explicitly requested;
- no easter eggs;
- no intrusive navigation;
- lamp is the theme control;
- no generic dark-mode button.

### Hero CSS values that were intentionally tuned

Current main CSS contains approximately:

```css
h1 {
  margin: 0;
  color: #161614;
  font-size: clamp(54px, 9.75vw, 105px);
  line-height: .84;
  letter-spacing: -.075em;
  font-weight: 600;
}

.intro {
  max-width: 525px;
  margin: 26px auto 0;
  color: #494843;
  font-size: 19px;
  line-height: 1.45;
}
```

Do not casually replace these values. Inspect the current CSS and rendered behavior first.

### Lamp

The hanging lamp switch is the intended theme control.

Current approximate desktop geometry:

```css
.lamp-switch {
  position: fixed;
  top: 18px;
  right: 28px;
  z-index: 100;
  width: 64px;
  height: 80px;
}
```

Mobile is approximately top 13px, right max(21px/safe-area aware), width 58px and height 72px.

The lamp must remain functional and visually positioned correctly.

### Navigation

The fixed dock contains only:

- Home
- CV

Home uses the DS favicon.
CV uses a document icon.

Do not re-add About or a main-site Reading link.

### Main pages

#### Homepage

`index.html` contains the hero, current-study section, personal links, self-hosted service grid, footer and Home/CV dock.

#### CV

`cv/index.html`:

- shares the main stylesheet;
- shares the main theme JS;
- uses the same hero identity;
- has a centered "Download PDF ↓" action;
- renders `cv.pdf` using PDF.js;
- keeps direct PDF download;
- uses the same footer/navigation;
- is v1.2.5.

The PDF.js renderer was deliberately retained. Do not replace it with a native PDF iframe/viewer without explicit instruction.

#### About

`/about` is **deleted intentionally**.

Do not recreate it or add an About button.

#### Read

`/read` is **not** a main-site page.

The future reading frontend is `read.divijshah.in`.

## 6. Service grid

Current user-facing labels and public hosts:

| Label | Product | Host |
|---|---|---|
| Files | Nextcloud | docs.divijshah.in |
| Media | Jellyfin | media.divijshah.in |
| Photos | Immich | photos.divijshah.in |
| Requests | Seerr | request.divijshah.in |
| Status | Uptime Kuma | status.divijshah.in |

The labels are intentionally simplified user-facing names. Do not automatically replace them with product names.

### Icons

Local service assets:

- assets/services/nextcloud.svg
- assets/services/jellyfin.svg
- assets/services/immich.svg
- assets/services/seerr-light.svg
- assets/services/seerr-dark.svg
- assets/services/uptime-kuma-light.svg
- assets/services/uptime-kuma-dark.svg

Rules:

- prefer local assets over runtime third-party icon requests;
- do not monochrome all service icons;
- Seerr light uses the variant with a white inner portion;
- Seerr dark uses the original black-center logo;
- Uptime Kuma light was deliberately softened to about 0.20 opacity;
- preserve service icon identity and theme contrast.

Seerr attribution is recorded in README as sourced from selfh.st/icons under CC BY 4.0.

### Mobile layout

The mobile grid was deliberately arranged so:

- Media + Requests share a row;
- Photos + Status share an equal row.

Do not turn it into a generic one-column stack without explicit instruction.

## 7. Main JavaScript and accessibility

`assets/site.js` handles main-site:

- theme switching;
- favicon switching;
- service icon switching;
- active dock/navigation state;
- related common client behavior.

It is intentionally separate from QR JS.

Accessibility already implemented includes:

- semantic navigation;
- aria labels;
- visible focus states;
- reduced-motion handling;
- accessible theme control;
- responsive/mobile behavior.

Do not remove accessibility behavior during visual edits.

## 8. SEO and headers

Main site has:

- canonical URLs;
- Open Graph;
- Twitter cards;
- Person JSON-LD;
- WebSite JSON-LD;
- sitemap;
- robots.txt;
- OG image.

Current robots.txt is:

```
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=no
Allow: /
Sitemap: https://divijshah.in/sitemap.xml
```

A Cloudflare Web Analytics beacon was previously added and then explicitly removed because the user already has analytics available. Do not re-add it without request.

Do not spend effort on generic title/description-length SEO advice unless explicitly requested.

## 9. 404

`404.html` is custom and matches the main site's visual system.

It has:

- theme/lamp behavior;
- noindex;
- 404 messaging;
- Back home;
- footer/version.

Do not replace it with a generic provider error page.

## 10. QR site

Source directory: `qr-site/`
Intended hostname: `qr.divijshah.in`
Current version: **v1.0.2**

### Architecture

QR is intentionally a separate static site.

It has:

- qr-site/index.html
- qr-site/style.css
- qr-site/assets/theme.js
- separate light/dark favicons
- qr-site/assets/underconstruction.svg

It does **not** use:

- the main site's stylesheet;
- main site's navigation;
- main site's theme state;
- main site's `assets/site.js`.

Its localStorage theme key is `qr-theme`.

A previous attempt to consolidate QR styling into the main stylesheet was identified as an architectural mistake and reverted. Do not repeat that architecture.

### Current QR content

The current placeholder contains:

- Divij Shah;
- Personal landing page;
- QR LANDING PAGE;
- Business card landing page;
- local under-construction graphic;
- Bombay, India;
- © 2026 Divij Shah;
- v1.0.2;
- lamp theme switch.

The page is deliberately compact and intended to fit one viewport. Its current layout uses `100svh` and hides overflow.

The working illustration is local:

`qr-site/assets/underconstruction.svg`

An external FreeSVG placeholder was attempted earlier but failed; the local asset is now the correct implementation.

### QR deployment

The QR Pages deployment uses the `qr-site` directory and is already functioning. Do not repeatedly treat the Pages output-directory question as an unresolved deployment problem.

Do not put QR behind Cloudflare Access.

### QR future work

The placeholder will eventually be replaced by the real business-card landing experience.

Still undecided:

- exact final content;
- exact QR destination behavior;
- whether it is a landing page or controlled redirect/other experience.

Do not implement the final version without user direction.

## 11. Infrastructure context

This repository is the static/public web layer. Infrastructure context is included only to prevent architectural mistakes.

### Public ingress

- Oracle Cloud VM is public ingress.
- Caddy runs there.
- Oracle connects to home TrueNAS through Tailscale.
- Cloudflare provides DNS.
- Public HTTPS routing is through Caddy.

Known Oracle public IP: `130.210.21.18`.

Do not put private SSH key contents into this repo.

Known SSH user is `ubuntu`, but the private key path/content must remain outside repository documentation.

### Caddy

Binary: `/usr/bin/caddy`
Known version: v2.11.4

Public routes:

- photos.divijshah.in -> Authelia forward auth -> Immich
- auth.divijshah.in -> Authelia
- media.divijshah.in -> Jellyfin
- request.divijshah.in -> Seerr
- docs.divijshah.in -> Nextcloud
- status.divijshah.in -> Uptime Kuma

### TrueNAS

- hostname: `server`
- Tailscale IP: `100.100.15.15`

Important: there is **no Nginx/Nginx Proxy Manager on TrueNAS** in the current architecture.

### Authelia

Known deployment:

- image: authelia/authelia:latest
- local listener: 127.0.0.1:9091
- config mount: /opt/authelia/config:/config
- data mount: /opt/authelia/data:/data

OIDC is used for services including Immich and Nextcloud.

Never put Authelia secrets/client secrets/passwords into repository docs.

### Service notes

- Immich: photos.divijshah.in, protected with Authelia forward auth.
- Jellyfin: media.divijshah.in.
- Seerr: request.divijshah.in; public route considered done.
- Nextcloud: docs.divijshah.in; OIDC works; shared URLs are configured to use the public hostname.
- Uptime Kuma: status.divijshah.in, dashboard path /status/home.
- Paperless remains internal.

Do not expose additional internal services without explicit instruction.

## 12. Cloudflare

Cloudflare is used for:

- DNS;
- Cloudflare Pages;
- static website deployment;
- a separate website-layer Worker.

Do not assume the Worker and Pages deployment are the same component.

Verify current Cloudflare setup before changing deployment architecture.

## 13. Email/domain context

Inbound domain email has been discussed/configured as a separate infrastructure concern. The current website QA does not depend on mail configuration.

Known configuration discussed:
- route1.mx.cloudflare.net priority 81
- route2.mx.cloudflare.net priority 87
- route3.mx.cloudflare.net priority 5
- DKIM TXT: cf2024-1._domainkey.divijshah.in
- SPF: v=spf1 include:_spf.mx.cloudflare.net ~all

Potential aliases discussed:
- divij@
- hello@
- contact@
- work@
- legal@
- security@

Do not assume every alias is active without checking.

User deliberately chose:
- catch-all: OFF
- subaddressing: OFF

Do not enable either without explicit request.

## 14. Future projects

### Final QR/business-card page
Status: PLANNED.
Replace the under-construction placeholder after the user decides the actual destination/content.

### home.divijshah.in
Status: PLANNED.
Custom static frontend intended to replace the public-facing Homarr concept. Do not simply expose/restyle Homarr unless explicitly asked.

## 15. Explicitly deleted/rejected approaches

- About page: deleted, do not restore.
- "Homelab Hobbyist": removed, do not restore.
- Different background for every service card: rejected as shabby.
- Generic dark-mode button: replaced by lamp.
- Main-site/QR stylesheet consolidation: rejected; QR is isolated.
- External QR FreeSVG placeholder: failed; local SVG is current.
- Cloudflare Web Analytics beacon: removed intentionally.
- Main-site /read page: rejected as the wrong architecture; use read.divijshah.in.
- Public changelog page: not wanted.
- Animations/easter eggs: not wanted.

## 16. Versioning

Current versions:

- main site: v1.2.5
- QR site: v1.0.2

Versions are independent.

User prefers semver-ish increments and patch-style increments for smaller changes.

When a substantive site change is made, update the affected site's visible version. Do not bump both sites for a change affecting only one.

Known documentation drift: README/CHANGELOG still contain some QR v1.0.1 wording. The actual QR implementation and Git history establish v1.0.2. Do not treat stale README/changelog wording as the current implementation.

## 17. File map

- index.html: main homepage structure and metadata.
- style.css: main/CV styling.
- assets/site.js: main theme/favicon/icon/navigation logic.
- cv/index.html: CV page and PDF.js renderer.
- cv.pdf: CV.
- 404.html: custom error page.
- robots.txt: crawler/content signals and sitemap.
- sitemap.xml: public URL map.
- _headers: Cloudflare Pages headers.
- assets/favicon-light.svg / favicon-dark.svg: DS identity.
- assets/services/*: local service icons.
- qr-site/index.html: QR page.
- qr-site/style.css: QR-specific CSS.
- qr-site/assets/theme.js: QR-specific theme/favicon behavior.
- qr-site/assets/underconstruction.svg: current QR placeholder.
- README.md: general documentation, not authoritative state.
- CHANGELOG.md: historical release notes, not authoritative state.
- Project Context/MASTER_CONTEXT.md: authoritative agent handoff.
- Project Context/PROMPT_LOG.md: project prompt/session history.

## 18. Change workflow

Before a repo change:

1. Read this file.
2. Read latest prompt-log entries.
3. Inspect current tree and relevant files.
4. Identify whether request is implementation, correction, or future planning.
5. Check existing architecture.
6. Make only requested/necessary changes.
7. Preserve accessibility/responsive/theme behavior.
8. Update version if appropriate.
9. Verify the resulting files.
10. Update this document.
11. Append a prompt/session entry.

When exact historical reasoning matters, inspect Git history rather than guessing.

## 19. Current open work as of 2026-09-28

1. Final QR/business-card landing experience.
2. Custom home.divijshah.in frontend.
3. Optional browser QA after future visual changes.

The read.divijshah.in item and domain-mail/outbound-mail/transactional-mail items were removed from the active roadmap on 2026-09-28 at the user's direction. They are not current project work.

## 20. Historical implementation lessons

The most important lessons from this project:

- broad CSS changes can accidentally move shared navigation/lamp elements;
- visual changes should be checked against existing selectors and responsive rules;
- QR must remain isolated from the main site's CSS/JS;
- repository history contains abandoned approaches and must not be treated as current state;
- README/CHANGELOG can lag and are not the source of truth;
- local assets are preferred when external asset URLs fail or add fragility;
- the user strongly prefers direct, restrained, non-corporate design;
- avoid adding features that were not requested;
- inspect before changing.

> **Core rule:** Read the context, inspect the real repo, distinguish implemented from planned, preserve established decisions, and only then make the requested change.


## 21. QA status as of 2026-09-28

A thorough repository/source QA pass was performed on 2026-09-28.

### Verified statically
- Main homepage, CV, 404 and QR HTML were inspected.
- Main and QR CSS/JS were inspected.
- All referenced local CSS, JS, favicon and service SVG assets were verified to exist in the repository.
- cv.pdf was fetched as base64 and structurally checked: PDF 1.4 header, xref/startxref and EOF present, one page object/count detected.
- PDF.js 4.10.38 is still published by cdnjs with both `pdf.min.mjs` and `pdf.worker.min.mjs` available.
- Duplicate HTML IDs: none detected.
- Images without alt attributes: none detected.
- Unlabelled buttons: none detected.
- Obsolete `/about`, `/read`, "Homelab Hobbyist", analytics beacon, old main version 1.2.4 and HTTP references were absent from active site files.
- robots.txt and sitemap.xml were inspected. Sitemap contains only the homepage and CV.
- Main service destinations are explicitly linked to the expected public hosts.
- Main theme JS, QR theme JS and their separate localStorage keys remain isolated.
- No repository-search hits for credential terms were found.

### Findings corrected
- Service status dots documented as an established requirement were absent from the current service-card implementation. Restored them as consistent, non-interactive green status indicators on every service card.
- README and the historical 1.2.5 changelog note still called the QR site v1.0.1 even though the implementation is v1.0.2. Documentation corrected.
- Main site bumped from v1.2.5 to v1.2.6 for the service-card QA correction.

### Live-browser limitation
The available environment could not reach `divijshah.in` or `qr.divijshah.in` over the network, so live HTTP/browser rendering, console/network inspection, screenshots, actual click behavior, viewport rendering and Cloudflare deployment verification could not be honestly marked PASS. These remain pending live-browser checks rather than being guessed.
