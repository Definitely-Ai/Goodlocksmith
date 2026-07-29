import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getBlogPost } from '../data/blogPosts';
import { phoneLink } from '../data/cities';
import './Blog.css';

const BlogPostPage = () => {
  const { postSlug } = useParams();
  const post = getBlogPost(postSlug);

  useEffect(() => {
    if (!post) return;
    document.title = 'Rekey Locks in Harnett & Wake County, NC | A Good Locksmith';
    const description = 'Rekey your home, rental property, or business locks in Lillington, Angier, Dunn, Fuquay-Varina, Harnett County, and Wake County. Call A Good Locksmith.';
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);

    const canonicalUrl = 'https://goodlocksmith.com/blog/' + post.slug;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const setMeta = (property, content) => {
      let tag = document.querySelector('meta[property="' + property + '"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setMeta('og:type', 'article');
    setMeta('og:title', post.title + ' | A Good Locksmith');
    setMeta('og:description', description);
    setMeta('og:url', canonicalUrl);
    setMeta('og:image', 'https://goodlocksmith.com' + post.image);

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'blog-article-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description,
      datePublished: '2026-07-29',
      dateModified: '2026-07-29',
      image: 'https://goodlocksmith.com' + post.image,
      author: { '@type': 'Organization', name: 'A Good Locksmith, LLC' },
      publisher: { '@type': 'Organization', name: 'A Good Locksmith, LLC', url: 'https://goodlocksmith.com' },
      mainEntityOfPage: canonicalUrl,
      about: ['Lock rekeying', 'Residential security', 'Commercial security', 'Rental property security'],
      areaServed: ['Lillington, NC', 'Angier, NC', 'Dunn, NC', 'Fuquay-Varina, NC', 'Harnett County, NC', 'Wake County, NC'],
    });
    document.head.appendChild(schema);

    return () => {
      document.getElementById('blog-article-schema')?.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Header />
      <main className="article-main">
        <article>
          <header className="article-header">
            <div className="container article-heading">
              <Link to="/blog" className="article-back">← Security Blog</Link>
              <span className="blog-category">{post.category}</span>
              <h1>Rekey Now &amp; Avoid Big Problems or Losses Later</h1>
              <p className="article-lead">A property may be new to you, but its keys may have a long history. Rekeying gives you control over who can enter—before uncertainty becomes a costly security problem.</p>
              <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
            </div>
          </header>

          <div className="container article-layout">
            <div className="article-content">
              <img src={post.image} alt={post.imageAlt} className="article-featured-image" />

              <div className="article-callout article-callout-primary">
                <strong>The simple message:</strong> Rekey now and avoid big problems or losses later. When keys have changed hands, do not leave access to chance.
              </div>

              <p>Moving into a home, taking possession of a rental, closing a real-estate transaction, changing tenants, or experiencing employee turnover all have one thing in common: you may not know how many working keys still exist. Previous occupants may have shared copies with relatives, contractors, cleaning crews, vendors, employees, pet sitters, or neighbors.</p>

              <p>Rekeying changes the lock so the old keys no longer operate it. In many situations, the existing lock hardware can remain in place while authorized occupants receive new keys. A professional locksmith can inspect the hardware and explain whether rekeying or replacement is the appropriate option.</p>

              <h2>Who should make rekeying a priority?</h2>

              <div className="audience-grid">
                <section>
                  <h3>Homeowners and new tenants</h3>
                  <p>Start with clear control over access. Rekey after moving in, after keys are lost or unreturned, or whenever you are uncertain who may have a copy.</p>
                </section>
                <section>
                  <h3>Landlords and rental agents</h3>
                  <p>Build rekeying into every tenant turnover. A consistent key-control process helps protect new occupants and reduces confusion between properties.</p>
                </section>
                <section>
                  <h3>Realtors and property managers</h3>
                  <p>Recommend rekeying as a practical post-closing or possession-day step. It is an easy security reminder that adds value to the client handoff.</p>
                </section>
                <section>
                  <h3>Business owners</h3>
                  <p>Rekey after employee or vendor changes, missing keys, management transitions, or changes in who should access offices, storage rooms, and exterior doors.</p>
                </section>
              </div>

              <h2>When should locks be rekeyed?</h2>
              <ul className="article-checklist">
                <li><FaCheckCircle /> After buying or leasing a home or commercial property</li>
                <li><FaCheckCircle /> Between tenants at a rental property</li>
                <li><FaCheckCircle /> After a key is lost, stolen, copied, or not returned</li>
                <li><FaCheckCircle /> Following employee, contractor, vendor, or management turnover</li>
                <li><FaCheckCircle /> After a break-in or attempted break-in, together with a full hardware inspection</li>
                <li><FaCheckCircle /> When you cannot account for every key that has been issued</li>
              </ul>

              <h2>Why waiting can become expensive</h2>
              <p>A small access-control gap can expose a property to theft, unauthorized entry, inventory loss, damage, interrupted operations, emergency repairs, and difficult questions about who had access. Rekeying does not prevent every security risk, but it removes old keys from the access equation and establishes a cleaner starting point.</p>

              <div className="article-callout">
                <strong>For landlords, realtors, and rental agents:</strong> Add “schedule professional rekey” to the turnover or closing checklist instead of assuming all copies were returned.
              </div>

              <h2>Rekeying versus replacing a lock</h2>
              <p>Rekeying changes which key operates a compatible lock. Replacement installs different hardware. Rekeying may be the efficient choice when the existing locks are suitable and in good condition. Replacement may be recommended when hardware is damaged, worn, incompatible, or no longer meets the property’s needs. A locksmith should inspect the doors and hardware before recommending the best course.</p>

              <h2>Local rekeying service in Harnett and Wake counties</h2>
              <p>A Good Locksmith, LLC provides residential, rental-property, and commercial locksmith service from Lillington throughout our listed service area, including Angier, Dunn, Fuquay-Varina, Harnett County, and Wake County, North Carolina.</p>

              <div className="service-area-links">
                <Link to="/Lillington">Lillington</Link>
                <Link to="/Angier">Angier</Link>
                <Link to="/Dunn">Dunn</Link>
                <Link to="/Fuquay-Varina">Fuquay-Varina</Link>
                <Link to="/Harnett-County">Harnett County</Link>
                <Link to="/Wake-County">Wake County</Link>
              </div>

              <section className="article-cta">
                <span>Protect the next chapter of your property</span>
                <h2>Rekey now—before an old key creates a new problem.</h2>
                <p>Call A Good Locksmith to discuss professional rekeying for your home, rental property, real-estate closing, or business.</p>
                <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
                <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
              </section>

              <p className="article-disclaimer">This article provides general security information. Every property and lock system is different; request an on-site professional assessment for recommendations specific to your doors and access needs.</p>
            </div>

            <aside className="article-sidebar">
              <div className="sidebar-card">
                <h2>Need to rekey a property?</h2>
                <p>Serving homes, rentals, real-estate professionals, and businesses across our Harnett and Wake County service area.</p>
                <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
              </div>
              <div className="sidebar-card">
                <h2>Service areas</h2>
                <ul>
                  <li><Link to="/Lillington">Lillington, NC</Link></li>
                  <li><Link to="/Angier">Angier, NC</Link></li>
                  <li><Link to="/Dunn">Dunn, NC</Link></li>
                  <li><Link to="/Fuquay-Varina">Fuquay-Varina, NC</Link></li>
                  <li><Link to="/Harnett-County">Harnett County, NC</Link></li>
                  <li><Link to="/Wake-County">Wake County, NC</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
