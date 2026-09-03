import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { cities } from '../src/data/cities.js';
import { getCityDomainEntryPath } from '../src/data/cityDomains.js';

const domains = {
  'erwinlocksmith.com': 'Erwin',
  'bunnlevellocksmith.com': 'Bunnlevel',
  'coatslocksmith.com': 'Coats',
};
const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));

for (const [domain, city] of Object.entries(domains)) {
  for (const hostname of [domain, `www.${domain}`]) {
    test(`${hostname} opens the ${city} page from the generic homepage`, () => {
      assert.equal(getCityDomainEntryPath({ hostname, pathname: '/' }), `/${city}`);
      assert.equal(cities[city].slug, city);
    });

    test(`${hostname} retains the existing server-side city entry`, () => {
      const rule = vercel.rewrites.find(rule => rule.source === '/'
        && rule.has?.some(condition => condition.type === 'host' && condition.value === hostname));
      assert.equal(rule?.destination, `/domains/${city.toLowerCase()}.html`);
      const html = readFileSync(new URL(`../domains/${city.toLowerCase()}.html`, import.meta.url), 'utf8');
      assert.ok(html.includes(`history.replaceState(null, "", "/${city}")`));
    });
  }
}

test('keeps campaign parameters and section anchors', () => {
  assert.equal(getCityDomainEntryPath({
    hostname: 'www.erwinlocksmith.com',
    pathname: '/',
    search: '?utm_source=google',
    hash: '#services',
  }), '/Erwin?utm_source=google#services');
});

test('handles the explicit homepage filename and normalized hostnames', () => {
  assert.equal(getCityDomainEntryPath({
    hostname: 'WWW.COATSLOCKSMITH.COM.', pathname: '/index.html',
  }), '/Coats');
});

test('does not replace city pages, blog links, or other explicit paths', () => {
  for (const pathname of ['/Erwin', '/Coats', '/Bunnlevel', '/Angier', '/blog', '/blog/test', '/contact']) {
    assert.equal(getCityDomainEntryPath({ hostname: 'erwinlocksmith.com', pathname }), null);
  }
});

test('leaves the main site, existing city domains, previews, and unrelated hosts alone', () => {
  for (const hostname of [
    'goodlocksmith.com', 'www.goodlocksmith.com', 'angierlocksmith.com',
    'www.angierlocksmith.com', 'lillingtonlocksmith.com', 'dunnlocksmith.com',
    'harnettcountylocksmith.com', 'wakecountylocksmith.com', 'locksmithfuquay.com',
    'goodlocksmith.vercel.app', 'localhost', 'erwinlocksmth.com',
    'erwinlocksmith.com.example.org', 'noterwinlocksmith.com', 'constructor',
  ]) {
    assert.equal(getCityDomainEntryPath({ hostname, pathname: '/' }), null);
  }
});
