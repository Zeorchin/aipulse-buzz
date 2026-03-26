# Porkbun DNS Fix - Step by Step Visual Guide

## Step 1: Log into Porkbun

1. Go to **https://porkbun.com**
2. Click **"Log In"** (top right)
3. Enter your username and password

---

## Step 2: Find Your Domain

Once logged in, you'll see your domain dashboard:

```
┌─────────────────────────────────────────────────────┐
│  Your Domains                    [Account] [Logout] │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ☐ aipulse.buzz                    Expires: 2027   │
│     [Details] [DNS] [Renew] [Transfer]              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Click the [DNS] button next to "aipulse.buzz"**

---

## Step 3: View Current DNS Records

You'll see a page like this:

```
┌─────────────────────────────────────────────────────────────┐
│  DNS Records for aipulse.buzz                               │
│  [+ Add Record]    [Save Changes]    [Reset]               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Type  |  Host  |  Answer                    |  TTL  |  🗑️  │
│  ─────────────────────────────────────────────────────────  │
│  A     |   @    |  185.199.108.153           | 300   |  🗑️  │
│  A     |   @    |  185.199.109.153           | 300   |  🗑️  │
│  A     |   @    |  185.199.110.153           | 300   |  🗑️  │
│  A     |   @    |  185.199.111.153           | 300   |  🗑️  │
│                                                             │
│  ❌ CNAME |   @    |  zeorchin.github.io       | 300   |  🗑️  │  ← DELETE THIS!
│                                                             │
│  CNAME | www   |  zeorchin.github.io          | 300   |  🗑️  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 4: Delete the Bad CNAME Record

**Look for a CNAME record where:**
- Type: `CNAME`
- Host: `@` (or blank)
- Answer: `zeorchin.github.io` or any github.io address

**To delete it:**
1. Click the **🗑️ (trash can)** icon on that row
2. The row will disappear

✅ **Good - you've removed the conflicting record!**

---

## Step 5: Verify Your A Records

**You SHOULD have these 4 A records (KEEP THESE!):**

| Type | Host | Answer | TTL |
|------|------|--------|-----|
| A | @ | 185.199.108.153 | 300 |
| A | @ | 185.199.109.153 | 300 |
| A | @ | 185.199.110.153 | 300 |
| A | @ | 185.199.111.153 | 300 |

**If any are missing, add them:**
1. Click **[+ Add Record]**
2. Set Type: `A`
3. Set Host: `@`
4. Set Answer: `185.199.108.153` (and repeat for the other 3 IPs)
5. Set TTL: `300`
6. Click **Add**

---

## Step 6: Save Changes

**VERY IMPORTANT!**

Click the big **[Save Changes]** button at the top!

You'll see a confirmation message:
```
✅ Your DNS changes have been saved successfully!
```

---

## Step 7: Wait

⏱️ **DNS changes take 10-30 minutes to propagate.**

Don't do anything else yet. Just wait.

---

## Step 8: Trigger GitHub Certificate

After waiting 30 minutes:

1. Go to: https://github.com/Zeorchin/aipulse-buzz/settings/pages

2. You'll see:
```
Custom domain
┌─────────────────┐
│ aipulse.buzz    │  [Save]
└─────────────────┘
✓ DNS check successful
```

3. **Delete** `aipulse.buzz` from the box
4. Click **[Save]**
5. Wait 5 seconds
6. **Type** `aipulse.buzz` back in
7. Click **[Save]** again

8. Wait 5-10 minutes

---

## Step 9: Enable HTTPS

Refresh the GitHub Pages settings page after 10 minutes.

You should now see:
```
☑️ Enforce HTTPS
☐ Enforce HTTPS — Unavailable for your site... ❌ (BEFORE)

☑️ Enforce HTTPS
☑️ Enforce HTTPS  ✅ (AFTER - Check this box!)
```

**Check the "Enforce HTTPS" checkbox!**

---

## ✅ Done!

Your site will now be accessible at:
- **https://aipulse.buzz** ✅ (Secure, no warnings!)

---

## Quick Check Commands

Want to verify it's working? Open Terminal and run:

```bash
# Check DNS is correct
dig aipulse.buzz A +short

# Should ONLY show:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check no CNAME on root
dig aipulse.buzz CNAME +short

# Should show NOTHING (blank)
```

---

## What If It Still Doesn't Work?

**After 2 hours, if HTTPS still unavailable:**

1. Clear your browser cache
2. Try in Incognito/Private mode
3. Check GitHub Status: https://www.githubstatus.com/
4. Contact me with what you see

**Do NOT worry** - your site still works at http://aipulse.buzz, just with a warning. The fix is just for the security certificate.
