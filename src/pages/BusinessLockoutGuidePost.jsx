import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const BusinessLockoutGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A locked commercial door can interrupt opening time, deliveries, appointments, or an employee’s workday. A few accurate details can help a locksmith determine whether the call is within scope before anyone is dispatched.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Start with safety:</strong> If there is smoke, fire, a gas odor, an alarm, a medical emergency, or a person in immediate danger, move to a safe place and call 911. An ordinary business lockout call is not a substitute for emergency responders.
            </div>

            <p>Mike Galdine brings 35 years of locksmith experience to A Good Locksmith’s commercial work. One lesson remains consistent: “locked out” describes the result, not necessarily the cause. The problem may involve a mechanical key, damaged lock, keypad, access credential, exit device, door alignment, or another part of the opening.</p>

            <h2>Confirm who can authorize entry</h2>
            <p><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByChapter/Chapter_74F.html" target="_blank" rel="noreferrer">North Carolina General Statute § 74F-14</a> requires a licensed locksmith opening a locked commercial, residential, or vehicle door to make a reasonable effort to verify that the customer owns the property or is authorized by the owner to enter it.</p>
            <p>Have a valid photo ID and available business or property information ready. Depending on the situation, useful documentation may include a lease, property-management contact, company identification, owner authorization, or records that connect the caller to the premises. An employee who normally has a key may not have authority to approve every type of work.</p>
            <p>If the business rents its space, identify whether the landlord or property manager controls the exterior lock, storefront system, common entrance, or master-key system. The locksmith should not alter building-wide access based only on a caller’s assumption.</p>

            <h2>Give the exact location—not only the town</h2>
            <p>Provide the full street address, business or suite name, unit number, and the entrance where you will meet the locksmith. In a shopping center, industrial property, office complex, or multi-building site, say which storefront, loading door, or office entrance is involved.</p>
            <p>A Good Locksmith serves Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County from a Lillington home base. The exact address is needed to confirm travel availability and timing, especially for extended service areas.</p>

            <h2>Describe the access problem precisely</h2>
            <p>Before calling, look at the door without forcing or dismantling anything. Report what you know:</p>
            <ul>
              <li><strong>Keyed lock:</strong> Is the key missing, broken, turning without opening, or refusing to turn?</li>
              <li><strong>Keypad or credential:</strong> Is the device dark, rejecting one credential, or rejecting every authorized user?</li>
              <li><strong>Door condition:</strong> Is the door rubbing, sagging, visibly damaged, or partly open but unable to latch?</li>
              <li><strong>Commercial hardware:</strong> Is there an exit device, storefront lock, closer, electric strike, or other access-control equipment?</li>
              <li><strong>Other entrances:</strong> Is there another authorized entrance controlled by the owner or property manager?</li>
            </ul>
            <p>Photos of the door, lock face, edge, and visible brand can help identify the opening. Do not send a clear photo of a working key’s cuts or printed key-control information; our <Link to="/blog/key-photo-bitting-code-security-nc">key-photo security guide</Link> explains why.</p>

            <h2>Avoid turning one lockout into door damage</h2>
            <p>Do not pry the door, force the key, drill the cylinder, remove hinges, climb to an unsafe opening, or manipulate electrical access equipment. Commercial openings may contain fire-rated, egress, alarm, or access-control components that must continue working together.</p>
            <p>If a key is hard to turn or already cracked, stop before it breaks; see our <Link to="/blog/key-hard-to-turn-broken-key-extraction-nc">broken-key warning guide</Link>. If there is visible forced-entry damage, preserve the scene and follow the safety steps in our <Link to="/blog/locks-after-break-in-forced-entry-nc">post-break-in lock guide</Link>.</p>

            <h2>Keep employee exit available</h2>
            <p>Once authorized entry is restored, do not leave an occupied workplace secured in a way that traps people inside. <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.36" target="_blank" rel="noreferrer">OSHA’s exit-route standard</a> says employees must be able to open an exit-route door from inside without keys, tools, or special knowledge. Never add a padlock, chain, slide bolt, or improvised restraint to an exit door as a temporary fix.</p>
            <p>Test normal exit operation as permitted by the business’s safety procedures. If a panic bar, latch, closer, or exit door does not operate correctly, our <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">commercial exit-door checklist</Link> explains the warning signs that need attention.</p>

            <h2>Decide what happens after the door is open</h2>
            <p>Opening the door solves immediate access, but it may not resolve the reason access failed. If a key is lost, stolen, unreturned, or outside the business’s control, discuss whether compatible cylinders should be rekeyed so that key no longer works. If the lock or door is damaged or unreliable, an inspection should determine whether adjustment, repair, or suitable replacement is appropriate.</p>
            <p>For a master-key or access-control system, document exactly which credential or key is missing and which openings it operates. Avoid making broad system changes until the authorized decision-maker understands the effect on other employees, tenants, vendors, and doors. Our <Link to="/blog/commercial-master-key-system-guide-nc">master-key planning guide</Link> covers access levels and lost-key planning.</p>

            <h2>Call a licensed North Carolina locksmith</h2>
            <p>North Carolina’s <a href="https://nclocksmithboard.org/verify-license/" target="_blank" rel="noreferrer">Locksmith Licensing Board verification page</a> lets customers check a locksmith by name. The Board’s list was current August 24, 2026 when reviewed for this article. A Good Locksmith identifies its North Carolina license as NCLL #3119.</p>
            <p>When you call, provide the address, your role, available authorization, door and lock description, what happened immediately before the lockout, and whether anyone is inside. Mike can then confirm whether A Good Locksmith supports the hardware and location and explain the proposed scope before dispatch.</p>

            <section className="article-cta">
              <span>Authorized commercial access starts with clear information</span>
              <h2>Locked out of your business?</h2>
              <p>Call A Good Locksmith to discuss commercial lockout service in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 5, 2026. This is general lockout and workplace-safety information. Authorization requirements and the proper response depend on the property, hardware, lease, access system, and circumstances.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Have ready</h2>
              <ul>
                <li>Photo identification</li>
                <li>Owner authorization</li>
                <li>Exact address and suite</li>
                <li>Door and lock details</li>
                <li>Working-contact information</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default BusinessLockoutGuidePost;
