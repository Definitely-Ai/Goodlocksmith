import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { cities } from '../src/data/cities.js';
import {
  getCityCanonicalUrl,
  getCityMetaDescription,
  getCityTitle,
} from '../src/data/citySeo.js';
import { buildCityHtml } from '../scripts/generate-city-pages.mjs';
import { cityMarketDetails, securityGuides } from '../src/data/cityMarketDetails.js';
import { cityDomains, getDomainCanonicalUrl } from '../src/data/cityDomains.js';

const projectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const vercel = JSON.parse(projectFile('vercel.json'));
const baseHtml = projectFile('index.html');
const escapeHtml = (value) => value.replaceAll('&', '&amp;');

for (const [domain, slug] of Object.entries(cityDomains)) {
  for (const hostname of [domain, `www.${domain}`]) {
    test(`${hostname} serves its own complete ${slug} landing without forwarding`, () => {
      const appliesToHost = (rule) => !rule.has || rule.has.every((condition) => condition.type === 'host' && condition.value === hostname);
      assert.equal(vercel.routes.filter(rule => rule.headers?.Location && appliesToHost(rule)).length, 0);
      for (const source of ['/', `/${slug}`, `/${slug}/`, '/robots.txt', '/sitemap.xml']) {
        const position = vercel.routes.findIndex((candidate) => candidate.src && new RegExp(candidate.src).test(source) && appliesToHost(candidate));
        const rule = vercel.routes[position];
        const suffix = source === '/robots.txt' ? 'robots.txt' : source === '/sitemap.xml' ? 'sitemap.xml' : 'html';
        assert.equal(rule?.dest, `/domain-pages/${slug}.${suffix}`);
        // Existing index.html, robots.txt and sitemap.xml would otherwise win.
        assert.ok(position < vercel.routes.findIndex(candidate => candidate.handle === 'filesystem'));
      }

      const canonicalUrl = getDomainCanonicalUrl(domain);
      const html = buildCityHtml(baseHtml, cities[slug], { canonicalUrl, standalone: true });
      assert.ok(html.includes(`<link rel="canonical" href="${canonicalUrl}" />`));
      assert.ok(html.includes(`<meta property="og:url" content="${canonicalUrl}" />`));
      assert.match(html, /href="https:\/\/www\.goodlocksmith\.com\/">← Back to Home/);
      assert.match(html, /href="tel:984-480-5397"/);
      assert.match(html, /href="sms:\+19844805397"/);
      assert.match(html, /<h1>[\s\S]*?Locksmith/);
      assert.doesNotMatch(html, /<script[^>]*type="module"|history\.replaceState|location\.(?:href|replace)|http-equiv="refresh"/i);
      assert.doesNotMatch(html, /href="\/(?:blog|Lillington|Dunn|Angier)/);
      const schema = JSON.parse(html.match(/<script id="city-page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
      assert.equal(schema['@graph'].find(item => item['@type'] === 'WebPage').url, canonicalUrl);
      assert.equal(schema['@graph'].find(item => item['@type'] === 'WebSite').url, canonicalUrl);
      assert.equal(schema['@graph'].find(item => item['@type'] === 'Locksmith').address.addressLocality, 'Lillington');
    });
  }
}

test('serves a pre-rendered HTML document for every city URL', () => {
  for (const city of Object.values(cities)) {
    const rewrite = vercel.routes.find((candidate) => candidate.src === `^/${city.slug}$` && !candidate.has);
    assert.equal(rewrite?.dest, `/city-pages/${city.slug}.html`);

    const html = buildCityHtml(baseHtml, city);
    assert.match(html, new RegExp(`<title>${escapeHtml(getCityTitle(city)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</title>`));
    assert.ok(html.includes(`<link rel="canonical" href="${getCityCanonicalUrl(city)}" />`));
    assert.ok(html.includes(city.localContext));
    assert.ok(html.includes(city.serviceFocus));
    assert.ok(html.includes(cityMarketDetails[city.slug].summary));
    assert.ok(cityMarketDetails[city.slug].relatedSlugs.some((slug) => html.includes(`href="/${slug}"`)));
    assert.ok(securityGuides.some((guide) => html.includes(`href="${guide.path}"`)));
    assert.doesNotMatch(html, /<div\s+id="root"><\/div>/i);

    const schemaText = html.match(/<script id="city-page-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    assert.ok(schemaText, `${city.name} is missing city structured data`);
    const schema = JSON.parse(schemaText);
    assert.equal(schema['@graph'][0].url, getCityCanonicalUrl(city));
  }
});

test('gives every city a unique search description and local explanation', () => {
  const descriptions = Object.values(cities).map(getCityMetaDescription);
  const localExplanations = Object.values(cities).map((city) => city.localContext);

  assert.equal(new Set(descriptions).size, descriptions.length);
  assert.equal(new Set(localExplanations).size, localExplanations.length);
});

test('build creates the pre-rendered documents after Vite compiles the app', () => {
  const packageJson = JSON.parse(projectFile('package.json'));
  assert.equal(packageJson.scripts.build, 'vite build && node scripts/generate-city-pages.mjs && node scripts/generate-blog-pages.mjs && node scripts/generate-homepage.mjs');
});
