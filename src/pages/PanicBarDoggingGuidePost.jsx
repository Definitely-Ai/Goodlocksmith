import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const PanicBarDoggingGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Dogging holds an exit device's latch retracted so the door can operate as a push/pull opening during appropriate periods. Whether that is allowed depends on the exact device, door, fire rating, and approved hardware configuration.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> a dogged panic device is intentionally held in its unlatched position for free passage. Mechanical dogging is not permitted on fire exit hardware, and no exit device should be taped, tied, wedged, or improvised into that condition.
            </div>

            <p>A business may want a busy entrance to swing freely while it is open, then latch again after hours. That is the purpose behind dogging on compatible panic hardware. It is a normal hardware function in some non-fire-rated applications—not a general permission to defeat every push bar.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to commercial door and panic-hardware service. This guide helps authorized owners and managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County understand the term, recognize the limits, and describe the opening accurately before requesting service.</p>

            <h2>What does “dogging” an exit device mean?</h2>
            <p>In builders-hardware terminology, a dogging mechanism holds the exit device's release bar or push pad in an operated position so the latch bolt stays retracted. The door can then be pushed or pulled open without pressing the bar each time. BHMA describes the result as a push/pull door.</p>

            <p>Dogging does not mean locking the door from the inside. In fact, while the latch remains retracted, that latch is not securing the door against entry. Outside trim, access control, alarms, door position, and other hardware are separate questions. A business should not assume that turning an outside key, changing a lever position, or seeing a locked indicator has relatched a dogged device.</p>

            <h2>Why businesses use dogging</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Reduce repeated latch operation during approved high-traffic periods</li>
              <li><FaCheckCircle aria-hidden="true" /> Allow a compatible entrance to work as a push/pull door while the business is open</li>
              <li><FaCheckCircle aria-hidden="true" /> Coordinate the door's daytime function with an established opening and closing procedure</li>
            </ul>

            <p>Convenience has a tradeoff: a retracted latch cannot hold the door closed. Wind, building pressure, door closer condition, access-control design, and the security plan all matter. Dogging may be inappropriate even on a device that offers the feature if the business needs the door latched during occupied hours.</p>

            <h2>Mechanical dogging and fire exit hardware are different</h2>
            <p>Ordinary panic hardware and fire exit hardware can look similar, but the labels and approved functions are not interchangeable. Allegion explains that panic hardware typically may include dogging, while fire exit hardware is intended for a fire-door assembly and does not incorporate mechanical dogging because the door requires positive latching.</p>

            <p>BHMA's hardware terminology gives the same rule: dogging devices are not permitted on fire exit hardware because fire doors must have an active latch. A fire-rated exit device should therefore never be converted, altered, or mechanically held retracted simply because a similar-looking non-fire device can be dogged.</p>

            <div className="article-callout">
              <strong>Look for the label, not just the shape:</strong> “Panic Hardware” and “Fire Exit Hardware” identify different listed uses. A missing hex opening does not by itself prove a defect, and adding mechanical dogging to a fire-rated device is not an acceptable repair.
            </div>

            <h2>What about electrified latch retraction?</h2>
            <p>An approved electrified system can be different from mechanical dogging. Allegion notes that electric latch-retraction hardware may be used on some fire-door applications when the latch projects automatically upon a fire alarm. The exact device, power supply, fire-alarm interface, listing, wiring, inspection, and authority approval matter.</p>

            <p>This is not a field shortcut. A motor, solenoid, access-control component, or power supply should not be added to a fire-rated opening simply because it can retract a latch. The complete configuration must be designed and installed for that opening, and required relatching must occur under the specified fire-alarm or power conditions.</p>

            <h2>Hex-key, cylinder, and electronic options are model-specific</h2>
            <p>Manufacturers offer different dogging options on compatible non-fire-rated panic devices. Some use a designated hex key; some offer a keyed cylinder option; some support controlled electronic retraction. Von Duprin's current 98/99 Series catalog, for example, lists cylinder dogging as an option that replaces standard hex-key dogging on its panic devices.</p>

            <p>Those names do not create universal parts or procedures. The required key, cylinder, mechanism, indicator, conversion kit, and operating sequence depend on the manufacturer, series, age, and configuration. Before ordering anything, document the device label and model and have the opening evaluated.</p>

            <h2>Do not improvise a dogged-open condition</h2>
            <p>Tape around the push pad, a zip tie through the mechanism, a wedge at the latch, a magnet at the strike, or a removed component can create an unsecured opening and damage the device. On a fire door, holding the latch retracted can defeat the positive-latching function. Improvised methods can also hide a failed return spring, binding mechanism, alignment problem, or incorrect hardware selection.</p>

            <p>If the device will not dog, will not remain dogged, or will not relatch, stop forcing it. The cause may be an unsupported function, a fire-rated model, worn internal components, a damaged dogging assembly, incorrect adjustment, door or strike misalignment, or a problem elsewhere in the opening.</p>

            <h2>Safe egress must still work every time</h2>
            <p>Dogging concerns the latched or unlatched state during normal operation; it never authorizes a barrier to exit. OSHA requires employees to be able to open an exit-route door from inside at all times without keys, tools, or special knowledge. A panic bar that locks only from the outside is permitted, but the exit cannot depend on a separate unlocking step from the egress side.</p>

            <p>When the device is returned to normal latched operation, pressing the bar should still release the latch, the bar should return, and the closer should bring the door back to a secure latch. Our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">commercial panic-hardware safety checklist</Link> covers the complete opening, and the <Link to="/blog/commercial-door-closer-slams-wont-latch-nc">door-closer guide</Link> explains why closing speed and latching are related but separate.</p>

            <h2>A practical opening-and-closing check</h2>
            <ol>
              <li><strong>Identify the door:</strong> record its location, use, fire labels, and whether it is part of a required exit route.</li>
              <li><strong>Identify the device:</strong> photograph the label, manufacturer, series, and any existing dogging or indicator feature without removing covers.</li>
              <li><strong>Confirm the approved function:</strong> use the exact manufacturer's instructions and the property's fire, security, and access-control plan.</li>
              <li><strong>Assign responsibility:</strong> designate trained staff to return approved devices to their normal latched condition and verify the door closes and latches.</li>
              <li><strong>Escalate faults:</strong> do not compensate for sticking, loose, damaged, or unfamiliar hardware with tape, wedges, added locks, or forced operation.</li>
            </ol>

            <h2>Who decides what is permitted in North Carolina?</h2>
            <p>The North Carolina Office of State Fire Marshal publishes the current state codes and amendments. The applicable requirements can depend on the occupancy, occupant load, door location, fire rating, existing-building conditions, and adopted local enforcement. The authority having jurisdiction determines what applies to a particular opening.</p>

            <p>A locksmith can identify and service the hardware, but should not erase the distinction between a hardware diagnosis and a code approval. Fire alarm, access-control, electrical, door, or inspection specialists may also need to be involved when the opening is electrified or part of a rated assembly.</p>

            <h2>Commercial panic-bar service in Harnett County</h2>
            <p>A Good Locksmith provides authorized commercial locksmith and panic-hardware service. Mike can inspect the label and device, determine whether an existing dogging function belongs on that model, diagnose a failure to latch or release, and explain appropriate repair or replacement options.</p>

            <p>North Carolina defines servicing, adjusting, repairing, and installing locks as locksmith services, and state law requires locksmith advertising to include a valid license number. A Good Locksmith identifies its license as NCLL #3119.</p>

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
              <li><a href="https://buildershardware.com/Resources/Guide-to-Builders-Hardware-Terminology/Exit-Devices" target="_blank" rel="noreferrer">Builders Hardware Manufacturers Association: Exit Device Terminology</a></li>
              <li><a href="https://kc.allegion.com/kb/article/what-is-the-difference-between-panic-hardware-and-fire-exit-hardware/" target="_blank" rel="noreferrer">Allegion: Panic Hardware vs. Fire Exit Hardware</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-files/von-duprin-/information-documents/Von_Duprin_98.99_Series_Catalog_106590.pdf" target="_blank" rel="noreferrer">Von Duprin: 98/99 Series Exit Device Catalog</a></li>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA 29 CFR 1910.36: Exit Route Design and Construction</a></li>
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Current and Past State Codes</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_74F/GS_74F-12.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-12: License Number in Advertising</a></li>
            </ul>

            <section className="article-cta">
              <span>Keep the daytime function intentional and the exit dependable</span>
              <h2>Need a panic bar identified, repaired, or returned to proper operation?</h2>
              <p>Call A Good Locksmith with the door location, device label, and symptoms. Mike can evaluate the opening and explain the appropriate service options.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 23, 2026. This article provides general commercial-hardware information, not operating instructions for an unidentified device, permission to alter an exit, a fire-door evaluation, or a code decision. Verify the exact labels, model, manufacturer documentation, opening, approved configuration, and requirements with qualified professionals and the authority having jurisdiction.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before using dogging</h2>
              <ul>
                <li>Identify the exact device</li>
                <li>Check the fire label</li>
                <li>Confirm the approved function</li>
                <li>Plan daily relatching</li>
                <li>Never improvise</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Commercial panic-hardware service backed by 35 years of locksmith experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default PanicBarDoggingGuidePost;
