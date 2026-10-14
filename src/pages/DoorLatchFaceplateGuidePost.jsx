import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorLatchFaceplateGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">The shape around a latch on the edge of a door is part of the door preparation. A square-corner plate, rounded-corner plate, and circular drive-in collar are not automatically interchangeable.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Look at the door edge before buying:</strong> a rectangular recess with sharp corners takes a square-corner faceplate, a rectangular recess with radiused corners takes a round-corner faceplate, and a plain circular edge bore may use a drive-in collar. Match the existing preparation and the exact lock instructions.
            </div>

            <p>Many replacement knobs, levers, and deadbolts are sold with more than one latch face option, but that does not mean every package includes every style. The wrong faceplate may sit proud of the door edge, leave gaps, lack a secure mounting surface, or require cutting that the door did not need.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the full opening before changing hardware. This guide helps homeowners, landlords, and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe what they have before ordering a replacement.</p>

            <h2>What are the three common latch faceplate styles?</h2>
            <h3>Square-corner faceplate</h3>
            <p>This is a rectangular plate with four sharp corners. It fits a matching rectangular mortise cut into the door edge and is normally secured with two screws. The plate should sit flush rather than rocking or projecting beyond the edge.</p>

            <h3>Round-corner faceplate</h3>
            <p>This is also a rectangular plate secured with screws, but each corner has a radius. The recess in the door edge should have the same general outline. “Round corner” describes those four plate corners; it is not the same as a circular drive-in collar.</p>

            <h3>Drive-in collar</h3>
            <p>A drive-in latch uses a circular collar pressed into the edge bore instead of a rectangular plate held by two faceplate screws. Schlage installation guidance shows the collar being seated flush with a wood block and hammer. That is a model-specific installation method—not a reason to hammer an assembled latch or force a collar into an unsuitable door.</p>

            <h2>How can you identify what your door needs?</h2>
            <ol>
              <li>Open the door and photograph the entire door edge, including the latch and any deadbolt.</li>
              <li>Note whether the latch has a rectangular plate or a circular collar.</li>
              <li>If it is rectangular, check whether the corners are sharp or rounded.</li>
              <li>Confirm whether two faceplate screws are present and whether the surrounding wood or metal is damaged.</li>
              <li>Record the lock brand and model when visible, then check its current installation sheet.</li>
            </ol>

            <p>Do not identify a latch by faceplate shape alone. Also check the <Link to="/blog/what-is-door-lock-backset-measurement-nc">door-lock backset</Link>, door thickness, bore sizes, latch orientation, and the lock function. A matching-looking plate does not prove that the latch body will work with the rest of the lock.</p>

            <div className="article-callout">
              <strong>Useful phone photos:</strong> send one straight-on image of the door edge, one of each face of the lock, and one wider image showing the hinges and door swing. Include a tape measure only when it can be held flat and read clearly.
            </div>

            <h2>Can you swap one faceplate style for another?</h2>
            <p>Sometimes. Schlage documentation shows certain latches and deadbolts with selectable square-corner, rounded-corner, and circular drive-in parts. Kwikset likewise lists a current latch with three interchangeable faceplates. Those examples establish that convertible products exist; they do not make parts universal across brands, models, or generations.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The replacement part must be listed for the exact latch or deadbolt model</li>
              <li><FaCheckCircle aria-hidden="true" /> The door-edge preparation must match the selected face style</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch length and backset setting must match the door</li>
              <li><FaCheckCircle aria-hidden="true" /> The bolt bevel and lock handing must be oriented correctly</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch must move freely after the lock is assembled</li>
            </ul>

            <p>A loose aftermarket collar, a faceplate borrowed from another latch, or screws that do not engage sound material can turn a small fit issue into unreliable hardware. If the existing edge is split, enlarged, heavily mortised, or missing material, inspect the damage before deciding whether a different plate, reinforcement, repair, or replacement is appropriate.</p>

            <h2>Should you cut square corners into a round-corner recess?</h2>
            <p>Do not start cutting until the complete replacement has been confirmed. Removing a small amount of material can be appropriate on some ordinary wood doors, but a mistake can leave the plate unsupported or visibly oversized. Metal doors, fiberglass doors, fire-rated openings, and commercial assemblies require extra care because their preparation, reinforcements, labels, and approved hardware can matter.</p>

            <p>Likewise, changing a rectangular mortise to a drive-in installation is not automatically an upgrade. The result must fit the specific latch, sit flush, remain stable, and preserve the door. When a door has no existing lock preparation, use the manufacturer template and consider professional <Link to="/blog/add-deadbolt-to-door-no-existing-hole-nc">deadbolt installation</Link> rather than treating the faceplate as the only measurement.</p>

            <h2>What if the new latch fits but the door still will not close?</h2>
            <p>The door-edge faceplate and the frame strike do different jobs. A correctly fitted latch can still bind if the door has moved, the strike is misaligned, the latch bevel faces the wrong direction, or the deadlatch lands inside the strike opening. Our guides explain what to check when a <Link to="/blog/door-latches-but-can-be-pushed-open-nc">latched door can be pushed open</Link> or when a <Link to="/blog/door-knob-turns-latch-wont-retract-nc">knob turns but the latch will not retract</Link>.</p>

            <h2>When to call a locksmith</h2>
            <p>Call before ordering or altering the door when the model is unknown, the edge is damaged, the latch and trim do not align, the replacement parts are not documented as compatible, or the opening includes commercial, electrified, interconnected, or fire-door hardware. North Carolina law includes installing, repairing, servicing, and adjusting locks within regulated locksmith services. A Good Locksmith provides authorized residential and commercial lock service under NCLL #3119.</p>

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
              <li><a href="https://www.schlage.com/content/dam/sch-us/documents/pdf/installation-manuals/P515-360.pdf" target="_blank" rel="noreferrer">Schlage: Square-Corner, Rounded-Corner, and Circular Drive-In Faceplate Instructions</a></li>
              <li><a href="https://commercial.schlage.com/content/dam/allegion-us-2/web-documents-2/InstallInstructions/Schlage_A-Series_Knob_Installation_Instructions_108303.pdf" target="_blank" rel="noreferrer">Schlage A-Series: Square-Corner and Drive-In Latch Installation</a></li>
              <li><a href="https://www.kwikset.com/products/detail/6al-plain-latch" target="_blank" rel="noreferrer">Kwikset: Adjustable Latch with Three Interchangeable Faceplates</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Hardware-Highlights/A15639-2025-Residential-Locksets-and-Latches" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA A156.39-2025 Residential Locksets and Latches Overview</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina Locksmith Licensing Act, Chapter 74F</a></li>
            </ul>

            <section className="article-cta">
              <span>Match the latch to the complete opening</span>
              <h2>Not sure which latch faceplate your door needs?</h2>
              <p>Call A Good Locksmith with clear photos of the lock and door edge. Mike can help identify the existing preparation and explain the appropriate repair or compatible replacement path.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 14, 2026. This article provides general door-hardware information, not a drilling template, remote diagnosis, code determination, or guarantee that parts are interchangeable. Confirm the exact lock model, manufacturer instructions, door construction, and requirements for the opening before altering a door.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Three common styles</h2>
              <ul>
                <li>Square corner</li>
                <li>Round corner</li>
                <li>Circular drive-in</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Before you order</h2>
              <p>Photograph the door edge and verify the latch model, face style, backset, bore sizes, and door thickness.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorLatchFaceplateGuidePost;
