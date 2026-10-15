import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const ReplaceKnobKeepDeadboltGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">On many residential doors, the knob or lever and the deadbolt are separate assemblies. That often allows one to be replaced while the other stays—but fit, function, keying, and door condition still need to be checked.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Short answer:</strong> usually yes, when the lower knob or lever and upper deadbolt occupy separate bores and operate independently. Keep the deadbolt only if it is compatible with the planned keying, works correctly, and remains suitable for the door.
            </div>

            <p>A worn knob, loose lever, damaged latch, finish change, or accessibility preference does not automatically require replacing a sound deadbolt. The reverse is also true: a deadbolt can often be changed without replacing the lower lockset. The important word is <em>often</em>, because some doors use interconnected locks, handlesets, shared trim, or uncommon preparation.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the whole opening before recommending hardware. This guide helps homeowners, landlords, and property managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County understand what should be checked before separating the job.</p>

            <h2>How can you tell whether the knob and deadbolt are separate?</h2>
            <p>With the door open, operate the lower knob or lever and then the upper deadbolt. On a typical two-bore residential door, the lower handle retracts only its spring latch and the deadbolt has its own key cylinder or thumbturn. Each assembly has separate interior and exterior trim.</p>

            <p>Do not assume independence based only on two visible pieces. Schlage describes an interconnected lock as a tubular lock and deadbolt combined into one device so the inside lever can retract both for single-motion egress. Some handlesets also use long exterior trim, shared mounting points, or model-specific interior parts. If turning the inside lever also retracts the deadbolt, or if trim bridges both openings, identify the exact system before removing anything.</p>

            <h2>What must match when only the knob or lever is replaced?</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> The new lock function must suit an exterior entry door</li>
              <li><FaCheckCircle aria-hidden="true" /> Door thickness and bore dimensions must fall within the product specifications</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch backset must match the distance from the door edge to the bore center</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch faceplate must match the existing door-edge preparation</li>
              <li><FaCheckCircle aria-hidden="true" /> Trim must cover the existing holes and clear the deadbolt trim above it</li>
              <li><FaCheckCircle aria-hidden="true" /> The latch must align with the strike and move freely after installation</li>
            </ul>

            <p>Our guides explain how to measure <Link to="/blog/what-is-door-lock-backset-measurement-nc">door-lock backset</Link> and identify a <Link to="/blog/square-round-drive-in-latch-faceplate-nc">square-corner, round-corner, or drive-in latch</Link>. Those measurements affect whether a replacement fits; appearance alone is not enough.</p>

            <h2>Will the new knob use the same key as the existing deadbolt?</h2>
            <p>Not automatically. Schlage notes that most exterior locks bought separately in stores come with their own key unless a keyed-alike option is selected. Its keyed-entry combo packs pair a knob or lever with a deadbolt that is already keyed alike. A separately purchased lock may instead be keyed differently.</p>

            <p>Matching the existing deadbolt depends on compatible keyways, cylinders, brands, product families, and the condition of both locks. Some current Kwikset SmartKey products can be reset to an appropriate compatible key following the exact product instructions, but that feature does not make every Kwikset, Schlage, or other key interchangeable.</p>

            <div className="article-callout">
              <strong>One door can have two keys:</strong> the lower keyed-entry lock and upper deadbolt can operate with different keys, but many homeowners prefer one authorized key for convenience. Decide the keying plan before buying the new hardware.
            </div>

            <p>If retaining one key for the door matters, show a locksmith the existing key and both locks before ordering. Our <Link to="/blog/what-is-lock-keyway-key-compatibility-nc">lock-keyway guide</Link> explains why a key must first have the correct blade profile before its cuts or bitting can operate a cylinder.</p>

            <h2>Could you install a passage knob below a deadbolt?</h2>
            <p>A passage knob or lever has no keyed cylinder and is intended to latch without providing keyed entry security. Some homeowners prefer a nonlocking lower latch so they cannot accidentally lock the knob while relying on the deadbolt for deliberate locking. Whether that arrangement is appropriate depends on the door, occupancy, egress needs, property rules, and the user's access habits.</p>

            <p>Do not confuse a passage lock with a privacy lock. Schlage states that privacy locks do not provide the security of an exterior keyed lock and are not recommended for exterior doors. Choose hardware by its documented function, not merely by whether the trim fits the bore.</p>

            <h2>When is replacing only one lock the wrong plan?</h2>
            <ul>
              <li>The knob or lever and deadbolt are interconnected or share model-specific trim</li>
              <li>The door edge, bores, or mounting holes are damaged or enlarged</li>
              <li>The retained deadbolt binds, has excessive wear, or no longer meets the property's needs</li>
              <li>The new hardware cannot be keyed compatibly and separate keys are not acceptable</li>
              <li>The finish, footprint, or spacing leaves exposed holes or prevents the trim from seating flat</li>
              <li>The opening is a fire door, commercial exit, or otherwise subject to special hardware requirements</li>
            </ul>

            <p>A broader decision may call for repair, rekeying, cylinder replacement, or complete replacement. See our <Link to="/blog/repair-rekey-or-replace-door-lock-nc">repair, rekey, or replace guide</Link> for how those services differ.</p>

            <h2>What should you photograph before calling?</h2>
            <ol>
              <li>Both sides of the entire knob-or-lever and deadbolt arrangement</li>
              <li>The door edge showing both the latch and deadbolt faceplates</li>
              <li>The frame strikes and any visible rubbing or damage</li>
              <li>Brand names, model labels, and the shape of the existing key</li>
              <li>A wider view showing the hinge side and door swing</li>
            </ol>

            <p>North Carolina law includes repairing, servicing, adjusting, rekeying, and installing locks within regulated locksmith services. A Good Locksmith provides authorized residential and commercial lock service under NCLL #3119.</p>

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
              <li><a href="https://www.schlage.com/en/home/products/keyed-combos.html" target="_blank" rel="noreferrer">Schlage: Keyed-Entry Knob or Lever and Deadbolt Locksets</a></li>
              <li><a href="https://www.schlage.com/en/home/products/knobs/all-knobs.html" target="_blank" rel="noreferrer">Schlage: Door-Knob Functions and Exterior Use</a></li>
              <li><a href="https://www.schlage.com/en/blog/product_updates/keyed-alike-door-locks.html" target="_blank" rel="noreferrer">Schlage: Keyed-Alike Door-Lock Options</a></li>
              <li><a href="https://commercial.schlage.com/en/resources/training-education/schlage-101/mechanical-locks.html" target="_blank" rel="noreferrer">Schlage: Tubular, Deadbolt, and Interconnected Lock Types</a></li>
              <li><a href="https://www.kwikset.com/products/detail/cove-knob-keyed-featuring-smartkey" target="_blank" rel="noreferrer">Kwikset: Keyed-Entry Knob Compatibility and Rekeying Specifications</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina Locksmith Licensing Act, Chapter 74F</a></li>
            </ul>

            <section className="article-cta">
              <span>Change only what the opening needs</span>
              <h2>Need help matching a new knob or lever to your deadbolt?</h2>
              <p>Call A Good Locksmith with photos of both sides and the edge of the door. Mike can evaluate the hardware, preparation, and keying options before you replace the wrong part.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 15, 2026. This article provides general door-hardware information, not a remote diagnosis, code determination, or guarantee of compatibility. Confirm the exact hardware, keyway, door preparation, manufacturer instructions, and requirements for the opening before ordering or altering parts.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Check before replacing</h2>
              <ul>
                <li>Separate or interconnected</li>
                <li>Function and fit</li>
                <li>Keyway and keying</li>
                <li>Door and strike condition</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Keep the deadbolt?</h2>
              <p>Verify that it works correctly, fits the keying plan, and remains suitable for the opening.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default ReplaceKnobKeepDeadboltGuidePost;
