# 9 Bar Social Starter Kit

The `9bs-site/` directory is the starter-kit site for **9 Bar Social**. It is a static HTML/CSS/vanilla-JS site intended to be deployed as its own Cloudflare Pages project from the `9bs-site` root directory.

## v2.0.0

The original site was a DeLonghi Dedica-focused single-page guide with product data, community claims, emojis, gamification and personality-driven copy.

The site is now organised around the 9 Bar Social use case:

- manufacturer-agnostic starter path
- task-based navigation instead of a long single-page scroller
- beginner flow: setup -> first espresso -> taste -> one change
- separate Fix, Learn, Equipment, Milk and Maintain areas
- 9BS community information explicitly separated from coffee fundamentals
- starting recipes presented as starting points, not universal rules
- technical claims checked against current SCA and Barista Hustle material used for the rebuild
- old unverified product, coupon, retailer and machine-specific claims are not presented as facts
- all emoji, rabbit-hole gimmicks, gamification, fake consensus language and forced personality removed
- no animated counters, floating elements, easter eggs or ticker
- mobile-first layout

## Information model

1. **Fundamentals**: coffee principles supported by established references.
2. **Starting points**: practical defaults that are useful for beginners but are not universal rules.
3. **9BS community**: member reports, local Indian availability, experiences and recommendations.
4. **Current data**: prices, stock, retailers, discounts and other information that must be dated and rechecked.

## Sources used

- Specialty Coffee Association, "Defining the Ever-Changing Espresso"
- Specialty Coffee Association, "Coffee Freshness"
- Barista Hustle, "The Espresso Compass"
- Barista Hustle, "Channeling"
- Barista Hustle, "Ineffective Voids"
- KitchenAid, "How to Steam Milk for a Latte"

Manufacturer manuals remain the authority for machine-specific setup, cleaning, water and safety instructions.

## Deliberately not carried forward

The previous DeLonghi-specific product catalogue, compatibility claims, prices, coupons, retailer rankings, "best" claims, machine-specific hacks and community consensus statements have not been silently treated as verified. Those items need individual source checks before being added to a future 9BS buying directory.

## Version

Starter Kit: **2.0.0**
Last reviewed: **28 September 2026**

## Run locally

```bash
python3 -m http.server 8000
```

No build step is required.