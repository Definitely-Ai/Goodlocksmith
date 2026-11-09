import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LocksmithWarrantyGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Some lock hardware carries a manufacturer warranty, and a service provider may offer separate terms for labor or workmanship. Those are different promises with different limits, claim procedures, and responsible parties.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> Do not assume that every locksmith job includes the same warranty. Ask what is covered, who provides the coverage, how long it lasts, what is excluded, and what records a claim requires. Get any service promise in writing and keep the invoice and product information.
            </div>

            <p>“Is this under warranty?” sounds like one question, but a lock problem can involve several separate responsibilities. A manufacturer may cover a defective lock component. A locksmith may state terms for the work performed. A door, frame, hinge, closer, wiring, app, battery, or unrelated part may fall outside both.</p>

            <p>Mike Galdine’s 35 years of locksmith experience point to the same practical starting place: identify the exact failure before deciding who should address it. Replacing a covered cylinder will not correct a door that presses the bolt against the strike, and adjusting a door does not create warranty coverage for damaged electronics.</p>

            <p>This guide is for homeowners, landlords, property managers, drivers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County. It explains useful questions to ask; it does not state or change the warranty terms of A Good Locksmith, a manufacturer, or another provider.</p>

            <h2>Start by separating product coverage from service terms</h2>

            <h3>Manufacturer product warranty</h3>
            <p>A manufacturer warranty applies according to the written terms for the exact product. It may distinguish mechanical parts, finish, and electronics, and it may limit coverage to the original residential purchaser, an authorized seller, a particular application, or a stated period.</p>

            <p>For example, Schlage’s current residential warranty lists different periods for mechanical, finish, and electronic coverage. Its terms exclude labor costs such as removal and reinstallation and exclude commercial applications from that residential warranty. Kwikset’s current residential terms likewise separate mechanical, finish, and electronic coverage, require proof of purchase for a claim, and identify exclusions including damage from installation contrary to its written instructions.</p>

            <p>Those examples do not establish coverage for another brand, commercial product, older model, transferred property, or particular failure. Read the document tied to the exact model and purchase.</p>

            <h3>Locksmith labor or workmanship terms</h3>
            <p>Any promise about a service visit, adjustment, installation, rekey, repair, or programming belongs to the provider’s stated terms. Ask whether the provider offers a workmanship warranty for the approved scope, when that period begins, and what the remedy would be. Do not infer a labor warranty from a manufacturer logo or from the fact that a part has product coverage.</p>

            <p>The Federal Trade Commission advises consumers to get spoken warranty promises in writing. A clear invoice should identify the work performed and parts supplied, while any separate written terms should explain coverage and exclusions.</p>

            <h3>Service contracts and maintenance plans</h3>
            <p>A paid service contract or maintenance plan is not automatically the same as a warranty. The FTC distinguishes a separately sold service contract from a warranty that may accompany a product. If a commercial property has ongoing door-hardware service, review the agreement itself instead of assuming every callback is included.</p>

            <h2>Ask these questions before approving the work</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> Is there a written manufacturer warranty for this exact model and application?</li>
              <li><FaCheckCircle aria-hidden="true" /> Is any labor or workmanship coverage offered separately by the locksmith?</li>
              <li><FaCheckCircle aria-hidden="true" /> What date starts the coverage, and how long does each part last?</li>
              <li><FaCheckCircle aria-hidden="true" /> Does the remedy include diagnosis, parts, labor, removal, reinstallation, shipping, or only some of those?</li>
              <li><FaCheckCircle aria-hidden="true" /> Who handles a claim: the locksmith, seller, distributor, or manufacturer?</li>
              <li><FaCheckCircle aria-hidden="true" /> What exclusions apply to wear, misuse, corrosion, batteries, connectivity, door movement, existing damage, or unauthorized alterations?</li>
              <li><FaCheckCircle aria-hidden="true" /> What proof of purchase, model number, serial number, photographs, or returned part is required?</li>
            </ul>

            <p>Ask these questions before work when practical, but do not delay emergency safety steps to research paperwork. If a person is in danger, a child or pet is locked in a vehicle, or an exit is unsafe, contact emergency services first as appropriate.</p>

            <h2>Why the symptom still needs a diagnosis</h2>
            <p>A key that binds, a deadbolt that will not extend, or a smart lock that reports a jam does not identify the failed part by itself. The source may be the key, cylinder, latch or bolt, mounting, strike, door position, frame, power supply, account, network connection, or internal electronics.</p>

            <p>That distinction matters to a claim. A manufacturer may ask for troubleshooting or inspection before authorizing replacement. A provider may need to determine whether the reported problem follows the serviced component or comes from a separate condition. Our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> explains why the remedy should follow the diagnosis.</p>

            <p>For a sticking or misaligned opening, see our guide to deciding between a <Link to="/blog/locksmith-or-door-repair-company-nc">locksmith and a door-repair company</Link>. A new lock cannot repair a split jamb, sagging door, failed hinge, or bent frame.</p>

            <h2>Common reasons coverage may be limited</h2>
            <p>Exact exclusions vary, but written product warranties commonly address the intended application, original purchaser, proof of purchase, authorized seller, installation instructions, misuse, alterations, chemicals, environmental exposure, normal wear, and commercial use of residential products.</p>

            <p>Electronic locks may have a shorter electronic warranty than their mechanical coverage. Batteries, apps, cloud services, hubs, phones, Wi-Fi equipment, and third-party integrations may have separate responsibilities. Our guide to <Link to="/blog/smart-lock-vs-traditional-deadbolt-nc">smart locks versus traditional deadbolts</Link> explains why the complete system matters.</p>

            <p>Do not disassemble unfamiliar hardware, force a key, drill a lock, spray an unidentified chemical, or alter wiring merely to test a warranty theory. An improvised repair can add damage, make the original condition harder to document, and conflict with written product instructions.</p>

            <h2>Keep a simple service record</h2>
            <p>Good records make a future question much easier to resolve. Keep:</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The dated invoice and proof of payment</li>
              <li><FaCheckCircle aria-hidden="true" /> The approved scope and any written estimate or change</li>
              <li><FaCheckCircle aria-hidden="true" /> The manufacturer, model, finish, and product identifiers when available</li>
              <li><FaCheckCircle aria-hidden="true" /> The current written warranty or service terms</li>
              <li><FaCheckCircle aria-hidden="true" /> Installation, programming, and maintenance instructions</li>
              <li><FaCheckCircle aria-hidden="true" /> A description of the symptom, when it began, and whether it occurs with the door open or closed</li>
              <li><FaCheckCircle aria-hidden="true" /> Clear photos of the hardware and opening without exposing working key cuts, access codes, or sensitive key-system information</li>
            </ul>

            <p>At the end of a job, test the included keys and hardware with the door open and closed, subject to safe operation. Our <Link to="/blog/how-to-check-locksmith-work-before-they-leave-nc">finished locksmith work checklist</Link> covers that handoff without treating a successful test as a guarantee against every future failure.</p>

            <h2>Licensing and warranty are not the same thing</h2>
            <p>North Carolina’s Locksmith Licensing Act requires a license to offer or perform regulated locksmith services in the state and requires advertisements to display a valid license number. Licensure is an important credential, but Chapter 74F does not turn every locksmith service into one universal product or labor warranty.</p>

            <p>Verify the license, understand the scope, and keep the paperwork. A Good Locksmith provides licensed residential, commercial, and supported automotive locksmith service under NCLL #3119. The appropriate product, repair, or claim path still depends on the exact hardware, service, condition, and written terms.</p>

            <h2>Questions about a lock or prior service in Harnett County?</h2>
            <p>A Good Locksmith can inspect a lock and the surrounding opening, identify what appears to be failing, and explain whether the next step is adjustment, repair, rekeying, replacement, manufacturer support, or another qualified trade. Bring the invoice, product information, keys, and any written warranty terms you have.</p>

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
              <li><a href="https://consumer.ftc.gov/articles/warranties" target="_blank" rel="noreferrer">Federal Trade Commission: Warranties</a></li>
              <li><a href="https://www.schlage.com/content/dam/sch-us/documents/pdf/schlage_residential_warranty.pdf" target="_blank" rel="noreferrer">Schlage: Limited Product Warranty for Residential Applications</a></li>
              <li><a href="https://www.kwikset.com/support/warranty" target="_blank" rel="noreferrer">Kwikset: Limited Warranties</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Assembly: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Start with an accurate diagnosis</span>
              <h2>Need a licensed locksmith to evaluate a lock?</h2>
              <p>Call A Good Locksmith for local service backed by Mike Galdine’s 35 years of locksmith experience.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed November 9, 2026. This article provides general consumer information, not a statement of A Good Locksmith’s warranty terms, a manufacturer claim decision, or legal advice. Product coverage, workmanship terms, remedies, exclusions, and claim procedures depend on the exact written documents, product, purchaser, application, service scope, condition, and applicable law.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Three separate questions</h2>
              <p>Product warranty, workmanship terms, and service contracts are not interchangeable.</p>
            </div>
            <div className="sidebar-card">
              <h2>Get it in writing</h2>
              <p>Keep the invoice, exact product information, coverage terms, and claim instructions.</p>
            </div>
            <div className="sidebar-card">
              <h2>Diagnose first</h2>
              <p>A door, frame, power, or network problem may not be a failed lock component.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LocksmithWarrantyGuidePost;
