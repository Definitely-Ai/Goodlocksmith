import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const serviceAreas = [
  ['Lillington', '/Lillington'],
  ['Angier', '/Angier'],
  ['Fuquay-Varina', '/Fuquay-Varina'],
  ['Coats', '/Coats'],
  ['Dunn', '/Dunn'],
  ['Erwin', '/Erwin'],
  ['Sanford', '/Sanford'],
  ['Harnett County', '/Harnett-County'],
  ['Wake County', '/Wake-County'],
];

const ProfessionalLocksmithPost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">The right tools, proven techniques, and 35 years of locksmithing experience can make the difference between a clean solution and an expensive repair.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>A professional approach protects more than the lock.</strong> It can help protect your vehicle, door, frame, finish, hardware, time, and wallet from avoidable damage.
            </div>

            <p>When you are locked out or dealing with a broken, worn, or malfunctioning lock, it is tempting to force the door, pry the frame, break a window, or follow a quick online trick. Those attempts can turn a straightforward locksmith job into damaged weather stripping, scratched paint, bent door hardware, broken glass, or a lock that must now be replaced.</p>

            <p>A qualified local locksmith begins by identifying the lock, door, key system, and safest practical method for the situation. At A Good Locksmith, that judgment is backed by <strong>35 years of hands-on locksmithing experience</strong> serving automotive, residential, and commercial customers.</p>

            <h2>Why professional locksmith service can prevent damage</h2>
            <div className="audience-grid">
              <section>
                <h3>Correct tools for the job</h3>
                <p>Professional locksmith tools are designed for specific locks, vehicles, doors, and key systems. Using the appropriate tool reduces unnecessary force and guesswork.</p>
              </section>
              <section>
                <h3>Experience choosing the safest method</h3>
                <p>No single technique fits every situation. An experienced locksmith evaluates the hardware and chooses a careful approach based on what is actually in front of them.</p>
              </section>
              <section>
                <h3>Recognition of hidden risks</h3>
                <p>Modern vehicles may have delicate weather seals, wiring, airbags, and tight tolerances. Homes and businesses can have interconnected locks, electronic hardware, and reinforced doors.</p>
              </section>
              <section>
                <h3>Repair before replacement</h3>
                <p>When practical, a professional can determine whether a lock can be serviced, adjusted, rekeyed, or repaired instead of automatically replacing usable hardware.</p>
              </section>
            </div>

            <h2>Automotive lockouts: protect the vehicle while regaining access</h2>
            <p>A car lockout can feel urgent, but forcing entry can cause costly problems. Improvised wedges, coat hangers, screwdrivers, and pry tools may scratch paint, bend the upper door frame, tear weather stripping, damage internal linkages, or interfere with wiring inside the door.</p>

            <p>A professional automotive locksmith considers the vehicle's year, make, model, locking system, and condition before beginning. The goal is to restore access efficiently while minimizing risk to the vehicle.</p>

            <figure className="article-inline-photo">
              <img src="/images/local-car-lockout-good-locksmith.webp" loading="lazy" decoding="async" alt="A Good Locksmith car lockout service advertisement with local phone number 984-480-5397" />
              <figcaption>Locked out? Call A Good Locksmith at (984) 480-5397 for professional local service.</figcaption>
            </figure>

            <h2>Home and business locks deserve the same careful approach</h2>
            <p>Drilling is sometimes necessary, but it should not be the automatic first step for every lock problem. Unnecessary drilling can destroy a lock and may scar the door or surrounding trim. A trained locksmith first evaluates whether a less destructive method is appropriate and explains the options when hardware truly must be replaced.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle /> Home lockouts handled with attention to the lock, door, frame, and finish</li>
              <li><FaCheckCircle /> Lock repair, adjustment, rekeying, or replacement based on the hardware's actual condition</li>
              <li><FaCheckCircle /> Commercial service that considers door closers, panic hardware, storefront doors, and access needs</li>
              <li><FaCheckCircle /> Clear recommendations instead of unnecessary parts or avoidable destruction</li>
              <li><FaCheckCircle /> Professional key cutting and broken-key extraction using purpose-built equipment</li>
            </ul>

            <h2>Why 35 years of locksmithing experience matters</h2>
            <p>Locks and vehicles have changed dramatically over the years, but careful workmanship never goes out of style. Decades in the trade build pattern recognition: knowing when a lock is simply misaligned, when a key is worn, when hardware is failing, and when an attempted shortcut is likely to create a larger problem.</p>

            <p>That experience also helps a locksmith explain realistic choices. Sometimes the least expensive answer is a simple adjustment or rekey. Other times damaged or worn hardware should be replaced for dependable security. The recommendation should fit the condition of the lock and the customer's needs.</p>

            <div className="article-callout">
              <strong>Before trying to force your way in:</strong> Stop if a tool is bending the door, damaging the finish, tearing a seal, or placing pressure on glass. Calling a professional early may prevent the lockout from becoming a body-shop, glass, or door-repair bill.
            </div>

            <h2>Your local professional locksmith near Lillington, NC</h2>
            <p>A Good Locksmith provides mobile locksmith service from Lillington to customers throughout nearby Harnett County and southern Wake County communities, including Angier, Bunlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, and surrounding areas.</p>

            <p>Whether you need help with a car lockout, home lockout, business lock, rekeying, broken-key extraction, replacement keys, or lock installation, you receive service informed by 35 years of real locksmithing experience.</p>

            <div className="service-area-links">
              {serviceAreas.map(([name, path]) => <Link to={path} key={name}>{name}</Link>)}
            </div>

            <section className="article-cta">
              <span>Careful work. Professional results.</span>
              <h2>Call before a lock problem becomes property damage.</h2>
              <p>Contact A Good Locksmith for professional automotive, residential, and commercial locksmith service in Lillington and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · 35 Years of Locksmithing Experience · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general information. Every vehicle, door, and lock is different. Service methods depend on the hardware, its condition, and the circumstances found on site.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Need a professional locksmith?</h2>
              <p>Call for automotive, residential, and commercial locksmith service backed by 35 years of experience.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
            <div className="sidebar-card">
              <h2>Local service areas</h2>
              <ul>
                {serviceAreas.slice(0, 7).map(([name, path]) => <li key={name}><Link to={path}>{name}, NC</Link></li>)}
                <li>Bunlevel, NC</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default ProfessionalLocksmithPost;
