import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LocksmithOrDoorRepairGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Call a locksmith when the fault is in the key, cylinder, lock, latch, bolt, exit device, or related security hardware. A damaged, warped, rotted, cracked, or incorrectly hung door or frame may require a door contractor or carpenter—and some openings need both trades.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Start with the symptom, not a guessed trade:</strong> a door that “will not lock” may have a failed lock, a misaligned strike, loose hinges, a shifted frame, a warped slab, or several problems at once. A useful service call identifies which part is actually preventing safe operation.
            </div>

            <p>Homeowners and business managers often ask whether to call a locksmith, handyman, carpenter, glass company, or commercial door contractor. The answer depends on whether the problem follows the lock or the complete door opening.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to separating lock and hardware faults from door and frame conditions. This guide helps customers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe the problem accurately and start with the right kind of help.</p>

            <h2>What work belongs to a licensed locksmith in North Carolina?</h2>
            <p>North Carolina General Statutes § 74F-4 defines locksmith services to include repairing, rebuilding, rekeying, repinning, servicing, adjusting, or installing locks and mechanical or electronic locking devices. The definition also includes access-control and egress-control devices.</p>

            <p>That makes a licensed locksmith the appropriate starting point when the concern is access, key control, lock function, or security hardware. Examples include:</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> A key will not enter, turn, release, or operate the intended lock function</li>
              <li><FaCheckCircle aria-hidden="true" /> A cylinder, deadbolt, latch, knob, lever, or mortise lock is loose, worn, or failed</li>
              <li><FaCheckCircle aria-hidden="true" /> Locks need rekeying after keys, tenants, employees, or property control change</li>
              <li><FaCheckCircle aria-hidden="true" /> A compatible lock, deadbolt, keypad, panic device, or key system needs evaluation</li>
              <li><FaCheckCircle aria-hidden="true" /> The lock operates poorly even while the door is open</li>
              <li><FaCheckCircle aria-hidden="true" /> The customer needs an authorized lockout, key service, or security-hardware assessment</li>
            </ul>

            <p>The word “adjusting” in the statute does not mean every physical door problem is locksmith work. It means a locksmith may service or adjust locking devices within the licensed scope. Door construction, structural carpentry, glass, rot, welding, and full frame replacement can require other qualified providers.</p>

            <h2>When might you need a door company or carpenter?</h2>
            <p>A door specialist may be the better lead when the slab, jamb, frame, or surrounding construction is damaged or no longer positioned correctly. Warning signs include a visibly split or rotted jamb, a warped or delaminating door, cracked glass, a bent hollow-metal frame, major hinge-side damage, water intrusion, or an opening that is no longer square.</p>

            <p>Replacing a lock will not straighten a bent door, rebuild missing frame material, repair glass, or correct a structural opening. A new deadbolt installed into a badly damaged jamb may still leave the entrance unable to close or secure normally.</p>

            <div className="article-callout">
              <strong>Do not let a new lock hide old damage:</strong> after forced entry, the cylinder may still turn while the strike area, frame, fasteners, hinges, or door skin have lost their integrity. Document the damage and evaluate the complete opening before choosing parts.
            </div>

            <h2>Why the open-door test is useful</h2>
            <p>For an ordinary residential deadbolt or latch, one safe comparison can help describe the symptom. With the door open and fingers clear of the edge, operate the hardware normally. Then close the door without forcing it and compare.</p>

            <ul>
              <li><strong>Difficult open and closed:</strong> the key, cylinder, lock body, latch, bolt, or installation may need locksmith attention.</li>
              <li><strong>Smooth open but difficult closed:</strong> the bolt or latch may be contacting the strike, pocket, frame, weatherstripping, or another part of the opening.</li>
              <li><strong>Door visibly drops, rubs, bows, or will not sit in the frame:</strong> hinges, the slab, frame, or building movement may require broader door work.</li>
              <li><strong>Electronic deadbolt works open but reports a jam closed:</strong> mechanical resistance or alignment should be checked before blaming software or batteries.</li>
            </ul>

            <p>Schlage’s current guidance similarly says that a deadbolt dragging or hitting the strike calls for the strike or jamb alignment to be addressed. Our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt-alignment guide</Link> explains that comparison in more detail.</p>

            <h2>Some problems need both a locksmith and a door professional</h2>
            <p>A door contractor may restore the frame, slab, hinges, or preparation, while a locksmith identifies, rekeys, repairs, or installs compatible locking hardware. The order matters. If the opening will be rebuilt or replaced, final hardware measurements and strike locations should match the finished door and frame—not the damaged condition that is being removed.</p>

            <p>Coordination is especially important when an opening has a mortise lock, panic hardware, a door closer, electric strike, card reader, alarm contact, automatic operator, or fire label. Adjusting one component can change how another component latches, releases, closes, or reports door position.</p>

            <h2>Commercial exit and fire doors require extra care</h2>
            <p>A commercial exit door is not the place for an improvised fix. OSHA requires exit-route doors to remain openable from inside without keys, tools, or special knowledge, and free of a device or alarm that could restrict emergency use if it fails.</p>

            <p>North Carolina’s current building and fire requirements are published through the Office of State Fire Marshal, while the authority having jurisdiction determines what applies to the particular property and opening. A fire-labeled door, frame, closer, latch, panic device, or electrified system may require qualified specialists and inspection beyond ordinary lock service.</p>

            <p>Use our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">commercial exit-door checklist</Link> for warning signs. If a closer slams or stops short, the <Link to="/blog/commercial-door-closer-slams-wont-latch-nc">commercial door-closer guide</Link> explains why closer adjustment cannot correct every lock, hinge, frame, or door fault.</p>

            <h2>What information helps before you call?</h2>
            <ol>
              <li><strong>Location and authorization:</strong> identify the property, decision-maker, and affected opening.</li>
              <li><strong>Exact symptom:</strong> explain whether the key, thumbturn, latch, deadbolt, lever, push bar, closer, or door movement is failing.</li>
              <li><strong>Open versus closed:</strong> state whether the hardware works normally with the door open.</li>
              <li><strong>Visible condition:</strong> note cracks, rot, bending, gaps, rubbing, loose hinges, impact marks, failed glass, or water damage.</li>
              <li><strong>Door details:</strong> share clear photos of both faces, the edge, frame, hinges, strike, labels, and hardware—without exposing readable key codes or close-ups of key cuts.</li>
              <li><strong>Special systems:</strong> mention fire labels, alarms, access control, automatic operators, or required exits before work is scheduled.</li>
            </ol>

            <h2>Do not force, file, drill, or replace parts blindly</h2>
            <p>Forcing a key, tightening mounting screws until the lock binds, enlarging a strike pocket without diagnosing contact, or moving a fire-door component can make the problem worse. A replacement lock also may not fit the existing backset, bore sizes, door thickness, handing, keyway, or function.</p>

            <p>The <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> explains the difference between correcting a mechanical fault, changing who has access, and installing new hardware. If forced entry caused the damage, follow the safety, evidence, and documentation priorities in our <Link to="/blog/locks-after-break-in-forced-entry-nc">post-break-in guide</Link>.</p>

            <h2>Lock and door-hardware help in Harnett County</h2>
            <p>A Good Locksmith provides authorized residential and commercial locksmith service. Mike can evaluate keys, cylinders, locks, latches, deadbolts, strikes, panic hardware, key systems, and related security-hardware symptoms, then explain whether the appropriate next step is lock service or coordination with another door professional.</p>

            <p>A Good Locksmith does not need to claim every door repair to be useful. An accurate diagnosis protects the customer from buying a new lock for a damaged opening—or replacing a door when the actual fault is serviceable lock hardware.</p>

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
            <ul className="article-sources">
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Definition of Locksmith Services</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_74F/GS_74F-12.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-12: License Number in Advertising</a></li>
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-wont-latch.html" target="_blank" rel="noreferrer">Schlage: Diagnosing a Door That Will Not Latch</a></li>
              <li><a href="https://www.assaabloy.com/au/en/about-us/general-information1/warranties-and-guarantees/assa-abloy-product-care-and-maintenance-recommendations" target="_blank" rel="noreferrer">ASSA ABLOY: Inspecting the Complete Door for Proper Operation</a></li>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA 29 CFR 1910.36: Exit Route Design and Construction</a></li>
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Current and Past State Codes</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights" target="_blank" rel="noreferrer">BHMA: Standards for Hardware That Hangs, Controls, Secures, and Trims Doors</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the failing part before buying the repair</span>
              <h2>Not sure whether the lock or the door is causing the problem?</h2>
              <p>Call A Good Locksmith with the location, authorization, symptom, and photos. Mike can assess the lock and related security hardware and explain the appropriate next step.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 24, 2026. This article provides general guidance, not a remote diagnosis, structural assessment, fire-door inspection, code determination, or promise that one trade can correct every opening. Verify the property, authorization, complete door and frame, hardware labels, manufacturer instructions, and applicable requirements before work begins.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Start with these details</h2>
              <ul>
                <li>Works with door open?</li>
                <li>Key, lock, or door symptom?</li>
                <li>Frame or slab damaged?</li>
                <li>Fire or exit labels?</li>
                <li>Clear photos available?</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Lock and security-hardware evaluation backed by 35 years of locksmith experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LocksmithOrDoorRepairGuidePost;
