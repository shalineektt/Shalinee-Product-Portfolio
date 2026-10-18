# Shalinee Kumari · Portfolio

A static portfolio site: plain HTML, CSS and a little JavaScript. There is no server code and nothing to configure.

## Put it online (easiest): Netlify Drop
1. Unzip the zip.
2. Go to app.netlify.com/drop and sign in (free).
3. Drag the whole unzipped folder onto the page. You get a live link straight away.
4. Optional: Site configuration → Change site name, for a link like `shalinee-kumari.netlify.app`.

To update the site later: open your site in Netlify, go to Deploys, and drag the new folder into the upload box.

## Contact
"Contact me" and "Email me" open the visitor's email app with `shalineekt@gmail.com` already filled in. There is also a "Copy address" button for people without a mail app.
To change the address, search the `.html` files for `shalineekt@gmail.com`.

## Motion (in `assets/js/site.js` and `assets/css/site.css`)
- A thin scroll-progress rail on wide screens: 01 Think, 02 Build, 03 Launch, 04 Scale.
- Sections fade up 16px as they arrive. Cards lift 2px on hover.
- Headline numbers resolve from zero when they scroll into view.
- Product cards on the home page reveal Problem, My role and Impact one after another.
- Product decisions on the case studies light up as you read through them.
- Screenshots drift at most 12px slower than the page.
- Primary buttons move up to 3px toward the cursor; arrows move only on hover.
- Everything is switched off for visitors who prefer reduced motion, and the rail is hidden on phones.

## After you know your live address
The pages contain `https://shalinee-portfolio.vercel.app` in the link-preview tags. Replace it with your real address:

    grep -rl "shalinee-portfolio.vercel.app" --include=*.html . | xargs sed -i 's#https://shalinee-portfolio.vercel.app#https://YOUR-ADDRESS#g'
