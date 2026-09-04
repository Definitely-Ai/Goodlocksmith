import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const TenantSafetyLockChangePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Yes. North Carolina has a specific lock-change process for protected tenants affected by domestic violence, sexual assault, or stalking. The steps depend on whether the person being excluded is also a tenant.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>If anyone is in immediate danger, call 911.</strong> A lock change is one part of a safety plan; it does not replace emergency help, a protective order, law enforcement, or advice from a qualified advocate or attorney.
            </div>

            <p>The controlling source is <a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_42/gs_42-42.3.html" target="_blank" rel="noreferrer">North Carolina General Statute § 42-42.3</a>. This plain-language overview is not legal advice.</p>
            <p>Mike Galdine brings 35 years of locksmith experience to A Good Locksmith’s rekeying and lock-installation work. That experience matters here because the job must protect the authorized occupant without creating uncertainty about who approved the work or who should receive keys.</p>

            <h2>When the person being excluded is not a tenant in the home</h2>
            <p>Under subsection (a), a protected tenant may notify the landlord orally or in writing and request a lock change. Documentation is not required to start a request under this subsection. The landlord must change the locks or give permission to do so within 48 hours.</p>

            <h2>When the person being excluded is also a tenant</h2>
            <p>Subsection (b) follows a different process. Before a lock change, the tenant must give the landlord a copy of a court order directing the other tenant to stay away from the dwelling unit. The landlord then has 72 hours to change the locks or give permission.</p>
            <p>The locksmith should not decide who a court order excludes or interpret an unclear order. The landlord, tenant, court, law enforcement, attorney, or advocate should resolve those questions before work begins.</p>

            <h2>Who pays, and what happens if the landlord does not act?</h2>
            <p>The protected tenant bears the expense. If the landlord misses the applicable deadline, the protected tenant may change the locks without permission and must give the landlord a new key within 48 hours after the change.</p>
            <p>These rules are specific to § 42-42.3. They should not be treated as a general right for every tenant to change rental-property locks without notice or authorization.</p>

            <h2>A practical checklist before scheduling locksmith work</h2>
            <ol>
              <li><strong>Address immediate safety first.</strong> Call 911 if there is danger now. The <a href="https://www.nccourts.gov/help-topics/domestic-violence/how-to-get-a-protection-order" target="_blank" rel="noreferrer">North Carolina Judicial Branch</a> also lists protection-order information, local service agencies, and the National Domestic Violence Hotline at 1-800-799-7233.</li>
              <li><strong>Follow the correct part of the statute.</strong> Whether the excluded person is a tenant in the same dwelling changes the required documentation and timeline.</li>
              <li><strong>Establish authorization.</strong> Be prepared to show identification and the information supporting the request. A locksmith must verify a lawful basis for altering access.</li>
              <li><strong>Identify every affected opening.</strong> Clarify whether the authorization covers the primary entrance, another exterior door, a keyed common entrance, or only the dwelling-unit locks.</li>
              <li><strong>Plan key delivery.</strong> Decide who receives new keys and how the landlord’s required key will be delivered and documented.</li>
              <li><strong>Account for electronic access.</strong> A mechanical rekey does not automatically remove keypad codes, app users, access cards, garage remotes, or building credentials. Those systems may require the landlord, property manager, or system administrator.</li>
            </ol>

            <h2>Rekeying or replacing the locks?</h2>
            <p>If compatible locks are serviceable, rekeying changes the internal keying so the prior key no longer operates them. Replacement may be appropriate when hardware is damaged, incompatible, unreliable, or when the authorized parties want a suitable upgrade. The door, frame, latch, deadbolt, and any connected access system should be considered together.</p>
            <p>Do not add a lock that interferes with emergency exit, violates the lease, or changes shared-building access outside the authorization. For general information about when old keys should stop working, see our <Link to="/blog/rekey-now-avoid-big-problems-later">property rekeying guide</Link>. Our <Link to="/blog/verify-licensed-locksmith-north-carolina">North Carolina locksmith-license guide</Link> explains how to verify a locksmith before hiring.</p>

            <h2>Authorized lock-change help in the local service area</h2>
            <p>A Good Locksmith can discuss authorized residential rekeying and lock installation for supported properties in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. Availability depends on the exact address, current schedule, hardware, and confirmation that the caller is authorized to approve the work.</p>
            <p>When calling, explain that the request involves a rental property and safety-related access change. Share only the information needed to verify authorization and define the locksmith work; legal and safety-planning questions should go to an attorney, court, law-enforcement agency, or victim-service advocate.</p>

            <section className="article-cta">
              <span>Clear authorization. Careful key control.</span>
              <h2>Need an authorized residential lock change?</h2>
              <p>Call A Good Locksmith to discuss rekeying or suitable lock replacement in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed September 4, 2026. This article is general information, not legal advice or an individualized safety plan. Read the current statute and obtain qualified legal or advocacy help for your circumstances.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before work begins</h2>
              <ul>
                <li>Address immediate danger</li>
                <li>Use the correct legal process</li>
                <li>Confirm authorization</li>
                <li>Identify covered doors</li>
                <li>Plan new-key delivery</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default TenantSafetyLockChangePost;
