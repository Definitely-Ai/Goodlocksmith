import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DeadboltAlignmentGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A deadbolt should extend and retract smoothly with the door closed. If you must push, pull, or lift the door while turning the key, the lock may be telling you that the opening is out of alignment.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not force the key:</strong> Repeatedly twisting harder can bend or break a worn key, damage the cylinder, or hide the actual problem at the door and frame.
            </div>

            <p>“Why won’t my deadbolt lock unless I push the door?” is a useful question because it separates two different conditions: a lock that is difficult even when the door is open, and a bolt that moves freely until the door closes. Those symptoms often require different corrections.</p>
            <p>After 35 years in locksmithing, Mike Galdine starts with the complete opening—the key, cylinder, bolt, strike, hinges, door, and frame—not just the part that feels stuck. This guide is for homeowners and property managers in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County.</p>

            <h2>Start with one safe comparison</h2>
            <p>With the door open and your fingers clear of the door edge, operate the deadbolt using the interior thumbturn. Then close the door normally and try again. Do not slam the door or apply extra force.</p>
            <ul className="article-checklist">
              <li><FaCheckCircle /> <strong>Smooth open, difficult closed:</strong> the bolt and strike opening may not line up, or the strike pocket may obstruct full travel</li>
              <li><FaCheckCircle /> <strong>Difficult open and closed:</strong> the lock, key, installation, or internal hardware may need attention</li>
              <li><FaCheckCircle /> <strong>Door will not latch:</strong> the latch, strike, hinges, frame, weatherstripping, or door position may be involved</li>
              <li><FaCheckCircle /> <strong>Electronic lock reports a jam:</strong> test its mechanical operation and door alignment before assuming the electronics have failed</li>
            </ul>
            <p><a href="https://www.kwikset.com/support/answers/how-do-i-check-door-alignment-for-my-smart-lock" target="_blank" rel="noreferrer">Kwikset’s current alignment guidance</a> uses the same open-door versus closed-door comparison: resistance only when the door is closed indicates that the bolt and strike opening may be misaligned.</p>

            <h2>What can put a deadbolt out of alignment?</h2>
            <p>A small change at the hinges or frame can move the bolt relative to the strike. Common possibilities include loose hinge screws, a sagging door, shifted strike hardware, a shallow or obstructed bolt pocket, worn components, or weatherstripping that prevents the door from reaching its normal closed position.</p>
            <p>Wood also responds to its environment. The <a href="https://research.fs.usda.gov/download/treesearch/62261.pdf" target="_blank" rel="noreferrer">USDA Forest Products Laboratory’s Wood Handbook</a> explains that wood shrinks and swells as its moisture content changes. That does not prove humidity caused a particular lock problem, but it helps explain why a wood door or frame can fit differently over time. A hands-on inspection is needed to identify the actual cause.</p>

            <h2>Why pushing or pulling the door is not a real fix</h2>
            <p>Moving the door while turning the key may temporarily line up the bolt and strike. It does not correct the condition, and it makes normal locking depend on a special motion that another resident, guest, tenant, or employee may not know.</p>
            <p>More importantly, the deadbolt should be able to travel fully into its intended pocket. <a href="https://www.schlage.com/en/blog/product_updates/how-to-install-a-deadbolt-lock.html" target="_blank" rel="noreferrer">Schlage’s installation guidance</a> says the bolt should extend and retract smoothly and that a bolt dragging or hitting the strike plate calls for better alignment of the strike or jamb.</p>

            <h2>What not to do</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Do not keep twisting a key that is flexing or already worn</li>
              <li><FaCheckCircle /> Do not spray an unidentified household oil into the cylinder</li>
              <li><FaCheckCircle /> Do not enlarge the strike opening blindly; excess removal can weaken or permanently damage the frame</li>
              <li><FaCheckCircle /> Do not assume a new lock will correct a sagging or poorly positioned door</li>
              <li><FaCheckCircle /> Do not ignore a deadbolt that stops before it fully extends</li>
            </ul>
            <p>If the key itself is rough, bent, cracked, or difficult to remove, see our guide to <Link to="/blog/key-hard-to-turn-broken-key-extraction-nc">warning signs before a key breaks</Link>.</p>

            <h2>When a simple check becomes a locksmith call</h2>
            <p>Call for an evaluation when the key binds, the cylinder moves in the door, the bolt will not fully extend, the lock remains difficult with the door open, the strike or frame is visibly damaged, or the problem returns after a minor adjustment. If forced entry or structural damage is involved, follow the safety and documentation steps in our <Link to="/blog/locks-after-break-in-forced-entry-nc">post-break-in lock guide</Link>.</p>
            <p>A Good Locksmith can assess compatible residential lock hardware, deadbolt operation, strike alignment, key condition, and whether repair, adjustment, rekeying, or replacement is appropriate. The goal is to correct the cause without promising that every door or frame condition can be solved by lock work alone.</p>

            <div className="article-callout">
              <strong>Important:</strong> If an exterior door cannot be secured, do not leave the property unattended. If the door is part of an emergency exit, rental, multifamily building, or commercial occupancy, do not make changes that could interfere with required egress or applicable codes.
            </div>

            <h2>Local deadbolt and door-lock help</h2>
            <p>For a deadbolt that will not lock smoothly in Lillington or surrounding communities, explain whether the problem occurs with the door open, closed, or both. That simple detail helps narrow the issue before service. A short video can also document the symptom, but do not show a readable key code or a clear close-up of the key cuts.</p>

            <div className="service-area-links">
              <Link to="/Lillington">Lillington</Link>
              <Link to="/Angier">Angier</Link>
              <Link to="/Dunn">Dunn</Link>
              <Link to="/Coats">Coats</Link>
              <Link to="/Erwin">Erwin</Link>
              <Link to="/Sanford">Sanford</Link>
              <Link to="/Fuquay-Varina">Fuquay-Varina</Link>
              <Link to="/Harnett-County">Harnett County</Link>
              <Link to="/Wake-County">Wake County</Link>
            </div>

            <h2>Sources reviewed</h2>
            <ul className="article-sources">
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-wont-latch.html" target="_blank" rel="noreferrer">Schlage: How to Fix a Door That Won’t Latch</a></li>
              <li><a href="https://www.schlage.com/en/blog/product_updates/how-to-install-a-deadbolt-lock.html" target="_blank" rel="noreferrer">Schlage: How to Install and Test a Deadbolt</a></li>
              <li><a href="https://www.kwikset.com/support/answers/how-do-i-check-door-alignment-for-my-smart-lock" target="_blank" rel="noreferrer">Kwikset: How to Check Door Alignment for a Smart Lock</a></li>
              <li><a href="https://research.fs.usda.gov/download/treesearch/62261.pdf" target="_blank" rel="noreferrer">USDA Forest Products Laboratory: Wood Handbook—Moisture Relations and Physical Properties</a></li>
            </ul>

            <section className="article-cta">
              <span>Stop forcing a sticking deadbolt</span>
              <h2>Need the lock and door alignment checked?</h2>
              <p>Call A Good Locksmith for professional residential locksmith service in Harnett County and nearby communities.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general lock and door-maintenance information based on sources reviewed August 27, 2026. Every opening is different, and a site inspection is required to diagnose the cause. Do not alter fire-rated, required-egress, rental, multifamily, or commercial door hardware without appropriate authorization and code review.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Tell us what happens</h2>
              <ul>
                <li>Smooth with door open?</li>
                <li>Sticks only when closed?</li>
                <li>Must push, pull, or lift?</li>
                <li>Key or thumbturn binding?</li>
                <li>Bolt fully extending?</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Deadbolt won’t lock?</h2>
              <p>Have the complete opening checked before the key or hardware fails.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DeadboltAlignmentGuidePost;
