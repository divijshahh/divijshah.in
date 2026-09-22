# Changelog

All notable changes to this project are documented in this file.

The format follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), with changes grouped by release and categorized where useful.

## [Unreleased]

No unreleased changes.

## [0.5.6.2] - 2026-09-22

### Changed

- Moved the persistent navigation dock from the bottom edge to the centre-right side of the viewport.
- Replaced the redundant CV-specific SVG with a simple document icon while retaining the CV label.
- Refined the dock for narrow screens and right-edge safe-area spacing.
- Corrected navigation path matching for active-page highlighting.
- Audited and tightened mobile navigation sizing, spacing, and viewport-safe positioning.
- Updated the site version to v0.5.6.2.

## [0.5.6] - 2026-09-22

### Added

- Added a persistent bottom navigation dock to every page.
- Added document-style SVG navigation icons for Home, About and CV.
- Reused the site's DS favicon as the Home navigation mark.

### Changed

- Removed the previous page-level About/CV navigation.
- Added light/dark-aware navigation assets so the dock follows the active theme.
- Updated the site version to v0.5.6.

## [0.5.5] - 2026-09-22

### Changed

- Removed the homepage editorial navigation bar to keep the landing page focused on the main identity.
- Centered the sticky CV download control.
- Updated the site version to v0.5.5.

## [0.5.4] - 2026-09-22

### Changed

- Fixed the CV page's malformed closing body tag.
- Removed the repeated About/CV navigation from the CV page so the CV begins directly after the identity header.
- Made the CV download control sticky so it remains available while reading the document.
- Removed the redundant Open PDF control.
- Replaced the About page content with a temporary placeholder.
- Reworked the homepage navigation into a subtle editorial navigation bar with Home, About and CV links.
- Updated the site version to v0.5.4.

## [0.5.3] - 2026-09-22

### Changed

- Replaced the CV link card with an in-page rendering of the current CV PDF.
- Kept direct open and download actions available below the rendered CV.
- Reduced the vertical gap between the site navigation and the homepage's `CURRENTLY` section.
- Updated the site version to v0.5.3.

## [0.5.2] - 2026-09-22

### Added

- Added `/about` and `/cv` pages with shared site navigation.
- Added a dedicated CV document presentation with direct viewing and download actions.

### Changed

- Made the About and CV navigation larger and easier to recognize and click.
- Reduced the hero size on the CV page to make room for the document section.
- Organized local interface assets under `assets/`.
- Updated the repository structure documentation.

## [0.5.1] - 2026-09-22

### Changed

- Removed the decorative separator beneath the hero section.
- Refined the footer layout so the location stays left-aligned while the copyright and version form a right-aligned stack.
- Bumped the displayed site version to v0.5.1.

## [0.5] - 2026-09-22

### Changed

- Made the system color scheme the default when no manual theme preference is saved.
- Preserved explicit light/dark selections made through the theme toggle.
- Updated the service labels to make destinations clearer without adding duplicate application names.
- Replaced the Nextcloud wordmark asset with an icon-only service mark and added a `Files` label.
- Increased the spacing between the Uptime Kuma icon and its status label.
- Cleaned up duplicate and unused CSS rules.
- Added additional narrow-screen mobile safeguards and responsive refinements.
- Improved reduced-motion handling by removing unused transition and animation selectors.
- Added separate light and dark DS favicons that follow the active site theme.
- Updated the footer to place the copyright and version as a right-aligned stack.
- Added Open Graph and social sharing metadata for link previews.
- Added a canonical URL and a dedicated 1200×630 social preview image.

## [0.24] - 2026-09-22

### Changed

- Restored light mode as the default theme for first-time visitors.
- Replaced the full-width section rule with a shorter separator that works better with the grid background.
- Increased separation between the Status icon and label.
- Reduced the homepage card's upper-left glass highlight by 15%.
- Added additional mobile spacing and sizing adjustments for the theme toggle and homepage layout.
- Added more breathing room between the `D` and `S` in the favicon.

## [0.23] - 2026-09-22

### Changed

- Recreated the favicon as a transparent `DS` lettermark using the site's Georgia-based typography.
- Removed the opaque square background from the favicon.
- Added favicon cache-busting to ensure the updated mark is used by the website.

## [0.22] - 2026-09-22

### Changed

- Set dark mode as the default theme for first-time visitors.
- Preserve a user's explicit light/dark theme choice across visits.

## [0.21] - 2026-09-22

### Changed

- Reduced the Immich icon size and adjusted its label position to prevent overlap.
- Switched service labels to a more refined serif typeface for a less default appearance.

## [0.20] - 2026-09-21

### Changed

- Refined the light-mode glass card treatment and card typography.
- Removed the additional background radial glow while retaining the original grid treatment.
- Standardized homepage service labels and their positioning.
- Refined Seerr logo placement and service label styling.

### Added

- Replaced the stacked Immich artwork with the icon-only Immich logo.
- Added an explicit `Immich` service label.

### Fixed

- Improved consistency between service cards, typography and light/dark presentation.

[Unreleased]: https://github.com/divijshahh/divijshah.in/compare/v0.5.6.2...HEAD
[0.5.6.2]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.6.2
[0.5.6]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.6
[0.5.5]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.5
[0.5.4]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.4
[0.5.3]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.3
[0.5.1]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5.1
[0.5]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5
[0.23]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.23
[0.22]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.22
[0.20]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.20
