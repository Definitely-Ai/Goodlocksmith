import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const EvictionLockChangeGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">For a residential eviction, the lock change belongs at the lawful-possession stage—not at the first missed payment, the filing of a case, or even the entry of a judgment by itself.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not schedule a self-help lockout:</strong> North Carolina landlords cannot remove a residential tenant by changing locks, shutting off utilities, or removing doors. Confirm that the sheriff has executed the writ and restored lawful possession before treating the unit as a turnover rekey.
            </div>

            <p>A landlord may know that a tenancy is ending, but a locksmith should not be asked to decide whether the tenant’s right to occupy has ended. Court orders, appeals, stays, voluntary surrender, abandonment, and execution of a writ can change the answer. The owner or authorized property manager must establish the legal authority for the work.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to rental-property rekeying. One practical lesson is consistent: separate the legal possession decision from the mechanical lock work. This guide helps landlords and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County prepare for the locksmith portion without getting ahead of the court and sheriff.</p>

            <h2>Changing the locks is not a substitute for eviction</h2>
            <p><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-25.6.html" target="_blank" rel="noreferrer">North Carolina General Statute § 42-25.6</a> states that a residential tenant may be removed only through the procedures prescribed by state law. The <a href="https://www.nccourts.gov/help-topics/housing/landlordtenant-issues" target="_blank" rel="noreferrer">North Carolina Judicial Branch’s landlord-tenant guide</a> translates that boundary into plain language: a landlord cannot force a tenant out without going to court, including by changing the locks.</p>

            <p>That means a lease violation notice, unpaid balance, expired lease, filed complaint, scheduled hearing, or favorable magistrate decision should not automatically be treated as permission to deny entry. Each is a different point in the process. If possession is disputed, confirm the status with the clerk, sheriff, property manager, or a North Carolina attorney before calling for a lock change.</p>

            <h2>A judgment and a completed lockout are not the same event</h2>
            <p>The Judicial Branch explains that both sides generally have 10 days after a magistrate’s decision to appeal. After the appeal period ends, the landlord may ask the clerk for a writ of possession. Appeals, bonds to stay execution, payments, agreements, and court orders can affect the process, so a calendar estimate is not enough to authorize rekeying.</p>

            <p>The key operational point is execution of the writ. <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-36.2.html" target="_blank" rel="noreferrer">G.S. § 42-36.2</a> describes the sheriff’s notice and execution process. It also says that when the landlord or authorized agent elects to leave the tenant’s property on the premises, the sheriff simply locks the premises. The Judicial Branch says the sheriff removes the tenant and the landlord padlocks the doors or changes the locks.</p>

            <div className="article-callout">
              <strong>Practical scheduling rule:</strong> Coordinate with the sheriff or the landlord’s attorney and have the authorized decision-maker present or immediately available. Do not ask a locksmith to rely on an uncertain date, a text saying “we won,” or an unexecuted writ.
            </div>

            <h2>Confirm what the sheriff expects at the property</h2>
            <p>Procedures and scheduling details can vary by county. Before the appointment, the landlord or manager should ask the responsible sheriff’s office whether a locksmith must be present, when access will be released, which doors must be secured, and what documents or representatives are required onsite.</p>

            <p>Do not begin drilling, removing cylinders, or disabling keys before the deputy authorizes the lockout step. If the tenant has already moved voluntarily, or the property appears abandoned, do not assume the writ process is irrelevant; those situations have their own legal and factual questions that should be resolved before access is changed.</p>

            <h2>Remaining belongings still affect the access plan</h2>
            <p>Restoring possession to the landlord does not always end every obligation concerning property left inside. G.S. § 42-36.2 provides a post-execution period during which, upon a timely request, the landlord must release the remaining property to the tenant during regular business hours or at an agreed time. <a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_42/GS_42-25.9.html" target="_blank" rel="noreferrer">G.S. § 42-25.9</a> also addresses remedies for unlawful removal and interference with a tenant’s property. Other rules and shorter periods can apply depending on the property and circumstances.</p>

            <p>The locksmith’s job is to establish the new authorized key control—not to decide when belongings may be removed or who may reenter. The landlord should create a supervised-access plan, identify who can authorize entry, document any released keys, and obtain legal guidance about handling personal property.</p>

            <h2>Prepare the lock-change scope before the deputy arrives</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Confirm the exact address, unit, and every exterior opening within the landlord’s control</li>
              <li><FaCheckCircle /> Identify the owner or property manager who can authorize the work</li>
              <li><FaCheckCircle /> Verify the sheriff’s date, arrival procedure, and locksmith expectations</li>
              <li><FaCheckCircle /> Photograph the existing hardware without disturbing it</li>
              <li><FaCheckCircle /> Note whether the locks are part of a master-key, common-area, keypad, or access-control system</li>
              <li><FaCheckCircle /> Decide who should receive new keys and how many issued copies will be recorded</li>
              <li><FaCheckCircle /> Plan controlled access if belongings remain in the unit</li>
            </ul>

            <p>If a key is part of a larger property system, changing one cylinder without checking the key plan can affect maintenance, emergency, or manager access. Our <Link to="/blog/commercial-master-key-system-guide-nc">master-key planning guide</Link> explains access levels and key records. For ordinary compatible locks, review <Link to="/blog/rekey-lock-without-original-key-nc">whether a lock can be rekeyed without the original key</Link>.</p>

            <h2>Rekeying may preserve suitable existing hardware</h2>
            <p>After possession is lawfully restored, rekeying a compatible cylinder changes which key operates it so the former key no longer works. Replacement installs different hardware. Rekeying may be appropriate when the existing lock is serviceable and suitable; replacement may be needed when hardware is damaged, unreliable, incompatible, or no longer fits the property’s needs.</p>

            <p>Inspect the complete opening after access is secured. A lock change does not repair a split door, loose strike, damaged frame, binding latch, or failed closer. Mike evaluates the lock, keying, door operation, and authorized access plan before recommending the practical next step.</p>

            <h2>Keep the turnover record clear</h2>
            <p>Document the date and authority for the work, which openings were changed, whether each lock was rekeyed or replaced, the number of new keys issued, who received them, and any hardware that still needs attention. Do not label keys with a complete street address or unit number where a lost key could identify the property.</p>

            <p>Before a new tenant moves in, test every authorized key, confirm that exterior doors latch and lock normally, and account for contractor or maintenance access. The broader <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link> can help the manager review strikes, frames, hinges, and other openings during turnover.</p>

            <h2>Eviction rekeying in Harnett County and nearby communities</h2>
            <p>A Good Locksmith can discuss residential rental-property rekeying after the owner or authorized manager has confirmed lawful possession and coordinated the required process. Have the property address, lock photos, responsible contact, sheriff instructions, key-system details, and authorization ready when you call.</p>

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
              <span>Lawful possession first—new key control next</span>
              <h2>Ready to secure an authorized rental-property turnover?</h2>
              <p>Call A Good Locksmith to discuss supported rekeying or lock replacement after the legal possession process is complete.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 10, 2026. This article provides general locksmith and process information, not legal advice. Eviction, appeal, abandonment, personal-property, subsidized-housing, manufactured-home, and commercial-tenancy rules may differ. Confirm the case with the clerk, sheriff, property manager, or a qualified North Carolina attorney before changing access.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before scheduling</h2>
              <ul>
                <li>Confirm lawful possession</li>
                <li>Coordinate with the sheriff</li>
                <li>Identify the authorized manager</li>
                <li>List every affected opening</li>
                <li>Plan key issuance and retrieval access</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need turnover rekeying?</h2>
              <p>Have the address, authorization, sheriff instructions, lock photos, and key-system details ready.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default EvictionLockChangeGuidePost;
