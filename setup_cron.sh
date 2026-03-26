#!/bin/bash
# Setup weekly AI news update cron job

echo "Setting up weekly AI news update..."

# Add cron job for every Friday at 9 AM
(crontab -l 2>/dev/null; echo "") | crontab -
(crontab -l 2>/dev/null; echo "# AI Pulse - Weekly AI News Update (Every Friday at 9:00 AM)") | crontab -
(crontab -l 2>/dev/null; echo "0 9 * * 5 cd /home/zee/Desktop && python3 update_ai_news.py >> /home/zee/Desktop/news_update.log 2>&1") | crontab -

echo "✅ Cron job added!"
echo ""
echo "Current crontab:"
crontab -l
