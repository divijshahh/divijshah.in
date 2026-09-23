# Changelog

## [1.2.5] - 2026-09-24

### Release

- Finalized the 1.2.x site changes and cleanup.
- Bumped the main website, CV and 404 page to v1.2.5.
- QR landing page remains independently versioned at v1.0.1.

## [1.2.2] - 2026-09-24

### Changed

- Changed the Seerr light-theme icon so its inner portion is white while preserving the original surrounding gradient and shape.
- Restored the original Seerr icon with its black inner portion for dark mode.
- Reduced the light-theme Uptime Kuma icon stroke opacity from 0.35 to 0.20.
- Kept the main site and CV at v1.2.2.

### Documentation

- Corrected the 1.2.0 changelog to reflect the final repository architecture.
- Documented the QR landing page as a separate, independently styled site rather than part of the main site's stylesheet.

### Cleanup

- Removed obsolete QR-specific CSS that had remained in the main stylesheet after the QR page was isolated again.

### Historical 1.2.0 notes

The 1.2.0 release originally consolidated the QR page stylesheet into the main stylesheet. That was an intermediate implementation and was later identified as an architectural mistake. The QR page was subsequently isolated again under `qr-site/` with its own `style.css` and `assets/theme.js`. The obsolete QR-specific rules left behind in the main `style.css` have now been removed.

All notable changes to this project are documented here.

The format follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.2.0] - 2026-09-24

### Added

- Added local copies of the homepage service icons for faster loading and fewer third-party requests.
- Added separate light and dark Seerr icons.
- Added a higher-contrast Uptime Kuma icon for the light theme and a dark-theme variant.
- Added shared site JavaScript for theme switching, favicon/icon switching and active navigation state.
- Added a `WebSite` JSON-LD entity to the homepage.
- Added visible keyboard focus states and a complete reduced-motion accessibility rule.
- Added a custom 404 page matching the site's design.

### Changed

- Reworked the mobile service grid so Media and Requests share a row and Photos and Status occupy an equal row.
- Changed the visible service labels to Files, Media, Photos, Requests and Status.
- Cleaned and consolidated the main stylesheet, removing unused page and component rules.
- Consolidated site versioning at `1.2.0`.
- Tidied the repository documentation and removed the redundant repository map from the README.
- Kept the CV's PDF.js renderer rather than falling back to the browser's native PDF viewer.

### Removed

- Removed the unused Seerr logo copy.
- Removed obsolete references and configuration for the deleted About page outside this changelog.

### Historical About-page work

The following entries are retained only as historical record of the deleted About page:

- **1.0.8:** Reworked the About page homelab section into a dedicated history section, removed individual service links, added a homelab link, and bumped the version.
- **1.0.7:** Increased About-page label contrast and adjusted homelab service-card sizing.
- **1.0.6:** Simplified the About page and replaced generic sections with an Elsewhere section.
- **1.0.5:** Reworked the About page around content sections and removed the Raspberry Pi → TrueNAS → Services progression graphic.
- **1.0.4:** Restored the earlier About page card and homelab-flow design.

## [1.1.12] - 2026-09-23

### Changed

- Refined the service-card icon positioning and hover transforms.
- Bumped the homepage and CV to v1.1.12.

## [1.1.11] - 2026-09-23

### Changed

- Refined service icon sizing and spacing.
- Bumped homepage and CV to v1.1.11.

## [1.1.10] - 2026-09-23

### Changed

- Refined the homepage service-card presentation.
- Bumped the homepage and CV to v1.1.10.
