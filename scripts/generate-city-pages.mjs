import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cities, phoneLink, phoneNumber, services } from '../src/data/cities.js';
import { businessFacts } from '../src/data/businessFacts.js';
import {
    getCityCanonicalUrl,
    getCityFaqs,
    getCityMetaDescription,
    getCitySchema,
    getCityTitle,
} from '../src/data/citySeo.js';

const projectRoot = resolve(import.meta.dirname, '..');
const distDirectory = resolve(projectRoot, 'dist');
const outputDirectory = resolve(distDirectory, 'city-pages');

const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const renderServiceCards = () => services.map((service) => `
    <article class="service-card">
      <div class="service-icon" aria-hidden="true">${escapeHtml(service.icon)}</div>
      <h3>${escapeHtml(service.name)}</h3>
      <ul>${service.items.map((item) => `<li>✓ ${escapeHtml(item)}</li>`).join('')}</ul>
    </article>`).join('');

const renderFaqs = (city) => getCityFaqs(city).map(({ question, answer }) => `
    <div class="city-faq-item">
      <dt>${escapeHtml(question)}</dt>
      <dd>${escapeHtml(answer)}</dd>
    </div>`).join('');

const renderStaticCityContent = (city) => `
  <div class="app">
    <main class="city-page">
      <section class="city-hero">
        <div class="city-hero-bg"></div>
        <div class="container">
          <a class="back-link" href="/">← Back to Home</a>
          <div class="city-badge">${escapeHtml(city.county)}, NC</div>
          <h1><span class="red">${escapeHtml(city.name)}</span> Locksmith — Licensed Mobile Service${city.isHomeBase ? '<span class="home-badge">Home Base</span>' : ''}</h1>
          <p class="city-tagline">${escapeHtml(city.tagline)}</p>
          <p class="city-subtitle">Fast Mobile Service • ${escapeHtml(phoneNumber)}</p>
          <div class="city-cta"><a class="btn btn-primary" href="${phoneLink}">Call Now: ${escapeHtml(phoneNumber)}</a></div>
        </div>
      </section>

      <section class="city-about">
        <div class="container">
          <div class="about-content">
            <h2>24/7 Mobile Locksmith Service in ${escapeHtml(city.name)}</h2>
            <p>${escapeHtml(city.description)}</p>
            <div class="city-local-details">
              <h3>Local Locksmith Information for ${escapeHtml(city.name)}</h3>
              <p>${escapeHtml(city.localContext)}</p>
              <p>${escapeHtml(city.serviceFocus)}</p>
            </div>
            <div class="why-us">
              <h3>Why ${escapeHtml(city.name)} Residents Trust Us</h3>
              <ul>
                <li>✓ ${escapeHtml(businessFacts.experienceYears)} Years of Experience</li>
                <li>✓ Established in ${escapeHtml(businessFacts.establishedYear)}</li>
                <li>✓ Owner ${escapeHtml(businessFacts.ownerName)}</li>
                <li>✓ Licensed &amp; Insured · ${escapeHtml(businessFacts.licenseNumber)}</li>
                <li>✓ Mobile Service to ${escapeHtml(city.name)}</li>
                <li>✓ Fair &amp; Transparent Pricing</li>
              </ul>
            </div>
            <div class="local-areas">
              <h4>Areas and Routes We Serve Near</h4>
              <div class="landmarks">${city.landmarks.map((landmark) => `<span class="landmark-tag">${escapeHtml(landmark)}</span>`).join('')}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="city-services">
        <div class="container">
          <h2>Locksmith Services in ${escapeHtml(city.name)}</h2>
          <div class="services-grid">${renderServiceCards()}</div>
        </div>
      </section>

      <section class="city-faq" aria-labelledby="city-faq-title">
        <div class="container">
          <h2 id="city-faq-title">Quick Answers About Locksmith Service in ${escapeHtml(city.name)}</h2>
          <dl class="city-faq-list">${renderFaqs(city)}</dl>
        </div>
      </section>

      <section class="city-cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Need a Locksmith in ${escapeHtml(city.name)}?</h2>
            <p>Call ${escapeHtml(businessFacts.publicName)} to discuss the job location, service needed and current availability.</p>
            <a class="btn btn-primary btn-large" href="${phoneLink}">Call ${escapeHtml(phoneNumber)}</a>
          </div>
        </div>
      </section>
    </main>
  </div>`;

const replaceRequired = (html, pattern, replacement, label) => {
    if (!pattern.test(html)) throw new Error(`Unable to find ${label} in built index.html`);
    return html.replace(pattern, replacement);
};

export const buildCityHtml = (baseHtml, city) => {
    const canonicalUrl = getCityCanonicalUrl(city);
    const title = getCityTitle(city);
    const description = getCityMetaDescription(city);
    const encodedSchema = JSON.stringify(getCitySchema(city)).replaceAll('<', '\\u003c');

    let html = replaceRequired(
        baseHtml,
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHtml(title)}</title>`,
        'title',
    );
    html = replaceRequired(
        html,
        /<meta\s+name="description"[\s\S]*?>/i,
        `<meta name="description" content="${escapeHtml(description)}" />`,
        'meta description',
    );
    html = replaceRequired(
        html,
        /<link\s+rel="canonical"[\s\S]*?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`,
        'canonical link',
    );
    html = replaceRequired(
        html,
        /<meta\s+property="og:title"[\s\S]*?>/i,
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        'Open Graph title',
    );
    html = replaceRequired(
        html,
        /<meta\s+property="og:description"[\s\S]*?>/i,
        `<meta property="og:description" content="${escapeHtml(description)}" />`,
        'Open Graph description',
    );
    html = replaceRequired(
        html,
        /<meta\s+property="og:url"[\s\S]*?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`,
        'Open Graph URL',
    );
    html = replaceRequired(
        html,
        /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script id="city-page-schema" type="application/ld+json">${encodedSchema}</script>`,
        'structured data',
    );
    html = replaceRequired(
        html,
        /<div\s+id="root"><\/div>/i,
        `<div id="root">${renderStaticCityContent(city)}</div>`,
        'application root',
    );

    for (const required of [canonicalUrl, title, city.localContext, businessFacts.licenseNumber]) {
        if (!html.includes(required)) throw new Error(`${city.name} output is missing: ${required}`);
    }

    return html;
};

const main = async () => {
    const baseHtml = await readFile(resolve(distDirectory, 'index.html'), 'utf8');
    await mkdir(outputDirectory, { recursive: true });

    await Promise.all(Object.values(cities).map(async (city) => {
        const output = buildCityHtml(baseHtml, city);
        await writeFile(resolve(outputDirectory, `${city.slug}.html`), output, 'utf8');
    }));

    console.log(`Generated ${Object.keys(cities).length} pre-rendered city pages.`);
};

if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) {
    await main();
}
