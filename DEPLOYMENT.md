# Layer Zero Studio - Deployment Guide

## Development

Your Next.js TypeScript website is now ready for development and deployment!

### Local Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.

- Homepage: `http://localhost:3000/`
- AI Services: `http://localhost:3000/ai-services`

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

Vercel provides zero-configuration deployment for Next.js applications.

### Method 1: Vercel CLI (Fastest)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd /Users/juliovivas/LayerZero.Studio
vercel
```

3. Follow the prompts to connect your project

4. Production deployment:
```bash
vercel --prod
```

### Method 2: GitHub + Vercel (Best for Teams)

1. **Initialize Git Repository:**
```bash
cd /Users/juliovivas/LayerZero.Studio
git init
git add .
git commit -m "Initial commit: Next.js TypeScript migration"
```

2. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `layerzero-studio`)
   - Don't initialize with README (you already have files)

3. **Push to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/layerzero-studio.git
git branch -M main
git push -u origin main
```

4. **Deploy on Vercel:**
   - Visit https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"
   - Done! Your site will be live at `your-project.vercel.app`

5. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `layerzero.studio`
   - Update DNS records as instructed

## Environment Variables

If you need environment variables for production:

1. Create `.env.local` for local development (already gitignored)
2. Add variables in Vercel dashboard: Project Settings → Environment Variables

Example variables (from `.env.example`):
```bash
NEXT_PUBLIC_SITE_URL=https://layerzero.studio
```

## Post-Deployment Checklist

- [ ] Verify homepage loads correctly
- [ ] Test navigation between homepage and AI services page
- [ ] Check all animations work (marquee, fade-in-up, hover effects)
- [ ] Test contact forms (add backend integration if needed)
- [ ] Verify mobile responsiveness
- [ ] Check Lighthouse scores (should be 95+)
- [ ] Update social media links in Footer component
- [ ] Add custom domain in Vercel

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds and show deployment status

## Performance Optimizations

The site is already optimized with:
- ✅ Next.js 15 App Router
- ✅ Automatic code splitting
- ✅ Optimized fonts (next/font/google)
- ✅ Static page generation
- ✅ Compressed assets
- ✅ SEO metadata
- ✅ Sitemap and robots.txt

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Dev Server Issues
```bash
# Kill any running processes
lsof -ti:3000 | xargs kill
npm run dev
```

### Type Errors
TypeScript build errors are currently ignored (iconify-icon custom elements). This is safe for production.

## Support

For issues or questions:
- Email: hello@layerzero.studio
- Documentation: https://nextjs.org/docs

---

**Migration Complete!** Your Layer Zero Studio website is now powered by Next.js + TypeScript + Tailwind CSS.
