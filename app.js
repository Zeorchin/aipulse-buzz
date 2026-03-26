// AI Pulse - Interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Animate benchmark bars on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                barObserver.unobserve(bar);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bar-fill').forEach(bar => {
        barObserver.observe(bar);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add current date to hero badge
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
    });
    const badge = document.querySelector('.hero-badge');
    if (badge) {
        badge.textContent = `Last Updated: ${dateStr}`;
    }

    // Table row highlight on hover (accessibility)
    const tableRows = document.querySelectorAll('.leaderboard-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'var(--bg-tertiary)';
        });
        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
    });

    // Console easter egg
    console.log('%c◉ AI Pulse', 'font-size: 24px; font-weight: bold; color: #3b82f6;');
    console.log('%cTrack the frontier of AI.', 'color: #666;');
});
