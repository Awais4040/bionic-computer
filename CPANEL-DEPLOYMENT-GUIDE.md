# 🚀 Deploy to cPanel Shared Hosting - Step by Step

## Prerequisites

✅ cPanel access
✅ Node.js 20.20 available
✅ Your domain: bioniccomputer.com.pk
✅ SSH access (optional but helpful)
✅ FTP/File Manager access

---

## STEP 1: Prepare Your Project Files

Before uploading, you need the project files. All files are ready in:
- `src/` folder
- `public/` folder
- `package.json`
- `next.config.js`
- `.env.local` (with your API key)
- `Dockerfile` (not needed for cPanel)
- And other config files

---

## STEP 2: Upload to cPanel File Manager

### Option A: Using cPanel File Manager (Easiest)

1. **Go to cPanel → File Manager**
2. **Navigate to:** `public_html` folder
3. **Create new folder:** `bionic-computer`
4. **Enter that folder**
5. **Upload all project files:**
   - Drag & drop all files from your computer
   - OR use "Upload" button
   - Include: src/, public/, node_modules/, package.json, etc.

### Option B: Using FTP

1. **Get FTP credentials from cPanel:**
   - cPanel → FTP Accounts
   - Note: hostname, username, password

2. **Use FTP client (FileZilla, Cyberduck, etc.):**
   ```
   Host: your-domain.com or ftp.your-domain.com
   Username: Your FTP username
   Password: Your FTP password
   Port: 21
   ```

3. **Navigate to:** `public_html/bionic-computer`
4. **Upload all files**

### Option C: Using SSH (Fastest)

```bash
# Connect via SSH
ssh -i your-key.pem user@your-server-ip

# Navigate to public_html
cd ~/public_html

# Clone from GitHub (if you push code there)
git clone https://github.com/YOUR_USERNAME/bionic-computer.git

# OR create folder and upload via SCP
mkdir bionic-computer
cd bionic-computer

# Download files from local machine via SCP
scp -i your-key.pem -r /path/to/local/files user@your-server-ip:~/public_html/bionic-computer/
```

---

## STEP 3: Install Dependencies

### Via cPanel Terminal or SSH:

```bash
# Navigate to your project
cd ~/public_html/bionic-computer

# Install Node modules
npm install

# This creates node_modules/ folder with all dependencies
# Takes 2-5 minutes
```

---

## STEP 4: Create Node.js App in cPanel

### Important Setup:

1. **Go to cPanel → Setup Node.js App**

2. **Fill in the form:**

   **Node.js Version:** 20.20 (select from dropdown)
   
   **App Mode:** Production (select Production, not Development)
   
   **App URL:** bioniccomputer.com.pk (your domain)
   
   **App Root:** `/home/username/public_html/bionic-computer`
   - Replace "username" with YOUR cPanel username
   - Find it in: cPanel → Account Information
   
   **App Startup File:** `npm start`
   
   **Application Root:** Leave as default or use: `/home/username/public_html/bionic-computer`

3. **Create Env Variables (IMPORTANT):**
   - Click "Environment Variables" or "Show Env Vars"
   - Add new variable:
     - **Name:** ANTHROPIC_API_KEY
     - **Value:** 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

4. **Click "Create"**

---

## STEP 5: Verify Installation

### Check if app is running:

```bash
# Via SSH - check if process is running
ps aux | grep node

# Via cPanel - go back to Setup Node.js App
# Your app should show status: "Running"
```

---

## STEP 6: Test Your Website

1. **Open your domain:** https://bioniccomputer.com.pk
2. **Should see your website**
3. **Click chat button - test chatbot**
4. **Try appointment booking**
5. **Test mobile view**

---

## TROUBLESHOOTING

### Issue: "Cannot find module"

**Solution:**
```bash
cd ~/public_html/bionic-computer
npm install
```

### Issue: "App not starting"

**Check logs:**
- cPanel → Setup Node.js App → Your app → View Logs
- Look for errors

**Common causes:**
- API key not set in Environment Variables
- Missing package.json
- Wrong startup file (should be `npm start`)

### Issue: "Port already in use"

**Solution:**
- cPanel manages ports automatically
- No need to worry about this

### Issue: "Domain not pointing to app"

**Solution:**
1. Go to cPanel → Addon Domains or Parked Domains
2. Make sure bioniccomputer.com.pk points to public_html/bionic-computer
3. If not, update it

### Issue: "Chatbot not responding"

**Check:**
1. ANTHROPIC_API_KEY is set in Environment Variables
2. You added payment method to Anthropic account
3. Check logs for errors

---

## File Structure on Server

After deployment, your server should have:

```
~/public_html/bionic-computer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.js
│   │   ├── page.jsx
│   │   ├── layout.jsx
│   │   └── globals.css
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── Testimonials.jsx
│       ├── FAQ.jsx
│       ├── Contact.jsx
│       ├── Chatbot.jsx
│       └── Footer.jsx
├── public/
│   ├── logo.svg
│   ├── sitemap.xml
│   └── robots.txt
├── node_modules/ (created by npm install)
├── .next/ (created by npm start)
├── package.json
├── package-lock.json
├── next.config.js
├── tailwind.config.js
├── jsconfig.json
└── .env.local (your API key)
```

---

## Performance Tips

### For Shared Hosting:

1. **Enable Gzip compression** (cPanel → Optimize Website)
2. **Clear Node.js cache** if slow:
   ```bash
   rm -rf .next/
   npm run build
   ```
3. **Monitor memory usage** - cPanel may restart if too high
4. **Enable caching** in next.config.js

---

## Maintenance

### Restart app if needed:

1. cPanel → Setup Node.js App
2. Find your app
3. Click "Restart"

### Update code:

```bash
cd ~/public_html/bionic-computer
git pull  # if using GitHub
npm install  # if new dependencies
npm run build  # rebuild Next.js
# cPanel will auto-restart
```

### Check logs:

1. cPanel → Setup Node.js App
2. Click your app name
3. View Logs (bottom of page)

---

## SSL/HTTPS

cPanel usually provides free SSL via AutoSSL:
1. cPanel → AutoSSL
2. Should be enabled automatically
3. Check if green lock shows on your domain

If not:
1. cPanel → SSL/TLS
2. Request free certificate
3. Install it

---

## Domain Configuration

If domain not working:

1. cPanel → Addon Domains (if adding new domain)
2. Or cPanel → Parked Domains (if using existing)
3. Point to: `/home/username/public_html/bionic-computer`
4. Wait 24 hours for DNS propagation

Check DNS:
```bash
nslookup bioniccomputer.com.pk
# Should show your server IP
```

---

## Next.js Build Output

When you run `npm install` and start the app:
- `.next/` folder created (your built site)
- `node_modules/` folder created (dependencies)
- `public/` folder stays as-is

Don't delete these!

---

## Cost

✅ **Free with your hosting plan:**
- Node.js 20.20
- All cPanel features
- SSL/HTTPS

✅ **Additional costs:**
- Anthropic API: $1-2/month (light usage)
- Domain: ~$10/year (you likely already have)

---

## Support

If issues:
1. Check cPanel logs: Setup Node.js App → View Logs
2. SSH and check: `npm install`, `npm run build`
3. Restart app in cPanel

---

**Your website will be LIVE at:**
🌐 https://bioniccomputer.com.pk

**Questions? Let me know!** 🚀
