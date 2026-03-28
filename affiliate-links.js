// Affiliate Links Configuration for AI Pulse
// Update these links with your actual affiliate/referral codes

const affiliateLinks = {
    // OpenAI
    openai: {
        name: "OpenAI",
        url: "https://chat.openai.com", // Replace with your referral link
        displayText: "Try ChatGPT",
        programs: [
            { name: "ChatGPT Plus", commission: "$20/subscription" }
        ]
    },
    
    // Anthropic
    anthropic: {
        name: "Anthropic",
        url: "https://claude.ai", // Replace with your referral link
        displayText: "Try Claude",
        programs: [
            { name: "Claude Pro", commission: "Usage credits" }
        ]
    },
    
    // Google
    google: {
        name: "Google",
        url: "https://gemini.google.com", // Replace with your referral link
        displayText: "Try Gemini",
        programs: [
            { name: "Google Cloud", commission: "$350 credits" },
            { name: "Gemini Advanced", commission: "$20/subscription" }
        ]
    },
    
    // xAI
    xai: {
        name: "xAI",
        url: "https://grok.x.ai", // Replace with your referral link
        displayText: "Try Grok",
        programs: [
            { name: "X Premium+", commission: "Subscription" }
        ]
    },
    
    // Alibaba
    alibaba: {
        name: "Alibaba Cloud",
        url: "https://www.alibabacloud.com", // Replace with your referral link
        displayText: "Try Qwen",
        programs: [
            { name: "Alibaba Cloud", commission: "Credits/referral" }
        ]
    },
    
    // Zhipu
    zhipu: {
        name: "Zhipu AI",
        url: "https://chatglm.cn", // Replace with your referral link
        displayText: "Try GLM",
        programs: [
            { name: "GLM API", commission: "Usage based" }
        ]
    },
    
    // Cloud Providers (General)
    aws: {
        name: "Amazon Web Services",
        url: "https://aws.amazon.com/free", // Replace with affiliate link
        displayText: "Get AWS Credits",
        programs: [
            { name: "AWS Free Tier", commission: "$5-150" }
        ]
    },
    
    googleCloud: {
        name: "Google Cloud",
        url: "https://cloud.google.com/free", // Replace with affiliate link
        displayText: "Get $300 Credits",
        programs: [
            { name: "GCP Free Tier", commission: "$350 credits" }
        ]
    },
    
    azure: {
        name: "Microsoft Azure",
        url: "https://azure.microsoft.com/free", // Replace with affiliate link
        displayText: "Get $200 Credits",
        programs: [
            { name: "Azure Free", commission: "$200 credits" }
        ]
    },
    
    // AI Infrastructure
    replicate: {
        name: "Replicate",
        url: "https://replicate.com", // Replace with referral link
        displayText: "Run Models in Cloud",
        programs: [
            { name: "API Usage", commission: "Usage based" }
        ]
    },
    
    together: {
        name: "Together AI",
        url: "https://www.together.ai", // Replace with referral link
        displayText: "Fast Inference",
        programs: [
            { name: "API Credits", commission: "$25 credits" }
        ]
    }
};

// Helper function to get affiliate link
function getAffiliateLink(provider) {
    return affiliateLinks[provider] || null;
}

// Helper to generate affiliate button HTML
function generateAffiliateButton(provider, customText = null) {
    const link = getAffiliateLink(provider);
    if (!link) return '';
    
    return `
        <a href="${link.url}" 
           target="_blank" 
           rel="sponsored noopener"
           class="affiliate-btn"
           data-provider="${provider}">
            ${customText || link.displayText}
            <span class="affiliate-icon">↗</span>
        </a>
    `;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { affiliateLinks, getAffiliateLink, generateAffiliateButton };
}
