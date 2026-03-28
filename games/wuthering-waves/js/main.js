// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to cards
document.querySelectorAll('.character-card, .team-card, .rotation-card, .echo-card, .banner-card, .version-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

// Initialize filters on page load
filterCharacters();
filterEchoes();
filterWeapons();

// Mobile menu toggle
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.style.cssText = 'display: none; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;';

if (window.innerWidth <= 768) {
    mobileMenuBtn.style.display = 'block';
    document.querySelector('nav').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('mobile-open');
    });
}

// Character filter data
const characters = [
    { name: 'Sanhua', element: 'glacio', weapon: 'sword', role: 'dps' },
    { name: 'Baizhi', element: 'glacio', weapon: 'rectifier', role: 'healer' },
    { name: 'Lingyang', element: 'glacio', weapon: 'gauntlets', role: 'main-dps' },
    { name: 'Zhezhi', element: 'glacio', weapon: 'rectifier', role: 'main-dps' },
    { name: 'Youhu', element: 'glacio', weapon: 'gauntlets', role: 'healer' },
    { name: 'Carlotta', element: 'glacio', weapon: 'pistols', role: 'main-dps' },
    { name: 'Chixia', element: 'fusion', weapon: 'pistols', role: 'dps' },
    { name: 'Encore', element: 'fusion', weapon: 'rectifier', role: 'main-dps' },
    { name: 'Mortefi', element: 'fusion', weapon: 'pistols', role: 'sub-dps' },
    { name: 'Changli', element: 'fusion', weapon: 'sword', role: 'main-dps' },
    { name: 'Brant', element: 'fusion', weapon: 'sword', role: 'main-dps' },
    { name: 'Lupa', element: 'fusion', weapon: 'broadblade', role: 'support' },
    { name: 'Galbrena', element: 'fusion', weapon: 'pistols', role: 'main-dps' },
    { name: 'Mornye', element: 'fusion', weapon: 'broadblade', role: 'support' },
    { name: 'Aemeath', element: 'fusion', weapon: 'sword', role: 'main-dps' },
    { name: 'Calcharo', element: 'electro', weapon: 'broadblade', role: 'main-dps' },
    { name: 'Yinlin', element: 'electro', weapon: 'rectifier', role: 'sub-dps' },
    { name: 'Yuanwu', element: 'electro', weapon: 'gauntlets', role: 'sub-dps' },
    { name: 'Xiangli Yao', element: 'electro', weapon: 'gauntlets', role: 'main-dps' },
    { name: 'Lumi', element: 'electro', weapon: 'broadblade', role: 'sub-dps' },
    { name: 'Augusta', element: 'electro', weapon: 'broadblade', role: 'main-dps' },
    { name: 'Buling', element: 'electro', weapon: 'rectifier', role: 'support' },
    { name: 'Yangyang', element: 'aero', weapon: 'sword', role: 'support' },
    { name: 'Aalto', element: 'aero', weapon: 'pistols', role: 'dps' },
    { name: 'Jiyan', element: 'aero', weapon: 'broadblade', role: 'main-dps' },
    { name: 'Jianxin', element: 'aero', weapon: 'gauntlets', role: 'support' },
    { name: 'Ciaccona', element: 'aero', weapon: 'pistols', role: 'sub-dps' },
    { name: 'Rover (Aero)', element: 'aero', weapon: 'sword', role: 'support' },
    { name: 'Cartethyia', element: 'aero', weapon: 'sword', role: 'main-dps' },
    { name: 'Iuno', element: 'aero', weapon: 'gauntlets', role: 'support' },
    { name: 'Qiuyuan', element: 'aero', weapon: 'sword', role: 'sub-dps' },
    { name: 'Sigrika', element: 'aero', weapon: 'gauntlets', role: 'main-dps' },
    { name: 'Verina', element: 'spectro', weapon: 'rectifier', role: 'healer' },
    { name: 'Rover (Spectro)', element: 'spectro', weapon: 'sword', role: 'main-dps' },
    { name: 'Jinhsi', element: 'spectro', weapon: 'broadblade', role: 'main-dps' },
    { name: 'Shorekeeper', element: 'spectro', weapon: 'rectifier', role: 'healer' },
    { name: 'Phoebe', element: 'spectro', weapon: 'rectifier', role: 'sub-dps' },
    { name: 'Zani', element: 'spectro', weapon: 'gauntlets', role: 'main-dps' },
    { name: 'Lynae', element: 'spectro', weapon: 'pistols', role: 'support' },
    { name: 'Luuk Herssen', element: 'spectro', weapon: 'gauntlets', role: 'main-dps' },
    { name: 'Taoqi', element: 'havoc', weapon: 'broadblade', role: 'tank' },
    { name: 'Danjin', element: 'havoc', weapon: 'sword', role: 'main-dps' },
    { name: 'Camellya', element: 'havoc', weapon: 'sword', role: 'main-dps' },
    { name: 'Rover (Havoc)', element: 'havoc', weapon: 'sword', role: 'main-dps' },
    { name: 'Roccia', element: 'havoc', weapon: 'gauntlets', role: 'support' },
    { name: 'Cantarella', element: 'havoc', weapon: 'rectifier', role: 'healer' },
    { name: 'Phrolova', element: 'havoc', weapon: 'rectifier', role: 'sub-dps' },
    { name: 'Chisa', element: 'havoc', weapon: 'broadblade', role: 'support' }
];

// Character filtering
function filterCharacters() {
    const searchTerm = document.getElementById('char-search').value.toLowerCase();
    const elementFilter = document.getElementById('element-filter').value;
    const weaponFilter = document.getElementById('weapon-filter').value;
    const roleFilter = document.getElementById('role-filter').value;
    
    const characterCards = document.querySelectorAll('#character-grid .character-card');
    
    characterCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const element = card.querySelector('.char-element').textContent.toLowerCase();
        const weapon = card.querySelector('.char-weapon').textContent.toLowerCase();
        const role = card.querySelector('.char-role').textContent.toLowerCase();
        
        const matchesSearch = name.includes(searchTerm);
        const matchesElement = elementFilter === 'all' || element === elementFilter;
        const matchesWeapon = weaponFilter === 'all' || weapon.includes(weaponFilter);
        const matchesRole = roleFilter === 'all' || role.includes(roleFilter);
        
        if (matchesSearch && matchesElement && matchesWeapon && matchesRole) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetCharFilters() {
    document.getElementById('char-search').value = '';
    document.getElementById('element-filter').value = 'all';
    document.getElementById('weapon-filter').value = 'all';
    document.getElementById('role-filter').value = 'all';
    filterCharacters();
}

// Echo filter data
const echoes = [
    { name: 'Bell-Borne Geochelone', cost: 4, element: 'glacio' },
    { name: 'Crownless', cost: 4, element: 'havoc' },
    { name: 'Dragon of Dirge', cost: 4, element: 'fusion' },
    { name: 'Dreamless', cost: 4, element: 'havoc' },
    { name: 'Feilian Beringal', cost: 4, element: 'aero' },
    { name: 'Hecate', cost: 4, element: 'havoc' },
    { name: 'Impermanence Heron', cost: 4, element: 'havoc' },
    { name: 'Inferno Rider', cost: 4, element: 'fusion' },
    { name: 'Jué', cost: 4, element: 'spectro' },
    { name: 'Lampylumen Myriad', cost: 4, element: 'glacio' },
    { name: 'Lioness of Glory', cost: 4, element: 'fusion' },
    { name: 'Mech Abomination', cost: 4, element: 'electro' },
    { name: 'Mourning Aix', cost: 4, element: 'spectro' },
    { name: 'Tempest Mephis', cost: 4, element: 'electro' },
    { name: 'Thundering Mephis', cost: 4, element: 'electro' },
    { name: 'Stonewall Bracer', cost: 3, element: 'glacio' },
    { name: 'Flautist', cost: 3, element: 'electro' },
    { name: 'Chasm Guardian', cost: 3, element: 'havoc' },
    { name: 'Glacio Dreadmane', cost: 3, element: 'glacio' },
    { name: 'Havoc Dreadmane', cost: 3, element: 'havoc' },
    { name: 'Cyan-Feathered Heron', cost: 3, element: 'aero' },
    { name: 'Lightcrusher', cost: 3, element: 'spectro' },
    { name: 'Lumiscale Construct', cost: 3, element: 'electro' },
    { name: 'Vanguard Junrock', cost: 1, element: 'electro' },
    { name: 'Electro Predator', cost: 1, element: 'fusion' },
    { name: 'Glacio Predator', cost: 1, element: 'glacio' },
    { name: 'Cruisewing', cost: 1, element: 'glacio' }
];

function filterEchoes() {
    const searchTerm = document.getElementById('echo-search')?.value.toLowerCase() || '';
    const costFilter = document.getElementById('echo-cost-filter')?.value || 'all';
    const sonataFilter = document.getElementById('echo-sonata-filter')?.value || 'all';
    
    const echoCards = document.querySelectorAll('.echo-grid .echo-card');
    console.log('Filtering echoes - found:', echoCards.length, 'cards');
    
    echoCards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const sonata = card.querySelector('.sonata').textContent.toLowerCase();
        
        let costMatch = true;
        if (costFilter !== 'all') {
            const cardCost = card.dataset.cost;
            costMatch = cardCost === costFilter;
        }
        
        let sonataMatch = true;
        if (sonataFilter !== 'all') {
            sonataMatch = sonata.includes(sonataFilter);
        }
        
        const matchesSearch = name.includes(searchTerm);
        
        if (matchesSearch && costMatch && sonataMatch) {
            card.style.display = 'flex';
            card.style.opacity = '1';
            card.style.transform = 'none';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetEchoFilters() {
    const searchInput = document.getElementById('echo-search');
    const costSelect = document.getElementById('echo-cost-filter');
    const sonataSelect = document.getElementById('echo-sonata-filter');
    
    if (searchInput) searchInput.value = '';
    if (costSelect) costSelect.value = 'all';
    if (sonataSelect) sonataSelect.value = 'all';
    
    filterEchoes();
}

// Version data
const versionData = {
    current: '3.2',
    lastUpdated: 'March 26, 2026'
};

// Echo detail modal
function showEchoDetails(element) {
    const echoData = JSON.parse(element.dataset.echo || '{}');
    
    let modal = document.getElementById('echo-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'echo-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const ratingColor = {
        'S': '#ff6b6b',
        'A': '#ffd93d',
        'B': '#6bcb77',
        'C': '#4d96ff'
    }[echoData.rating] || '#ccc';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeEchoModal()">&times;</span>
            <div class="modal-header">
                <img src="${element.querySelector('img').src}" alt="${echoData.name}">
                <div>
                    <h2>${echoData.name}</h2>
                    <span class="modal-element">${echoData.element}</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="modal-section">
                    <h3>Echo Skill</h3>
                    <p>${echoData.skill}</p>
                </div>
                <div class="modal-section">
                    <h3>Sonata Effects</h3>
                    <p class="sonata-list">${echoData.sonata.join(', ')}</p>
                </div>
                <div class="modal-section">
                    <h3>Set Bonuses</h3>
                    <pre>${echoData.effect}</pre>
                </div>
                <div class="modal-section">
                    <h3>Rating</h3>
                    <span class="rating-badge" style="background: ${ratingColor}">${echoData.rating}</span>
                </div>
                <div class="modal-section">
                    <h3>Best For</h3>
                    <p>${echoData.bestFor.join(', ')}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeEchoModal();
        }
    };
}

function closeEchoModal() {
    const modal = document.getElementById('echo-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEchoModal();
        closeWeaponModal();
        closeCharacterModal();
    }
});

// Weapon filter functions
function filterWeapons() {
    const searchTerm = document.getElementById('weapon-search')?.value.toLowerCase() || '';
    const rarityFilter = document.getElementById('weapon-rarity-filter')?.value || 'all';
    const typeFilter = document.getElementById('weapon-type-filter')?.value || 'all';
    
    const weaponCards = document.querySelectorAll('.weapon-grid .weapon-card');
    
    weaponCards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const rarity = card.dataset.rarity;
        const type = card.dataset.type;
        
        let rarityMatch = true;
        if (rarityFilter !== 'all') {
            rarityMatch = rarity === rarityFilter;
        }
        
        let typeMatch = true;
        if (typeFilter !== 'all') {
            typeMatch = type === typeFilter;
        }
        
        const matchesSearch = name.includes(searchTerm);
        
        if (matchesSearch && rarityMatch && typeMatch) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetWeaponFilters() {
    const searchInput = document.getElementById('weapon-search');
    const raritySelect = document.getElementById('weapon-rarity-filter');
    const typeSelect = document.getElementById('weapon-type-filter');
    
    if (searchInput) searchInput.value = '';
    if (raritySelect) raritySelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    
    filterWeapons();
}

// Character filter function
function filterCharacters() {
    const searchTerm = document.getElementById('character-search')?.value.toLowerCase() || '';
    const table = document.getElementById('character-table');
    
    if (!table) return;
    
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const name = row.querySelector('td:first-child')?.textContent.toLowerCase() || '';
        
        if (name.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Weapon detail modal
function showWeaponDetails(element) {
    const weaponData = JSON.parse(element.dataset.weapon || '{}');
    
    let modal = document.getElementById('weapon-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'weapon-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const rarityStars = '★'.repeat(weaponData.rarity);
    const rarityColor = {
        5: '#ffd700',
        4: '#c0c0c0',
        3: '#cd7f32',
        2: '#cd7f32',
        1: '#808080'
    }[weaponData.rarity] || '#ccc';
    
    modal.innerHTML = `
        <div class="modal-content weapon-modal-content">
            <span class="close-modal" onclick="closeWeaponModal()">&times;</span>
            <div class="weapon-modal-header">
                <img src="${element.querySelector('img').src}" alt="${weaponData.name}">
                <div>
                    <h2>${weaponData.name}</h2>
                    <span class="weapon-modal-rarity" style="color: ${rarityColor}">${rarityStars}</span>
                    <span class="weapon-modal-type">${weaponData.type}</span>
                </div>
            </div>
            <div class="weapon-modal-stats">
                <div class="stat-item">
                    <span class="stat-label">Base ATK (Lv.90)</span>
                    <span class="stat-value">${weaponData.baseAtk}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Substat</span>
                    <span class="stat-value">${weaponData.substat}</span>
                </div>
            </div>
            <div class="weapon-modal-body">
                <div class="modal-section">
                    <h3>Weapon Skill</h3>
                    <p>${weaponData.skill}</p>
                </div>
                <div class="modal-section">
                    <h3>Description</h3>
                    <p>${weaponData.description}</p>
                </div>
                <div class="modal-section">
                    <h3>How to Get</h3>
                    <p>${weaponData.howToGet}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeWeaponModal();
        }
    };
}

function closeWeaponModal() {
    const modal = document.getElementById('weapon-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Character detail modal
function showCharacterDetails(element) {
    let charData;
    try {
        charData = JSON.parse(element.dataset.character || '{}');
    } catch (e) {
        charData = {};
    }
    
    // Fallback for cards without detailed data
    if (!charData.name) {
        const name = element.querySelector('h3').textContent;
        const elementClass = element.querySelector('.char-element').textContent;
        const weapon = element.querySelector('.char-weapon').textContent;
        const role = element.querySelector('.char-role').textContent;
        charData = {
            name: name,
            element: elementClass,
            weapon: weapon,
            role: role,
            intro: 'Character details coming soon.',
            hp: 'N/A',
            atk: 'N/A',
            def: 'N/A',
            critRate: 'N/A',
            critDmg: 'N/A',
            energyRegen: 'N/A',
            bestWeapon: 'TBD',
            bestEcho: 'TBD',
            echoSet: 'TBD'
        };
    }
    
    let modal = document.getElementById('character-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'character-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    const elementColors = {
        'Glacio': '#6ee7ff',
        'Aero': '#6bff6b',
        'Fusion': '#ff6b6b',
        'Electro': '#b366ff',
        'Spectro': '#ffcc00',
        'Havoc': '#ff4757'
    };
    
    const elementColor = elementColors[charData.element] || '#ccc';
    const rarityStars = '★'.repeat(charData.rarity);
    
    modal.innerHTML = `
        <div class="modal-content character-modal-content">
            <span class="close-modal" onclick="closeCharacterModal()">&times;</span>
            <div class="character-modal-header" style="background: linear-gradient(180deg, ${elementColor}33 0%, transparent 100%);">
                <img src="${element.querySelector('.char-img').src}" alt="${charData.name}">
                <div class="character-modal-info">
                    <h2>${charData.name}</h2>
                    <span class="character-modal-rarity">${rarityStars}</span>
                    <span class="character-modal-element" style="background: ${elementColor}">${charData.element}</span>
                    <span class="character-modal-weapon">${charData.weapon}</span>
                    <p class="character-modal-faction">${charData.faction || 'Unknown'}</p>
                    <p class="character-modal-birthday">Birthday: ${charData.birthday || 'Unknown'}</p>
                </div>
            </div>
            <div class="character-modal-body">
                <div class="modal-section">
                    <h3>Introduction</h3>
                    <p>${charData.intro || 'No description available.'}</p>
                </div>
                <div class="character-modal-stats">
                    <div class="stat-box">
                        <span class="stat-icon">❤️</span>
                        <span class="stat-label">HP</span>
                        <span class="stat-value">${charData.hp || 'N/A'}</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-icon">⚔️</span>
                        <span class="stat-label">ATK</span>
                        <span class="stat-value">${charData.atk || 'N/A'}</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-icon">🛡️</span>
                        <span class="stat-label">DEF</span>
                        <span class="stat-value">${charData.def || 'N/A'}</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-icon">🎯</span>
                        <span class="stat-label">Crit Rate</span>
                        <span class="stat-value">${charData.critRate || 'N/A'}%</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-icon">💥</span>
                        <span class="stat-label">Crit DMG</span>
                        <span class="stat-value">${charData.critDmg || 'N/A'}%</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-icon">⚡</span>
                        <span class="stat-label">Energy Regen</span>
                        <span class="stat-value">${charData.energyRegen || 'N/A'}%</span>
                    </div>
                </div>
                <div class="modal-section">
                    <h3>Best Build</h3>
                    <div class="build-info">
                        <p><strong>Best Weapon:</strong> ${charData.bestWeapon || 'N/A'}</p>
                        <p><strong>Best Echo Set:</strong> ${charData.bestEcho || 'N/A'} (${charData.echoSet || 'N/A'})</p>
                    </div>
                </div>
                <div class="modal-section">
                    <h3>Ascension Materials</h3>
                    <div class="materials-list">
                        ${(charData.materials || []).map(m => `<span class="material-item">${m}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeCharacterModal();
        }
    };
}

function closeCharacterModal() {
    const modal = document.getElementById('character-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Wrap character cards in anchor tags for navigation
document.querySelectorAll('.character-grid .character-card').forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');
    const wrapper = document.createElement('a');
    wrapper.href = `characters/character.html?char=${name}`;
    wrapper.style.textDecoration = 'none';
    wrapper.style.color = 'inherit';
    wrapper.style.display = 'block';
    card.parentNode.insertBefore(wrapper, card);
    wrapper.appendChild(card);
});

console.log('Wuthering Waves Guide loaded successfully!');
console.log('Current Version:', versionData.current);
