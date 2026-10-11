import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LatchDeadlatchDeadboltGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">These parts can sit only a few inches apart, but they do different jobs. Knowing which one is sticking, missing the strike, or failing to move helps a locksmith evaluate the right problem.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The quick distinction:</strong> a spring-loaded latch bolt holds the door closed automatically. A deadlatching feature helps keep that latch from being pushed back when the door is properly closed. A deadbolt is a separate, non-spring-loaded bolt that you deliberately extend with a key, thumbturn, keypad, or authorized electronic command.
            </div>

            <p>Customers often say “the deadbolt is broken” when the problem is actually the beveled latch under the knob, or they call every spring latch a deadbolt. The words matter because the failed component, likely cause, and appropriate repair can be different.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to identifying the complete opening before recommending work. This guide helps homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe what their door is doing without having to diagnose it themselves.</p>

            <h2>What is a latch bolt?</h2>
            <p>A latch bolt is the beveled, spring-loaded piece that projects from the edge of many doors. The bevel lets the strike push the latch inward as the door closes. Once the latch reaches the strike opening, its spring sends it back out and holds the door shut. Turning the knob or lever retracts it so the door can open.</p>

            <p>Schlage’s current door-hardware glossary describes a latch bolt as a beveled, spring-operated bolt that engages when the door closes. That automatic action is the easiest way to distinguish it from a conventional deadbolt.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Normal latch behavior:</strong> it presses inward against the strike and springs back out</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Common latch symptom:</strong> the door will not stay closed because the latch misses or barely enters the strike</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Another latch symptom:</strong> the knob or lever turns but the latch does not fully retract</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Important limit:</strong> a basic spring latch is not the same mechanism as a deliberately thrown deadbolt</li>
            </ul>

            <p>If a latch works with the door open but not when it closes, door position, hinge wear, weatherstripping, or strike alignment may be loading the mechanism. If the knob turns but the latch remains extended even with the door open, see our guide to a <Link to="/blog/door-knob-turns-latch-wont-retract-nc">latch that will not retract</Link>.</p>

            <h2>What makes a latch a deadlatch?</h2>
            <p>“Deadlatch” can refer to a lock or to a deadlocking latch-bolt arrangement. On many keyed knobs, levers, and commercial locks, the main beveled latch is paired with a smaller auxiliary plunger. When the door closes correctly, the strike holds that smaller plunger depressed while the main latch enters the strike opening. The depressed auxiliary part blocks the projected main latch from being pushed straight back by end pressure.</p>

            <p>The Builders Hardware Manufacturers Association defines a deadlocking latch bolt as a spring-actuated beveled latch with a plunger that locks the projected latch against return by end pressure. That protection depends on correct alignment. The auxiliary plunger should rest on the strike rather than drop into the same opening as the main latch.</p>

            <div className="article-callout">
              <strong>A small alignment error can defeat the feature:</strong> if the auxiliary plunger falls into the strike opening, the latch may still appear closed while its intended deadlocking action is not engaged. A door that latches but can be pushed open needs prompt evaluation.
            </div>

            <p>Do not file the strike randomly or tape the auxiliary plunger down. First document where the main latch and smaller plunger meet the strike. Our guide to a <Link to="/blog/door-latches-but-can-be-pushed-open-nc">door that latches but can be pushed open</Link> explains this condition in more detail.</p>

            <h2>What is a deadbolt?</h2>
            <p>A conventional deadbolt is not spring loaded. It requires a deliberate action to extend or retract: turning a key or thumbturn, entering a code, or using an authorized control on a compatible electronic model. Schlage’s mechanical-lock guidance identifies that deliberate movement—not the bolt’s appearance alone—as a defining difference.</p>

            <p>On a typical home entrance, the deadbolt is installed above the knob, lever, or handleset latch. The latch holds the door closed during ordinary use; the deadbolt adds a separate locking point when it is thrown fully into its strike pocket. Some mortise, multipoint, and interconnected locks combine these functions inside a larger system, so the door edge may not match a simple two-bore residential layout.</p>

            <p>ANSI/BHMA A156.40-2025 establishes residential deadbolt and deadlatch performance requirements, including operation, durability, security, and finish tests. A standards claim applies to the identified certified product—not automatically to every lock that looks similar.</p>

            <h2>How to tell which part is causing the symptom</h2>
            <ul>
              <li><strong>The door swings open unless you hold it:</strong> start with the spring latch and its strike engagement.</li>
              <li><strong>The door clicks shut but can be pushed open:</strong> inspect latch depth, strike position, wear, and the auxiliary deadlatch relationship.</li>
              <li><strong>The knob or lever will not release the door:</strong> the latch, spindle, chassis, mounting, or internal linkage may need diagnosis.</li>
              <li><strong>The upper bolt will not extend fully:</strong> check deadbolt travel with the door open, then compare operation with the door closed.</li>
              <li><strong>The deadbolt works open but binds closed:</strong> strike position, pocket depth, weatherstripping, hinges, or door movement may be loading it.</li>
              <li><strong>The key changes access but hardware still sticks:</strong> rekeying alone does not repair alignment or a worn latch or bolt.</li>
            </ul>

            <p>Test only from a safe position and keep another authorized way inside. With the door open, operate the latch using the lever or knob, then extend and retract the deadbolt. Next, close the door normally and compare the feel. Do not force a key, use the deadbolt to pull the door shut, or repeatedly cycle a motorized lock against resistance.</p>

            <p>If the deadbolt changes from smooth operation while open to difficult operation while closed, read our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt and strike-alignment guide</Link>. If both parts move poorly even with the door open, the hardware itself may be loose, worn, incorrectly installed, or damaged.</p>

            <h2>Does locking the knob replace using the deadbolt?</h2>
            <p>Not necessarily. Locking a keyed knob or lever usually controls the outside trim while the same spring latch continues to hold the door closed. Throwing a separate deadbolt projects a non-spring-loaded bolt into its own strike. They are different mechanisms and should be evaluated as such.</p>

            <p>The right hardware still depends on the complete opening, door construction, frame, strike reinforcement, required exit operation, household needs, and applicable rules. Adding more locks does not automatically create a better or safer door. A double-cylinder deadbolt, improvised surface bolt, chain, or padlock can create an exit hazard in the wrong application.</p>

            <h2>Commercial doors can combine the parts differently</h2>
            <p>Commercial cylindrical and mortise locks use many functions. A storeroom lever may always be locked from the corridor while its latch retracts freely from inside. A mortise lock can include a latch bolt, auxiliary deadlatch, and deadbolt in one case. An interconnected lock can retract both its latch and deadbolt with one inside operation.</p>

            <p>Do not choose commercial replacement hardware from appearance alone. Exit doors, labeled fire doors, accessible routes, and electrified openings can have additional requirements. Our <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">commercial lock-function guide</Link> explains why “locked” can mean different things at different doors.</p>

            <h2>What to tell the locksmith</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Which piece is affected: the spring latch, smaller auxiliary plunger, separate deadbolt, or an unknown part</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the problem occurs with the door open, closed, or both</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the latch enters the strike and whether the door can still be pushed open</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the deadbolt fully extends without pushing, pulling, or lifting the door</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether a key, thumbturn, knob, lever, keypad, or motor produces the symptom</li>
              <li><FaCheckCircle aria-hidden="true" /> Clear photos of both sides, the door edge, the strike, and any brand or model marking</li>
            </ul>

            <p>North Carolina General Statutes include repairing, servicing, adjusting, and installing locks within the definition of locksmith services. A Good Locksmith provides authorized residential and commercial lock service under NCLL #3119. Mike can identify which part is involved and whether the opening needs adjustment, repair, rekeying, or compatible replacement.</p>

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
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-hardware-terms-and-parts-of-a-door-lock.html" target="_blank" rel="noreferrer">Schlage: Door Hardware Terms and Parts of a Door Lock</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/mechanical-locks.html" target="_blank" rel="noreferrer">Schlage 101: Mechanical Locks, Latches, and Deadbolts</a></li>
              <li><a href="https://buildershardware.com/Resources/Guide-to-Builders-Hardware-Terminology/Types-of-Locks" target="_blank" rel="noreferrer">BHMA: Types of Locks and Lock-Component Terminology</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15640-2025-Residential-Deadbolts" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.40-2025 Residential Deadbolts</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15639-2025-Residential-Locksets-and-Latches" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.39-2025 Residential Locksets and Latches</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
            </ul>

            <section className="article-cta">
              <span>Name the part, then fix the actual problem</span>
              <h2>Not sure whether the latch, deadlatch, or deadbolt is failing?</h2>
              <p>Call A Good Locksmith with the door location, the open-versus-closed test result, and photos of the hardware. Mike can evaluate the opening and explain the appropriate service.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 11, 2026. This article provides general door-hardware information, not a remote diagnosis, code determination, or product guarantee. Lock design, door construction, fire rating, egress requirements, alignment, wear, and installation vary. Do not disable required exit hardware or attempt a repair that could leave an occupied door unsafe.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Three different parts</h2>
              <ul>
                <li>Latch: spring loaded</li>
                <li>Deadlatch: blocks pushback</li>
                <li>Deadbolt: deliberately thrown</li>
                <li>Strike alignment matters</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Describe what moves</h2>
              <p>Compare operation with the door open and closed, then note which control and which bolt produce the symptom.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LatchDeadlatchDeadboltGuidePost;
