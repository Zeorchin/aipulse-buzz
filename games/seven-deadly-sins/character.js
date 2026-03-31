document.addEventListener('DOMContentLoaded', () => {
    initCharNav();
    initAnimations();
    loadCharacterFromURL();
});

function initCharNav() {
    const navLinks = document.querySelectorAll('.char-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            if (targetSection) {
                const headerOffset = 100;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.char-section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .build-card, .gear-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

const charactersData = {
    meliodas: {
        name: 'Meliodas',
        title: "The Dragon's Sin of Wrath",
        element: 'fire',
        elementIcon: '🔥',
        weapon: 'Greatsword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'S Tier',
        stars: '★★★★★',
        attack: 95,
        defense: 60,
        hp: 70,
        speed: 85,
        gender: 'Male',
        va: 'Bryce Papenbrook',
        portrait: 'slot_meliodas_001.png'
    },
    king: {
        name: 'King',
        title: "The Grizzly's Sin of Sloth",
        element: 'wind',
        elementIcon: '💨',
        weapon: 'Spear',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'S Tier',
        stars: '★★★★★',
        attack: 90,
        defense: 55,
        hp: 75,
        speed: 80,
        gender: 'Male',
        va: 'Chris Niosi',
        portrait: 'slot_king_001.png'
    },
    diane: {
        name: 'Diane',
        title: "The Serpent's Sin of Envy",
        element: 'earth',
        elementIcon: '🌍',
        weapon: 'Hammer',
        role: 'Tank',
        rarity: 'SSR',
        tier: 'S Tier',
        stars: '★★★★★',
        attack: 70,
        defense: 90,
        hp: 95,
        speed: 50,
        gender: 'Female',
        val: 'Miyu Matsuki',
        portrait: 'slot_diane_001.png'
    },
    jericho: {
        name: 'Jericho',
        title: 'The Phoenix',
        element: 'ice',
        elementIcon: '❄️',
        weapon: 'Sword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'S Tier',
        stars: '★★★★★',
        attack: 92,
        defense: 55,
        hp: 65,
        speed: 88,
        gender: 'Female',
        val: 'Kana Hanazawa',
        portrait: 'slot_jericho_001.png'
    },
    gilthunder: {
        name: 'Gil Thunder',
        title: "The Gull's Sin of Gluttony",
        element: 'lightning',
        elementIcon: '⚡',
        weapon: 'Axe',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'A Tier',
        stars: '★★★★☆',
        attack: 88,
        defense: 50,
        hp: 60,
        speed: 82,
        gender: 'Male',
        val: 'Kazuyuki Okitsu',
        portrait: 'slot_gil_thunder_001.png'
    },
    howzer: {
        name: 'Howzer',
        title: "The Ram's Sin of Lust",
        element: 'wind',
        elementIcon: '💨',
        weapon: 'Lance',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'A Tier',
        stars: '★★★★☆',
        attack: 80,
        defense: 60,
        hp: 70,
        speed: 75,
        gender: 'Male',
        val: 'Tatsuhisa Suzuki',
        portrait: 'slot_howzer_001.png'
    },
    guila: {
        name: 'Guila',
        title: 'The Dark Knight',
        element: 'fire',
        elementIcon: '🔥',
        weapon: 'Sword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'A Tier',
        stars: '★★★★☆',
        attack: 85,
        defense: 55,
        hp: 65,
        speed: 78,
        gender: 'Female',
        val: 'Saori Hayami',
        portrait: 'slot_guila_001.png'
    },
    drake: {
        name: 'Drake',
        title: 'The Red Demon',
        element: 'lightning',
        elementIcon: '⚡',
        weapon: 'Axe',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'A Tier',
        stars: '★★★★☆',
        attack: 82,
        defense: 52,
        hp: 68,
        speed: 80,
        gender: 'Male',
        val: 'Daisuke Ono',
        portrait: 'slot_drake_001.png'
    },
    slader: {
        name: 'Slader',
        title: 'The Warrior',
        element: 'physical',
        elementIcon: '⚔️',
        weapon: 'Greatsword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'B Tier',
        stars: '★★★☆☆',
        attack: 75,
        defense: 65,
        hp: 72,
        speed: 70,
        gender: 'Male',
        val: 'Tomokazu Sugita',
        portrait: 'slot_slader_001.png'
    },
    tristan: {
        name: 'Tristan',
        title: 'The Young King',
        element: 'earth',
        elementIcon: '🌍',
        weapon: 'Sword',
        role: 'Support',
        rarity: 'SSR',
        tier: 'B Tier',
        stars: '★★★☆☆',
        attack: 65,
        defense: 70,
        hp: 80,
        speed: 68,
        gender: 'Male',
        val: 'Kaito Ishikawa',
        portrait: 'slot_tristan_001.png'
    },
    tioreh: {
        name: 'Tioreh',
        title: 'The Fairy',
        element: 'wind',
        elementIcon: '💨',
        weapon: 'Bow',
        role: 'Support',
        rarity: 'SSR',
        tier: 'B Tier',
        stars: '★★★☆☆',
        attack: 60,
        defense: 50,
        hp: 75,
        speed: 85,
        gender: 'Female',
        val: 'Aoi Yuki',
        portrait: 'slot_tioreh_001.png'
    },
    elaine: {
        name: 'Elaine',
        title: 'The Fairy Queen',
        element: 'wind',
        elementIcon: '💨',
        weapon: 'Staff',
        role: 'Support',
        rarity: 'SSR',
        tier: 'B Tier',
        stars: '★★★☆☆',
        attack: 55,
        defense: 48,
        hp: 82,
        speed: 78,
        gender: 'Female',
        val: 'Maaya Sakamoto',
        portrait: 'slot_elaine_001.png'
    },
    manny: {
        name: 'Manny',
        title: "The Mysterious",
        element: 'holy',
        elementIcon: '✨',
        weapon: 'Grimoire',
        role: 'Support',
        rarity: 'SSR',
        tier: 'C Tier',
        stars: '★★☆☆☆',
        attack: 50,
        defense: 55,
        hp: 85,
        speed: 65,
        gender: 'Male',
        val: 'Nobunaga Shimazaki',
        portrait: 'slot_manny_001.png'
    },
    griamore: {
        name: 'Griamore',
        title: 'The Noble Knight',
        element: 'earth',
        elementIcon: '🌍',
        weapon: 'Greatsword',
        role: 'Tank',
        rarity: 'SSR',
        tier: 'C Tier',
        stars: '★★☆☆☆',
        attack: 55,
        defense: 80,
        hp: 88,
        speed: 45,
        gender: 'Male',
        val: 'Yuichi Nakamura',
        portrait: 'slot_griamore_001.png'
    },
    hendrickson: {
        name: 'Hendrickson',
        title: 'The Former King',
        element: 'holy',
        elementIcon: '✨',
        weapon: 'Sword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'C Tier',
        stars: '★★☆☆☆',
        attack: 78,
        defense: 60,
        hp: 70,
        speed: 62,
        gender: 'Male',
        val: 'Jouji Nakata',
        portrait: 'slot_hendrickson_001.png'
    },
    dreyfus: {
        name: 'Dreyfus',
        title: 'The First Hero',
        element: 'physical',
        elementIcon: '⚔️',
        weapon: 'Greatsword',
        role: 'DPS',
        rarity: 'SSR',
        tier: 'C Tier',
        stars: '★★☆☆☆',
        attack: 72,
        defense: 58,
        hp: 68,
        speed: 60,
        gender: 'Male',
        val: 'Tomoyuki Morikawa',
        portrait: 'slot_dreyfus_001.png'
    }
};

function loadCharacterFromURL() {
    const params = new URLSearchParams(window.location.search);
    const charId = params.get('char');
    
    if (charId && charactersData[charId]) {
        const char = charactersData[charId];
        
        document.querySelector('.portrait-image').src = `https://sunderarmor.com/7DSO/Live/portraits/${char.portrait}`;
        document.querySelector('.portrait-image').alt = char.name;
        
        document.querySelector('.rarity-badge').textContent = char.rarity;
        document.querySelector('.element-badge').textContent = char.elementIcon;
        document.querySelector('.element-badge').className = `element-badge ${char.element}`;
        
        document.querySelector('.character-details h1').textContent = char.name;
        document.querySelector('.character-title').textContent = char.title;
        
        const statsContainer = document.querySelector('.character-stats');
        statsContainer.innerHTML = `
            <span class="stat">⚔️ <strong>Weapon:</strong> ${char.weapon}</span>
            <span class="stat">${char.elementIcon} <strong>Element:</strong> ${char.element.charAt(0).toUpperCase() + char.element.slice(1)}</span>
            <span class="stat">⚔️ <strong>Role:</strong> ${char.role}</span>
            <span class="stat">⭐ <strong>Rarity:</strong> ${char.rarity}</span>
        `;
        
        document.querySelector('.rating-tier').textContent = char.tier;
        document.querySelector('.rating-stars').textContent = char.stars;
        
        document.querySelector('.attr-fill.attack').style.width = char.attack + '%';
        document.querySelector('.attr-fill.attack').nextElementSibling.textContent = char.attack;
        
        document.querySelector('.attr-fill.defense').style.width = char.defense + '%';
        document.querySelector('.attr-fill.defense').nextElementSibling.textContent = char.defense;
        
        document.querySelector('.attr-fill.hp').style.width = char.hp + '%';
        document.querySelector('.attr-fill.hp').nextElementSibling.textContent = char.hp;
        
        document.querySelector('.attr-fill.speed').style.width = char.speed + '%';
        document.querySelector('.attr-fill.speed').nextElementSibling.textContent = char.speed;
        
        document.querySelectorAll('.info-value.ssr').forEach(el => el.textContent = char.rarity);
        
        const elementInfo = document.querySelector('.info-item:nth-child(2) .info-value');
        if (elementInfo) elementInfo.innerHTML = `${char.elementIcon} ${char.element.charAt(0).toUpperCase() + char.element.slice(1)}`;
        
        const weaponInfo = document.querySelector('.info-item:nth-child(3) .info-value');
        if (weaponInfo) weaponInfo.textContent = char.weapon;
        
        const roleInfo = document.querySelector('.info-item:nth-child(4) .info-value');
        if (roleInfo) roleInfo.textContent = char.role;
        
        document.title = `${char.name} - Character Guide | GameGuides`;
    }
}
