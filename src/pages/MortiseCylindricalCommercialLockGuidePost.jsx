import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const MortiseCylindricalCommercialLockGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Two commercial lever locks can look nearly identical from the face of the door while using different internal chassis, door preparation, cylinders, latches, and replacement parts.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Quick identification:</strong> a mortise lock has a substantial lock body fitted into a pocket in the door edge, usually behind a long edge plate. A cylindrical lock—often called a bored lock—typically passes through a round cross-bore with a separate latch extending through the door edge. Trim alone is not enough to confirm the type.
            </div>

            <p>When a business door lever sags, a key stops operating normally, or a latch will not secure, the first useful question is not simply “What brand is it?” It is “What type of lock and door preparation are already here?” That answer affects service parts, lock functions, cylinders, fire-door considerations, access-control compatibility, and whether a proposed replacement will fit.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to identifying commercial openings before parts are ordered or hardware is removed. This guide helps businesses, churches, offices, schools, landlords, and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe what they have more accurately.</p>

            <h2>What is a cylindrical commercial lock?</h2>
            <p>A cylindrical lock uses a chassis installed through a bored opening across the door. Allegion describes a cylindrical lock as a bored lockset whose latch or locking mechanism is contained in the portion installed through the cross-bore. The latch projects through a smaller preparation in the edge of the door.</p>

            <p>Common visual clues include a round rose or escutcheon behind each lever, a relatively short latch faceplate on the door edge, and through-bolted trim centered around the main bore. Those clues are helpful, but decorative plates, retrofit hardware, and electronic trim can hide the preparation.</p>

            <h2>What is a mortise commercial lock?</h2>
            <p>The word <em>mortise</em> refers to the pocket cut into the edge of the door for the lock body. Schlage’s commercial education material notes that mortise preparation is more involved than cylindrical or tubular preparation because it combines the mortise pocket with through-cuts for levers, cylinders, thumbturns, or other components.</p>

            <p>A mortise opening often shows a longer rectangular edge plate and may combine the latch, auxiliary deadlatch, and sometimes a deadbolt within one lock case. A separate threaded mortise cylinder may appear above the lever, depending on the function and trim. The internal case and exact function still cannot be confirmed safely from one exterior photo.</p>

            <h2>Why the distinction matters before repair or replacement</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door preparation:</strong> a mortise pocket and a cylindrical cross-bore are different openings in the door</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Replacement parts:</strong> chassis, latches, cylinders, spindles, levers, trim, and fasteners may not interchange</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Lock function:</strong> office, storeroom, classroom, passage, privacy, and other functions behave differently</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door listing:</strong> fire-rated and labeled openings require compatible hardware and proper preparation</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Access control:</strong> electrified locks, readers, strikes, request-to-exit functions, and wiring must work as a system</li>
            </ul>

            <p>A cylindrical lock is not a drop-in replacement for a mortise lock, or vice versa. Conversion may involve approved filler plates, new reinforcement, fresh door preparation, changes to the frame or strike, and review of the opening’s rating and function. Sometimes repairing or replacing like-for-like is the most sensible route; sometimes a properly planned conversion is appropriate. The existing condition decides.</p>

            <h2>Mortise does not automatically mean “better” for every door</h2>
            <p>Allegion’s Door Hardware 101 describes mortise locks as stronger and heavier-duty than cylindrical locks and notes their broad choices in function, trim, keying, and finish. That does not make every mortise product superior to every cylindrical product. Product grade, construction, installation, door condition, cycle demand, intended use, maintenance, and the complete opening all matter.</p>

            <p>BHMA maintains separate performance standards: ANSI/BHMA A156.13 covers mortise locks and latches, while ANSI/BHMA A156.2 covers bored and preassembled locks and latches. Each standard includes categories such as operational, strength, security, cycle, and finish testing. Compare the actual certified product and application rather than judging from the shape of the trim.</p>

            <h2>The lock type and the lock function are separate questions</h2>
            <p>“Mortise” and “cylindrical” describe the chassis and door preparation. “Storeroom,” “office,” “classroom,” “passage,” and “privacy” describe how a lock is intended to operate. Both mortise and cylindrical product families can be available in multiple functions.</p>

            <p>A business should identify who may enter, how the outside lever behaves, whether the inside lever must always allow exit, whether a key or credential changes the state, and how the door should relock. Our <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">commercial lock-function guide</Link> explains those operating differences.</p>

            <h2>Do not overlook the latch, strike, hinges, and closer</h2>
            <p>A lock chassis can be correctly identified while the reported problem comes from another part of the opening. A loose hinge, door sag, failed closer, shifted frame, damaged strike, worn latch, weather pressure, or improper adjustment can keep the door from closing and latching.</p>

            <p>If the door closes but can be pushed open, review our <Link to="/blog/door-latches-but-can-be-pushed-open-nc">latch-and-strike security guide</Link>. If it slams, creeps, or stops short, see the <Link to="/blog/commercial-door-closer-slams-wont-latch-nc">commercial door-closer guide</Link>. Replacing the lock without diagnosing the whole opening can leave the original symptom in place.</p>

            <h2>Exit operation must remain available</h2>
            <p>OSHA requires employees to be able to open an exit-route door from inside without keys, tools, or special knowledge. Do not add a padlock, chain, double-cylinder arrangement, surface bolt, or improvised device to compensate for a failed commercial lock on a required exit.</p>

            <p>A mortise or cylindrical lock on an egress door must have the correct function and operate with the rest of the door hardware. Occupancy, fire rating, door swing, local code, and the authority having jurisdiction may impose additional requirements. Our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic-hardware and exit-door checklist</Link> covers the broader opening.</p>

            <h2>What to photograph and report before a service call</h2>
            <ul>
              <li>The full door and frame from both sides</li>
              <li>Close views of both levers, roses, escutcheons, cylinders, and thumbturns</li>
              <li>The entire door edge with the door open, including the latch and faceplate</li>
              <li>The strike and frame where the latch enters</li>
              <li>Any visible manufacturer name, model marking, label, or certification mark</li>
              <li>The top hinge, closer, panic hardware, reader, electric strike, or wires associated with the opening</li>
              <li>A description of exactly what happens from inside and outside</li>
            </ul>

            <p>Do not remove a lock from a fire-rated, electrified, alarmed, access-controlled, or required-exit door simply to identify it. Photographs and an on-site evaluation are safer than creating an unsecured opening or disturbing connected components.</p>

            <h2>Commercial lock service near Lillington</h2>
            <p>North Carolina’s <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">Locksmith Licensing Act</a> requires a license to perform locksmith services in the state. A Good Locksmith can identify supported commercial lock hardware, evaluate rekeying or repair options, and help define a compatible replacement plan when the door, frame, authorization, function, and site conditions are suitable. A Good Locksmith identifies its license as NCLL #3119.</p>

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
              <li><a href="https://us.allegion.com/en/resources/education/leading-the-industry/101-articles/door-hardware-101.html" target="_blank" rel="noreferrer">Allegion: Door Hardware 101</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/mechanical-locks.html" target="_blank" rel="noreferrer">Schlage: Mechanical Locks and Door Preparation</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15613-2022-Mortise-Locks" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.13 Mortise Locks</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A1562-2022-Locks-and-Latches" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.2 Bored and Preassembled Locks</a></li>
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA: Exit-Route Door Requirements</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Statutes Chapter 74F: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the opening before ordering the hardware</span>
              <h2>Need help with a commercial lever lock?</h2>
              <p>Call A Good Locksmith with the business location, door symptoms, access authorization, and photos of the door face, edge, frame, and hardware.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 27, 2026. This article provides general commercial door-hardware information, not a product specification, code determination, fire-door inspection, or diagnosis. The correct service depends on the exact lock, function, door and frame preparation, listing, access-control system, site conditions, authorization, and applicable requirements.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Useful identification photos</h2>
              <ul>
                <li>Both faces of the door</li>
                <li>Full door edge and faceplate</li>
                <li>Latch and strike</li>
                <li>Labels and model markings</li>
                <li>Connected door hardware</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Describe the symptom</h2>
              <p>Explain what the key and levers do from each side, whether the latch catches, and whether the door is a required exit.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default MortiseCylindricalCommercialLockGuidePost;
