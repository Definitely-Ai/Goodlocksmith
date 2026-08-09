export const blogPosts = [
  {
    slug: 'why-hire-professional-locksmith-avoid-damage',
    title: 'Why Hiring a Professional Locksmith Helps Prevent Costly Damage',
    excerpt: 'A careful, experienced locksmith can solve lock and key problems while helping protect your vehicle, door, lock, and property from avoidable damage.',
    publishedDate: 'August 9, 2026',
    datePublished: '2026-08-09',
    readingTime: '7 min read',
    category: 'Professional Locksmith Advice',
    image: '/images/professional-locksmith-key-handoff.webp',
    imageAlt: 'A Good Locksmith returning keys to a customer after professional automotive locksmith service',
    seoTitle: 'Professional Locksmith Near Lillington, NC | Avoid Damage',
    seoDescription: 'Learn how a professional locksmith helps prevent damage during car, home, and business lock service in Lillington, Angier, Bunlevel, Fuquay-Varina, Coats, Dunn, and nearby NC areas.',
    about: ['Professional locksmith service', 'Damage-free lockout service', 'Automotive locksmith', 'Residential locksmith', 'Commercial locksmith'],
  },
  {
    slug: 'rekey-now-avoid-big-problems-later',
    title: 'Rekey Now & Avoid Big Problems or Losses Later',
    excerpt: 'Why homeowners, tenants, landlords, realtors, rental agents, and business owners should make rekeying part of every property handoff.',
    publishedDate: 'July 29, 2026',
    readingTime: '6 min read',
    category: 'Home & Business Security',
    image: '/images/rekey-property-handoff.webp',
    imageAlt: 'A secure home and business entrance during a new-key property handoff',
    datePublished: '2026-07-29',
    seoTitle: 'Rekey Locks in Harnett & Wake County, NC | A Good Locksmith',
    seoDescription: 'Rekey your home, rental property, or business locks in Lillington, Angier, Dunn, Coats, Erwin, Sanford, Fuquay-Varina, Harnett County, and Wake County. Call A Good Locksmith.',
    about: ['Lock rekeying', 'Residential security', 'Commercial security', 'Rental property security'],
  },
];

export const getBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
