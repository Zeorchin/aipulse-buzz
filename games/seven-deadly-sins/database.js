document.addEventListener('DOMContentLoaded', () => {
    initWeaponFilters();
    initBossFilters();
});

function initWeaponFilters() {
    const typeBtns = document.querySelectorAll('.weapon-type-filters .filter-btn');
    const rarityBtns = document.querySelectorAll('.rarity-filters .rarity-btn');
    const weapons = document.querySelectorAll('.weapon-item');
    
    let currentType = 'all';
    let currentRarity = 'all';
    
    function filterWeapons() {
        weapons.forEach(weapon => {
            const type = weapon.dataset.type;
            const rarity = weapon.dataset.rarity;
            
            const typeMatch = currentType === 'all' || type === currentType;
            const rarityMatch = currentRarity === 'all' || rarity === currentRarity;
            
            weapon.style.display = typeMatch && rarityMatch ? 'flex' : 'none';
        });
    }
    
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.dataset.filter;
            filterWeapons();
        });
    });
    
    rarityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            rarityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRarity = btn.dataset.rarity;
            filterWeapons();
        });
    });
}

function initBossFilters() {
    const filterBtns = document.querySelectorAll('.boss-filters .filter-btn');
    const bosses = document.querySelectorAll('.boss-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            bosses.forEach(boss => {
                if (filter === 'all') {
                    boss.style.display = 'flex';
                } else {
                    boss.style.display = boss.dataset.type === filter ? 'flex' : 'none';
                }
            });
        });
    });
}
