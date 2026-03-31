document.addEventListener('DOMContentLoaded', () => {
    initFilters();
});

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const tierChars = document.querySelectorAll('.tier-char');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            tierChars.forEach(char => {
                if (filter === 'all') {
                    char.style.display = 'flex';
                } else {
                    const charEl = char.querySelector('.char-element');
                    
                    let show = false;
                    
                    if (filter === 'fire' && charEl.classList.contains('fire')) show = true;
                    else if (filter === 'ice' && charEl.classList.contains('ice')) show = true;
                    else if (filter === 'lightning' && charEl.classList.contains('lightning')) show = true;
                    else if (filter === 'wind' && charEl.classList.contains('wind')) show = true;
                    else if (filter === 'earth' && charEl.classList.contains('earth')) show = true;
                    else if (filter === 'holy' && charEl.classList.contains('holy')) show = true;
                    else if (filter === 'dark' && charEl.classList.contains('dark')) show = true;
                    else if (filter === 'physical' && charEl.classList.contains('physical')) show = true;
                    else if (filter === 'ssr') show = true;
                    
                    char.style.display = show ? 'flex' : 'none';
                }
            });
        });
    });
}
