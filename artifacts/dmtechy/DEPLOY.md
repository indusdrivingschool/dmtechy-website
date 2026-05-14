# Deploying DMTECHY to GitHub + Cloudflare Pages

## Overview
This site is a static React + Vite app. Once pushed to GitHub, Cloudflare Pages
will automatically rebuild and redeploy it every time you push to `main`.

---

## Step 1 — Push to GitHub

1. Go to [github.com/new](https://github.com/new) and create a new repository
   (e.g. `dmtechy-website`). Keep it **Public** or **Private** — either works.

2. Copy the repo URL (e.g. `https://github.com/YOUR_USERNAME/dmtechy-website.git`)

3. In your terminal (or Replit shell):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/dmtechy-website.git
   git branch -M main
   git push -u origin main
   ```

---

## Step 2 — Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. Click **Connect to Git** → select your GitHub repo
3. Set the build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | None (Custom) |
   | Build command | `pnpm --filter @workspace/dmtechy run build:deploy` |
   | Build output directory | `artifacts/dmtechy/dist` |
   | Root directory | `/` (leave blank = repo root) |

4. Add this **Environment Variable** in the Cloudflare Pages settings:
   ```
   NODE_VERSION = 20
   ```

5. Click **Save and Deploy** — Cloudflare will build and give you a live URL instantly.

---

## Step 3 — Add Your Custom Domain (dmtechy.com)

1. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain**
2. Enter `dmtechy.com` (and optionally `www.dmtechy.com`)
3. If your domain is already on Cloudflare DNS, it auto-configures.
   If not, point your domain's nameservers to Cloudflare first.

---

## Step 4 — Auto-Deploy on Every Push (GitHub Actions)

A workflow file is already configured at `.github/workflows/deploy-cloudflare.yml`.
To activate it, add two secrets in your GitHub repo:

**GitHub → Settings → Secrets → Actions → New secret:**

| Secret name | Where to find it |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token → "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → right sidebar on any page |

Once set, every push to `main` automatically triggers a new deployment.

---

## Local Build Test

To test the production build locally before pushing:
```bash
pnpm --filter @workspace/dmtechy run build:deploy
```
Output goes to `artifacts/dmtechy/dist/`.
