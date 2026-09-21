# Changelog

All notable changes to this project are documented in this file.

The format follows the principles of [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), with changes grouped by release and categorized where useful.

## [Unreleased]

No unreleased changes.

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
- Bumped the displayed site version to v0.5.

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

[Unreleased]: https://github.com/divijshahh/divijshah.in/compare/v0.5...HEAD
[0.5]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.5
[0.23]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.23
[0.22]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.22
[0.20]: https://github.com/divijshahh/divijshah.in/releases/tag/v0.20
