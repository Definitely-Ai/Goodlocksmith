import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { blogPosts } from '../src/data/blogPosts.js';
import { buildBlogIndexHtml, buildBlogPostHtml } from '../scripts/generate-blog-pages.mjs';

const projectFile = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const baseHtml = projectFile('index.html');
const vercel = JSON.parse(projectFile('vercel.json'));

test('pre-renders a distinct blog index with crawlable article links', () => {
  const html = buildBlogIndexHtml(baseHtml);
  assert.match(html, /<h1>Security &amp; Locksmith Blog<\/h1>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.goodlocksmith\.com\/blog" \/>/);
  assert.doesNotMatch(html, /<div\s+id="root"><\/div>/i);
  for (const post of blogPosts) assert.ok(html.includes(`/blog/${post.slug}`));
});

test('pre-renders every article with unique metadata, content and Article schema', () => {
  for (const post of blogPosts) {
    const html = buildBlogPostHtml(baseHtml, post);
    const canonicalUrl = `https://www.goodlocksmith.com/blog/${post.slug}`;
    assert.ok(html.includes(`<title>${post.seoTitle.replaceAll('&', '&amp;')}</title>`));
    assert.ok(html.includes(`<link rel="canonical" href="${canonicalUrl}" />`));
    assert.ok(html.includes(`<h1>${post.title.replaceAll('&', '&amp;').replaceAll('’', '’')}</h1>`));
    assert.ok(html.includes(post.excerpt.replaceAll('&', '&amp;')));
    assert.match(html, /"@type":"Article"/);
    assert.doesNotMatch(html, /<div\s+id="root"><\/div>/i);
  }
});

test('routes the blog index and article slugs to pre-rendered documents', () => {
  assert.ok(vercel.rewrites.some((rule) => rule.source === '/blog' && rule.destination === '/blog-pages/index.html'));
  assert.ok(vercel.rewrites.some((rule) => rule.source === '/blog/:postSlug' && rule.destination === '/blog-pages/:postSlug.html'));
});
