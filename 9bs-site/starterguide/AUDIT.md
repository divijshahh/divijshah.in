# 9 Bar Social Starter Guide: information audit

Source audited: `t0r0id/dedica-decoded` on `main`, including `index.html` and `js/main.js`.

## Classification rules

- **RETAIN**: technically useful, broadly applicable information that can remain with light editing.
- **VERIFY**: potentially useful but dependent on current products, prices, links, availability, or claims that need a fresh source check.
- **REWRITE**: useful subject matter, but the original wording, framing, certainty, or machine-specific assumptions need to change.
- **REMOVE**: content that should not be carried into the public starter guide because it is unsupported, stale, promotional, gimmicky, or inappropriate for a general guide.
- **MACHINE-SPECIFIC**: useful information that belongs in a clearly labelled machine-specific section rather than being presented as universal espresso advice.

## Original JavaScript data blocks

| Original block | Classification | Treatment |
|---|---|---|
| STARTER_KIT | REWRITE + MACHINE-SPECIFIC | Keep the practical checklist structure. Remove Dedica purchase prices and machine-specific basket/portafilter assumptions from the universal path. |
| GRINDERS | VERIFY + REWRITE | Keep the grinder categories and product names as a community snapshot, but remove old prices, badges such as “best”, and unsupported performance claims until individually verified. Explain what makes a grinder espresso-capable. |
| BEANS | VERIFY + REWRITE | Keep the Indian-roaster layer because it is useful to an India-focused site. Current prices, roast availability, coupons, freshness claims and taste claims need individual verification. Present as a dated community directory, not permanent fact. |
| PORTAFILTERS | MACHINE-SPECIFIC + VERIFY | The concept is general; 51mm Dedica fitment and the named products are machine-specific. Product fitment and current availability require verification. |
| BASKETS | MACHINE-SPECIFIC + VERIFY | Keep the distinction between pressurised and non-pressurised baskets. Dedica 51mm fitment and named basket models require verification. |
| ACCESSORIES | REWRITE + VERIFY | Keep WDT, scale, dosing funnel/ring, puck screen, tamper and cleaning concepts. Remove claims such as “essential”, old prices and product-specific links until verified. |
| SYMPTOMS | RETAIN + REWRITE | Keep the diagnostic model. Make sour/bitter guidance explicitly heuristic, include uneven extraction/channeling, and avoid one-variable certainty. |
| TROUBLE | MACHINE-SPECIFIC + VERIFY | Keep only as a separate machine-specific troubleshooting layer. Dedica controls, tank parts, descale behaviour, portafilter failures and mod references require manufacturer/source verification. |
| FAQ | REWRITE | Keep the newcomer questions. Remove Dedica-only answers from the universal guide and turn them into generic espresso answers or a machine-specific appendix. |
| COUPONS | REMOVE | Coupons are transient commercial data. They should not be in the starter guide without a current verification workflow. |
| YOUTUBERS | RETAIN + VERIFY | Keep the idea of a learning library and the named channels only after confirming current URLs and relevance. Avoid “best”, “GOAT”, or authority rankings. |
| SELLERS | VERIFY | Useful India-specific resource, but retailer status, pricing, warranty statements and links are current-data claims. Keep a dated directory only after verification. |
| MODS | MACHINE-SPECIFIC + VERIFY | Keep advanced modifications as an optional appendix with explicit risk/warranty warnings and source links. Do not put modifications in the beginner path. |
| GALLERY | RETAIN | Community media can remain if the assets and permissions/source context are clear. It is supplementary, not instructional. |
| QUOTES | REMOVE from starter path | Community voice is useful, but the original quote wall is personality-heavy and adds little instructional value. It can return as a separate community archive later if desired. |

## Original HTML sections

| Original section | Classification | Treatment |
|---|---|---|
| Hero / rabbit-hole framing | REMOVE + REWRITE | Keep a direct beginner promise. Remove rabbit-hole, spending jokes, counters and fake group authority. |
| Navigation | REWRITE | Keep task-based navigation and mobile menu. Point only to sections that actually exist on the Starter Guide. |
| 5-minute starter kit | REWRITE | Retain as the beginner entry point. Make requirements manufacturer-agnostic. |
| Holy Trinity | REMOVE + REWRITE | Replace with “What matters first”: coffee, grinder, measurement and puck preparation, without a universal spending hierarchy. |
| Grinder section | REWRITE + VERIFY | Keep grinder education and a clearly labelled community product snapshot. |
| Beans section | REWRITE + VERIFY | Keep bean selection principles and an India directory with dated verification status. |
| Gear section | REWRITE + MACHINE-SPECIFIC | Separate universal tools from machine-fit components. |
| Dial-in | RETAIN + REWRITE | This is core instructional content and should be substantially expanded. |
| Fix My Shot | RETAIN + REWRITE | Keep and improve the interactive diagnostic. |
| Milk | RETAIN + REWRITE | Keep generic steaming workflow; remove machine-specific wand claims. |
| Machine troubleshooting | MACHINE-SPECIFIC | Move out of the universal starter path. |
| FAQ | REWRITE | Retain newcomer questions, rewritten generically. |
| Coupons / money hacks | REMOVE from current guide | Current commercial information needs a separate verified India directory. |
| Learn / YouTubers | RETAIN + VERIFY | Keep as a learning resource library without rankings. |
| Where to buy | VERIFY | Useful but entirely current-data dependent. |
| Mods / nerd section | MACHINE-SPECIFIC + VERIFY | Keep as an advanced appendix, not beginner material. |
| Gallery | RETAIN | Community layer only. |
| Quote wall | REMOVE from starter path | Not useful enough to justify the space or tone. |
| Footer | REWRITE | Keep plain 9BS identity and version. |

## What the rebuild changes

The new Starter Guide keeps the useful information model from the original while separating four kinds of knowledge:

1. **Fundamentals** — broadly applicable espresso knowledge.
2. **Starting points** — practical recipes and workflows, clearly described as starting points rather than laws.
3. **Community snapshot** — Indian products, roasters and experiences that need dates/source context.
4. **Machine-specific material** — compatibility, controls, maintenance and modifications that cannot safely be generalized.

No original product price, coupon, retailer warranty claim or “best” ranking is silently presented as current fact.

Version target: **2.2.0**
