# Vercel Deployment Guide - Bionic Computer

## Step 1: Create GitHub Repository

### If you don't have GitHub:
1. Go to https://github.com/signup
2. Create a free account
3. Verify your email

### Create a new repository:
1. Log into GitHub
2. Click **"+"** (top right) → **"New repository"**
3. Repository name: `bionic-computer`
4. Description: `IT services website for Bionic Computer`
5. Select **"Public"** (required for free Vercel)
6. Click **"Create repository"**

---

## Step 2: Upload Your Code to GitHub

### Option A: Using Git Command (Recommended)

**On your local machine, in the project folder:**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Bionic Computer website"

# Add remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/bionic-computer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**When it asks for password:**
- Use your GitHub username
- Use a "Personal Access Token" as password:
  1. Go to GitHub Settings → Developer settings → Personal access tokens
  2. Click "Generate new token"
  3. Select `repo` checkbox
  4. Copy the token and use as password

### Option B: Using GitHub Web Interface

1. Go to your new repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop all files from your project folder
4. Click **"Commit changes"**

---

## Step 3: Create Vercel Account

1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Select **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

---

## Step 4: Deploy to Vercel

1. After signing up, you'll see the Vercel dashboard
2. Click **"Add New"** → **"Project"**
3. Select your **`bionic-computer`** repository
4. Click **"Import"**

### Configure Project:
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)

### Environment Variables:
- Click **"Environment Variables"**
- Add your Anthropic API key:
  - **Name:** `ANTHROPIC_API_KEY`
  - **Value:** `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`
  - Click **"Add"**

### Deploy:
- Click **"Deploy"**
- Wait 3-5 minutes for build to complete
- You'll see a **Vercel URL** like `https://bionic-computer.vercel.app`

**Test it:** Open that URL in your browser — your website should load with all styling working!

---

## Step 5: Point Your Domain to Vercel

### In Vercel Dashboard:

1. Go to your project → **"Settings"** → **"Domains"**
2. Enter: `bioniccomputer.com.pk`
3. Click **"Add"**
4. Vercel shows you nameserver instructions

### Update Nameservers at Your Hosting:

1. Log into your hosting cPanel
2. Go to **"Addon Domains"** or **"Domains"**
3. Find `bioniccomputer.com.pk`
4. Change nameservers to Vercel's (they give you 4 nameservers)
5. Save changes

**Wait 24-48 hours** for DNS to propagate

### Or: Use CNAME Records (Faster)

If you can't change nameservers:

1. In your hosting cPanel, go to **"DNS Zone Editor"**
2. Find the CNAME record section
3. Create a CNAME pointing to Vercel (Vercel gives you the exact CNAME)
4. Save

This takes 1-2 hours instead of 24-48.

---

## Step 6: Verify Everything Works

Once domain is pointing to Vercel:

1. Visit `https://bioniccomputer.com.pk`
2. Check:
   - ✅ Page loads with styling (Tailwind CSS visible)
   - ✅ Images load correctly
   - ✅ Chatbot icon appears
   - ✅ All sections display properly

---

## Troubleshooting

### Build Failed
- Check Vercel build logs (dashboard → "Deployments" tab)
- Common issue: Missing dependencies
- Fix: Ensure `package.json` has all dependencies listed

### Domain not resolving
- DNS takes 24-48 hours
- Check: `nslookup bioniccomputer.com.pk`
- Wait and try again

### Chatbot not working
- Ensure API key is added in Vercel Environment Variables
- Check: https://console.anthropic.com/account/billing/overview (add payment method)

### Styling not showing
- This shouldn't happen with Vercel + Next.js
- If it does: clear browser cache (Ctrl+Shift+Del)

---

## Next Steps

1. **Monitor:** Check Vercel dashboard for deployment status
2. **Test:** Once live, test all features (contact form, chatbot, etc.)
3. **Analytics:** Add Google Analytics (optional)
4. **Monitor costs:** Vercel free tier handles your traffic fine

---

## Important Notes

- **Free tier includes:** 100GB bandwidth/month, unlimited projects
- **Your Anthropic API:** ~$1-2/month for expected chatbot usage
- **Domain:** Already owned, just pointing to Vercel
- **Backups:** Code stays on GitHub automatically

**Questions?** Check Vercel docs: https://vercel.com/docs
