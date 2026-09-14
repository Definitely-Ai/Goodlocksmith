import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogPosts } from '../src/data/blogPosts.js';
import { businessFacts } from '../src/data/businessFacts.js';
import { cities, services } from '../src/data/cities.js';

const projectRoot = resolve(import.meta.dirname, '..');
const homepagePath = resolve(projectRoot, 'dist', 'index.html');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const staticHomepage = `
  <div class="app">
    <main>
      <section class="hero" id="home">
        <div class="container">
          <p>Owner-operated · Licensed &amp; insured · ${escapeHtml(businessFacts.licenseNumber)}</p>
          <h1>Licensed Mobile Locksmith in Lillington, North Carolina</h1>
          <p>${escapeHtml(businessFacts.ownerName)} brings ${escapeHtml(businessFacts.experienceYears)} years of professional locksmithing experience to residential, commercial, automotive and motorcycle service. A Good Locksmith was established in ${escapeHtml(businessFacts.establishedYear)}.</p>
          <a class="btn btn-primary" href="${businessFacts.phoneLink}">Call ${escapeHtml(businessFacts.phoneNumber)}</a>
        </div>
      </section>
      <section class="services" id="services">
        <div class="container">
          <h2>Mobile Locksmith Services</h2>
          <div class="services-grid">${services.map((service) => `<article class="service-card"><h3>${escapeHtml(service.name)}</h3><ul>${service.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></article>`).join('')}</div>
        </div>
      </section>
      <section class="service-areas" id="areas">
        <div class="container">
          <h2>Local Locksmith Service Areas</h2>
          <p>A Good Locksmith is based in Lillington and serves nearby Harnett County, southern Wake County, Lee County and selected Johnston County communities.</p>
          <div class="cities-grid">${Object.values(cities).map((city) => `<a class="city-card" href="/${escapeHtml(city.slug)}"><h3>${escapeHtml(city.name)}, NC</h3><p>${escapeHtml(city.tagline)}</p><span>View local locksmith service →</span></a>`).join('')}</div>
        </div>
      </section>
      <section class="blog-list-section">
        <div class="container">
          <h2>Recent Locksmith &amp; Security Guides</h2>
          <div class="blog-grid">${blogPosts.slice(0, 6).map((post) => `<article class="blog-card"><div class="blog-card-body"><span class="blog-category">${escapeHtml(post.category)}</span><h3><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.excerpt)}</p></div></article>`).join('')}</div>
          <p><a href="/blog">View every security guide</a></p>
        </div>
      </section>
      <section id="contact">
        <div class="container">
          <h2>Speak Directly With A Good Locksmith</h2>
          <p>Call with the exact location and a description of the lock, key, door or vehicle problem so Mike can confirm current mobile availability.</p>
          <a class="btn btn-primary" href="${businessFacts.phoneLink}">Call ${escapeHtml(businessFacts.phoneNumber)}</a>
        </div>
      </section>
    </main>
  </div>`;

const html = await readFile(homepagePath, 'utf8');
if (!/<div\s+id="root"><\/div>/i.test(html)) {
  throw new Error('Unable to find the empty application root in dist/index.html');
}
await writeFile(homepagePath, html.replace(/<div\s+id="root"><\/div>/i, `<div id="root">${staticHomepage}</div>`), 'utf8');
console.log('Generated a crawlable pre-rendered homepage.');
