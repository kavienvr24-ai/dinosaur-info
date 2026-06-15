const dinosaursData = [
    // --- CARNIVORES ---
    { name: "Tyrannosaurus Rex", type: "carnivore", sub: "Apex Predator", size: "Large", era: "Late Cretaceous", desc: "The undisputed king of the prehistoric world, requiring massive enclosures and security defenses.", img: "images/tyrannosaurus_rex.jpg" },
    { name: "Indominus Rex", type: "carnivore", sub: "Hybrid Monstrosity", size: "Large", era: "Modern Hybrid", desc: "InGen's ultimate engineered hybrid. Highly aggressive, capable of active camouflage and masking thermal signatures.", img: "images/Indominus rex.jpeg" },
    { name: "Indoraptor", type: "carnivore", sub: "Hybrid Prototype", size: "Medium", era: "Modern Hybrid", desc: "The dangerous prototype hybrid engineered as a living weapon. Possesses extreme speed and terrifying tracking intellect.", img: "images/Indoraptor.webp" },
    { name: "Spinosaurus", type: "carnivore", sub: "Semi-Aquatic Giant", size: "Large", era: "Cretaceous", desc: "Easily recognized by its giant sail. A colossal carnivore that easily matches or rivals the T-Rex in territorial disputes.", img: "images/Spinosaurus.webp" },
    { name: "Velociraptor", type: "carnivore", sub: "Pack Hunter", size: "Small", era: "Late Cretaceous", desc: "Highly intelligent pack hunters. Prone to systematic escape attempts if their comfort requirements are ignored.", img: "images/velociraptor.jpg" },
    { name: "Giganotosaurus", type: "carnivore", sub: "Apex Carnivore", size: "Large", era: "Late Cretaceous", desc: "One of the largest terrestrial predators to ever walk the earth, featuring an intimidating scaly aesthetic.", img: "images/giganotosaurus.jpg" },
    { name: "Carnotaurus", type: "carnivore", sub: "Horned Abomination", size: "Medium", era: "Late Cretaceous", desc: "Distinguished by blunt horns above its eyes and exceptionally powerful, specialized sprinting muscle builds.", img: "images/carnotaurus.jpg" },
    { name: "Baryonyx", type: "carnivore", sub: "Piscivore Croc-mimic", size: "Medium", era: "Early Cretaceous", desc: "A sleek piscivore with heavy hooks for claws, thriving best when custom wetlands and fish are provided.", img: "images/baryonyx.webp" },
    { name: "Allosaurus", type: "carnivore", sub: "Jurassic Predator", size: "Large", era: "Late Jurassic", desc: "An aggressive powerhouse from the Jurassic era. Boasts dangerous unhinging jaws optimized for heavy tearing.", img: "images/allosaurus.jpg" },
    { name: "Ceratosaurus", type: "carnivore", sub: "Horned Carnivore", size: "Medium", era: "Late Jurassic", desc: "Features a unique nose horn structure. A highly reliable early-game carnivore for park builds.", img: "images/ceratosaurus.jpg" },
    { name: "Dilophosaurus", type: "carnivore", sub: "Venomous Spitter", size: "Small", era: "Early Jurassic", desc: "Famous for its spectacular expandable neck frills and blinding corrosive venom spit asset capabilities.", img: "images/dilophosaurus.webp" },
    { name: "Compsognathus", type: "carnivore", sub: "Micro Scavenger", size: "Small", era: "Late Jurassic", desc: "Tiny, swift scavengers that populate parks seamlessly. They work brilliantly inside multi-species enclosures.", img: "images/compsognathus.png" },
    { name: "Albertosaurus", type: "carnivore", sub: "Sleek Tyrannosaur", size: "Medium", era: "Late Cretaceous", desc: "A smaller, faster relative of the T-Rex, recognizable by unique structural crest ridges over its eyes.", img: "images/albertosaurus.jpg" },
    { name: "Carcharodontosaurus", type: "carnivore", sub: "Shark-Toothed Lizard", size: "Large", era: "Late Cretaceous", desc: "Boasts serrated, razor-sharp teeth structures built specifically to tear apart giant herbivorous sauropod targets.", img: "images/carcharodontosaurus.webp" },
    { name: "Deinonychus", type: "carnivore", sub: "Crested Sickle-Claw", size: "Small", era: "Early Cretaceous", desc: "A colorful, agile predator sporting distinctive ridge-crests. Possesses lethal leaping capabilities.", img: "images/deinonychus.webp" },
    { name: "Therizinosaurus", type: "carnivore", sub: "Scythe-Clawed Giant", size: "Large", era: "Late Cretaceous", desc: "An evolutionary anomaly; technically herbivorous by diet but classified under aggressive territorial hazards due to giant scythe-claws.", img: "images/therizinosaurus.jpeg" },
    { name: "Yutyrannus", type: "carnivore", sub: "Feathered Tyrant", size: "Large", era: "Early Cretaceous", desc: "A giant feathered tyrannosauroid native to freezing regions, boasting a loud commanding call signature.", img: "images/yutyrannus.jpg" },

    // --- HERBIVORES ---
    { name: "Triceratops", type: "herbivore", sub: "Three-Horned Face", size: "Medium", era: "Late Cretaceous", desc: "The ultimate quintessential classic herbivore. Highly popular with guests but territorial against other ceratopsians.", img: "images/triceratops.jpg" },
    { name: "Brachiosaurus", type: "herbivore", sub: "Towering Sauropod", size: "Giant", era: "Late Jurassic", desc: "A massive iconic sauropod requiring immense open space and extremely tall forest canopies to stay content.", img: "images/Brachiosaurus.webp" },
    { name: "Ankylosaurus", type: "herbivore", sub: "Armored Tank", size: "Medium", era: "Late Cretaceous", desc: "Encased completely in thick bony armor plating, sporting a dense bone tail-club built to shatter bone.", img: "images/ankylosaurus.jpg" },
    { name: "Stegosaurus", type: "herbivore", sub: "Plated Defender", size: "Medium", era: "Late Jurassic", desc: "Instantly recognized by alternating diamond backplates and a four-spiked tail assembly ('thagomizer').", img: "images/stegosaurus.jpg" },
    { name: "Diplodocus", type: "herbivore", sub: "Whip-Tailed Titan", size: "Giant", era: "Late Jurassic", desc: "An incredibly long, slender sauropod that uses its elongated whip-like tail assembly for sound cracking and defense.", img: "images/diplodocus.jpg" },
    { name: "Apatosaurus", type: "herbivore", sub: "Thick Sauropod", size: "Giant", era: "Late Jurassic", desc: "A massively built, heavier sauropod than Diplodocus, demanding quiet settings and wide grazing plains.", img: "images/apatosaurus.jpg" },
    { name: "Parasaurolophus", type: "herbivore", sub: "Crested Hadrosaur", size: "Medium", era: "Late Cretaceous", desc: "Features a long curved head crest used to emit beautiful whale-like acoustic frequencies.", img: "images/parasaurolophus.jpg" },
    { name: "Gallimimus", type: "herbivore", sub: "Flocking Ornithomimid", size: "Small", era: "Late Cretaceous", desc: "Fast-moving, completely harmless herd animal that thrives brilliantly inside open truck or gyro tours.", img: "images/gallimimus.jpg" },
    { name: "Pachycephalosaurus", type: "herbivore", sub: "Bone-Headed Ram", size: "Small", era: "Late Cretaceous", desc: "Features a thick skull dome used for high-impact combat. Prone to fracturing fences when agitated.", img: "images/pachycephalosaurus.jpg" },
    { name: "Nasutoceratops", type: "herbivore", sub: "Bull-Horned Face", size: "Small", era: "Late Cretaceous", desc: "A compact ceratopsian sporting long curved horns that heavily resemble modern cattle configurations.", img: "images/nasutoceratops.jpg" },
    { name: "Amargasaurus", type: "herbivore", sub: "Spiked Sauropod", size: "Small", era: "Early Cretaceous", desc: "A miniature exotic sauropod featuring a spectacular double row of sharp spines tracking along its neck structure.", img: "images/amargasaurus.jpg" },
    { name: "Iguanodon", type: "herbivore", sub: "Thumb-Spiked Classic", size: "Medium", era: "Early Cretaceous", desc: "A versatile animal capable of bipedal or quadrupedal locomotion, packing lethal defensive thumb spikes.", img: "images/iguanodon.jpg" },

    // --- FLYING REPTILES ---
    { name: "Pteranodon", type: "flying", sub: "Classic Flyer", size: "Medium", era: "Late Cretaceous", desc: "The flagship flying reptile of InGen. Requires fully enclosed Aviary domes and specialized fish feeders.", img: "images/pteranodon.jpg" },
    { name: "Dimorphodon", type: "flying", sub: "Pug-Faced Flyer", size: "Small", era: "Early Jurassic", desc: "A small, ancient flying reptile featuring a disproportionately large, heavy skull build and sharp teeth.", img: "images/dimorphodon.jpg" },
    { name: "Quetzalcoatlus", type: "flying", sub: "Titan of the Skies", size: "Giant", era: "Late Cretaceous", desc: "A genuinely colossal pterosaur comparable to an airplane in wingspan. Capable of breaking out of standard glass easily.", img: "images/quetzalcoatlus.jpg" },
    { name: "Tapejara", type: "flying", sub: "Sail-Crested Flyer", size: "Small", era: "Early Cretaceous", desc: "A brightly colored flyer with a large semi-circular head crest that acts like a specialized steering sail.", img: "images/tapejara.jpg" },

    // --- MARINE REPTILES ---
    { name: "Mosasaurus", type: "marine", sub: "Apex Deep Sea Titan", size: "Giant", era: "Late Cretaceous", desc: "The ultimate massive star of the Lagoon ecosystem, consuming entire sharks whole from custom feeding cranes.", img: "images/mosasaurus.jpg" },
    { name: "Plesiosaurus", type: "marine", sub: "Classic Sea Serpent", size: "Small", era: "Early Jurassic", desc: "A small, elegant marine reptile with a remarkably long snake-like neck. Best paired with non-aggressive fish eaters.", img: "images/plesiosaurus.jpg" },
    { name: "Tylosaurus", type: "marine", sub: "Giant Sea Predator", size: "Large", era: "Late Cretaceous", desc: "A close, highly aggressive relative of Mosasaurus with a hardened, bone-crushing battering ram snout.", img: "images/tylosaurus.jpg" },
    { name: "Dunkleosteus", type: "marine", sub: "Armored Placoderm Fish", size: "Medium", era: "Devonian", desc: "Though technically a prehistoric armored fish, this tank-like Lagoon carnivore uses razor-sharp bone plates as teeth.", img: "images/dunkleosteus.jpg" }
];

const dinoGrid = document.getElementById('dinoGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const statsCounter = document.getElementById('statsCounter');

let currentFilter = 'all';
let searchQuery = '';

function renderDinosaurs() {
    dinoGrid.innerHTML = '';

    const filtered = dinosaursData.filter(dino => {
        const matchesFilter = currentFilter === 'all' || dino.type === currentFilter;
        const matchesSearch = dino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dino.sub.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    statsCounter.textContent = `Displaying ${filtered.length} of ${dinosaursData.length} Registered Species`;

    if (filtered.length === 0) {
        dinoGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--carnivore-color); font-size: 1.5rem; padding: 40px;">⚠️ INSUFFICIENT DATA / NO SPECIES FOUND WITH THAT SIGNATURE</div>`;
        return;
    }

    filtered.forEach(dino => {
        const card = document.createElement('div');
        card.classList.add('dino-card');

        // Backup dynamic generation text code for missing local files
        const fallbackUrl = `https://placehold.co/400x250/0b1712/00ff88/png?text=${encodeURIComponent(dino.name)}&font=playfair`;

        card.innerHTML = `
                    <div class="dino-img-container">
                        <div class="badge ${dino.type}">${dino.type}</div>
                        <img src="${dino.img}" alt="${dino.name}" class="dino-img" onerror="this.onerror=null; this.src='${fallbackUrl}';">
                    </div>
                    <div class="dino-info">
                        <div class="dino-name"> ${dino.name} </div>
                        <div class="dino-sub">// ${dino.sub}</div>
                        <div class="dino-desc">${dino.desc}</div>
                        <div class="dino-stats">
                            <div class="stat-line"><span>ERA:</span> ${dino.era}</div>
                            <div class="stat-line"><span>SIZE:</span> ${dino.size}</div>
                        </div>
                    </div>
                `;
        dinoGrid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderDinosaurs();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderDinosaurs();
    });
});

renderDinosaurs();