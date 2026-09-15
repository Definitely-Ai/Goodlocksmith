import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const EmployeeKeyOffboardingGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A returned key is helpful, but it does not answer every access-control question. The right response depends on which key was issued, whether copies were controlled, what it opened, and what other credentials must be removed.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Short answer:</strong> Consider rekeying when a business key is missing, unauthorized copying cannot be ruled out, or the key had broad access. First identify the key and every door it operated. A targeted rekey may be enough; changing every lock is not always necessary.
            </div>

            <p>When an employee, manager, contractor, cleaner, or vendor leaves, collecting company property is routine—not an accusation. Keys deserve the same deliberate offboarding attention as alarm codes, badges, app permissions, and passwords. The goal is to know who can enter now, not to speculate about anyone’s intentions.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to commercial key decisions. This guide helps businesses and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County decide what information to gather and when to request a professional rekey assessment.</p>

            <h2>Start with the exact key, not the employee’s job title</h2>
            <p>Two people with similar roles may have held very different keys. One key may open only a private office. Another may open the exterior entrance, stockroom, file room, or several buildings. In a master-key system, a change key may operate one door while a master key operates a larger group.</p>

            <p>Before ordering work, check the key issue record, markings or serialized tags, door schedule, and master-key chart if one exists. Do not post photos of the key online or email clear images of its cuts. If the documentation is unclear, a locksmith can identify the cylinders and help map the practical scope without exposing sensitive key information.</p>

            <h2>When rekeying is usually worth considering</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> <strong>The key was not returned:</strong> treat its access as unresolved even if no misuse is suspected</li>
              <li><FaCheckCircle /> <strong>Copies were not tracked:</strong> an ordinary open-keyway key may have been duplicated without a record</li>
              <li><FaCheckCircle /> <strong>A master or perimeter key is missing:</strong> the affected scope can extend well beyond one office</li>
              <li><FaCheckCircle /> <strong>The key reached sensitive areas:</strong> consider exterior doors, cash handling, inventory, records, utilities, and key storage</li>
              <li><FaCheckCircle /> <strong>Records disagree with the keys on hand:</strong> reconcile the system before relying on the inventory</li>
              <li><FaCheckCircle /> <strong>There is an immediate safety concern:</strong> contact law enforcement for an active threat and address access promptly with authorized management</li>
            </ul>

            <p>Schlage’s current <a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/key-systems.html" target="_blank" rel="noreferrer">key-system guidance</a> explains that existing keys need active control and tracking over time. It also warns that losing a master or perimeter key can compromise the integrity of a system and force partial or complete rekeying. That is why the key’s level matters as much as whether one physical copy came back.</p>

            <h2>A returned key may lower uncertainty, but it does not erase it</h2>
            <p>If every numbered key is accounted for, duplication was restricted and documented, access was narrow, and there is no other concern, management may decide that an immediate rekey is unnecessary. Keep a written record of that decision and update the holder list.</p>

            <p>For a common unrestricted key, however, possession of the original does not prove that no copy exists. “Do not duplicate” wording by itself is not the same as a manufacturer-controlled restricted keyway. Our <Link to="/blog/high-security-locks-key-control-guide-nc">high-security lock and restricted-key guide</Link> explains the difference between physical resistance and administrative key control.</p>

            <h2>Master keys change the size of the decision</h2>
            <p>A missing change key may affect one opening or a small keyed-alike group. A missing master or submaster can affect every cylinder under that level of the hierarchy. Rekeying only the employee’s office could leave the broader access problem untouched.</p>

            <p>Do not guess from the key’s appearance. Use the documented key symbol or system record and have the hierarchy reviewed. The solution might involve selected cylinders, a department, perimeter doors, or a broader rekey. For future planning, see our <Link to="/blog/commercial-master-key-system-guide-nc">commercial master-key system guide</Link>.</p>

            <h2>Rekeying and replacing locks are different</h2>
            <p>Rekeying changes which key operates a compatible cylinder while the serviceable lock remains in place. Replacement changes hardware. Employee turnover alone does not mean working commercial locks must be discarded.</p>

            <p>Replacement may be appropriate when hardware is damaged, badly worn, unsuitable for the door, incompatible with the desired key system, or no longer meets the opening’s functional needs. A locksmith should inspect the door, cylinder, latch or bolt, strike, and existing key system before recommending the scope. If the original key is unavailable, our guide explains when a locksmith may be able to <Link to="/blog/rekey-lock-without-original-key-nc">rekey a lock without the original key</Link>.</p>

            <h2>Remove codes and electronic credentials separately</h2>
            <p>A physical rekey does not delete keypad codes, mobile-app users, access cards, alarm credentials, or remote administrator accounts. Likewise, disabling a badge does not stop a mechanical override key from working. Schlage notes that mechanical keys remain part of building security even where electronic credentials are the main access method.</p>

            <ul>
              <li>Delete individual user codes instead of sharing one permanent code among many people.</li>
              <li>Remove app users, cards, fobs, badges, and remote access according to the exact system’s instructions.</li>
              <li>Change shared alarm or gate codes through the authorized provider or administrator.</li>
              <li>Check lockboxes, key cabinets, safes, and hidden emergency keys.</li>
              <li>Confirm that any mechanical override key is included in the physical-key review.</li>
            </ul>

            <p>For common keypad offboarding steps, read <Link to="/blog/when-to-change-keypad-lock-code-nc">when to change a keypad lock code</Link>. Commercial access-control or alarm work outside the confirmed locksmith service should be handled by the appropriate qualified provider.</p>

            <h2>Do not create an exit hazard while securing the door</h2>
            <p>Do not add an improvised hasp, padlock, chain, or keyed interior lock to an occupied exit door as a quick fix. OSHA’s <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">exit-route standard</a> says employees must be able to open an exit-route door from the inside at all times without keys, tools, or special knowledge. The correct hardware depends on the opening, occupancy, fire rating, and applicable requirements.</p>

            <p>If the door has an exit device, closer, electrified lock, or fire label, preserve the complete assembly’s required operation. Use our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic hardware and commercial exit-door checklist</Link> to document symptoms without defeating the exit.</p>

            <h2>Business key-offboarding checklist</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> List every physical key, badge, fob, remote, and device assigned to the departing person</li>
              <li><FaCheckCircle /> Record what was returned, what is missing, and when access should end</li>
              <li><FaCheckCircle /> Identify each door or keyed group the physical key operated</li>
              <li><FaCheckCircle /> Determine whether it was a change key, master, submaster, control key, or unknown key</li>
              <li><FaCheckCircle /> Revoke individual codes and electronic credentials through the correct administrator</li>
              <li><FaCheckCircle /> Review lockboxes, shared keys, key cabinets, and emergency access arrangements</li>
              <li><FaCheckCircle /> Gather photos of the hardware and proof that the caller is authorized to request work</li>
              <li><FaCheckCircle /> After service, issue new keys by number and update the holder register</li>
            </ul>

            <h2>Who can authorize commercial rekeying in North Carolina?</h2>
            <p>The owner, landlord, property manager, or another authorized representative should approve the work and scope. North Carolina’s <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">Locksmith Licensing Act</a> defines rekeying and servicing locks as locksmith services and requires a license to offer or perform those services in the state. It also requires a locksmith opening locked commercial property to make a reasonable effort to verify ownership or authorization.</p>

            <p>Have identification, the business address, and documentation of authority ready. If landlord approval, corporate authorization, or a lease provision applies, settle that before scheduling changes that affect the property.</p>

            <h2>Commercial rekeying near Harnett County</h2>
            <p>A Good Locksmith can evaluate supported commercial locks and key systems, trace the practical effect of a missing or uncontrolled key, and explain whether a targeted rekey, broader rekey, or hardware change fits the opening. Service and availability are confirmed for the exact property and hardware when you call.</p>

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

            <section className="article-cta">
              <span>Know which keys still open the business.</span>
              <h2>Need to rekey after an employee or contractor leaves?</h2>
              <p>Call A Good Locksmith to discuss the key, affected doors, authorization, and commercial rekeying options in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 15, 2026. This article provides general key-control and locksmith information, not legal, employment, fire-code, or site-specific security advice. Lock functions, master-key hierarchies, authorization, leases, access-control systems, and applicable requirements vary. In an emergency or immediate threat, call 911.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before you call</h2>
              <ul>
                <li>Which key is missing?</li>
                <li>What did it open?</li>
                <li>Was it a master key?</li>
                <li>Were copies tracked?</li>
                <li>Who can authorize work?</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need commercial rekeying?</h2>
              <p>Have the key record, affected doors, hardware photos, and property authorization ready.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default EmployeeKeyOffboardingGuidePost;
