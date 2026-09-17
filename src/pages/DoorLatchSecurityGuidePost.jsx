import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorLatchSecurityGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A door can appear closed while the latch is barely catching—or not securing the opening at all. The symptom points to the latch, strike, alignment, or lock mechanism rather than the key alone.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not rely on the sound of the door closing:</strong> the latchbolt must enter the strike correctly, and a deadlocking latch must be positioned so its auxiliary plunger does not fall into the strike opening.
            </div>

            <p>If a locked knob or lever can be pushed open without turning the hardware, treat the door as unsecured. A click is not proof that the latch has fully engaged. The cause may be a simple alignment problem, but forcing, filing, bending, or moving parts without identifying the problem can make the opening less reliable.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to diagnosing the entire opening—not just the cylinder. This guide is for homeowners, businesses, churches, landlords, and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County.</p>

            <h2>First, separate the latch from the deadbolt</h2>
            <p>The spring latch is the beveled bolt that normally retracts when you turn a knob or lever. It holds the door closed and may be part of a keyed lockset. A deadbolt is a separate, usually rectangular bolt that is deliberately thrown with a key or thumbturn.</p>

            <p>A door may have a working deadbolt while its spring latch misses the strike, or a working latch while the deadbolt binds. This article focuses on the spring latch and its strike. If the deadbolt only works when you push or pull the door, see our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt and strike-alignment guide</Link>.</p>

            <h2>What the small auxiliary plunger does</h2>
            <p>Many keyed latch assemblies have a main beveled latchbolt and a smaller auxiliary plunger beside it. When the door closes correctly, the main latch enters the strike opening while the strike lip keeps the smaller plunger depressed. That relationship enables the latch's deadlocking feature.</p>

            <p>The smaller plunger is not supposed to drop into the same opening as the main latch. Allegion's technical guidance explains that when a cylindrical lock's deadlatch falls into the strike because the opening is prepared or positioned incorrectly, the latch can bind during retraction and the lock chassis or latch can be damaged.</p>

            <h2>Why a door may latch but still push open</h2>
            <h3>The main latch is not entering far enough</h3>
            <p>The door may be touching the frame, weatherstrip, or stop before the latch reaches the strike opening. The latch can scrape the strike and make a convincing click without gaining enough engagement to hold the door.</p>

            <h3>The door and strike are out of alignment</h3>
            <p>Loose or worn hinges, building movement, seasonal moisture, a shifted frame, or a previously moved strike can change where the latch meets the opening. The witness marks on the strike may help a locksmith identify whether the latch is landing high, low, or too far to one side.</p>

            <h3>The strike does not match the latch</h3>
            <p>Strike shape, lip length, opening dimensions, and placement matter. A strike that looks close enough may not correctly support the latch and auxiliary plunger. Enlarging the opening at random can remove the surface that the deadlatch needs.</p>

            <h3>The latch or lock chassis is worn or damaged</h3>
            <p>If the latch does not project fully, feels inconsistent, stays partly retracted, or binds even with the door open, the problem may be inside the latch or lock body. A loose lock can also change the relationship between the parts. Continued force can turn a repairable symptom into a lockout.</p>

            <h3>The door is not reaching the fully closed position</h3>
            <p>On a commercial opening, closer settings, air pressure, seals, hinges, and door weight can all affect whether the latch reaches the strike. Our <Link to="/blog/commercial-door-closer-slams-wont-latch-nc">commercial door-closer guide</Link> explains why a door that stops short needs a whole-opening diagnosis.</p>

            <h2>Safe checks you can make without taking the lock apart</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> With the door open, use the knob or lever normally and confirm that the main latch retracts and springs back consistently.</li>
              <li><FaCheckCircle /> Look for loose trim, hinge movement, rubbing, fresh scrape marks, or a strike that visibly shifts.</li>
              <li><FaCheckCircle /> Close the door normally—without slamming—and note whether it must be lifted, pushed, or pulled to catch.</li>
              <li><FaCheckCircle /> After locking it in the normal manner, verify from the authorized side that the door remains closed under gentle pressure.</li>
              <li><FaCheckCircle /> Check every required exit from the inside to make sure normal egress remains available.</li>
            </ul>

            <p>Stop if the key, lever, latch, or door requires heavy force. Do not shut a questionable door if it is your only way back inside, and do not test a fire or required exit in a way that obstructs use.</p>

            <h2>Why filing the strike is not a universal fix</h2>
            <p>A small alignment correction can be appropriate after the actual cause is identified. But removing metal from the wrong edge can increase movement, reduce latch engagement, or let the auxiliary plunger enter the strike opening. Moving the strike without addressing loose hinges or a sagging door can hide the symptom temporarily while the underlying condition continues.</p>

            <p>Schlage's <a href="https://www.schlage.com/en/blog/product_updates/door-wont-latch.html" target="_blank" rel="noreferrer">door-latching guidance</a> identifies hinge condition, strike position, and seasonal door movement as common causes. Allegion's <a href="https://kc.allegion.com/kb/article/why-does-my-cylindrical-dead-latch-fall-into-the-strike/" target="_blank" rel="noreferrer">cylindrical deadlatch bulletin</a> specifically cautions against letting the auxiliary deadlatch fall into the strike.</p>

            <h2>Repair, adjust, or replace?</h2>
            <p>The right answer depends on what failed. A sound lock on a shifted opening may need hinge, strike, or door adjustment. A damaged latch may be replaceable if the correct part is available and compatible. A worn, loose, corroded, mismatched, or internally damaged lockset may justify replacement instead.</p>

            <p>Appearance alone does not settle the choice. The door preparation, backset, thickness, handing, lock function, keyway, grade, fire label, and existing key plan can affect compatibility. The <a href="https://buildershardware.com/ANSI-BHMA-Standards" target="_blank" rel="noreferrer">ANSI/BHMA standards overview</a> explains that builders hardware is evaluated for performance areas such as operation, strength, security, durability, and finish.</p>

            <h2>Commercial and exit doors need extra care</h2>
            <p>Do not add a surface bolt, padlock, double-sided key requirement, or improvised restraint to compensate for a latch problem on an occupied exit. OSHA's <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">exit-route requirements</a> state that employees must be able to open an exit-route door from the inside at all times without keys, tools, or special knowledge.</p>

            <p>Fire-rated and required-exit openings can also depend on positive latching, approved hardware, closing, swing, and listing requirements. The North Carolina Office of State Fire Marshal publishes the <a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">currently effective state codes</a>. The authority having jurisdiction determines the requirements for a specific building and opening.</p>

            <h2>When to call a locksmith</h2>
            <p>Arrange service promptly when an exterior or restricted door can be pushed open, the latch fails intermittently, the auxiliary plunger enters the strike, the lock binds with the door open, hardware is loose, or the door must be lifted or slammed to secure it. If a required exit will not latch or operate normally, keep the opening under responsible supervision and contact the appropriate property or safety authority.</p>

            <p>A Good Locksmith can evaluate supported residential and commercial lock hardware, latch and strike engagement, and related door conditions. If forced-entry damage is involved, preserve evidence and review our <Link to="/blog/locks-after-break-in-forced-entry-nc">steps for damaged locks after a break-in</Link>.</p>

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

            <section className="article-cta">
              <span>A closed door should actually secure the opening.</span>
              <h2>Does your door latch but still push open?</h2>
              <p>Call A Good Locksmith to discuss the symptom, the door and frame, and compatible repair or replacement options in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 17, 2026. This article provides general lock and door information, not a diagnosis, repair specification, or code, fire-door, accessibility, or life-safety determination. Hardware, doors, frames, listings, occupancy, and applicable requirements vary. Consult the authority having jurisdiction and qualified professionals for the specific opening.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Common causes</h2>
              <ul>
                <li>Latch misses the strike</li>
                <li>Door or hinge movement</li>
                <li>Wrong strike preparation</li>
                <li>Deadlatch enters the opening</li>
                <li>Worn latch or lock body</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need latch help?</h2>
              <p>Have photos of both sides, the door edge, latch, strike, hinges, and any labels ready.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorLatchSecurityGuidePost;
