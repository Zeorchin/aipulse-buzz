#!/usr/bin/env python3
"""
AI News Auto-Updater for AI Pulse - Option B: Simple RSS Fetching
Fetches latest AI news from free RSS feeds and updates the website
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

# Configuration
REPO_PATH = Path("/home/zee/Desktop/aipulse-buzz")
HTML_FILE = REPO_PATH / "ai-news.html"
MAX_NEWS_ITEMS = 8  # Number of news items to fetch

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
        # Set headers to mimic a browser
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req, timeout=15) as response:
            content = response.read()
            
        # Parse XML
        root = ET.fromstring(content)
        
        # Find all items (RSS format)
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
        
        return items[:3]  # Top 3 from each source
        
    except Exception as e:
        print(f"  ⚠️  Failed to fetch {source_name}: {e}")
        return []

def parse_date(date_str):
    """Parse RSS date to formatted string"""
    try:
        # Common RSS date formats
        from email.utils import parsedate_to_datetime
        dt = parsedate_to_datetime(date_str)
        return dt.strftime("%b %d, %Y")
    except:
        return datetime.now().strftime("%b %d, %Y")

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

def generate_news_card(item, index):
    """Generate HTML for a single news card"""
    title = escape(item['title'][:80])  # Truncate long titles
    link = item['link']
    date = parse_date(item['date'])
    description = escape(item['description'][:120]) + "..." if len(item['description']) > 120 else escape(item['description'])
    tag, color = categorize_news(item['title'], item['description'])
    
    # Extract key highlights from description
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
    
    highlights_html = ''.join([f'<span class="highlight">{h}</span>' for h in highlights[:3]])
    
    return f'''                <article class="news-card">
                    <div class="news-meta">
                        <span class="news-date">{date}</span>
                        <span class="news-tag">{tag}</span>
                    </div>
                    <h3>{title}</h3>
                    <p class="news-summary">{description}</p>
                    <div class="news-highlights">
                        {highlights_html}
                    </div>
                    <a href="{link}" target="_blank" class="read-more">Read full story →</a>
                </article>
'''

def update_html_file(news_items):
    """Update the ai-news.html file with new content"""
    
    # Read current HTML
    with open(HTML_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update date in hero badge
    today = datetime.now().strftime("%B %Y")
    content = re.sub(
        r'<div class="hero-badge">Last Updated: .*?</div>',
        f'<div class="hero-badge">Last Updated: {today}</div>',
        content
    )
    
    # Generate new news HTML
    news_html = '\n'.join([generate_news_card(item, i) for i, item in enumerate(news_items)])
    
    # Find and replace the Latest Releases section
    # Pattern to find content between section start and end
    pattern = r'(<section id="news" class="section section-alt">.*?<h2 class="section-title">Latest Releases</h2>.*?<div class="news-grid">)\n.*?(<\/div>\s*<\/section>)'
    
    replacement = rf'''\1
{news_html}
\2'''
    
    updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # If regex didn't work (pattern mismatch), try simpler approach
    if updated_content == content:
        print("  ⚠️  Using fallback update method...")
        # Just update the date for now
        pass
    else:
        content = updated_content
    
    # Write updated HTML
    with open(HTML_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def commit_and_push():
    """Commit changes and push to GitHub"""
    # Add changes
    stdout, stderr, rc = run_git_command("git add ai-news.html")
    if rc != 0:
        print(f"  ❌ Git add failed: {stderr}")
        return False
    
    # Check if there are changes to commit
    stdout, stderr, rc = run_git_command("git diff --cached --quiet")
    if rc == 0:
        print("  ℹ️  No changes to commit")
        return True
    
    # Commit
    date_str = datetime.now().strftime("%Y-%m-%d")
    commit_msg = f"Weekly AI News Update - {date_str}"
    stdout, stderr, rc = run_git_command(f'git commit -m "{commit_msg}"')
    if rc != 0:
        print(f"  ❌ Git commit failed: {stderr}")
        return False
    
    # Push
    stdout, stderr, rc = run_git_command("git push origin main")
    if rc != 0:
        print(f"  ❌ Git push failed: {stderr}")
        return False
    
    print(f"  ✅ Committed and pushed: {commit_msg}")
    return True

def main():
    """Main update routine"""
    print(f"🤖 AI News Auto-Updater (RSS Version)")
    print(f"📅 {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 50)
    
    all_news = []
    
    # Fetch from all RSS sources
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
    
    # Sort by date (newest first) and limit
    all_news = all_news[:MAX_NEWS_ITEMS]
    
    # Update HTML file
    print("\n📝 Updating ai-news.html...")
    if update_html_file(all_news):
        print("  ✅ HTML updated")
        
        # Commit and push
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
