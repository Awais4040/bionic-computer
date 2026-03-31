# 🚀 Deploy to Vercel - Step by Step Guide

## STEP 1: Prepare Your Code

Your code is ready! Just make sure everything is saved.

---

## STEP 2: Push to GitHub

### If you have Git installed:

```bash
git init
git add .
git commit -m "Bionic Computer Website - Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/bionic-computer
git push -u origin main
```

### If you don't have Git:

1. Go to: https://github.com/new
2. Create new repository named: `bionic-computer`
3. Upload your project files to GitHub

---

## STEP 3: Deploy to Vercel

1. **Go to:** https://vercel.com/
2. **Click:** "Sign Up" (use GitHub account)
3. **Authorize** GitHub access
4. **Click:** "Import Project"
5. **Select:** Your `bionic-computer` repository
6. **Click:** "Import"

---

## STEP 4: Add Environment Variables

On Vercel dashboard:

1. **Go to:** Project Settings → Environment Variables
2. **Add Variable:**
   - Name: `ANTHROPIC_API_KEY`
   - Value: `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`
3. **Click:** "Save"

---

## STEP 5: Deploy

1. **Click:** "Deploy"
2. **Wait:** 2-3 minutes
3. **Get your live URL:** `https://your-project.vercel.app`

---

## STEP 6: Set Custom Domain (Optional)

1. **Go to:** Vercel Dashboard
2. **Click:** "Domains"
3. **Add:** Your domain (e.g., bioniccomputer.com.pk)
4. **Follow:** DNS setup instructions

---

## VERCEL DEPLOYMENT CHECKLIST

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] ANTHROPIC_API_KEY added
- [ ] Deploy clicked
- [ ] Website is LIVE!
- [ ] Chatbot tested
- [ ] Domain added (optional)

---

## YOUR LIVE URL

After deployment, you'll get:
- Free URL: `https://bionic-computer.vercel.app`
- Custom domain: `https://bioniccomputer.com.pk` (optional)

---

## NEXT DEPLOYMENTS

Every time you push to GitHub, Vercel auto-deploys!

```bash
git add .
git commit -m "Updated chatbot"
git push
# Automatically deploys to Vercel!
```

---

## TROUBLESHOOTING

### Build Fails
- Check `.env.local` has API key
- Check all imports are correct
- Check `package.json` has all dependencies

### API Key Not Working
- Make sure `ANTHROPIC_API_KEY` is set in Vercel env vars
- Not in `.env.local` (that's for local only)
- Restart deployment after adding env var

### Domain Not Working
- Wait 24 hours for DNS propagation
- Check DNS settings in Vercel
- Verify domain configuration

---

## SUPPORT

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support

---

## COST

**FREE tier includes:**
- 100GB bandwidth/month
- Unlimited deployments
- Automatic HTTPS
- Custom domains
- Environment variables

**Upgrade to Pro ($20/month) for:**
- Unlimited bandwidth
- Priority support
- Advanced analytics

---

**Ready to go live?** Start at https://vercel.com/ 🚀
