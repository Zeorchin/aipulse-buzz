#!/usr/bin/env python3
"""
AI News Auto-Updater for AI Pulse
Run this script weekly to fetch latest AI news and update the website
"""

import json
import re
import subprocess
from datetime import datetime
from pathlib import Path

# Configuration
NEWS_SOURCES = [
    # Add RSS feeds or API endpoints here
    # "https://api.example.com/ai-news",
]

REPO_PATH = Path("/home/zee/Desktop")
HTML_FILE = REPO_PATH / "ai-news.html"

def run_git_command(cmd, cwd=REPO_PATH):
    """Run git command and return output"""
    result = subprocess.run(
        cmd, shell=True, cwd=cwd, capture_output=True, text=True
    )
    return result.stdout.strip(), result.stderr.strip(), result.returncode

def update_news_placeholder():
    """
    Update the AI news HTML with latest content
    For now, this creates a template - you'd need to integrate with news APIs
    """
    today = datetime.now().strftime("%B %d, %Y")
    
    # Read current HTML
    with open(HTML_FILE, 'r') as f:
        content = f.read()
    
    # Update the date in hero badge
    updated_content = re.sub(
        r'<div class="hero-badge">Last Updated: .*?</div>',
        f'<div class="hero-badge">Last Updated: {today}</div>',
        content
    )
    
    # Write updated HTML
    with open(HTML_FILE, 'w') as f:
        f.write(updated_content)
    
    print(f"✅ Updated news timestamp to: {today}")
    return True

def commit_and_push():
    """Commit changes and push to GitHub"""
    # Add changes
    stdout, stderr, rc = run_git_command("git add ai-news.html")
    if rc != 0:
        print(f"❌ Git add failed: {stderr}")
        return False
    
    # Commit
    date_str = datetime.now().strftime("%Y-%m-%d")
    commit_msg = f"Weekly AI News Update - {date_str}"
    stdout, stderr, rc = run_git_command(f'git commit -m "{commit_msg}"')
    if rc != 0 and "nothing to commit" not in stderr:
        print(f"❌ Git commit failed: {stderr}")
        return False
    
    # Push
    stdout, stderr, rc = run_git_command("git push origin main")
    if rc != 0:
        print(f"❌ Git push failed: {stderr}")
        return False
    
    print(f"✅ Committed and pushed: {commit_msg}")
    return True

def main():
    """Main update routine"""
    print(f"🤖 AI News Auto-Updater - {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 50)
    
    # Update news content
    if update_news_placeholder():
        # Commit and push
        if commit_and_push():
            print("\n✅ Weekly update completed successfully!")
            print("🌐 Changes will be live at: http://aipulse.buzz")
        else:
            print("\n⚠️  Update created but failed to push to GitHub")
    else:
        print("\n❌ Failed to update news content")

if __name__ == "__main__":
    main()
