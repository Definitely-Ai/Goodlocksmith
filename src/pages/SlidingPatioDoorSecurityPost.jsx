import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const SlidingPatioDoorSecurityPost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A sliding patio door that will not lock may have a failed latch—or the moving panel may no longer place the latch correctly against its keeper. The difference matters before any part is replaced.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not force the handle or latch:</strong> If the lock works with the panel open but not when the door is closed, alignment may be the real problem. Extra force can damage the lever, tailpiece, latch, keeper, or door frame.
            </div>

            <p>Sliding patio doors use different hardware than ordinary hinged entry doors. Depending on the brand and series, the moving panel may use a hook latch, mortise-style lock, multipoint mechanism, exterior key cylinder, foot lock, vent lock, or another manufacturer-specific system.</p>
            <p>With 35 years in locksmithing, Mike Galdine starts by identifying the door and separating lock trouble from door movement. This guide is for homeowners and property managers in Lillington, Angier, Bunnlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County.</p>

            <h2>Start with a safe open-versus-closed test</h2>
            <p>Keep the opening under your control so nobody can enter unexpectedly. With the sliding panel open, operate the latch gently and watch how it moves. Then return it to the unlocked position, close the panel normally, and try the lock again without lifting the handle or slamming the door.</p>
            <ul className="article-checklist">
              <li><FaCheckCircle /> <strong>Latch moves open but not closed:</strong> the latch and keeper may be misaligned, or the panel may sit too high, low, far in, or far out</li>
              <li><FaCheckCircle /> <strong>Latch will not move in either position:</strong> the lever, tailpiece, internal lock, or connected mechanism may be damaged or obstructed</li>
              <li><FaCheckCircle /> <strong>Door drags or must be lifted:</strong> rollers, track condition, panel adjustment, or the door itself may require attention</li>
              <li><FaCheckCircle /> <strong>Handle is loose or spins:</strong> mounting hardware or the connection between the lever and lock may have failed</li>
              <li><FaCheckCircle /> <strong>Lock engages but the panel still moves:</strong> the latch may not be capturing the keeper correctly</li>
            </ul>
            <p>Andersen’s current <a href="https://helpcenter.andersenwindows.com/aw/s/article/Gliding-Patio-Door-Hardware-Adjustment-and-Replacement-Guide" target="_blank" rel="noreferrer">gliding patio-door hardware guide</a> treats rollers, locking hardware, handles, and auxiliary locks as related parts of the door system. That is why replacing the visible handle alone may not solve the problem.</p>

            <h2>Common causes of a patio door that will not lock</h2>

            <h3>The latch and keeper no longer line up</h3>
            <p>The keeper is the frame-mounted part that receives the latch. A small shift in the moving panel, keeper, or frame can prevent the latch from entering or hooking correctly. Wear marks may show where the parts are contacting, but do not enlarge holes or bend hardware blindly.</p>

            <h3>The panel is out of adjustment</h3>
            <p>Worn or misadjusted rollers, debris in the track, loose fasteners, or frame movement can change the panel’s height and position. If the door has to be lifted or pushed sideways to lock, correcting only the latch may leave the root problem in place.</p>
            <p>For manufacturer-specific auxiliary locks, alignment matters too. Andersen notes in its <a href="https://helpcenter.andersenwindows.com/aw/s/article/Auxiliary-Foot-Lock-Pin-Not-Lined-Up-With-Receiver-Hole-in-Sill" target="_blank" rel="noreferrer">foot-lock troubleshooting guidance</a> that a pin missing its receiver can indicate a panel-adjustment issue or an incorrectly located hole.</p>

            <h3>The lever, tailpiece, or internal lock is damaged</h3>
            <p>The small interior lever does not secure the door by itself; it transfers movement into the lock. A bent or broken tailpiece can allow the lever to move without operating the latch. <a href="https://helpcenter.andersenwindows.com/aw/s/article/Inspecting-and-Replacing-the-Latch-Lever-on-A-Series-400-Series-and-200-Series-Gliding-Patio-Doors" target="_blank" rel="noreferrer">Andersen’s latch-lever inspection guidance</a> specifically identifies a twisted or broken tailpiece as a condition requiring the appropriate replacement part.</p>

            <h3>The replacement part does not match the door</h3>
            <p>Patio-door hardware is often brand-, series-, handing-, age-, and configuration-specific. Similar-looking handles or mortise locks may differ in screw spacing, backset, hook direction, tailpiece length, or keeper design. Identify the door and existing hardware before ordering or drilling.</p>

            <h2>A security bar should be backup—not a disguise for a failed lock</h2>
            <p>A correctly fitted bar or rod in the track can provide a visible secondary barrier. The <a href="https://raleighnc.gov/police/services/how-prevent-crime" target="_blank" rel="noreferrer">Raleigh Police Department’s home-security guidance, updated July 27, 2026</a>, recommends securing sliding glass doors with a metal rod or suitable track insert and vertical bolts to help resist sliding or lifting.</p>
            <p>Pella’s <a href="https://www.pella.com/ideas/doors/patio-doors/securing-sliding-patio-doors/" target="_blank" rel="noreferrer">patio-door security guidance, updated August 4, 2026</a>, likewise discusses security bars, multipoint locks, and purpose-built vent locks as different layers. These measures are not interchangeable, and compatibility depends on the specific door.</p>
            <p>Do not rely on a loose object that can shift out of place, and do not install a device that prevents occupants from opening a required exit quickly. Emergency egress, rental rules, accessibility, and local code still apply.</p>

            <h2>What not to do</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Do not force a lever that stops before reaching the locked position</li>
              <li><FaCheckCircle /> Do not slam or lift the panel every time you lock it</li>
              <li><FaCheckCircle /> Do not drill near tempered glass, buried hardware, drainage paths, or unknown frame cavities without correct instructions</li>
              <li><FaCheckCircle /> Do not assume a universal replacement handle includes the correct internal lock</li>
              <li><FaCheckCircle /> Do not leave an exterior opening unsecured while waiting for parts</li>
              <li><FaCheckCircle /> Do not let a secondary bar hide the fact that the primary latch has failed</li>
            </ul>

            <div className="article-callout">
              <strong>If the door cannot be secured:</strong> Do not leave the property unattended. Use a safe temporary plan appropriate for the opening and arrange professional evaluation. After forced entry or visible damage, follow our <Link to="/blog/locks-after-break-in-forced-entry-nc">post-break-in safety and documentation guide</Link> before making permanent changes.
            </div>

            <h2>What information helps identify the hardware</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Door manufacturer, series, and approximate age</li>
              <li><FaCheckCircle /> Whether the panel slides left or right when viewed from inside</li>
              <li><FaCheckCircle /> Clear photos of the interior handle, door edge, latch, and keeper</li>
              <li><FaCheckCircle /> Screw spacing and visible part numbers</li>
              <li><FaCheckCircle /> Whether the latch moves with the panel open</li>
              <li><FaCheckCircle /> Whether the door drags, lifts, or has roller trouble</li>
              <li><FaCheckCircle /> Whether an exterior key cylinder or secondary lock is present</li>
            </ul>
            <p>Do not include a close-up of a working key’s cuts or readable bitting code in shared photos. Review our <Link to="/blog/key-photo-bitting-code-security-nc">key-photo security guide</Link> before sending key images.</p>

            <h2>Patio-door lock help in Harnett County</h2>
            <p>A Good Locksmith can discuss supported patio-door lock hardware, identify whether the symptoms point toward the latch or another part of the opening, and explain when a door or window specialist may also be needed. The goal is an honest diagnosis rather than promising that every roller, glass, frame, or manufacturer-specific door problem is locksmith work.</p>
            <p>Use our broader <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link> to review the patio door along with hinged doors, frames, strikes, hinges, and garage-entry doors.</p>

            <div className="service-area-links">
              <Link to="/Lillington">Lillington</Link>
              <Link to="/Angier">Angier</Link>
              <Link to="/Bunnlevel">Bunnlevel</Link>
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
              <li><a href="https://raleighnc.gov/police/services/how-prevent-crime" target="_blank" rel="noreferrer">Raleigh Police Department: How to Prevent Crime</a></li>
              <li><a href="https://www.pella.com/ideas/doors/patio-doors/securing-sliding-patio-doors/" target="_blank" rel="noreferrer">Pella: Tips for Patio Door Security</a></li>
              <li><a href="https://helpcenter.andersenwindows.com/aw/s/article/Gliding-Patio-Door-Hardware-Adjustment-and-Replacement-Guide" target="_blank" rel="noreferrer">Andersen: Gliding Patio Door Hardware Guide</a></li>
              <li><a href="https://helpcenter.andersenwindows.com/aw/s/article/Inspecting-and-Replacing-the-Latch-Lever-on-A-Series-400-Series-and-200-Series-Gliding-Patio-Doors" target="_blank" rel="noreferrer">Andersen: Inspecting a Gliding Door Latch Lever</a></li>
            </ul>

            <section className="article-cta">
              <span>Secure the patio door without forcing the hardware</span>
              <h2>Need help identifying a patio-door lock problem?</h2>
              <p>Call A Good Locksmith to discuss professional lock service in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general patio-door lock and security information based on sources reviewed August 30, 2026. Door brands, hardware, glass, frames, adjustment procedures, and code requirements vary. A physical inspection is required to diagnose a specific opening.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Describe the problem</h2>
              <ul>
                <li>Latch moves when open?</li>
                <li>Panel drags or lifts?</li>
                <li>Handle loose or spinning?</li>
                <li>Latch misses keeper?</li>
                <li>Secondary lock present?</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Patio door won’t lock?</h2>
              <p>Identify the complete opening before ordering or altering parts.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default SlidingPatioDoorSecurityPost;
