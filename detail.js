// AI Pulse - Detail Page Script

document.addEventListener('DOMContentLoaded', () => {
    // Get the model ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('model');
    
    const detailContent = document.getElementById('detail-content');
    const relatedGrid = document.getElementById('related-grid');
    
    if (!modelId || !newsData[modelId]) {
        // Show error state if model not found
        detailContent.innerHTML = `
            <div class="error-state">
                <h2>Article Not Found</h2>
                <p>The requested article could not be found. It may have been removed or the URL might be incorrect.</p>
                <a href="index.html#news" class="back-link">← Back to News</a>
            </div>
        `;
        document.title = 'AI Pulse | Article Not Found';
        return;
    }
    
    const article = newsData[modelId];
    
    // Update page title
    document.title = `${article.title} | AI Pulse`;
    
    // Render the article
    detailContent.innerHTML = renderArticle(article);
    
    // Render related articles
    const relatedArticles = getRelatedArticles(modelId, 3);
    relatedGrid.innerHTML = relatedArticles.map(a => renderRelatedCard(a)).join('');
    
    // Animate stats on load
    animateStats();
});

function renderArticle(article) {
    const statsHtml = article.stats ? `
        <div class="detail-stats">
            ${article.stats.map(stat => `
                <div class="detail-stat">
                    <span class="detail-stat-value">${stat.value}</span>
                    <span class="detail-stat-label">${stat.label}</span>
                </div>
            `).join('')}
        </div>
    ` : '';
    
    const pricingHtml = article.pricing ? `
        <div class="detail-pricing">
            <h4>API Pricing</h4>
            <div class="pricing-row">
                <span class="pricing-label">Input Tokens</span>
                <span class="pricing-value">${article.pricing.input} / 1M</span>
            </div>
            <div class="pricing-row">
                <span class="pricing-label">Output Tokens</span>
                <span class="pricing-value">${article.pricing.output} / 1M</span>
            </div>
            <div class="pricing-row">
                <span class="pricing-label">Context Window</span>
                <span class="pricing-value">${article.pricing.context}</span>
            </div>
        </div>
    ` : '';
    
    const specsHtml = article.specs ? `
        <div class="detail-specs">
            <h3>Technical Specifications</h3>
            <div class="spec-grid">
                ${Object.entries(article.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <span class="spec-label">${key}</span>
                        <span class="spec-value">${value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    const highlightsHtml = article.highlights ? `
        <div class="key-highlights">
            <h3>Key Highlights</h3>
            <ul>
                ${article.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    ` : '';
    
    return `
        <header class="detail-header">
            <div class="detail-meta">
                <span class="detail-tag" style="background-color: ${article.tagColor || 'var(--accent)'}">${article.tag}</span>
                <span class="detail-date">${article.date}</span>
            </div>
            <h1>${article.title}</h1>
            <p class="detail-subtitle">${article.subtitle}</p>
        </header>
        
        <div class="detail-content">
            ${statsHtml}
            <p>${article.summary}</p>
            ${article.content}
            ${pricingHtml}
            ${specsHtml}
            ${highlightsHtml}
        </div>
    `;
}

function renderRelatedCard(article) {
    return `
        <a href="detail.html?model=${article.id}" class="related-card">
            <div class="news-meta">
                <span class="news-date">${article.date}</span>
                <span class="news-tag">${article.tag}</span>
            </div>
            <h4>${article.title}</h4>
            <p>${article.subtitle}</p>
        </a>
    `;
}

function animateStats() {
    const stats = document.querySelectorAll('.detail-stat-value');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(10px)';
        setTimeout(() => {
            stat.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, index * 100);
    });
}
