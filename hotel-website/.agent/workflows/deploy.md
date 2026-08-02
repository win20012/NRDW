---
description: How to deploy the NRDW website to GitHub Pages with the custom domain decemberwindchiangmai.com
---

# Deploy to GitHub Pages

This workflow explains how to deploy the hotel website to production at `decemberwindchiangmai.com`.

## Branch Strategy
- `development` — work-in-progress branch (make changes here)
- `main` — production branch (GitHub Pages deploys from here)

## Pre-requisites
- Git is installed and authenticated with GitHub
- DNS is already configured at Porkbun (see implementation plan for records)

## Steps

1. Make sure all changes are committed on `development`:
```powershell
git status
```

// turbo
2. Merge `development` into `main` and push:
```powershell
git checkout main; git merge development; git push origin main; git checkout development
```

3. GitHub Pages will automatically rebuild and deploy within ~1 minute.

4. Verify the site is live at https://decemberwindchiangmai.com

## First-Time Setup (already done)

If GitHub Pages has not been enabled yet:

1. Go to https://github.com/win20012/NRDW/settings/pages
2. Source: **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Under Custom domain, enter `decemberwindchiangmai.com`, click **Save**
6. Check **Enforce HTTPS** once DNS has propagated

## DNS Records (Porkbun)

If DNS needs to be reconfigured, set these records at https://porkbun.com under Domain Management → DNS:

| Type | Host | Answer |
|------|------|--------|
| A | *(blank)* | `185.199.108.153` |
| A | *(blank)* | `185.199.109.153` |
| A | *(blank)* | `185.199.110.153` |
| A | *(blank)* | `185.199.111.153` |
| CNAME | `www` | `win20012.github.io` |
