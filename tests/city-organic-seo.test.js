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

const projectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const vercel = JSON.parse(projectFile('vercel.json'));
const baseHtml = projectFile('index.html');

const cityDomains = {
  'angierlocksmith.com': 'Angier',
  'dunnlocksmith.com': 'Dunn',
  'harnettcountylocksmith.com': 'Harnett-County',
  'wakecountylocksmith.com': 'Wake-County',
  'locksmithfuquay.com': 'Fuquay-Varina',
  'lillingtonlocksmith.com': 'Lillington',
  'erwinlocksmith.com': 'Erwin',
  'bunnlevellocksmith.com': 'Bunnlevel',
  'coatslocksmith.com': 'Coats',
};

for (const [domain, slug] of Object.entries(cityDomains)) {
  for (const hostname of [domain, `www.${domain}`]) {
    test(`${hostname} permanently consolidates into the ${slug} city page`, () => {
      const rule = vercel.redirects.find((candidate) => candidate.source === '/'
        && candidate.has?.some((condition) => condition.type === 'host' && condition.value === hostname));
      assert.equal(rule?.destination, `https://www.goodlocksmith.com/${slug}`);
      assert.equal(rule?.permanent, true);
    });
  }
}

test('serves a pre-rendered HTML document for every city URL', () => {
  for (const city of Object.values(cities)) {
    const rewrite = vercel.rewrites.find((candidate) => candidate.source === `/${city.slug}`);
    assert.equal(rewrite?.destination, `/city-pages/${city.slug}.html`);

    const html = buildCityHtml(baseHtml, city);
    assert.match(html, new RegExp(`<title>${getCityTitle(city).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</title>`));
    assert.ok(html.includes(`<link rel="canonical" href="${getCityCanonicalUrl(city)}" />`));
    assert.ok(html.includes(city.localContext));
    assert.ok(html.includes(city.serviceFocus));
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
  assert.equal(packageJson.scripts.build, 'vite build && node scripts/generate-city-pages.mjs');
});
