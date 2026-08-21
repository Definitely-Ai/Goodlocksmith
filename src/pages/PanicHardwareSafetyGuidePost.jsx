import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const PanicHardwareSafetyGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A commercial exit door has two jobs: help keep the building secure from outside and allow safe, dependable exit from inside. The lock, latch, panic device, closer, hinges, frame, and door all have to work together.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Safety comes before convenience:</strong> OSHA requires employees to be able to open an exit-route door from inside without a key, tool, or special knowledge. Never add a chain, padlock, slide bolt, or improvised device that could prevent emergency exit.
            </div>

            <p>Business owners often notice a commercial exit door only after it starts slamming, dragging, sticking, failing to latch, or refusing to open smoothly. Those symptoms can affect security, accessibility, fire-door performance, and safe egress. They are also rarely solved by changing one part without checking the entire opening.</p>

            <p>With 35 years of locksmithing experience, Mike Galdine approaches panic hardware as a complete-door problem. This guide gives owners and facility managers in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County a practical way to spot trouble and call the right professional.</p>

            <h2>What is panic hardware?</h2>
            <p>Panic hardware—also called an exit device or push bar—is mounted across the egress side of a door. Pressing the bar releases the latch so occupants can leave without searching for a key or operating an unfamiliar lock. Some doors use fire exit hardware, which looks similar but is listed for use on a fire-door assembly and must not be modified or held unlatched in a way that defeats that assembly.</p>

            <p>Not every commercial door is required to have panic hardware. Occupancy type, occupant load, door location, fire rating, and other code conditions matter. The North Carolina Office of State Fire Marshal publishes the state codes and amendments, while the local authority having jurisdiction determines what applies to a particular opening. A locksmith can assess the hardware, but code questions and approvals should be confirmed with the appropriate building or fire official.</p>

            <h2>Why the whole door opening matters</h2>
            <p>An exit device can be in good condition and still perform poorly when the door is out of alignment. A loose hinge, sagging door, damaged frame, shifted strike, worn latch, incorrect closer adjustment, weather pressure, or floor obstruction can keep the latch from engaging or make the bar difficult to operate.</p>

            <p>The reverse is also true: replacing or adjusting the closer will not correct worn internal exit-device parts. A useful inspection follows the force through the entire opening—from the push bar and latch to the strike, hinges, closer, frame, and door position.</p>

            <h2>Warning signs that deserve attention</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> The push bar sticks, binds, or needs repeated force</li>
              <li><FaCheckCircle /> The latch does not release consistently when the bar is pressed</li>
              <li><FaCheckCircle /> The door closes but does not latch securely</li>
              <li><FaCheckCircle /> The door rubs the frame, threshold, or floor</li>
              <li><FaCheckCircle /> The closer lets the door slam or leaves it partly open</li>
              <li><FaCheckCircle /> The device, strike, cover, fasteners, or trim are loose</li>
              <li><FaCheckCircle /> Outside trim no longer locks or unlocks as intended</li>
              <li><FaCheckCircle /> Staff prop the door open because normal operation is difficult</li>
              <li><FaCheckCircle /> A chain, padlock, surface bolt, or other added lock blocks exit</li>
            </ul>

            <h2>What staff can check without altering the hardware</h2>
            <p>During normal occupied hours, a designated employee can visually confirm that the route is clear, the door opens from inside through its normal operation, the bar returns after use, and the door closes and latches. OSHA also requires exit routes to remain free and unobstructed. Boxes, displays, equipment, temporary storage, or furniture should never narrow or block the route.</p>

            <p>Record the date, door location, symptom, and whether the issue is intermittent. That information helps a locksmith reproduce a problem that may change with temperature, wind, traffic, or building pressure. Do not remove covers, adjust fire exit hardware, disconnect alarms, change electrified locking, or defeat a closer unless the work is being handled by a qualified professional within the applicable requirements.</p>

            <div className="article-callout">
              <strong>Do not “secure” an exit from the inside with an extra lock.</strong> OSHA says exit-route doors must open from inside without keys, tools, or special knowledge, and must be free of a device or alarm that could restrict emergency use if it fails.
            </div>

            <h2>Repair, adjustment, or replacement?</h2>
            <p>The correct response depends on the cause. Alignment or strike adjustment may solve a latching problem. Loose fasteners or worn components may be serviceable. Damaged, obsolete, incompatible, or improperly selected hardware may require replacement. Fire-rated openings and electrified devices need special care because the compatibility and listing of the complete assembly matter.</p>

            <p>Before approving work, ask for the diagnosis, proposed correction, hardware identification, and any limits on the repair. If the opening is subject to inspection or approval, confirm whether the local fire marshal, building department, alarm contractor, access-control provider, or door specialist also needs to be involved.</p>

            <h2>Build exit-door checks into routine operations</h2>
            <p>A simple documented check helps a business catch changes before they become emergencies. Include every designated exit, not only the door used by customers. Recheck after deliveries, remodeling, floor work, door painting, access-control changes, severe weather, or any event that changes how the opening moves or latches.</p>

            <p>For broader access planning, read our <Link to="/blog/commercial-master-key-system-guide-nc">commercial master key system guide</Link>. Key control, outside access, and safe egress should be designed together, but an exit door must never sacrifice safe operation from the inside.</p>

            <h2>Commercial panic hardware service in Harnett County</h2>
            <p>A Good Locksmith, LLC provides commercial locksmith service, including panic hardware, master key systems, access control, and high-security locks. Mike can inspect the existing opening, identify the source of a locking or latching problem, and explain appropriate next steps for local businesses across the listed service area.</p>

            <div className="service-area-links">
              <Link to="/Lillington">Lillington</Link>
              <Link to="/Angier">Angier</Link>
              <Link to="/Dunn">Dunn</Link>
              <Link to="/Coats">Coats</Link>
              <Link to="/Erwin">Erwin</Link>
              <Link to="/Sanford">Sanford</Link>
              <Link to="/Fuquay-Varina">Fuquay-Varina</Link>
              <Link to="/Harnett-County">Harnett County</Link>
              <Link to="/Wake-County">Wake County</Link>
            </div>

            <h2>Reliable sources</h2>
            <ul>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA 29 CFR 1910.36: Design and construction requirements for exit routes</a></li>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.37" target="_blank" rel="noreferrer">OSHA 29 CFR 1910.37: Maintenance and operational features for exit routes</a></li>
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal: Current and past state codes</a></li>
              <li><a href="https://buildershardware.com/Certification-Program/Certified-Products-Directory" target="_blank" rel="noreferrer">Builders Hardware Manufacturers Association: Certified Products Directory</a></li>
            </ul>

            <section className="article-cta">
              <span>Keep the opening secure and the exit dependable</span>
              <h2>Does your commercial exit door stick, slam, or fail to latch?</h2>
              <p>Call A Good Locksmith for a professional panic hardware and commercial door assessment backed by 35 years in the trade.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general information based on sources reviewed August 21, 2026. Building, fire, accessibility, and workplace rules depend on the property, occupancy, door, and jurisdiction. Confirm applicable requirements with the authority having jurisdiction.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Exit-door warning signs</h2>
              <ul>
                <li>Push bar sticks</li>
                <li>Door will not latch</li>
                <li>Door drags or slams</li>
                <li>Hardware is loose</li>
                <li>Exit is blocked</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Commercial locksmith service backed by 35 years of experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default PanicHardwareSafetyGuidePost;
