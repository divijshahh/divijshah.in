# Prompt Log

> Persistent record of meaningful project prompts/sessions.
> `MASTER_CONTEXT.md` is current-state authority; this file is the history of decisions and work.
> Last updated: 2026-09-28.

## Logging rules

For every meaningful future project prompt/session, append an entry.

A meaningful entry includes requests that:
- change code/design/infrastructure;
- approve or reject an approach;
- establish a new permanent constraint;
- correct an agent assumption;
- change deployment;
- change the roadmap;
- materially clarify current state.

For simple questions with no project-state effect, a short entry is enough.

Do not fabricate verbatim historical wording. Older entries below are reconstructed summaries from available conversation/project history and Git history.

Use this format:

## YYYY-MM-DD — Topic
### User request
...
### Inspected
...
### Changed
...
### Not changed
...
### Decision/constraint
...
### Version
...
### Result
...
### Follow-up
...
### Commit
...

---

# Historical entries

## 2026-09-20 — Infrastructure and domain architecture

### User request
Establish and maintain the public-domain/self-hosting architecture around divijshah.in and the home server.

### Inspected
Oracle public ingress, Caddy, Tailscale, TrueNAS, Authelia, Cloudflare DNS/Pages, public service routing.

### Established
- Oracle Cloud VM is the public ingress.
- Caddy is the public reverse proxy.
- Oracle connects to TrueNAS over Tailscale.
- TrueNAS does not use Nginx/Nginx Proxy Manager.
- Cloudflare handles DNS and Pages.
- Authelia provides authentication where required.

### Public service routing
- photos.divijshah.in -> Immich through Authelia.
- auth.divijshah.in -> Authelia.
- media.divijshah.in -> Jellyfin.
- request.divijshah.in -> Seerr.
- docs.divijshah.in -> Nextcloud.
- status.divijshah.in -> Uptime Kuma.

### Permanent constraints learned
- Infrastructure actions need prerequisite/warning context.
- Config edits should include sudo nano <file>.
- Config changes need validation commands.
- Never expose credentials/private keys in project docs.
- Do not invent a proxy layer that does not exist.

### Version
None.

---

## 2026-09-20/21 — Homepage identity and service cards

### User request
Refine the homepage so the personal identity is the focus and the service section looks cohesive.

### Changes/decisions
- Larger identity/logo treatment.
- Uniform card background treatment.
- Removed "Homelab Hobbyist".
- Added status dots to all service cards using the Uptime Kuma visual language.
- Refined service icon sizing and theme handling.
- DS favicon became the site identity.

### Rejected
Different background treatments for every service card were considered shabby and were not retained.

### Result
Service section is a restrained personal-services panel rather than a generic homelab dashboard.

---

## 2026-09-21 — About page iterations and deletion

### User request/history
The About page was iterated through multiple concepts, including homelab history, Elsewhere content, cards and flow diagrams.

### Result
The user ultimately decided to delete /about entirely.

### Permanent decision
Do not recreate /about or add About navigation.

### Historical note
Old commits/changelog entries may mention About-page implementations. Those are historical only.

---

## 2026-09-21/22 — Navigation and lamp theme control

### User request
Keep navigation simple and use the hanging lamp as the theme control instead of a generic dark-mode button.

### Problems corrected during iterations
- Home/CV toolbar became too large.
- Toolbar ended up at the bottom/incorrect position in one iteration.
- Lamp was positioned incorrectly.
- Lamp did not work in one iteration.

### Final decisions
- Fixed Home/CV dock.
- Lamp is the theme control.
- Theme control must work consistently on relevant pages.
- No generic dark-mode button.

### Agent lesson
Shared CSS must be inspected before edits. Do not make broad responsive/layout changes based on stale code.

---

## 2026-09-22/23 — Main-site v1.2 work

### User/project goal
Finish the main website while preserving its minimal design.

### Implemented
- local service icons;
- separate light/dark Seerr icons;
- Uptime Kuma variants;
- shared main-site JS;
- WebSite JSON-LD;
- focus-visible styling;
- reduced-motion support;
- custom 404;
- mobile service-grid arrangement;
- simplified service labels;
- stylesheet cleanup;
- consolidated main versioning.

### Permanent decisions
- keep PDF.js CV rendering;
- keep About deleted;
- keep QR architecture separate;
- use local service assets;
- retain accessibility behavior.

---

## 2026-09-23 — QR site isolation

### User request
Create/continue a separate QR/business-card landing experience.

### Implemented architecture
`qr-site/` contains its own:
- index.html
- style.css
- assets/theme.js
- light/dark favicons
- QR-specific assets.

### Important correction
A previous approach consolidated QR CSS into the main stylesheet. That was identified as an architectural mistake and reversed.

### Permanent decision
QR remains independently styled and independently themed.

### Relevant commits
- 7d3c0b1
- 0372b60
- e5d4a64

---

## 2026-09-23 — QR v1.0.2 placeholder development

### User request/history
Develop a compact QR/business-card landing placeholder.

### Iterations
- placeholder QR mark;
- removal of a redundant placeholder;
- yellow identity mark;
- external under-construction asset attempt;
- local under-construction asset;
- larger local SVG.

### Important correction
External FreeSVG asset did not work reliably. The user added a local SVG to the repo.

### Current asset
`qr-site/assets/underconstruction.svg`

### Current result
The SVG displays correctly and the QR page is intentionally under construction.

### Current version
v1.0.2.

### Relevant commits
- f54874c
- 59965a1
- 8de1acf
- ee1f43c
- d6c3b60
- 861ad73
- f49728a
- a6f5c3c
- 9bd91b6

---

## 2026-09-23 — QR Cloudflare Pages deployment

### Clarification
The QR site is deployed as its own Cloudflare Pages project/root using `qr-site`.

### Result
Deployment works.

### Permanent decision
Do not keep treating Pages output-directory configuration as an unresolved problem.

### Security
Do not put QR behind Cloudflare Access.

---

## 2026-09-23/24 — Main site v1.2.5 finalization

### User/project goal
Finish and stabilize the 1.2.x main site.

### Result
Main site, CV and 404 reached v1.2.5.

### Relevant commits
- f57426f
- 8252ebb
- 2467bce
- ebef4a8
- b1957af

### Documentation note
README/CHANGELOG have some stale QR v1.0.1 wording. Actual QR version is v1.0.2.

---

## 2026-09-24 — Seerr/Uptime Kuma icon refinements

### Decisions
- Seerr light icon uses white inner section.
- Seerr dark icon uses original black-center logo.
- Uptime Kuma light icon is softened to about 0.20 opacity.
- Do not flatten service icons into generic monochrome shapes.

### Relevant commits
- 60e3f4e
- 5a25c8e

---

## 2026-09-24/25 — Domain email and Cloudflare Email Routing

### User request/activity
Configure inbound email routing for the domain and consider a future domain-mail setup.

### Known configuration discussed
- route1.mx.cloudflare.net priority 81
- route2.mx.cloudflare.net priority 87
- route3.mx.cloudflare.net priority 5
- DKIM TXT at cf2024-1._domainkey.divijshah.in
- SPF: v=spf1 include:_spf.mx.cloudflare.net ~all

### Aliases discussed
- divij@
- hello@
- contact@
- work@
- legal@
- security@

### Decisions
- catch-all OFF;
- subaddressing OFF;
- do not enable either without explicit request;
- inbound routing through Cloudflare;
- outbound domain mail remains future work;
- full self-hosted mail server is not currently pursued.

### Important
Discussed aliases must not be documented as active without verification.

---

## 2026-09-24/25 — Gmail workflow context

### Topic
Gmail optimization around domain/personal workflow.

### Known account
work.divijshah@gmail.com

### Signature direction
Divij Shah
divijshah.in

The domain should be clickable without visibly showing https://.

### Additional result
Google Tasks integration was considered and abandoned as too cumbersome.

### Repository impact
None directly.

---

## 2026-09-25 — Unrelated conversations

Travel, public Wi-Fi/VPN, packing and shopping topics occurred during this project period.

They do not change repository state unless a future prompt explicitly connects them to the website/infrastructure.

---

## 2026-09-28 — Repository recheck

### User request
Recheck the entire repo because a previous checklist contained items that were already completed.

### Inspected
Current Git tree, main HTML/CSS/JS, CV, QR files, README, CHANGELOG, recent commit history.

### Corrected current-state understanding
- Main site is essentially complete.
- Main site is v1.2.5.
- QR site is structurally complete for its current under-construction state.
- QR site is v1.0.2.
- Final QR business-card experience remains future work.
- home.divijshah.in remains planned.
- read.divijshah.in remains planned.
- README/CHANGELOG can be slightly out of sync and are not strict authoritative state.

### Result
The project should no longer be managed from a generic checklist. A persistent agent-context system is needed.

---

## 2026-09-28 — Persistent Project Context requested

### User request
Create an entire folder named "Project Context" containing:
1. one file for prompt/session logs;
2. one larger file containing all context an agent needs to get up to speed and avoid breaking established work;
3. a section/system that keeps updating on every prompt/session.

### Implementation
Created:

```
Project Context/
├── MASTER_CONTEXT.md
└── PROMPT_LOG.md
```

### Design of MASTER_CONTEXT.md
It records:
- project purpose;
- agent rules;
- current status;
- repo map;
- main-site state;
- QR architecture;
- service links/icons;
- theme/navigation rules;
- accessibility;
- SEO;
- infrastructure;
- Cloudflare;
- email;
- future projects;
- deleted/rejected approaches;
- versioning;
- file map;
- change workflow;
- open work;
- historical implementation lessons.

### Design of PROMPT_LOG.md
It records:
- how future entries should be written;
- reconstructed historical project sessions;
- user requests;
- inspected state;
- actual changes;
- non-changes;
- decisions;
- version impacts;
- results;
- follow-up;
- commits where known.

### Permanent maintenance rule
Every meaningful future project prompt/session must append a new entry to PROMPT_LOG.md and update MASTER_CONTEXT.md when current state changes.

### Version
None. Documentation-only change.

---

# Future entries start here

## 2026-09-28 onward — Session log

Append every future meaningful project prompt below this line.

Do not overwrite earlier history.
Do not rewrite history to make it look cleaner.
If a decision is reversed, preserve the old entry and add a new entry explaining the reversal.


## 2026-09-28 — Persistent memory rule reaffirmed

### User request
Remember permanently that every prompt asking the agent to do something or to remember something must update the project prompt log.

### Permanent rule
For every such prompt/session, append an entry to `Project Context/PROMPT_LOG.md`.

### Additional permanent rule
When the agent notices discrepancies between `MASTER_CONTEXT.md` and the actual repository/project state, update `Project Context/MASTER_CONTEXT.md` so it remains authoritative and current.

### Result
These rules apply to all future work on the divijshah.in project.


## 2026-09-28 — To-do list narrowed

### User request
Removed the previously listed work for `read.divijshah.in`, domain-email setup/aliases, outbound `@divijshah.in` mail, and homelab transactional mail.

### Current remaining roadmap
- Final QR/business-card landing experience.
- Custom `home.divijshah.in` frontend.
- Optional browser QA after future visual changes.



## 2026-09-28 — Thorough final QA pass

### User request
Perform the final browser/repository QA exactly as outlined, without skipping steps, and choose the thorough path.

### Inspected
- Current repository files and project context.
- Main homepage, stylesheet and site JS.
- CV page and PDF.
- 404 page.
- QR page, QR stylesheet and QR theme JS.
- Local service/favicons/QR SVG assets.
- robots.txt, sitemap.xml and _headers.
- Recent Git history around service cards/status dots.
- Repository searches for deleted routes, stale features, analytics and credential-like terms.
- cdnjs listing for PDF.js 4.10.38.

### Findings
- Established service status dots were missing from the current service-card implementation despite being a documented project requirement.
- README and the 1.2.5 changelog note contained stale QR v1.0.1 documentation.
- Static source checks passed for duplicate IDs, image alt presence, button labels, local asset existence and basic PDF structure.
- Live public-domain/browser checks could not be completed because the available environment could not reach the domains. No live result was invented.

### Changed
- Restored consistent green status dots to all service cards.
- Corrected stale QR version documentation from 1.0.1 to 1.0.2.
- Bumped the main site visible version from v1.2.5 to v1.2.6.
- Updated MASTER_CONTEXT.md to reflect the narrowed roadmap and QA findings.

### Not changed
- No infrastructure/Caddy/Cloudflare architecture changes.
- No QR-site version bump.
- No redesign based on subjective preference.
- No claim of live browser/deployment PASS.

### Follow-up
Live browser/HTTP QA remains the only unperformed part of the outlined checklist and must be performed when an environment with access to the deployed sites is available.

### Commit
To be recorded after the QA corrections are committed.


## 2026-09-28 — Personal-link status indicators

### User request
Remove the Uptime Kuma-style status indicators from the LinkedIn and Email cards on the main website.

### Inspected
- Current homepage personal-link markup in index.html.
- Main style.css status-indicator selector.
- Current main-site versioning across homepage, CV and 404.

### Changed
- Removed the shared status-dot pseudo-element from .social-card.
- Kept the established status indicators on the self-hosted service cards.
- Bumped the main site, CV and 404 visible version from v1.2.6 to v1.2.7.
- Added a 1.2.7 changelog entry.

### Not changed
- LinkedIn and Email card layout, icons, links and hover behavior.
- Service-card status indicators.
- QR site version or implementation.

### Result
Personal social/contact links no longer visually imply service uptime, while the service grid retains its Uptime Kuma-style status indicators.


## 2026-09-28 — QR mobile/device requirements clarified

### User request
Clarified the QR business-card implementation before approval:
- keep the lamp theme control;
- optimize the lamp specifically for phones;
- treat mobile as the primary design target;
- pay special attention to iPhone viewport dimensions;
- explicitly optimize responsive behavior for iPad as a separate device class because tablet use is expected.

### Changed
No website implementation yet. These are implementation constraints only.

### Decision/constraint
- QR remains mobile-first.
- Phone targets must be checked against common iPhone CSS viewport sizes, including narrow 375px layouts and modern 390px/393px/430px widths.
- iPad must receive deliberate tablet responsive treatment rather than simply inheriting the phone layout. Target portrait and landscape classes around 768px, 820px, 834px and 1024px CSS widths.
- The lamp remains visible and functional, with touch-safe sizing/positioning and safe-area awareness on phones.
- Desktop remains a wider presentation of the same layout, not the design source.

### Follow-up
Implementation remains blocked until the user gives the previously requested `approved` confirmation.


## 2026-09-28 — QR v1.1.0 implementation approved and built

### User request
Approved implementation of the final QR business-card landing page, including the previously locked mobile-first, iPhone, iPad and phone-optimized lamp requirements.

### Inspected
- Current QR HTML/CSS/theme JS.
- README, CHANGELOG, robots.txt, sitemap.xml and root headers.
- Existing project context and prompt log.

### Changed
- Replaced the QR placeholder with the specified contact-first business-card page.
- Added `qr-site/divij-shah.vcf` using vCard 3.0 with only N/FN, cell, email and the two requested URLs.
- Added `qr-site/_headers` with `text/vcard; charset=utf-8` for `*.vcf`.
- Added `noindex, nofollow` to QR metadata.
- Implemented mobile-first responsive CSS with explicit iPhone-width handling and iPad portrait/landscape breakpoints.
- Kept and optimized the lamp for phone touch sizing and safe-area positioning.
- Updated QR documentation and version to v1.1.0.

### Not changed
- No main-site HTML, CSS, JS, CV or infrastructure files were modified.
- Main sitemap remains unchanged and contains only the main homepage and CV.
- QR remains independently themed with the `qr-theme` localStorage key.

### Verification
- Source was re-read from the implementation branch after changes.
- Verified exact contact URLs, phone number, email, vCard fields, metadata, version and responsive breakpoints in source.
- Verified no `law student` or `student` wording was added to QR page/vCard/metadata.
- Verified QR page contains no third-party scripts, font requests or trackers.
- Contrast values for the light muted text and dark muted text were checked statically; both meet the 4.5:1 target against their respective backgrounds.
- Live browser/Cloudflare verification was not available and is not claimed.

### Version
QR v1.1.0.

### Follow-up
Test on physical iPhone/iPad devices and after deployment: vCard import, WhatsApp, tel, mailto, dark mode, and QR scanning.


## 2026-09-28 — QR contact icon rendering repair

### User request
Fix the QR contact icons because Call, Email and CV were completely filled with grey instead of preserving their internal whitespace, and LinkedIn still had a blob near the L.

### Inspected
- Current QR index.html, style.css and contact SVG assets.
- Previous v1.1.2 CSS-mask implementation.
- SVG Repo reference for the previously requested LinkedIn icon.

### Cause
The v1.1.2 CSS mask approach reduced each SVG to a single silhouette, so the intended stroke and negative-space geometry was lost. The LinkedIn geometry also produced the reported blob when flattened.

### Changed
- Removed CSS masking for QR contact icons.
- Switched contact rows to actual SVG image assets.
- Added separate light/dark assets for WhatsApp, Call, Email, LinkedIn and CV.
- Reworked Call, Email and CV as outlined SVGs with preserved whitespace.
- Replaced the malformed LinkedIn geometry with a clean glyph.
- Bumped QR from v1.1.2 to v1.1.3.

### Not changed
QR layout, copy, contact order, vCard, lamp, responsive behavior, deployment architecture and main site.

### Result
The source implementation now preserves actual SVG geometry instead of flattening it through CSS masks. Live browser/device rendering remains unverified.

### Follow-up
Check the deployed QR page on iPhone/iPad in light and dark mode for final visual confirmation.

### Commit
Multiple direct main-branch commits were used because the available GitHub connector did not expose the current base tree SHA needed for a single atomic tree commit.


## 2026-09-28 — QR grid background

### User request
Use the same grid background on the QR page that is used on divijshah.in.

### Inspected
- Main site `style.css` background treatment.
- QR site `qr-site/style.css` and its existing light/dark theme rules.

### Changed
- Added the main site's multi-scale grid background to the QR page.
- Preserved the main site's light-mode radial glow and four grid layers.
- Added the corresponding main-site dark-mode glow and four subtle light grid layers.
- Kept QR-specific layout, cards, typography and theme architecture unchanged.

### Version
QR remains v1.1.3 because this is a visual refinement within the current release rather than a functional/versioned content change.

### Result
The QR page now visually shares the main site's grid background treatment in both themes.

### Follow-up
Check the deployed QR page on iPhone and iPad in both themes for final visual balance.


## 2026-09-28 — QR LinkedIn icon alignment repair
### User request
Fix the LinkedIn contact icon specifically because it was the only QR contact icon whose alignment/geometry looked off.

### Inspected
- Current QR stylesheet icon sizing.
- QR contact-row markup.
- Light and dark LinkedIn SVG assets.
- LinkedIn artwork bounds relative to the shared 24x24 viewBox and other contact icons.

### Cause
The LinkedIn SVG's right-side path extended almost to the viewBox edge and gave the icon a wider/heavier optical footprint than the other contact icons. The shared CSS container was not the primary problem.

### Changed
- Rebuilt qr-site/assets/icons/linkedin.svg with tighter, optically centered geometry.
- Rebuilt qr-site/assets/icons/linkedin-dark.svg with identical geometry and only the fill color changed.
- Kept the existing 24x24 viewBox, filled style and contact-row CSS.
- Bumped the QR visible version from v1.1.3 to v1.1.4.

### Not changed
- Call, Email, CV or WhatsApp icons.
- QR layout, spacing, copy, URLs, vCard, lamp, responsive breakpoints or theme architecture.
- Main website.

### Verification
- Confirmed both LinkedIn SVGs now share the same normalized geometry.
- Confirmed index.html references the light/dark LinkedIn assets and now displays v1.1.4.
- Live browser/device rendering remains unavailable, so deployed visual QA is not claimed.

### Version
QR v1.1.4.


## 2026-09-28 — DIVIJ SHAH title tracking refinement
### User request
Change the title spacing across all sites because the `IVI` sequence in `DIVIJ` was merging visually and sometimes looked like a large M.

### Changed
- Main `style.css`: `DIVIJ SHAH` letter-spacing changed from `-0.075em` to `-0.045em`.
- QR `style.css`: same change.
- Main site bumped to v1.2.8.
- QR site bumped to v1.1.5.

### Not changed
Font, size, weight, line-height, positioning and unrelated typography.

### Result
The title now has more separation between the vertical-heavy `I-V-I` sequence while retaining tight overall tracking.
