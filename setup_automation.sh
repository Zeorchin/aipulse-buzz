#!/bin/bash
# Complete setup for automated AI news updates

echo "🤖 Setting up Automated AI News Updates..."
echo "=============================================="

# 1. Setup cron job for every Friday at 9 AM
echo ""
echo "📅 Setting up weekly cron job (Fridays 9:00 AM)..."
(crontab -l 2>/dev/null | grep -v "update_ai_news.py" || true) | crontab -
(crontab -l 2>/dev/null; echo "") | crontab -
(crontab -l 2>/dev/null; echo "# AI Pulse - Weekly AI News Update (Every Friday at 9:00 AM)") | crontab -
(crontab -l 2>/dev/null; echo "0 9 * * 5 cd /home/zee/Desktop && python3 update_ai_news.py >> /home/zee/Desktop/news_update.log 2>&1") | crontab -
echo "  ✅ Cron job added"

# 2. Configure Git credential helper for automated pushes
echo ""
echo "🔐 Configuring Git credentials..."
git config --global credential.helper store
echo "  ✅ Git credential helper configured"
echo ""
echo "  ⚠️  IMPORTANT: You need to manually push once to save credentials:"
echo "     cd /home/zee/Desktop"
echo "     git push origin main"
echo "     (Enter your GitHub username and token when prompted)"
echo "     Credentials will be saved for future automated pushes"

# 3. Make scripts executable
echo ""
echo "🔧 Setting permissions..."
chmod +x /home/zee/Desktop/update_ai_news.py
chmod +x /home/zee/Desktop/setup_cron.sh
echo "  ✅ Scripts are executable"

# 4. Show current crontab
echo ""
echo "📋 Current schedule:"
crontab -l | grep -A1 "AI Pulse"

echo ""
echo "=============================================="
echo "✅ Automation setup complete!"
echo ""
echo "📊 What will happen every Friday at 9:00 AM:"
echo "   1. Fetch latest AI news from RSS feeds"
echo "   2. Update ai-news.html with new articles"
echo "   3. Commit and push to GitHub"
echo "   4. Log results to news_update.log"
echo ""
echo "💰 Cost: FREE (uses RSS feeds, no AI tokens)"
echo ""
echo "🧪 Test the script manually:"
echo "   cd /home/zee/Desktop && python3 update_ai_news.py"
echo ""
echo "📜 View logs:"
echo "   tail -f /home/zee/Desktop/news_update.log"
