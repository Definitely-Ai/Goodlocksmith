import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const ManufacturedHomeDoorLockFitGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Some manufactured-home exterior doors accept common residential locksets. Others use a thinner door, uncommon backset, smaller bore, specialty latch, or integrated hardware that makes a standard replacement a poor fit.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> a standard residential lock may fit a manufactured-home door only when the door thickness, backset, bore sizes, latch preparation, strike, spacing, and inside-release function match that exact lock. Measure the existing opening before buying hardware.
            </div>

            <p>“Manufactured home door lock” is a practical search phrase, but the label on the home does not identify the lock preparation. Two manufactured homes can have exterior doors that look similar while using different thicknesses, hole patterns, latches, or replacement parts.</p>

            <p>This is relevant throughout Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. Mike Galdine's 35 years of locksmith experience support identifying the existing door and hardware first. A familiar-looking knob or deadbolt is not proof of compatibility.</p>

            <h2>What should you measure before buying a lock?</h2>
            <p>Photograph the inside, outside, and door edge, then record the measurements required by the exact product instructions. Do not order from the finish and key shape alone.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door thickness:</strong> measure from the outside face to the inside face without including raised trim</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Backset:</strong> measure from the door edge to the center of the main lock bore</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Cross-bore diameter:</strong> measure the large hole through the face of the door</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Edge-bore diameter:</strong> measure the hole that carries the latch or deadbolt through the door edge</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Latch face:</strong> note whether it uses a rectangular faceplate, rounded corners, drive-in collar, or specialty attachment</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Existing spacing:</strong> measure between separate knob, lever, and deadbolt centerlines</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door swing and clearance:</strong> document hinges, storm door, frame, trim, glass, and nearby hardware</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Strike and frame:</strong> check whether the latch and bolt align and have adequate room to extend</li>
            </ul>

            <p>Our <Link to="/blog/what-is-door-lock-backset-measurement-nc">door-lock backset guide</Link> explains the edge-to-center measurement. The <Link to="/blog/square-round-drive-in-latch-faceplate-nc">latch faceplate guide</Link> helps distinguish common door-edge preparations.</p>

            <h2>What dimensions do common residential locks expect?</h2>
            <p>Many current residential products are designed around common—but not universal—door preparations. For example, Schlage's F-Series preparation guide lists door thickness from 1-3/8 to 1-3/4 inches and backsets of 2-3/8 or 2-3/4 inches, with a 5-inch option for certain applications. A Schlage deadbolt guide similarly shows model-specific bore, backset, and thickness requirements.</p>

            <p>Those dimensions are examples, not a template for every brand, lock, or manufactured-home door. Some products support other thicknesses or require a thick-door kit; some doors use a specialty short backset, smaller bore, narrow stile, surface-mounted hardware, or combined lock assembly. If the measurements do not match, do not force the mounting screws, enlarge holes freehand, or assume an adapter will preserve security.</p>

            <div className="article-callout">
              <strong>“Standard” is not a measurement:</strong> compare the existing preparation with the current installation sheet for the exact model and function you intend to use.
            </div>

            <h2>Can the existing manufactured-home lock be rekeyed instead?</h2>
            <p>Possibly. If the existing cylinder and keyway are supported, the hardware operates correctly, and the goal is to make old keys stop working, rekeying may preserve a lock that already fits the door. Rekeying changes which key operates the cylinder; it does not correct a loose chassis, damaged latch, worn mechanism, misaligned strike, weak frame, or unsuitable inside-release function.</p>

            <p>Our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> separates those jobs. If several compatible locks should use one key, the <Link to="/blog/keyed-alike-home-locks-one-key-nc">keyed-alike home lock guide</Link> explains what must match.</p>

            <h2>Why inside egress matters on a manufactured-home exterior door</h2>
            <p>Federal manufactured-home standards address both locking and escape. Current 24 CFR § 3280.105 states that a swinging exterior door, other than a screen or storm door, must have a key-operated lock with a deadlocking latch or a key-operated deadbolt with a passage latch. It also states that the lock must not require a key for operation from the inside.</p>

            <p>That means a replacement should not solve an outside-security concern by creating an inside key requirement. Avoid improvising a double-cylinder deadbolt, padlock, surface bolt, or other arrangement that can obstruct a required exit. Our <Link to="/blog/double-cylinder-deadbolt-egress-safety-nc">double-cylinder deadbolt guide</Link> explains the exit concern in more detail.</p>

            <h2>Can you add a separate deadbolt?</h2>
            <p>Sometimes, but only after checking the door construction, thickness, existing preparation, lock spacing, frame, strike location, inside release, and the exact hardware instructions. A thin or specialty door may not accept the same preparation as a conventional wood or metal residential door. Drilling can also damage the door skin, internal reinforcement, weather seal, glass clearance, or certified door assembly.</p>

            <p>See <Link to="/blog/add-deadbolt-to-door-no-existing-hole-nc">adding a deadbolt to an unprepared door</Link> for the questions that come before drilling. If you are considering electronic access, use the <Link to="/blog/will-smart-lock-fit-existing-door-nc">smart-lock fit checklist</Link>; the same physical measurements still matter.</p>

            <h2>When should the door itself be evaluated?</h2>
            <p>A new lock cannot correct every opening problem. The door or frame also needs attention when the slab is bent or delaminating, the edge is split, the hinge side is loose, the latch misses the strike, the frame flexes, water has damaged the material, or prior holes leave too little sound material for secure mounting.</p>

            <p>Federal standards require manufactured-home exterior swinging door units to meet specified performance requirements and be installed for proper operation and weather protection. If proposed work goes beyond lock service and changes the door opening, frame, or certified door unit, ask the local building official whether a permit or approved replacement is required. North Carolina's manufactured-home regulations apply to alterations and repairs and direct permit questions to the authority having jurisdiction.</p>

            <p>Our <Link to="/blog/locksmith-or-door-repair-company-nc">locksmith-or-door-company guide</Link> helps identify which trade should address the symptom. The <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link> covers the complete opening, including hinges, strikes, and frames.</p>

            <h2>What information helps before a service call?</h2>
            <ol>
              <li><strong>Confirm authorization.</strong> Have identification and proof that you may request work on the home.</li>
              <li><strong>Photograph the complete door.</strong> Include the inside, outside, edge, frame, and existing hardware.</li>
              <li><strong>Record the measurements.</strong> Door thickness, backset, bore sizes, spacing, and latch style are more useful than “standard lock.”</li>
              <li><strong>Describe the actual problem.</strong> Say whether the goal is new key control, repair, easier operation, added security, or smart-lock access.</li>
              <li><strong>Keep model information.</strong> Save packaging, instructions, and any markings on the existing lock or door label.</li>
            </ol>

            <h2>Manufactured-home lock help near Lillington</h2>
            <p>A Good Locksmith can evaluate supported residential lock hardware, rekey compatible cylinders, and repair or replace compatible locks without promising that an off-the-shelf product will fit every manufactured-home door. Door reconstruction, structural repair, certified door replacement, or work outside locksmith services may require another qualified trade or local approval.</p>

            <div className="service-area-links">
              <Link to="/Lillington">Lillington</Link>
              <Link to="/Angier">Angier</Link>
              <Link to="/Bunnlevel">Bunnlevel</Link>
              <Link to="/Fuquay-Varina">Fuquay-Varina</Link>
              <Link to="/Coats">Coats</Link>
              <Link to="/Dunn">Dunn</Link>
              <Link to="/Erwin">Erwin</Link>
              <Link to="/Sanford">Sanford</Link>
              <Link to="/Harnett-County">Harnett County</Link>
              <Link to="/Wake-County">Wake County</Link>
            </div>

            <h2>Reliable sources</h2>
            <ul>
              <li><a href="https://www.ecfr.gov/current/title-24/subtitle-B/chapter-XX/part-3280/subpart-B/section-3280.105" target="_blank" rel="noreferrer">Electronic Code of Federal Regulations: 24 CFR § 3280.105—Exit Facilities and Exterior Doors</a></li>
              <li><a href="https://www.ecfr.gov/current/title-24/subtitle-B/chapter-XX/part-3280/subpart-D/section-3280.405" target="_blank" rel="noreferrer">Electronic Code of Federal Regulations: 24 CFR § 3280.405—Manufactured-Home Exterior Passage Doors</a></li>
              <li><a href="https://www.ncosfm.gov/manufactured-bldg/manufactured-buildings-hud" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Manufactured Buildings—HUD</a></li>
              <li><a href="https://www.ncosfm.gov/manufactured-homes/state-nc-regs-mfg-homes-2nd-printing-2019-ed-revised-3-2023pdf-0/open" target="_blank" rel="noreferrer">North Carolina Regulations for Manufactured Homes</a></li>
              <li><a href="https://www.schlage.com/content/dam/sch-us/documents/pdf/installation-manuals/RF103.pdf" target="_blank" rel="noreferrer">Schlage F-Series Door Preparation Guide</a></li>
              <li><a href="https://www.schlage.com/content/dam/sch-us/documents/pdf/installation-manuals/b60-b62-deadbolt-installation-download.pdf" target="_blank" rel="noreferrer">Schlage B60/B62 Deadbolt Installation Instructions</a></li>
            </ul>

            <section className="article-cta">
              <span>Measure the door before choosing the lock</span>
              <h2>Need help with a manufactured-home door lock?</h2>
              <p>Call A Good Locksmith with the property location, photos of both sides and the door edge, the measurements, and the access or security problem you want to solve.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 22, 2026. This article provides general lock-fit and safety information, not a product guarantee, building-code determination, engineering opinion, or substitute for the exact hardware instructions and local authority. Door construction, certification, condition, and jurisdiction-specific requirements can change the appropriate work.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Measure first</h2>
              <p>Door thickness, backset, bores, latch style, spacing, and strike alignment determine fit.</p>
            </div>
            <div className="sidebar-card">
              <h2>Keep inside exit simple</h2>
              <p>A manufactured-home exterior door lock must not require a key to operate from the inside.</p>
            </div>
            <div className="sidebar-card">
              <h2>Match the whole opening</h2>
              <p>A lock cannot repair a damaged door, weak frame, or misaligned strike.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default ManufacturedHomeDoorLockFitGuidePost;
