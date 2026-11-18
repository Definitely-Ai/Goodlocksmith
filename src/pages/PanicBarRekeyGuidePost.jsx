import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const PanicBarRekeyGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A panic-bar door may have a separate keyed cylinder in its outside trim. When that cylinder and trim are serviceable and compatible, the authorized outside key can often be changed without replacing the entire exit device.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> often, yes. Rekeying a compatible outside cylinder changes which key operates that entry function; it does not require replacing a sound exit device. But the cylinder type, cam or tailpiece, trim function, key system, and condition of the complete opening must be checked before anyone promises a rekey.
            </div>

            <p>Businesses, churches, offices, shops, warehouses, and other facilities around Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County commonly use push bars on exit doors. A manager may need to change the outside key after an employee leaves, a key goes missing, or a key-control plan changes—while keeping the existing exit hardware.</p>

            <p>Mike Galdine's 35 years of locksmith experience point to one essential first step: identify what the key actually operates. “Panic bar” is a familiar everyday term, but the opening may use panic hardware, fire exit hardware, or another listed exit device with a particular outside trim. The correct service depends on that exact hardware, not just the appearance of the push bar.</p>

            <h2>The inside push bar and outside key do different jobs</h2>
            <p>The inside device is designed to release the door for egress when the touchpad or crossbar is operated. Outside trim may be a pull, lever, knob, or thumbpiece, and it may include a rim cylinder, mortise cylinder, key-in-lever cylinder, or interchangeable core. The key may unlock the lever, retract the latch, control another trim function, or have no role at all, depending on the model.</p>

            <p>That separation is why a cylinder-only rekey can be possible. Allegion's current Von Duprin documentation lists multiple outside-trim functions and cylinder preparations for 98/99 Series exit devices; it does not treat every keyed trim as the same part. Schlage's commercial cylinder guidance likewise distinguishes rim and mortise applications by their housings, cams, and tailpieces.</p>

            <div className="article-callout">
              <strong>Important:</strong> changing the outside key must never make occupants use a key, tool, or special knowledge to leave. OSHA's current exit-route rule says employees must be able to open an exit route door from the inside at all times without those obstacles, and specifically permits a panic bar that locks only from the outside on exit discharge doors.
            </div>

            <h2>When panic bar rekeying may be enough</h2>
            <p>A rekey may be a reasonable path when all of the following are true:</p>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The outside trim contains a serviceable mechanical cylinder</li>
              <li><FaCheckCircle aria-hidden="true" /> The cylinder, cam or tailpiece, and trim are compatible with the exit device</li>
              <li><FaCheckCircle aria-hidden="true" /> The existing keyway can support the intended key or master-key system</li>
              <li><FaCheckCircle aria-hidden="true" /> The cylinder and its retainers are not damaged, loose, seized, or heavily worn</li>
              <li><FaCheckCircle aria-hidden="true" /> The door closes, latches, and releases properly before the key change</li>
              <li><FaCheckCircle aria-hidden="true" /> The work will not alter required egress, listing, or fire-door operation</li>
            </ul>

            <p>Rekeying changes the pins or other keying components so the previous operating key no longer works. It does not repair a dragging door, bent rod, broken latch, failed lever, damaged trim, loose cylinder mount, or worn exit device. Our guide to <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repairing, rekeying, or replacing a lock</Link> explains why those are different services.</p>

            <h2>When the cylinder, trim, or exit device may need more</h2>
            <p>A cylinder replacement may be more appropriate when the existing keyway is incompatible with the new system, the cylinder is worn or damaged, the required keying components are unavailable, or the opening needs a different authorized cylinder format. A control key may allow an interchangeable core to be removed quickly, but that does not make every core compatible with every housing or key system.</p>

            <p>Trim repair or replacement may be necessary when the lever, pull, thumbpiece, linkage, mounting, or cylinder-retaining parts have failed. Exit-device repair or replacement may be necessary when the push bar does not retract the latch, the device will not relatch, a rod or latch is damaged, or the hardware is unsuitable for the opening. A fire-rated opening adds requirements that cannot be answered from a photograph alone.</p>

            <p>Manufacturer details matter. For example, Von Duprin's current service information identifies different cylinder requirements for different device and trim combinations. A cylinder that fits the hole but has the wrong cam, tailpiece, length, or prep may not operate correctly. See our comparison of <Link to="/blog/rim-cylinder-vs-mortise-cylinder-commercial-lock-nc">rim and mortise cylinders on commercial doors</Link>.</p>

            <h2>What to identify before scheduling the work</h2>
            <p>Clear information can prevent an unnecessary trip or the wrong parts arriving at the door. If it is safe to do so, gather:</p>
            <ol>
              <li><strong>Photos of both sides of the complete door.</strong> Include the full push bar, outside trim, cylinder, door edge, latch area, and any labels without removing covers.</li>
              <li><strong>Manufacturer and model markings.</strong> Look on the touchpad, end cap, trim, latch cover, or door edge.</li>
              <li><strong>The present function.</strong> Explain whether the key unlocks a lever, retracts the latch, or changes another function.</li>
              <li><strong>The key-system goal.</strong> Say whether the door needs its own key, should match an existing business key, or belongs under a master-key plan.</li>
              <li><strong>The reason for the change.</strong> A lost master key may affect more doors than one outside cylinder. Use our <Link to="/blog/lost-business-master-key-rekey-scope-nc">lost business master-key checklist</Link> to define the possible scope.</li>
              <li><strong>Any operating symptoms.</strong> Report a loose cylinder, stiff key, sagging door, intermittent latch, failed lever, or device that needs extra force.</li>
              <li><strong>Fire labels and inspection concerns.</strong> Do not paint over, remove, or alter labels or listed hardware.</li>
            </ol>

            <h2>What a complete post-service test should cover</h2>
            <p>A successful key change is not just “the new key turns.” The opening should be tested in its intended operating conditions, following the manufacturer's instructions and applicable requirements.</p>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The inside push bar releases the latch without a key</li>
              <li><FaCheckCircle aria-hidden="true" /> The door closes and positively latches without being forced</li>
              <li><FaCheckCircle aria-hidden="true" /> The new outside key performs the intended trim function</li>
              <li><FaCheckCircle aria-hidden="true" /> Superseded keys no longer operate the rekeyed cylinder</li>
              <li><FaCheckCircle aria-hidden="true" /> The cylinder remains secure and the key removes in the correct position</li>
              <li><FaCheckCircle aria-hidden="true" /> Master, change, and control keys are tested only to the authorized scope</li>
              <li><FaCheckCircle aria-hidden="true" /> Fire-exit hardware, alarms, electrified functions, and door closers are not bypassed</li>
            </ul>

            <p>If the exit device is dogged, the latch is held retracted for periods of use. That is a separate function from rekeying and may be prohibited on fire exit hardware. Read our guide to <Link to="/blog/panic-bar-dogging-fire-exit-hardware-nc">panic-bar dogging and fire exit hardware</Link> before treating the cylinder as a dogging control.</p>

            <h2>Do not defeat egress to solve an entry problem</h2>
            <p>Do not add a padlock, chain, surface bolt, improvised bar, or other device that could prevent people from opening a required exit from inside. Do not drill or modify an exit device based only on a similar-looking online part. If the door is not releasing, closing, or latching correctly, keep the opening under appropriate facility control and arrange a qualified evaluation.</p>

            <p>North Carolina's Locksmith Licensing Act includes rekeying, servicing, adjusting, and installing locks and egress-control devices in its definition of locksmith services. A Good Locksmith provides this work under NCLL #3119.</p>

            <h2>Commercial exit-door help near Lillington</h2>
            <p>A Good Locksmith can evaluate supported mechanical cylinders, outside trim, exit devices, and commercial key-control needs. The service may be a rekey, cylinder replacement, trim repair, device repair, or a referral when the opening needs work outside the supported scope. No decision should be made until the exact hardware and door condition are identified.</p>

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
              <li><a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">U.S. Occupational Safety and Health Administration: 29 CFR 1910.36, Exit Route Design and Construction</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-files/von-duprin-/technical-documents/Von_Duprin_98_9947_98_9949_and_98_9950_Series_Exit_Devices_Parts_Manual_105675.pdf" target="_blank" rel="noreferrer">Von Duprin: 98/9947, 98/9949, and 98/9950 Series Exit Devices Service Manual</a></li>
              <li><a href="https://kc.allegion.com/kb/user-question/cylinders-for-von-duprin-devices/" target="_blank" rel="noreferrer">Allegion Knowledge Center: Cylinders for Von Duprin Devices</a></li>
              <li><a href="https://commercial.schlage.com/en/products/key-systems/conventional-cylinders.html" target="_blank" rel="noreferrer">Schlage Commercial: Conventional Cylinders, Rim and Mortise Applications</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/key-systems.html" target="_blank" rel="noreferrer">Schlage Commercial: Key Systems and Rekeying Scope</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_74F.html" target="_blank" rel="noreferrer">North Carolina General Assembly: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Change the outside key, preserve safe egress</span>
              <h2>Need a panic-bar door rekeyed or evaluated?</h2>
              <p>Call A Good Locksmith with the address, door photos, manufacturer markings, key-system goal, and any problems with the outside trim or inside release.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 18, 2026. This article provides general information, not a code determination for a particular opening. Exit, fire, accessibility, listing, inspection, and manufacturer requirements depend on the door, occupancy, hardware, and jurisdiction. Do not modify or obstruct required egress.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Outside key control</h2>
              <p>A compatible cylinder may be rekeyed without replacing a sound exit device.</p>
            </div>
            <div className="sidebar-card">
              <h2>Inside egress</h2>
              <p>Occupants must not need the outside key to release the door from inside.</p>
            </div>
            <div className="sidebar-card">
              <h2>Identify before ordering</h2>
              <p>Trim function, cylinder format, cam or tailpiece, keyway, and device model all matter.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default PanicBarRekeyGuidePost;
