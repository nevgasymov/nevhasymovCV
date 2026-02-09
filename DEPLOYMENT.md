# Deployment Guide for nevhasymov-cv.com.ua

This guide will help you deploy your CV website to the domain `nevhasymov-cv.com.ua`.

## Prerequisites

1. Domain name: `nevhasymov-cv.com.ua` (already registered)
2. Web hosting account (shared hosting, VPS, or cloud hosting)
3. FTP/SFTP access or SSH access to your hosting server

## Option 1: Traditional Web Hosting (Shared Hosting)

### Steps:

1. **Purchase/Configure Hosting**
   - Ensure your hosting supports static HTML files
   - Most shared hosting providers work fine (e.g., Hostinger, Namecheap, GoDaddy)

2. **Upload Files**
   - Connect via FTP/SFTP client (FileZilla, Cyberduck, or VS Code FTP extension)
   - Upload all files to the `public_html` or `www` directory:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `assets/` folder (with `profile-photo.png`)

3. **Domain Configuration**
   - Point your domain `nevhasymov-cv.com.ua` to your hosting server
   - Update DNS records (A record or CNAME) to point to your hosting IP
   - This usually takes 24-48 hours to propagate

4. **SSL Certificate**
   - Enable SSL/HTTPS (most hosting providers offer free Let's Encrypt certificates)
   - This is important for SEO and security

## Option 2: GitHub Pages (Free)

### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial CV website"
   git remote add origin https://github.com/yourusername/cv-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch (usually `main`)
   - Save

3. **Custom Domain Setup**
   - In GitHub Pages settings, add custom domain: `nevhasymov-cv.com.ua`
   - Create a `CNAME` file in repository root with content: `nevhasymov-cv.com.ua`
   - Update DNS records:
     - Type: `CNAME`
     - Name: `@` or `www`
     - Value: `yourusername.github.io`

## Option 3: Netlify (Recommended - Free & Easy)

### Steps:

1. **Sign up** at [netlify.com](https://netlify.com)

2. **Deploy**
   - Drag and drop your project folder, OR
   - Connect GitHub repository for automatic deployments

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain: `nevhasymov-cv.com.ua`
   - Follow DNS configuration instructions:
     - Add A record: `@` → Netlify IP (provided)
     - Add CNAME: `www` → your-site.netlify.app

4. **SSL**
   - Netlify automatically provides free SSL certificates

## Option 4: Vercel (Free & Fast)

### Deploy via Vercel CLI (from your project folder)

1. **Install Node.js** (if needed) from [nodejs.org](https://nodejs.org).

2. **Install Vercel CLI and log in** (one-time):
   ```bash
   npm i -g vercel
   vercel login
   ```
   Or use `npx` without installing globally:
   ```bash
   npx vercel login
   ```

3. **Deploy from the project directory**:
   ```bash
   cd /Users/sergiinevgasymov/Documents/cv_web
   npx vercel
   ```
   - First run: accept defaults (link to existing project or create new one).
   - You’ll get a preview URL (e.g. `https://cv-web-xxx.vercel.app`).

4. **Deploy to production**:
   ```bash
   npx vercel --prod
   ```

5. **Custom domain (optional)**  
   - Open [vercel.com/dashboard](https://vercel.com/dashboard) → your project → **Settings** → **Domains**.  
   - Add `nevhasymov-cv.com.ua` and follow the DNS instructions (A/CNAME records at your domain registrar).

### Deploy via Vercel website (no CLI)

1. **Sign up** at [vercel.com](https://vercel.com).

2. **Deploy**  
   - **Import Git Repository**: Push this project to GitHub/GitLab/Bitbucket, then in Vercel click **Add New Project** and import the repo.  
   - **Upload**: Or use **Add New** → **Project** and drag-and-drop the `cv_web` folder (or upload a ZIP).

3. **Custom domain**  
   - Project → **Settings** → **Domains** → Add `nevhasymov-cv.com.ua` and configure DNS as shown.

## DNS Configuration

For your domain `nevhasymov-cv.com.ua`, you'll need to configure DNS records:

### For Traditional Hosting:
```
Type: A
Name: @
Value: [Your hosting IP address]
TTL: 3600

Type: CNAME
Name: www
Value: nevhasymov-cv.com.ua
TTL: 3600
```

### For Netlify/Vercel:
Follow the specific instructions provided by the platform.

## File Structure

Ensure your hosting directory has this structure:
```
/
├── index.html
├── styles.css
├── script.js
└── assets/
    └── profile-photo.png
```

## Testing

After deployment:

1. Visit `https://nevhasymov-cv.com.ua` (wait for DNS propagation)
2. Test all navigation links
3. Verify images load correctly
4. Check mobile responsiveness
5. Test contact links (email, phone, LinkedIn)

## SEO Checklist

✅ Meta tags included
✅ Structured data (JSON-LD) added
✅ Open Graph tags for social sharing
✅ Canonical URL set
✅ Responsive design
✅ Fast loading (optimize images if needed)

## Image Optimization (Optional)

If the profile photo is large, optimize it:
- Use tools like TinyPNG or ImageOptim
- Recommended size: under 200KB
- Format: WebP or optimized PNG

## Maintenance

- Keep content updated
- Regularly check for broken links
- Monitor website performance
- Update SSL certificate if needed

## Support

If you encounter issues:
1. Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
2. Verify file permissions (should be 644 for files, 755 for directories)
3. Check hosting error logs
4. Ensure `.htaccess` doesn't block files (if using Apache)
