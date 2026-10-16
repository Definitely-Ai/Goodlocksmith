import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorLockServiceLifeGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Door locks do not share one dependable expiration date. Usage, product quality, installation, door alignment, weather exposure, maintenance, and key control matter more than age alone.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Replace by condition, not an invented calendar:</strong> a correctly installed lock that operates smoothly and remains suitable for the opening may keep serving. A newer lock that jams, loosens, fails to latch, or has compromised key control needs attention now.
            </div>

            <p>Search results often offer a simple number for how long a lock should last. That number can be misleading. A lightly used interior lock and a busy exterior entry do not experience the same cycles, loads, moisture, dirt, temperature changes, or door movement. A laboratory durability rating also is not a personalized promise of years in service.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the lock, door, frame, strike, and access history together. This guide helps homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County decide when age is merely background information and when the hardware is showing meaningful warning signs.</p>

            <h2>Is there a standard lifespan for a door lock?</h2>
            <p>No single service-life number applies to every door lock. Current Schlage guidance focuses on condition and security events: damaged hardware, unreliable latching, difficulty inserting or removing a key, uncertain key access, and hardware that no longer suits the owner's needs. Kwikset likewise separates locks that are functioning properly from hardware that is worn, damaged, frequently jamming, or internally failed.</p>

            <p>ANSI/BHMA A156.39-2025 establishes performance tests for residential bored locksets and latches. Its public overview says a Grade A residential lock must pass 400,000 opening-and-closing cycles under a specified axial load. That is useful comparative test information—not permission to convert 400,000 cycles into a guaranteed number of years on a particular door.</p>

            <h2>What signs matter more than the lock's age?</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The key has become difficult to insert, turn, or remove</li>
              <li><FaCheckCircle aria-hidden="true" /> The knob, lever, cylinder, or trim repeatedly loosens</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch does not retract or spring back consistently</li>
              <li><FaCheckCircle aria-hidden="true" /> The deadbolt will not fully extend or retract without force</li>
              <li><FaCheckCircle aria-hidden="true" /> Parts are cracked, bent, missing, heavily corroded, or visibly damaged</li>
              <li><FaCheckCircle aria-hidden="true" /> The lock works intermittently even after proper diagnosis and adjustment</li>
              <li><FaCheckCircle aria-hidden="true" /> The hardware no longer provides the needed function, access, or key control</li>
            </ul>

            <p>Stop forcing a key or using the thumbturn to pull the door into place. Continued force can bend a key, stress the cylinder or actuator, and hide whether the actual problem is the lock or the opening.</p>

            <h2>Is the lock worn out—or is the door out of alignment?</h2>
            <p>Test from a safe position with the door open. If the latch or deadbolt operates smoothly while open but binds after the door closes, the opening may be loading the hardware. Hinges, weatherstripping, seasonal movement, the strike position, or the bolt pocket can all affect operation. Replacing the lock without correcting the door may reproduce the same symptom.</p>

            <p>If the problem is present with the door open and with a known-good key, internal wear, installation trouble, incompatible parts, or lock damage becomes more likely. Our guides cover a <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt that binds when the door closes</Link> and a <Link to="/blog/door-knob-turns-latch-wont-retract-nc">knob that turns without retracting the latch</Link>.</p>

            <div className="article-callout">
              <strong>Useful comparison:</strong> note whether the symptom happens with the door open, closed, or both—and whether every authorized key behaves the same way. That information is more useful than saying only that the lock is old.
            </div>

            <h2>Does an old lock need replacement if it still works?</h2>
            <p>Not necessarily. Age can justify a closer inspection, especially when the model, installation history, or internal condition is unknown, but it does not by itself prove failure. Check whether the lock operates reliably, latches and deadbolts correctly, remains firmly mounted, has suitable hardware for the opening, and still provides the needed level of key control.</p>

            <p>Replacement may still be a planned upgrade when a homeowner wants a different function, accessible lever, keypad, smart-lock feature, compatible keyway, or independently certified performance. Those are legitimate goals, but they are different from claiming that every lock expires on a particular anniversary.</p>

            <h2>Can maintenance extend a lock's useful life?</h2>
            <p>Appropriate inspection, cleaning, alignment, tightening, and manufacturer-approved lubrication can help serviceable hardware continue to operate correctly. ASSA ABLOY recommends routine inspection of the complete door or window because faulty hinges, warped doors, and distorted frames can place excessive load on other components. Its guidance also warns against allowing cleaning fluids into a lock or cylinder and recommends product-specific care.</p>

            <p>Maintenance cannot restore cracked castings, severely worn internal parts, compromised fasteners, failed electronics, or hardware that is wrong for the opening. Use the exact manufacturer's current instructions rather than applying a generic spray. Our <Link to="/blog/what-lubricant-for-door-lock-nc">door-lock lubricant guide</Link> explains why product instructions and small amounts matter.</p>

            <h2>Does rekeying make a worn lock new again?</h2>
            <p>No. Rekeying changes which key operates a compatible cylinder. It does not repair a worn latch, loose chassis, damaged bolt, misaligned strike, failing motor, or corroded lock body. Rekeying can be the right answer when the hardware is serviceable but old keys should stop working; replacement is more likely when the hardware itself is unreliable.</p>

            <p>For a side-by-side explanation, see our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link>. If a lock is still sound but the access history is uncertain, our guide to <Link to="/blog/lost-house-key-rekey-every-lock-nc">rekeying after a lost house key</Link> addresses the key-control decision.</p>

            <h2>What should businesses and rental properties document?</h2>
            <p>Higher-use doors benefit from a written inspection and key-control routine. Record the door location, hardware type, current function, issued keys or credentials, observed looseness or resistance, door-open versus door-closed behavior, and the date of professional service. Commercial, multifamily, fire-door, exit, and electrified openings can have additional requirements; do not improvise repairs or add secondary locks that could affect egress.</p>

            <h2>When should you call a locksmith?</h2>
            <p>Call when operation changes, a lock repeatedly loosens, a key bends or catches, the latch or deadbolt is unreliable, hardware is visibly damaged, access should change, or you cannot determine whether the problem comes from the lock or the door. An inspection can separate adjustment, repair, rekeying, cylinder replacement, and complete hardware replacement instead of assuming the oldest part is automatically the cause.</p>

            <p>North Carolina law includes repairing, rebuilding, rekeying, servicing, adjusting, and installing locks within regulated locksmith services. A Good Locksmith provides authorized residential and commercial lock service under NCLL #3119.</p>

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
              <li><a href="https://www.schlage.com/en/blog/home_security/replace-door-locks.html" target="_blank" rel="noreferrer">Schlage: Signs a Door Lock May Need Replacement</a></li>
              <li><a href="https://dev-site.kwikset.com/help-me-choose/solutions/need/replacing" target="_blank" rel="noreferrer">Kwikset: Repair, Rekey, or Replace Guidance</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15639-2025-Residential-Locksets-and-Latches" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.39-2025 Residential Locksets and Latches</a></li>
              <li><a href="https://www.assaabloy.com/au/en/about-us/general-information1/warranties-and-guarantees/assa-abloy-product-care-and-maintenance-recommendations" target="_blank" rel="noreferrer">ASSA ABLOY: Product Care and Maintenance Recommendations</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
            </ul>

            <section className="article-cta">
              <span>Diagnose the condition before choosing the fix</span>
              <h2>Is your door lock showing signs of wear?</h2>
              <p>Call A Good Locksmith and describe what changes with the door open and closed. Mike can evaluate the opening and explain whether adjustment, repair, rekeying, or replacement makes sense.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 16, 2026. This article provides general door-hardware information, not a service-life warranty, remote diagnosis, maintenance schedule for every product, or code determination. Follow the exact manufacturer's current instructions and obtain an on-site assessment for the specific opening.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Condition beats age</h2>
              <ul>
                <li>Smooth operation</li>
                <li>Reliable latching</li>
                <li>Secure mounting</li>
                <li>Controlled access</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Describe the symptom</h2>
              <p>Note whether it occurs with the door open, closed, or both, and whether every key behaves the same way.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorLockServiceLifeGuidePost;
