import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoNotDuplicateKeyGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Not necessarily. “Do Not Duplicate” is a marking; it does not by itself identify whether the blank is open, restricted, patent-protected, or controlled by an authorization agreement. A locksmith must identify the actual key system before deciding whether a duplicate can be supplied.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Read the system, not just the stamp:</strong> two keys can both say “Do Not Duplicate” while one uses a widely available blank and the other belongs to a restricted program that requires documented authorization.
            </div>

            <p>A “Do Not Duplicate,” “Do Not Copy,” or similar stamp is often used by a landlord, employer, institution, or property manager to communicate that the key should not be copied without permission. That message matters, but the words alone do not reveal the technical and administrative controls behind the key.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to identifying keys and protecting customer authorization. This guide helps homeowners, tenants, employees, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County understand why the answer is sometimes yes, sometimes no, and sometimes “only with the right authorization.”</p>

            <h2>The stamp and the keyway are different things</h2>
            <p>The <strong>stamp</strong> is the wording visible on the key. The <strong>keyway</strong> is the shaped profile of the blade and matching cylinder. The keyway determines which blank can physically enter the lock; the manufacturer’s distribution program determines who can obtain that blank and under what conditions.</p>

            <p>An ordinary key using an open, widely distributed keyway may be stamped “Do Not Duplicate.” The marking communicates the issuer’s instruction, but it does not transform that blank into a restricted product. Conversely, a restricted key may have manufacturer names, system identifiers, patent notices, facility codes, or other markings rather than those exact three words.</p>

            <h2>Open and restricted keyways use different controls</h2>
            <p>Schlage describes restricted keyways as systems in which the original manufacturer controls access to key blanks. Authorized locksmiths or end users may have an account with the manufacturer and must provide proof of authorization before receiving restricted blanks, cylinders, or cut keys.</p>

            <p>Allegion’s current key-system guide shows the practical difference. Some open keyways require no authorization, while specified restricted systems require a letter of authorization. Medeco describes programs in which duplication is limited to the originating authorized dealer and the dealer must verify identity and authority before cutting an additional key.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Open keyway:</strong> blanks are generally available through ordinary distribution, subject to the service provider’s policies and customer authority</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Restricted keyway:</strong> blank distribution is limited and the system’s authorization procedure must be followed</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Patent-protected design:</strong> applicable patent rights can restrict unauthorized manufacture or distribution of the protected blank</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Exclusive or registered system:</strong> the manufacturer or authorized dealer may maintain records tying the system to a specific end user, dealer, or territory</li>
            </ul>

            <p>These categories can overlap. A patented keyway can be open or restricted depending on the product program. A complicated-looking key is not automatically restricted, and a familiar-looking key should not be assumed unrestricted.</p>

            <h2>Why a locksmith may ask for identification and authorization</h2>
            <p>A controlled-key request is not only a cutting task; it is an authority question. The locksmith may need to identify the key, locate the registered system, verify the person requesting the duplicate, confirm an authorization signature or card, and determine whether that shop is permitted to service the keyway.</p>

            <p>North Carolina’s current locksmith ethics rule, 21 NCAC 29 .0503, says locksmiths shall not deliberately breach a restricted key system. It also requires customer identity records when a locksmith originates a key or otherwise provides access to property, and it requires protection of customer key-system information.</p>

            <p>That means a licensed locksmith may properly decline the request, ask the requester to contact the system owner, or direct the customer to the authorized dealer. A refusal does not necessarily mean the key is impossible to cut; it may mean the required authority, blank, agreement, or system record is not available.</p>

            <h2>What to bring when you need another key</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The original key, without altering or covering its identifying marks</li>
              <li><FaCheckCircle aria-hidden="true" /> Government-issued identification when requested</li>
              <li><FaCheckCircle aria-hidden="true" /> A current authorization card, letter, purchase record, or facility contact for a controlled system</li>
              <li><FaCheckCircle aria-hidden="true" /> The property or organization name and the person responsible for the key system</li>
              <li><FaCheckCircle aria-hidden="true" /> For an unfamiliar key, clear photos of both sides for identification—sent privately, not posted publicly</li>
            </ul>

            <p>Do not file, grind, trace, or modify the key before identification. Do not publish detailed key photographs, serial numbers, facility codes, or authorization documents. Our guide to <Link to="/blog/key-photo-bitting-code-security-nc">key-photo and bitting-code security</Link> explains why visible cuts and markings should be protected.</p>

            <h2>If you manage the property, verify the system before ordering more keys</h2>
            <p>A manager who inherits a ring of keys should document which doors each key operates, who currently holds duplicates, whether the system is open or restricted, which dealer controls it, and who is authorized to order service. A stamp without records is not a complete key-control program.</p>

            <p>If keys are missing or former users may still have access, duplicating another copy does not solve the exposure. Consider whether affected cylinders should be rekeyed and whether the existing system should be updated. Read our guides to <Link to="/blog/rekey-business-locks-after-employee-leaves-nc">rekeying after an employee leaves</Link> and <Link to="/blog/commercial-master-key-system-guide-nc">planning a commercial master-key system</Link>.</p>

            <p>For a home, a normal open keyway may be appropriate when convenience and broad service availability are priorities. A restricted system may be useful when documented duplication control is a specific goal. Our <Link to="/blog/high-security-locks-key-control-guide-nc">high-security lock and key-control guide</Link> explains why key control, cylinder security, lock grade, and the complete door opening are separate considerations.</p>

            <h2>Do not rely on the stamp as the security feature</h2>
            <p>If unauthorized duplication is a serious concern, use a key system whose restrictions can be identified and administered—not merely ordinary keys with warning words added. Keep an issue log, recover keys when roles change, restrict ordering authority, and periodically confirm that the authorized dealer and end-user records are current.</p>

            <p>No mechanical key system replaces good management. Even a restricted system still needs accurate records, secure storage of spare and master keys, prompt reporting of lost keys, and a rekeying plan when control is uncertain.</p>

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
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/key-systems.html" target="_blank" rel="noreferrer">Schlage Commercial: Key Systems 101</a></li>
              <li><a href="https://us.allegion.com/en/key-systems.html" target="_blank" rel="noreferrer">Allegion: Open and Restricted Key Systems</a></li>
              <li><a href="https://www.medeco.com/en/resources/Carded-Programs/M4-DBK" target="_blank" rel="noreferrer">Medeco: Dealer-Based Key Control Program</a></li>
              <li><a href="https://reports.oah.state.nc.us/ncac/title%2021%20-%20occupational%20licensing%20boards%20and%20commissions/chapter%2029%20-%20locksmith%20licensing%20board/21%20ncac%2029%20.0503.pdf" target="_blank" rel="noreferrer">North Carolina Administrative Code 21 NCAC 29 .0503: Protection of the Public Interest</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Statutes Chapter 74F: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the keyway and authorization before copying</span>
              <h2>Need a key identified or a better key-control plan?</h2>
              <p>Call A Good Locksmith with the key, its markings, and your relationship to the property. Mike can identify supported keys, explain the authorization needed, and discuss rekeying or controlled-key options when duplication alone does not solve the security problem.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 8, 2026. This article provides general key-control information, not a universal statement that every marked key can or cannot be duplicated. Availability and authorization depend on the exact keyway, manufacturer program, patent status, system registration, customer authority, dealer agreement, and current law and policy.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Words are not the system</h2>
              <ul>
                <li>Identify the actual keyway</li>
                <li>Check blank distribution</li>
                <li>Verify authorization</li>
                <li>Protect system records</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Bring the original key</h2>
              <p>Have identification and any authorization card, letter, facility contact, or system record available.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoNotDuplicateKeyGuidePost;
