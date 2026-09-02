import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const LeverHandleGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A door should not be a daily struggle to operate. A suitable lever can reduce the need to grip and twist a round knob, but the lock, latch, deadbolt, and door still need to work together.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>
        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />
            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> You can often replace a door knob with a compatible lever lockset. That usually means evaluating a replacement assembly, not attaching a lever to the existing knob. Choose the function and fit before choosing the finish.
            </div>

            <p>If turning a round knob is uncomfortable or difficult, a lever is worth considering. This is not only an aging-in-place question: a household member using a mobility aid or someone carrying groceries may also find a lever easier to operate. The right choice starts with the person who uses the door.</p>
            <p>Mike Galdine brings 35 years of locksmith experience to A Good Locksmith’s residential lock-installation work. For homeowners in Lillington, Angier, Bunnlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County, a useful upgrade is one that improves daily access while retaining appropriate security.</p>

            <h2>When a lever may help—and when it will not</h2>
            <p><a href="https://www.schlage.com/en/blog/product_updates/door-knobs-or-levers.html" target="_blank" rel="noreferrer">Schlage’s knob-versus-lever guide</a> identifies levers as an option for people with reduced grip strength or difficulty with fine hand movements. Instead of wrapping a hand around a knob and rotating it, the user presses the lever to retract the latch.</p>
            <p>However, changing the handle does not lighten a heavy door, remove a raised threshold, or make a binding deadbolt move freely. Ask the person using the entrance to identify the difficult step: reaching the handle, operating the latch, turning the key, turning the inside lock, or pushing and pulling the door. Those are different problems.</p>

            <h2>Choose the lock function, not just the handle shape</h2>
            <p>Two similar-looking levers may do different jobs. Schlage’s <a href="https://www.schlage.com/en/home/products/levers.html" target="_blank" rel="noreferrer">lever product guide</a> separates keyed entry, privacy, passage, and non-turning hardware. Confirm the intended use on the exact product:</p>
            <ul>
              <li><strong>Keyed entry:</strong> provides a keyed locking function; check exterior suitability and how it unlocks from inside.</li>
              <li><strong>Privacy:</strong> commonly used for bedrooms or bathrooms; it is not an exterior security lock.</li>
              <li><strong>Passage:</strong> operates a latch without a locking function.</li>
              <li><strong>Dummy or non-turning:</strong> acts as a pull, rather than operating a latch.</li>
            </ul>
            <p>Do not replace an exterior keyed knob with an interior privacy set simply because both packages show a lever. A passage lever paired with a separate deadbolt may suit some openings, but the complete door and intended locking arrangement need evaluation.</p>

            <h2>Will a new lever fit the existing door?</h2>
            <p>Not every knob and lever share interchangeable parts. Schlage specifically says its residential knobs cannot simply be swapped for lever handles on the same lockset; switching requires a new lockset. Other manufacturers and product families have their own compatibility rules.</p>
            <p>Before ordering, check door thickness, existing hole sizes, the distance from the door edge to the lock’s center, latch preparation, and clearance around the trim. Also check whether the lever is reversible or requires a particular door handing. A handle must have room to move without striking a frame, screen door, or adjacent hardware.</p>
            <p>If you want the new keyed lever to work with an existing house key, mention that before selecting hardware. Our <Link to="/blog/keyed-alike-home-locks-one-key-nc">keyed-alike lock guide</Link> explains why compatible keyways matter.</p>

            <h2>Keep the deadbolt and emergency exit in the plan</h2>
            <p>A comfortable lever may operate the latch while the separate deadbolt remains difficult to turn. Test both. If you must lift or push the door to lock it, see our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt alignment guide</Link>; a handle change alone is unlikely to address that symptom.</p>
            <p>Do not remove necessary security hardware or add an improvised restraint to compensate for the new handle. Consider everyone in the household: Schlage notes that some children and pets can operate levers more easily than knobs. Address supervision and access needs without obstructing required emergency exit.</p>

            <h2>Does installing a lever make a door ADA compliant?</h2>
            <p>No—not by itself. The <a href="https://www.access-board.gov/ada/guides/chapter-4-entrances-doors-and-gates/" target="_blank" rel="noreferrer">U.S. Access Board’s guide to accessible entrances and doors</a> addresses hardware operation as well as door clearances, thresholds, closing speed, and other features. For covered hardware, it describes operation with one hand without a tight grip, pinching, or wrist twisting.</p>
            <p>Those principles can inform a home upgrade, but this article does not determine which accessibility requirements apply to a particular residence, rental, business, or shared entrance. A lever-shaped product or an “ADA” label does not establish compliance for the entire opening. Ask the appropriate building official or qualified accessibility professional when a compliance determination is needed.</p>

            <h2>A practical test before calling the job finished</h2>
            <ol>
              <li><strong>Try the actual user’s routine.</strong> Can they comfortably reach and operate the handle with the hand they normally use?</li>
              <li><strong>Operate every locking part.</strong> Include the key, inside turn, privacy button, or separate deadbolt—not only the lever.</li>
              <li><strong>Close and reopen the door.</strong> Confirm that the latch engages and releases without lifting, pulling, or forcing the hardware.</li>
              <li><strong>Check from both sides.</strong> Verify the intended locking behavior and keep another authorized way in during testing.</li>
              <li><strong>Discuss remaining barriers.</strong> A difficult threshold, inadequate maneuvering space, or door weight may need a different professional’s attention.</li>
            </ol>

            <h2>Local planning help for households and caregivers</h2>
            <p>For broader caregiving needs, the <a href="https://www.harnett.org/aging/family-caregiver-support-program.asp" target="_blank" rel="noreferrer">Harnett County Family Caregiver Support Program</a> offers information and referral resources. It is a separate county resource, not an endorsement of A Good Locksmith or a promise of funding for hardware.</p>
            <p>For the lock work itself, call A Good Locksmith with photos of the door hardware, the brand if visible, and a description of the difficult movement. We can discuss suitable residential lock installation and whether a compatible lever lockset fits the opening. Review our <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link> for the surrounding frame, strike, and hinges.</p>

            <section className="article-cta">
              <span>Easier everyday use starts with the right fit</span>
              <h2>Thinking about replacing a knob with a lever?</h2>
              <p>Call A Good Locksmith for residential lock-installation help in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>
            <p className="article-disclaimer">Sources reviewed September 2, 2026. This is general door-hardware guidance, not medical advice or a property-specific accessibility or code assessment. Product compatibility and applicable requirements must be checked for the actual opening.</p>
          </div>
          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Before choosing a lever</h2>
              <ul>
                <li>Identify the difficult movement</li>
                <li>Match the lock function</li>
                <li>Check dimensions and handing</li>
                <li>Test the separate deadbolt</li>
                <li>Preserve safe exit</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default LeverHandleGuidePost;
