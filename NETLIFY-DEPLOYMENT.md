# Netlify Deployment Checklist

## ✅ Pre-deployment Checklist

### 1. Build Configuration
- [x] Production build tested successfully (`npm run build`)
- [x] Build output in `/dist` folder
- [x] No build errors or critical warnings

### 2. Routing Setup
- [x] `_redirects` file added to `/public` folder for SPA routing
- Content: `/* /index.html 200`

### 3. Environment Variables
- [ ] Set `VITE_API_URL` in Netlify environment variables (when backend is ready)
- Currently hardcoded to `http://localhost:3000` - needs update

### 4. Static Assets
- [x] All images served from `/img/` path
- [x] All PDFs will be served from `/pdf/` path (whitepaper)
- [x] Lottie animations properly bundled

### 5. i18n Implementation
- [x] French (default) and English translations
- [x] Language switcher component created
- [ ] Language switcher needs to be integrated in navigation

## 📋 Deployment Steps

1. **Connect to Netlify**
   ```
   - Login to Netlify
   - New site from Git
   - Connect to your repository
   ```

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables**
   ```
   VITE_API_URL=https://your-backend-api.com
   ```

4. **Deploy Settings**
   - Enable automatic deploys from main branch
   - Set up deploy previews for pull requests

## ⚠️ Important Notes

### Bundle Size Warning
- Main JS bundle is 656KB (169KB gzipped)
- Consider code splitting for better performance
- Lottie library is the main contributor to bundle size

### Missing Features
- Backend API endpoint not configured (waiting for backend dev)
- Whitepaper PDFs need to be added to `/public/pdf/`
- Language switcher needs integration

### Performance Optimizations Needed
- [ ] Implement lazy loading for images
- [ ] Code split Lottie animations
- [ ] Optimize image formats (WebP)
- [ ] Add meta tags for SEO

## 🚀 Post-deployment Tasks

1. **Test all features**
   - Navigation links
   - Tooltips
   - Card interactions
   - Form submission (when API is ready)
   - Language switching

2. **Monitor**
   - Check Netlify Analytics
   - Monitor build times
   - Check for 404s in routing

3. **SEO Setup**
   - Submit sitemap
   - Add robots.txt
   - Verify meta tags

## 📱 Responsive Testing
- Mobile (390px+)
- Desktop (1440px+)
- Test on real devices

## 🔐 Security
- [ ] Add Content Security Policy headers
- [ ] Enable HTTPS (automatic on Netlify)
- [ ] Add security headers in `netlify.toml`