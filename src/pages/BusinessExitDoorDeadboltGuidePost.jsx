import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const BusinessExitDoorDeadboltGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Sometimes—but a business exit door is first a life-safety opening. Before adding a separate deadbolt, the door's occupancy, exit role, existing hardware, fire rating, accessibility, and local approval requirements must be checked.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> do not add a stand-alone deadbolt to a commercial exit door until the entire opening has been evaluated. A second lock can create another action, require a key or special knowledge from inside, interfere with panic hardware, or alter a labeled fire-door assembly. The correct solution may be different hardware rather than another bolt.
            </div>

            <p>Business owners often ask this after a break-in concern, a tenant change, a loose exterior trim, or a desire for stronger after-hours security. The question can arise at shops, offices, churches, service businesses, warehouses, and multi-tenant properties in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County.</p>

            <p>Mike Galdine's 35 years of locksmith experience support starting with the door's function, not a hardware catalog. A lock that seems stronger from the parking lot can be the wrong choice if an occupant cannot release the door quickly and intuitively from inside.</p>

            <h2>Why a business exit door is different from a house door</h2>
            <p>A commercial exterior door may be part of a required means of egress. Its lock, latch, exit device, closer, frame, glazing, signage, fire label, and access-control equipment can work as one safety system. Changing one part may affect the operation or approval of the entire opening.</p>

            <p>North Carolina's Office of State Fire Marshal currently identifies the 2018 North Carolina codes as effective. The building code's general rule is that an egress door must be readily openable from the egress side without a key, special knowledge, or unusual effort, except where a specific exception applies. The code contains limited conditions for certain main doors and occupancies; those exceptions should not be treated as blanket permission for every door or every added deadbolt.</p>

            <div className="article-callout">
              <strong>Important distinction:</strong> “The business is closed when we lock it” does not automatically make any lock arrangement acceptable. The door's approved use, occupancy, hardware, signage, and enforcement conditions still matter, and the local code official has authority over the opening.
            </div>

            <h2>Five questions to answer before adding a deadbolt</h2>

            <h3>1. Is this door required for egress?</h3>
            <p>Identify where people travel to reach an exit, how many occupants the space serves, and whether another door actually satisfies the approved exit arrangement. Do not assume a rear door is optional because customers normally use the front entrance.</p>

            <h3>2. Does the door have panic or fire-exit hardware?</h3>
            <p>A door with a push pad or crossbar is designed to release through that device. A separate surface bolt, keyed deadbolt, or other independent lock can defeat the expected operation. Our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic-hardware safety checklist</Link> explains why unobstructed, tested egress matters, while our guide to <Link to="/blog/panic-bar-dogging-fire-exit-hardware-nc">panic-bar dogging</Link> explains why fire-exit hardware must not be treated like ordinary panic hardware.</p>

            <h3>3. Is it a labeled fire door?</h3>
            <p>Look for labels on the door edge and frame. Drilling, through-bolting, changing latching hardware, or installing an unlisted component may affect the assembly. A locksmith can identify hardware and operating issues, but the exact modification may also require a door-hardware professional, listed components, permits, or approval from the authority having jurisdiction.</p>

            <h3>4. How many actions are needed to get out?</h3>
            <p>Adding a separate thumbturn deadbolt above an existing lever or exit device can create two releasing actions. Current model-code language generally emphasizes releasing all latching and locking devices with one motion, subject to defined exceptions. A commercial mortise lock or interconnected device may provide a deadbolt function while retracting the latch and bolt through one inside action, but suitability depends on the opening and applicable code.</p>

            <h3>5. Can the hardware be operated accessibly?</h3>
            <p>The 2010 ADA Standards require door and gate hardware on accessible routes to comply with operability rules and generally place operable parts 34 to 48 inches above the finished floor. Hardware that can be operated with a closed fist or loose grip accommodates more users than a small turn piece requiring tight grasping, pinching, or twisting.</p>

            <h2>When might a deadbolt or deadbolt function be possible?</h2>
            <p>A compliant solution may exist after the door, occupancy, and approval path are confirmed. Possibilities can include a listed commercial lock with an integrated deadbolt and single-motion egress, an approved main-door arrangement used only under its stated conditions, or another code-compliant locking function designed for the opening.</p>

            <p>Schlage's current commercial-lock guidance describes mortise lock functions that integrate a deadbolt while allowing the inside lever to provide single-motion egress. That is very different from adding an independent residential deadbolt above a commercial lever or panic bar. Product listing, door preparation, handing, backset, frame condition, keying, and required approvals still have to match.</p>

            <p>If the door is not an egress door, different options may be available, but its actual use and status should be confirmed rather than guessed. A storage or mechanical-room door can still have accessibility, fire-rating, or operational requirements.</p>

            <h2>Safer ways to address the underlying security concern</h2>
            <p>The best fix depends on what is weak. Adding another bolt does not correct every door-security problem.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Rekey the existing cylinder when former keys or employee access are the concern</li>
              <li><FaCheckCircle aria-hidden="true" /> Replace damaged or inappropriate outside trim while preserving safe inside operation</li>
              <li><FaCheckCircle aria-hidden="true" /> Correct a misaligned latch, strike, closer, hinge, or frame before blaming the lock</li>
              <li><FaCheckCircle aria-hidden="true" /> Use the correct commercial lock function for the room and traffic pattern</li>
              <li><FaCheckCircle aria-hidden="true" /> Repair or replace worn panic hardware with compatible, listed components</li>
              <li><FaCheckCircle aria-hidden="true" /> Review key control or a supported master-key hierarchy instead of adding unnecessary locks</li>
              <li><FaCheckCircle aria-hidden="true" /> Coordinate access-control changes with egress, power-loss, and fire-alarm behavior</li>
              <li><FaCheckCircle aria-hidden="true" /> Ask the local building or fire official when the proposed arrangement needs approval</li>
            </ul>

            <p>If the main question is whether a door can physically accept a residential-style deadbolt, see our guide to <Link to="/blog/add-deadbolt-to-door-no-existing-hole-nc">adding a deadbolt to an unprepared door</Link>. For a business opening, physical fit is only one part of the decision. Our guide to <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">commercial lock functions</Link> can also help explain why entrance, storeroom, classroom, and office locks behave differently.</p>

            <h2>What to photograph and document before calling</h2>
            <ul>
              <li>Both sides of the complete door and the surrounding exit path</li>
              <li>The door edge, latch or bolt, strike, hinges, closer, and frame</li>
              <li>Any push pad, crossbar, lever, thumbturn, cylinder, keypad, or electric lock</li>
              <li>Door and frame labels without removing or covering them</li>
              <li>Existing signs on or beside the door</li>
              <li>The problem you are trying to solve: lost keys, forced entry, loose trim, access control, or after-hours security</li>
              <li>The property address, business use, and authorized decision-maker</li>
              <li>Any direction already provided by the landlord, fire marshal, building official, architect, or door supplier</li>
            </ul>

            <p>Do not disable the existing latch, block the panic bar, tape over a fire label, or install a temporary slide bolt while waiting for service. If an exit will not release correctly, keep people away from the unsafe condition and contact the appropriate emergency or code authority when immediate life safety is involved.</p>

            <h2>How the finished opening should be checked</h2>
            <ol>
              <li><strong>Test from inside first.</strong> The door should release in the approved manner without a key or hidden step.</li>
              <li><strong>Test the complete door.</strong> Verify latch or bolt retraction, swing, closer operation, relatching, alignment, and key removal.</li>
              <li><strong>Check every authorized key or credential.</strong> Confirm intended access without changing unrelated doors.</li>
              <li><strong>Confirm fire-door and panic-hardware operation.</strong> Do not leave a listed assembly altered or a required exit device bypassed.</li>
              <li><strong>Record the work.</strong> Keep model, function, keying, approval, and maintenance information with the property records.</li>
            </ol>

            <h2>Commercial exit-door lock help near Lillington</h2>
            <p>A Good Locksmith can identify supported mechanical lock and cylinder types, evaluate key-control needs, check basic door and hardware operation, and explain when the opening needs a different lock function or coordination with a commercial door specialist or local code official. A site-specific code determination belongs to the authority having jurisdiction.</p>

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
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Current and Past Codes</a></li>
              <li><a href="https://codes.iccsafe.org/s/NCBC2018P2/chapter-10-means-of-egress/NCBC2018P2-Ch10-Sec1010.1.9.3" target="_blank" rel="noreferrer">2018 North Carolina Building Code: Section 1010.1.9.3, Locks and Latches</a></li>
              <li><a href="https://codes.iccsafe.org/content/IBC2018P4/chapter-10-means-of-egress" target="_blank" rel="noreferrer">International Code Council: 2018 IBC Chapter 10, Means of Egress</a></li>
              <li><a href="https://www.ada.gov/regs2010/2010ADAStandards/" target="_blank" rel="noreferrer">U.S. Department of Justice: 2010 ADA Standards for Accessible Design</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/mechanical-locks.html" target="_blank" rel="noreferrer">Schlage Commercial: Mechanical Locks and Single-Motion Egress</a></li>
            </ul>

            <section className="article-cta">
              <span>Secure the business without blocking the exit</span>
              <h2>Considering another lock on a commercial door?</h2>
              <p>Call A Good Locksmith with the property address, authorized contact, complete door photos, existing hardware, and the security problem you need to solve.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 20, 2026. This article provides general information, not legal advice, a fire-code or building-code determination, or approval for a particular alteration. Requirements depend on the adopted code, occupancy, occupant load, door location, fire rating, hardware listing, approved plans, accessibility, and the authority having jurisdiction. Code editions and local interpretations can change.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Start with egress</h2>
              <p>Confirm how people must leave before selecting another locking device.</p>
            </div>
            <div className="sidebar-card">
              <h2>Identify the opening</h2>
              <p>Panic hardware, fire labels, access control, and door function all affect the answer.</p>
            </div>
            <div className="sidebar-card">
              <h2>Solve the real weakness</h2>
              <p>Key control, trim, alignment, or the lock function may need attention—not another bolt.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default BusinessExitDoorDeadboltGuidePost;
