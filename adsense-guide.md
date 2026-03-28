# Google AdSense Setup Guide for AI Pulse

## Step 1: Apply for AdSense
1. Go to https://www.google.com/adsense
2. Sign in with your Google account
3. Click "Get Started"
4. Enter your website URL: https://aipulse.buzz
5. Select your country/region
6. Accept the terms and conditions

## Step 2: Add Verification Code
Google will provide a verification meta tag like:
```html
<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX">
```

Add this to the `<head>` section of your HTML files.

## Step 3: Connect to GitHub Pages
Since you're using GitHub Pages:
- Add the verification code to your index.html
- Commit and push
- Wait for Google to review (usually 1-2 days)

## Step 4: Create Ad Units
Once approved:
1. Go to Ads > Overview
2. Click "Create Ad Unit"
3. Choose format:
   - Display ads (banner)
   - In-feed ads (for news lists)
   - In-article ads (within articles)
4. Copy the ad code provided

## Step 5: Place Ads Strategically
Good locations for AI Pulse:
- Below the header navigation
- Between news cards in lists
- Sidebar (if you add one)
- End of articles

## Ad Code Example:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Estimated Earnings
For a tech/AI site with moderate traffic:
- 1,000 page views/day: ~$5-15/month
- 10,000 page views/day: ~$50-150/month
- 50,000 page views/day: ~$250-750/month
