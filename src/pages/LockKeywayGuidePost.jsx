import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LockKeywayGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A key must have the right profile to enter a lock before its cuts can operate the pins. That first compatibility check is the keyway.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> the keyway is the shape of the opening and internal profile that accepts a compatible key blank. The key's cuts—its bitting—are a separate part of the match. A key needs both the correct profile and the correct cuts to operate a conventional pin-tumbler cylinder.
            </div>

            <p>When a key will not enter a cylinder, customers sometimes assume the copy was cut badly. When it enters but will not turn, they may assume the lock is broken. Either can happen, but the first question is simpler: was the key made on a blank that matches the lock's keyway?</p>

            <p>Mike Galdine has spent 35 years identifying locks, cylinders, blanks, and key systems before recommending a copy, rekey, or replacement. This guide gives homeowners, landlords, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County a useful way to understand that compatibility check.</p>

            <h2>What is a lock keyway?</h2>
            <p>Schlage's current key-systems guidance defines a keyway as the shape of the hole into which the key must fit. The matching key blank has grooves and a blade profile designed to pass through that shape. A visibly similar blank can stop at the entrance, bind partway in, or fit poorly if its profile is wrong.</p>

            <p>The Schlage key-systems catalog makes the distinction especially clear: a <strong>key blank</strong> is an uncut key made to enter a specific cylinder keyway, while <strong>bitting</strong> means the key's actual cuts or the numbers that represent them. The blank establishes physical compatibility; the cuts position the cylinder's tumblers for operation.</p>

            <div className="article-callout">
              <strong>Profile first, cuts second:</strong> matching the peaks and valleys of an existing key is not enough if the blank itself does not match the keyway. Conversely, a correct blank still will not open the lock until it has the authorized, correct bitting.
            </div>

            <h2>Is a keyway the same as a brand?</h2>
            <p>No. A manufacturer's name on the key or lock is useful identification, but it is not a complete compatibility specification. Manufacturers can offer multiple keyway families, and a family may include several sections or formats. Schlage, for example, publishes distinct Classic Obverse and Everest 29 families, with different options within those families.</p>

            <p>Do not buy blanks or replacement cylinders from the logo alone. A locksmith can compare the blade profile, shoulder or tip reference, length, pin count, markings, and the cylinder itself. That matters when trying to make several doors <Link to="/blog/can-one-key-open-every-door-keyed-alike-nc">work with one keyed-alike key</Link> or when deciding whether a <Link to="/blog/replace-lock-cylinder-keep-existing-lock-nc">cylinder can be replaced without replacing the whole lock</Link>.</p>

            <h2>Why will one key enter but another will not?</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Wrong keyway:</strong> the grooves and blade profile do not match the cylinder opening</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Wrong blank length or reference:</strong> the cuts do not line up with the tumbler positions</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Damaged key:</strong> a bend, burr, heavy wear, or deformed tip prevents normal insertion</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Blocked or damaged cylinder:</strong> debris, a foreign object, damage, or an internal fault obstructs the keyway</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Incorrectly copied key:</strong> the blank may fit, but the bitting or spacing does not operate the cylinder</li>
            </ul>

            <p>Never force a key that stops or binds. Forcing can bend or break the key and may complicate the original problem. Compare it with a known working key without sharing clear close-up photos of the cuts publicly. If a newly copied key enters normally but does not work, see our <Link to="/blog/new-duplicate-house-key-wont-work-nc">duplicate-key troubleshooting guide</Link>.</p>

            <h2>How does the keyway affect rekeying?</h2>
            <p>Rekeying changes the cylinder's internal pinning so a new bitting operates it. It does not automatically change the keyway profile. If several compatible cylinders already share a suitable keyway, a locksmith may be able to key them alike. If their keyways or cylinder formats are incompatible, the plan may require different cylinders or hardware.</p>

            <p>This is why “make every door use this key” cannot be answered from the key's appearance alone. The locksmith must identify each cylinder, confirm that the intended blank can enter it, evaluate condition and function, and then determine the appropriate rekey or replacement plan. Our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> explains what each service changes.</p>

            <h2>Open, restricted, and patented keyways are a different question</h2>
            <p>A keyway also belongs to a key-control system. Schlage explains that an open keyway and a restricted keyway differ in how keys and blanks are distributed and controlled. Restricted systems may require authorization and controlled ordering. That administrative question is separate from whether a blank physically fits.</p>

            <p>A stamped message alone does not identify the full system. Our recent guide to <Link to="/blog/do-not-duplicate-key-can-it-be-copied-nc">“Do Not Duplicate” keys</Link> covers authorization, patents, and restricted blanks in more detail. This article's narrower point is physical compatibility: even an ordinary authorized copy needs the correct keyway and bitting.</p>

            <h2>What to bring or photograph for identification</h2>
            <ul>
              <li>A working key, if one exists, kept in your possession until service</li>
              <li>The problem key and any original key that works better</li>
              <li>Clear photos of the lock face, both sides of the hardware, and visible brand or model markings</li>
              <li>The number of doors or cylinders you want to operate with the planned key</li>
              <li>Whether the property is a home, rental, business, school, office, or managed facility</li>
              <li>Any key-control records or authorization documents for a restricted system</li>
            </ul>

            <p>Avoid posting or texting an unnecessary straight-on, high-resolution image of an entire working key blade. General hardware photos often provide a safer starting point. For service, be prepared to show authorization for the property or key system.</p>

            <h2>When a locksmith should inspect the cylinder</h2>
            <p>Arrange an inspection when the correct key no longer enters normally, multiple copies fail the same way, the keyway is visibly damaged or obstructed, a key broke inside, or you need different doors coordinated to one authorized key. The problem may involve the key, the cylinder, the lock body, installation, wear, or more than one of those factors.</p>

            <p>North Carolina law defines repairing, rekeying, repinning, servicing, adjusting, and installing locks as locksmith services and requires licensure. A Good Locksmith provides authorized residential and commercial locksmith service under NCLL #3119.</p>

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
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/key-systems.html" target="_blank" rel="noreferrer">Schlage 101: Key Systems and Keyway Definitions</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-documents-2/Catalog/Schlage_Key_Systems_Cylinders_and_Keys_Catalog_109487.pdf" target="_blank" rel="noreferrer">Schlage Key Systems, Cylinders, and Keys Catalog</a></li>
              <li><a href="https://commercial.schlage.com/en/products/key-systems/classic-obverse-keyways.html" target="_blank" rel="noreferrer">Schlage Classic Obverse Keyways</a></li>
              <li><a href="https://commercial.schlage.com/en/products/key-systems/everest-29-keyways.html" target="_blank" rel="noreferrer">Schlage Everest 29 Keyways</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina Locksmith Licensing Act, Chapter 74F</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the system before ordering keys or cylinders</span>
              <h2>Need help matching a key to your locks?</h2>
              <p>Call A Good Locksmith with the hardware location, visible markings, and what the key does when inserted. Mike can identify the compatibility issue and explain whether duplication, rekeying, cylinder service, or replacement is appropriate.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 12, 2026. This article provides general key-and-cylinder information, not a remote identification or guarantee of compatibility. Keyway families, cylinder formats, key-control rules, patents, and authorization requirements vary. Do not force a key, disassemble an unfamiliar cylinder, or share detailed working-key images publicly.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Two matches are needed</h2>
              <ul>
                <li>Keyway profile</li>
                <li>Correct blank</li>
                <li>Correct bitting</li>
                <li>Working cylinder</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Do not force it</h2>
              <p>If a key stops, binds, or no longer enters normally, keep it out of the lock and have the key and cylinder identified.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LockKeywayGuidePost;
