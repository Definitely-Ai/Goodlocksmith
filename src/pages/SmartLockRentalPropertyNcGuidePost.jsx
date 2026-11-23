import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const SmartLockRentalPropertyNcGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A renter may like the convenience of codes, app access, or a temporary guest credential, but a smart lock changes both the landlord's hardware and the property's access plan. Permission and physical compatibility should be settled before purchase.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The practical answer:</strong> before changing a lock on an ordinary North Carolina rental, review the lease and get the required landlord or property-manager approval in writing. Agree on keys, administrator access, installation, maintenance, and move-out restoration. Then confirm that the exact lock fits the door.
            </div>

            <p>A smart lock on a rental property creates two separate questions: <strong>may this tenant change the hardware?</strong> and <strong>will this model work correctly on this opening?</strong> A yes to one does not answer the other.</p>

            <p>This guide is for routine rental situations in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. It is not legal advice or a substitute for the lease. Mike Galdine's 35 years of locksmith experience support a simple sequence: establish authorization first, identify the existing lock and door second, and select hardware only after both are clear.</p>

            <h2>Does North Carolina law automatically let a tenant replace a lock?</h2>
            <p>North Carolina General Statute § 42-42 requires a landlord to keep the premises fit and habitable and identifies a lack of operable locks on exterior doors as an imminently dangerous condition. That landlord duty does not, by itself, answer whether a particular lease lets a tenant remove landlord-owned hardware or install a connected lock.</p>

            <p>For an ordinary upgrade, the safest planning step is to read the lease and ask the landlord or property manager for written approval before buying or altering anything. The North Carolina Department of Justice also recommends putting repair requests in writing and keeping a copy. A tenant dealing with a broken exterior lock should report that condition rather than treating a smart-lock purchase as the only remedy.</p>

            <div className="article-callout">
              <strong>Do not confuse convenience with authorization:</strong> a smart lock that installs with a screwdriver still changes control of the entrance. Easy installation does not make the lease, ownership, or access questions disappear.
            </div>

            <h2>What should written approval cover?</h2>
            <p>A short, specific agreement helps prevent different assumptions about the hardware and the digital account. Before work is scheduled, clarify:</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The exact door and exact lock model approved for installation</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether the existing hardware must be saved and reinstalled at move-out</li>
              <li><FaCheckCircle aria-hidden="true" /> Who pays for the lock, installation, batteries, repairs, and restoration</li>
              <li><FaCheckCircle aria-hidden="true" /> What working key, code, or administrator access the landlord or manager must retain</li>
              <li><FaCheckCircle aria-hidden="true" /> Who owns the app account and who may add, remove, or review users</li>
              <li><FaCheckCircle aria-hidden="true" /> How codes, app users, backup keys, and activity data will be handled at turnover</li>
              <li><FaCheckCircle aria-hidden="true" /> Whether building rules, an association, or a shared entrance limits the change</li>
            </ul>

            <p>A dwelling-unit approval should not be assumed to cover a common hallway door, clubhouse, gate, mail area, or another shared access system. Those credentials may be controlled by the property owner, association, or access-system administrator.</p>

            <h2>Is there a different process for a safety-related lock change?</h2>
            <p>Yes. North Carolina General Statute § 42-42.3 establishes a specific process for protected tenants affected by domestic violence, sexual assault, or stalking. It includes different notice, documentation, and timing rules depending on whether the person being excluded is also a tenant. In certain circumstances, it also addresses when a protected tenant may act after the landlord does not meet the statutory deadline and when a new key must be provided.</p>

            <p>That statute should not be treated as a general do-it-yourself permission rule for every rental. Our <Link to="/blog/north-carolina-tenant-lock-change-safety-rights">North Carolina tenant safety lock-change guide</Link> summarizes the distinct process and links directly to the current law. If anyone is in immediate danger, call 911; a smart lock is not a safety plan or substitute for emergency, legal, or advocacy help.</p>

            <h2>Will the smart lock fit the rental's existing door?</h2>
            <p>Approval does not guarantee compatibility. Identify whether the door has a separate cylindrical deadbolt, handleset, mortise lock, interconnected lock, multipoint system, narrow stile, storm-door lock, or another preparation. Then compare the exact manufacturer's current instructions with the opening.</p>

            <p>Important checks include door thickness, backset, face-bore and edge-bore sizes, latch or bolt preparation, clearance around trim and glass, interior battery-housing clearance, door handing when applicable, and space at the strike. Schlage's current Encode door-preparation instructions, for example, specify supported thickness, backset, and hole sizes for that model. Those measurements are an example, not a universal smart-lock template.</p>

            <p>Use our <Link to="/blog/will-smart-lock-fit-existing-door-nc">smart-lock fit checklist</Link> before ordering. If the door is manufactured-home construction or uses uncommon hardware, the <Link to="/blog/manufactured-home-door-lock-fit-nc">manufactured-home lock-fit guide</Link> explains why “standard” is not a measurement.</p>

            <h2>Why should the deadbolt be tested before adding a motor?</h2>
            <p>Test the existing bolt with the door open, then closed. It should extend and retract fully without lifting, pushing, or pulling the door. A motorized lock should not be expected to overcome a dragging bolt, shifted strike, loose hinge, weather-seal pressure, or damaged frame.</p>

            <p>Correct the mechanical cause first. Otherwise the lock may report a jam, stop short, or use batteries faster. See our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt alignment guide</Link> for the difference between lock trouble and door-fit trouble.</p>

            <h2>Who controls the key, codes, app, and backup entry?</h2>
            <p>A connected lock can have several independent access layers. Changing one does not necessarily change the others:</p>

            <ul>
              <li><strong>Mechanical key:</strong> if the model has a cylinder, rekeying changes the key but not app users or keypad codes.</li>
              <li><strong>Codes:</strong> each active code should have an identified purpose and should be removed when that access ends.</li>
              <li><strong>App users:</strong> invitations, household members, integrations, and administrator roles must be reviewed separately.</li>
              <li><strong>Account:</strong> the parties should know which email or organization owns the lock and how control transfers at move-out.</li>
              <li><strong>Backup entry:</strong> plan for depleted batteries, a lost phone, unavailable internet, or an app outage according to the exact model.</li>
            </ul>

            <p>Some current smart locks allow unique or scheduled codes and activity notifications, but features vary by model and configuration. Our guides explain <Link to="/blog/when-to-change-keypad-lock-code-nc">keypad-code handoff</Link>, <Link to="/blog/rekey-smart-lock-match-house-key-nc">rekeying a smart lock's mechanical cylinder</Link>, and <Link to="/blog/factory-reset-smart-lock-what-it-changes-nc">what a factory reset does and does not change</Link>.</p>

            <h2>What should happen at move-out or property turnover?</h2>
            <p>Follow the written agreement rather than waiting until the final day. If the landlord owns the lock, confirm that administrator control, all working backup keys, and current documentation are delivered. Remove former personal app access only after the authorized handoff is complete. If the tenant owns the lock and must restore the original hardware, allow time to reinstall and test it without leaving an unsecured or damaged opening.</p>

            <p>Test the door from both sides after any change. Confirm that authorized entry works, the latch and bolt engage correctly, the inside thumbturn or handle provides normal exit, the door closes reliably, and no old credential remains active unless the authorized parties deliberately retained it.</p>

            <h2>What should you have ready for a locksmith?</h2>
            <ol>
              <li><strong>Written authorization.</strong> Identify the tenant, owner, or manager who approved the exact work.</li>
              <li><strong>Lease or property requirements.</strong> Provide the hardware, key, finish, account, or restoration conditions relevant to the job.</li>
              <li><strong>Door photos and measurements.</strong> Include both faces, the edge, strike, frame, thickness, and backset.</li>
              <li><strong>The exact model.</strong> Save the model number and current installation instructions rather than relying on a product photo.</li>
              <li><strong>The access plan.</strong> Decide who receives keys, codes, administrator access, and backup entry before installation.</li>
            </ol>

            <h2>Authorized rental smart-lock help near Lillington</h2>
            <p>A Good Locksmith can evaluate supported residential openings and compatible smart-lock or keypad hardware when the requested work is properly authorized. The locksmith can address lock fit and operation; the landlord, tenant, property manager, attorney, association, or local authority must resolve lease, ownership, legal, or building-rule questions.</p>

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
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-42.html" target="_blank" rel="noreferrer">North Carolina General Statute § 42-42—Landlord to Provide Fit Premises</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_42/gs_42-42.3.html" target="_blank" rel="noreferrer">North Carolina General Statute § 42-42.3—Victim Protection: Change Locks</a></li>
              <li><a href="https://ncdoj.gov/protecting-consumers/home-repair-and-products/renting-a-home/" target="_blank" rel="noreferrer">North Carolina Department of Justice: Renting a Home</a></li>
              <li><a href="https://www.schlage.com/content/dam/sch-us/documents/pdf/installation-manuals/schlage-encode-door-prep-with-holes.pdf" target="_blank" rel="noreferrer">Schlage Encode Door Preparation Instructions for Existing Holes</a></li>
              <li><a href="https://www.schlage.com/en/home/smart-locks/schlage-encode-works-with.html" target="_blank" rel="noreferrer">Schlage Encode App and Access-Code Features</a></li>
            </ul>

            <section className="article-cta">
              <span>Permission first. Fit second. Access plan before installation.</span>
              <h2>Need help evaluating an authorized rental smart lock?</h2>
              <p>Call A Good Locksmith with the property location, written approval, door photos and measurements, and the exact lock model being considered.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 23, 2026. This article provides general lock, rental-planning, and product-fit information, not legal advice, a lease interpretation, a building-code determination, or a guarantee that a particular product fits. Read the current lease and law, obtain the required authorization, and follow the current instructions for the exact hardware.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before buying</h2>
              <p>Review the lease, get written approval, and agree on keys, administrator access, costs, maintenance, and move-out restoration.</p>
            </div>
            <div className="sidebar-card">
              <h2>Before installing</h2>
              <p>Confirm the exact model fits the door and that the deadbolt moves freely with the door open and closed.</p>
            </div>
            <div className="sidebar-card">
              <h2>Before turnover</h2>
              <p>Transfer authorized keys and account control, remove expired access, and test the complete opening.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default SmartLockRentalPropertyNcGuidePost;
