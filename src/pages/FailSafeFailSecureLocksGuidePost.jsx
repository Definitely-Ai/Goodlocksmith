import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const FailSafeFailSecureLocksGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Fail safe means the secure side unlocks when power is removed. Fail secure means the secure side stays locked when power is removed. That simple definition does not decide the right hardware—or replace a complete egress and fire-door review.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The safest question is not just “locked or unlocked?”</strong> Ask what happens on the secure side, what a person on the egress side must do to leave, whether the opening is fire-rated, and which systems release or retain the lock during an outage or alarm.
            </div>

            <p>Electronic door hardware appears in offices, stores, schools, medical facilities, warehouses, and other commercial buildings. A card reader, keypad, intercom, time schedule, or remote-release button may control entry, but the lock and door still have mechanical jobs to perform.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the complete opening—not merely the credential reader. This guide gives businesses and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County a useful vocabulary for planning service.</p>

            <h2>Fail safe and fail secure describe the secure side</h2>
            <p>Allegion defines the two terms by what happens when electrical power is removed from the controlled hardware:</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Fail safe:</strong> power off means the secure side is unlocked</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Fail secure:</strong> power off means the secure side remains locked</li>
            </ul>

            <p>The “secure side” is normally the entry side—the side where a credential, key, or authorized release controls access. These terms do not automatically describe the inside lever, panic bar, emergency-exit path, fire-alarm response, or every component in an access-control system.</p>

            <h2>Fail secure does not automatically mean trapped inside</h2>
            <p>Many electric strikes, electrified locksets, and electrified panic-hardware trims can remain secure against outside entry while the inside lever or exit device still allows free egress. The powered component controls the entry side; the mechanical egress hardware performs separately.</p>

            <p>OSHA requires employees to be able to open an exit-route door from the inside at all times without keys, tools, or special knowledge. It also says an exit-route door must be free of a device or alarm that could restrict emergency use if it fails. That is why a power-loss label by itself is never enough to approve an opening.</p>

            <p>Our guide to <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic hardware and exit-door safety</Link> explains the role of the push pad or crossbar. The guide to <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">commercial lock functions</Link> helps distinguish controlled entry from the door’s mechanical function.</p>

            <h2>The hardware type changes the answer</h2>
            <p>An <strong>electric strike</strong> replaces or modifies the strike-side component in the frame. It works with a compatible latch or exit device. Depending on its listed configuration, it may be fail safe or fail secure; the lockset or panic hardware still needs to provide the required mechanical operation.</p>

            <p>An <strong>electromechanical lockset</strong> places the powered function in the lock itself. Allegion’s current service literature identifies electrically locked models that unlock upon power failure and electrically unlocked models that remain locked on the secure side when power fails. Exact wiring, function, voltage, and model matter.</p>

            <p>An <strong>electromagnetic lock</strong> relies on powered magnetic force and is fail safe: removing power removes the bond. Unlike a typical lockset with mechanical free egress, a maglock requires a compliant release arrangement. Allegion notes that the required release method can include door-mounted hardware or, for sensor-released systems, additional release on push-button operation, alarm-system activation, and power loss.</p>

            <p>Do not choose among these products from the reader appearance alone. Photograph both sides of the door, the door edge, frame, closer, hinges or pivots, lock or exit device, power supply, and readable labels. Our <Link to="/blog/mortise-lock-vs-cylindrical-commercial-door-nc">mortise-versus-cylindrical guide</Link> explains why similar-looking levers may hide different door preparation.</p>

            <h2>Fire doors and stair re-entry need special attention</h2>
            <p>A fire door must close and latch as its listing and adopted code require. Allegion explains that fail-safe electric strikes are not used for stairwell re-entry because fire-door assemblies require positive latching; fail-secure strikes are used for that condition. By contrast, an electrified lock or trim may unlock the stair side when power is removed so occupants can leave the stair and seek another exit where re-entry is required.</p>

            <p>Those examples show why “make everything fail safe” and “make everything fail secure” are both incomplete approaches. Door location, occupancy, fire rating, stair function, adopted code, product listing, and the approved life-safety sequence all affect the design.</p>

            <p>North Carolina OSFM publishes the state’s current and past building-code information. For a new or altered commercial access-control opening, confirm the current requirements with the applicable authority having jurisdiction and the other qualified trades involved. A locksmith should not guess at alarm integration, electrical work, or approval requirements outside the authorized scope.</p>

            <h2>Accessibility is part of the complete opening</h2>
            <p>The U.S. Access Board states that accessible door hardware must allow one-hand operation without tight grasping, pinching, or twisting of the wrist, and its operating parts generally must be mounted within the specified reach range. Adding electronic control does not remove those hardware obligations.</p>

            <p>A release button, lever, panic device, reader, automatic operator, and door closer can interact. The opening should be evaluated as a system so the door can be entered by authorized users, exited as required, positively latched where necessary, and operated accessibly.</p>

            <h2>What to document before requesting service</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Door location, normal use, and which side is the secure side</li>
              <li><FaCheckCircle aria-hidden="true" /> What must happen to entry and egress during a power failure</li>
              <li><FaCheckCircle aria-hidden="true" /> Existing lock, strike, exit device, closer, reader, and power-supply labels</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the door or frame bears a fire-rating label</li>
              <li><FaCheckCircle aria-hidden="true" /> Current key override, credential, request-to-exit, and alarm-release behavior</li>
              <li><FaCheckCircle aria-hidden="true" /> Any approved plans, inspection notes, and authority requirements for the opening</li>
            </ul>

            <p>Test planned behavior with authorized personnel; do not create a real outage or disable life-safety equipment as an informal experiment. A documented functional test should cover normal access, mechanical exit, loss of power, restoration of power, and every required alarm or release input.</p>

            <p>North Carolina’s <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">Locksmith Licensing Act</a> includes servicing and installing mechanical or electronic locking devices, access-control devices, and egress-control devices within locksmith services. A Good Locksmith identifies its license as NCLL #3119.</p>

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
              <li><a href="https://us.allegion.com/en/resources/education/leading-the-industry/decoded/fail-safe-vs-fail-secure.html" target="_blank" rel="noreferrer">Allegion: Fail Safe vs. Fail Secure—When and Where?</a></li>
              <li><a href="https://us.allegion.com/en/resources/education/leading-the-industry/101-articles/door-hardware-101.html" target="_blank" rel="noreferrer">Allegion: Door Hardware 101—Mechanical and Electrified Hardware</a></li>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA 29 CFR 1910.36: Exit-Route Design and Construction</a></li>
              <li><a href="https://www.access-board.gov/ada/guides/chapter-4-entrances-doors-and-gates/" target="_blank" rel="noreferrer">U.S. Access Board: Entrances, Doors, and Gates</a></li>
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Current and Past Codes</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Statutes Chapter 74F: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Plan the whole opening before choosing the power-loss mode</span>
              <h2>Need help evaluating an electronic commercial lock?</h2>
              <p>Call A Good Locksmith with the door location, photos, hardware labels, current behavior, and access goal. Mike can evaluate supported lock and door hardware and help identify when the project also requires the fire-alarm, electrical, access-control, or code professionals responsible for the complete system.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 7, 2026. This article provides general door-hardware information, not a code determination, system design, inspection approval, or model-specific wiring instruction. Requirements and supported configurations depend on the exact opening, occupancy, fire rating, adopted codes, product listings, approved plans, manufacturer instructions, and authority having jurisdiction.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Power removed</h2>
              <ul>
                <li>Fail safe: secure side unlocks</li>
                <li>Fail secure: secure side stays locked</li>
                <li>Egress: evaluate separately</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Bring the whole-opening details</h2>
              <p>Door location, hardware photos, labels, fire rating, power supply, normal use, and required outage behavior all matter.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default FailSafeFailSecureLocksGuidePost;
