

/* ============================================================
   PORTFOLIO DATA — edit this section to update content
   ============================================================ */

const GAME_TITLE = "Design Quest";
const GAME_SUBTITLE = "(Dan Visual)";
const GAME_DESCRIPTION =
  "Walk through Daniel Tieu's career as a town you can explore. Step into the Arcade for real UX case studies, climb the Tower to see his skills, chat with townsfolk for the story behind the work, and find his contact info at the Post Office.";
const GAME_FEATURES = [
  "Explore a full town — Arcade, Tower, Cottage, Library, Post Office, Gallery",
  "Talk to NPCs for the story behind the portfolio",
  "Tap the wandering critters just for fun",
  "Choose your character before you set out",
];

const PROFILE = {
  name: "Daniel Tieu",
  title: "Product Designer",
  email: "danvisual.uxd@gmail.com",
  phone: "510.221.6211",
  linkedin: "https://www.linkedin.com/in/danieltieu/",
  dribbble: "https://dribbble.com/dan_visual",
  site: "https://www.danielvisual.com",
};

const ABOUT = {
  bio: [
    "12+ years across consumer health, wellness, and AI-first products.",
    "I lead high-stakes flows where conversion, trust, and compliance compound — turning sensitive user moments into clear, testable interactions.",
    "My insatiable curiosity drives my design thinking: I'm never content with the status quo, always questioning, researching, and uncovering insights that inform user-centered decisions.",
    "I bring a strong sense of integrity to the workplace — my work ethic is anchored in honesty, trust, and transparent communication.",
  ],
  highlight:
    "Previously @ Doctronic (AI health layer), GoodRx, Estée Lauder, Sephora.",
  education: [
    "UC Davis — B.A. Media Technology & Chinese (2009)",
    "General Assembly — Product Design (2021)",
    "Udacity — UX Design (2020)",
  ],
  recognition: [
    "Sephora Values In Action Award (2019)",
    "Adobe Creative Jam — Top 10 Finalist (2021)",
    "SacHackathon — 1st Place (2021)",
  ],
};

const SKILLS = [
  { name: "Product Design", level: 5 },
  { name: "Conversion & Growth Design", level: 5 },
  { name: "Interaction & Motion Design", level: 5 },
  { name: "Design Systems", level: 4 },
  { name: "UX Research & Diagnosis", level: 4 },
  { name: "Prototyping (Figma)", level: 5 },
  { name: "Cross-functional Partnership", level: 5 },
  { name: "Accessibility", level: 4 },
];

// Real resume — reverse chronological
const EXPERIENCE = [
  {
    role: "Lead Product Designer",
    org: "Doctronic",
    sub: "AI-first telehealth",
    period: "Feb 2026 – June 2026",
    bullets: [
      "Drove the Utah prescription refill flow toward a 6% conversion target — batched lander, eligibility, and copy optimizations across mobile and desktop.",
      "Shipped the EHR medical records and trust-and-privacy surfaces (memory controls, delete-consult, incognito) that make AI-mediated care legible and controllable.",
      "Partnered with founding engineering on the React rebuild — navigation, accessibility, and tap-target work without a standing design system.",
    ],
  },
  {
    role: "Senior Product Designer",
    org: "GoodRx",
    sub: "Telehealth",
    period: "Apr 2025 – Jan 2026",
    bullets: [
      "Led design for GoodRx's first subscription product (telehealth ED treatment) — onboarding, treatment preference, and post-purchase from MVP through optimization.",
      "Diagnosed a 36% onboarding drop-off and shipped three interventions (emergency-screening copy, warm-up question removal, personalized dosage paths) that lifted conversion across the funnel.",
    ],
  },
  {
    role: "Senior Product Designer",
    org: "Estée Lauder",
    sub: "Consumer Experience",
    period: "Oct 2023 – Apr 2025",
    bullets: [
      "Delivered an enterprise interaction library — tokens, motion guidelines, responsive components — for 7+ luxury brands including MAC, La Mer, and Origins.",
      "Redesigned global search and filtering with mobile-first filter logic; improved findability and search speed across the portfolio.",
    ],
  },
  {
    role: "Senior UI/UX Designer",
    org: "Amyris",
    sub: "B2B2C Consumer Experience",
    period: "Oct 2021 – Oct 2023",
    bullets: [
      "Shipped a 0-to-1 e-commerce brand for Stripes Beauty — a science-backed menopause wellness brand co-founded by Naomi Watts. Conversion +25%, cart abandonment −13% YoY.",
      "Delivered enterprise product features across Amyris's brand portfolio: Biossance, Pipette, JVN Hair, Rose Inc, and Costa Brazil.",
    ],
  },
  {
    role: "Interaction Designer",
    org: "Sephora",
    sub: "Learning & Development",
    period: "Nov 2017 – Mar 2021",
    bullets: [
      "Led a pod of 4 designers/producers to build virtual e-learning tools for Sephora's Education & Learning org — videos, interactive courses, EDU portal, and onboarding for 30K+ in-store hires.",
      "Established the foundational design system for the org — responsive breakpoints, type scales, iconography — across iOS, Android, and web.",
    ],
  },
  {
    role: "Visual / Lead Designer",
    org: "Various Clients",
    sub: "Old Navy, Amazon, Sephora, Quicken, Live Nation",
    period: "2014 – 2021",
    bullets: [
      "Delivered marketing campaigns, mobile features, and social content across workforce, beauty & fashion, and finance sectors.",
      "Notably: Amazon Jobs candidate portal mobile funnel supporting 1.6M annual hires.",
    ],
  },
];

// Arcade = UX case studies ONLY, with Problem / Approach / Outcome detail
const CASE_STUDIES = [
  {
    id: "doctronic",
    title: "Doctronic",
    role: "Lead Product Designer",
    period: "Feb 2026 – June 2026",
    blurb: "AI-mediated prescription refill flow and trust surfaces for an AI-first telehealth product.",
    problem:
      "Doctronic needed to take an AI-mediated prescription refill flow live in Utah, but conversion was below target and the surrounding trust/privacy experience (memory controls, consult deletion, incognito mode) didn't yet exist — a risk for an AI-authorized clinical flow with no prior playbook.",
    approach:
      "Batched lander, eligibility, and copy optimizations across mobile and desktop while building the EHR medical records and trust-and-privacy surfaces from scratch. Partnered directly with founding engineering on a React rebuild — navigation, accessibility, and tap targets — without a standing design system to lean on.",
    outcome:
      "Drove the refill flow toward a 6% conversion target and shipped the first AI-authorized prescription refill flow in the US — covered by the Washington Post, Politico, and the Salt Lake Tribune.",
    tags: ["AI", "Health", "0→1", "Compliance"],
    link: null,
    featured: true,
  },
  {
    id: "goodrx",
    title: "GoodRx",
    role: "Senior Product Designer",
    period: "Apr 2025 – Jan 2026",
    blurb: "GoodRx's first subscription product — telehealth ED treatment, MVP through optimization.",
    problem:
      "GoodRx was launching its first subscription product, a telehealth ED treatment line, and onboarding had a 36% drop-off rate that was capping growth before the funnel could even reach paid conversion.",
    approach:
      "Led design across onboarding, treatment preference, and post-purchase from MVP through optimization, partnering closely with content, legal, and clinical teams to navigate medical compliance while diagnosing exactly where users were abandoning the flow.",
    outcome:
      "Shipped three targeted interventions — emergency-screening copy, removing a warm-up question, and personalized dosage paths — that lifted conversion across the entire funnel.",
    tags: ["Health", "Subscription", "Conversion"],
    link: "https://www.danielvisual.com/goodrx/",
  },
  {
    id: "estee-lauder",
    title: "Estée Lauder",
    role: "Senior Product Designer",
    period: "Oct 2023 – Apr 2025",
    blurb: "Enterprise interaction library and global search redesign across 7+ luxury brands.",
    problem:
      "Seven-plus luxury brands — including MAC, La Mer, and Origins — had inconsistent interaction patterns and a search/filter experience that wasn't built mobile-first, hurting findability across the portfolio.",
    approach:
      "Delivered an enterprise interaction library covering design tokens, motion guidelines, and responsive components, then redesigned global search and filtering around mobile-first filter logic.",
    outcome:
      "Improved findability and search speed across the entire brand portfolio while giving every brand team a shared, scalable interaction foundation.",
    tags: ["Design Systems", "Search", "Enterprise"],
    link: "https://www.danielvisual.com/estee-lauder-shopex/",
  },
  {
    id: "amyris",
    title: "Stripes Beauty (Amyris)",
    role: "Senior UI/UX Designer",
    period: "Oct 2021 – Oct 2023",
    blurb: "0-to-1 e-commerce brand for a menopause wellness line co-founded by Naomi Watts.",
    problem:
      "Stripes Beauty, a science-backed menopause wellness brand co-founded by Naomi Watts, needed a full e-commerce experience built from zero, alongside ongoing feature work across Amyris's wider brand portfolio.",
    approach:
      "Shipped the 0-to-1 e-commerce brand experience while optimizing the customer journey, and delivered enterprise product features — shopping cart, PDP/PLP, navigation, livestream platform — across Biossance, Pipette, JVN Hair, Rose Inc, and Costa Brazil.",
    outcome:
      "Conversion improved +25% with cart abandonment down −13% year-over-year for Stripes Beauty.",
    tags: ["Beauty", "0→1", "E-commerce"],
    link: "https://www.danielvisual.com/amyris/",
  },
  {
    id: "sephora-education",
    title: "Sephora — Learning & Development",
    role: "Interaction Designer",
    period: "Nov 2017 – Mar 2021",
    blurb: "E-learning platform and foundational design system for 30K+ in-store hires.",
    problem:
      "Sephora's Education & Learning org needed virtual e-learning tools to onboard over 30,000 in-store hires, but had no shared design foundation across iOS, Android, and web to build on.",
    approach:
      "Led a pod of 4 designers and producers to build videos, interactive courses, and an EDU portal, while establishing the org's foundational design system — responsive breakpoints, type scales, and iconography.",
    outcome:
      "Delivered a scalable onboarding system that supported 30,000+ in-store hires and earned a Sephora Values In Action Award in 2019.",
    tags: ["Education", "Design Systems", "Retail"],
    link: "https://www.danielvisual.com/sephora-education/",
  },
  {
    id: "quicken",
    title: "Quicken Finance Calculator",
    role: "Visual / Lead Designer",
    period: "2014 – 2021",
    blurb: "Finance calculator product design for Quicken.",
    problem: "Quicken needed clearer calculator tooling to help users model personal finance decisions.",
    approach: "Designed the calculator product flow and supporting visual system as part of a broader run of client engagements during this period.",
    outcome: "Shipped a finance calculator experience used within Quicken's product suite.",
    tags: ["Fintech", "Tools"],
    link: "https://www.danielvisual.com/quicken/",
  },
  {
    id: "homebase",
    title: "HomeBase App",
    role: "Lead Designer & Researcher",
    period: "2021",
    blurb: "Hackathon project fostering community connection — 1st place, SacHackathon 2021.",
    problem:
      "A 4-person hackathon team (down to 2 after early dropouts) wanted to build an app fostering genuine community relationships in just 36 hours.",
    approach:
      "Acted as main designer and researcher — ran a survey to understand community connection behaviors, then used agile sprints to deliver a full MVP and walkthrough presentation within the hackathon window.",
    outcome:
      "Won 1st place for Most Entertaining Hack at SacHackathon 2021.",
    tags: ["Hackathon", "Community", "0→1"],
    link: "https://www.danielvisual.com/homebase-app/",
  },
];

// Gallery building — visual/play projects, swipeable image-style cards
const VISUAL_PROJECTS = [
  {
    id: "sephora-digital",
    title: "Sephora Digital Marketing",
    blurb: "Digital marketing visual design for Sephora campaigns.",
    link: "https://www.danielvisual.com/sephora-digital/",
  },
  {
    id: "old-navy",
    title: "Old Navy",
    blurb: "Campaign and digital marketing visual design for Old Navy.",
    link: "https://www.danielvisual.com/old-navy-digital/",
  },
  {
    id: "amazon-wfs",
    title: "Amazon WFS",
    blurb: "Visual design for Amazon Warehousing & Fulfillment Services — part of the Amazon Jobs candidate portal work supporting 1.6M annual hires.",
    link: "https://www.danielvisual.com/amazon-wfs/",
  },
  {
    id: "live-nation",
    title: "Live Nation",
    blurb: "Visual design for Live Nation digital experiences.",
    link: "https://www.danielvisual.com/live-nation/",
  },
  {
    id: "vax-smart",
    title: "Vax Smart",
    blurb: "Smart home product visual and interaction design.",
    link: "https://www.danielvisual.com/vaxsmart/",
  },
];

// Selectable characters — "hiring panel" framing
const CHARACTERS = [
  {
    id: "pixel",
    name: "Pixel",
    role: "The Systems Architect",
    sprite: "systems",
    bio: "Methodical and detail-obsessed. Pixel speaks fluent design tokens and never met a breakpoint she didn't like. Brought in whenever a brand portfolio needs one shared language.",
    color: "#3098e8",
  },
  {
    id: "nova",
    name: "Nova",
    role: "The Growth Strategist",
    sprite: "growth",
    bio: "Data-driven and relentless about funnels. Nova diagnoses drop-off before anyone else notices it's happening, then ships the fix before lunch.",
    color: "#f04830",
  },
  {
    id: "sketch",
    name: "Sketch",
    role: "The Motion Maverick",
    sprite: "motion",
    bio: "Animation-obsessed and a little theatrical about it. Sketch believes every interaction deserves a little personality — and usually delivers it in one take.",
    color: "#a858e0",
  },
];

/* ============================================================
   WORLD / MAP CONFIG — bigger town, varied landscape
   ============================================================ */

const TILE = 32;
const COLS = 36;
const ROWS = 24;

// Distinct building footprints + visual "kind" for unique rendering
const BUILDINGS = [
  { id: "arcade", label: "Arcade", sub: "Projects", kind: "arcade", x: 4, y: 4, w: 5, h: 4, color: "#f0d8a8", roof: "#e85838", trim: "#ffffff" },
  { id: "tower", label: "Tower", sub: "Skills", kind: "tower", x: 16, y: 2, w: 4, h: 7, color: "#e8e0d0", roof: "#4878c0", trim: "#2858a0" },
  { id: "house", label: "Cottage", sub: "About", kind: "house", x: 27, y: 4, w: 5, h: 4, color: "#f0d8a8", roof: "#48a050", trim: "#2c7838" },
  { id: "library", label: "Library", sub: "Resume", kind: "library", x: 5, y: 16, w: 6, h: 5, color: "#e8e0d0", roof: "#a85838", trim: "#ffffff" },
  { id: "post", label: "Post Office", sub: "Contact", kind: "post", x: 26, y: 16, w: 5, h: 4, color: "#f0d8a8", roof: "#e8b830", trim: "#c88800" },
  { id: "gallery", label: "Gallery", sub: "Visual Play", kind: "gallery", x: 16, y: 17, w: 5, h: 4, color: "#f8c8d8", roof: "#d85890", trim: "#ffffff" },
];

function doorTile(b) {
  return { x: b.x + Math.floor(b.w / 2), y: b.y + b.h };
}

const START_POS = { x: 18, y: 11 };

// NPCs — placed near About (house) and Contact (post)
const NPCS = [
  {
    id: "elder",
    name: "The Village Elder",
    nearBuildingId: "house",
    x: 26,
    y: 9,
    palette: { skin: "#f0c89c", robe: "#c89030", trim: "#ffe858" },
    intro: "Ah, a traveler. You wish to know more about the designer who built this town?",
    branches: [
      { label: "Tell me about his approach", response: "approach" },
      { label: "What is he known for?", response: "highlight" },
      { label: "Where did he train?", response: "education" },
    ],
  },
  {
    id: "courier",
    name: "The Courier",
    nearBuildingId: "post",
    x: 25,
    y: 13,
    palette: { skin: "#f0c89c", robe: "#3098e8", trim: "#bfe0ff" },
    intro: "Need to send word to Daniel? I know all the routes.",
    branches: [
      { label: "Send by LinkedIn", response: "linkedin" },
      { label: "Send by email", response: "email" },
      { label: "Send by Dribbble", response: "dribbble" },
    ],
  },
];

// Critters — original wandering flavor creatures, light tap interaction only
const CRITTER_SPAWN = [
  { id: "c1", x: 12, y: 12, kind: "glowpup" },
  { id: "c2", x: 21, y: 6, kind: "inkdrop" },
  { id: "c3", x: 9, y: 9, kind: "sproutling" },
  { id: "c4", x: 24, y: 20, kind: "embercub" },
];

const CRITTER_QUIPS = [
  "Glowpup nuzzles your leg curiously!",
  "Inkdrop blinks its one big eye at you.",
  "Sproutling rustles its little leaf-bud happily.",
  "Embercub's tail flickers with excitement!",
  "*the critter bounces away, unimpressed by your résumé*",
];

// Decorative landscape — trees, mountains, rocks, water
const TREES = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 13, y: 0 }, { x: 22, y: 0 }, { x: 34, y: 0 }, { x: 35, y: 0 },
  { x: 0, y: 1 }, { x: 35, y: 1 }, { x: 0, y: 7 }, { x: 35, y: 7 }, { x: 0, y: 14 }, { x: 35, y: 14 },
  { x: 0, y: 21 }, { x: 1, y: 23 }, { x: 35, y: 21 }, { x: 34, y: 23 },
  { x: 13, y: 9 }, { x: 14, y: 9 }, { x: 21, y: 9 }, { x: 22, y: 9 },
  { x: 13, y: 14 }, { x: 22, y: 14 }, { x: 3, y: 11 }, { x: 32, y: 11 },
  { x: 7, y: 21 }, { x: 8, y: 22 }, { x: 28, y: 21 }, { x: 19, y: 22 },
  { x: 4, y: 2 }, { x: 31, y: 2 }, { x: 17, y: 12 }, { x: 18, y: 13 },
];

// Mountains along the top edge (decorative, also blocking)
const MOUNTAINS = [
  { x: 5, y: 0, w: 4 }, { x: 15, y: 0, w: 3 }, { x: 24, y: 0, w: 5 },
];

const ROCKS = [
  { x: 11, y: 19 }, { x: 30, y: 8 }, { x: 6, y: 13 }, { x: 29, y: 13 },
];

/* ============================================================
   PIXEL ART RENDERING — Gen3 handheld RPG style (original art,
   vibrant saturated palette, tile-roof buildings, trainer sprites)
   ============================================================ */



function Ground() {
  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${COLS * TILE} ${ROWS * TILE}`} style={{ position: "absolute", inset: 0 }}>
      <defs>
        <pattern id="grass" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <rect width={TILE} height={TILE} fill="#5fa050" />
          <rect width={TILE} height={TILE} fill="#6bb05c" opacity="0.45" />
          <circle cx={8} cy={8} r="2.2" fill="#4d8a40" />
          <circle cx={22} cy={18} r="2.2" fill="#4d8a40" />
          <circle cx={14} cy={26} r="1.6" fill="#7fc06f" />
          <circle cx={26} cy={6} r="1.4" fill="#7fc06f" />
        </pattern>
        <pattern id="path" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <rect width={TILE} height={TILE} fill="#ecc888" />
          <rect width={TILE} height={TILE} fill="#e8c078" opacity="0.5" />
          <circle cx={10} cy={12} r="2" fill="#d8ac5c" />
          <circle cx={22} cy={22} r="1.6" fill="#d8ac5c" />
          <circle cx={5} cy={24} r="1.2" fill="#d8ac5c" />
        </pattern>
        <pattern id="water" width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <rect width={TILE} height={TILE} fill="#4fa0d8" />
          <path d="M0 16 Q8 11 16 16 T32 16" stroke="#7ec4ec" strokeWidth="2.4" fill="none" opacity="0.8" />
          <path d="M0 24 Q8 20 16 24 T32 24" stroke="#3a82b8" strokeWidth="2" fill="none" opacity="0.6" />
        </pattern>
      </defs>
      <rect width={COLS * TILE} height={ROWS * TILE} fill="url(#grass)" />
      <rect x={0} y={11 * TILE} width={COLS * TILE} height={2 * TILE} fill="url(#path)" />
      <rect x={17 * TILE} y={0} width={2 * TILE} height={ROWS * TILE} fill="url(#path)" />
      <rect x={6 * TILE} y={11 * TILE} width={2 * TILE} height={5 * TILE} fill="url(#path)" />
      <rect x={27 * TILE} y={11 * TILE} width={2 * TILE} height={5 * TILE} fill="url(#path)" />
      {/* path edge highlight for a more finished look */}
      <rect x={0} y={11 * TILE} width={COLS * TILE} height={3} fill="#fff3d6" opacity="0.6" />
      <rect x={0} y={13 * TILE - 3} width={COLS * TILE} height={3} fill="#c89858" opacity="0.5" />
      <ellipse cx={30 * TILE} cy={5 * TILE} rx={2.4 * TILE} ry={1.6 * TILE} fill="url(#water)" />
      <ellipse cx={30 * TILE} cy={5 * TILE} rx={2.4 * TILE} ry={1.6 * TILE} fill="none" stroke="#2868a0" strokeWidth="3" />
      <ellipse cx={29.3 * TILE} cy={4.5 * TILE} rx={0.6 * TILE} ry={0.3 * TILE} fill="#bfe6ff" opacity="0.5" />
    </svg>
  );
}

function Mountain({ x, y, w }) {
  const px = x * TILE;
  const py = y * TILE;
  const width = w * TILE;
  const height = TILE * 2.6;
  return (
    <svg style={{ position: "absolute", left: px, top: py, pointerEvents: "none" }} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polygon points={`0,${height} ${width * 0.35},${height * 0.22} ${width * 0.6},${height * 0.52} ${width},${height}`} fill="#7d8a5c" />
      <polygon points={`${width * 0.35},${height * 0.22} ${width * 0.48},${height * 0.42} ${width * 0.22},${height * 0.52}`} fill="#a8b888" opacity="0.85" />
      <polygon points={`0,${height} ${width * 0.35},${height * 0.22} ${width * 0.5},${height * 0.47} ${width * 0.15},${height}`} fill="#5f6c44" />
      <polygon points={`${width * 0.3},${height * 0.26} ${width * 0.38},${height * 0.34} ${width * 0.28},${height * 0.34}`} fill="#ffffff" opacity="0.9" />
    </svg>
  );
}

function Rock({ x, y }) {
  const px = x * TILE;
  const py = y * TILE;
  return (
    <svg style={{ position: "absolute", left: px, top: py, pointerEvents: "none" }} width={TILE} height={TILE} viewBox="0 0 32 32">
      <ellipse cx="16" cy="26" rx="11" ry="3" fill="rgba(0,0,0,0.18)" />
      <path d="M6 24 Q4 14 14 12 Q22 8 27 16 Q29 24 22 25 Q12 28 6 24Z" fill="#9c9684" />
      <path d="M9 16 Q14 12 19 14" stroke="#c0bcaa" strokeWidth="2.4" fill="none" opacity="0.8" />
      <path d="M10 22 Q16 24 22 21" stroke="#7a7666" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

function Tree({ x, y }) {
  const px = x * TILE;
  const py = y * TILE;
  return (
    <svg
      style={{ position: "absolute", left: px, top: py, width: TILE, height: TILE * 1.4, pointerEvents: "none" }}
      viewBox="0 0 32 44"
    >
      <ellipse cx="16" cy="14" rx="13" ry="12" fill="#3a8048" />
      <ellipse cx="16" cy="11" rx="10" ry="9" fill="#4ea05c" />
      <ellipse cx="12" cy="8" rx="4.5" ry="4" fill="#7fc46f" opacity="0.85" />
      <rect x="13" y="22" width="6" height="14" fill="#8a5c34" />
      <rect x="13" y="22" width="3" height="14" fill="#a06f3e" />
    </svg>
  );
}

// Distinct, vibrant Gen3-style building art per "kind"
function BuildingArt({ b, w, h, roofH }) {
  const trim = b.trim || "#ffffff";
  const common = <ellipse cx={w / 2} cy={h - 2} rx={w / 2.1} ry={6} fill="rgba(0,0,0,0.22)" />;

  // shared shingle-roof texture lines
  function roofLines(yTop, yBot, xStart, xEnd) {
    const lines = [];
    const step = 6;
    for (let yy = yTop; yy < yBot; yy += step) {
      lines.push(<line key={yy} x1={xStart} y1={yy} x2={xEnd} y2={yy} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />);
    }
    return lines;
  }

  if (b.kind === "tower") {
    return (
      <>
        {common}
        <rect x={w * 0.2} y={roofH} width={w * 0.6} height={h - roofH - 2} fill={b.color} />
        <rect x={w * 0.2} y={roofH} width={w * 0.6} height={6} fill="rgba(255,255,255,0.35)" />
        <rect x={w * 0.2} y={h - 10} width={w * 0.6} height={8} fill="rgba(0,0,0,0.15)" />
        <polygon points={`${w * 0.16},${roofH} ${w / 2},2 ${w * 0.84},${roofH}`} fill={b.roof} />
        {roofLines(roofH * 0.35, roofH, w * 0.2, w * 0.8)}
        <circle cx={w / 2} cy={2} r="3.5" fill="#ffe858" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={w / 2 - 7} y={roofH + 12 + i * 22} width={14} height={12} fill={trim} stroke={b.trim} strokeWidth="1.5" />
            <rect x={w / 2 - 6} y={roofH + 13 + i * 22} width={5} height={10} fill="#bfe0ff" />
            <rect x={w / 2 + 1} y={roofH + 13 + i * 22} width={5} height={10} fill="#bfe0ff" />
          </g>
        ))}
        <rect x={w / 2 - 8} y={h - 22} width={16} height={20} rx={2} fill="#5a3c20" />
        <rect x={w / 2 - 8} y={h - 22} width={16} height={5} fill="#7a5430" />
      </>
    );
  }
  if (b.kind === "arcade") {
    return (
      <>
        {common}
        <rect x={2} y={roofH} width={w - 4} height={h - roofH - 2} fill={b.color} />
        <rect x={2} y={roofH} width={w - 4} height={8} fill="rgba(255,255,255,0.3)" />
        <rect x={2} y={h - 10} width={w - 4} height={8} fill="rgba(0,0,0,0.15)" />
        <rect x={0} y={roofH - 8} width={w} height={12} fill={b.roof} />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x={(i * w) / 8} y={roofH - 8} width={w / 16} height={12} fill={i % 2 ? "#ffffff" : b.roof} opacity={i % 2 ? 0.95 : 1} />
        ))}
        <path d={`M${w * 0.3},${h - 2} Q${w * 0.3},${h - 28} ${w / 2},${h - 28} Q${w * 0.7},${h - 28} ${w * 0.7},${h - 2}Z`} fill="#3a2c1a" />
        <path d={`M${w * 0.34},${h - 2} Q${w * 0.34},${h - 24} ${w / 2},${h - 24} Q${w * 0.66},${h - 24} ${w * 0.66},${h - 2}Z`} fill="#ffe858" opacity="0.85" />
        <circle cx={14} cy={roofH + 16} r="6" fill="#ffffff" stroke="#e85838" strokeWidth="2" />
        <circle cx={w - 14} cy={roofH + 16} r="6" fill="#ffffff" stroke="#e85838" strokeWidth="2" />
      </>
    );
  }
  if (b.kind === "library") {
    return (
      <>
        {common}
        <rect x={2} y={roofH} width={w - 4} height={h - roofH - 2} fill={b.color} />
        <rect x={2} y={roofH} width={w - 4} height={6} fill="rgba(255,255,255,0.3)" />
        <rect x={2} y={h - 10} width={w - 4} height={8} fill="rgba(0,0,0,0.12)" />
        <rect x={0} y={roofH - 10} width={w} height={12} fill={b.roof} />
        {roofLines(roofH - 9, roofH + 1, 0, w)}
        {[0.1, 0.3, 0.7, 0.9].map((f, i) => (
          <rect key={i} x={w * f - 3.5} y={roofH} width={7} height={h - roofH - 2} fill="rgba(255,255,255,0.4)" />
        ))}
        <path d={`M${w * 0.34},${h - 4} L${w * 0.34},${roofH + 18} Q${w / 2},${roofH + 4} ${w * 0.66},${roofH + 18} L${w * 0.66},${h - 4}Z`} fill="#bfe0ff" stroke="#ffffff" strokeWidth="1.5" />
      </>
    );
  }
  if (b.kind === "post") {
    return (
      <>
        {common}
        <rect x={2} y={roofH} width={w - 4} height={h - roofH - 2} fill={b.color} />
        <rect x={2} y={roofH} width={w - 4} height={6} fill="rgba(255,255,255,0.3)" />
        <rect x={2} y={h - 10} width={w - 4} height={8} fill="rgba(0,0,0,0.12)" />
        <polygon points={`0,${roofH} ${w / 2},4 ${w},${roofH}`} fill={b.roof} />
        {roofLines(roofH * 0.4, roofH, 0, w)}
        <rect x={w - 9} y={-12} width={2.5} height={roofH + 12} fill="#5a4828" />
        <polygon points={`${w - 6.5},-12 ${w + 12},-6 ${w - 6.5},0`} fill="#f0c030" />
        <circle cx={w / 2} cy={roofH + 16} r="9" fill="#ffffff" />
        <path d="M-5,-5 L5,-5 L0,5Z" transform={`translate(${w / 2 - 5},${roofH + 11})`} fill={b.roof} />
        <rect x={w / 2 - 8} y={h - 20} width={16} height={18} rx={2} fill="#5a4828" />
      </>
    );
  }
  if (b.kind === "gallery") {
    return (
      <>
        {common}
        <rect x={2} y={roofH} width={w - 4} height={h - roofH - 2} fill={b.color} />
        <rect x={2} y={roofH} width={w - 4} height={6} fill="rgba(255,255,255,0.35)" />
        <rect x={2} y={h - 10} width={w - 4} height={8} fill="rgba(0,0,0,0.12)" />
        <polygon points={`0,${roofH} ${w / 2},2 ${w},${roofH}`} fill={b.roof} />
        {Array.from({ length: 7 }).map((_, i) => (
          <polygon key={i} points={`${(i * w) / 6 - 5},${roofH} ${(i * w) / 6 + 5},${roofH} ${(i * w) / 6},${roofH + 12}`} fill={i % 2 ? "#ffe858" : "#bfe0ff"} />
        ))}
        <circle cx={w / 2} cy={roofH + 22} r="13" fill="#3a2c1a" />
        <circle cx={w / 2} cy={roofH + 22} r="10" fill="#ffe858" />
        <circle cx={w / 2 - 3} cy={roofH + 19} r="2.5" fill="#ffffff" opacity="0.8" />
        <rect x={w / 2 - 8} y={h - 20} width={16} height={18} rx={2} fill="#5a3c20" />
      </>
    );
  }
  // house / cottage
  return (
    <>
      {common}
      <rect x={2} y={roofH} width={w - 4} height={h - roofH - 2} fill={b.color} />
      <rect x={2} y={roofH} width={w - 4} height={6} fill="rgba(255,255,255,0.3)" />
      <rect x={2} y={h - 10} width={w - 4} height={8} fill="rgba(0,0,0,0.15)" />
      <polygon points={`0,${roofH} ${w / 2},2 ${w},${roofH}`} fill={b.roof} />
      {roofLines(roofH * 0.3, roofH, 0, w)}
      <rect x={w * 0.72} y={-10} width={9} height={roofH + 10} fill="#9c7a52" />
      <rect x={w * 0.72} y={-10} width={9} height={5} fill="#b8946a" />
      <rect x={w / 2 - 9} y={h - 22} width={18} height={20} rx={2} fill="#5a4828" />
      <rect x={w / 2 - 9} y={h - 22} width={18} height={4} fill="#7a6038" />
      <rect x={10} y={roofH + 10} width={11} height={11} fill="#bfe0ff" stroke="#ffffff" strokeWidth="1.5" />
      <rect x={w - 21} y={roofH + 10} width={11} height={11} fill="#bfe0ff" stroke="#ffffff" strokeWidth="1.5" />
      {/* flower box */}
      <rect x={9} y={roofH + 22} width={13} height={4} fill="#9c7a52" />
      <circle cx={11} cy={roofH + 21} r="2" fill="#f06090" />
      <circle cx={15} cy={roofH + 21} r="2" fill="#ffe858" />
      <circle cx={19} cy={roofH + 21} r="2" fill="#f06090" />
    </>
  );
}

function Building({ b, active }) {
  const px = b.x * TILE;
  const py = b.y * TILE;
  const w = b.w * TILE;
  const h = b.h * TILE;
  const roofH = h * (b.kind === "tower" ? 0.3 : 0.4);

  return (
    <div
      style={{
        position: "absolute",
        left: px,
        top: py,
        width: w,
        height: h,
        filter: active ? "drop-shadow(0 0 12px rgba(255,232,88,0.95))" : "none",
        transition: "filter 0.15s ease",
      }}
    >
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
        <BuildingArt b={b} w={w} h={h} roofH={roofH} />
      </svg>
      <div
        style={{
          position: "absolute",
          top: -28,
          left: 0,
          width: "100%",
          textAlign: "center",
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 9,
          color: "#fff8e6",
          textShadow: "2px 2px 0 #1a1208, -1px -1px 0 #1a1208",
          letterSpacing: 0.5,
        }}
      >
        {b.label}
        <div style={{ fontSize: 7, color: "#ffe858", marginTop: 2, textShadow: "1.5px 1.5px 0 #1a1208" }}>{b.sub}</div>
      </div>
    </div>
  );
}

// Trainer-style hero sprite — bigger cap/hair silhouette, two-tone outfit, backpack hint
function Hero({ x, y, dir, walking, palette }) {
  const px = x * TILE;
  const py = y * TILE;
  const bob = walking ? -2 : 0;
  const p = palette || CHAR_PALETTES.systems;

  return (
    <div
      style={{
        position: "absolute",
        left: px,
        top: py - TILE * 0.4,
        width: TILE,
        height: TILE * 1.4,
        transition: "left 0.12s linear, top 0.12s linear",
        zIndex: 5,
      }}
    >
      <svg width={TILE} height={TILE * 1.4} viewBox="0 0 32 46">
        <ellipse cx="16" cy="42" rx="9" ry="3" fill="rgba(0,0,0,0.28)" />
        {/* shoes */}
        <rect x="10.5" y={36 + bob} width="5" height="4" rx="1" fill={p.shoe} />
        <rect x="16.5" y={36 - bob} width="5" height="4" rx="1" fill={p.shoe} />
        {/* legs */}
        <rect x="11" y={29 + bob} width="4.5" height="9" fill={p.legs} />
        <rect x="16.5" y={29 - bob} width="4.5" height="9" fill={p.legs} />
        {/* backpack hint (back arm side) */}
        {dir !== "down" && <rect x={dir === "left" ? 21 : 6} y="17" width="5" height="11" rx="2" fill={p.pack} />}
        {/* torso / shirt - two tone */}
        <rect x="8" y="16" width="16" height="14" rx="3" fill={p.shirt} />
        <rect x="8" y="16" width="16" height="6" fill={p.shirtLight} opacity="0.85" />
        <rect x="8" y="25" width="16" height="5" fill={p.shirtDark} opacity="0.6" />
        {/* arms */}
        <rect x={dir === "left" ? 3.5 : 5.5} y="18" width="4.5" height="10" rx="2" fill={p.shirt} />
        <rect x={dir === "right" ? 24 : 22} y="18" width="4.5" height="10" rx="2" fill={p.shirt} />
        {/* head */}
        <rect x="9.5" y="4" width="13" height="13" rx="4" fill={p.skin} />
        {/* hair / cap base */}
        <path d="M8.5 8 Q16 -2 23.5 8 L23.5 11 Q16 5 8.5 11Z" fill={p.hair} />
        {/* cap brim / accent */}
        <rect x="8.5" y="6.5" width="15" height="4" rx="2" fill={p.cap} />
        <rect x="14" y="3" width="4" height="3" rx="1" fill={p.capAccent} />
        {dir === "down" && (
          <>
            <rect x="12" y="11" width="2.2" height="2.2" fill="#1a1208" />
            <rect x="17.8" y="11" width="2.2" height="2.2" fill="#1a1208" />
          </>
        )}
        {dir === "up" && <rect x="12.5" y="8" width="7" height="3.5" fill={p.hair} />}
        {dir === "left" && <rect x="11" y="11" width="2.2" height="2.2" fill="#1a1208" />}
        {dir === "right" && <rect x="18.8" y="11" width="2.2" height="2.2" fill="#1a1208" />}
      </svg>
    </div>
  );
}

// Three original persona looks, vibrant Gen3-style trainer palettes
const CHAR_PALETTES = {
  systems: {
    skin: "#f0c89c", hair: "#283848", cap: "#3098e8", capAccent: "#ffffff",
    shirt: "#3098e8", shirtLight: "#70bcf0", shirtDark: "#1c68a8",
    legs: "#e8e0d0", shoe: "#283848", pack: "#1c68a8",
  },
  growth: {
    skin: "#e8b888", hair: "#5a1810", cap: "#f04830", capAccent: "#ffe858",
    shirt: "#f04830", shirtLight: "#f88868", shirtDark: "#a82c18",
    legs: "#3a3a3a", shoe: "#5a1810", pack: "#a82c18",
  },
  motion: {
    skin: "#f0d0a4", hair: "#3c1858", cap: "#a858e0", capAccent: "#ffe858",
    shirt: "#a858e0", shirtLight: "#d0a0f0", shirtDark: "#702cae",
    legs: "#2c2030", shoe: "#3c1858", pack: "#702cae",
  },
};

// Original wandering critters (not Pokemon designs — same playful genre, fresh shapes)
function Critter({ kind, x, y, onTap, bounce }) {
  const px = x * TILE;
  const py = y * TILE;
  const sq = bounce ? 0.85 : 1;

  const ART = {
    glowpup: (
      <svg width={TILE} height={TILE * 0.85} viewBox="0 0 32 27">
        <ellipse cx="16" cy="25" rx="12" ry="2" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="16" cy="16" rx="12" ry="9" fill="#f0d850" />
        <ellipse cx="7" cy="9" rx="4" ry="6" fill="#f0d850" transform="rotate(-25 7 9)" />
        <ellipse cx="25" cy="9" rx="4" ry="6" fill="#f0d850" transform="rotate(25 25 9)" />
        <ellipse cx="11" cy="13" rx="3.5" ry="3" fill="#fff3b0" opacity="0.7" />
        <circle cx="12" cy="17" r="2" fill="#1a1208" />
        <circle cx="20" cy="17" r="2" fill="#1a1208" />
        <path d="M14 21 Q16 23 18 21" stroke="#1a1208" strokeWidth="1.4" fill="none" />
      </svg>
    ),
    inkdrop: (
      <svg width={TILE} height={TILE * 0.85} viewBox="0 0 32 27">
        <ellipse cx="16" cy="25" rx="11" ry="2" fill="rgba(0,0,0,0.18)" />
        <path d="M16 2 Q26 14 24 20 Q22 26 16 26 Q10 26 8 20 Q6 14 16 2Z" fill="#5090e0" />
        <path d="M16 2 Q26 14 24 20 Q22 26 16 26" fill="#3068b8" opacity="0.5" />
        <ellipse cx="12" cy="14" rx="3" ry="4" fill="#90c0f0" opacity="0.7" />
        <circle cx="16" cy="18" r="4.5" fill="#ffffff" />
        <circle cx="16" cy="18" r="2.6" fill="#1a1208" />
        <circle cx="15" cy="17" r="0.9" fill="#ffffff" />
      </svg>
    ),
    sproutling: (
      <svg width={TILE} height={TILE * 0.85} viewBox="0 0 32 27">
        <ellipse cx="16" cy="25" rx="11" ry="2" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="16" cy="17" rx="11" ry="8.5" fill="#58a850" />
        <ellipse cx="10" cy="12" rx="3.5" ry="2.8" fill="#80c870" opacity="0.8" />
        <path d="M16 8 Q12 2 16 -1 Q20 2 16 8Z" fill="#3c8038" />
        <circle cx="12" cy="17" r="2" fill="#1a1208" />
        <circle cx="20" cy="17" r="2" fill="#1a1208" />
        <ellipse cx="16" cy="22" rx="3" ry="1.4" fill="#3c8038" opacity="0.7" />
      </svg>
    ),
    embercub: (
      <svg width={TILE} height={TILE * 0.85} viewBox="0 0 32 27">
        <ellipse cx="16" cy="25" rx="11" ry="2" fill="rgba(0,0,0,0.18)" />
        <ellipse cx="16" cy="16" rx="11" ry="9" fill="#f07838" />
        <ellipse cx="11" cy="12" rx="3.5" ry="3" fill="#f8a868" opacity="0.7" />
        <path d="M25 14 Q30 11 28 7 Q26 11 23 12Z" fill="#ffd040" />
        <path d="M26 13 Q29 11 28 9" fill="#ff8838" opacity="0.8" />
        <circle cx="12" cy="17" r="2" fill="#1a1208" />
        <circle cx="20" cy="17" r="2" fill="#1a1208" />
        <ellipse cx="16" cy="21" rx="2.5" ry="1.3" fill="#a83c18" opacity="0.6" />
      </svg>
    ),
  };

  return (
    <div
      onClick={onTap}
      style={{
        position: "absolute",
        left: px,
        top: py + TILE * 0.35,
        width: TILE,
        height: TILE * 0.85,
        cursor: "pointer",
        transition: "left 1.2s ease, top 1.2s ease, transform 0.15s ease",
        transform: `scaleY(${sq})`,
        zIndex: 4,
      }}
      title="A wild critter"
    >
      {ART[kind]}
    </div>
  );
}

function NpcSprite({ x, y, palette, onTap, active }) {
  const px = x * TILE;
  const py = y * TILE;
  return (
    <div
      onClick={onTap}
      style={{
        position: "absolute",
        left: px,
        top: py - TILE * 0.35,
        width: TILE,
        height: TILE * 1.35,
        cursor: "pointer",
        zIndex: 4,
        filter: active ? "drop-shadow(0 0 10px rgba(255,232,88,0.9))" : "none",
      }}
      title="Talk"
    >
      <svg width={TILE} height={TILE * 1.35} viewBox="0 0 32 44">
        <ellipse cx="16" cy="40" rx="9" ry="3" fill="rgba(0,0,0,0.3)" />
        <rect x="9" y="20" width="14" height="18" rx="4" fill={palette.robe} />
        <rect x="9" y="20" width="14" height="6" fill={palette.trim} opacity="0.85" />
        <rect x="10" y="6" width="12" height="12" rx="3" fill={palette.skin} />
        <path d="M9 9 Q16 -1 23 9 L23 13 Q16 6 9 13Z" fill={palette.trim} />
        <rect x="12.5" y="12" width="2.2" height="2.2" fill="#1a1208" />
        <rect x="17.5" y="12" width="2.2" height="2.2" fill="#1a1208" />
      </svg>
    </div>
  );
}
function PixelPanel({ children, style }) {
  return (
    <div
      style={{
        background: "#1c2c44",
        border: "4px solid #3068a8",
        boxShadow: "0 0 0 4px #0c1828, inset 0 0 0 2px #264870",
        borderRadius: 4,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function PixelButton({ children, onClick, style, small }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: small ? 8 : 10,
        color: "#fffaf0",
        background: "#3098e8",
        border: "none",
        boxShadow: "0 0 0 2px #1c68a8, inset 0 -3px 0 rgba(0,0,0,0.25), inset 0 3px 0 rgba(255,255,255,0.15)",
        padding: small ? "6px 10px" : "10px 16px",
        cursor: "pointer",
        borderRadius: 2,
        letterSpacing: 0.5,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

function Modal({ title, onClose, children, wide }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(8,6,4,0.78)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: 16,
      }}
    >
      <PixelPanel style={{ width: wide ? "min(640px, 100%)" : "min(420px, 100%)", maxHeight: "85%", overflowY: "auto", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            borderBottom: "3px solid #3068a8",
            position: "sticky",
            top: 0,
            background: "#1c3050",
          }}
        >
          <h2 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#ffe858", margin: 0, letterSpacing: 0.5 }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 10,
              color: "#fffaf0",
              background: "#e04848",
              border: "none",
              boxShadow: "0 0 0 2px #a02828",
              padding: "4px 8px",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
        <div style={{ padding: 16, color: "#f0ece0", fontFamily: "'VT323', monospace", fontSize: 16, lineHeight: 1.5 }}>
          {children}
        </div>
      </PixelPanel>
    </div>
  );
}



/* ============================================================
   PROJECT CARD + DETAIL (Arcade — case studies only)
   ============================================================ */

function ProjectCard({ project, onSelect }) {
  return (
    <button
      onClick={() => onSelect(project)}
      style={{
        textAlign: "left",
        background: project.featured ? "#284060" : "#203854",
        border: project.featured ? "2px solid #ffe858" : "2px solid #3068a8",
        borderRadius: 4,
        padding: 10,
        cursor: "pointer",
        color: "#f0ece0",
        fontFamily: "'VT323', monospace",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: project.featured ? "#ffe858" : "#70c8ff" }}>
          {project.title}
        </span>
        {project.featured && <span style={{ fontSize: 11, color: "#ffe858" }}>★ FEATURED</span>}
      </div>
      <div style={{ fontSize: 13, color: "#c8c0a8" }}>{project.role} · {project.period}</div>
      <div style={{ fontSize: 15 }}>{project.blurb}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }}>
        {project.tags.map((t) => (
          <span key={t} style={{ fontSize: 10, fontFamily: "'Press Start 2P', monospace", background: "#142438", color: "#5cd87c", padding: "3px 6px", borderRadius: 2 }}>
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}

function ProjectDetail({ project, onClose }) {
  return (
    <Modal title={project.title} onClose={onClose} wide>
      <div style={{ marginBottom: 4, color: "#70c8ff" }}>{project.role}</div>
      <div style={{ marginBottom: 14, fontSize: 13, color: "#8a8270" }}>{project.period}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {project.tags.map((t) => (
          <span key={t} style={{ fontSize: 10, fontFamily: "'Press Start 2P', monospace", background: "#142438", color: "#5cd87c", padding: "4px 7px", borderRadius: 2 }}>
            {t}
          </span>
        ))}
      </div>

      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#f04830", marginBottom: 6 }}>PROBLEM</h3>
      <p style={{ marginBottom: 16 }}>{project.problem}</p>

      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#70c8ff", marginBottom: 6 }}>APPROACH</h3>
      <p style={{ marginBottom: 16 }}>{project.approach}</p>

      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#5cd87c", marginBottom: 6 }}>OUTCOME</h3>
      <p style={{ marginBottom: 18 }}>{project.outcome}</p>

      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <PixelButton small>VIEW FULL CASE STUDY →</PixelButton>
        </a>
      ) : (
        <div style={{ fontSize: 13, color: "#c8c0a8" }}>Full case study coming soon to danielvisual.com</div>
      )}
    </Modal>
  );
}

function ArcadeContent({ onSelectProject }) {
  return (
    <div>
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 10 }}>UX CASE STUDIES</h3>
      <div style={{ display: "grid", gap: 8 }}>
        {CASE_STUDIES.map((p) => (
          <ProjectCard key={p.id} project={p} onSelect={onSelectProject} />
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   GALLERY (Visual / Play projects) — swipeable
   ============================================================ */

function GalleryContent() {
  const [index, setIndex] = useState(0);
  const project = VISUAL_PROJECTS[index];

  const next = () => setIndex((i) => (i + 1) % VISUAL_PROJECTS.length);
  const prev = () => setIndex((i) => (i - 1 + VISUAL_PROJECTS.length) % VISUAL_PROJECTS.length);

  const touchStartX = useRef(null);
  function onTouchStart(e) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) prev();
    else if (dx < -40) next();
    touchStartX.current = null;
  }

  return (
    <div>
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 10 }}>
        VISUAL &amp; PLAY PROJECTS
      </h3>
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          background: "#203854",
          border: "2px solid #3068a8",
          borderRadius: 4,
          padding: 18,
          textAlign: "center",
          minHeight: 160,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: "#e858a8" }}>{project.title}</div>
        <p style={{ fontSize: 15 }}>{project.blurb}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <PixelButton small style={{ background: "#e858a8", boxShadow: "0 0 0 2px #a8307c", margin: "0 auto" }}>
            VIEW ON DANIELVISUAL.COM →
          </PixelButton>
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
        <PixelButton small onClick={prev}>◀ PREV</PixelButton>
        <div style={{ display: "flex", gap: 6 }}>
          {VISUAL_PROJECTS.map((_, i) => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === index ? "#ffe858" : "#3068a8", display: "inline-block" }} />
          ))}
        </div>
        <PixelButton small onClick={next}>NEXT ▶</PixelButton>
      </div>
      <p style={{ fontSize: 12, color: "#8a8270", marginTop: 10, fontStyle: "italic" }}>
        Swipe, or use the prev/next buttons, to browse. Full images live on danielvisual.com.
      </p>
    </div>
  );
}

/* ============================================================
   ZONE CONTENT (modal bodies per building)
   ============================================================ */

function HouseContent() {
  return (
    <div>
      <p style={{ marginBottom: 14, color: "#ffe858", fontFamily: "'Press Start 2P', monospace", fontSize: 9 }}>
        {PROFILE.name.toUpperCase()}
      </p>
      <p style={{ marginBottom: 14 }}>{ABOUT.highlight}</p>
      {ABOUT.bio.map((p, i) => (
        <p key={i} style={{ marginBottom: 12 }}>{p}</p>
      ))}
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#70c8ff", margin: "16px 0 8px" }}>EDUCATION</h3>
      {ABOUT.education.map((e, i) => <p key={i} style={{ fontSize: 14 }}>{e}</p>)}
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#5cd87c", margin: "16px 0 8px" }}>RECOGNITION</h3>
      {ABOUT.recognition.map((r, i) => <p key={i} style={{ fontSize: 14 }}>{r}</p>)}
      <p style={{ marginTop: 16, fontSize: 12, color: "#8a8270", fontStyle: "italic" }}>
        The Village Elder, standing nearby, is happy to tell you more — just walk up and talk.
      </p>
    </div>
  );
}

function TowerContent() {
  return (
    <div>
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 14 }}>STATS</h3>
      <div style={{ display: "grid", gap: 12 }}>
        {SKILLS.map((s) => (
          <div key={s.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 14 }}>
              <span>{s.name}</span>
              <span style={{ color: "#5cd87c" }}>{"★".repeat(s.level)}</span>
            </div>
            <div style={{ height: 10, background: "#142438", border: "2px solid #3068a8" }}>
              <div style={{ height: "100%", width: `${(s.level / 5) * 100}%`, background: "linear-gradient(to right, #3f9e5c, #5cd87c)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LibraryContent() {
  return (
    <div>
      <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 14 }}>
        QUEST LOG — EXPERIENCE
      </h3>
      <div style={{ display: "grid", gap: 16 }}>
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ borderLeft: "3px solid #3068a8", paddingLeft: 12 }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: "#70c8ff" }}>{e.role}</div>
            <div style={{ color: "#ffe858", fontSize: 15 }}>{e.org} <span style={{ color: "#8a8270", fontSize: 13 }}>— {e.sub}</span></div>
            <div style={{ fontSize: 12, color: "#8a8270", marginBottom: 6 }}>{e.period}</div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {e.bullets.map((b, j) => <li key={j} style={{ fontSize: 14, marginBottom: 4 }}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostContent() {
  return (
    <div>
      <p style={{ marginBottom: 16 }}>Send word, traveler. Daniel can be reached at:</p>
      <div style={{ display: "grid", gap: 10 }}>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
          <PixelButton style={{ width: "100%" }} small>LINKEDIN →</PixelButton>
        </a>
        <a href={`mailto:${PROFILE.email}`}>
          <PixelButton style={{ width: "100%", background: "#e8b830", boxShadow: "0 0 0 2px #a87c10" }} small>
            EMAIL → {PROFILE.email}
          </PixelButton>
        </a>
        <a href={PROFILE.dribbble} target="_blank" rel="noopener noreferrer">
          <PixelButton style={{ width: "100%", background: "#e858a8", boxShadow: "0 0 0 2px #a8307c" }} small>DRIBBBLE →</PixelButton>
        </a>
        <a href={PROFILE.site} target="_blank" rel="noopener noreferrer">
          <PixelButton style={{ width: "100%", background: "#30c890", boxShadow: "0 0 0 2px #1c8860" }} small>DANIELVISUAL.COM →</PixelButton>
        </a>
      </div>
      <p style={{ marginTop: 16, fontSize: 12, color: "#8a8270", fontStyle: "italic" }}>
        The Courier, standing nearby, can also help you choose the best way to reach out.
      </p>
    </div>
  );
}

/* ============================================================
   NPC DIALOGUE — branching
   ============================================================ */

const NPC_RESPONSES = {
  approach: "He treats every project like a system: research the real behavior, question the brief, then design and test the smallest change that moves the metric.",
  highlight: "Most recently, leading product design at Doctronic — shipping the first AI-authorized prescription refill flow in the US, covered by the Washington Post, Politico, and the Salt Lake Tribune.",
  education: "UC Davis for a B.A. in Media Technology and Chinese, then General Assembly's Product Design program and a UX Design course at Udacity to sharpen the craft.",
  linkedin: `Right this way: ${PROFILE.linkedin}`,
  email: `Best reached at ${PROFILE.email} or ${PROFILE.phone}.`,
  dribbble: `Visual work lives here: ${PROFILE.dribbble}`,
};

function NpcDialogue({ npc, onClose }) {
  const [chosen, setChosen] = useState(null);

  return (
    <Modal title={npc.name} onClose={onClose}>
      <p style={{ marginBottom: 16, color: "#70c8ff" }}>{npc.intro}</p>
      {!chosen ? (
        <div style={{ display: "grid", gap: 8 }}>
          {npc.branches.map((b) => (
            <PixelButton key={b.label} small style={{ textAlign: "left" }} onClick={() => setChosen(b)}>
              ▸ {b.label}
            </PixelButton>
          ))}
        </div>
      ) : (
        <div>
          <p style={{ marginBottom: 16, background: "#203854", border: "2px solid #3068a8", borderRadius: 4, padding: 12 }}>
            {NPC_RESPONSES[chosen.response]}
          </p>
          <PixelButton small onClick={() => setChosen(null)}>← ASK SOMETHING ELSE</PixelButton>
        </div>
      )}
    </Modal>
  );
}

/* ============================================================
   TITLE SCREEN + CHARACTER SELECT
   ============================================================ */


/* ============================================================
   TITLE SCREEN + CHARACTER SELECT — vibrant, descriptive
   ============================================================ */

function TitleScreen({ onContinue }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 480,
        background: "linear-gradient(180deg, #2870c8 0%, #50a8e0 45%, #6bb05c 75%, #5fa050 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Press Start 2P', monospace",
        color: "#fffaf0",
        gap: 16,
        position: "relative",
        overflow: "hidden",
        borderRadius: 6,
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      {/* fluffy cloud shapes for vibrancy */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 400 250" preserveAspectRatio="none">
        <ellipse cx="60" cy="40" rx="38" ry="14" fill="#ffffff" opacity="0.85" />
        <ellipse cx="90" cy="34" rx="26" ry="11" fill="#ffffff" opacity="0.85" />
        <ellipse cx="320" cy="60" rx="34" ry="12" fill="#ffffff" opacity="0.8" />
        <ellipse cx="350" cy="54" rx="22" ry="9" fill="#ffffff" opacity="0.8" />
        <ellipse cx="180" cy="25" rx="28" ry="10" fill="#ffffff" opacity="0.7" />
      </svg>

      <h1
        style={{
          fontSize: "clamp(18px, 4.5vw, 32px)",
          textShadow: "3px 3px 0 #1c4070, -1px -1px 0 #1c4070",
          letterSpacing: 2,
          zIndex: 1,
          textAlign: "center",
          color: "#ffe858",
        }}
      >
        {GAME_TITLE.toUpperCase()}
      </h1>
      <p style={{ fontSize: "clamp(10px, 2vw, 14px)", color: "#fffaf0", zIndex: 1, textShadow: "2px 2px 0 #1c4070" }}>
        {GAME_SUBTITLE}
      </p>

      <div
        style={{
          zIndex: 1,
          background: "rgba(12,24,40,0.55)",
          border: "3px solid #fffaf0",
          borderRadius: 6,
          padding: "14px 18px",
          maxWidth: 420,
        }}
      >
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 17, lineHeight: 1.5, margin: 0, textAlign: "center" }}>
          {GAME_DESCRIPTION}
        </p>
      </div>

      <div style={{ zIndex: 1, display: "grid", gap: 6, fontFamily: "'VT323', monospace", fontSize: 15, textAlign: "left" }}>
        {GAME_FEATURES.map((f, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
            <span style={{ color: "#ffe858" }}>★</span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onContinue}
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "clamp(11px, 2.2vw, 15px)",
          color: "#fffaf0",
          background: "#f04830",
          border: "none",
          boxShadow: "0 0 0 3px #a82c18, inset 0 -4px 0 rgba(0,0,0,0.25)",
          padding: "14px 30px",
          cursor: "pointer",
          zIndex: 1,
          marginTop: 8,
          animation: "pulse 1.4s ease-in-out infinite",
          borderRadius: 3,
        }}
      >
        ▶ PRESS START
      </button>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.85; transform: scale(1.03); } }`}</style>
    </div>
  );
}

function TrainerPreview({ sprite }) {
  const p = CHAR_PALETTES[sprite];
  return (
    <svg width="56" height="76" viewBox="0 0 32 46">
      <ellipse cx="16" cy="42" rx="9" ry="3" fill="rgba(0,0,0,0.22)" />
      <rect x="10.5" y="36" width="5" height="4" rx="1" fill={p.shoe} />
      <rect x="16.5" y="36" width="5" height="4" rx="1" fill={p.shoe} />
      <rect x="11" y="29" width="4.5" height="9" fill={p.legs} />
      <rect x="16.5" y="29" width="4.5" height="9" fill={p.legs} />
      <rect x="8" y="16" width="16" height="14" rx="3" fill={p.shirt} />
      <rect x="8" y="16" width="16" height="6" fill={p.shirtLight} opacity="0.85" />
      <rect x="5.5" y="18" width="4.5" height="10" rx="2" fill={p.shirt} />
      <rect x="22" y="18" width="4.5" height="10" rx="2" fill={p.shirt} />
      <rect x="9.5" y="4" width="13" height="13" rx="4" fill={p.skin} />
      <path d="M8.5 8 Q16 -2 23.5 8 L23.5 11 Q16 5 8.5 11Z" fill={p.hair} />
      <rect x="8.5" y="6.5" width="15" height="4" rx="2" fill={p.cap} />
      <rect x="14" y="3" width="4" height="3" rx="1" fill={p.capAccent} />
      <rect x="12" y="11" width="2.2" height="2.2" fill="#1a1208" />
      <rect x="17.8" y="11" width="2.2" height="2.2" fill="#1a1208" />
    </svg>
  );
}

function CharacterSelect({ onSelect }) {
  const [hover, setHover] = useState(CHARACTERS[0].id);
  const [confirming, setConfirming] = useState(null);
  const active = CHARACTERS.find((c) => c.id === hover);

  function handleClick(c) {
    if (confirming === c.id) {
      onSelect(c);
    } else {
      setHover(c.id);
      setConfirming(c.id);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 480,
        background: "linear-gradient(180deg, #2c2048 0%, #402c60 60%, #503080 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        position: "relative",
        borderRadius: 6,
        padding: 22,
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "clamp(11px, 2.2vw, 15px)",
          color: "#ffe858",
          margin: 0,
          textAlign: "center",
          textShadow: "2px 2px 0 #1c1030",
        }}
      >
        CHOOSE YOUR HIRING PANEL MEMBER
      </h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => handleClick(c)}
            style={{
              background: hover === c.id ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.2)",
              border: hover === c.id ? `3px solid ${c.color}` : "3px solid rgba(255,255,255,0.25)",
              borderRadius: 8,
              padding: 14,
              cursor: "pointer",
              width: 134,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              transition: "border-color 0.15s ease, background 0.15s ease",
            }}
          >
            <TrainerPreview sprite={c.sprite} />
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#fffaf0" }}>{c.name}</div>
            <div style={{ fontSize: 9, color: c.color, fontFamily: "'Press Start 2P', monospace", textAlign: "center" }}>{c.role}</div>
            {confirming === c.id && (
              <div style={{ fontSize: 9, color: "#ffe858", fontFamily: "'Press Start 2P', monospace" }}>TAP AGAIN ▸</div>
            )}
          </button>
        ))}
      </div>
      <div
        style={{
          background: "rgba(12,8,24,0.6)",
          border: "3px solid #fffaf0",
          borderRadius: 6,
          padding: 12,
          maxWidth: 460,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p style={{ fontFamily: "'VT323', monospace", fontSize: 16, color: "#f0ece0", margin: 0 }}>{active.bio}</p>
      </div>
      <p style={{ fontSize: 11, color: "#c8bcd8", fontFamily: "'VT323', monospace" }}>Tap a character, then tap again to confirm.</p>
    </div>
  );
}

/* ============================================================
   MAIN GAME COMPONENT
   ============================================================ */

const VIEWPORT_COLS = 16;
const VIEWPORT_ROWS = 10;

export default function App() {
  const [phase, setPhase] = useState("title"); // title -> select -> playing
  const [character, setCharacter] = useState(null);
  const [pos, setPos] = useState(START_POS);
  const [dir, setDir] = useState("down");
  const [walking, setWalking] = useState(false);
  const [activeZone, setActiveZone] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeNpc, setActiveNpc] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [critters, setCritters] = useState(CRITTER_SPAWN.map((c) => ({ ...c, bounce: false })));
  const [critterQuip, setCritterQuip] = useState(null);
  const walkTimeout = useRef(null);

  const anyModalOpen = !!(activeZone || selectedProject || activeNpc || menuOpen);

  const nearestBuilding = useCallback((p) => {
    for (const b of BUILDINGS) {
      const d = doorTile(b);
      const dist = Math.abs(d.x - p.x) + Math.abs(d.y - p.y);
      if (dist <= 1) return b;
    }
    return null;
  }, []);

  const nearestNpc = useCallback((p) => {
    for (const n of NPCS) {
      const dist = Math.abs(n.x - p.x) + Math.abs(n.y - p.y);
      if (dist <= 1) return n;
    }
    return null;
  }, []);

  const [nearBuilding, setNearBuilding] = useState(null);
  const [nearNpc, setNearNpc] = useState(null);

  useEffect(() => {
    setNearBuilding(nearestBuilding(pos));
    setNearNpc(nearestNpc(pos));
  }, [pos, nearestBuilding, nearestNpc]);

  const isBlocked = useCallback((x, y) => {
    if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return true;
    for (const b of BUILDINGS) {
      if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) return true;
    }
    for (const t of TREES) if (t.x === x && t.y === y) return true;
    for (const m of MOUNTAINS) {
      if (y === m.y && x >= m.x && x < m.x + m.w) return true;
    }
    for (const r of ROCKS) if (r.x === x && r.y === y) return true;
    for (const n of NPCS) if (n.x === x && n.y === y) return true;
    return false;
  }, []);

  const move = useCallback(
    (dx, dy, newDir) => {
      setDir(newDir);
      setPos((p) => {
        const nx = p.x + dx;
        const ny = p.y + dy;
        if (isBlocked(nx, ny)) return p;
        return { x: nx, y: ny };
      });
      setWalking(true);
      clearTimeout(walkTimeout.current);
      walkTimeout.current = setTimeout(() => setWalking(false), 150);
    },
    [isBlocked]
  );

  const interact = useCallback(() => {
    if (anyModalOpen) return;
    if (nearNpc) { setActiveNpc(nearNpc); return; }
    if (nearBuilding) { setActiveZone(nearBuilding.id); return; }
  }, [anyModalOpen, nearNpc, nearBuilding]);

  // gentle critter wander
  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => {
      setCritters((prev) =>
        prev.map((c) => {
          const dirs = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];
          const [dx, dy] = dirs[Math.floor(Math.random() * dirs.length)];
          let nx = c.x + dx;
          let ny = c.y + dy;
          if (isBlocked(nx, ny) || nx < 1 || ny < 1 || nx > COLS - 2 || ny > ROWS - 2) {
            nx = c.x;
            ny = c.y;
          }
          return { ...c, x: nx, y: ny };
        })
      );
    }, 1800);
    return () => clearInterval(interval);
  }, [phase, isBlocked]);

  const tapCritter = useCallback((id) => {
    setCritters((prev) => prev.map((c) => (c.id === id ? { ...c, bounce: true } : c)));
    setCritterQuip(CRITTER_QUIPS[Math.floor(Math.random() * CRITTER_QUIPS.length)]);
    setTimeout(() => {
      setCritters((prev) => prev.map((c) => (c.id === id ? { ...c, bounce: false } : c)));
    }, 200);
    setTimeout(() => setCritterQuip(null), 2200);
  }, []);

  useEffect(() => {
    if (phase !== "playing") return;
    function onKey(e) {
      if (anyModalOpen) return;
      switch (e.key) {
        case "ArrowUp": case "w": case "W": e.preventDefault(); move(0, -1, "up"); break;
        case "ArrowDown": case "s": case "S": e.preventDefault(); move(0, 1, "down"); break;
        case "ArrowLeft": case "a": case "A": e.preventDefault(); move(-1, 0, "left"); break;
        case "ArrowRight": case "d": case "D": e.preventDefault(); move(1, 0, "right"); break;
        case "Enter": case " ": e.preventDefault(); interact(); break;
        case "m": case "M": setMenuOpen((s) => !s); break;
        default: break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, move, interact, anyModalOpen]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  const palette = character ? CHAR_PALETTES[character.sprite] : CHAR_PALETTES.systems;

  const zoneContent = {
    arcade: <ArcadeContent onSelectProject={setSelectedProject} />,
    house: <HouseContent />,
    tower: <TowerContent />,
    library: <LibraryContent />,
    post: <PostContent />,
    gallery: <GalleryContent />,
  };
  const zoneTitle = {
    arcade: "ARCADE — UX CASE STUDIES",
    house: "COTTAGE — ABOUT",
    tower: "TOWER — SKILLS",
    library: "LIBRARY — RESUME",
    post: "POST OFFICE — CONTACT",
    gallery: "GALLERY — VISUAL & PLAY",
  };

  if (phase === "title") {
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 520 }}>
        <TitleScreen onContinue={() => setPhase("select")} />
      </div>
    );
  }
  if (phase === "select") {
    return (
      <div style={{ width: "100%", height: "100%", minHeight: 520 }}>
        <CharacterSelect
          onSelect={(c) => {
            setCharacter(c);
            setPhase("playing");
          }}
        />
      </div>
    );
  }

  const camX = Math.max(0, Math.min(COLS - VIEWPORT_COLS, pos.x - Math.floor(VIEWPORT_COLS / 2)));
  const camY = Math.max(0, Math.min(ROWS - VIEWPORT_ROWS, pos.y - Math.floor(VIEWPORT_ROWS / 2)));

  return (
    <div style={{ width: "100%", height: "100%", fontFamily: "'VT323', monospace", background: "#0c1828", borderRadius: 6, padding: 8, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* Slim HUD bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858" }}>
          {GAME_TITLE.toUpperCase()} <span style={{ color: "#70c8ff" }}>· {character?.name}</span>
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 8,
            color: "#1c2c44",
            background: "#ffe858",
            border: "none",
            padding: "6px 10px",
            cursor: "pointer",
            borderRadius: 3,
            boxShadow: "0 0 0 2px #c89010",
          }}
        >
          ☰ MENU (M)
        </button>
      </div>

      {/* Game viewport — fills remaining space, controls float on top */}
      <div
        style={{
          position: "relative",
          width: "100%",
          flex: 1,
          minHeight: 380,
          overflow: "hidden",
          border: "3px solid #3068a8",
          boxShadow: "0 0 0 3px #0c1828",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${-camX * TILE}px`,
              top: `${-camY * TILE}px`,
              width: COLS * TILE,
              height: ROWS * TILE,
              transition: "left 0.12s linear, top 0.12s linear",
              transform: `scale(${1})`,
            }}
          >
            <Ground />
            {MOUNTAINS.map((m, i) => <Mountain key={i} x={m.x} y={m.y} w={m.w} />)}
            {ROCKS.map((r, i) => <Rock key={i} x={r.x} y={r.y} />)}
            {TREES.map((t, i) => <Tree key={i} x={t.x} y={t.y} />)}
            {BUILDINGS.map((b) => (
              <div key={b.id} onClick={() => setActiveZone(b.id)} style={{ cursor: "pointer" }} title={`Enter ${b.label}`}>
                <Building b={b} active={nearBuilding?.id === b.id} />
              </div>
            ))}
            {NPCS.map((n) => (
              <NpcSprite key={n.id} x={n.x} y={n.y} palette={n.palette} onTap={() => setActiveNpc(n)} active={nearNpc?.id === n.id} />
            ))}
            {critters.map((c) => (
              <Critter key={c.id} kind={c.kind} x={c.x} y={c.y} bounce={c.bounce} onTap={() => tapCritter(c.id)} />
            ))}
            <Hero x={pos.x} y={pos.y} dir={dir} walking={walking} palette={palette} />
          </div>
        </div>

        {(nearBuilding || nearNpc) && !anyModalOpen && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 10,
              transform: "translateX(-50%)",
              background: "rgba(12,24,40,0.85)",
              color: "#ffe858",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 9,
              padding: "6px 10px",
              borderRadius: 3,
              border: "2px solid #3068a8",
              whiteSpace: "nowrap",
              zIndex: 6,
            }}
          >
            {nearNpc ? `PRESS A TO TALK TO ${nearNpc.name.toUpperCase()}` : `PRESS A TO ENTER ${nearBuilding.label.toUpperCase()}`}
          </div>
        )}

        {critterQuip && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 10,
              transform: "translateX(-50%)",
              background: "rgba(12,24,40,0.92)",
              color: "#5cd87c",
              fontFamily: "'VT323', monospace",
              fontSize: 14,
              padding: "6px 12px",
              borderRadius: 3,
              border: "2px solid #3068a8",
              whiteSpace: "nowrap",
              zIndex: 6,
            }}
          >
            {critterQuip}
          </div>
        )}

        {/* Floating overlay controls — D-pad bottom-left, A button bottom-right.
            No dedicated control row; map fills the rest of the space. */}
        <div style={{ position: "absolute", left: 10, bottom: 10, zIndex: 7 }}>
          <DPad onMove={move} />
        </div>
        <button
          onClick={interact}
          style={{
            position: "absolute",
            right: 14,
            bottom: 14,
            zIndex: 7,
            width: 52,
            height: 52,
            borderRadius: "50%",
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 16,
            color: "#fffaf0",
            background: "rgba(48,152,232,0.88)",
            border: "none",
            boxShadow: "0 0 0 3px rgba(28,104,168,0.9), 0 2px 6px rgba(0,0,0,0.4)",
            cursor: "pointer",
          }}
        >
          A
        </button>
      </div>

      {menuOpen && (
        <Modal title="MENU" onClose={() => setMenuOpen(false)}>
          <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 10 }}>CONTROLS</h3>
          <div style={{ display: "grid", gap: 8, marginBottom: 18, fontSize: 14 }}>
            <div><b style={{ color: "#70c8ff" }}>Move:</b> Arrow Keys / WASD, or the floating D-pad</div>
            <div><b style={{ color: "#70c8ff" }}>Interact / Talk:</b> Enter, Space, or the floating A button — when close to a building or NPC</div>
            <div><b style={{ color: "#70c8ff" }}>Open this menu:</b> M, or the menu button top-right</div>
            <div><b style={{ color: "#70c8ff" }}>Close any window:</b> Esc</div>
            <div>You can also tap buildings, NPCs, and critters directly.</div>
          </div>
          <h3 style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 10, color: "#ffe858", marginBottom: 10 }}>QUICK TRAVEL</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {BUILDINGS.map((b) => (
              <PixelButton
                key={b.id}
                small
                onClick={() => { setMenuOpen(false); setActiveZone(b.id); }}
                style={{ background: "#203854", boxShadow: "0 0 0 2px #3068a8" }}
              >
                {b.label}
              </PixelButton>
            ))}
          </div>
        </Modal>
      )}

      {activeZone && (
        <Modal title={zoneTitle[activeZone]} onClose={() => setActiveZone(null)} wide={activeZone === "arcade" || activeZone === "library"}>
          {zoneContent[activeZone]}
        </Modal>
      )}
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {activeNpc && <NpcDialogue npc={activeNpc} onClose={() => setActiveNpc(null)} />}
    </div>
  );
}

function DPad({ onMove }) {
  const btn = (label, dx, dy, dir, style) => (
    <button
      onClick={() => onMove(dx, dy, dir)}
      style={{
        width: 38,
        height: 38,
        background: "rgba(28,44,68,0.78)",
        border: "2px solid rgba(112,200,255,0.6)",
        color: "#fffaf0",
        fontSize: 15,
        cursor: "pointer",
        borderRadius: 6,
        ...style,
      }}
    >
      {label}
    </button>
  );
  return (
    <div style={{ display: "grid", gridTemplateColumns: "38px 38px 38px", gridTemplateRows: "38px 38px 38px", gap: 2 }}>
      <div />{btn("▲", 0, -1, "up")}<div />
      {btn("◀", -1, 0, "left")}<div />{btn("▶", 1, 0, "right")}
      <div />{btn("▼", 0, 1, "down")}<div />
    </div>
  );
}
