// AI Pulse - Detail Page Script with Hero Images

// Image mapping for different AI models/companies
const heroImages = {
    'kimi-k2': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    'qwen-3-6-plus': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop',
    'nova-premier': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    'gpt-5-4': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
    'mimo-v2-pro': 'https://images.unsplash.com/photo-1555664424-778a69022365?w=1200&h=600&fit=crop',
    'claude-opus-4-6': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
    'minimax-m2-7': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    'deepseek-v4': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    'mistral-small-4': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop',
    'nemotron-3': 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=1200&h=600&fit=crop',
    'google-turboquant': 'https://images.unsplash.com/photo-1573804633927-bfcbcd9093bb?w=1200&h=600&fit=crop',
    'mcp-97-million': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    'openai-sora-discontinued': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    'openclaw-v2026-3-22': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=600&fit=crop',
    'gemini-3-1-pro': 'https://images.unsplash.com/photo-1573804633927-bfcbcd9093bb?w=1200&h=600&fit=crop',
    'claude-sonnet-4-6': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
    'grok-4-20': 'https://images.unsplash.com/photo-1614726365723-49cfae92782f?w=1200&h=600&fit=crop',
    'gpt-5-3-codex': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    'qwen-3-5': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop',
    'glm-5': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop',
    'openai-chatgpt-ads': 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
    'default': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop'
};

// Related article images
const relatedImages = {
    'kimi-k2': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
    'qwen-3-6-plus': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=250&fit=crop',
    'nova-premier': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
    'gpt-5-4': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    'mimo-v2-pro': 'https://images.unsplash.com/photo-1555664424-778a69022365?w=400&h=250&fit=crop',
    'claude-opus-4-6': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    'minimax-m2-7': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
    'deepseek-v4': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
    'mistral-small-4': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop',
    'nemotron-3': 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=400&h=250&fit=crop',
    'google-turboquant': 'https://images.unsplash.com/photo-1573804633927-bfcbcd9093bb?w=400&h=250&fit=crop',
    'default': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop'
};

document.addEventListener('DOMContentLoaded', () => {
    // Get the model ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const modelId = urlParams.get('model');
    
    const detailContent = document.getElementById('detail-content');
    const relatedGrid = document.getElementById('related-grid');
    const heroContent = document.getElementById('hero-content');
    const heroImage = document.getElementById('hero-image');
    const sidebarPricing = document.getElementById('sidebar-pricing');
    const sidebarSpecs = document.getElementById('sidebar-specs');
    
    if (!modelId || !newsData[modelId]) {
        // Show error state if model not found
        detailContent.innerHTML = `
            <div class="error-state">
                <h2>Article Not Found</h2>
                <p>The requested article could not be found. It may have been removed or the URL might be incorrect.</p>
                <a href="ai-news.html" class="back-link">← Back to News</a>
            </div>
        `;
        document.title = 'AI Pulse | Article Not Found';
        return;
    }
    
    const article = newsData[modelId];
    
    // Update page title
    document.title = `${article.title} | AI Pulse`;
    
    // Set hero image
    const heroImgUrl = heroImages[modelId] || heroImages['default'];
    heroImage.style.backgroundImage = `url('${heroImgUrl}')`;
    
    // Render hero content
    heroContent.innerHTML = renderHero(article);
    
    // Render the article content
    detailContent.innerHTML = renderArticle(article);
    
    // Render sidebar widgets
    sidebarPricing.innerHTML = renderPricingWidget(article);
    sidebarSpecs.innerHTML = renderSpecsWidget(article);
    
    // Render related articles
    const relatedArticles = getRelatedArticles(modelId, 3);
    relatedGrid.innerHTML = relatedArticles.map(a => renderRelatedCard(a)).join('');
    
    // Animate stats on load
    animateStats();
});

function renderHero(article) {
    return `
        <span class="hero-tag" style="background-color: ${article.tagColor || '#6366f1'}">${article.tag}</span>
        <h1 class="hero-title">${article.title}</h1>
        <p class="hero-subtitle">${article.subtitle}</p>
        <div class="hero-date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${article.date}
        </div>
    `;
}

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
    
    const highlightsHtml = article.highlights ? `
        <div class="key-highlights">
            <h3>Key Highlights</h3>
            <ul>
                ${article.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    ` : '';
    
    return `
        <div class="detail-content">
            ${statsHtml}
            <p><strong>${article.summary}</strong></p>
            ${article.content}
            ${highlightsHtml}
        </div>
    `;
}

function renderPricingWidget(article) {
    if (!article.pricing) return '';
    
    return `
        <div class="sidebar-card">
            <h4>💰 API Pricing</h4>
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
                <span class="pricing-value context">${article.pricing.context}</span>
            </div>
        </div>
    `;
}

function renderSpecsWidget(article) {
    if (!article.specs) return '';
    
    const specsList = Object.entries(article.specs).map(([key, value]) => `
        <div class="spec-item">
            <span class="spec-label">${key}</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
    
    return `
        <div class="sidebar-card">
            <h4>⚙️ Specifications</h4>
            ${specsList}
        </div>
    `;
}

function renderRelatedCard(article) {
    const imageUrl = relatedImages[article.id] || relatedImages['default'];
    
    return `
        <a href="detail.html?model=${article.id}" class="related-card">
            <div class="related-card-image" style="background-image: url('${imageUrl}')">
                <span class="related-card-tag" style="background-color: ${article.tagColor || '#6366f1'}">${article.tag}</span>
            </div>
            <div class="related-card-content">
                <div class="related-card-date">${article.date}</div>
                <h4>${article.title}</h4>
                <p>${article.subtitle}</p>
            </div>
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
