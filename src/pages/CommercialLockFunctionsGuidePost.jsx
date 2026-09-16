import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const CommercialLockFunctionsGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Commercial levers can look nearly identical while behaving very differently. The correct function depends on who should enter, how the outside lever should behave, and how people must exit.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Choose the behavior before the finish:</strong> “Function” describes what the inside and outside levers, key, button, latch, and sometimes deadbolt do. Grade, keyway, finish, and lever style are separate decisions.
            </div>

            <p>A satin-chrome lever for a stockroom can look almost the same as one for a classroom or office. Install the wrong function and a door may stay unlocked when it should relock, lock staff out unexpectedly, or create an operating pattern that does not fit the space.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to matching locks with real door use. This guide helps businesses, churches, offices, landlords, and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe the behavior they need before choosing commercial hardware.</p>

            <h2>What does “lock function” mean?</h2>
            <p>A function is the operating logic built into a lockset. It answers practical questions: Is the outside lever always active, always locked, or switchable? Does a key only open the door for that moment, or does it leave the outside lever unlocked? Can an inside button change the outside lever’s state? Is the inside lever always free for immediate exit?</p>

            <p>Function does not tell you whether the lock is cylindrical or mortise, Grade 1 or Grade 2, compatible with an existing master-key system, fire listed for the opening, or suitable for the door preparation. Those requirements must be evaluated separately.</p>

            <h2>Passage function: no locking control</h2>
            <p>A passage lock has active levers on both sides and no key or privacy button. Either lever retracts the latch. It can fit interior circulation doors where locking is neither needed nor intended.</p>

            <p>Passage hardware is not a substitute for a keyed perimeter or restricted-area lock. It may look like the keyed levers elsewhere in the building, so confirm the function rather than ordering by appearance.</p>

            <h2>Privacy function: temporary privacy, not perimeter security</h2>
            <p>Privacy hardware commonly uses an inside button or turn and an outside emergency-release feature. It is intended for spaces such as certain restrooms or private rooms, depending on the exact product and applicable requirements. It is not the same as a keyed security function.</p>

            <p>Do not select a residential-style privacy function for an exterior business door, stockroom, records room, or other area that needs managed key access. The release method, indicator, emergency access, and whether the door automatically unlocks when closed vary by model.</p>

            <h2>Entrance or office function: convenient, but verify the button behavior</h2>
            <p>An entrance/office lock typically has a key cylinder outside and a button or turn control inside. That inside control can make the outside lever inoperative. Depending on the exact subfunction, using the key or inside lever may release the button, or a push-and-turn setting may keep the outside lever locked until deliberately reset.</p>

            <p>This can work for an office that needs an occupant-controlled lock, but it also creates opportunities for accidental lockouts if staff do not understand the button state. “Office function” is not one universal behavior across every manufacturer and series. Check the model’s function description before installation.</p>

            <h2>Classroom function: the key changes the outside lever’s state</h2>
            <p>On a common classroom function, a key in the outside cylinder locks or unlocks the outside lever. The lever then remains in that selected state after the key is removed. The inside lever remains free for immediate egress.</p>

            <p>Despite its name, the function can be useful beyond schools where authorized personnel should deliberately change a door between locked and unlocked operation. However, a traditional classroom function usually requires going to the corridor side to change the state. That is different from a classroom-security function, which may provide a keyed cylinder on the inside for changing the outside lever’s state without opening the door.</p>

            <p>School and emergency-lockdown decisions require a property-specific plan involving the authority having jurisdiction, school policy, and qualified door-hardware professionals. A product name alone does not establish that an opening meets those requirements.</p>

            <h2>Storeroom function: outside stays locked</h2>
            <p>With a common storeroom function, the outside lever is always inoperative. The key retracts the latch for that entry but does not leave the outside lever unlocked. The inside lever stays free for immediate exit.</p>

            <p>That automatic return to a secured condition can fit supply, inventory, mechanical, and similar controlled rooms. It also means every authorized entry from the outside normally requires a key. If staff need the door to remain unlocked during business hours, a standard storeroom function may create daily frustration or unsafe workarounds such as taping the latch.</p>

            <p>Schlage’s current <a href="https://us.allegion.com/en/resources/education/leading-the-industry/back-to-basics/lock-functions.html" target="_blank" rel="noreferrer">lock-functions lesson</a> and <a href="https://commercial.schlage.com/content/dam/allegion-us-2/web-files/schlage/information-documents/Schlage_ALX_Series_Cut_Sheet_113327.pdf" target="_blank" rel="noreferrer">ALX commercial lock guide</a> illustrate these distinctions and repeatedly preserve a free inside lever for immediate egress. Other brands use their own model numbers, so specify the desired operation rather than assuming one brand’s code applies to another.</p>

            <h2>Exit-only and dummy trim have narrower jobs</h2>
            <p>An exit lock may have a blank plate or no operating trim outside and an active lever inside. It is meant for a door where entry from that side is not provided. Dummy trim is fixed hardware with no latch mechanism; it serves as a pull or matching inactive trim.</p>

            <p>Neither should be confused with panic or fire-exit hardware. Occupancy, door use, and code requirements may call for an exit device rather than a cylindrical or mortise lever lock. Review our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic hardware and commercial exit-door checklist</Link> before changing hardware on a required exit.</p>

            <h2>Why “storeroom” and “classroom” are not security grades</h2>
            <p>Function names describe operation. They do not rank resistance to wear or attack. ANSI/BHMA grade, product certification, latch construction, cylinder choice, key control, door and frame condition, and correct installation all affect performance.</p>

            <p>The Builders Hardware Manufacturers Association explains that the <a href="https://buildershardware.com/ANSI-BHMA-Standards" target="_blank" rel="noreferrer">ANSI/BHMA A156 standards</a> establish performance criteria for locks and other builders hardware, with product grades defined in the applicable standards. A Grade 1 storeroom lock and a Grade 2 storeroom lock share a general operating concept but are not the same product.</p>

            <h2>Master keying does not change the lock function</h2>
            <p>A master-key hierarchy determines which authorized keys operate which cylinders. It does not turn a storeroom lock into a classroom lock or an office lock into passage hardware. The mechanical function remains the same after the cylinder is keyed into a compatible system.</p>

            <p>Plan both layers: who should have a working key, and what the lock should do after that key is removed. Our <Link to="/blog/commercial-master-key-system-guide-nc">commercial master-key planning guide</Link> explains change keys, master keys, access groups, and lost-key response. If staff access is changing, use the <Link to="/blog/rekey-business-locks-after-employee-leaves-nc">employee key-offboarding checklist</Link> as well.</p>

            <h2>Safe exit comes before convenience</h2>
            <p>OSHA’s <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">exit-route requirements</a> state that employees must be able to open an exit-route door from the inside at all times without keys, tools, or special knowledge. Do not add a double-sided keyed lock, surface bolt, padlock, or improvised restraint to an occupied exit simply because it seems more secure.</p>

            <p>Fire-rated doors and required exits can have additional listing, latching, closing, swing, and hardware requirements. The North Carolina Office of State Fire Marshal publishes the <a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">currently effective state codes</a>; the authority having jurisdiction determines what applies to the actual opening.</p>

            <h2>Accessibility involves the whole opening</h2>
            <p>The <a href="https://www.access-board.gov/ada/guides/chapter-4-entrances-doors-and-gates/" target="_blank" rel="noreferrer">U.S. Access Board’s door guidance</a> explains that hardware on accessible doors must allow one-hand operation without tight grasping, pinching, or twisting of the wrist and must meet applicable operating-force and mounting-height requirements. Lever-shaped hardware can help, but a lever alone does not make an opening compliant.</p>

            <p>Door clear width, maneuvering space, thresholds, closer settings, opening force, and the latch all matter. Confirm which accessibility requirements apply to the property rather than relying only on a product label.</p>

            <h2>Questions to answer before ordering a commercial lock</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Should the outside lever be always active, always locked, or switchable between states?</li>
              <li><FaCheckCircle /> If switchable, should a key outside or a control inside change that state?</li>
              <li><FaCheckCircle /> Should the key provide one-time entry or leave the outside lever unlocked?</li>
              <li><FaCheckCircle /> Is the door an exterior entrance, required exit, fire-rated opening, restroom, office, classroom, or storage room?</li>
              <li><FaCheckCircle /> Does the door currently have cylindrical, mortise, narrow-stile, or exit-device hardware?</li>
              <li><FaCheckCircle /> Must the new cylinder work within an existing key or master-key system?</li>
              <li><FaCheckCircle /> What are the door thickness, preparation, handing, backset, latch, and strike conditions?</li>
              <li><FaCheckCircle /> Who is authorized to approve the hardware and keying change?</li>
            </ul>

            <h2>Commercial lock installation near Harnett County</h2>
            <p>A Good Locksmith can evaluate supported commercial locks and door hardware, identify the existing function, and explain compatible options based on the behavior the business needs. Service is confirmed for the exact opening, hardware, and location when you call.</p>

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
              <span>Choose the operation your door actually needs.</span>
              <h2>Not sure which commercial lock function fits?</h2>
              <p>Call A Good Locksmith to discuss the door use, existing preparation, key system, and commercial lock options in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 16, 2026. This article provides general commercial lock information, not a product specification or a code, fire-door, accessibility, or school-security determination. Manufacturer functions, door construction, listings, occupancy, policies, and applicable requirements vary. Consult the authority having jurisdiction and qualified professionals for the specific opening.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Common functions</h2>
              <ul>
                <li>Passage</li>
                <li>Privacy</li>
                <li>Entrance or office</li>
                <li>Classroom</li>
                <li>Storeroom</li>
                <li>Exit-only</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need commercial hardware help?</h2>
              <p>Have photos of both sides, the door edge, frame, labels, and existing key ready.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default CommercialLockFunctionsGuidePost;
