import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LockGradeRatingsGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Grade 1, Grade 2, and Grade 3 are progressive performance levels defined within applicable ANSI/BHMA hardware standards. Grade 1 is the highest of the three—but the number is only useful when you know which product, standard, and certification it belongs to.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Short answer:</strong> Grade 1 represents the highest performance level in the traditional 1–3 system, followed by Grade 2 and Grade 3. It does not mean every Grade 1 product fits every door, that a Grade 3 product is automatically wrong, or that the lock number measures the strength of the complete doorway.
            </div>

            <p>Lock packages and commercial specifications often use grade numbers as if one digit tells the whole story. It does not. A useful comparison starts with the exact hardware category and applicable standard, then considers the opening, traffic, function, key control, installation, and safety requirements.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to hardware selection and installation. This guide helps homeowners, landlords, facility managers, and business owners in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County understand what a lock grade can—and cannot—tell them.</p>

            <h2>What do Grade 1, Grade 2, and Grade 3 mean?</h2>
            <p>The Builders Hardware Manufacturers Association explains that many ANSI/BHMA standards define Grade 1, Grade 2, or Grade 3 for a particular hardware item, with Grade 1 as the highest. The grades represent progressive performance benchmarks in the applicable standard. Those benchmarks can address cycle, operation, strength, security, finish, or other requirements depending on the product category.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Grade 1:</strong> the highest of the three performance levels</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Grade 2:</strong> an intermediate performance level</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Grade 3:</strong> the third defined performance level</li>
            </ul>

            <p>That ranking is accurate, but it is not a universal shopping rule. The exact test requirements live in the standard for that kind of hardware. A cylindrical lock, mortise lock, deadbolt, exit device, and door closer are not all evaluated as the same product.</p>

            <h2>A grade belongs to a product and a standard</h2>
            <p>Ask what the grade applies to. A package may contain a lever lock, deadbolt, latch, cylinder, electronic component, or combined assembly. The stated grade should be tied to an identifiable product and standard—not borrowed from one component to describe everything nearby.</p>

            <p>This is especially important when hardware is mixed. Changing the cylinder does not automatically change the grade of the lock body. Adding a smart-lock module does not prove a physical-security grade. Installing a Grade 1 lock on a split door, loose frame, poorly attached strike, or misaligned opening does not make the entire entrance Grade 1.</p>

            <p>Our <Link to="/blog/high-security-locks-key-control-guide-nc">high-security lock guide</Link> explains why hardware grade, high-security-cylinder level, and key control are separate questions. The <Link to="/blog/home-door-security-lock-checklist-nc">complete door-security checklist</Link> covers frames, strikes, hinges, and garage-entry doors.</p>

            <h2>Certification is different from an advertising claim</h2>
            <p>BHMA says participants in its certification program voluntarily submit products for independent laboratory testing against the applicable ANSI/BHMA standard. The program also uses periodic in-factory audits, and products that do not pass can lose certification.</p>

            <p>When a grade matters to the purchase, record the manufacturer, exact model or series, function, and stated standard. Then look for the exact product in the current BHMA Certified Products Directory or request current documentation. A similar appearance, family name, online marketplace title, or seller description is not a substitute for confirming the exact configuration.</p>

            <div className="article-callout">
              <strong>Do not compare numbers without context:</strong> “Grade 1” is meaningful only with the product category and applicable standard. It is not a universal score for every kind of lock, cylinder, key, door, or connected feature.
            </div>

            <h2>Why some residential labels use A, B, and C</h2>
            <p>Residential shoppers may also see the BHMA Certified Secure Home label. BHMA describes this label as reporting performance in three areas: security, durability, and finish. Its residential lockset standard states that products receive a Grade A, B, or C for each category independently.</p>

            <p>That means a residential label can show a combination of letters rather than one 1–3 grade. Read each category instead of translating A, B, or C directly into Grade 1, 2, or 3. The systems are presented differently and should be read according to the standard and label on the exact product.</p>

            <h2>What a lock grade does not prove</h2>
            <ul>
              <li><strong>Correct fit:</strong> backset, door thickness, preparation, handing, latch, strike, trim, and clearance still have to match.</li>
              <li><strong>Correct function:</strong> entry, storeroom, classroom, privacy, passage, and exit hardware operate differently.</li>
              <li><strong>Key control:</strong> a grade does not say who can authorize duplicates or whether the keyway is restricted.</li>
              <li><strong>Whole-door security:</strong> the door, frame, strike, hinges, glass, fasteners, and installation remain part of the opening.</li>
              <li><strong>Fire-door or egress approval:</strong> required listings, code compliance, and safe exit must be evaluated separately.</li>
              <li><strong>Cybersecurity:</strong> a mechanical grade does not rate the software, radio, app, update policy, or data practices of a connected lock.</li>
            </ul>

            <p>For commercial doors, start by choosing the right operating function using our <Link to="/blog/commercial-door-lock-functions-storeroom-classroom-office-nc">storeroom, classroom, and office lock guide</Link>. If the opening is an exit, review the <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">panic-hardware and exit-door checklist</Link> before changing hardware.</p>

            <h2>How should you choose a grade?</h2>
            <p>There is no honest one-grade answer for every property. A lightly used interior door, a home entrance, a multifamily common door, and a busy business entrance place different demands on hardware. Start with the number of users and expected traffic, the consequence of a failure, the required function, weather exposure, abuse risk, key-control needs, maintenance plan, and any fire, accessibility, or egress requirements.</p>

            <p>A higher grade can provide higher tested performance within its standard, but it may also involve different dimensions, functions, key systems, finishes, costs, or service needs. The best choice is a certified, compatible product installed correctly for the actual opening—not simply the highest number visible on a web page.</p>

            <h2>Questions to ask before buying</h2>
            <ol>
              <li><strong>What exact product is graded?</strong> Identify the model, series, function, and configuration.</li>
              <li><strong>Which standard applies?</strong> Ask for the ANSI/BHMA standard number rather than relying on “commercial grade” wording.</li>
              <li><strong>Is it currently certified?</strong> Verify the exact listing in the current directory or manufacturer documentation.</li>
              <li><strong>Will it fit the opening?</strong> Confirm measurements, preparation, door material, strike, frame, and compatible components.</li>
              <li><strong>Does it provide the right operation?</strong> Grade does not select the lock function or safe-exit arrangement.</li>
              <li><strong>What else needs attention?</strong> Check alignment, key control, door condition, and installation instead of treating the lock as an isolated part.</li>
            </ol>

            <h2>Lock selection in Harnett County</h2>
            <p>A Good Locksmith provides residential and commercial lock evaluation, installation, replacement, rekeying, and key-system planning for authorized customers. Mike can identify the existing preparation, explain which rating applies to a proposed product, and help match the hardware to the door’s use instead of treating one grade number as the whole decision.</p>

            <p>North Carolina defines installing, repairing, rekeying, servicing, and adjusting locks as locksmith services. State law also requires locksmith advertising to include a valid license number. A Good Locksmith identifies its license as NCLL #3119.</p>

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
            <ul className="article-sources">
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Product-Grade-Levels" target="_blank" rel="noreferrer">BHMA: Product Grade Levels</a></li>
              <li><a href="https://buildershardware.com/Certification-Program" target="_blank" rel="noreferrer">BHMA: Certification Program and Secure Home Label</a></li>
              <li><a href="https://buildershardware.com/Home-Sweet-Secure-Home/ansibhma-a15639-residential-locksets-and-latches" target="_blank" rel="noreferrer">ANSI/BHMA A156.39: Residential Locksets and Latches</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_74F/GS_74F-12.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-12: License Number in Advertising</a></li>
            </ul>

            <section className="article-cta">
              <span>Choose the opening, function, and hardware together</span>
              <h2>Comparing lock grades for a home or business?</h2>
              <p>Call A Good Locksmith for a practical hardware assessment backed by 35 years of locksmith experience.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 21, 2026. This article provides general hardware-selection information, not a certification, product approval, code determination, fire-door evaluation, or remote fitment decision. Verify the exact product, current listing, opening, installation instructions, and applicable requirements.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Read the rating in context</h2>
              <ul>
                <li>Exact product</li>
                <li>Applicable standard</li>
                <li>Current certification</li>
                <li>Door and frame condition</li>
                <li>Function and safe exit</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Residential and commercial lock service backed by 35 years of experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LockGradeRatingsGuidePost;
