/* ============================================================
   L'ART DE LA PLUME — logique du site
   Site vitrine, sans compte utilisateur
   ============================================================ */

const WHATSAPP_NUMBER = "221784133885"; // 78 413 38 85, indicatif Sénégal +221

/* ---------- Données des volailles ---------- */
const POULTRY = [
  {
    id: "cou-nu",
    name: "Poulet Cou Nu",
    category: "locale",
    origin: "Race locale, Sénégal",
    desc: "Le poulet de cou nu (ou poule cou nu) est une race de volaille rustique originaire de Transylvanie (Roumanie) et très répandue à travers le monde.La caractéristique principale est son cou entièrement dépourvu de plumes, d'une couleur rouge vif qui s'intensifie sous l'action du soleil et avec la maturité sexuelle.C'est un oiseau de taille moyenne à grande. Le coq pèse généralement entre 3 et 3,5 kg, tandis que la poule pèse entre 2,5 et 3 kg.Réputée pour sa chair ferme, savoureuse et peu grasse. C'est l'une des races à deux fins (ponte et chair) les plus appréciées.",
    price: "2 500 F / kg",
    saleType: "kg",
    image: "assets/cou-nu.png",
  },
  {
    id: "Perdrix",
    name: "Brahama fauve",
    category: "locale",
    origin: "Race Brahama fauve ",
    desc: "La Brahma fauve (souvent appelée Brahma fauve herminée noir ou fauve herminée bleu) est une variante de couleur de la célèbre race de poule géante Brahma.C'est une race lourde et impressionnante. Le coq pèse entre 4 et 5 kg (pouvant dépasser 60 cm de hauteur) et la poule entre 3 et 4,5 kg.Le corps arbore une couleur fauve (brun doré / marron clair orangé). Chez la variété la plus répandue (fauve herminée noir), le camail (plumes du cou), le bout des ailes et la queue présentent des motifs noirs. couverts de plumes jusqu'aux doigts.",
    price: null,
    saleType: "age",
    image: "assets/Perdrix.png",
  },
  {
    id: "sussex",
    name: "Sussex",
    category: "ponte",
    origin: "Race anglaise",
    desc: "La Sussex est une poule de taille moyenne à grande, au corps rectangulaire, large et bien fourni. Ses têtes portent une crête simple rouge et des barbillons rouges bien développés. Ses pattes (tarses) sont claires, généralement de couleur chair ou blanc rosé;Excellente race mixte (pondeuse régulière d'œufs rosés et bonne volaille de chair).Le fond du plumage est acajou/brun rougeâtre, parsemé de taches noires terminées par une petite pointe blanche (motif pailleté ou mille-fleurs).",
    price: null,
    saleType: "age",
    image: "assets/sussex.png",
  },
  {
    id: "hermine-noire",
    name: "Hermine Noire",
    category: "ornement",
    origin: "Race Brahma",
    desc: "La Brahma herminée noir (aussi appelée Brahma blanche herminée noir ou Brahma claire) est l'un des coloris traditionnels et les plus emblématiques de la race géante Brahma.Le corps est majoritairement d'un blanc pur et lumineux. Le camail (les plumes entourant le cou) ainsi que la queue et le bout des ailes portent des plumes noires bordées de blanc. C'est une volaille géante au port très haut, lourd et majestueux. Le coq peut atteindre de 4,5 à 5 kg (et mesurer plus de 60 à 70 cm de haut), tandis que la poule pèse généralement entre 3,5 et 4,5 kg.",
    price: null,
    saleType: "age",
    image: "assets/hermine-noire.png",
  },
  {
    id: "chair-industriel",
    name: "Poulet de Chair (souche rapide)",
    category: "chair",
    origin: "Souche sélectionnée",
    desc: "Le poulet de chair (ou poulet d'engraissement) désigne les souches de volailles sélectionnées spécifiquement pour la production rapide de viande tender et abondante.Corps compact, très trapu et extrêmement musclé, caractérisé par des poitrines larges et bien fournies ainsi que des cuisses épaisses.Croissance exceptionnellement rapide. Un poulet de chair atteint un poids de marché d'environ 1,5 à 2,5 kg en seulement 35 à 45 jours pour les souches rapides, et en 80 à 90 jours pour les souches fermières ou Label Rouge.Viande tendre, juteuse et abondante, idéale pour la découpe (blancs, cuisses) et le rôtissage.",
    price: "3500F / kg",
    saleType: "kg",
    image: "assets/chair-industriel.png",
  },
  {
    id: "wyandotte",
    name: "Wyandotte",
    category: "ornement",
    origin: "Race nord-américaine",
    desc: "La Wyandotte est une race de poule polyvalente originaire des États-Unis, très appréciée pour sa beauté, sa rusticité et ses excellentes aptitudes à la fois pour la ponte et la chair.Corps très rond, trapu et compact, souvent comparé à un ballon ou un vallonnement élégant, avec une ligne du dos formant un creux en forme de « U ».Très dense, doux et fourni. La Wyandotte est célèbre pour ses magnifiques variétés de coloris, notamment le motif liseré comme la argentée à liseré noir ou dorée à liseré bleu, mais existe aussi en blanc, noir, rouge et columbia.Le coq pèse entre 3,2 et 3,8 kg, tandis que la poule pèse entre 2,5 et 3 kg. Il existe également une variante naine très répandue.",
    price: null,
    saleType: "age",
    image: "assets/wyandotte.png",
  },
];

const AGE_LABELS = { poussin: "Poussin", adulte: "Adulte" };

/* ---------- Articles du journal ---------- */
const ARTICLES = [
  {
    id: "art-1",
    title: "Bien démarrer un petit poulailler familial",
    meta: "Conseils d'élevage",
    text: "Un poulailler bien orienté, à l'abri du vent et des fortes chaleurs de l'après-midi, réduit déjà une bonne partie des soucis sanitaires. Prévoyez un espace suffisant par oiseau, un accès permanent à l'eau propre, et une litière renouvelée régulièrement pour limiter l'humidité.",
  },
  {
    id: "art-2",
    title: "Reconnaître une volaille en bonne santé avant l'achat",
    meta: "Conseils pratiques",
    text: "Un œil vif, des plumes lisses, une démarche assurée et des narines propres sont de bons signes. Observez aussi le comportement dans le groupe : un poulet trop isolé ou apathique mérite qu'on y regarde de plus près avant tout achat.",
  },
  {
    id: "art-3",
    title: "Races locales et races importées : que choisir ?",
    meta: "Notes de terrain",
    text: "Les races locales comme le Cou Nu ou la Brahma fauve résistent mieux à la chaleur et demandent moins d'entretien, tandis que les races importées offrent souvent une meilleure production d'œufs ou une croissance plus rapide. Le bon choix dépend surtout de votre objectif : consommation familiale, revente, ou production régulière.",
  },
];

let activeFilter = "tous";
let searchTerm = "";

/* ============================================================
   RENDU — VOLAILLES
   ============================================================ */
function renderPoultryGrid() {
  const grid = document.getElementById("poultryGrid");
  const term = searchTerm.trim().toLowerCase();

  const results = POULTRY.filter(p => {
    const matchesFilter = activeFilter === "tous" || p.category === activeFilter;
    const matchesSearch =
      !term ||
      p.name.toLowerCase().includes(term) ||
      p.origin.toLowerCase().includes(term) ||
      p.desc.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  document.getElementById("resultCount").textContent =
    results.length === 0
      ? "Aucune volaille ne correspond à votre recherche."
      : `${results.length} volaille${results.length > 1 ? "s" : ""} trouvée${results.length > 1 ? "s" : ""}`;

  if (results.length === 0) {
    grid.innerHTML = `<p class="empty-state">Essayez un autre nom de race, comme « Cou Nu » ou « Sussex ».</p>`;
    return;
  }

  grid.innerHTML = results.map(p => `
    <article class="p-card">
      <div class="p-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="p-img" loading="lazy">
      </div>
      <div class="p-card-top">
        <h3>${p.name}</h3>
        <span class="p-tag ${p.category}">${labelFor(p.category)}</span>
      </div>
      <p class="p-origin">${p.origin}</p>
      <p class="p-desc">${p.desc}</p>

      ${p.saleType === "kg"
        ? `<label class="p-age">
             Quantité (kg)
             <input type="number" class="qty-select" id="kg-${p.id}" min="0.5" step="0.5" value="1">
           </label>`
        : `<label class="p-age">
             Âge souhaité
             <select class="age-select" id="age-${p.id}">
               <option value="poussin">Poussin</option>
               <option value="adulte" selected>Adulte</option>
             </select>
           </label>`
      }

      <div class="p-foot">
        ${p.price
          ? `<span class="p-price">${p.price}</span>`
          : `<span class="p-price p-price-tbd">Prix à discuter selon l'âge</span>`
        }
        <button class="p-order-btn" data-order="${p.id}">Commander</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-order]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.order;
      const item = POULTRY.find(p => p.id === id);
      let detail;
      if (item.saleType === "kg") {
        const kg = document.getElementById(`kg-${id}`).value || 1;
        detail = `${kg} kg`;
      } else {
        const age = document.getElementById(`age-${id}`).value;
        detail = `1 (${AGE_LABELS[age]})`;
      }
      sendWhatsAppOrder(id, detail);
    });
  });
}

function labelFor(category) {
  return { chair: "Chair", ponte: "Ponte", locale: "Race locale", ornement: "Ornement" }[category] || category;
}

function fillOrderSelect() {
  const select = document.getElementById("orderPoultry");
  select.innerHTML = POULTRY.map(p => `<option value="${p.id}">${p.name}</option>`).join("");
}

/* ============================================================
   RECHERCHE / FILTRES
   ============================================================ */
document.getElementById("searchInput").addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderPoultryGrid();
});

document.getElementById("filterChips").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
  btn.classList.add("is-active");
  activeFilter = btn.dataset.filter;
  renderPoultryGrid();
});

/* ============================================================
   RENDU — ARTICLES
   ============================================================ */
function renderArticles() {
  const list = document.getElementById("articlesList");

  list.innerHTML = ARTICLES.map(a => `
      <article class="article" data-article="${a.id}">
        <button class="article-head" data-toggle="${a.id}">
          <span>
            <h3>${a.title}</h3>
            <span class="article-meta">${a.meta}</span>
          </span>
          <svg class="chevron" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="article-body">
          <p class="article-text">${a.text}</p>
          <a class="article-question" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, j'ai une question à propos de l'article « ${a.title} ».`)}" target="_blank" rel="noopener">
            Une question sur ce sujet ? Écrivez-nous sur WhatsApp →
          </a>
        </div>
      </article>
  `).join("");

  list.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".article").classList.toggle("is-open");
      syncArticleHeights();
    });
  });
}

function syncArticleHeights() {
  document.querySelectorAll(".article").forEach(art => {
    const body = art.querySelector(".article-body");
    if (art.classList.contains("is-open")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = "0px";
    }
  });
}

/* ============================================================
   COMMANDE → WHATSAPP
   ============================================================ */
function sendWhatsAppOrder(poultryId, detail, name) {
  const item = POULTRY.find(p => p.id === poultryId);
  if (!item) return;
  const who = name ? `Je m'appelle ${name}. ` : "";
  const priceNote = item.price
    ? `Prix indiqué : ${item.price}. `
    : "Merci de me proposer un prix selon l'âge choisi. ";
  const message = `Bonjour, je souhaite commander : ${detail} de ${item.name}. ${who}${priceNote}Merci de me confirmer la disponibilité.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

fillOrderSelect();
updateOrderFormFields();
document.getElementById("orderPoultry").addEventListener("change", updateOrderFormFields);

function updateOrderFormFields() {
  const id = document.getElementById("orderPoultry").value;
  const item = POULTRY.find(p => p.id === id);
  if (!item) return;
  const qtyLabel = document.getElementById("orderQtyLabel");
  const ageField = document.getElementById("orderAgeField");
  const qtyInput = document.getElementById("orderQty");
  if (item.saleType === "kg") {
    qtyLabel.textContent = "Quantité (kg)";
    qtyInput.step = "0.5";
    qtyInput.min = "0.5";
    ageField.hidden = true;
  } else {
    qtyLabel.textContent = "Quantité";
    qtyInput.step = "1";
    qtyInput.min = "1";
    ageField.hidden = false;
  }
}

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const poultryId = document.getElementById("orderPoultry").value;
  const item = POULTRY.find(p => p.id === poultryId);
  const qty = document.getElementById("orderQty").value || 1;
  const name = document.getElementById("orderName").value.trim();
  let detail;
  if (item.saleType === "kg") {
    detail = `${qty} kg`;
  } else {
    const age = document.getElementById("orderAge").value;
    detail = `${qty} (${AGE_LABELS[age]})`;
  }
  sendWhatsAppOrder(poultryId, detail, name);
});

/* ============================================================
   NAVIGATION MOBILE
   ============================================================ */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

/* ============================================================
   INIT
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();
renderPoultryGrid();
renderArticles();