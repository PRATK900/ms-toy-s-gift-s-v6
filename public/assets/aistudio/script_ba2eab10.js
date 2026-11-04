/* ==========================================================================
   M.S. TOYS & GIFTS — INTERACTIVE CATALOGUE, MOTION SYSTEM & STORE LOGIC
   Preserves existing SHOP settings & WhatsApp flow while scaling to 4,000+ SKUs
   ========================================================================== */

/* =====================================================================
   SHOP SETTINGS: Preserved & Extended for 3 Physical Stores in Ahmedabad
   ===================================================================== */
const SHOP = {
  name: "M.S. Toys & Gifts",
  city: "Ahmedabad, Gujarat, India",
  whatsapp: "",
  phone: "+91 79 2658 4200",
  address: "Shop 1 (Gifts & Décor) • Shop 2 (Toy Wonderland) • Shop 3 (Grand Superstore & Stationery), Ahmedabad, Gujarat",
  hours: "Mon – Sun: 10:00 AM – 9:30 PM",
  mapLink: "https://maps.google.com/?q=Ahmedabad+Gujarat+India",
  mapEmbed: "",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  since: "2012"
};

/* Three Physical Retail Stores in Ahmedabad (Section 7) */
const STORES = [
  {
    id: "shop1",
    code: "SHOP 1",
    name: "M.S. Gifts & Décor Studio",
    focus: "Gifts, home décor and office décor",
    description: "Curated luxury gift hampers, keepsakes, tabletop accents, artisanal lamps, wall art, and executive office décor.",
    timings: "10:30 AM – 9:30 PM (Open All Days)",
    address: "Shop 1, Navrangpura High Street Plaza, Near CG Road, Ahmedabad, Gujarat 380009 (Placeholder)",
    phone: "+91 79 2658 4201",
    mapUrl: "https://maps.google.com/?q=CG+Road+Ahmedabad+Gujarat",
    image: "images/gift-inspiration.webp"
  },
  {
    id: "shop2",
    code: "SHOP 2",
    name: "M.S. Toy Wonderland",
    focus: "Toys for all age groups",
    description: "Dedicated play destination featuring Montessori wooden toys, RC cars, plush companions, baby gear, and family board games.",
    timings: "10:00 AM – 9:30 PM (Open All Days)",
    address: "Shop 2, Prahlad Nagar Garden Arcade, Satellite, Ahmedabad, Gujarat 380015 (Placeholder)",
    phone: "+91 79 2658 4202",
    mapUrl: "https://maps.google.com/?q=Prahlad+Nagar+Ahmedabad+Gujarat",
    image: "images/hero-showcase.webp"
  },
  {
    id: "shop3",
    code: "SHOP 3",
    name: "M.S. Grand Superstore",
    focus: "Combination of Shop 1 and Shop 2, plus stationery",
    description: "Our flagship family concept store uniting toys for all ages, festive gifting, home décor, fine stationery, and school supplies.",
    timings: "10:00 AM – 10:00 PM (Open All Days)",
    address: "Shop 3, Sindhu Bhavan Boulevard, Bodakdev, Ahmedabad, Gujarat 380054 (Placeholder)",
    phone: "+91 79 2658 4203",
    mapUrl: "https://maps.google.com/?q=Bodakdev+Ahmedabad+Gujarat",
    image: "images/store-interior.webp"
  }
];

/* 8 Core Categories (Section 3) */
const CATEGORIES = [
  { id: "Toys", title: "Toys", desc: "Action play sets, die-cast vehicles, board games & outdoor fun.", icon: "#vec-car", accent: "#E9787B", tint: "#FCEEEF", count: "850+ items" },
  { id: "Gift Items", title: "Gift Items", desc: "Curated hampers, keepsakes & wrapped presents for every milestone.", icon: "#vec-gift", accent: "#F2B544", tint: "#fdf3dc", count: "620+ items" },
  { id: "Soft Toys", title: "Soft Toys", desc: "Heirloom plush teddies, velvet bunnies & huggable companions.", icon: "#vec-teddy", accent: "#E9787B", tint: "#FCEEEF", count: "480+ items" },
  { id: "Baby Products", title: "Baby Products", desc: "Safe teethers, organic rattles, crib mobiles & newborn essentials.", icon: "#vec-baby", accent: "#69B6D6", tint: "#EAF5FA", count: "410+ items" },
  { id: "Educational Toys", title: "Educational Toys", desc: "Montessori wooden blocks, STEM kits, robotics & brain puzzles.", icon: "#vec-puzzle", accent: "#18365B", tint: "#EAF5FA", count: "540+ items" },
  { id: "Birthday Decorations", title: "Birthday Decorations", desc: "Pastel balloon garlands, foil banners, cake toppers & party kits.", icon: "#vec-balloon", accent: "#F2B544", tint: "#fdf3dc", count: "390+ items" },
  { id: "Stationery & School Supplies", title: "Stationery & School Supplies", desc: "Fountain pens, art sketchbooks, ergonomic backpacks & geometry sets.", icon: "#vec-pencil", accent: "#69B6D6", tint: "#EAF5FA", count: "510+ items" },
  { id: "Home Decoration", title: "Home Decoration", desc: "Ceramic vases, warm ambient lamps, desk sculptures & wall accents.", icon: "#vec-home", accent: "#E9787B", tint: "#FCEEEF", count: "350+ items" }
];

/* Initial Curated Catalogue Seed (Supports all required fields + Store-specific availability) */
let CATALOGUE_DB = [
  {
    id: "MS-1001",
    name: "Heirloom Pastel Wooden Architecture Blocks (64 Pcs)",
    category: "Educational Toys",
    subcategory: "Wooden & Montessori",
    description: "Hand-sanded beechwood architectural arches, columns, and geometric blocks finished in child-safe pastel coral, marigold, and sky blue water-based paints.",
    image: "images/product-blocks.webp",
    icon: "#vec-puzzle",
    brand: "M.S. Atelier Woodworks",
    stores: ["shop2", "shop3"],
    price: "₹1,850",
    featured: true,
    newArrival: true,
    bg: "#EAF5FA"
  },
  {
    id: "MS-1002",
    name: "Artisan Cream & Caramel Plush Teddy with Coral Bow",
    category: "Soft Toys",
    subcategory: "Plush Companions",
    description: "Ultra-soft hypoallergenic plush teddy bear crafted with recycled cloud-fill stuffing and a hand-knitted soft coral bow tie.",
    image: "images/product-teddy.webp",
    icon: "#vec-teddy",
    brand: "CuddleCraft Studio",
    stores: ["shop2", "shop3"],
    price: "₹1,290",
    featured: true,
    newArrival: false,
    bg: "#FCEEEF"
  },
  {
    id: "MS-1003",
    name: "Royal Celebration Keepsake Gift Hamper Box",
    category: "Gift Items",
    subcategory: "Luxury Hampers",
    description: "Midnight navy & coral magnetic keepsake box tied with golden marigold satin ribbon, including an embossed journal, ceramic mug, soy candle, and festive treats.",
    image: "images/product-hamper.webp",
    icon: "#vec-gift",
    brand: "M.S. Signature Gifting",
    stores: ["shop1", "shop3"],
    price: "₹2,450",
    featured: true,
    newArrival: true,
    bg: "#fdf3dc"
  },
  {
    id: "MS-1004",
    name: "Pastel Macaron & Gold Foil Birthday Balloon Arch Kit",
    category: "Birthday Decorations",
    subcategory: "Party Styling",
    description: "Complete 85-piece organic balloon garland kit in warm ivory, soft coral, brushed gold, and sky blue with fabric bunting banner.",
    image: "",
    icon: "#vec-balloon",
    brand: "FestiveJoy Co.",
    stores: ["shop1", "shop2", "shop3"],
    price: "₹790",
    featured: true,
    newArrival: false,
    bg: "#FCEEEF"
  },
  {
    id: "MS-1005",
    name: "Scholar's Botanical Stationery & Watercolour Case",
    category: "Stationery & School Supplies",
    subcategory: "Art & School Kits",
    description: "Hardbound linen art case containing 24 dual-tip brush markers, brass fountain pen, pastel highlighters, and 180gsm sketchbook.",
    image: "",
    icon: "#vec-pencil",
    brand: "PaperLoom India",
    stores: ["shop3"],
    price: "₹1,150",
    featured: true,
    newArrival: true,
    bg: "#fdf3dc"
  },
  {
    id: "MS-1006",
    name: "Newborn Organic Beechwood Sensory Gym & Rattle Set",
    category: "Baby Products",
    subcategory: "Infant Gear",
    description: "BPA-free food-grade silicone and natural maple wood sensory rings, crochet bunny rattle, and soothing crib mobile.",
    image: "",
    icon: "#vec-baby",
    brand: "LittleBloom Baby",
    stores: ["shop2", "shop3"],
    price: "₹1,640",
    featured: true,
    newArrival: true,
    bg: "#EAF5FA"
  },
  {
    id: "MS-1007",
    name: "Vintage Grand Prix Die-Cast Pullback Roadster",
    category: "Toys",
    subcategory: "Vehicles & RC",
    description: "1:24 scale metal alloy collector roadster with opening doors, rubber tires, and smooth pullback spring engine.",
    image: "images/hero-showcase.webp",
    icon: "#vec-car",
    brand: "Velocity Classics",
    stores: ["shop2"],
    price: "₹980",
    featured: false,
    newArrival: true,
    bg: "#FCEEEF"
  },
  {
    id: "MS-1008",
    name: "Nordic Fluted Ceramic Table Lamp & Brass Planter",
    category: "Home Decoration",
    subcategory: "Tabletop & Lamps",
    description: "Warm pleated linen shade lamp paired with a brushed brass desk planter, ideal for housewarmings and executive offices.",
    image: "images/store-interior.webp",
    icon: "#vec-home",
    brand: "Aura Living Décor",
    stores: ["shop1", "shop3"],
    price: "₹2,190",
    featured: true,
    newArrival: true,
    bg: "#fdf3dc"
  },
  {
    id: "MS-1009",
    name: "Solar System 3D Mechanical Orrery STEM Kit",
    category: "Educational Toys",
    subcategory: "STEM & Puzzles",
    description: "Laser-cut wooden gear puzzle that builds a working planetary orrery, teaching gears, astronomy, and patience.",
    image: "",
    icon: "#vec-puzzle",
    brand: "MindSpark Labs",
    stores: ["shop2", "shop3"],
    price: "₹1,490",
    featured: false,
    newArrival: false,
    bg: "#EAF5FA"
  },
  {
    id: "MS-1010",
    name: "Executive Brass & Walnut Desk Organizer Suite",
    category: "Home Decoration",
    subcategory: "Office Décor",
    description: "Handcrafted walnut wood pen tray, perpetual calendar, and card stand for corporate gifting and study desks.",
    image: "",
    icon: "#vec-home",
    brand: "M.S. Signature Gifting",
    stores: ["shop1"],
    price: "₹1,750",
    featured: false,
    newArrival: false,
    bg: "#fdf3dc"
  },
  {
    id: "MS-1011",
    name: "Velvet Floppy-Ear Musical Nursery Bunny",
    category: "Soft Toys",
    subcategory: "Plush Companions",
    description: "Plays a gentle Brahms lullaby when the wooden star pull-ring is drawn; machine-washable outer plush shell.",
    image: "",
    icon: "#vec-teddy",
    brand: "CuddleCraft Studio",
    stores: ["shop2", "shop3"],
    price: "₹1,120",
    featured: false,
    newArrival: false,
    bg: "#FCEEEF"
  },
  {
    id: "MS-1012",
    name: "Ergonomic Orthopedic School Backpack (Astronaut Edition)",
    category: "Stationery & School Supplies",
    subcategory: "Backpacks & Bags",
    description: "Water-resistant lightweight school bag with breathable padded back support, reflective safety strips, and matching pencil pouch.",
    image: "",
    icon: "#vec-pencil",
    brand: "ScholarCarry",
    stores: ["shop3"],
    price: "₹1,890",
    featured: false,
    newArrival: false,
    bg: "#EAF5FA"
  },
  {
    id: "MS-1013",
    name: "Festive Diwali & Wedding Artisanal Dry-Fruit Trunk",
    category: "Gift Items",
    subcategory: "Festival Gifting",
    description: "Hand-illustrated heritage tin trunk with 4 brass-lid glass jars, scented potpourri, and custom greeting card.",
    image: "images/gift-inspiration.webp",
    icon: "#vec-gift",
    brand: "M.S. Signature Gifting",
    stores: ["shop1", "shop3"],
    price: "₹2,850",
    featured: false,
    newArrival: false,
    bg: "#fdf3dc"
  },
  {
    id: "MS-1014",
    name: "Magnetic Tiles Clear Pastel Castle Set (100 Pcs)",
    category: "Toys",
    subcategory: "Building & Construction",
    description: "High-clarity ultrasonic-welded magnetic building tiles in soft pastel hues for 3D castles, rockets, and light-table play.",
    image: "",
    icon: "#vec-car",
    brand: "MagnaPlay",
    stores: ["shop2", "shop3"],
    price: "₹2,690",
    featured: false,
    newArrival: false,
    bg: "#EAF5FA"
  },
  {
    id: "MS-1015",
    name: "Organic Muslin Swaddle & Wooden Milestone Cards Box",
    category: "Baby Products",
    subcategory: "Baby Shower Gifts",
    description: "Set of 3 breathable bamboo-cotton swaddle wraps with 12 laser-engraved wooden monthly milestone discs.",
    image: "",
    icon: "#vec-baby",
    brand: "LittleBloom Baby",
    stores: ["shop1", "shop2", "shop3"],
    price: "₹1,550",
    featured: false,
    newArrival: false,
    bg: "#FCEEEF"
  },
  {
    id: "MS-1016",
    name: "LED Neon 'Happy Birthday' Warm White Acrylic Sign",
    category: "Birthday Decorations",
    subcategory: "Party Styling",
    description: "Reusable USB/dimmable warm white LED script backdrop sign for home birthday setups and photo booths.",
    image: "",
    icon: "#vec-balloon",
    brand: "FestiveJoy Co.",
    stores: ["shop1", "shop3"],
    price: "₹1,390",
    featured: false,
    newArrival: false,
    bg: "#fdf3dc"
  }
];

/* =====================================================================
   UTILITIES & WHATSAPP LINK BUILDER (PRESERVING EXISTING FUNCTIONALITY)
   ===================================================================== */
const digits = (s) => String(s || "").replace(/\D/g, "");
const hasWhatsApp = () => digits(SHOP.whatsapp).length >= 10;

function getWhatsAppUrl(message) {
  const msg = message || `Hi ${SHOP.name}! I'd like to enquire about your products.`;
  if (hasWhatsApp()) {
    return `https://wa.me/${digits(SHOP.whatsapp)}?text=${encodeURIComponent(msg)}`;
  }
  return "#stores";
}

function bindWhatsAppLinks(root = document) {
  root.querySelectorAll("[data-wa]").forEach((link) => {
    const message = link.dataset.msg || `Hi ${SHOP.name}!`;
    if (hasWhatsApp()) {
      link.href = getWhatsAppUrl(message);
      link.target = "_blank";
      link.rel = "noopener";
    } else {
      link.href = "#stores";
      link.removeAttribute("target");
    }
  });
  const waFloat = document.getElementById("wa-float");
  if (waFloat) {
    waFloat.hidden = !hasWhatsApp();
  }
}

function showToast(text) {
  const toast = document.getElementById("app-toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 3400);
}

function storeLabel(storeId) {
  if (storeId === "shop1") return "Shop 1 (Gifts & Décor)";
  if (storeId === "shop2") return "Shop 2 (Toys)";
  if (storeId === "shop3") return "Shop 3 (Superstore)";
  return storeId;
}

/* =====================================================================
   10. INITIAL BRAND LOGO REVEAL LOADER
   ===================================================================== */
function initBrandLoader() {
  const loader = document.getElementById("brand-loader");
  const skipBtn = document.getElementById("loader-skip-btn");
  if (!loader) return;

  const hideLoader = () => {
    loader.classList.add("is-hidden");
    try {
      sessionStorage.setItem("ms_logo_played", "1");
    } catch (e) {}
  };

  let alreadyPlayed = false;
  try {
    alreadyPlayed = sessionStorage.getItem("ms_logo_played") === "1";
  } catch (e) {}

  if (alreadyPlayed) {
    hideLoader();
  } else {
    setTimeout(hideLoader, 1450);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", hideLoader);
  }

  const replayBtn = document.getElementById("replay-logo-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      loader.classList.remove("is-hidden");
      const svg = loader.querySelector("svg");
      if (svg) {
        const clone = svg.cloneNode(true);
        svg.parentNode.replaceChild(clone, svg);
      }
      setTimeout(hideLoader, 1650);
    });
  }
}

/* =====================================================================
   4. ADVANCED TEXT ANIMATIONS (WORD-BY-WORD & CHARACTER SPLITTING)
   ===================================================================== */
function initTextAnimations() {
  // B. Word-by-word reveal
  document.querySelectorAll("[data-word-reveal]").forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = "1";
    el.classList.add("word-reveal-wrap");
    const words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    words.forEach((w, idx) => {
      const span = document.createElement("span");
      span.className = "word-unit";
      span.style.setProperty("--word-idx", idx);
      span.textContent = w;
      el.appendChild(span);
      if (idx < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });
  });

  // C. Character reveal (short promotional badges only)
  document.querySelectorAll("[data-char-reveal]").forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = "1";
    el.classList.add("char-reveal-wrap");
    const chars = Array.from(el.textContent.trim());
    el.textContent = "";
    chars.forEach((ch, idx) => {
      const span = document.createElement("span");
      span.className = "char-unit";
      span.style.setProperty("--char-idx", idx);
      span.textContent = ch === " " ? "\u00A0" : ch;
      el.appendChild(span);
    });
  });
}

/* =====================================================================
   RENDER SECTION 3: 8 PRODUCT CATEGORIES
   ===================================================================== */
function renderCategories() {
  const grid = document.getElementById("categories-grid");
  if (!grid) return;
  grid.innerHTML = "";

  CATEGORIES.forEach((cat, idx) => {
    const card = document.createElement("article");
    card.className = "cat-card reveal-up";
    card.style.setProperty("--delay", `${(idx % 4) * 65}ms`);
    card.style.setProperty("--cat-accent", cat.accent);
    card.style.setProperty("--cat-tint", cat.tint);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Browse ${cat.title}`);

    card.innerHTML = `
      <div class="cat-card-top">
        <span class="cat-icon-box" aria-hidden="true">
          <svg viewBox="0 0 48 48"><use href="${cat.icon}"/></svg>
        </span>
        <span class="cat-count-tag">${cat.count}</span>
      </div>
      <h3>${cat.title}</h3>
      <p>${cat.desc}</p>
      <div class="cat-card-footer">
        <span>Filter Catalogue →</span>
        <a class="cat-wa-mini" data-wa data-msg="Hi! I'm looking for ${cat.title} at M.S. Toys & Gifts." onclick="event.stopPropagation()">WhatsApp</a>
      </div>
    `;

    const selectCategory = () => {
      setCatalogueFilter({ category: cat.id });
      const catSec = document.getElementById("catalogue");
      if (catSec) catSec.scrollIntoView({ behavior: "smooth" });
    };

    card.addEventListener("click", selectCategory);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectCategory();
      }
    });

    grid.appendChild(card);
  });
}

/* =====================================================================
   PRODUCT CARD BUILDER (REUSABLE ACROSS SECTIONS)
   ===================================================================== */
function createProductCard(p, idx = 0, extraClass = "") {
  const card = document.createElement("article");
  card.className = `product-card card-shimmer reveal-up ${extraClass}`.trim();
  card.style.setProperty("--delay", `${(idx % 3) * 70}ms`);

  const storeBadges = (p.stores || ["shop3"])
    .map((s) => `<span class="stock-dot-pill">${storeLabel(s)}</span>`)
    .join("");

  const statusBadge = p.newArrival
    ? `<span class="badge-pill badge-new">New Arrival</span>`
    : p.featured
    ? `<span class="badge-pill badge-featured">Featured</span>`
    : `<span></span>`;

  card.innerHTML = `
    <div class="product-media img-hover-zoom img-light-sweep" style="--bg-tint:${p.bg || "#EAF5FA"}" data-open-id="${p.id}">
      <div class="product-badges">
        ${statusBadge}
        <span class="badge-pill badge-sku">${p.id}</span>
      </div>
      <svg class="art-svg" viewBox="0 0 48 48" aria-hidden="true">
        <use href="${p.icon || "#vec-gift"}"/>
      </svg>
      ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.remove()">` : ""}
    </div>
    <div class="product-body">
      <div class="product-meta-row">
        <span class="product-cat-label">${p.category}</span>
        <span>${p.brand || "M.S. Curated"}</span>
      </div>
      <h3 class="product-title" data-open-id="${p.id}">${p.name}</h3>
      <p class="product-desc">${p.description}</p>
      <div class="store-stock-pills" aria-label="Store availability">
        ${storeBadges}
      </div>
      <div class="product-footer">
        <span class="product-price">${p.price || "Ask for price"}</span>
        <div class="product-actions">
          <button type="button" class="btn btn-outline btn-sm" data-open-id="${p.id}">Details</button>
          <a class="btn btn-wa btn-sm" data-wa data-msg="Hi! I would like to check price & stock for ${p.name} (ID: ${p.id}).">
            <svg class="btn-icon-wa" viewBox="0 0 24 24"><use href="#icon-wa"/></svg>
            Ask
          </a>
        </div>
      </div>
    </div>
  `;

  card.querySelectorAll("[data-open-id]").forEach((el) => {
    el.addEventListener("click", () => openProductModal(p.id));
  });

  return card;
}

/* =====================================================================
   SECTION 4 & 5: FEATURED SLIDESHOW & NEW ARRIVALS GRID
   ===================================================================== */
function renderFeaturedAndNewArrivals() {
  const featuredTrack = document.getElementById("featured-slideshow");
  const newGrid = document.getElementById("new-arrivals-grid");

  if (featuredTrack) {
    featuredTrack.innerHTML = "";
    const featuredItems = CATALOGUE_DB.filter((p) => p.featured).slice(0, 8);
    featuredItems.forEach((p, i) => {
      featuredTrack.appendChild(createProductCard(p, i, "slide-card"));
    });
  }

  if (newGrid) {
    newGrid.innerHTML = "";
    const newItems = CATALOGUE_DB.filter((p) => p.newArrival).slice(0, 6);
    newItems.forEach((p, i) => {
      newGrid.appendChild(createProductCard(p, i));
    });
  }

  bindWhatsAppLinks();
  observeReveals();
}

function initHorizontalCarousel() {
  const track = document.getElementById("featured-slideshow");
  const prevBtn = document.getElementById("slide-prev-btn");
  const nextBtn = document.getElementById("slide-next-btn");
  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = () => Math.max(track.clientWidth * 0.75, 300);

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
}

/* =====================================================================
   SECTION 12: SCALABLE 4,000+ PRODUCT CATALOGUE ENGINE
   ===================================================================== */
const catalogueState = {
  search: "",
  category: "ALL",
  subcategory: "ALL",
  store: "ALL",
  tagFilter: "ALL", // ALL | FEATURED | NEW
  page: 1,
  perPage: 6
};

function getFilteredProducts() {
  const q = catalogueState.search.trim().toLowerCase();
  return CATALOGUE_DB.filter((item) => {
    if (catalogueState.category !== "ALL" && item.category !== catalogueState.category) return false;
    if (catalogueState.subcategory !== "ALL" && item.subcategory !== catalogueState.subcategory) return false;
    if (catalogueState.store !== "ALL" && !(item.stores || []).includes(catalogueState.store)) return false;
    if (catalogueState.tagFilter === "FEATURED" && !item.featured) return false;
    if (catalogueState.tagFilter === "NEW" && !item.newArrival) return false;
    if (q) {
      const hay = `${item.id} ${item.name} ${item.category} ${item.subcategory} ${item.brand} ${item.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function populateSubcategorySelect() {
  const subSelect = document.getElementById("cat-subcategory-select");
  if (!subSelect) return;
  const subs = new Set();
  CATALOGUE_DB.forEach((p) => {
    if (catalogueState.category === "ALL" || p.category === catalogueState.category) {
      if (p.subcategory) subs.add(p.subcategory);
    }
  });
  const current = catalogueState.subcategory;
  subSelect.innerHTML = `<option value="ALL">All Subcategories (${subs.size})</option>`;
  Array.from(subs).sort().forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    if (s === current) opt.selected = true;
    subSelect.appendChild(opt);
  });
}

function renderCatalogue() {
  const grid = document.getElementById("catalogue-grid");
  const statusEl = document.getElementById("catalogue-status-text");
  const pageContainer = document.getElementById("catalogue-page-numbers");
  const prevPageBtn = document.getElementById("cat-prev-page");
  const nextPageBtn = document.getElementById("cat-next-page");
  const totalBadge = document.getElementById("total-db-count");

  if (!grid) return;

  if (totalBadge) {
    totalBadge.textContent = `${CATALOGUE_DB.length.toLocaleString()} Products Indexed`;
  }

  const filtered = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(filtered.length / catalogueState.perPage));
  if (catalogueState.page > totalPages) catalogueState.page = totalPages;

  const startIdx = (catalogueState.page - 1) * catalogueState.perPage;
  const pageItems = filtered.slice(startIdx, startIdx + catalogueState.perPage);

  grid.innerHTML = "";
  if (pageItems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--ivory); border-radius: 16px;">
        <h3>No matching products found</h3>
        <p style="margin: 8px auto 18px; color: var(--slate-muted);">Try clearing your search filter or ask our team on WhatsApp—we stock over 4,000 items across our 3 Ahmedabad stores.</p>
        <button type="button" class="btn btn-coral btn-sm" id="reset-filters-empty">Reset All Filters</button>
      </div>
    `;
    const resetEmpty = document.getElementById("reset-filters-empty");
    if (resetEmpty) {
      resetEmpty.addEventListener("click", () => setCatalogueFilter({ search: "", category: "ALL", subcategory: "ALL", store: "ALL", tagFilter: "ALL", page: 1 }));
    }
  } else {
    pageItems.forEach((item, idx) => {
      grid.appendChild(createProductCard(item, idx));
    });
  }

  if (statusEl) {
    const from = filtered.length ? startIdx + 1 : 0;
    const to = Math.min(startIdx + catalogueState.perPage, filtered.length);
    statusEl.textContent = `Showing ${from}–${to} of ${filtered.length.toLocaleString()} matching products (Page ${catalogueState.page} of ${totalPages})`;
  }

  if (prevPageBtn) prevPageBtn.disabled = catalogueState.page <= 1;
  if (nextPageBtn) nextPageBtn.disabled = catalogueState.page >= totalPages;

  if (pageContainer) {
    pageContainer.innerHTML = "";
    const maxButtons = 5;
    let startP = Math.max(1, catalogueState.page - 2);
    let endP = Math.min(totalPages, startP + maxButtons - 1);
    if (endP - startP < maxButtons - 1) {
      startP = Math.max(1, endP - maxButtons + 1);
    }
    for (let p = startP; p <= endP; p++) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `page-btn ${p === catalogueState.page ? "active" : ""}`;
      btn.textContent = p;
      btn.addEventListener("click", () => {
        catalogueState.page = p;
        renderCatalogue();
      });
      pageContainer.appendChild(btn);
    }
  }

  bindWhatsAppLinks(grid);
  observeReveals();
}

function setCatalogueFilter(updates) {
  Object.assign(catalogueState, updates);
  if (!("page" in updates)) catalogueState.page = 1;

  // Sync UI controls
  const searchInput = document.getElementById("cat-search-input");
  if (searchInput && searchInput.value !== catalogueState.search) {
    searchInput.value = catalogueState.search;
  }

  const storeSelect = document.getElementById("cat-store-select");
  if (storeSelect) storeSelect.value = catalogueState.store;

  document.querySelectorAll("[data-cat-pill]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.catPill === catalogueState.category);
  });

  document.querySelectorAll("[data-tag-pill]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tagPill === catalogueState.tagFilter);
  });

  populateSubcategorySelect();
  renderCatalogue();
}

function initCatalogueControls() {
  const pillBar = document.getElementById("cat-category-pills");
  if (pillBar) {
    pillBar.innerHTML = `<button type="button" class="filter-pill active" data-cat-pill="ALL">All Categories</button>`;
    CATEGORIES.forEach((c) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "filter-pill";
      b.dataset.catPill = c.id;
      b.textContent = c.title;
      pillBar.appendChild(b);
    });
    pillBar.querySelectorAll("[data-cat-pill]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCatalogueFilter({ category: btn.dataset.catPill, subcategory: "ALL" });
      });
    });
  }

  document.querySelectorAll("[data-tag-pill]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCatalogueFilter({ tagFilter: btn.dataset.tagPill });
    });
  });

  const searchInput = document.getElementById("cat-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      setCatalogueFilter({ search: e.target.value });
    });
  }

  const subSelect = document.getElementById("cat-subcategory-select");
  if (subSelect) {
    subSelect.addEventListener("change", (e) => {
      setCatalogueFilter({ subcategory: e.target.value });
    });
  }

  const storeSelect = document.getElementById("cat-store-select");
  if (storeSelect) {
    storeSelect.addEventListener("change", (e) => {
      setCatalogueFilter({ store: e.target.value });
    });
  }

  const prevBtn = document.getElementById("cat-prev-page");
  const nextBtn = document.getElementById("cat-next-page");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (catalogueState.page > 1) {
        catalogueState.page--;
        renderCatalogue();
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      catalogueState.page++;
      renderCatalogue();
    });
  }

  populateSubcategorySelect();
  renderCatalogue();
}

/* =====================================================================
   BULK CSV IMPORT & 4,200+ SKU SCALE GENERATOR (SECTION 12 REQUIREMENT)
   ===================================================================== */
function simulate4200Catalogue() {
  if (CATALOGUE_DB.length > 1000) {
    showToast(`4,200+ SKU dataset is already active (${CATALOGUE_DB.length.toLocaleString()} items)!`);
    return;
  }

  const adjectives = ["Royal", "Pastel", "Artisan", "Montessori", "Deluxe", "Heirloom", "Classic", "Interactive", "Nordic", "Festive", "Junior", "Creative"];
  const nounsByCat = {
    "Toys": ["Die-Cast Racing Car", "Remote Control Stunt Buggy", "Family Strategy Board Game", "Marble Run Tower", "Action Hero Playset"],
    "Gift Items": ["Celebration Hamper Box", "Engraved Keepsake Frame", "Festive Dry-Fruit Trunk", "Luxury Scented Candle Set", " Brass Tabletop Clock"],
    "Soft Toys": ["Velvet Hug Teddy Bear", "Plush Woodland Bunny", "Cuddle Elephant Pillow", "Musical Crib Lamb", "Giant Pastel Unicorn"],
    "Baby Products": ["Organic Beechwood Teether", "Bamboo Muslin Swaddle Pack", "Sensory Play Gym Mat", "Soothing Nursery Mobile", "Silicone Stacking Cups"],
    "Educational Toys": ["Wooden Architecture Blocks", "STEM Solar Robotics Kit", "Magnetic Castle Tiles", "Wooden Abacus & Math Frame", "Microscope Explorer Set"],
    "Birthday Decorations": ["Macaron Balloon Garland Kit", "Gold Foil Happy Birthday Banner", "LED Acrylic Party Sign", "Pastel Cupcake Stand", "Confetti Party Popper Pack"],
    "Stationery & School Supplies": ["Dual-Tip Watercolour Brush Pens", "Orthopedic School Backpack", "Brass Fountain Pen & Journal", "Geometric Math Tin Set", "Pastel Desk Highlighter Kit"],
    "Home Decoration": ["Fluted Ceramic Table Lamp", "Brushed Brass Indoor Planter", "Minimalist Abstract Bookends", "Handwoven Macrame Wall Art", "Nordic Ceramic Vase Trio"]
  };
  const brands = ["M.S. Atelier", "CuddleCraft", "MindSpark", "PaperLoom", "LittleBloom", "Aura Living", "FestiveJoy"];
  const storeCombos = [
    ["shop1"],
    ["shop2"],
    ["shop3"],
    ["shop1", "shop3"],
    ["shop2", "shop3"],
    ["shop1", "shop2", "shop3"]
  ];
  const bgs = ["#EAF5FA", "#FCEEEF", "#fdf3dc"];

  const startLen = CATALOGUE_DB.length;
  for (let i = startLen + 1; i <= 4200; i++) {
    const catObj = CATEGORIES[i % CATEGORIES.length];
    const nouns = nounsByCat[catObj.id];
    const adj = adjectives[i % adjectives.length];
    const noun = nouns[i % nouns.length];
    const stores = storeCombos[i % storeCombos.length];
    const priceVal = 350 + ((i * 37) % 3200);

    CATALOGUE_DB.push({
      id: `MS-${1000 + i}`,
      name: `${adj} ${noun} — Series ${ (i % 40) + 1 }`,
      category: catObj.id,
      subcategory: noun.split(" ").slice(-2).join(" "),
      description: `Premium ${catObj.title.toLowerCase()} selection curated for M.S. Toys & Gifts in Ahmedabad. Stocked at ${stores.map(storeLabel).join(", ")}.`,
      image: "",
      icon: catObj.icon,
      brand: brands[i % brands.length],
      stores: stores,
      price: `₹${priceVal.toLocaleString("en-IN")}`,
      featured: i % 85 === 0,
      newArrival: i % 60 === 0,
      bg: bgs[i % bgs.length]
    });
  }

  populateSubcategorySelect();
  renderCatalogue();
  showToast(`Loaded 4,200 Products across 3 Ahmedabad stores! Browse or search instantaneously.`);
}

function parseCSVImport(csvText) {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return 0;

  const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
  let added = 0;

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",").map((c) => c.trim());
    if (cols.length < 3) continue;
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = cols[idx] || "";
    });

    const catMatch = CATEGORIES.find((c) => c.id.toLowerCase() === (row.category || "").toLowerCase()) || CATEGORIES[0];
    const storesRaw = (row.stores || "shop3").toLowerCase();
    const stores = ["shop1", "shop2", "shop3"].filter((s) => storesRaw.includes(s));

    CATALOGUE_DB.unshift({
      id: row.id || `MS-CSV-${Date.now().toString().slice(-4)}-${i}`,
      name: row.name || `Imported Item ${i}`,
      category: catMatch.id,
      subcategory: row.subcategory || "General Collection",
      description: row.description || "Imported via M.S. Toys & Gifts Bulk CSV Catalogue Manager.",
      image: row.image || "",
      icon: catMatch.icon,
      brand: row.brand || "M.S. Partner Brand",
      stores: stores.length ? stores : ["shop3"],
      price: row.price || "Ask for price",
      featured: String(row.featured).toLowerCase() === "true",
      newArrival: String(row.newarrival || "true").toLowerCase() === "true",
      bg: catMatch.tint
    });
    added++;
  }
  return added;
}

/* =====================================================================
   PRODUCT DETAIL MODAL & CSV MODAL HANDLERS
   ===================================================================== */
function openProductModal(productId) {
  const product = CATALOGUE_DB.find((p) => p.id === productId);
  const modal = document.getElementById("product-detail-modal");
  const content = document.getElementById("product-modal-content");
  if (!product || !modal || !content) return;

  const storeAvailabilityRows = STORES.map((st) => {
    const available = (product.stores || []).includes(st.id);
    return `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-radius:8px;background:${available ? "var(--light-blue)" : "var(--ivory)"};font-size:0.86rem;">
        <span><strong>${st.code}:</strong> ${st.name}</span>
        <span style="font-weight:700;color:${available ? "var(--wa-dark)" : "var(--slate-muted)"};">
          ${available ? "● In Stock" : "○ Order on Request"}
        </span>
      </div>
    `;
  }).join("");

  content.innerHTML = `
    <div class="modal-product-layout">
      <div class="product-media" style="border-radius:16px;--bg-tint:${product.bg || "#EAF5FA"};aspect-ratio:1/1;">
        <svg class="art-svg" viewBox="0 0 48 48" aria-hidden="true"><use href="${product.icon || "#vec-gift"}"/></svg>
        ${product.image ? `<img src="${product.image}" alt="${product.name}" onerror="this.remove()">` : ""}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;gap:8px;align-items:center;">
          <span class="badge-pill badge-sku">${product.id}</span>
          <span class="product-cat-label" style="font-size:0.85rem;">${product.category} • ${product.subcategory || "Curated"}</span>
        </div>
        <h3 style="font-size:1.5rem;">${product.name}</h3>
        <p style="font-size:0.94rem;color:var(--slate-muted);">Brand: <strong>${product.brand || "M.S. Curated"}</strong></p>
        <div style="font-family:var(--font-head);font-size:1.4rem;font-weight:700;color:var(--navy);">
          ${product.price || "Ask for price on WhatsApp"}
        </div>
        <p style="font-size:0.95rem;color:var(--slate);line-height:1.6;">${product.description}</p>
        <div style="margin-top:6px;">
          <strong style="font-size:0.84rem;text-transform:uppercase;letter-spacing:0.04em;color:var(--slate-muted);display:block;margin-bottom:8px;">
            Store-Specific Availability (Ahmedabad):
          </strong>
          <div style="display:grid;gap:6px;">
            ${storeAvailabilityRows}
          </div>
        </div>
        <div class="cta-row" style="margin-top:12px;">
          <a class="btn btn-wa" data-wa data-msg="Hi M.S. Toys & Gifts! I want to enquire about '${product.name}' (Product ID: ${product.id}).">
            <svg class="btn-icon-wa" viewBox="0 0 24 24"><use href="#icon-wa"/></svg>
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  bindWhatsAppLinks(content);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function initModals() {
  const productModal = document.getElementById("product-detail-modal");
  const csvModal = document.getElementById("csv-import-modal");

  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (productModal) {
        productModal.classList.remove("is-open");
        productModal.setAttribute("aria-hidden", "true");
      }
      if (csvModal) {
        csvModal.classList.remove("is-open");
        csvModal.setAttribute("aria-hidden", "true");
      }
    });
  });

  [productModal, csvModal].forEach((m) => {
    if (!m) return;
    m.addEventListener("click", (e) => {
      if (e.target === m) {
        m.classList.remove("is-open");
        m.setAttribute("aria-hidden", "true");
      }
    });
  });

  const openCsvBtn = document.getElementById("open-csv-modal-btn");
  if (openCsvBtn && csvModal) {
    openCsvBtn.addEventListener("click", () => {
      csvModal.classList.add("is-open");
      csvModal.setAttribute("aria-hidden", "false");
    });
  }

  const simBtn = document.getElementById("simulate-4000-btn");
  if (simBtn) {
    simBtn.addEventListener("click", simulate4200Catalogue);
  }

  const runCsvBtn = document.getElementById("run-csv-import-btn");
  const csvTextarea = document.getElementById("csv-paste-input");
  const csvFileInput = document.getElementById("csv-file-input");

  if (csvFileInput && csvTextarea) {
    csvFileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        csvTextarea.value = String(ev.target.result || "");
      };
      reader.readAsText(file);
    });
  }

  if (runCsvBtn && csvTextarea) {
    runCsvBtn.addEventListener("click", () => {
      const count = parseCSVImport(csvTextarea.value);
      if (count > 0) {
        populateSubcategorySelect();
        renderCatalogue();
        renderFeaturedAndNewArrivals();
        if (csvModal) csvModal.classList.remove("is-open");
        showToast(`Successfully imported ${count} product(s) into the live catalogue!`);
      } else {
        showToast("Please paste valid CSV rows (including header line) first.");
      }
    });
  }
}

/* =====================================================================
   SECTION 7 (HOMEPAGE): RENDER OUR THREE STORES IN AHMEDABAD
   ===================================================================== */
function renderStores() {
  const grid = document.getElementById("three-stores-grid");
  if (!grid) return;
  grid.innerHTML = "";

  STORES.forEach((st, idx) => {
    const card = document.createElement("article");
    card.className = "store-card reveal-up";
    card.style.setProperty("--delay", `${idx * 90}ms`);

    card.innerHTML = `
      <div class="store-photo img-hover-zoom img-light-sweep">
        <span class="store-number-badge">${st.code} • AHMEDABAD</span>
        <img src="${st.image}" alt="${st.name}" loading="lazy" onerror="this.remove()">
      </div>
      <div class="store-body">
        <span class="store-specialty-tag">${st.focus}</span>
        <h3>${st.name}</h3>
        <p style="font-size:0.92rem;color:var(--slate-muted);">${st.description}</p>
        <div class="store-info-list">
          <div class="store-info-row">
            <span class="store-info-icon" aria-hidden="true">📍</span>
            <span>${st.address}</span>
          </div>
          <div class="store-info-row">
            <span class="store-info-icon" aria-hidden="true">🕘</span>
            <span>${st.timings}</span>
          </div>
          <div class="store-info-row">
            <span class="store-info-icon" aria-hidden="true">📞</span>
            <a href="tel:${st.phone.replace(/[^\d+]/g, "")}" style="font-weight:600;text-decoration:underline;">${st.phone}</a>
          </div>
        </div>
        <div class="store-actions">
          <button type="button" class="btn btn-outline btn-sm" data-filter-store="${st.id}">Browse ${st.code} Stock</button>
          <a class="btn btn-navy btn-sm" href="${st.mapUrl}" target="_blank" rel="noopener">Directions ↗</a>
        </div>
      </div>
    `;

    const filterBtn = card.querySelector("[data-filter-store]");
    if (filterBtn) {
      filterBtn.addEventListener("click", () => {
        setCatalogueFilter({ store: st.id });
        const catEl = document.getElementById("catalogue");
        if (catEl) catEl.scrollIntoView({ behavior: "smooth" });
        showToast(`Filtered catalogue to items stocked at ${st.code}: ${st.name}`);
      });
    }

    grid.appendChild(card);
  });
}

/* =====================================================================
   6 & 8: 3D HERO TILT, PARALLAX & SCROLL REVEAL OBSERVER
   ===================================================================== */
let revealObserver = null;

function observeReveals() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".anim-blur-reveal, .anim-mask-reveal, .reveal-up, .img-clip-reveal, .word-reveal-wrap, .char-reveal-wrap, .text-highlight");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  targets.forEach((el) => {
    if (!el.classList.contains("in-view")) {
      revealObserver.observe(el);
    }
  });
}

function initHero3DTiltAndParallax() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const stage = document.getElementById("hero-3d-stage");
  const card = document.getElementById("hero-3d-card");

  if (stage && card && window.innerWidth > 900) {
    stage.addEventListener("mousemove", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
    });

    stage.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg) translateZ(0)";
    });
  }

  // Subtle Scroll Parallax + Sticky Header state
  const header = document.getElementById("site-header");
  const parallaxEls = document.querySelectorAll("[data-parallax]");

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        if (header) {
          header.classList.toggle("is-scrolled", scrollY > 24);
        }
        if (window.innerWidth > 768) {
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.dataset.parallax || "0.08");
            const rect = el.getBoundingClientRect();
            const offset = (window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)) * speed;
            el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
          });
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* =====================================================================
   NAVIGATION, CONTACT FIELDS & INITIALIZATION
   ===================================================================== */
function initHeaderAndContact() {
  /* Mobile menu toggle */
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuButton && nav) {
    const setMenu = (open) => {
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("open", open);
    };
    menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* Populate preserved data-field & data-social attributes */
  document.querySelectorAll("[data-field]").forEach((row) => {
    const field = row.dataset.field;
    const value = SHOP[field];
    const target = row.querySelector(".val");
    if (!value || !target) return;
    if (field === "phone") {
      const a = document.createElement("a");
      a.href = "tel:" + SHOP.phone.replace(/[^\d+]/g, "");
      a.textContent = SHOP.phone;
      target.replaceChildren(a);
    } else {
      target.textContent = value;
    }
  });

  document.querySelectorAll("[data-social]").forEach((link) => {
    const url = SHOP[link.dataset.social];
    if (url) {
      link.href = url;
      link.hidden = false;
    }
  });

  if (SHOP.since) {
    const since = document.getElementById("since");
    if (since) {
      since.textContent = `Proudly serving families in Ahmedabad since ${SHOP.since.trim()}.`;
      since.hidden = false;
    }
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  bindWhatsAppLinks();
}

document.addEventListener("DOMContentLoaded", () => {
  initBrandLoader();
  initTextAnimations();
  renderCategories();
  renderFeaturedAndNewArrivals();
  initHorizontalCarousel();
  initCatalogueControls();
  renderStores();
  initModals();
  initHeaderAndContact();
  observeReveals();
  initHero3DTiltAndParallax();
});
