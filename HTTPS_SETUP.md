# HTTPS Setup for aipulse.buzz

## Current Issue
GitHub Pages cannot issue an SSL certificate because of a DNS configuration conflict.

## Root Cause
Your DNS has both:
1. ✅ A records pointing to GitHub Pages IPs (CORRECT)
2. ❌ CNAME pointing to zeorchin.github.io (WRONG - causes conflict)

The CNAME on the root domain (@) conflicts with the A records.

## Fix Required (In Porkbun DNS Settings)

### Step 1: Remove Conflicting CNAME
Log into https://porkbun.com and go to DNS for aipulse.buzz

**DELETE this record if it exists:**
```
Type: CNAME
Host: @ (or blank)
Answer: zeorchin.github.io
```

### Step 2: Verify A Records
**Ensure these A records exist:**
```
Type: A
Host: @
Answer: 185.199.108.153

Type: A
Host: @
Answer: 185.199.109.153

Type: A
Host: @
Answer: 185.199.110.153

Type: A
Host: @
Answer: 185.199.111.153
```

### Step 3: Wait for DNS Propagation
After making changes, wait:
- 5-30 minutes for DNS to propagate
- Up to 24 hours in rare cases

### Step 4: Trigger Certificate
1. Go to https://github.com/Zeorchin/aipulse-buzz/settings/pages
2. Remove the custom domain, save
3. Re-add "aipulse.buzz", save
4. Wait 5-10 minutes
5. The "Enforce HTTPS" checkbox should become available

## Verify HTTPS is Working
Once enabled, check:
- https://aipulse.buzz (should work without warnings)
- https://www.ssllabs.com/ssltest/analyze.html?d=aipulse.buzz (SSL test)

## Troubleshooting

If still not working after 24 hours:
1. Check GitHub Status: https://www.githubstatus.com/
2. Verify no conflicting DNS records with: `dig aipulse.buzz ANY`
3. Contact GitHub Support if certificate still won't issue

## Current DNS Status
```
A Records: ✅ Correct (GitHub Pages IPs)
CNAME on root: ❌ Remove this!
Nameservers: Porkbun (maceio, salvador, curitiba, fortaleza)
```
