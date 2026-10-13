import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorLockBacksetGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Before a knob, lever, deadbolt, or smart lock can fit an existing door, its latch or bolt must reach the center of the prepared hole. That edge-to-center measurement is the backset.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The basic measurement:</strong> door-lock backset is measured from the door edge to the centerline of the main face bore or cylinder. On many residential doors it is 2⅜ inches or 2¾ inches, but the existing door and the exact replacement hardware must both be checked.
            </div>

            <p>A replacement lock can look right in the package and still sit in the wrong place if its latch is set to a different backset. The spindle, tailpiece, or mounting posts may not line up with the latch, and the trim may not assemble correctly. On an unprepared door, choosing the wrong centerline before drilling creates a harder problem.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the complete opening before installing hardware. This guide helps homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County understand the measurement without assuming every door is standard.</p>

            <h2>What is door-lock backset?</h2>
            <p>Schlage defines backset as the distance from the edge of the door to the centerline of the prepared cross-bore hole used for most locks. BHMA's terminology similarly measures from the door edge to the cylinder centerline at the center of the door thickness.</p>

            <p>The cross bore is the larger hole through the face of a typical bored door. The smaller edge bore carries the latch or deadbolt from the door edge into that cross bore. Backset tells you how long that latch or bolt assembly must be so its hub lines up with the lock's operating parts.</p>

            <div className="article-callout">
              <strong>Backset is not door thickness:</strong> backset runs inward from the door edge. Door thickness is measured from one face of the door to the other. Both measurements—and the bore diameters—can affect compatibility.
            </div>

            <h2>How do you measure backset on an existing door?</h2>
            <ol>
              <li>Keep the door open and supported so it cannot close while you measure.</li>
              <li>Measure from the door's finished edge—not the frame or strike—to the center of the knob, lever, deadbolt cylinder, or main round bore.</li>
              <li>Record the measurement rather than estimating from appearance.</li>
              <li>Also note door thickness, face-bore diameter, edge-bore diameter, latch faceplate shape, and the spacing between separate lock holes.</li>
            </ol>

            <p>Measure to the center, not to the nearest edge of the face bore. If the hardware covers the hole and the center is unclear, a locksmith can identify the preparation after removing the appropriate trim. Do not dismantle unfamiliar commercial, interconnected, electrified, or fire-door hardware merely to obtain a measurement.</p>

            <h2>Are 2⅜ inches and 2¾ inches the only backsets?</h2>
            <p>No. They are common residential dimensions, and current Schlage and Kwikset documentation shows many adjustable latches designed for both. Some products, doors, and older preparations use other dimensions. Schlage, for example, lists a 5-inch backset option for certain mechanical products.</p>

            <p>That is why “standard door” is not a measurement. Verify the door and then check the installation instructions or technical sheet for the exact model being considered. Commercial mortise locks, narrow-stile locks, interconnected locks, multipoint systems, and specialty hardware use different preparations and terminology.</p>

            <h2>What happens when the latch is set to the wrong backset?</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The latch hub does not align with the center of the face bore</li>
              <li><FaCheckCircle aria-hidden="true" /> The spindle or deadbolt tailpiece will not pass through or engage normally</li>
              <li><FaCheckCircle aria-hidden="true" /> Exterior and interior trim cannot seat flat or draw together correctly</li>
              <li><FaCheckCircle aria-hidden="true" /> A motorized deadbolt may bind because the assembly is installed out of position</li>
              <li><FaCheckCircle aria-hidden="true" /> Improvised enlargement can weaken or visibly damage the door</li>
            </ul>

            <p>An adjustable latch must be set according to its manufacturer instructions before the lock is assembled. Do not assume every latch adjusts the same way, and do not force the two halves of a lock together with the mounting screws.</p>

            <h2>Why backset matters when buying a smart lock</h2>
            <p>A smart lock still relies on a correctly prepared mechanical opening. The backset must match, the bore dimensions and door thickness must fall within the model's stated range, and the bolt must extend and retract freely. Connectivity features cannot correct a latch that is the wrong length or a deadbolt that rubs its strike.</p>

            <p>Before purchasing, use the model-specific template and specifications. Our guide to <Link to="/blog/will-smart-lock-fit-existing-door-nc">smart-lock compatibility</Link> covers door thickness, bore sizes, handing, clearance, and alignment in addition to backset. If batteries drain quickly after installation, mechanical resistance can also be relevant; see the <Link to="/blog/smart-lock-batteries-draining-fast-nc">smart-lock battery guide</Link>.</p>

            <h2>Can a locksmith change the backset?</h2>
            <p>If the existing preparation is correct and the replacement latch is adjustable or available in the needed length, installation may be straightforward. Changing the actual location of a bore is different: it can require new door preparation, covering an old hole, reinforcing damaged material, or selecting different hardware.</p>

            <p>The appropriate plan depends on the door material, existing holes, edge condition, lock function, trim footprint, security needs, fire labeling, and manufacturer instructions. A door that has no existing deadbolt requires more than choosing a number; our <Link to="/blog/add-deadbolt-to-door-no-existing-hole-nc">deadbolt installation guide</Link> explains the broader preparation and strike considerations.</p>

            <h2>What to check before ordering replacement hardware</h2>
            <ul>
              <li>Backset, measured from the finished door edge to the bore centerline</li>
              <li>Door thickness and material</li>
              <li>Cross-bore and edge-bore diameters</li>
              <li>Latch faceplate style: square corner, radius corner, or drive-in</li>
              <li>Center-to-center spacing when the door has more than one bore</li>
              <li>Door handing if the chosen hardware is handed</li>
              <li>Lock function, keyway, finish, and any required listing or certification</li>
            </ul>

            <p>Backset answers one compatibility question, not all of them. Our <Link to="/blog/left-right-door-lock-handing-guide-nc">door-handing guide</Link> and <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> can help organize the remaining decisions.</p>

            <p>North Carolina law includes repairing, servicing, adjusting, and installing locks within regulated locksmith services. A Good Locksmith provides authorized residential and commercial lock service under NCLL #3119.</p>

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
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-hardware-terms-and-parts-of-a-door-lock.html" target="_blank" rel="noreferrer">Schlage: Door Hardware Terms and Backset Definition</a></li>
              <li><a href="https://www.kwikset.com/support/answers/how-to-install-a-816-deadbolt" target="_blank" rel="noreferrer">Kwikset: Measuring and Adjusting Deadbolt Backset</a></li>
              <li><a href="https://images.kwikset.com/is/content/Kwikset/Support/Tech%20Docs/5052315%20-%20deadbolt.pdf" target="_blank" rel="noreferrer">Kwikset: Deadbolt Door-Preparation Measurements</a></li>
              <li><a href="https://buildershardware.com/Resources/Guide-to-Builders-Hardware-Terminology/Types-of-Locks" target="_blank" rel="noreferrer">BHMA: Lock-Component Terminology</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina Locksmith Licensing Act, Chapter 74F</a></li>
            </ul>

            <section className="article-cta">
              <span>Measure the opening before choosing the hardware</span>
              <h2>Need help identifying your door's backset?</h2>
              <p>Call A Good Locksmith with the door location, lock type, and photos of both faces and the door edge. Mike can evaluate the preparation and explain which compatible service or hardware makes sense.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 13, 2026. This article provides general door-hardware information, not a drilling template, remote diagnosis, code determination, or product guarantee. Door preparation, hardware dimensions, fire labels, egress requirements, and manufacturer instructions vary. Confirm the exact model and complete opening before drilling or altering a door.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Measure four things</h2>
              <ul>
                <li>Backset</li>
                <li>Door thickness</li>
                <li>Face bore</li>
                <li>Edge bore</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Before you drill</h2>
              <p>Verify the actual door, exact lock model, template, function, and any special requirements for the opening.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorLockBacksetGuidePost;
