export const blogPosts = [
  {
    slug: 'rekey-now-avoid-big-problems-later',
    title: 'Rekey Now & Avoid Big Problems or Losses Later',
    excerpt: 'Why homeowners, tenants, landlords, realtors, rental agents, and business owners should make rekeying part of every property handoff.',
    publishedDate: 'July 29, 2026',
    readingTime: '6 min read',
    category: 'Home & Business Security',
    image: '/images/rekey-property-handoff.webp',
    imageAlt: 'A secure home and business entrance during a new-key property handoff',
  },
];

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
