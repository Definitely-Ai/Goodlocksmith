import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { cities } from '../src/data/cities.js';
import { businessFacts } from '../src/data/businessFacts.js';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('publishes one consistent experience and company-history distinction', () => {
  const checkedContent = [
    read('index.html'),
    read('src/components/About.jsx'),
    read('src/components/Hero.jsx'),
    read('src/pages/CityPage.jsx'),
  ].join('\n');

  assert.equal(businessFacts.experienceYears, '35+');
  assert.equal(businessFacts.establishedYear, '1994');
  assert.equal(businessFacts.licenseNumber, 'NCLL #3119');
  assert.doesNotMatch(checkedContent, /\b(?:30|34)\+\s+Years/i);
  assert.match(checkedContent, /foundingDate/);
  assert.match(checkedContent, /North Carolina Locksmith License/);
});

test('allows the major search-focused AI crawlers', () => {
  const robots = read('public/robots.txt');

  for (const crawler of ['OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot']) {
    assert.match(robots, new RegExp(`User-agent: ${crawler}\\nAllow: /`));
  }
});

test('includes every city landing page in the sitemap', () => {
  const sitemap = read('public/sitemap.xml');

  for (const city of Object.values(cities)) {
    assert.ok(sitemap.includes(`https://www.goodlocksmith.com/${city.slug}`), `${city.name} is missing from the sitemap`);
  }
});

test('links Bunnlevel from the homepage and footer service-area lists', () => {
  assert.match(read('src/components/ServiceAreas.jsx'), /slug: 'Bunnlevel'/);
  assert.match(read('src/components/Footer.jsx'), /path: '\/Bunnlevel'/);
});

