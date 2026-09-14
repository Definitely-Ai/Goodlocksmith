import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { blogPosts } from '../src/data/blogPosts.js';
import { businessFacts } from '../src/data/businessFacts.js';

const projectRoot = resolve(import.meta.dirname, '..');
const distDirectory = resolve(projectRoot, 'dist');
const outputDirectory = resolve(distDirectory, 'blog-pages');
const siteUrl = 'https://www.goodlocksmith.com';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const replaceRequired = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) throw new Error(`Unable to find ${label} in built index.html`);
  return html.replace(pattern, replacement);
};

const businessNode = {
  '@type': 'Locksmith',
  '@id': `${siteUrl}/#business`,
  name: businessFacts.legalName,
  url: `${siteUrl}/`,
  telephone: '+1-984-480-5397',
  foundingDate: businessFacts.establishedYear,
  founder: { '@id': `${siteUrl}/#michael-galdine` },
  identifier: {
    '@type': 'PropertyValue',
    name: 'North Carolina Locksmith License',
    value: businessFacts.licenseNumber,
  },
};

const ownerNode = {
  '@type': 'Person',
  '@id': `${siteUrl}/#michael-galdine`,
  name: businessFacts.ownerName,
  jobTitle: 'Licensed Locksmith and Owner',
  worksFor: { '@id': `${siteUrl}/#business` },
};

const articleSchema = (post, canonicalUrl) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: post.title,
      description: post.seoDescription,
      datePublished: post.datePublished,
      dateModified: post.datePublished,
      image: `${siteUrl}${post.image}`,
      inLanguage: 'en-US',
      author: { '@id': `${siteUrl}/#michael-galdine` },
      publisher: { '@id': `${siteUrl}/#business` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
      about: post.about,
      areaServed: ['Harnett County, NC', 'southern Wake County, NC', 'Lee County, NC'],
    },
    {
      '@type': 'WebPage',
      '@id': canonicalUrl,
      url: canonicalUrl,
      name: post.seoTitle,
      description: post.seoDescription,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#business` },
    },
    businessNode,
    ownerNode,
  ],
});

const blogSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl}/blog#webpage`,
      url: `${siteUrl}/blog`,
      name: 'North Carolina Locksmith Security Blog | A Good Locksmith',
      description: 'Practical lock, key, rekeying, smart-lock and door-security guidance from licensed North Carolina locksmith Michael Galdine.',
      about: { '@id': `${siteUrl}/#business` },
      mainEntity: { '@id': `${siteUrl}/blog#articles` },
    },
    {
      '@type': 'ItemList',
      '@id': `${siteUrl}/blog#articles`,
      itemListElement: blogPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
    businessNode,
    ownerNode,
  ],
});

const renderArticle = (post) => `
  <div class="app">
    <main class="article-main">
      <article>
        <header class="article-header">
          <div class="container article-heading">
            <a href="/blog" class="article-back">← Security Blog</a>
            <span class="blog-category">${escapeHtml(post.category)}</span>
            <h1>${escapeHtml(post.title)}</h1>
            <p class="article-lead">${escapeHtml(post.excerpt)}</p>
            <div class="article-meta">Published ${escapeHtml(post.publishedDate)} · ${escapeHtml(post.readingTime)} · Reviewed by ${escapeHtml(businessFacts.ownerName)}, licensed locksmith · ${escapeHtml(businessFacts.licenseNumber)}</div>
          </div>
        </header>
        <div class="container article-layout">
          <div class="article-content">
            <img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt)}" class="article-featured-image" decoding="async" />
            <p>${escapeHtml(post.excerpt)}</p>
            <h2>Experienced North Carolina locksmith guidance</h2>
            <p>This guide was prepared by ${escapeHtml(businessFacts.ownerName)}, owner of ${escapeHtml(businessFacts.legalName)}. Mike has ${escapeHtml(businessFacts.experienceYears)} years of professional locksmithing experience and established the business in ${escapeHtml(businessFacts.establishedYear)}. The article covers ${escapeHtml(post.about.join(', '))} for property owners, drivers, landlords and businesses.</p>
            <h2>Mobile locksmith service from Lillington</h2>
            <p>A Good Locksmith provides licensed mobile service from Lillington throughout nearby Harnett County, southern Wake County and Lee County. Call with the exact address and service needed so current availability can be confirmed.</p>
            <p><a href="/Lillington">Lillington locksmith service</a> · <a href="/Harnett-County">Harnett County locksmith service</a> · <a href="/Fuquay-Varina">Fuquay-Varina locksmith service</a> · <a href="/Sanford">Sanford locksmith service</a></p>
            <div class="article-cta">
              <span>Licensed &amp; insured</span>
              <h2>Talk directly with an experienced locksmith</h2>
              <p>Call A Good Locksmith to discuss the lock, key, door or security problem and current mobile availability.</p>
              <a class="btn btn-primary btn-large" href="${businessFacts.phoneLink}">Call ${escapeHtml(businessFacts.phoneNumber)}</a>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>`;

const renderBlogIndex = () => `
  <div class="app">
    <main class="blog-main">
      <section class="blog-hero">
        <span class="blog-eyebrow">Advice from a licensed North Carolina locksmith</span>
        <h1>Security &amp; Locksmith Blog</h1>
        <p>Practical guidance about rekeying, lockouts, smart locks, vehicle keys, commercial door hardware and everyday security from ${escapeHtml(businessFacts.ownerName)}.</p>
      </section>
      <section class="blog-list-section">
        <div class="container blog-grid">
          ${blogPosts.map((post) => `
            <article class="blog-card">
              <a class="blog-card-image-link" href="/blog/${escapeHtml(post.slug)}"><img class="blog-card-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.imageAlt)}" loading="lazy" decoding="async" /></a>
              <div class="blog-card-body">
                <span class="blog-category">${escapeHtml(post.category)}</span>
                <h2><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h2>
                <p>${escapeHtml(post.excerpt)}</p>
                <div class="blog-card-meta">${escapeHtml(post.publishedDate)} · ${escapeHtml(post.readingTime)}</div>
                <a class="blog-read-link" href="/blog/${escapeHtml(post.slug)}">Read the guide →</a>
              </div>
            </article>`).join('')}
        </div>
      </section>
    </main>
  </div>`;

const buildPage = (baseHtml, { title, description, canonicalUrl, ogType, image, schema, root }) => {
  let html = replaceRequired(baseHtml, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`, 'title');
  html = replaceRequired(html, /<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${escapeHtml(description)}" />`, 'meta description');
  html = replaceRequired(html, /<link\s+rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${canonicalUrl}" />`, 'canonical link');
  html = replaceRequired(html, /<meta\s+property="og:type"[\s\S]*?>/i, `<meta property="og:type" content="${ogType}" />`, 'Open Graph type');
  html = replaceRequired(html, /<meta\s+property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`, 'Open Graph title');
  html = replaceRequired(html, /<meta\s+property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`, 'Open Graph description');
  html = replaceRequired(html, /<meta\s+property="og:image"[\s\S]*?>/i, `<meta property="og:image" content="${image}" />`, 'Open Graph image');
  html = replaceRequired(html, /<meta\s+property="og:url"[\s\S]*?>/i, `<meta property="og:url" content="${canonicalUrl}" />`, 'Open Graph URL');
  html = replaceRequired(html, /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script id="blog-page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`, 'structured data');
  html = replaceRequired(html, /<div\s+id="root"><\/div>/i, `<div id="root">${root}</div>`, 'application root');
  return html;
};

export const buildBlogIndexHtml = (baseHtml) => buildPage(baseHtml, {
  title: 'North Carolina Locksmith Security Blog | A Good Locksmith',
  description: 'Lock, key, rekeying, smart-lock and door-security guidance from Michael Galdine, a licensed North Carolina locksmith with 35+ years of experience.',
  canonicalUrl: `${siteUrl}/blog`,
  ogType: 'website',
  image: `${siteUrl}/images/Pictureofowner.jpg`,
  schema: blogSchema(),
  root: renderBlogIndex(),
});

export const buildBlogPostHtml = (baseHtml, post) => {
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  return buildPage(baseHtml, {
    title: post.seoTitle,
    description: post.seoDescription,
    canonicalUrl,
    ogType: 'article',
    image: `${siteUrl}${post.image}`,
    schema: articleSchema(post, canonicalUrl),
    root: renderArticle(post),
  });
};

const main = async () => {
  const baseHtml = await readFile(resolve(distDirectory, 'index.html'), 'utf8');
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(resolve(outputDirectory, 'index.html'), buildBlogIndexHtml(baseHtml), 'utf8');
  await Promise.all(blogPosts.map((post) => writeFile(
    resolve(outputDirectory, `${post.slug}.html`),
    buildBlogPostHtml(baseHtml, post),
    'utf8',
  )));
  console.log(`Generated the blog index and ${blogPosts.length} pre-rendered article pages.`);
};

if (process.argv[1] && resolve(process.argv[1]) === resolve(import.meta.filename)) {
  await main();
}
