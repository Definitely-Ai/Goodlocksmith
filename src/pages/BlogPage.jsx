import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Security Blog | Home & Business Security Tips | A Good Locksmith';
    const description = 'Practical lock, key, and property security guidance for Harnett County and Wake County homeowners, landlords, realtors, rental agents, and businesses.';
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    return () => {
      document.title = 'A Good Locksmith, LLC | 24/7 Locksmith Service | Lillington, NC | (984) 480-5397';
    };
  }, []);

  return (
    <>
      <Header />
      <main className="blog-main">
        <section className="blog-hero">
          <div className="container">
            <span className="blog-eyebrow">Local security guidance</span>
            <h1>A Good Locksmith Security Blog</h1>
            <p>Helpful advice for protecting homes, rental properties, and businesses throughout Harnett and Wake counties.</p>
          </div>
        </section>
        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link to={'/blog/' + post.slug} className="blog-card-image-link">
                    <img src={post.image} alt={post.imageAlt} className="blog-card-image" />
                  </Link>
                  <div className="blog-card-body">
                    <span className="blog-category">{post.category}</span>
                    <h2><Link to={'/blog/' + post.slug}>{post.title}</Link></h2>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-meta">{post.publishedDate} · {post.readingTime}</div>
                    <Link className="blog-read-link" to={'/blog/' + post.slug}>Read the security guide →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
