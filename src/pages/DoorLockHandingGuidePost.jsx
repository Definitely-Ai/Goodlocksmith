import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorLockHandingGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A door can be left hand, right hand, left hand reverse, or right hand reverse. The correct description depends on where you stand, which side is secure, where the hinges are, and whether the door swings toward or away from you.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not order from “the hinges are on my left” alone:</strong> first identify the outside or secure side of the opening. Commercial hardware may also require the swing direction, while some residential products are universal or reversible.
            </div>

            <p>Customers often ask whether they need a left-hand or right-hand lock after a lever points the wrong way, a latch does not sit correctly, or a replacement part asks for an unfamiliar abbreviation. The answer matters because handing can affect lever orientation, latch bevel, lock function, door closers, exit hardware, and the setup process for some electronic locks.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to identifying doors and hardware before parts are ordered. This guide gives homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County a dependable way to document an opening without guessing.</p>

            <h2>What does door handing mean?</h2>
            <p>Handing describes the relationship between the hinge side, the side from which the opening is viewed, and the direction the door swings. Allegion identifies four common lock handings: left hand (LH), right hand (RH), left hand reverse (LHR), and right hand reverse (RHR).</p>

            <p>That four-way description is especially common with commercial mortise locks, institutional hardware, door closers, and other products whose operation or internal parts depend on the swing. Residential shopping instructions sometimes use a simpler left-or-right method because the particular lever or handleset does not require all four designations.</p>

            <h2>Use the outside or secure side as your reference</h2>
            <p>Allegion recommends viewing the door from the outside, secure side, or key side. From that position, note the hinges first and the swing second.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Hinges on the left:</strong> the base handing is left hand</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Hinges on the right:</strong> the base handing is right hand</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door swings away from you:</strong> Allegion describes it as a standard swing</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Door swings toward you:</strong> Allegion describes it as reverse bevel or reverse swing</li>
            </ul>

            <p>Using that method, hinges left and swing away is LH; hinges right and swing away is RH; hinges left and swing toward you is LHR; hinges right and swing toward you is RHR. Photograph the full door from the secure side and show both the hinges and swing. A close-up of the lever alone is not enough.</p>

            <h2>Why residential instructions can look different</h2>
            <p>Schlage’s residential guidance says to stand outside the door and identify whether the hinges are left or right. That is often enough when choosing a curved handleset lever or a non-turning decorative lever. Schlage also notes that many passage, privacy, and keyed levers can be flipped, while straight levers may be universally handed.</p>

            <p>This is not a contradiction. It reflects different products and ordering systems. A reversible residential lever may only need its trim oriented after installation. A commercial mortise lock, closer, or specialized function may need the full LH, RH, LHR, or RHR description before ordering or configuring parts.</p>

            <h2>Handing affects more than the direction of a lever</h2>
            <p>Incorrect handing can leave a curved lever pointing toward the frame, place secure and non-secure controls on the wrong sides, orient a latchbolt incorrectly, or produce a closer or lock that does not match the opening. Some lock bodies can be rehanded in the field; others must be ordered correctly.</p>

            <p>For example, Schlage’s current L Series service manual includes a rehanding procedure for specified models but warns that at least one listed function is not field reversible. That is why the exact manufacturer, series, function, and part number matter more than a general assumption that “all levers flip.”</p>

            <p>If you first need to identify the lock body, read our guide to <Link to="/blog/mortise-lock-vs-cylindrical-commercial-door-nc">mortise and cylindrical commercial locks</Link>. For offices, classrooms, storerooms, and passage doors, our <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">commercial lock-function guide</Link> explains why handing and function are separate decisions.</p>

            <h2>Electronic “door handing” may mean calibration</h2>
            <p>Some electronic deadbolts use “door handing” to describe a learning or calibration process. Kwikset explains that certain SmartCode models extend and retract the bolt to learn the door’s orientation. That setup step is crucial to operation, but it does not mean every electronic lock requires a left- or right-hand model at purchase.</p>

            <p>Follow the exact manual before resetting or repeating a handing process. Keep the door open when the instructions require it, make sure the bolt can travel freely, and do not use electronic calibration to compensate for a bolt that rubs the strike. See our guides to <Link to="/blog/will-smart-lock-fit-existing-door-nc">smart-lock fit</Link> and <Link to="/blog/smart-lock-batteries-draining-fast-nc">smart-lock battery drain</Link> for related preparation and alignment checks.</p>

            <h2>Do not change a door’s swing casually</h2>
            <p>Determining handing is an identification task. Reversing an installed door’s swing is a larger project that can affect hinges, frame preparation, weather exposure, accessibility, closer mounting, fire or life-safety listings, and required exit operation. A business exit door should not be altered from a blog diagram or hardware listing.</p>

            <p>Commercial openings should retain free and code-compliant egress for their intended use. Review our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic-hardware and exit-door checklist</Link>, and consult the authority responsible for the property when code, fire-door, or accessibility requirements may apply.</p>

            <h2>What to record before calling or ordering</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The room or area considered the outside or secure side</li>
              <li><FaCheckCircle aria-hidden="true" /> Hinge location when viewed from that side</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the door swings toward or away from that viewer</li>
              <li><FaCheckCircle aria-hidden="true" /> Clear photos of both sides, the door edge, latch, strike, hinges, and labels</li>
              <li><FaCheckCircle aria-hidden="true" /> Manufacturer, series, function, and any readable model or part number</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the opening is residential, commercial, an exit, or a labeled fire door</li>
            </ul>

            <p>North Carolina’s <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">Locksmith Licensing Act</a> includes installing, repairing, servicing, and adjusting locks and locking devices. State law also requires locksmith advertisements to include a valid license number. A Good Locksmith identifies its license as NCLL #3119.</p>

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
              <li><a href="https://kc.allegion.com/kb/article/what-is-lock-handing/" target="_blank" rel="noreferrer">Allegion: What Is Lock Handing?</a></li>
              <li><a href="https://kc.allegion.com/kb/article/how-do-i-determine-the-hand-of-a-door/" target="_blank" rel="noreferrer">Allegion: How Do I Determine the Hand of a Door?</a></li>
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-handing.html" target="_blank" rel="noreferrer">Schlage: How to Understand Lever and Door Handing</a></li>
              <li><a href="https://www.kwikset.com/support/answers/how-to-peform-a-door-handing-for-my-smartcode-touchscreen-" target="_blank" rel="noreferrer">Kwikset: SmartCode Door-Handing Process</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Statutes Chapter 74F: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the opening before buying the hardware</span>
              <h2>Need help matching a lock to the door?</h2>
              <p>Call A Good Locksmith with photos of the opening, the hinge side, swing direction, and any hardware labels. Mike can evaluate compatible residential or commercial lock service in the local service area.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 5, 2026. This article provides general door-hardware identification information, not a product-specific ordering instruction or code determination. Terminology, reversibility, handing, function, required swing, listings, and installation steps depend on the exact opening, hardware, manufacturer instructions, property use, and applicable requirements.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Describe the door</h2>
              <ul>
                <li>Secure or outside side</li>
                <li>Hinges left or right</li>
                <li>Swing toward or away</li>
                <li>Lock type and function</li>
                <li>Manufacturer and model</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Unsure of the handing?</h2>
              <p>Photograph the entire opening from both sides before removing or ordering hardware.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorLockHandingGuidePost;
