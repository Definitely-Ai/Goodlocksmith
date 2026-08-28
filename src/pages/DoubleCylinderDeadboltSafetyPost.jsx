import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoubleCylinderDeadboltSafetyPost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A deadbolt keyed on both sides may prevent someone from breaking nearby glass and turning an interior thumbturn—but requiring a key to get out can create a serious emergency-exit problem.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The key question is not only “Will it fit?”</strong> Before installing a double-cylinder deadbolt, determine whether the door must allow exit from inside without a key and whether the hardware is appropriate for the property, occupants, and applicable code.
            </div>

            <p>Homeowners often consider a double-cylinder deadbolt when an exterior door has glass close enough to the lock for a person to reach the inside hardware after breaking the glass. The idea addresses one access concern, but it introduces another: anyone inside needs the correct key to unlock that deadbolt.</p>
            <p>With 35 years in locksmithing, Mike Galdine evaluates the entire opening and the way people actually use it. This guide is for homes and properties in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County.</p>

            <h2>Single-cylinder and double-cylinder deadbolts are different</h2>
            <p>A <strong>single-cylinder deadbolt</strong> normally uses a key on the exterior and a thumbturn on the interior. An occupant can retract it from inside without finding a key.</p>
            <p>A <strong>double-cylinder deadbolt</strong>, sometimes called a keyed-both-sides deadbolt, uses a key cylinder on both the exterior and interior. <a href="https://www.schlage.com/en/blog/home_security/deadbolt-lock.html" target="_blank" rel="noreferrer">Schlage’s current deadbolt guide</a> describes this design as an option often considered for doors with windows because reaching through broken glass does not provide a thumbturn to rotate.</p>
            <p>That product feature does not establish that the lock is allowed or appropriate on a particular door. The inside key requirement must be considered against safe egress, local code, occupancy, lease terms, and the needs of everyone who may be inside.</p>

            <h2>What North Carolina’s current residential code says</h2>
            <p>As of August 28, 2026, the <a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina Office of State Fire Marshal identifies the 2018 North Carolina codes as the currently effective code suite</a>. Section R311.2 of the residential code requires at least one exterior egress door for each dwelling unit and says that required door must be readily openable from inside without a key or special knowledge or effort.</p>
            <p>That language makes a double-cylinder deadbolt a poor fit for the dwelling’s required egress door. It does not mean every exterior door, occupancy, alteration, or existing condition has the same answer. Rental properties, multifamily buildings, businesses, fire-rated openings, and doors serving other occupancies can be governed by additional requirements.</p>

            <div className="article-callout">
              <strong>Do not treat this article as a code approval:</strong> The local authority having jurisdiction decides code compliance. Confirm the specific door and proposed hardware with the appropriate building or fire official when requirements are uncertain.
            </div>

            <h2>Why “we keep the key beside the door” is not a complete solution</h2>
            <p>A key can be removed, misplaced, borrowed, dropped, or difficult to find in smoke or darkness. A guest, child, caregiver, tenant, or first-time visitor may not know where it is. Leaving the key inserted may also undermine the reach-through-security reason for choosing a double-cylinder lock.</p>
            <p>The U.S. Fire Administration recommends including every door and window in a practiced home escape plan, finding two ways out of each room, and keeping escape paths unblocked. <a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/" target="_blank" rel="noreferrer">Its current home fire escape guidance</a> reinforces why exit hardware should work predictably for the people relying on it.</p>

            <h2>Questions to answer before changing the lock</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Is this the dwelling’s required exterior egress door?</li>
              <li><FaCheckCircle /> Is the property owner-occupied, rented, multifamily, or commercial?</li>
              <li><FaCheckCircle /> Can every occupant unlock and open the door quickly without searching for a key?</li>
              <li><FaCheckCircle /> Does the door serve a bedroom, common path, or other emergency-escape route?</li>
              <li><FaCheckCircle /> Is the existing door, frame, glass, strike, and deadbolt in sound condition?</li>
              <li><FaCheckCircle /> Would another code-compliant lock and door-security approach address the actual risk?</li>
              <li><FaCheckCircle /> Has the property owner or local official approved the proposed change where required?</li>
            </ul>

            <h2>Look beyond the cylinder count</h2>
            <p>Whether a deadbolt has one cylinder or two does not tell you the strength of the complete opening. Door construction, glass type and location, strike attachment, frame condition, hinges, bolt projection, installation, key control, and independently certified hardware all matter.</p>
            <p>Use our <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link> to review the lock, strike, frame, hinges, and other exterior openings together. Our <Link to="/blog/high-security-locks-key-control-guide-nc">high-security lock buyer’s guide</Link> explains why certification and key control deserve attention instead of relying only on a product label.</p>

            <h2>When professional evaluation is especially important</h2>
            <p>Have the opening evaluated before changing hardware when the door contains or sits beside glass, the deadbolt does not fully extend, the frame is damaged, the property is rented, the door is fire-rated, or the opening may be part of a required exit. Commercial and multifamily doors should not be altered as though they were ordinary single-family residential doors.</p>
            <p>A Good Locksmith can inspect compatible lock hardware, explain single- and double-cylinder operation, install an appropriate deadbolt, and identify when the question needs review by the property owner or code official. If the existing bolt binds or requires the door to be pushed, see our guide to <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt and strike alignment</Link>.</p>

            <h2>Deadbolt installation in Harnett County and nearby communities</h2>
            <p>Describe the door, the location of any glass, and how the opening is used when calling. A clear photograph of the door and interior hardware can help with initial identification, but do not include readable key codes or close-up images of the working key cuts.</p>

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

            <h2>Sources reviewed</h2>
            <ul className="article-sources">
              <li><a href="https://www.ncosfm.gov/codes/codes-current-and-past" target="_blank" rel="noreferrer">North Carolina OSFM: Current and Past Codes</a></li>
              <li><a href="https://codes.iccsafe.org/s/NCRC2018/chapter-3-building-planning/NCRC2018-Pt03-Ch03-SecR311.2" target="_blank" rel="noreferrer">2018 North Carolina Residential Code, Section R311.2</a></li>
              <li><a href="https://www.schlage.com/en/blog/home_security/deadbolt-lock.html" target="_blank" rel="noreferrer">Schlage: Types of Deadbolt Locks</a></li>
              <li><a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/" target="_blank" rel="noreferrer">U.S. Fire Administration: Home Fire Escape Plans</a></li>
            </ul>

            <section className="article-cta">
              <span>Choose security hardware without compromising safe exit</span>
              <h2>Considering a different deadbolt for a door with glass?</h2>
              <p>Call A Good Locksmith for a professional lock and door evaluation in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general lock and life-safety information based on sources reviewed August 28, 2026. It is not a code determination or legal advice. Requirements depend on the property, occupancy, door, jurisdiction, and scope of work; consult the local authority having jurisdiction when needed.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before choosing</h2>
              <ul>
                <li>Identify required exits</li>
                <li>Consider every occupant</li>
                <li>Check door and glass</li>
                <li>Confirm applicable code</li>
                <li>Inspect the full opening</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need a deadbolt evaluated?</h2>
              <p>Choose hardware that fits the door, the property, and safe operation.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoubleCylinderDeadboltSafetyPost;
