// AI Pulse - News Data
// All detailed news articles stored here

const newsData = {
    "gemini-3-1-pro": {
        id: "gemini-3-1-pro",
        title: "Gemini 3.1 Pro",
        developer: "Google",
        date: "Feb 19, 2026",
        tag: "Google",
        tagColor: "#4285f4",
        subtitle: "Google retakes the benchmark crown with unprecedented reasoning capabilities and massive context window.",
        summary: "Google's Gemini 3.1 Pro represents a significant leap forward in AI capabilities, achieving 77.1% on ARC-AGI-2 (more than double the previous Gemini 3 Pro score) and 94.3% on GPQA Diamond. It leads on 13 of 16 tracked benchmarks while maintaining an industry-leading 1 million token context window.",
        content: `
            <p>Google has officially unveiled Gemini 3.1 Pro, marking a significant milestone in the evolution of large language models. This release represents Google's most ambitious AI model to date, designed to compete directly with OpenAI's GPT-5 series and Anthropic's Claude Opus 4.6.</p>
            
            <h2>Breakthrough Performance</h2>
            <p>The standout achievement of Gemini 3.1 Pro is its performance on ARC-AGI-2, scoring an impressive 77.1%. This is more than double the score of its predecessor, Gemini 3 Pro, and represents a fundamental leap in the model's ability to handle novel reasoning puzzles that can't be solved through memorization alone.</p>
            
            <p>On GPQA Diamond, a benchmark consisting of PhD-level science questions across physics, chemistry, and biology, Gemini 3.1 Pro achieved 94.3% accuracy—setting a new state-of-the-art record.</p>
            
            <h2>Technical Specifications</h2>
            <ul>
                <li><strong>Context Window:</strong> 1,000,000 tokens (industry-leading)</li>
                <li><strong>Architecture:</strong> Mixture of Experts (MoE) with sparse activation</li>
                <li><strong>Training Data:</strong> Multimodal corpus including text, code, images, audio, and video</li>
                <li><strong>Languages Supported:</strong> 40+ languages with native-level proficiency</li>
            </ul>
            
            <h2>Benchmark Results</h2>
            <p>Gemini 3.1 Pro leads on 13 out of 16 tracked benchmarks, including:</p>
            <ul>
                <li>ARC-AGI-2: 77.1% (State-of-the-art)</li>
                <li>GPQA Diamond: 94.3% (State-of-the-art)</li>
                <li>SWE-bench Verified: 80.6%</li>
                <li>HumanEval: 96.2%</li>
                <li>MMLU: 90.5%</li>
            </ul>
            
            <h2>Real-World Applications</h2>
            <p>Google has positioned Gemini 3.1 Pro as the ideal model for:</p>
            <ul>
                <li>Enterprise document analysis (handling entire codebases, legal documents, research papers)</li>
                <li>Multi-step reasoning tasks requiring long-term context retention</li>
                <li>Scientific research and data analysis</li>
                <li>Complex coding workflows and software architecture design</li>
            </ul>
            
            <h2>Availability & Pricing</h2>
            <p>Gemini 3.1 Pro is available through the Google AI Studio, Vertex AI, and the Gemini API. The model is also integrated into Google Workspace applications and the consumer Gemini Advanced subscription (~HK$148/month).</p>
            
            <p>For API access, pricing is set at $2.00 per million input tokens and $12.00 per million output tokens, positioning it competitively against Claude Opus 4.6 while offering significantly larger context capacity.</p>
        `,
        stats: [
            { label: "ARC-AGI-2", value: "77.1%" },
            { label: "GPQA Diamond", value: "94.3%" },
            { label: "SWE-bench", value: "80.6%" },
            { label: "Context Window", value: "1M" }
        ],
        pricing: {
            input: "$2.00",
            output: "$12.00",
            context: "1M tokens"
        },
        specs: {
            "Architecture": "MoE",
            "Parameters": "Undisclosed",
            "Context": "1M tokens",
            "Languages": "40+"
        },
        highlights: [
            "Industry-leading 1 million token context window",
            "State-of-the-art performance on 13 of 16 benchmarks",
            "More than 2x improvement on ARC-AGI-2 vs previous version",
            "Native multimodal capabilities (text, image, audio, video)",
            "Competitive pricing for the performance tier"
        ]
    },
    
    "claude-sonnet-4-6": {
        id: "claude-sonnet-4-6",
        title: "Claude Sonnet 4.6",
        developer: "Anthropic",
        date: "Feb 17, 2026",
        tag: "Anthropic",
        tagColor: "#d4a574",
        subtitle: "Near-Opus performance at Sonnet pricing. Best-in-class agentic capabilities with enhanced tool use.",
        summary: "Anthropic's Claude Sonnet 4.6 delivers flagship-level performance at a fraction of the cost. With significantly improved agentic capabilities, enhanced tool use, and a 1 million token context window in beta, it represents the sweet spot for most production use cases.",
        content: `
            <p>Anthropic continues its rapid iteration cycle with Claude Sonnet 4.6, a mid-tier model that punches well above its weight class. This release narrows the gap between Sonnet and Opus to the point where many users may find Sonnet sufficient for tasks that previously required the flagship model.</p>
            
            <h2>Agentic Excellence</h2>
            <p>The defining characteristic of Claude Sonnet 4.6 is its agentic capability. The model demonstrates exceptional performance on tasks requiring:</p>
            <ul>
                <li>Multi-step planning and execution</li>
                <li>Tool selection and orchestration</li>
                <li>Reflection and self-correction</li>
                <li>Long-horizon task completion</li>
            </ul>
            
            <h2>Performance Improvements</h2>
            <p>Compared to Sonnet 4.5, version 4.6 shows meaningful improvements across the board:</p>
            <ul>
                <li>+8% on SWE-bench Verified (72% → 78%)</li>
                <li>+5% on HumanEval</li>
                <li>+12% on agentic task benchmarks</li>
                <li>Significantly reduced hallucination rates</li>
            </ul>
            
            <h2>Extended Context (Beta)</h2>
            <p>Perhaps most exciting is the availability of a 1 million token context window in beta. This puts Claude Sonnet 4.6 on par with Gemini's context capabilities, enabling:</p>
            <ul>
                <li>Analysis of entire codebases in a single pass</li>
                <li>Long document summarization and comparison</li>
                <li>Extended conversation history retention</li>
                <li>Complex research workflows</li>
            </ul>
            
            <h2>Responsible AI</h2>
            <p>Anthropic maintains its focus on AI safety with Sonnet 4.6, implementing:</p>
            <ul>
                <li>Constitutional AI training for reduced harmful outputs</li>
                <li>Improved refusal capabilities for sensitive requests</li>
                <li>Better transparency about uncertainty</li>
                <li>Reduced sycophancy and increased honesty</li>
            </ul>
            
            <h2>Availability</h2>
            <p>Claude Sonnet 4.6 is available through the Anthropic API, Amazon Bedrock, and Google Cloud's Vertex AI. It is also the default model for Claude Pro subscribers.</p>
        `,
        stats: [
            { label: "SWE-bench", value: "78%" },
            { label: "GPQA", value: "87%" },
            { label: "Context", value: "1M (β)" },
            { label: "Agent Tasks", value: "+12%" }
        ],
        pricing: {
            input: "$3.00",
            output: "$15.00",
            context: "1M tokens (beta)"
        },
        specs: {
            "Architecture": "Transformer",
            "Context Window": "200K (1M beta)",
            "Knowledge Cutoff": "Early 2026",
            "API Latency": "Fast"
        },
        highlights: [
            "Near-Opus performance at 40% of the price",
            "Best-in-class agentic task execution",
            "1M token context window in beta",
            "Enhanced tool use and function calling",
            "Significantly improved coding capabilities"
        ]
    },
    
    "grok-4-20": {
        id: "grok-4-20",
        title: "Grok 4.20",
        developer: "xAI",
        date: "Feb 17, 2026",
        tag: "xAI",
        tagColor: "#ff6b6b",
        subtitle: "Four AI agents running in parallel with a new architecture for distributed reasoning.",
        summary: "Elon Musk's xAI introduces Grok 4.20 with a revolutionary multi-agent architecture. The model runs four specialized agents in parallel, enabling distributed reasoning, real-time data processing, and advanced capabilities for X platform integration.",
        content: `
            <p>xAI has taken a bold and unconventional approach with Grok 4.20, eschewing the traditional single-model paradigm in favor of a distributed multi-agent architecture. This release represents one of the most significant architectural innovations in the current generation of AI systems.</p>
            
            <h2>The Four-Agent Architecture</h2>
            <p>Grok 4.20 runs four specialized agents simultaneously:</p>
            <ul>
                <li><strong>Reasoning Agent:</strong> Handles complex logical inference and problem-solving</li>
                <li><strong>Knowledge Agent:</strong> Maintains and retrieves factual information with real-time updates</li>
                <li><strong>Creative Agent:</strong> Generates novel content, code, and solutions</li>
                <li><strong>Critique Agent:</strong> Reviews and refines outputs from the other agents</li>
            </ul>
            
            <p>These agents operate in parallel, with a meta-coordinator synthesizing their outputs into coherent responses. This architecture enables Grok 4.20 to tackle problems from multiple angles simultaneously.</p>
            
            <h2>Real-Time Performance</h2>
            <p>Grok 4.20 has demonstrated impressive performance in real-time applications:</p>
            <ul>
                <li>Arena Elo rating: 1,505-1,535 (among top-tier models)</li>
                <li>Real-time trading signal generation</li>
                <li>Live news analysis and synthesis</li>
                <li>X (Twitter) trend prediction and analysis</li>
            </ul>
            
            <h2>Massive Context Options</h2>
            <p>xAI offers flexible context windows to suit different use cases:</p>
            <ul>
                <li>Standard: 256K tokens</li>
                <li>Extended: 1M tokens</li>
                <li>Maximum: 2M tokens (largest available)</li>
            </ul>
            
            <h2>X Platform Integration</h2>
            <p>Grok 4.20 is deeply integrated with X (formerly Twitter), offering unique capabilities:</p>
            <ul>
                <li>Real-time access to X posts and trends</li>
                <li>Sentiment analysis at scale</li>
                <li>Breaking news detection and summarization</li>
                <li>Community note-style fact-checking</li>
            </ul>
            
            <h2>Availability</h2>
            <p>Grok 4.20 is available through xAI's API and is included with X Premium+ subscriptions. API pricing is competitive with mid-tier models despite the multi-agent architecture.</p>
        `,
        stats: [
            { label: "Arena Elo", value: "1,535" },
            { label: "Agents", value: "4" },
            { label: "Max Context", value: "2M" },
            { label: "Real-time", value: "Yes" }
        ],
        pricing: {
            input: "Competitive",
            output: "Competitive",
            context: "Up to 2M tokens"
        },
        specs: {
            "Architecture": "Multi-Agent",
            "Agents": "4 parallel",
            "Max Context": "2M tokens",
            "Real-time Data": "X Platform"
        },
        highlights: [
            "Revolutionary 4-agent parallel architecture",
            "Massive 2 million token context option",
            "Real-time X platform integration",
            "Strong performance on trading and market analysis",
            "Unique critique-and-refine output process"
        ]
    },
    
    "gpt-5-3-codex": {
        id: "gpt-5-3-codex",
        title: "GPT-5.3 Codex",
        developer: "OpenAI",
        date: "Feb 5, 2026",
        tag: "OpenAI",
        tagColor: "#10a37f",
        subtitle: "Agentic coding specialist optimized for autonomous DevOps tasks and multi-agent workflows.",
        summary: "OpenAI's GPT-5.3 Codex is purpose-built for software engineering. Achieving 77.3% on Terminal-Bench 2.0, it excels at autonomous DevOps tasks, code generation, and multi-agent enabled workflows for complex development scenarios.",
        content: `
            <p>OpenAI continues to expand the GPT-5 family with Codex, a model specifically optimized for software engineering tasks. While general-purpose models like GPT-5.2 handle a broad range of applications, Codex is laser-focused on being the best coding assistant available.</p>
            
            <h2>Coding Excellence</h2>
            <p>GPT-5.3 Codex achieves remarkable results on coding benchmarks:</p>
            <ul>
                <li>Terminal-Bench 2.0: 77.3% (autonomous DevOps tasks)</li>
                <li>SWE-bench Verified: 79.8%</li>
                <li>HumanEval: 97.5%</li>
                <li>LiveCodeBench: State-of-the-art</li>
            </ul>
            
            <h2>Agentic DevOps</h2>
            <p>What sets Codex apart is its ability to perform autonomous DevOps workflows:</p>
            <ul>
                <li>Shell command execution in sandboxed environments</li>
                <li>Automated debugging and error correction</li>
                <li>Dependency management and installation</li>
                <li>CI/CD pipeline configuration and troubleshooting</li>
                <li>Infrastructure-as-code generation (Terraform, CloudFormation)</li>
            </ul>
            
            <h2>Multi-Agent Variant</h2>
            <p>OpenAI offers a multi-agent enabled variant of Codex specifically designed for complex software projects:</p>
            <ul>
                <li>Code Review Agent: Analyzes and critiques code quality</li>
                <li>Testing Agent: Generates comprehensive test suites</li>
                <li>Documentation Agent: Creates inline and external documentation</li>
                <li>Security Agent: Identifies vulnerabilities and suggests fixes</li>
            </ul>
            
            <h2>Extended Context for Codebases</h2>
            <p>With a 400K token context window, Codex can process substantial portions of large codebases, enabling:</p>
            <ul>
                <li>Cross-file refactoring across hundreds of files</li>
                <li>Understanding complex architectural patterns</li>
                <li>Maintaining consistency across large projects</li>
                <li>Analyzing dependencies and their interactions</li>
            </ul>
            
            <h2>Availability</h2>
            <p>GPT-5.3 Codex is available through the OpenAI API and is integrated into GitHub Copilot. The multi-agent variant requires enterprise API access.</p>
        `,
        stats: [
            { label: "Terminal-Bench", value: "77.3%" },
            { label: "SWE-bench", value: "79.8%" },
            { label: "HumanEval", value: "97.5%" },
            { label: "Context", value: "400K" }
        ],
        pricing: {
            input: "~$1.25",
            output: "~$10.00",
            context: "400K tokens"
        },
        specs: {
            "Specialization": "Coding/DevOps",
            "Context Window": "400K tokens",
            "Multi-Agent": "Available",
            "Training Focus": "Code & Tools"
        },
        highlights: [
            "77.3% on Terminal-Bench 2.0 for autonomous DevOps",
            "Multi-agent enabled variant for complex projects",
            "400K context window for large codebase analysis",
            "Integrated with GitHub Copilot",
            "Excels at shell commands and CI/CD workflows"
        ]
    },
    
    "qwen-3-5": {
        id: "qwen-3-5",
        title: "Qwen 3.5",
        developer: "Alibaba",
        date: "Feb 2026",
        tag: "Alibaba",
        tagColor: "#ff6a00",
        subtitle: "Open-weight model closing the gap with proprietary systems at a fraction of the cost.",
        summary: "Alibaba's Qwen 3.5 demonstrates that open-weight models can compete with proprietary systems. With strong performance across benchmarks, a 1 million token context window, and pricing at just HK$3 per million input tokens, it offers exceptional value.",
        content: `
            <p>Alibaba Cloud's Qwen 3.5 represents a significant milestone for open-weight AI models. This release proves that open models can achieve performance competitive with proprietary systems while maintaining the flexibility and cost advantages that come with open weights.</p>
            
            <h2>Open-Weight Advantages</h2>
            <p>As an open-weight model, Qwen 3.5 offers unique benefits:</p>
            <ul>
                <li><strong>Self-Hosting:</strong> Deploy on your own infrastructure</li>
                <li><strong>Customization:</strong> Fine-tune for specific domains</li>
                <li><strong>Privacy:</strong> Keep data within your organization</li>
                <li><strong>Cost Control:</strong> No per-token API costs for local deployments</li>
                <li><strong>Transparency:</strong> Full visibility into model architecture</li>
            </ul>
            
            <h2>Competitive Performance</h2>
            <p>Qwen 3.5 delivers impressive results across standard benchmarks:</p>
            <ul>
                <li>MMLU: 87.5% (approaching GPT-4 level)</li>
                <li>HumanEval: 92.3%</li>
                <li>GPQA Diamond: 88.4%</li>
                <li>SWE-bench Verified: 76.4%</li>
            </ul>
            
            <h2>Massive Context Window</h2>
            <p>Qwen 3.5 features a 1 million token context window, matching the largest offerings from Google and Anthropic:</p>
            <ul>
                <li>Process entire books or long documents</li>
                <li>Analyze large codebases without chunking</li>
                <li>Maintain extended conversation context</li>
                <li>Perform cross-document analysis</li>
            </ul>
            
            <h2>Multilingual Excellence</h2>
            <p>True to its origins, Qwen 3.5 excels at multilingual tasks, with particular strength in:</p>
            <ul>
                <li>Chinese (Simplified and Traditional)</li>
                <li>English</li>
                <li>Japanese and Korean</li>
                <li>Southeast Asian languages</li>
                <li>Code-switching between languages</li>
            </ul>
            
            <h2>Exceptional Value</h2>
            <p>Through Alibaba Cloud's international pricing, Qwen 3.5 is available at approximately HK$3 per million input tokens and HK$9 per million output tokens—making it one of the most cost-effective high-performance models available.</p>
            
            <h2>Availability</h2>
            <p>Qwen 3.5 weights are available for download on Hugging Face and ModelScope. API access is provided through Alibaba Cloud and various inference providers including Together AI and Fireworks AI.</p>
        `,
        stats: [
            { label: "MMLU", value: "87.5%" },
            { label: "GPQA", value: "88.4%" },
            { label: "SWE-bench", value: "76.4%" },
            { label: "Context", value: "1M" }
        ],
        pricing: {
            input: "~$0.40",
            output: "~$1.20",
            context: "1M tokens"
        },
        specs: {
            "License": "Open Weight",
            "Parameters": "Available",
            "Context Window": "1M tokens",
            "Languages": "29+"
        },
        highlights: [
            "Open-weight model with competitive performance",
            "Exceptional value at ~HK$3/M input tokens",
            "1 million token context window",
            "Strong multilingual capabilities",
            "Self-hosting and fine-tuning available"
        ]
    },
    
    "glm-5": {
        id: "glm-5",
        title: "GLM-5",
        developer: "Zhipu AI",
        date: "Feb 11, 2026",
        tag: "Zhipu AI",
        tagColor: "#6366f1",
        subtitle: "New entrant to the frontier with highest-rated launch on OpenRouter.",
        summary: "Zhipu AI's GLM-5 makes a strong debut as a new contender in the frontier model space. Launching with the highest rating on OpenRouter and competitive benchmark scores, it demonstrates China's continued advancement in AI development.",
        content: `
            <p>Zhipu AI has emerged as a serious contender in the global AI race with GLM-5, their most capable model to date. This release represents years of research into the GLM (General Language Model) architecture and positions Zhipu as a key player alongside international leaders.</p>
            
            <h2>OpenRouter Success</h2>
            <p>GLM-5 launched with immediate recognition on OpenRouter, achieving:</p>
            <ul>
                <li>Highest user rating at launch</li>
                <li>Strong preference in blind comparisons</li>
                <li>High throughput and reliability</li>
                <li>Competitive pricing relative to performance</li>
            </ul>
            
            <h2>Balanced Capabilities</h2>
            <p>GLM-5 demonstrates well-rounded performance across domains:</p>
            <ul>
                <li>Reasoning: Strong performance on logic puzzles and mathematics</li>
                <li>Coding: Competitive on HumanEval and live coding tasks</li>
                <li>Knowledge: Broad coverage with good recency</li>
                <li>Instruction Following: Excellent adherence to complex prompts</li>
            </ul>
            
            <h2>GLM Architecture</h2>
            <p>GLM-5 builds on the General Language Model architecture with innovations:</p>
            <ul>
                <li>Unified pre-training for understanding and generation</li>
                <li>Autoregressive blank infilling for better comprehension</li>
                <li>Multi-task pre-training approach</li>
                <li>Efficient attention mechanisms</li>
            </ul>
            
            <h2>Chinese Language Excellence</h2>
            <p>GLM-5 particularly excels at Chinese language tasks:</p>
            <ul>
                <li>Classical Chinese understanding</li>
                <li>Modern Chinese idiom and expression usage</li>
                <li>Chinese creative writing</li>
                <li>Translation between Chinese and other languages</li>
            </ul>
            
            <h2>Enterprise Focus</h2>
            <p>Zhipu AI has positioned GLM-5 for enterprise adoption with:</p>
            <ul>
                <li>On-premise deployment options</li>
                <li>Customization services</li>
                <li>Industry-specific fine-tuning</li>
                <li>Integration support for existing systems</li>
            </ul>
            
            <h2>Availability</h2>
            <p>GLM-5 is available through Zhipu AI's platform, OpenRouter, and select enterprise partners. Pricing is competitive with mid-tier models.</p>
        `,
        stats: [
            { label: "OpenRouter", value: "Top" },
            { label: "Coding", value: "Strong" },
            { label: "Reasoning", value: "Strong" },
            { label: "Chinese", value: "Excellent" }
        ],
        pricing: {
            input: "Competitive",
            output: "Competitive",
            context: "Standard"
        },
        specs: {
            "Architecture": "GLM",
            "Focus": "Balanced",
            "Languages": "Chinese + Global",
            "Deployment": "Cloud & On-prem"
        },
        highlights: [
            "Highest-rated model on OpenRouter at launch",
            "Strong all-around performance for a new entrant",
            "Excellent Chinese language capabilities",
            "Enterprise-focused with on-premise options",
            "Competitive GLM architecture innovations"
        ]
    }
};

// Helper function to get article by ID
function getArticle(id) {
    return newsData[id] || null;
}

// Helper function to get all articles
function getAllArticles() {
    return Object.values(newsData);
}

// Helper function to get related articles (excluding current)
function getRelatedArticles(currentId, count = 3) {
    const all = getAllArticles();
    return all
        .filter(a => a.id !== currentId)
        .slice(0, count);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData, getArticle, getAllArticles, getRelatedArticles };
}
