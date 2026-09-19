# Independent city domains

The city domains serve complete, pre-rendered landing pages while keeping the city hostname in the address bar. Home links go to https://www.goodlocksmith.com/; call and SMS links go directly to Mike at 984-480-5397. Each landing includes the existing city-specific service information, license, owner photo, FAQs, and related reading.

| Domain (both apex and www) | Landing |
| --- | --- |
| angierlocksmith.com | Angier |
| dunnlocksmith.com | Dunn |
| harnettcountylocksmith.com | Harnett County |
| wakecountylocksmith.com | Wake County |
| locksmithfuquay.com | Fuquay-Varina |
| lillingtonlocksmith.com | Lillington |
| erwinlocksmith.com | Erwin |
| bunnlevellocksmith.com | Bunnlevel |
| coatslocksmith.com | Coats |

## Build and hosting

`npm run build` writes each landing to `dist/domain-pages/<city>.html` and generates its own robots.txt and sitemap. Host-specific routes in vercel.json serve these files at the city domain's root **before the filesystem phase**. This order is required: ordinary rewrites run after the existing main-site index.html, robots.txt and sitemap.xml have already matched. Canonical and Open Graph URLs use `https://www.<city-domain>/`, and the sitemap contains that URL. The business entity remains A Good Locksmith in Lillington; the pages do not claim separate staffed city locations.

The standalone pages use the built site's CSS and images. They do not load the primary React router, which would otherwise replace a domain-root landing with the main homepage. Calls, texts, Home, and reading links work without JavaScript. Main-site city URLs remain available.

## External settings needed to activate the domains

The GitHub application cannot override a redirect applied by the registrar or Vercel project before the request reaches its routing rules.

1. In the Vercel project connected to `Definitely-Ai/Goodlocksmith`, attach every apex and www hostname in the table to **Production**. Use the existing project; do not create replacement projects. Set each www city hostname to serve Production, without a redirect to GoodLocksmith.com or goodlocksmith.vercel.app. An apex-to-www redirect within the same city domain is acceptable.
2. At GoDaddy, remove domain forwarding to `http://goodlocksmith.vercel.app/<city>` for Angier, Dunn, Harnett County, Wake County, Fuquay, and Lillington. Point their DNS records to the exact records recommended by the existing Vercel project's Domains screen. Do not guess IP addresses. Preserve mail and unrelated records.
3. Check Erwin, Bunnlevel, and Coats project-level domain settings. Their apex-to-www redirects can stay, but their www hostnames must serve this deployment rather than redirect to GoodLocksmith.com.
4. Verify HTTPS on both hostnames, with the final address remaining on that city domain. Check the page title, canonical, call/SMS links, Home destination, `/robots.txt`, `/sitemap.xml`, stylesheet, and images.
5. Once a domain is live, verify it in Google Search Console and submit that domain's `/sitemap.xml`. Inspect the www root URL. Indexing and ranking are determined by Google and are not guaranteed by this change.

At the time this change was prepared, the connected Vercel account exposed no projects. The six older domains publicly returned a registrar-level 301 to the old Vercel address; the three newer domains reached their www hostnames before forwarding to the main site's city page. Confirm current live behavior after deployment before marking any domain complete.
