// ============================================================
// RED Komodo X rental — content model (verbatim from original)
// ============================================================

export const CONTACT = {
  phoneDisplay: "+971 52 841 8108",
  phoneE164: "971528418108",
  email: "hi@filmwithbigstory.com",
  instagram: "bigstory_red_rentals",
  instagramUrl: "https://www.instagram.com/bigstory_red_rentals/",
  instagramMainUrl: "https://www.instagram.com/filmwithbigstory/",
  location: "Dubai, UAE",
} as const;

export const BANK = {
  bank: "RAK Bank · UAE",
  accountName: "BIG STORY FILM PRODUCTION",
  iban: "AE09 0400 0000 3335 3002 001",
  swift: "NRAKAEAK",
} as const;

// ---------- packages ----------
export type Pkg = {
  id: string;
  tier: string;
  name: string;
  market?: string;
  save?: string;
  price: number;
  unit: string;
  desc: string;
  featured?: boolean;
  fire?: boolean;
  included: { text: string; kind?: "warn" | "plus" }[];
};

export const PACKAGES: Pkg[] = [
  {
    id: "brain",
    tier: "Entry · Camera Body Only",
    name: "RED Camera Brain Only",
    market: "Market: AED 1,000",
    save: "SAVE 10%",
    price: 900,
    unit: "per day · 9 hours",
    desc: "The RED Komodo X camera system with media, monitor and core accessories. Ideal for productions that have their own lenses and lighting.",
    included: [
      { text: "1× KOMODO-X RF Mount Camera System" },
      { text: '1× DSMC3 RED Touch 7" LCD Monitor' },
      { text: "2× RED PRO CFexpress v4 Type B 1TB" },
      { text: "1× RED PRO CFexpress Card Reader" },
      { text: "1× RED Pro V-Lock I/O Module" },
      { text: "1× RED Compact Top Handle" },
      { text: "1× DSMC3 RED 5-Pin to Dual XLR Adapter" },
      { text: "2× V-Mount 98Wh Batteries" },
      { text: "Free Delivery (Dubai)" },
      {
        text: 'Does not include batteries beyond 2× 98Wh or monitor beyond 7" RED LCD',
        kind: "warn",
      },
    ],
  },
  {
    id: "master",
    tier: "Most Popular · Camera + Glass + Grip",
    name: "RED Cinema Master Kit",
    market: "Market: AED 3,000",
    save: "SAVE 53%",
    price: 1400,
    unit: "per day · 9 hours",
    desc: "Complete camera and optics package. RED body + full DZOFILM Arles cine prime set + grip, stabilization, monitoring and wireless systems.",
    featured: true,
    included: [
      { text: "Camera Brain (All items above)", kind: "plus" },
      { text: "DZOFILM Arles Prime T1.4 — 25mm, 35mm, 50mm, 75mm, 100mm", kind: "plus" },
      { text: "DZOFILM Marlin 1.6× PL→RF Lens Adapter", kind: "plus" },
      { text: "METABONES 0.71× PL→RF Speed Booster", kind: "plus" },
      { text: "Tilta Mirage Motorized ND Filters", kind: "plus" },
      { text: "Manfrotto Heavy-Duty Tripod", kind: "plus" },
      { text: "Proaim Stabilizer Vest + Production Cart", kind: "plus" },
      { text: "2× 260Wh Bi-Voltage Li-Ion V-Lock Batteries", kind: "plus" },
      { text: "3× V-Mount 98Wh + 3× V-Mount 150Wh Batteries", kind: "plus" },
      { text: 'Cine 7" SmallHD Monitor (1st AC)', kind: "plus" },
      { text: "Tilta Nucleus-M Wireless Follow Focus", kind: "plus" },
      { text: "Teradek Bolt 6 Zero-Delay Wireless TX", kind: "plus" },
      { text: 'Feelworld 21.5" Director Monitor', kind: "plus" },
      { text: "Free Delivery (Dubai)", kind: "plus" },
    ],
  },
  {
    id: "flagship",
    tier: "🔥 Fire Sale · Complete Production",
    name: "RED Flagship Full Bundle",
    market: "Market: AED 4,000",
    save: "SAVE 55%",
    price: 1800,
    unit: "per day · 9 hours · full set",
    desc: "This is NOT just a camera and lens. It's a complete film set delivered in a van: RED Cinema Master Kit + professional lighting studio + full audio recording rig — everything your crew needs to arrive and roll.",
    fire: true,
    included: [
      { text: "Everything in RED Cinema Master Kit", kind: "plus" },
      { text: "2× Aputure 600D Pro (Key + Fill)", kind: "plus" },
      { text: "2× Nanlite Pavotube 30C RGB Tube Light", kind: "plus" },
      { text: "1× Nanlite Pavotube 15C RGB Tube Light", kind: "plus" },
      { text: "3× C-Stand", kind: "plus" },
      { text: "Aputure Light Dome SE + Aputure Lantern 90", kind: "plus" },
      { text: "Zoom F8n Pro Field Recorder", kind: "plus" },
      { text: "Deity TC-1 Timecode Kit (3-piece)", kind: "plus" },
      { text: "Rode Boompole + Sennheiser Shotgun Mic", kind: "plus" },
      { text: "Proaim Audio Vest", kind: "plus" },
      { text: "Certified RED Camera Specialist (on-set)", kind: "plus" },
      { text: "Free Delivery (Dubai)", kind: "plus" },
    ],
  },
];

export const PKG_FOOTNOTE =
  "* Rental day = 9 hours. Overtime billed at 15% per additional hour. 20% early booking discount applies to equipment only (not RED Specialist fee) when booked 7+ days in advance and paid in full.";

// ---------- audiences ----------
export const AUDIENCES = [
  { icon: "📺", title: "Commercial Shoots", desc: "TVCs, product films, brand campaigns — shot on cinema-grade RED 6K." },
  { icon: "🎞️", title: "Brand Films", desc: "Corporate storytelling and branded content that demands visual authority." },
  { icon: "🎬", title: "Short Films", desc: "Indie and festival shorts with the cinematic look that separates good from great." },
  { icon: "📱", title: "Social Media Campaigns", desc: "High-end content for Instagram, TikTok and YouTube that stops the scroll." },
  { icon: "📰", title: "Documentary", desc: "Netflix-approved camera with broadcast-quality capture for any story." },
];

// ---------- ticker ----------
export const TICKER = [
  "FREE DELIVERY WITHIN DUBAI",
  "RED KOMODO X 6K · NETFLIX APPROVED",
  "CERTIFIED RED SPECIALIST ON SET",
  "BELOW MARKET RATE · SEE T&CS",
  "DZOFILM ARLES T1.4 CINE PRIME SET",
  "OTHER EMIRATES DELIVERY AVAILABLE",
  "20% OFF WHEN BOOKED 7 DAYS EARLY",
];

// ---------- kit manifest (flagship breakdown) ----------
export const KIT_CATEGORIES = [
  {
    label: "📷 Camera Body & Core",
    items: [
      { name: "RED Komodo X 6K", note: "Main Camera" },
      { name: "Tilta Full Camera Cage", note: "Modular Rig" },
      { name: 'RED Touch 7" LCD Monitor', note: "On-Camera" },
      { name: "RED I/O Module + Audio Module", note: "Connectivity" },
      { name: "2× CFexpress 1TB Cards", note: "Storage" },
      { name: "V-Mount Batteries (260Wh + 150Wh + 98Wh)", note: "Full Day Power" },
    ],
  },
  {
    label: "🔭 Lenses (DZOFILM Arles T1.4 Cine Prime Set)",
    items: [
      { name: "25mm T1.4", note: "Wide" },
      { name: "35mm T1.4", note: "Environmental" },
      { name: "50mm T1.4", note: "Standard" },
      { name: "75mm T1.4", note: "Portrait" },
      { name: "100mm T1.4", note: "Telephoto" },
      { name: "DZOFILM Marlin 1.6× Anamorphic Adapter", note: "PL→RF" },
      { name: "METABONES 0.71× Speed Booster", note: "PL→RF" },
      { name: "Tilta Mirage Motorized ND Filters", note: "Exposure Control" },
    ],
  },
  {
    label: "📹 Monitoring & Wireless",
    items: [
      { name: 'SmallHD Cine 7" Monitor', note: "1st AC / Focus" },
      { name: 'Feelworld 21.5" Director Monitor', note: "Director / Client" },
      { name: "Teradek Bolt 6 Zero-Delay Wireless TX", note: "" },
      { name: "Tilta Nucleus-M Wireless Follow Focus", note: "Remote Lens Control" },
    ],
  },
  {
    label: "🎤 Pro Audio Recording Bundle",
    items: [
      { name: "Zoom F8n Pro Field Recorder", note: "Multi-Track Recorder" },
      { name: "Deity TC-1 Timecode Kit (3-piece)", note: "Sync" },
      { name: "Rode Boompole + Sennheiser Shotgun", note: "Dialogue" },
      { name: "Proaim Audio Vest", note: "Sound Dept. Rig" },
    ],
  },
  {
    label: "💡 Advanced Lighting Bundle",
    items: [
      { name: "2× Aputure 600D Pro", note: "Key + Fill" },
      { name: "2× Nanlite Pavotube 30C RGB Tube Light", note: "" },
      { name: "1× Nanlite Pavotube 15C RGB Tube", note: "Accent" },
      { name: "Aputure Light Dome SE", note: "Softbox Modifier" },
      { name: "Aputure Lantern 90", note: "360° Modifier" },
      { name: "3× C-Stand", note: "Grip" },
    ],
  },
  {
    label: "🎬 Support & Grip",
    items: [
      { name: "Manfrotto Heavy-Duty Tripod", note: "Main Support" },
      { name: "Proaim Stabilizer Vest", note: "Handheld/Steadicam" },
      { name: "Proaim Production Cart (Magliner)", note: "On-Set Mobility" },
    ],
  },
  {
    label: "👨‍🎬 Human Element",
    items: [
      { name: "Certified RED Camera Specialist", note: "On-Set All Day" },
      { name: "Setup + Teardown Included", note: "" },
      { name: "Technical Support", note: "On-Call" },
    ],
  },
];

export const FIRE_SALE_QUOTE =
  'Think of it like renting a fully crewed studio van. Your director calls action — the gear is already set up, calibrated, and ready. This is what AED 1,800/day looks like when you add it all up individually: camera alone is AED 999, 5 cine lenses easily AED 800+, lights AED 850, audio AED 300, specialist AED 600. You\'re getting AED 3,500+ worth of value at fire sale pricing.';

// ---------- delivery ----------
export const DELIVERY = [
  { icon: "🚐", title: "Dubai — Single Location", rate: "FREE", free: true, desc: "Free delivery and pickup to any single location within Dubai. Equipment set up on arrival.", note: "Included with all packages" },
  { icon: "🔄", title: "Dubai — Multi-Location", rate: "+250 AED", desc: "Moving between multiple shoot locations within Dubai on the same day.", note: "Flat rate per additional move" },
  { icon: "🏙️", title: "Other Emirates — Single Location", rate: "+200 AED", desc: "Delivery and pickup to a single shoot location outside Dubai (Sharjah, Abu Dhabi, RAK, etc.).", note: "Added to rental invoice" },
  { icon: "📍", title: "Other Emirates — Multi-Location", rate: "+450 AED", desc: "Delivery to another emirate (AED 200) plus point-to-point moves (AED 250) for multi-location shoots.", note: "AED 200 + AED 250" },
];

// transport options for booking builder
export const TRANSPORT = [
  { id: "dxb-single", label: "🚐 Dubai — Single (Free)", cost: 0 },
  { id: "dxb-multi", label: "🔄 Dubai — Multi (+250)", cost: 250 },
  { id: "oe-single", label: "🏙️ Other Emirate — Single (+200)", cost: 200 },
  { id: "oe-multi", label: "📍 Other Emirate — Multi (+450)", cost: 450 },
];

// ---------- launch T&Cs ----------
export const LAUNCH_TCS = [
  { num: "1", title: "Instagram Tag", desc: "The Producer, DOP, and Director each take a short video of our RED bundle on set and tag @bigstory_red_rentals on Instagram." },
  { num: "2", title: "BTS Authorization", desc: "You authorize our camera assistant to shoot behind-the-scenes photos and videos of the production, including gear, team, and set moments." },
  { num: "3", title: "Footage Usage", desc: "You authorize BIG STORY Film Production to use BTS content and final footage (non-exclusive) across our marketing channels, portfolio, and social media for business promotion purposes." },
  { num: "4", title: "Follow Our Page", desc: "Follow @bigstory_red_rentals on Instagram." },
];

// ---------- how to book ----------
export const STEPS = [
  { num: "01", title: "Pick Your Dates", desc: "Use the booking form below. Add each shoot day, select a package and transport zone per day." },
  { num: "02", title: "Send via WhatsApp", desc: "Hit the WhatsApp button — your full order details are sent to us instantly. We confirm within a few hours." },
  { num: "03", title: "Bank Transfer", desc: "We send you our RAK Bank details. Transfer the amount to lock in your booking. No card fees." },
  { num: "04", title: "We Arrive Ready", desc: "Our specialist arrives at your location on time with the full kit loaded, assembled and calibrated." },
];

// ---------- specialist ----------
export const SPECIALIST_POINTS = [
  "→ RED Komodo X certified operator",
  "→ Full setup & teardown",
  "→ On-set technical support all day",
  "→ Focus pulling assistance",
];

// ---------- add-ons ----------
export const ADDONS = [
  { category: "Communications", name: "Hollyland 6-Person Intercom", price: 200, unit: "/ day", desc: "Hollyland 6-person noise-cancelling intercom headset — full duplex wireless communication across your entire crew." },
];

export const SPECIALIST_FEE = 900;
export const INTERCOM_FEE = 200;

// ---------- comparison tables ----------
export const COMP_SAME = {
  headers: ["", "BIG STORY ★", "Competitor A", "Competitor B"],
  rows: [
    { label: "CAMERA", cells: ["RED Komodo X 6K", "RED Komodo X 6K", "RED Komodo X 6K"] },
    { label: "PRICE / DAY", cells: ["AED 999", "AED 1,500 · Camera only · Quote only", "Contact required · Quote only · No online pricing"] },
    { label: "Full Package Price", cells: ["AED 1,800 · Complete production kit", "AED 2,500–4,000+ · Estimated, items billed separately", "AED 3,000+ · Camera + accessories only"] },
    { label: "Cine Prime Lens Set", cells: ["✓ DZOFILM Arles 5× T1.4", "✗ Add-on, billed extra", "~ Limited selection"] },
    { label: "Lighting Package", cells: ["✓ 2× Aputure 600D + Nanlite Pavotube", "✗ Separate rental", "✗ Separate rental"] },
    { label: "Pro Audio Bundle", cells: ["✓ Zoom F8n Pro + Deity TC-1 + Sennheiser", "✗ Separate rental", "✗"] },
    { label: "Certified RED Specialist", cells: ["✓ On-set, full day", "~ Available at extra cost", "✗ Equipment only"] },
    { label: "Free Delivery (Dubai)", cells: ["✓ Dedicated transport van", "~ Pickup or paid delivery", "~ Depends on location"] },
    { label: "Director Monitor (21.5\")", cells: ["✓", "✗", "✗"] },
    { label: "Wireless Follow Focus", cells: ["✓ Tilta Nucleus-M", "~ Add-on", "✗"] },
    { label: "Online Transparent Pricing", cells: ["✓", "✗ Quote only", "✗ Quote only"] },
  ],
};

export const COMP_DIFF = {
  headers: ["", "BIG STORY · RED Komodo X", "Sony FX3 (Competitor)", "Sony FX6 (Competitor)", "Blackmagic 6K Pro (Competitor)"],
  rows: [
    { label: "Daily Rate (Camera Only)", cells: ["AED 999 incl. specialist + delivery", "AED 400 body only · Dubai market", "AED 500–1,500 body only · varies by vendor", "AED 300–500 body only"] },
    { label: "Sensor", cells: ["6K Super35 Global Shutter", "4K Full Frame Rolling Shutter", "4K Full Frame Rolling Shutter", "6K Super35 Rolling Shutter"] },
    { label: "Dynamic Range", cells: ["16+ stops", "15 stops", "15 stops", "13 stops"] },
    { label: "Netflix / Broadcast Approved", cells: ["✓ Netflix Approved", "Limited use", "✓ Netflix Approved", "✗"] },
    { label: "RAW Recording", cells: ["✓ REDCODE RAW", "External RAW only", "External RAW only", "✓ BRAW"] },
    { label: "Color Science", cells: ["RED IPP2 — industry gold standard", "Sony S-Cinetone / S-Log3", "Sony S-Cinetone / S-Log3", "Blackmagic Film"] },
    { label: "Cine Prime Lenses Included", cells: ["✓ DZOFILM Arles 5-lens set (with bundle)", "✗", "✗", "✗"] },
    { label: "Lighting Package", cells: ["✓ 2× Aputure 600D Pro + Nanlite Pavotube (with bundle)", "✗", "✗", "✗"] },
    { label: "Camera Specialist On Set", cells: ["✓ Included", "✗", "✗", "✗"] },
    { label: "Ideal For", cells: ["TVCs, branded content, short films, music videos, corporate premium", "Run-and-gun, solo travel, B-cam", "Documentary, ENG, corporate", "Indie film, low budget narrative"] },
    { label: "VERDICT", cells: ["At AED 999, you get cinema-grade quality that competitors charge AED 2,000–4,000+ to assemble separately.", "Cheaper body but missing the cinematic credibility and delivery quality. Add lenses and you're at AED 800+.", "Solid camera but priced comparably without the bundled value.", "Value option but limited professional prestige and no in-house support."] },
  ],
};

export const COMP_NOTE =
  "* Competitor pricing benchmarked against publicly available UAE rental market listings. Prices are per-day body rates, subject to change. BIG STORY flagship bundle pricing includes all listed components — no hidden add-ons.";

// ---------- demo ----------
export const DEMO_FEATURES = [
  { num: "1", title: "Try Before You Rent", desc: "Get familiar with the RED Komodo X rig before committing to a full rental day." },
  { num: "2", title: "Expert Guidance", desc: "Our RED specialist walks you through setup, menu, and key features — DOPs, directors, and operators all welcome." },
  { num: "3", title: "We Come to You", desc: "Our team brings the full rig to your studio or location. Dubai only. Sessions run 45 min – 2 hours." },
];

// ---------- contact cards ----------
export const CONTACT_CARDS = [
  { icon: "📱", kind: "WhatsApp · Fastest Response", value: CONTACT.phoneDisplay, sub: "Typically reply within 1 hour · 8am–10pm" },
  { icon: "✉", kind: "Email", value: CONTACT.email, sub: "For rental agreements, invoices and longer enquiries" },
  { icon: "📸", kind: "Instagram", value: "@" + CONTACT.instagram, sub: "Follow for BTS and on-set content" },
  { icon: "📍", kind: "Based In", value: "Dubai, UAE", sub: "Free delivery within Dubai · Other emirates available" },
];

// ---------- agreements ----------
export const AGREEMENTS = [
  { icon: "📋", title: "Daily Delivery Handover Report", fname: "BIG_STORY_Daily_Delivery_Handover_Report", href: "/rental-agreements/delivery-handover", desc: "Completed on arrival at your location. Documents equipment condition, items delivered, and confirms handover between our specialist and your production team." },
  { icon: "📄", title: "Post-Rental Return Report", fname: "BIG_STORY_Daily_Post_Rental_Return_Report", href: "/rental-agreements/post-rental-return", desc: "Completed at end of shoot day. Documents equipment return condition, confirms all items returned, and records any issues for our records before the kit is packed into the van." },
];
