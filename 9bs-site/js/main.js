/* ===================== 9 Bar Social — main.js ===================== */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---------- DATA ---------- */

  const STARTER_KIT = [
    { t: "An espresso machine", d: "Choose a machine that suits your budget, available service support and intended drinks. Compare current pricing, warranty terms and specifications before buying." },
    { t: "An espresso-capable grinder", d: "The make-or-break purchase. Manual K6 / Timemore C3 ESP, or electric HiBrew G5 / Rift 64." },
    { t: "Fresh, medium-roast beans", d: "Rest 7–10 days off roast date. Medium roasts are the easiest start; lighter roasts shine once you learn the high-temp flush trick." },
    { t: "A non-pressurised basket (51mm)", d: "The real upgrade from the stock pressurised setup. Get a precision (IMS) basket if budget allows, or a bottomless portafilter that comes with one (THW / Neouza / Brewalsa). A purpose-built bottomless portafilter is simpler than modifying the stock portafilter. " },
    { t: "A WDT tool (~₹200)", d: "A few thin needles to stir & de-clump grounds. Cheap, essential." },
    { t: "An RDT spray bottle (~₹120)", d: "One spritz on beans kills static & mess." },
    { t: "A scale with a timer", d: "Weigh dose in & shot out. Stop trusting the buttons. Hoffen ~₹1k." },
    { t: "A 0.8mm magnetic puck screen", d: "Cleaner shots, lets you fit 17–18g, keeps the shower screen tidy." },
    { t: "Watched 1 Hoffmann + 1 Tom's Coffee Corner video", d: "Seriously. 30 minutes saves you weeks." },
  ];

  const GRINDERS = [
    { name: "Kingrinder K6", price: "~₹10,800", tags: ["manual"], badge: ["pick", "Manual pick"],
      desc: "A capable hand grinder with 48mm burrs and external adjustment. It offers a useful range for espresso and suits users who prefer manual grinding.",
      pros: ["Big burrs, fast for a manual", "External dial = easy dial-in"], cons: ["Manual grinding is slower for daily use"],
      link: "https://coffeeplus.in/", linkLabel: "Coffee Plus (pre-order)" },
    { name: "Timemore C3 ESP / ESP Pro", price: "~₹7–8k", tags: ["manual", "budget"], badge: ["value", "Budget pick"],
      desc: "Entry espresso-capable hand grinder. Use the ESP version (or a C3S + ₹1000 mod-plate). Espresso ≈ 0.6–0.8 / ~20–22 clicks.",
      pros: ["Affordable gateway to real espresso", "Good build"], cons: ["Slow (2–3 min/dose)", "Plain C3 / C3S are NOT espresso-capable"],
      link: "https://coffeeplus.in/", linkLabel: "Coffee Plus" },
    { name: "Kingrinder K2", price: "~₹4–5k", tags: ["manual", "budget"], badge: ["neutral", "Budget manual"],
      desc: "Cheapest sensible entry into hand grinding for espresso. Smaller burrs than the K6 but gets you started.",
      pros: ["Cheap", "Espresso-capable"], cons: ["Slower, less consistent than K6"],
      link: "https://www.amazon.in/s?k=kingrinder+k2", linkLabel: "Search Amazon" },
    { name: "HiBrew G5", price: "~₹13–15k", tags: ["electric", "budget"], badge: ["pick", "Best cheap electric"],
      desc: "A compact single-dose electric grinder with conical burrs. A practical upgrade for users moving from a manual grinder.",
      pros: ["Faster workflow than a manual grinder", "Compact footprint"], cons: ["Conical (smaller) burr vs the Rift's 64mm flat"],
      link: "https://fixcoffee.shop/", linkLabel: "Fix Coffee" },
    { name: "Cipher Rift 64 / Espressa Orbit 64", price: "~₹19–21k", tags: ["electric"], badge: ["pick", "Popular option"],
      desc: "64mm flat-burr single-dose grinder (Rift/Orbit/Shardor are the same platform). The sweet-spot upgrade. Get the single-dose hopper; metal body if you can.",
      pros: ["64mm flat burrs = clarity", "Easy clean, low retention", "Burr-swappable later"], cons: ["Plastic body version can crack — pay ~5k more for metal"],
      link: "https://coffeeplus.in/products/espressa-orbit-64-home-grinder", linkLabel: "Coffee Plus" },
    { name: "Turin DF54", price: "~₹27k", tags: ["electric", "endgame"], badge: ["pick", "End-game-ish"],
      desc: "All-metal grinder with 54mm flat burrs and a titanium-coated burr option. Consider it if build quality and flat-burr performance are priorities.",
      pros: ["All-metal construction", "Titanium burr option", "Excellent clarity"], cons: ["Pricey"],
      link: "https://coffeeplus.in/", linkLabel: "Coffee Plus" },
    { name: "Espressa Orbit 64 Pro", price: "~₹25k", tags: ["electric", "endgame"], badge: ["pick", "All-metal flat burr"],
      desc: "The Pro version of the Orbit 64 — same 64mm flat burrs, but with a premium all-metal (die-cast aluminium) body for durability and peace of mind. The all-metal version of the same platform.",
      pros: ["64mm flat burrs", "All-metal die-cast body", "Single-dose, low retention"], cons: ["Pricier than the plastic Orbit"],
      link: "https://coffeeplus.in/products/espressa-orbit-64-home-grinder", linkLabel: "Coffee Plus" },
    { name: "Baratza Encore ESP", price: "~₹14k", tags: ["electric"], badge: ["neutral", "Reliable"],
      desc: "Plastic-bodied but widely used and dependable home espresso grinder. 'Heard no complaints about it breaking.'",
      pros: ["Proven reliability", "Easy to live with"], cons: ["Plastic body", "Not single-dose-first"],
      link: "https://www.amazon.in/s?k=baratza+encore+esp", linkLabel: "Search Amazon" },
    { name: "Plain Timemore C3 / C3S", price: "—", tags: ["avoid"], badge: ["avoid", "Not for espresso"],
      desc: "Designed primarily for filter coffee. The standard C3/C3S is not the appropriate configuration for espresso; use the ESP version or a compatible burr modification.",
      pros: [], cons: ["Sour, gushing espresso", "Endless frustration"], link: "", linkLabel: "" },
    { name: "1Zpresso Q Air", price: "—", tags: ["avoid"], badge: ["avoid", "Filter grinder"],
      desc: "A filter grinder (~25µm/click) — hard to dial in for espresso. Lovely for pour-over, wrong tool here.",
      pros: [], cons: ["Not espresso-suited"], link: "", linkLabel: "" },
    { name: "Agaro / generic cheap grinders", price: "—", tags: ["avoid", "budget"], badge: ["avoid", "Avoid"],
      desc: "Inconsistent particle size can make espresso difficult to dial in and may increase channeling. A more capable espresso grinder is preferable.",
      pros: [], cons: ["Inconsistent", "Painfully slow"], link: "", linkLabel: "" },
  ];

  const BEANS = [
    { name: "Araku (Selection / Signature)", price: "~₹400–450 / 250g", tags: ["budget", "milk"], badge: ["value", "Cheapest fresh"],
      desc: "Widely available and suitable for milk-based drinks. Some drinkers find the Signature and Selection profiles mild for straight espresso.",
      link: "https://www.araku.com/", linkLabel: "araku.com / CRED" },
    { name: "Hunkal Estate — Aranya Gold", price: "~₹630 / 500g", tags: ["budget", "milk"], badge: ["value", "Best ₹/gram"],
      desc: "Approximately ₹1.56/g. A balanced option for regular use and for learning to dial in a new setup.",
      link: "https://www.hunkalestatecoffee.com/collections/all/products/aranya-gold-coffee-beans", linkLabel: "hunkalestatecoffee.com" },
    { name: "Fraction9 — Everyday Gold", price: "~₹470 / 250g", tags: ["budget", "milk", "specialty"], badge: ["pick", "Crowd favourite"],
      desc: "Medium-dark, consistent roasting, cacao + nutty. Bold, daily-driveable. Free delivery over ₹2k.",
      link: "https://fraction9coffee.com/", linkLabel: "fraction9coffee.com" },
    { name: "Blue Tokai — Attikan / Vienna / Dhak", price: "~₹500+ / 250g", tags: ["specialty", "milk"], badge: ["pick", "Reliable specialty"],
      desc: "Roast date + process printed on every pack. Store pickup = freshest. Vienna (dark) & Dhak blend shine for milk.",
      link: "https://bluetokaicoffee.com/", linkLabel: "bluetokaicoffee.com" },
    { name: "Naivo — Attikan White Mist", price: "~₹450 / 250g", tags: ["specialty"], badge: ["pick", "Group loved"],
      desc: "Nutty notes that work well in milk-based drinks. Roasts after ordering, although delivery times may vary.",
      link: "https://naivo.in/", linkLabel: "naivo.in" },
    { name: "Mokka Farms", price: "~₹600 / 500g", tags: ["budget"], badge: ["neutral", "Divisive"],
      desc: "An inexpensive option for practice shots. Roast consistency may vary, so it is better suited to experimentation than as a primary recommendation.",
      link: "https://www.mokkafarms.com/", linkLabel: "mokkafarms.com" },
    { name: "Lavazza Crema e Gusto", price: "supermarket", tags: ["budget", "milk"], badge: ["neutral", "Seasoning beans"],
      desc: "Widely available and suitable for milk-based drinks and grinder seasoning. Check the roast date because supermarket stock may be older.",
      link: "https://www.amazon.in/s?k=lavazza+crema+e+gusto+beans", linkLabel: "Search Amazon" },
    { name: "Roastery Coffee House — Baarbara", price: "~₹500 / 250g", tags: ["specialty"], badge: ["neutral", "Cafés everywhere"],
      desc: "Solid specialty with cafés in most cities (order via Zomato/Swiggy for same-day-fresh). Baarbara Estate is a popular pick.",
      link: "https://roasterycoffee.co.in/", linkLabel: "roasterycoffee.co.in" },
    { name: "Season Sync / Odd / Broot / Bloom", price: "varies", tags: ["specialty"], badge: ["neutral", "Worth exploring"],
      desc: "Other community-mentioned options include Season Sync Monsoon Craft, Odd Coffee Ol Smoky, Broot espresso blends and Bloom Kid Dynamite.",
      link: "https://www.instagram.com/explore/search/keyword/?q=indian%20specialty%20coffee", linkLabel: "Explore roasters" },
  ];

  const PORTAFILTERS = [
    { name: "THW 51mm Bottomless", price: "~₹2.5–2.7k", tags: [], badge: ["avoid", "Substandard"],
      desc: "A lower-priority option with repeated complaints concerning fit, finish and durability. Consider a better-reviewed compatible portafilter instead.",
      link: "https://www.amazon.in/s?k=THW+bottomless+portafilter+delonghi+51mm", linkLabel: "Search Amazon" },
    { name: "Neouza 51mm Bottomless", price: "~₹2–2.4k", tags: [], badge: ["value", "Great quality"],
      desc: "Ships from China (10–25 days, ~₹600 shipping). Comes with dose rings + cleaning tools. Card payments can be fussy — One Card / Forex / Scapia tend to work.",
      link: "https://neouza.com/", linkLabel: "neouza.com" },
    { name: "Brewalsa 51mm (Made for espresso machine)", price: "~₹2.1k + ship", tags: [], badge: ["neutral", "Purpose-built"],
      desc: "Wooden-handle stainless-steel portafilter designed for compatible 51mm espresso machines.",
      link: "https://brewalsa.com/", linkLabel: "brewalsa.com" },
    { name: "DIY: Modify the stock portafilter", price: "~₹50–100", tags: [], badge: ["neutral", "DIY option"],
      desc: "A fabricator can remove the spout to create a bottomless portafilter. This is inexpensive, but the cut must be made carefully and the edge should be smoothed before use.",
      link: "https://www.youtube.com/results?search_query=delonghi+dedica+bottomless+portafilter+mod", linkLabel: "How-to videos" },
  ];

  const BASKETS = [
    "<b>IMS precision (H22 / H26):</b> ~₹3–5k. Laser-cut, super even flow. Premium — import via desertcart or a friend abroad to dodge inflated local pricing.",
    "<b>THW basket:</b> a bundled option with reported inconsistencies in quality and fit. A reputable precision basket is preferable.",
    "<b>Supvox 8–12g single-shot basket:</b> good budget single basket if you drink small.",
    "<b>Capfei / generic precision baskets:</b> fine performers at lower cost — fit 16–17g easily.",
    "<b>Always check fitment:</b> confirm the 51mm size and verify the manufacturer compatibility information before ordering.",
  ];

  const ACCESSORIES = [
    { name: "WDT tool", price: "~₹200", rating: ["pick", "Essential"], desc: "Thin needles for distributing grounds and breaking up clumps. An inexpensive way to improve puck preparation.",
      link: "https://www.amazon.in/s?k=WDT+tool+espresso+distribution+51mm", linkLabel: "Search Amazon" },
    { name: "RDT spray bottle", price: "~₹120", rating: ["pick", "Essential"], desc: "A small amount of water on the beans before grinding can reduce static and mess. Avoid over-wetting the beans.",
      link: "https://www.amazon.in/dp/B0GRR9DQXZ", linkLabel: "Neutrino RDT bottle" },
    { name: "Puck screen (0.8mm, magnetic)", price: "~₹300–500", rating: ["pick", "Get it"], desc: "Even water distribution, keeps the shower screen clean, lets you load 17–18g. Get 0.8mm, not 1.7mm.",
      link: "https://www.amazon.in/s?k=51mm+puck+screen+0.8mm+magnetic", linkLabel: "Search Amazon" },
    { name: "Scale w/ timer", price: "~₹1–2k", rating: ["pick", "Important"], desc: "Weigh the dose and yield and time the extraction. Choose a scale that fits your machine’s drip tray.",
      link: "https://www.amazon.in/dp/B0DPL28C9Q", linkLabel: "Coffee scale (fits the machine)" },
    { name: "Tamper", price: "~₹1–1.2k", rating: ["neutral", "Nice"], desc: "Flat-base preferred. Supvox / Fix Coffee spring-loaded are OK but loosely calibrated; Normcore if budget allows.",
      link: "https://www.amazon.in/Supvox%C2%AE-Espresso-Calibrated-Stainless-Anti-Corrosion/dp/B0D5XL38HX/", linkLabel: "Supvox calibrated tamper" },
    { name: "Dosing ring", price: "~₹699", rating: ["neutral", "Optional"], desc: "Makes WDT mess-free. Buy one that sits ABOVE the portafilter, not one that drops inside (those get stuck).",
      link: "https://amzn.in/d/0bI0iOI4", linkLabel: "No-border dosing ring" },
    { name: "Knock box", price: "~₹500–1k", rating: ["neutral", "QoL"], desc: "Bonus: many people's stock basket stopped flying out on knock once they used a knock box.",
      link: "https://www.amazon.in/s?k=espresso+knock+box", linkLabel: "Search Amazon" },
    { name: "Single-dose vials", price: "~₹350 / 15", rating: ["neutral", "Good to have"], desc: "Single-dose your beans into 50ml test-tube vials (≈18g of medium-dark each) and freeze them. Mostly aesthetic + a tiny RDT effect from condensation — but they look fantastic on the bar. Pair them with a <a href=\"https://www.amazon.in/Test-Stand-holes-Moulded-Polypropylene/dp/B0DD429G18\" target=\"_blank\" rel=\"noopener\">test-tube stand ↗</a>.",
      link: "https://www.amazon.in/dp/B0GCWGBBM4", linkLabel: "50ml vials" },
    { name: "Tamping station", price: "~₹500+ / 3D-print", rating: ["neutral", "If bottomless"], desc: "Bottomless portafilters wobble — a station holds it steady while you tamp. 3D-print it for ~₹50 in filament.",
      link: "https://www.amazon.in/s?k=51mm+tamping+station+holder", linkLabel: "Search Amazon" },
    { name: "Descaler", price: "~₹600 / 6 uses", rating: ["neutral", "Upkeep"], desc: "Use a compatible descaler and follow the machine manufacturer’s instructions for the product and descaling interval.",
      link: "https://www.amazon.in/dp/B00CWANDT6", linkLabel: "Aftermarket descaler" },
  ];

  const SYMPTOMS = [
    { label: " Sour / sharp / hollow", cause: "Under-extracted; the grind, dose, yield or temperature may need adjustment",
      fixes: ["<b>Grind finer</b> — the #1 fix.", "Pull a longer ratio (1:2.5–1:3) and let it run a few more seconds.", "Use fresher beans; rest 7–10 days off roast.", "Brewing too cool? Use the <b>high-temp flush trick</b> — a quick blank hot-water flush right before you pull, then brew immediately. Runs hotter and sweeter."] },
    { label: " Bitter / harsh / dry", cause: "Over-extracted",
      fixes: ["<b>Grind coarser.</b>", "Stop the shot earlier (shorter ratio, e.g. 1:2).", "Clean the basket & portafilter — old oils taste rancid/metallic.", "Don't go below ~9 clicks on a hand grinder (and don't over-extract dark roasts)."] },
    { label: " Watery / gushes / done in <15s", cause: "Too coarse, or channeling",
      fixes: ["<b>Grind finer</b> (1–2 clicks at a time).", "WDT + level before tamping.", "Check beans aren't stale (pre-ground in a naked basket = no resistance).", "Make sure you're not using a filter-only grinder."] },
    { label: " Chokes / barely drips", cause: "Too fine",
      fixes: ["<b>Grind coarser.</b>", "Use a touch less coffee.", "If the machine enters steam mode after a blocked shot, release the steam and allow the machine to return to brewing temperature before retrying."] },
    { label: " Sprays sideways (bottomless)", cause: "Channeling — uneven puck",
      fixes: ["<b>WDT thoroughly</b> and distribute evenly.", "Tap the portafilter to settle grounds, then level & tamp flat.", "Add a puck screen on top.", "A spritzy bottomless shot is normal for the first few seconds — judge the steady state."] },
    { label: " Espresso vanishes in milk", cause: "Shot too weak / wrong ratio for milk",
      fixes: ["Pull a stronger shot (more dose, tighter ratio like 1:1.5–1:2).", "Use a medium-dark or robusta-blend bean for milk drinks.", "Don't over-dilute — start with less milk (~100–140g)."] },
    { label: " Machine stuck on the steam light", cause: "Water/airlock or a choked shot",
      fixes: ["<b>Check the water tank</b> — refill & reseat it firmly.", "Open the steam knob and release steam for a few seconds.", "Power-cycle. If it choked, it auto-switches to steam — let it out and retry.", "If the problem persists after these checks, consult the machine manual or service documentation."] },
  ];

  const TROUBLE = [
    { q: " Machine froze on the steam light and won't pull a shot", a: "Check the water tank and reseat it firmly. If a previous shot was choked, release steam and allow the machine to return to normal brewing temperature. Power-cycle if necessary. If the issue persists, follow the manufacturer’s troubleshooting procedure." },
    { q: " The basket gets stuck in the group head (need a knife to remove)", a: "Try a slightly smaller dose and keep the grounds below the basket rim. If the basket remains stuck, do not force it with a knife. Release pressure safely, remove the portafilter carefully and inspect the basket, gasket and fitment." },
    { q: " Descaling light came on — what do I do?", a: "Follow the machine’s descaling procedure and use a compatible descaler. Do not substitute chemicals or back-flush unless the manufacturer explicitly supports the procedure. Avoid direct skin contact with descaling solution." },
    { q: " Set water hardness?", a: "Use the water-hardness setting specified by your machine. A TDS meter does not directly measure hardness; use a water-hardness test strip if you need to determine the appropriate setting." },
    { q: " What should I check before buying a machine?", a: "Check the seller, warranty, return policy, service support, included accessories and current price. On delivery, record the unboxing and inspect the water tank, group head, portafilter, steam wand and controls before use." },
    { q: " The water tank cracked / I need a spare part", a: "Do not use a cracked water tank. Contact the seller or manufacturer for the correct replacement part and check the machine’s service documentation. Do not repair a water tank with adhesive." },
    { q: " Steam wand has milk buildup / weak steam", a: "Purge and wipe the wand immediately after every use. For buildup, follow the cleaning procedure in the machine manual and clear the steam holes carefully. If steam remains weak after cleaning, check the water level and service requirements." },
    { q: " My THW portafilter chipped/broke", a: "Stop using a damaged portafilter and inspect the basket, gasket and fitment. The THW portafilter has received repeated complaints about fit, finish and durability, so replacement with a better-reviewed compatible model may be preferable." },
  ];

  const FAQ = [
    { q: "Which type of espresso machine should I buy?", a: "For a starter setup, prioritise temperature consistency, adequate steam performance, compatible accessories, service support and warranty coverage. Compare those factors alongside price." },
    { q: "Do I really need to ditch the stock portafilter?", a: "A bottomless portafilter and non-pressurised basket are useful for learning because they make channeling visible. Keep a pressurised basket if you regularly use pre-ground coffee or want a more forgiving workflow." },
    { q: "How much should I spend on a grinder vs the machine?", a: "The grinder deserves a substantial share of the budget because grind consistency has a major effect on extraction. A capable machine cannot compensate for an inconsistent grinder." },
    { q: "Is a manual grinder fine, or do I need electric?", a: "A manual grinder can produce excellent espresso, but it takes longer per dose. Electric grinders are more convenient for frequent use. Choose based on budget, workflow and how often you make espresso." },
    { q: "What ratio & dose should I start with?", a: "A useful starting point is <b>18g in → 36g out in about 25–32 seconds</b> (1:2). For a smaller basket, start around 9g and adjust the yield to taste. Weigh both dose and output rather than relying on preset buttons." },
    { q: "Why is my espresso always sour?", a: "Sourness often indicates under-extraction. Try grinding finer, increasing the yield slightly, or checking that the machine is fully heated before brewing. Medium and medium-dark roasts are generally easier starting points." },
    { q: "Can I use pre-ground coffee?", a: "Yes, but only in the <b>pressurised</b> stock basket. In a bottomless/non-pressurised basket, stale pre-ground has no CO₂ left to build resistance, so it just gushes. Freshly ground is night-and-day better." },
    { q: "Which milk steams best for a beginner?", a: "Cold milk with moderate fat content is generally easier for beginners to texture. Start cold, purge the wand first and stop heating around 60–65°C." },
    { q: "How long do I rest beans after roasting?", a: "7–10 days off the roast date is the sweet spot (some go 2–3 weeks for darker roasts). Then use within ~a month. To store longer, degas ~10 days then freeze in single-dose portions." },
    { q: "Do I need an expensive IMS basket?", a: "No. Grinder quality, fresh beans and puck preparation usually matter more than upgrading from one good precision basket to another. If your current basket is consistent and fits correctly, there is no need to replace it immediately." },
    { q: "What about the HiBrew H10A instead of the espresso machine?", a: "If your budget is around ₹25k, the H10A is another option to consider, particularly if temperature control, a pressure gauge and stronger steam performance are priorities. Compare specifications, current pricing and warranty terms before buying." },
    { q: "Coffee after which time ruins sleep?", a: "Caffeine has a typical half-life of several hours, although it varies between individuals. If caffeine affects your sleep, consider avoiding coffee later in the day." },
  ];

  const YOUTUBERS = [
    { name: "James Hoffmann", by: "espresso fundamentals", desc: "A useful source for espresso fundamentals, dialing in and milk preparation.",
      link: "https://www.youtube.com/@jameshoffmann", linkLabel: "youtube.com/@jameshoffmann" },
    { name: "Lance Hedrick", by: "dialing in & milk", desc: "Practical videos on dialing in, puck preparation and milk steaming.",
      link: "https://www.youtube.com/@LanceHedrick", linkLabel: "youtube.com/@LanceHedrick" },
    { name: "Tom's Coffee Corner", by: "espresso technique", desc: "Useful demonstrations of espresso preparation, equipment and milk steaming.",
      link: "https://www.youtube.com/@TomsCoffeeCorner", linkLabel: "youtube.com/@TomsCoffeeCorner" },
    { name: "Daddy Got Coffee", by: "India-focused home barista", desc: "India-focused content covering equipment availability, coffee beans and beginner-friendly preparation.",
      link: "https://www.youtube.com/@DaddyGotCoffee", linkLabel: "youtube.com/@DaddyGotCoffee" },
    { name: "Morgan Drinks Coffee", by: "coffee education", desc: "Coffee and equipment content with an accessible approach to home brewing.",
      link: "https://www.youtube.com/@morgandrinkscoffee", linkLabel: "youtube.com/@morgandrinkscoffee" },
    { name: "Alternative Brewing", by: "equipment reviews", desc: "Clear comparisons and reviews of brewing equipment, grinders and espresso machines.",
      link: "https://www.youtube.com/@AlternativeBrewing", linkLabel: "youtube.com/@AlternativeBrewing" },
  ];

  const SELLERS = [
    { name: "Latteholic", type: "Machines", desc: "India-focused machine distributor. Compare current pricing, stock and warranty terms before ordering.",
      link: "https://latteholic.com/", linkLabel: "latteholic.com" },
    { name: "Manufacturer India site", type: "Machines", desc: "Official manufacturer information and support. Compare current pricing, availability and warranty terms with authorised sellers.",
      link: "https://www.delonghi.co.in/", linkLabel: "Manufacturer India site" },
    { name: "Coffee Plus", type: "Grinders & gear", desc: "Reliable for grinders — Espressa Orbit 64, Kingrinder K6 (pre-order), Timemore. Good support, ~5% payment cashback.",
      link: "https://coffeeplus.in/", linkLabel: "coffeeplus.in" },
    { name: "Fix Coffee", type: "Grinders & accessories", desc: "HiBrew G5/H10A, DF54, tampers, dosing rings.",
      link: "https://fixcoffee.shop/", linkLabel: "fixcoffee.shop" },
    { name: "Cipher Brewing", type: "Grinders", desc: "Makers of the Rift 64 — excellent grinder, strong warranty support (they've replaced units). Support replies can be slow.",
      link: "https://cipherbrewing.com/", linkLabel: "cipherbrewing.com" },
    { name: "Neouza", type: "Portafilters & baskets", desc: "Bottomless portafilters and related accessories. Shipping times and import costs vary by destination.",
      link: "https://neouza.com/", linkLabel: "neouza.com" },
    { name: "Brewalsa", type: "Portafilters & baskets", desc: "51mm bottomless portafilters and baskets for compatible espresso machines.",
      link: "https://brewalsa.com/", linkLabel: "brewalsa.com" },
    { name: "Amazon India", type: "Everything", desc: "WDT/RDT tools, scales, puck screens and descaler. Compare current listings and prices before ordering.",
      link: "https://www.amazon.in/", linkLabel: "amazon.in" },
  ];

  const MODS = [
    { name: " Dimmer / flow-control mod", desc: "Add a dimmer to control pump pressure & flow — the gateway mod. Several clean write-ups exist on Reddit.",
      link: "https://www.reddit.com/r/espresso/comments/1n77iil/modded_delonghi_dedica/", linkLabel: "Modded espresso machine (r/espresso)" },
    { name: " The espresso machine mod bible (GitHub)", desc: "A detailed hardware modification repository covering pressure profiling, wiring and related technical work.",
      link: "https://github.com/CaiJonas/DeLonghi-Dedica-EC885-EC685-modification", linkLabel: "github.com/CaiJonas" },
    { name: " Espresso Coach Buddy", desc: "A community-made web app for logging shots and dialing in espresso.",
      link: "https://dedica-coach-buddy.lovable.app/", linkLabel: "Espresso Coach Buddy" },
    { name: " r/IndiaCoffee", desc: "A community for buying and selling used equipment, asking questions and discussing Indian coffee.",
      link: "https://www.reddit.com/r/IndiaCoffee/", linkLabel: "reddit.com/r/IndiaCoffee" },
    { name: " Community bean price sheet", desc: "A community-maintained spreadsheet comparing Indian coffee bean prices by approximate ₹/gram.",
      link: "https://docs.google.com/spreadsheets/u/0/d/1qj5oSo6gBcBq2cdFhcIouNtfLc3VQJgsDX-U31OSnnc/htmlview", linkLabel: "Open the price sheet" },
    { name: " DIY smart scale (ESP32)", desc: "A project for users interested in building a Bluetooth shot scale with an ESP32 and load cell.",
      link: "https://www.reddit.com/r/espresso/", linkLabel: "Get inspired (r/espresso)" },
  ];

  /* ---------- RENDER ---------- */

  // Ticker
  const tickerItems = [" prioritise the grinder"," consider a bottomless portafilter"," use fresh beans"," sour? grind finer"," descale regularly"," record your unboxing"," purge the wand"," weigh dose and yield"," preheat before brewing"," change one variable at a time"," compare current prices"," improve your workflow"];
  const tk = $("#tickerTrack");
  if (tk) {
    const span = el("span", null, tickerItems.join(" &nbsp;•&nbsp; ") + " &nbsp;•&nbsp; ");
    const span2 = span.cloneNode(true);
    tk.append(span, span2);
  }

  // Rabbit meter (tracks max of scroll depth & kit progress) — declared early so it's safe to call from the checklist
  const rabbitFill = $("#rabbitMeter"), rabbitLabel = $("#rabbitLabel");
  const rabbitStages = [
    [0, "Getting started"], [20, "Basic equipment"], [40, "Dialing in"],
    [60, "Improving consistency"], [80, "Considering advanced equipment"], [95, "Advanced modifications"],
  ];
  let rabbitVal = 8;
  function setRabbit(v) {
    rabbitVal = Math.max(rabbitVal, v);
    rabbitFill.style.width = Math.max(8, rabbitVal) + "%";
    let label = rabbitStages[0][1];
    for (const [th, txt] of rabbitStages) if (rabbitVal >= th) label = txt;
    rabbitLabel.textContent = label;
  }

  // Checklist
  const checklistEl = $("#checklist");
  const KIT_KEY = "9bar_social_espresso_kit_v1";
  let kitState = JSON.parse(localStorage.getItem(KIT_KEY) || "{}");
  const kitMsgs = [
    "Select an item to begin.", "A basic setup is taking shape.", "You have the core equipment.",
    "More than half of the checklist is complete.", "The setup is becoming more complete.", "Only a few items remain.",
    "The main equipment is covered.", "Checklist complete.",
  ];
  function renderChecklist() {
    checklistEl.innerHTML = "";
    STARTER_KIT.forEach((item, i) => {
      const done = !!kitState[i];
      const node = el("div", "check-item" + (done ? " done" : ""));
      node.innerHTML = `<div class="check-box">${done ? "" : ""}</div>
        <div><div class="ci-title">${item.t}</div><div class="ci-desc">${item.d}</div></div>`;
      node.addEventListener("click", () => {
        kitState[i] = !kitState[i];
        localStorage.setItem(KIT_KEY, JSON.stringify(kitState));
        renderChecklist();
        updateKit(true);
      });
      checklistEl.appendChild(node);
    });
    updateKit(false);
  }
  function updateKit(celebrate) {
    const total = STARTER_KIT.length;
    const done = STARTER_KIT.filter((_, i) => kitState[i]).length;
    const pct = Math.round((done / total) * 100);
    $("#kitPct").textContent = pct + "%";
    $("#kitMsg").textContent = kitMsgs[Math.min(kitMsgs.length - 1, Math.floor((done / total) * (kitMsgs.length - 1)))];
    setRabbit(pct);
    if (celebrate && pct === 100) beanBurst();
  }
  $("#resetKit").addEventListener("click", () => {
    kitState = {}; localStorage.removeItem(KIT_KEY); renderChecklist();
  });
  renderChecklist();

  // Generic card builders
  function badgeHTML(b) { return b && b.length ? `<span class="tag ${b[0]}">${b[1]}</span>` : ""; }
  function pcHTML(pros, cons) {
    if ((!pros || !pros.length) && (!cons || !cons.length)) return "";
    const p = (pros || []).map(x => `<span class="p"> ${x}</span>`).join("");
    const c = (cons || []).map(x => `<span class="c"> ${x}</span>`).join("");
    return `<div class="pc">${p}${c}</div>`;
  }
  function buyHTML(link, label) { return link ? `<a class="buylink" href="${link}" target="_blank" rel="noopener">${label || "Buy / info"}</a>` : ""; }

  function renderGrinders(filter) {
    const grid = $("#grinderGrid"); grid.innerHTML = "";
    GRINDERS.forEach(g => {
      const show = filter === "all" || g.tags.includes(filter);
      const card = el("div", "card" + (show ? "" : " is-hidden"));
      card.dataset.tags = g.tags.join(" ");
      card.innerHTML = `<div class="card-top"><h3>${g.name}</h3>${badgeHTML(g.badge)}</div>
        <div class="meta"><b>${g.price}</b></div>
        <p class="desc">${g.desc}</p>${pcHTML(g.pros, g.cons)}${buyHTML(g.link, g.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderBeans(filter) {
    const grid = $("#beanGrid"); grid.innerHTML = "";
    BEANS.forEach(b => {
      const show = filter === "all" || b.tags.includes(filter);
      const card = el("div", "card" + (show ? "" : " is-hidden"));
      card.innerHTML = `<div class="card-top"><h3>${b.name}</h3>${badgeHTML(b.badge)}</div>
        <div class="meta"><b>${b.price}</b></div>
        <p class="desc">${b.desc}</p>${buyHTML(b.link, b.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderPF() {
    const grid = $("#pfGrid"); grid.innerHTML = "";
    PORTAFILTERS.forEach(p => {
      const card = el("div", "card");
      card.innerHTML = `<div class="card-top"><h3>${p.name}</h3>${badgeHTML(p.badge)}</div>
        <div class="meta"><b>${p.price}</b></div>
        <p class="desc">${p.desc}</p>${buyHTML(p.link, p.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderBaskets() {
    const ul = $("#basketList"); ul.innerHTML = "";
    BASKETS.forEach(b => ul.appendChild(el("li", null, b)));
  }
  function renderAcc() {
    const grid = $("#accGrid"); grid.innerHTML = "";
    ACCESSORIES.forEach(a => {
      const card = el("div", "card");
      card.innerHTML = `<div class="card-top"><h3>${a.name}</h3>${badgeHTML(a.rating)}</div>
        <div class="meta"><b>${a.price}</b></div><p class="desc">${a.desc}</p>${buyHTML(a.link, a.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderYT() {
    const grid = $("#ytGrid"); grid.innerHTML = "";
    YOUTUBERS.forEach(y => {
      const card = el("div", "card");
      card.innerHTML = `<h3>${y.name}</h3><div class="yt-by">▶ ${y.by}</div>
        <p class="desc">${y.desc}</p>${buyHTML(y.link, y.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderSellers() {
    const grid = $("#sellerGrid"); grid.innerHTML = "";
    SELLERS.forEach(s => {
      const card = el("div", "card");
      card.innerHTML = `<div class="seller-type">${s.type}</div><h3>${s.name}</h3>
        <p class="desc">${s.desc}</p>${buyHTML(s.link, s.linkLabel)}`;
      grid.appendChild(card);
    });
  }
  function renderMods() {
    const grid = $("#modGrid"); grid.innerHTML = "";
    MODS.forEach(m => {
      const card = el("div", "card");
      card.innerHTML = `<h3>${m.name}</h3><p class="desc">${m.desc}</p>${buyHTML(m.link, m.linkLabel)}`;
      grid.appendChild(card);
    });
  }

  // Accordions
  function renderAccordion(target, data) {
    const wrap = $(target); wrap.innerHTML = "";
    data.forEach(item => {
      const it = el("div", "acc-item");
      it.innerHTML = `<button class="acc-q">${item.q}<span class="pm">+</span></button>
        <div class="acc-a"><div class="acc-a-inner">${item.a}</div></div>`;
      const btn = it.querySelector(".acc-q"), ans = it.querySelector(".acc-a");
      btn.addEventListener("click", () => {
        const open = it.classList.toggle("open");
        ans.style.maxHeight = open ? ans.scrollHeight + "px" : 0;
      });
      wrap.appendChild(it);
    });
  }

  // Diagnoser
  function renderDiagnoser() {
    const chips = $("#symptomChips"), out = $("#diagnosis");
    SYMPTOMS.forEach((s, i) => {
      const b = el("button", "symptom", s.label);
      b.addEventListener("click", () => {
        $$(".symptom", chips).forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        out.innerHTML = `<div class="diag-title">${s.label}</div>
          <div class="diag-cause">Likely cause: ${s.cause}</div>
          <ul class="diag-fixes">${s.fixes.map(f => `<li>${f}</li>`).join("")}</ul>`;
        setRabbit(35);
      });
      chips.appendChild(b);
    });
  }

  renderGrinders("all"); renderBeans("all"); renderPF(); renderBaskets(); renderAcc();
  renderYT(); renderSellers(); renderMods();
  renderAccordion("#troubleAccordion", TROUBLE); renderAccordion("#faqAccordion", FAQ);
  renderDiagnoser();

  // Filter chips
  function wireFilters(wrap, renderFn) {
    $$(".chip", $(wrap)).forEach(chip => {
      chip.addEventListener("click", () => {
        $$(".chip", $(wrap)).forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        renderFn(chip.dataset.filter);
      });
    });
  }
  wireFilters("#grinderFilters", renderGrinders);
  wireFilters("#beanFilters", renderBeans);

  /* ---------- INTERACTIONS ---------- */

  // Mobile nav
  const toggle = $("#navToggle"), navLinks = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("open"); toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }));

  // Scroll progress + rabbit meter on scroll
  const prog = $("#scrollProgress");
  const runner = $("#rabbitRunner"), runnerPct = $("#rabbitRunnerPct");
  function onScroll() {
    const h = document.documentElement;
    const scrolled = Math.min(1, Math.max(0, h.scrollTop / (h.scrollHeight - h.clientHeight || 1)));
    const pct = Math.round(scrolled * 100);
    prog.style.width = pct + "%";
    if (runner) {
      runner.style.left = Math.min(94, Math.max(4, pct)) + "%";
      runner.classList.toggle("flip", pct > 55);
      runnerPct.textContent = pct >= 99 ? "Complete" : pct + "% complete";
    }
    setRabbit(Math.round(scrolled * 92));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Count-up stats
  $$(".hero-stats b[data-count]").forEach(b => {
    const target = b.textContent; const num = parseInt(b.dataset.count, 10);
    if (isNaN(num)) return;
    let cur = 0; const suffix = target.replace(/[0-9]/g, "");
    const step = Math.max(1, Math.round(num / 28));
    const iv = setInterval(() => {
      cur += step; if (cur >= num) { cur = num; clearInterval(iv); }
      b.textContent = cur + suffix;
    }, 28);
  });

  // To-top
  $("#toTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Toast
  let toastTimer;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 1900);
  }

  // Floating beans
  const beansBg = $(".beans-bg");
  if (beansBg && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const symbols = ["", "", ""];
    for (let i = 0; i < 14; i++) {
      const b = el("span", "bean", symbols[i % symbols.length]);
      b.style.left = Math.random() * 100 + "vw";
      b.style.animationDuration = (16 + Math.random() * 20) + "s";
      b.style.animationDelay = (-Math.random() * 30) + "s";
      b.style.fontSize = (16 + Math.random() * 22) + "px";
      beansBg.appendChild(b);
    }
  }

  // Bean burst on 100% kit
  function beanBurst() {
    toast("Checklist complete.");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < 26; i++) {
      const b = el("div", null, Math.random() > .5 ? "" : "");
      b.style.cssText = `position:fixed;left:50%;top:40%;font-size:${18 + Math.random() * 18}px;z-index:300;pointer-events:none;transition:transform 1.1s ease-out,opacity 1.1s`;
      document.body.appendChild(b);
      requestAnimationFrame(() => {
        const a = Math.random() * Math.PI * 2, d = 120 + Math.random() * 260;
        b.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) rotate(${Math.random() * 720}deg)`;
        b.style.opacity = "0";
      });
      setTimeout(() => b.remove(), 1200);
    }
  }

  // Active nav link on scroll
  const sections = $$("main section[id]");
  const navMap = {};
  $$("#navLinks a").forEach(a => navMap[a.getAttribute("href").slice(1)] = a);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      const a = navMap[en.target.id];
      if (a && en.isIntersecting) {
        $$("#navLinks a").forEach(x => x.style.color = "");
        a.style.color = "var(--orange)";
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => obs.observe(s));
})();
