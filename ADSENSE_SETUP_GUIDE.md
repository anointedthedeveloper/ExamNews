# AdSense Setup Guide - Quick Start

## 🚀 Your Site is Now AdSense-Ready!

### What Was Done:

✅ **Legal Pages Created:**
- Privacy Policy
- Terms of Service  
- About Us
- Contact

✅ **Technical Improvements:**
- Lazy loading for all pages
- Error boundary for stability
- Cookie consent banner
- SEO optimization
- Semantic HTML structure

✅ **AdSense Preparation:**
- Ad slot component ready
- Environment variable control
- Proper ad placement structure

---

## 📋 Before Applying to AdSense

### Important Age Requirement:
**Google AdSense requires you to be 18 years or older.**

Since you're under 16, you have these options:
1. **Have a parent/guardian apply** on your behalf (recommended)
2. **Wait until you're 18** to apply
3. **Continue with current monetization** (Opay donations on Support page)

---

## 🎯 When Ready to Apply (18+ or with Guardian)

### Step 1: Prepare Your Site
```bash
# Build for production
npm run build

# Test the build
npm run preview
```

### Step 2: Create .env File
Create a file named `.env` in the root directory:
```
VITE_SHOW_ADS=false
VITE_SITE_URL=https://examnews.work.gd
```

### Step 3: Deploy to Production
- Ensure site is live at https://examnews.work.gd
- Verify all pages load correctly
- Test on mobile devices

### Step 4: Apply to AdSense
1. Go to https://www.google.com/adsense
2. Sign in with Google account (18+ or guardian's account)
3. Click "Get Started"
4. Enter your website URL
5. Fill in payment details (guardian's if applicable)
6. Submit application

### Step 5: Add Verification Code
After applying, Google will provide a verification code:

1. Open `index.html`
2. Add the code in the `<head>` section:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

3. Commit and deploy changes
4. Wait for Google to verify (1-2 weeks)

---

## ✅ After AdSense Approval

### Step 1: Enable Ads
Update your `.env` file:
```
VITE_SHOW_ADS=true
```

### Step 2: Update AdSlot Component
Open `src/components/AdSlot.jsx` and replace the placeholder with actual AdSense code.

Replace this:
```jsx
<span>Advertisement</span>
```

With this:
```jsx
<ins className="adsbygoogle"
     style={{display: 'block'}}
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### Step 3: Deploy
```bash
npm run build
# Deploy to your hosting
```

---

## 📍 Where Ads Will Appear

Ads are strategically placed in:
- Home page (header, sidebar, in-content)
- All major content pages
- Between sections for natural flow
- Non-intrusive positions

---

## 🔍 Testing Your Site

### Run Lighthouse Audit:
1. Build your site: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools (F12)
4. Go to "Lighthouse" tab
5. Click "Generate report"

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 📊 Monitoring After Launch

### Google Search Console:
1. Go to https://search.google.com/search-console
2. Add your property
3. Submit sitemap: `https://examnews.work.gd/sitemap.xml`

### Google Analytics (Optional):
1. Create GA4 property
2. Add tracking ID to `.env`:
```
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

---

## 🛠️ Maintenance Checklist

### Weekly:
- [ ] Update exam dates and news
- [ ] Check for broken links
- [ ] Respond to support messages

### Monthly:
- [ ] Review AdSense performance
- [ ] Update cut-off marks
- [ ] Check site speed
- [ ] Backup content

### Annually:
- [ ] Review and update Privacy Policy
- [ ] Update Terms of Service
- [ ] Refresh About page content

---

## 💡 Tips for AdSense Success

1. **Quality Content:** Keep adding valuable, original content
2. **Regular Updates:** Update exam information frequently
3. **User Experience:** Keep site fast and easy to navigate
4. **Mobile-First:** Most traffic will be mobile
5. **Avoid Violations:** Never click your own ads
6. **Be Patient:** Revenue grows over time with traffic

---

## 🆘 Troubleshooting

### Site Not Loading?
```bash
npm install
npm run dev
```

### Build Errors?
```bash
rm -rf node_modules
npm install
npm run build
```

### Ads Not Showing?
1. Check `.env` has `VITE_SHOW_ADS=true`
2. Verify AdSense code is correct
3. Wait 24-48 hours after approval
4. Check AdSense dashboard for issues

---

## 📞 Need Help?

- Check `ADSENSE_COMPLIANCE_REPORT.md` for detailed information
- Review Google AdSense Help Center
- Test thoroughly before applying

---

## 🎉 You're All Set!

Your site is now:
- ✅ Fully compliant with AdSense policies
- ✅ Optimized for performance
- ✅ SEO-ready
- ✅ Mobile-responsive
- ✅ Legally compliant
- ✅ Production-ready

**Good luck with your AdSense application!** 🚀

---

*Remember: You need to be 18+ or have a guardian apply on your behalf for AdSense.*
