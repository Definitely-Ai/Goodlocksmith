import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const NewConstructionHomeRekeyGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Maybe—but “new” does not automatically mean the final key handoff is complete. Some projects use temporary construction keying that disables a builder key when the permanent key is used. Other locks do not, and even a valid system must be activated or changed at every exterior cylinder it is meant to protect.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Closing-day question:</strong> ask the builder exactly how each exterior lock was keyed, whether a temporary builder key exists, and what action makes that key stop working. If the answer is uncertain, have the complete lock-and-key handoff checked.
            </div>

            <p>New-construction homes pass through many hands before the buyer receives the keys. That does not prove anyone kept an unauthorized copy, and it does not mean every new lock must be replaced. It does mean the owner should understand which keys operated the property during construction and which keys work after closing.</p>

            <p>This is a timely question around Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. Harnett County’s planning material describes substantial growth pressure in the northwestern county from Fuquay-Varina and Wake County. Mike Galdine’s 35 years of locksmith experience point to a practical response: verify the key-control system instead of assuming all new homes were keyed the same way.</p>

            <h2>What is a builder key?</h2>
            <p>A builder key is a temporary key intended to operate designated locks while a home is under construction. It can let authorized trades, supervisors, or project staff enter without distributing the homeowner’s permanent key. The important detail is not the label on the key—it is the keying method inside the cylinder.</p>

            <p>Some construction-keyed cylinders contain a deliberate temporary combination. In Schlage’s residential lost-ball system, a permanent key or master key acts as the deactivating key and causes small components to drop out of the working combination, permanently preventing the construction key from operating that cylinder. Kwikset’s Protecto Keying manual describes a similar new-construction arrangement in which using the homeowner key locks out the builder key.</p>

            <h2>Construction keying is not automatic or universal</h2>
            <p>A new-looking lock does not establish that it has a temporary builder-key feature. Schlage states that residential construction keying must be specified on the order and is limited to listed configurations. Kwikset documents its own Protecto method, but that does not mean every Kwikset lock, every SmartKey cylinder, or every home uses it.</p>

            <p>Manufacturers, lock families, keyways, master-key arrangements, and builder practices vary. A key marked “builder,” a group of locks that use one key, or a sealed envelope of owner keys is not enough by itself to identify the internal system. The builder, hardware schedule, packaging, or a qualified locksmith may be needed to confirm what was installed.</p>

            <h2>Why every exterior cylinder matters</h2>
            <p>A deactivating key changes the cylinder it is actually used in. If a home has a front deadbolt, side entrance, garage-to-house door, keyed handleset, detached garage, or other exterior keyed opening, the owner should not assume that using the permanent key in one door changed all the others.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Inventory every exterior keyed opening</li>
              <li><FaCheckCircle aria-hidden="true" /> Confirm which cylinders were construction-keyed</li>
              <li><FaCheckCircle aria-hidden="true" /> Follow the manufacturer’s handoff process at each applicable cylinder</li>
              <li><FaCheckCircle aria-hidden="true" /> Test every permanent key before discarding labels or packaging</li>
              <li><FaCheckCircle aria-hidden="true" /> Record who received permanent keys after closing</li>
            </ul>

            <p>Do not insert an unknown key merely to experiment. A construction-keying feature may be intentionally one-way, and the wrong assumption can complicate the handoff. If the system is not documented, stop and identify it first.</p>

            <h2>When rekeying still makes sense after closing</h2>
            <p>Rekeying changes the working combination so the old operating key no longer works while retaining serviceable hardware. It is a sensible option when:</p>
            <ul>
              <li>The builder cannot confirm whether temporary construction keying was used</li>
              <li>The owner cannot verify that the builder key was disabled at every applicable cylinder</li>
              <li>Permanent keys were distributed beyond the people the owner now authorizes</li>
              <li>Some exterior doors use a different or undocumented key</li>
              <li>The owner wants compatible locks placed on one convenient house key</li>
            </ul>

            <p>Our guides explain <Link to="/blog/rekey-lock-without-original-key-nc">when a lock may be rekeyed without the original key</Link> and <Link to="/blog/keyed-alike-home-locks-one-key-nc">what keyed-alike home locks mean</Link>. Rekeying is different from replacing the hardware: if a new lock is sound, compatible, and suitable for the door, replacement may add no key-control benefit beyond what a correct rekey provides.</p>

            <h2>When replacement may be the better choice</h2>
            <p>Replacement can make sense when the hardware is damaged, unreliable, incorrectly fitted, missing required parts, incompatible with the preferred key system, or being upgraded to a different function or electronic lock. Cosmetic preferences alone can also justify replacement, but they are separate from the question of whether old keys still work.</p>

            <p>Before buying hardware, read <Link to="/blog/repair-rekey-or-replace-door-lock-nc">how to choose between repair, rekeying, and replacement</Link>. A lock should also be checked with the door closed: a new deadbolt that binds against the strike is an alignment problem, not proof that the keying is wrong.</p>

            <h2>A practical new-home lock handoff</h2>
            <ol>
              <li><strong>Collect the documents:</strong> ask for the lock brand, model or series, keyway information, and any construction-key instructions.</li>
              <li><strong>Collect the credentials:</strong> count permanent keys, builder keys, remotes, smart-lock codes, and app administrators.</li>
              <li><strong>Map the openings:</strong> include front, side, rear, garage, patio, and detached-building doors that have keyed locks.</li>
              <li><strong>Confirm the transition:</strong> determine whether the builder key was disabled, the locks were rekeyed, or the hardware was replaced.</li>
              <li><strong>Test the result:</strong> verify the authorized key at each applicable door and check that each deadbolt extends without forcing the door.</li>
              <li><strong>Update electronic access:</strong> remove temporary users and change codes or administrator access according to the exact lock’s instructions.</li>
            </ol>

            <p>BHMA’s recommended practices for mechanical keying systems emphasize planned key control and good key-management practices. That principle applies even to a single-family home: the goal is a documented transfer from construction access to owner-controlled access.</p>

            <p>North Carolina law defines regulated locksmith services to include repairing, rebuilding, rekeying, repinning, servicing, adjusting, and installing mechanical or electronic locks. A Good Locksmith identifies its North Carolina locksmith license as NCLL #3119.</p>

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
              <li><a href="https://kc.allegion.com/kb/article/what-is-a-schlage-lost-ball-construction-keying" target="_blank" rel="noreferrer">Allegion/Schlage: Lost Ball Construction Keying</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-files/schlage/price-book/Schlage_Mechanical_Price_Book_110057.pdf" target="_blank" rel="noreferrer">Schlage Mechanical Price Book: Residential Construction Keying</a></li>
              <li><a href="https://images.kwikset.com/is/content/Kwikset/Redesign%202019/Literature/Documents/KW-REKEY-MANUAL.pdf" target="_blank" rel="noreferrer">Kwikset Rekeying Manual: Protecto Keying</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15628-2023-Recommended-Practices-For-Mechanical-Keying-Systems" target="_blank" rel="noreferrer">BHMA A156.28: Recommended Practices for Mechanical Keying Systems</a></li>
              <li><a href="https://www.harnett.org/planning/long-range-planning-.asp" target="_blank" rel="noreferrer">Harnett County Long Range Planning</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith services</a></li>
            </ul>

            <section className="article-cta">
              <span>Take control of the final key handoff</span>
              <h2>Unsure whether the builder key was disabled?</h2>
              <p>Call A Good Locksmith with the lock brand, number of exterior keyed openings, keys received at closing, and any builder or manufacturer instructions.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 29, 2026. This article provides general key-control information, not a claim that a particular development, builder, lock, or cylinder uses construction keying. Confirm the installed hardware and follow its current manufacturer instructions before using a deactivating key or changing the system.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Ask at closing</h2>
              <ul>
                <li>Was a builder key used?</li>
                <li>How is it disabled?</li>
                <li>Which locks are included?</li>
                <li>How many permanent keys exist?</li>
                <li>Who has electronic access?</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need the locks checked?</h2>
              <p>Have the keys, lock brand, exterior-door count, and closing documents ready.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default NewConstructionHomeRekeyGuidePost;
