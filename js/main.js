document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTabs();
    initSearch();
    initTooltips();
    initAnimations();
});

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-menu .dropdown');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });

    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.cssText = 'display: none; background: none; border: none; color: white; font-size: 24px; cursor: pointer;';
    
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        const existingBtn = navMenu.querySelector('.mobile-menu-btn');
        if (!existingBtn) {
            navMenu.insertBefore(mobileMenuBtn, navMenu.firstChild);
            
            mobileMenuBtn.addEventListener('click', function() {
                const ul = navMenu.querySelector('ul');
                if (ul) {
                    ul.style.display = ul.style.display === 'none' ? 'flex' : 'none';
                }
            });
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
}

function handleResize() {
    const navMenu = document.querySelector('.nav-menu');
    const ul = navMenu ? navMenu.querySelector('ul') : null;
    const mobileBtn = navMenu ? navMenu.querySelector('.mobile-menu-btn') : null;
    
    if (window.innerWidth <= 768) {
        if (ul) ul.style.display = 'none';
        if (mobileBtn) mobileBtn.style.display = 'block';
    } else {
        if (ul) ul.style.display = 'flex';
        if (mobileBtn) mobileBtn.style.display = 'none';
    }
}

function initTabs() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const target = this.dataset.tab;
                
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                this.classList.add('active');
                container.querySelector(`#${target}`).classList.add('active');
            });
        });
    });
}

function initSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.trim();
    
    if (query.length > 0) {
        console.log('Searching for:', query);
    }
}

function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(el => {
        el.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-text';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                padding: 8px 12px;
                background: #1a1a2e;
                border: 1px solid #2a2a4a;
                border-radius: 5px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                margin-bottom: 5px;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
        });
        
        el.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.tooltip-text');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.card, .list-item, .guide-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

function filterByType(type) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else {
            const cardType = card.dataset.type;
            card.style.display = cardType === type ? 'block' : 'none';
        }
    });
}

function sortCards(sortBy) {
    const container = document.querySelector('.card-grid');
    const cards = Array.from(document.querySelectorAll('.card'));
    
    cards.sort((a, b) => {
        const aValue = a.dataset[sortBy];
        const bValue = b.dataset[sortBy];
        
        if (sortBy === 'name') {
            return aValue.localeCompare(bValue);
        }
        return parseInt(bValue) - parseInt(aValue);
    });
    
    cards.forEach(card => container.appendChild(card));
}

function loadMore(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.classList.add('loading');
        
        setTimeout(() => {
            container.classList.remove('loading');
        }, 1000);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme + '-theme');
}
