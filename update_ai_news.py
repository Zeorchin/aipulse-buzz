#!/usr/bin/env python3
"""
AI News Auto-Updater for AI Pulse - Internal Article Version
Fetches latest AI news from free RSS feeds, creates internal article pages,
and updates the website without linking to external pages.
Low cost: Uses free RSS feeds, no AI processing
"""

import xml.etree.ElementTree as ET
import urllib.request
import urllib.error
import re
import subprocess
from datetime import datetime
from pathlib import Path
from html import escape
import hashlib

# Configuration
REPO_PATH = Path("/home/zee/aipulse-buzz")
HTML_FILE = REPO_PATH / "ai-news.html"
NEWS_DIR = REPO_PATH / "news-articles"
MAX_NEWS_ITEMS = 8  # Number of news items to fetch
MAX_ARCHIVED = 24   # Keep last N articles in archive

# Free RSS Feed Sources for AI News
RSS_FEEDS = [
    ("TechCrunch AI", "https://techcrunch.com/category/artificial-intelligence/feed/"),
    ("The Verge AI", "https://www.theverge.com/ai-artificial-intelligence/rss/index.xml"),
    ("Ars Technica AI", "https://arstechnica.com/tag/artificial-intelligence/feed/"),
    ("VentureBeat AI", "https://venturebeat.com/category/ai/feed/"),
]

def run_git_command(cmd, cwd=REPO_PATH):
    """Run git command and return output"""
    result = subprocess.run(
        cmd, shell=True, cwd=cwd, capture_output=True, text=True
    )
    return result.stdout.strip(), result.stderr.strip(), result.returncode

def fetch_rss_feed(url, source_name):
    """Fetch and parse a single RSS feed"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read()
            
        root = ET.fromstring(content)
        
        items = []
        for item in root.findall('.//item'):
            title = item.find('title')
            link = item.find('link')
            pub_date = item.find('pubDate')
            description = item.find('description')
            
            if title is not None and link is not None:
                items.append({
                    'title': title.text or '',
                    'link': link.text or '',
                    'date': pub_date.text if pub_date is not None else '',
                    'description': description.text if description is not None else '',
                    'source': source_name
                })
        
        return items[:3]
        
    except Exception as e:
        print(f"  ⚠️  Failed to fetch {source_name}: {e}")
        return []

def parse_date(date_str):
    """Parse RSS date to formatted string"""
    try:
        from email.utils import parsedate_to_datetime
        dt = parsedate_to_datetime(date_str)
        return dt.strftime("%b %d, %Y")
    except:
        return datetime.now().strftime("%b %d, %Y")

def make_slug(title):
    """Create a URL-safe slug from title"""
    h = hashlib.md5(title.encode()).hexdigest()[:8]
    slug = re.sub(r'[^\w\s-]', '', title.lower())
    slug = re.sub(r'[-\s]+', '-', slug)
    slug = slug[:50].strip('-')
    return f"{slug}-{h}"

def categorize_news(title, description):
    """Categorize news based on keywords"""
    text = (title + " " + description).lower()
    
    if any(k in text for k in ['openai', 'gpt', 'chatgpt', 'sora']):
        return 'OpenAI', '#10a37f'
    elif any(k in text for k in ['google', 'gemini', 'deepmind']):
        return 'Google', '#4285f4'
    elif any(k in text for k in ['anthropic', 'claude']):
        return 'Anthropic', '#d4a574'
    elif any(k in text for k in ['meta', 'llama', 'facebook']):
        return 'Meta', '#0668e1'
    elif any(k in text for k in ['nvidia', 'cuda']):
        return 'NVIDIA', '#76b900'
    elif any(k in text for k in ['alibaba', 'qwen']):
        return 'Alibaba', '#ff6a00'
    elif any(k in text for k in ['deepseek']):
        return 'DeepSeek', '#1a73e8'
    elif any(k in text for k in ['xai', 'grok', 'musk']):
        return 'xAI', '#ff6b6b'
    elif any(k in text for k in ['microsoft', 'azure']):
        return 'Microsoft', '#00a4ef'
    else:
        return 'AI News', '#666666'

def get_article_image(index, tag):
    """Get an appropriate image URL based on tag"""
    tag_images = {
        'OpenAI': "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        'Google': "https://images.unsplash.com/photo-1573804633927-bccaba4e8e05?w=800&h=400&fit=crop",
        'Anthropic': "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        'Meta': "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
        'NVIDIA': "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        'Alibaba': "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
        'DeepSeek': "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
        'xAI': "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop",
        'Microsoft': "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop",
    }
    generic_images = [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1573804633927-bccaba4e8e05?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    ]
    return tag_images.get(tag, generic_images[index % len(generic_images)])

def generate_article_html(item, index, slug):
    """Generate a full internal article HTML page for a news item"""
    title = escape(item['title'])
    source = item['source']
    source_url = item['link']
    date = parse_date(item['date'])
    description = item['description']
    
    # Clean up description HTML from RSS
    description_clean = re.sub(r'<[^>]+>', '', description)
    description_clean = escape(description_clean)
    
    # Expand short description into paragraphs if needed
    paragraphs = []
    if len(description_clean) > 20:
        sentences = re.split(r'(?<=[.!?])\s+', description_clean)
        current_para = []
        for sent in sentences:
            current_para.append(sent)
            if len(' '.join(current_para)) > 150:
                paragraphs.append(' '.join(current_para))
                current_para = []
        if current_para:
            paragraphs.append(' '.join(current_para))
    
    if not paragraphs:
        paragraphs = [description_clean]
    
    body_paragraphs = '\n'.join([f'            <p>{p}</p>' for p in paragraphs if p.strip()])
    
    tag, color = categorize_news(item['title'], item['description'])
    img_url = get_article_image(index, tag)
    
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | AI Pulse News</title>
    <meta name="description" content="{description_clean[:160]}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description_clean[:160]}">
    <meta property="og:image" content="{img_url}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../news-styles.css">
    <style>
        .news-article-body {{ max-width: 720px; margin: 0 auto; padding: 40px 24px; line-height: 1.8; color: #334155; }}
        .news-article-body p {{ margin-bottom: 1.2em; font-size: 1.05rem; }}
        .news-article-body h1 {{ font-size: 2rem; font-weight: 800; color: #1e293b; margin-bottom: 16px; line-height: 1.3; }}
        .news-article-meta {{ display: flex; gap: 16px; align-items: center; margin-bottom: 24px; flex-wrap: wrap; }}
        .news-article-meta .tag {{ background: {color}; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }}
        .news-article-meta .date {{ color: #64748b; font-size: 0.9rem; }}
        .news-article-meta .source {{ color: #64748b; font-size: 0.9rem; }}
        .news-article-image {{ width: 100%; border-radius: 12px; margin-bottom: 32px; overflow: hidden; }}
        .news-article-image img {{ width: 100%; height: auto; display: block; }}
        .source-box {{ background: #f1f5f9; border-left: 4px solid {color}; padding: 20px 24px; margin-top: 40px; border-radius: 0 8px 8px 0; }}
        .source-box p {{ margin: 0 0 12px; font-size: 0.95rem; color: #475569; }}
        .source-box a {{ color: {color}; font-weight: 600; text-decoration: none; }}
        .source-box a:hover {{ text-decoration: underline; }}
        .article-nav {{ display: flex; justify-content: space-between; margin-top: 48px; padding-top: 24px; border-top: 1px solid #e2e8f0; }}
        .article-nav a {{ color: #6366f1; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 6px; }}
        .article-nav a:hover {{ color: #4f46e5; }}
    </style>
</head>
<body>
    <nav class="navbar" style="position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1);">
        <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: 70px;">
            <a href="../index.html" class="logo" style="display: flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 700; font-size: 1.25rem;">
                <span style="font-size: 1.5rem;">◉</span>
                <span>AI Pulse.buzz</span>
            </a>
            <div class="nav-links" style="display: flex; gap: 32px;">
                <a href="../index.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500;">Home</a>
                <a href="../ai-news.html" style="color: #6366f1; text-decoration: none; font-weight: 600;">News</a>
                <a href="../ai-models.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500;">Models</a>
                <a href="../articles/index.html" style="color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500;">Articles</a>
            </div>
        </div>
    </nav>

    <div style="height: 70px;"></div>

    <div class="container">
        <div class="news-article-body">
            <div class="news-article-meta">
                <span class="tag">{tag}</span>
                <span class="date">{date}</span>
                <span class="source">Via {source}</span>
            </div>
            
            <h1>{title}</h1>
            
            <div class="news-article-image">
                <img src="{img_url}" alt="{title}">
            </div>
            
{body_paragraphs}
            
            <div class="source-box">
                <p>This article was originally reported by <strong>{source}</strong>. AI Pulse curates and republishes key AI news stories for our readers.</p>
                <a href="{source_url}" target="_blank" rel="noopener">Read original source →</a>
            </div>
            
            <div class="article-nav">
                <a href="../ai-news.html">← Back to News</a>
                <a href="../index.html">Home →</a>
            </div>
        </div>
    </div>

    <footer style="background: #0f172a; color: #fff; padding: 40px 0 30px; margin-top: 60px;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                <span style="font-size: 2rem;">◉</span>
                <span style="font-size: 1.5rem; font-weight: 700;">AI Pulse.buzz</span>
            </div>
            <p style="color: rgba(255,255,255,0.6); margin-bottom: 20px; font-size: 0.9rem;">Your daily dose of AI intelligence. Tracking the frontier of artificial intelligence.</p>
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
                <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem;">© 2026 AI Pulse. All rights reserved.</p>
                <div style="display: flex; gap: 20px;">
                    <a href="../index.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Home</a>
                    <a href="../ai-news.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">News</a>
                    <a href="../articles/index.html" style="color: rgba(255,255,255,0.6); text-decoration: none; font-size: 0.85rem;">Articles</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
'''

def create_article_page(item, index):
    """Create an internal article page and return the slug"""
    slug = make_slug(item['title'])
    html = generate_article_html(item, index, slug)
    
    article_path = NEWS_DIR / f"{slug}.html"
    with open(article_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    return slug

def cleanup_old_articles(current_slugs):
    """Remove old article pages beyond MAX_ARCHIVED"""
    existing = sorted(NEWS_DIR.glob('*.html'), key=lambda p: p.stat().st_mtime, reverse=True)
    to_remove = existing[MAX_ARCHIVED:]
    for old in to_remove:
        old.unlink()
        print(f"     🗑️  Removed old article: {old.name}")

def generate_news_card(item, index, slug):
    """Generate HTML for a single news card matching news-card-masonry structure"""
    title = escape(item['title'][:80])
    date = parse_date(item['date'])
    description = escape(item['description'][:150]) + "..." if len(item['description']) > 150 else escape(item['description'])
    tag, color = categorize_news(item['title'], item['description'])
    
    highlights = []
    desc_lower = item['description'].lower()
    if any(k in desc_lower for k in ['new model', 'release', 'launch']):
        highlights.append('New Release')
    if any(k in desc_lower for k in ['benchmark', 'performance', 'test']):
        highlights.append('Benchmark')
    if any(k in desc_lower for k in ['funding', 'million', 'billion', 'invest']):
        highlights.append('Funding')
    if any(k in desc_lower for k in ['acquisition', 'acquire', 'buy']):
        highlights.append('Acquisition')
    
    if not highlights:
        highlights = ['Update']
    
    highlights_html = ''.join([f'                            <span>{h}</span>\n' for h in highlights[:2]])
    
    generic_images = [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1573804633927-bccaba4e8e05?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
    ]
    img_url = generic_images[index % len(generic_images)]
    color2 = color
    
    return f'''                <article class="news-card-masonry">
                    <div class="card-image">
                        <img src="{img_url}" alt="{tag}">
                        <span class="card-tag" style="background: linear-gradient(135deg, {color} 0%, {color2} 100%);">{tag}</span>
                    </div>
                    <div class="card-body">
                        <span class="card-date">{date}</span>
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <div class="card-stats">
{highlights_html}                        </div>
                        <a href="news-articles/{slug}.html" class="card-link">Read article →</a>
                    </div>
                </article>
'''

def update_html_file(news_items, slugs):
    """Update the ai-news.html file with new content"""
    
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    news_html = '\n'.join([generate_news_card(item, i, slugs[i]) for i, item in enumerate(news_items)])
    
    pattern = r'(<section class="news-section section-alt" id="all-news">.*?<h2 class="section-title">\s*<span class="title-icon">🚀</span>\s*Latest LLM Releases\s*</h2>.*?<div class="news-masonry">)\n.*?(\s*</div>\s*</div>\s*</section>)'
    
    replacement = rf'''\1
{news_html}
\2'''
    
    updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    if updated_content == content:
        print("  ⚠️  Using fallback update method...")
        fallback_pattern = r'(<div class="news-masonry">)\n.*?(\s*</div>\s*<!-- OpenClaw)'
        fallback_replacement = rf'''\1
{news_html}
            \2'''
        updated_content = re.sub(fallback_pattern, fallback_replacement, content, flags=re.DOTALL)
        if updated_content == content:
            print("  ❌ Fallback also failed. Could not match HTML structure.")
            return False
    
    content = updated_content
    
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def commit_and_push():
    """Commit changes and push to GitHub"""
    stdout, stderr, rc = run_git_command("git add ai-news.html news-articles/")
    if rc != 0:
        print(f"  ❌ Git add failed: {stderr}")
        return False
    
    stdout, stderr, rc = run_git_command("git diff --cached --quiet")
    if rc == 0:
        print("  ℹ️  No changes to commit")
        return True
    
    date_str = datetime.now().strftime("%Y-%m-%d")
    commit_msg = f"Weekly AI News Update - {date_str}"
    stdout, stderr, rc = run_git_command(f'git commit -m "{commit_msg}"')
    if rc != 0:
        print(f"  ❌ Git commit failed: {stderr}")
        return False
    
    stdout, stderr, rc = run_git_command("git push origin main")
    if rc != 0:
        print(f"  ❌ Git push failed: {stderr}")
        return False
    
    print(f"  ✅ Committed and pushed: {commit_msg}")
    return True

def main():
    """Main update routine"""
    print(f"🤖 AI News Auto-Updater (Internal Articles)")
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 50)
    
    NEWS_DIR.mkdir(exist_ok=True)
    
    all_news = []
    
    print("\n📡 Fetching news from RSS feeds...")
    for source_name, url in RSS_FEEDS:
        print(f"  🔍 {source_name}...")
        items = fetch_rss_feed(url, source_name)
        all_news.extend(items)
        print(f"     Found {len(items)} items")
    
    if not all_news:
        print("\n⚠️  No news fetched. Skipping update.")
        return
    
    print(f"\n📰 Total articles fetched: {len(all_news)}")
    
    all_news = all_news[:MAX_NEWS_ITEMS]
    
    print("\n📝 Creating internal article pages...")
    slugs = []
    for i, item in enumerate(all_news):
        slug = create_article_page(item, i)
        slugs.append(slug)
        print(f"     ✅ {slug}.html")
    
    print("\n🧹 Cleaning up old articles...")
    cleanup_old_articles(slugs)
    
    print("\n📝 Updating ai-news.html...")
    if update_html_file(all_news, slugs):
        print("  ✅ HTML updated")
        
        print("\n🚀 Pushing to GitHub...")
        if commit_and_push():
            print("\n✅ Weekly update completed successfully!")
            print("🌐 Changes will be live at: http://aipulse.buzz/ai-news.html")
            print(f"📊 Articles added: {len(all_news)}")
        else:
            print("\n⚠️  Update created but failed to push to GitHub")
    else:
        print("\n❌ Failed to update HTML")

if __name__ == "__main__":
    main()
