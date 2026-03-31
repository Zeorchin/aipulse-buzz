document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initSearch();
    initBackToTop();
    initSmoothScroll();
    initTabs();
    initAnimations();
    initFaq();
});

function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    menuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            searchInput.focus();
        }
    });

    const searchInputField = document.getElementById('searchInput');
    searchInputField.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
            performSearch(query);
        }
    });
}

function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    const data = [
        { name: 'Meliodas', type: 'Character', element: 'Fire', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_meliodas_001.png', rarity: 'SSR' },
        { name: 'King', type: 'Character', element: 'Wind', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_king_001.png', rarity: 'SSR' },
        { name: 'Diane', type: 'Character', element: 'Earth', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_diane_001.png', rarity: 'SSR' },
        { name: 'Jericho', type: 'Character', element: 'Ice', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_jericho_001.png', rarity: 'SSR' },
        { name: 'Gil Thunder', type: 'Character', element: 'Lightning', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_gil_thunder_001.png', rarity: 'SSR' },
        { name: 'Howzer', type: 'Character', element: 'Wind', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_howzer_001.png', rarity: 'SSR' },
        { name: 'Guila', type: 'Character', element: 'Fire', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_guila_001.png', rarity: 'SSR' },
        { name: 'Drake', type: 'Character', element: 'Lightning', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_drake_001.png', rarity: 'SSR' },
        { name: 'Slader', type: 'Character', element: 'Physical', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_slader_001.png', rarity: 'SSR' },
        { name: 'Tristan', type: 'Character', element: 'Earth', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_tristan_001.png', rarity: 'SSR' },
        { name: 'Tioreh', type: 'Character', element: 'Wind', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_tioreh_001.png', rarity: 'SSR' },
        { name: 'Elaine', type: 'Character', element: 'Wind', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_elaine_001.png', rarity: 'SSR' },
        { name: 'Manny', type: 'Character', element: 'Holy', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_manny_001.png', rarity: 'SSR' },
        { name: 'Griamore', type: 'Character', element: 'Earth', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_griamore_001.png', rarity: 'SSR' },
        { name: 'Hendrickson', type: 'Character', element: 'Holy', url: 'character.html', icon: 'https://sunderarmor.com/7DSO/Live/portraits/slot_hendrickson_001.png', rarity: 'SSR' },
        { name: 'Tier List', type: 'Guide', url: 'tier-list.html', icon: '🏆', rarity: '' },
        { name: 'Weapons', type: 'Database', url: 'weapons.html', icon: '⚔️', rarity: '' },
        { name: 'Armor', type: 'Database', url: 'armor.html', icon: '🛡️', rarity: '' },
        { name: 'Pets', type: 'Database', url: 'pets.html', icon: '🐾', rarity: '' },
        { name: 'Banners', type: 'Guide', url: 'banners.html', icon: '🎰', rarity: '' },
        { name: 'Beginner Guide', type: 'Guide', url: 'beginner.html', icon: '📖', rarity: '' },
        { name: 'Guild', type: 'Guide', url: 'guild.html', icon: '🏰', rarity: '' },
        { name: 'Arena', type: 'Guide', url: 'arena.html', icon: '⚔️', rarity: '' },
        { name: 'Codes', type: 'Guide', url: 'codes.html', icon: '🎁', rarity: '' },
        { name: 'Bosses', type: 'Database', url: 'bosses.html', icon: '👹', rarity: '' },
        { name: 'Quests', type: 'Guide', url: 'quests.html', icon: '📋', rarity: '' },
        { name: 'Events', type: 'Guide', url: 'events.html', icon: '🎉', rarity: '' },
        { name: 'Activities', type: 'Guide', url: 'activities.html', icon: '🎯', rarity: '' },
        { name: 'Items', type: 'Database', url: 'items.html', icon: '🎒', rarity: '' },
        { name: 'Tips', type: 'Guide', url: 'tips.html', icon: '💡', rarity: '' },
        { name: 'FAQ', type: 'Guide', url: 'faq.html', icon: '❓', rarity: '' },
    ];
    
    const filtered = data.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.type.toLowerCase().includes(query) ||
        (item.element && item.element.toLowerCase().includes(query))
    );
    
    if (filtered.length > 0) {
        const resultsHTML = `
            <div class="search-categories">
                <h4>Results (${filtered.length})</h4>
                ${filtered.map(item => `
                    <a href="${item.url}" class="search-result-item">
                        ${item.icon ? (item.icon.startsWith('http') ? `<img src="${item.icon}" class="result-img" alt="${item.name}">` : `<span class="result-icon">${item.icon}</span>`) : `<span class="result-icon">📄</span>`}
                        <span class="result-text">${item.name}</span>
                        ${item.rarity ? `<span class="result-badge">${item.rarity}</span>` : ''}
                        ${item.element ? `<span class="result-element">${item.element}</span>` : ''}
                    </a>
                `).join('')}
            </div>
        `;
        searchResults.innerHTML = resultsHTML;
    } else {
        searchResults.innerHTML = `
            <div class="search-categories">
                <p style="text-align: center; color: var(--text-muted);">No results found for "${query}"</p>
                <p style="text-align: center; color: var(--text-muted); font-size: 0.8rem;">Try searching for: character, weapon, banner, guide</p>
            </div>
        `;
    }
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-link');
    
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
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
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

function initFaq() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    alert('Login feature coming soon! Create an account to save favorites and get notifications.');
});

document.querySelectorAll('.banner-card, .guide-card, .character-card, .item-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (this.tagName === 'A') return;
        const href = this.querySelector('a')?.getAttribute('href');
        if (href && href !== '#') {
            window.location.href = href;
        }
    });
});

function copyCode(code, btn) {
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
        }, 2000);
    });
}
