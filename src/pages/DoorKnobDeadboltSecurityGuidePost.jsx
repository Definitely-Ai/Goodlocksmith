import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorKnobDeadboltSecurityGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">On an exterior door with both a keyed entry knob or lever and a deadbolt, the two locks do different jobs. Locking both may add another secured point, but the deadbolt, strike, frame, door fit, and safe interior exit matter more than simply counting locks.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The practical answer:</strong> If the door has a working keyed entry knob or lever and a separate deadbolt, using both can provide two locked points. The deadbolt is the primary security lock; the knob latch is not a replacement for it.
            </div>

            <p>“Should I lock both the door knob and deadbolt?” is a reasonable question because many exterior doors look as if they have two locks. Mike Galdine’s 35 years of locksmith experience point to a better first question: what function does each piece of hardware actually have?</p>

            <p>This guide applies to homes in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. The answer depends on the hardware and door—not the town—so one accurate regional guide is more useful than separate near-duplicate city pages.</p>

            <h2>The knob latch and deadbolt are different</h2>
            <p>A knob or lever normally uses a spring-loaded latch that retracts when the handle turns. A deadbolt requires a deliberate key or thumbturn action to extend and retract its bolt. Schlage describes a deadbolt as an auxiliary lock commonly installed above a tubular or cylindrical lock as an added residential security measure.</p>

            <p>Not every lower handle is lockable. A passage knob, non-locking handleset grip, or pull handle may operate only the latch. A keyed entry knob or lever has its own locking function. Our <Link to="/blog/latch-vs-deadbolt-door-lock-parts-nc">latch, deadlatch, and deadbolt guide</Link> explains those parts in more detail.</p>

            <h2>When locking both can make sense</h2>
            <p>If both pieces are intended for exterior security, both operate correctly, and everyone can exit safely, locking both can add another locked point. Schlage’s residential guidance says keyed entry knobs are often used with a deadbolt and recommends a deadbolt for added protection because its bolt extends into the door frame.</p>

            <p>That does not mean two weak, loose, misaligned, or incorrectly installed locks equal good security. A deadbolt that barely enters the strike, a split frame, loose screws, or a door that must be pushed into position needs attention. See our <Link to="/blog/home-door-security-lock-checklist-nc">home door-security checklist</Link> and <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt-alignment guide</Link>.</p>

            <h2>When the lower lock should not be treated as a second deadbolt</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The lower hardware is passage or non-locking trim</li>
              <li><FaCheckCircle aria-hidden="true" /> Its latch misses the strike or can be pushed back when the door is closed</li>
              <li><FaCheckCircle aria-hidden="true" /> The knob or lever is loose, damaged, or difficult to operate</li>
              <li><FaCheckCircle aria-hidden="true" /> Locking it could prevent an occupant from making a safe exit</li>
              <li><FaCheckCircle aria-hidden="true" /> The household relies on a key that is not available to everyone authorized to enter</li>
            </ul>

            <p>A latch that appears closed but does not engage correctly is not dependable. If the door can be pushed open without turning the handle, review our <Link to="/blog/door-latches-but-can-be-pushed-open-nc">deadlatch and strike guide</Link>.</p>

            <h2>Safe exit still comes first</h2>
            <p>Exterior security should not create an interior trap. The U.S. Fire Administration advises households to include every door and window in a fire-escape plan, keep exits unobstructed, identify two ways out of each room, and practice the plan.</p>

            <p>Double-cylinder deadbolts require a key on the inside and have additional life-safety restrictions. Do not assume they are appropriate merely because the door contains glass. Read our <Link to="/blog/double-cylinder-deadbolt-egress-safety-nc">double-cylinder deadbolt and safe-exit guide</Link> before changing that hardware.</p>

            <h2>The hardware rating and installation matter</h2>
            <p>BHMA’s residential certification program evaluates locks and deadbolts for security, durability, and finish. Its current residential-deadbolt standard includes operational, durability, and strength testing. A rating is useful product information, but it does not repair a weak frame or compensate for poor alignment.</p>

            <p>Check that the deadbolt extends fully without forcing the door, both strikes are secure, the door closes consistently, and the inside hardware operates smoothly. If the knob and deadbolt use separate keys, compatible hardware may sometimes be keyed alike; our <Link to="/blog/keyed-alike-home-locks-one-key-nc">keyed-alike lock guide</Link> explains the limits.</p>

            <h2>What to check at your exterior door</h2>
            <ol>
              <li><strong>Identify the lower function.</strong> Confirm whether it is keyed entry, passage, or non-locking handleset trim.</li>
              <li><strong>Test with the door open.</strong> Operate the latch and deadbolt without loading them against the frame.</li>
              <li><strong>Test the closed door.</strong> Both should engage without lifting, pushing, or slamming the door.</li>
              <li><strong>Check interior release.</strong> Every authorized occupant should understand how to exit promptly.</li>
              <li><strong>Inspect the complete opening.</strong> Loose hinges, a damaged frame, worn strikes, or misalignment can undermine otherwise serviceable locks.</li>
            </ol>

            <p>North Carolina law includes repairing, rekeying, servicing, adjusting, and installing locks within the definition of locksmith services. A Good Locksmith identifies its North Carolina locksmith license as NCLL #3119.</p>

            <div className="service-area-links">
              <Link to="/Lillington">Lillington</Link>
              <Link to="/Angier">Angier</Link>
              <Link to="/Bunnlevel">Bunnlevel</Link>
              <Link to="/Coats">Coats</Link>
              <Link to="/Dunn">Dunn</Link>
              <Link to="/Erwin">Erwin</Link>
              <Link to="/Sanford">Sanford</Link>
              <Link to="/Fuquay-Varina">Fuquay-Varina</Link>
              <Link to="/Harnett-County">Harnett County</Link>
              <Link to="/Wake-County">Wake County</Link>
            </div>

            <h2>Reliable sources</h2>
            <ul>
              <li><a href="https://www.schlage.com/en/home/products/knobs/keyed-entry-knobs.html" target="_blank" rel="noreferrer">Schlage: Keyed Entry Knobs and Deadbolts</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/mechanical-locks.html" target="_blank" rel="noreferrer">Schlage 101: Mechanical Deadbolt Locks</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15640-2025-Residential-Deadbolts" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.40-2025 Residential Deadbolts</a></li>
              <li><a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/" target="_blank" rel="noreferrer">U.S. Fire Administration: Home Fire Escape Plans</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
            </ul>

            <section className="article-cta">
              <span>Make every locked point count</span>
              <h2>Not sure whether both locks are working correctly?</h2>
              <p>Call A Good Locksmith for help evaluating, repairing, rekeying, or replacing residential door hardware.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 2, 2026. This article provides general information for typical residential exterior doors. Hardware functions, door construction, local code requirements, product ratings, and safe-egress needs vary. Have the complete opening evaluated before changing security or exit hardware.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Keyed knob or lever</h2>
              <p>Uses a spring latch and may provide a separate locking function.</p>
            </div>
            <div className="sidebar-card">
              <h2>Deadbolt</h2>
              <p>Requires deliberate operation and is the primary security lock on many exterior residential doors.</p>
            </div>
            <div className="sidebar-card">
              <h2>Check the whole door</h2>
              <p>Locks, strikes, frame, hinges, alignment, and safe exit work as one system.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorKnobDeadboltSecurityGuidePost;
