import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const VintageMortiseCylinderReplacementGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A round threaded cylinder can look like a current mortise cylinder and still be wrong for an older lock. Diameter, thread, length, cam, collar, keyway, and the lock body's condition all have to agree.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> “Mortise cylinder” describes how the cylinder threads into the lock, not one universal replacement part. A modern standard cylinder may be too large, too long, too short, or fitted with the wrong cam for a vintage or proprietary lock.
            </div>

            <p>Older storefronts, apartment buildings, offices, churches, cabinets, gates, and specialty doors around Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County can still have useful lock bodies even when the original keys are missing. Replacing only the keyed cylinder may be possible—but ordering by the face diameter or a product photo alone is risky.</p>

            <p>Mike Galdine's 35 years of locksmith experience support preserving serviceable hardware when a compatible, safe repair exists. The first job is identification. The existing cylinder, lock case, faceplate, door thickness, and operating parts provide more reliable information than the age or appearance of the door.</p>

            <h2>What a mortise cylinder actually is</h2>
            <p>A mortise cylinder has external threads and screws into a compatible lock body or trim. A cam attached at the rear turns or moves the lock mechanism when the key rotates. A retaining screw or set screw normally secures the cylinder through the lock edge or faceplate.</p>

            <p>This is different from a rim cylinder, which is commonly held from the back with screws and uses a tailpiece. Our guide to <Link to="/blog/rim-cylinder-vs-mortise-cylinder-commercial-lock-nc">rim and mortise cylinders</Link> shows the basic mounting difference. It is also different from the complete mortise lock case recessed into the door; see <Link to="/blog/mortise-lock-vs-cylindrical-commercial-door-nc">mortise versus cylindrical commercial locks</Link> for that distinction.</p>

            <h2>Today's common size is a reference—not a guarantee</h2>
            <p>Adams Rite identifies its current 4036 as a 1-inch-long cylinder with a 1-5/32-inch diameter threaded body. Ilco also identifies 1-5/32 inch as the thread size for its current zinc die-cast mortise cylinder. These dimensions are useful when identifying modern compatible hardware.</p>

            <p>They do not prove that an older, imported, furniture, safe, cabinet, specialty, or proprietary lock accepts that body. If the removed cylinder's threaded section measures materially smaller, has a different thread pitch, or will not start smoothly by hand, stop. Forcing a larger or mismatched cylinder can damage the lock case or threads that you are trying to preserve.</p>

            <h2>Seven details that must match</h2>

            <h3>1. Threaded-body diameter</h3>
            <p>Measure the threaded body, not just the decorative face. The face can be wider than the threads. Calipers are more useful than a ruler for distinguishing close sizes. Do not treat a roughly one-inch face measurement as proof that the threaded body is a modern 1-5/32-inch cylinder.</p>

            <h3>2. Thread pitch and thread condition</h3>
            <p>Two cylinders can have similar diameters but different thread pitches. Check for flattened, crossed, corroded, or damaged threads on both the cylinder and lock body. A correct cylinder should start without binding; tools should not be needed to make incompatible threads engage.</p>

            <h3>3. Cylinder length</h3>
            <p>Length affects how the face sits against the door or trim and whether the rear cam reaches the mechanism correctly. Ilco currently offers multiple mortise-cylinder lengths, and Allegion lists several conventional and extra-long options. A blocking ring or collar may fill an intended gap on some systems, but it cannot correct a wrong thread or incompatible cam.</p>

            <h3>4. Cam shape, position, and attachment</h3>
            <p>The cam is the part that actually operates the lock. Adams Rite publishes different cams for different deadlocks, deadlatches, flushbolts, exit devices, and trims. It cautions that cam attachment and construction vary and advises against combining one manufacturer's cylinder with another manufacturer's cam.</p>

            <p>An “Adams Rite cam” is therefore not a complete identification by itself. The lock model and required cam geometry still matter. Swapping cams may be possible within a documented, compatible cylinder family; it should not be assumed from screw spacing or appearance alone.</p>

            <h3>5. Collar, trim ring, and face position</h3>
            <p>A collar or trim ring can support the cylinder, cover an opening, and set the face at the intended depth. It should not leave the cylinder projecting excessively or hide a cylinder that is too short. The correct arrangement depends on the lock, trim, door thickness, and manufacturer instructions.</p>

            <h3>6. Keyway and key-system needs</h3>
            <p>A mechanically fitting cylinder may still use the wrong keyway for the building. If the goal is to match other authorized locks, the new cylinder must support the intended key system and pin capacity. Our <Link to="/blog/what-is-lock-keyway-key-compatibility-nc">keyway guide</Link> explains why a key's blade profile must match before its cuts can operate the pins.</p>

            <h3>7. Rotation, key removal, and lock function</h3>
            <p>Cams can rotate through different ranges and may require a particular neutral position for key removal. Test the complete function with the door open before relying on it: key insertion and removal, bolt or latch travel, inside operation, locking, unlocking, and any safe-exit hardware.</p>

            <h2>What to photograph and measure before searching</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Both faces of the complete door or object</li>
              <li><FaCheckCircle aria-hidden="true" /> The lock faceplate and every stamped name or number</li>
              <li><FaCheckCircle aria-hidden="true" /> The removed cylinder from the front, side, threads, and rear</li>
              <li><FaCheckCircle aria-hidden="true" /> Threaded-body diameter measured with calipers</li>
              <li><FaCheckCircle aria-hidden="true" /> Cylinder length measured from the proper reference surfaces</li>
              <li><FaCheckCircle aria-hidden="true" /> Cam shape, orientation, attachment, and dimensions</li>
              <li><FaCheckCircle aria-hidden="true" /> Door or panel thickness and any collar or trim ring</li>
              <li><FaCheckCircle aria-hidden="true" /> Bolt shape, travel, and key rotation before disassembly</li>
              <li><FaCheckCircle aria-hidden="true" /> Existing keyway or a known working key, without posting cuts publicly</li>
            </ul>

            <p>Keep the original cylinder, cam, screws, collar, and keys together in a labeled bag. Do not discard a worn or keyless original until a replacement has been fitted and tested; it may be the best dimensional reference and could contain a reusable or identifiable part.</p>

            <h2>Do not enlarge the lock before identifying it</h2>
            <p>Drilling, filing, chasing unknown threads, or forcing a common cylinder into a smaller opening can turn a cylinder problem into a damaged lock-body problem. This matters when the lock is discontinued, built into an unusual door, or difficult to remove without disassembling the opening.</p>

            <p>If the original lock body still operates correctly, identification should come before modification. If the case is cracked, threads are stripped, the bolt binds, or replacement parts cannot be sourced, then a locksmith can discuss repair, adaptation, or complete hardware replacement. Our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> explains those different outcomes.</p>

            <h2>Can an older cylinder simply be rekeyed?</h2>
            <p>Sometimes. A locksmith may be able to originate keys, decode or rekey a serviceable cylinder, or replace worn components when the design, key blank, condition, and parts support it. Other cylinders may be sealed, damaged, obsolete, proprietary, or unsupported. Missing keys alone do not prove the whole lock must be replaced, but age alone does not guarantee that parts remain available.</p>

            <p>The question is not only whether a key can turn the plug. The finished cylinder must mount securely, retain correctly, operate the intended cam, withdraw the key at the proper position, and leave the door or device safe and reliable.</p>

            <h2>Older mortise-cylinder help near Lillington</h2>
            <p>A Good Locksmith can evaluate supported older and modern mechanical lock cylinders, identify dimensional and operating requirements, and explain whether rekeying, key origination, a compatible cylinder, a documented cam change, repair, or replacement is the reasonable path. Availability depends on the actual hardware, condition, key blank, parts, and application.</p>

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
              <li><a href="https://www.adamsrite.com/en/products/accessories/4036-mortise-cylinder-4066-thumbturn" target="_blank" rel="noreferrer">Adams Rite: 4036 Mortise Cylinder, Dimensions, and Cam Guidance</a></li>
              <li><a href="https://www.adamsrite.com/en/support/troubleshooting-and-faqs/deadlocks-faqs" target="_blank" rel="noreferrer">Adams Rite: Deadlock and Mortise-Cylinder FAQs</a></li>
              <li><a href="https://www.ilco.us/products/mortise-cylinder" target="_blank" rel="noreferrer">Ilco: Mortise-Cylinder Length, Cam, Keyway, and Finish Options</a></li>
              <li><a href="https://www.ilco.us/products/mortise-zinc-die-cast-cylinders" target="_blank" rel="noreferrer">Ilco: Current Mortise-Cylinder Thread Size</a></li>
              <li><a href="https://kc.allegion.com/kb/article/what-cylinder-length-options-are-available/" target="_blank" rel="noreferrer">Allegion Knowledge Center: Mortise-Cylinder Length and Blocking-Ring Options</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-documents-2/Manual/Falcon_M_Series_Service_Manual_108006.pdf" target="_blank" rel="noreferrer">Falcon: M-Series Service Manual, Mortise Cylinders, Cams, and Collars</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_74F.html" target="_blank" rel="noreferrer">North Carolina General Assembly: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify before modifying</span>
              <h2>Need keys or a cylinder for an older lock?</h2>
              <p>Call A Good Locksmith with clear photos of the lock, cylinder, threads, rear cam, faceplate markings, and measurements. Keep the original parts available for inspection.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 15, 2026. This article provides general identification guidance, not a compatibility promise. Measurements, thread specifications, cam geometry, safe operation, code requirements, and part availability must be confirmed for the actual lock and opening.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Measure the threads</h2>
              <p>The decorative face and threaded body are not necessarily the same diameter.</p>
            </div>
            <div className="sidebar-card">
              <h2>Identify the cam</h2>
              <p>Cam geometry and attachment must match the specific lock mechanism.</p>
            </div>
            <div className="sidebar-card">
              <h2>Save every original part</h2>
              <p>The old cylinder, cam, collar, and screws may be the best compatibility references.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default VintageMortiseCylinderReplacementGuidePost;
