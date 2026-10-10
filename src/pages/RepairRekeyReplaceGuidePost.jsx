import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const RepairRekeyReplaceGuidePost = ({ post }) => (
  <>
    <Header />
    <main>
      <article className="article-page">
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Repair corrects a mechanical or installation problem. Rekeying changes which key operates a usable cylinder. Replacement installs different hardware when the existing lock is worn, damaged, unreliable, incompatible, or no longer suited to the opening.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Start with the goal and the symptom:</strong> if you only need old keys to stop working, ask about rekeying. If the lock is loose, binding, or not latching, it needs diagnosis. If the hardware is broken, badly worn, incompatible, or being upgraded, replacement may be the sensible choice.
            </div>

            <p>“Do I need a new lock?” sounds like a simple question, but the answer depends on what must change. A customer may need better key control, dependable operation, a different lock function, easier access, stronger hardware, or correction of a door that no longer fits its frame. Those are different jobs.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to evaluating the entire opening before recommending parts. This guide helps homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County describe the problem and understand the likely options.</p>

            <h2>What does repairing a door lock mean?</h2>
            <p>Repair aims to restore correct operation while keeping serviceable hardware. Depending on the lock and condition, that can involve tightening or correctly mounting components, replacing a compatible latch or internal part, correcting cylinder timing, servicing a supported mechanism, or addressing how the latch or bolt meets the strike.</p>

            <p>The first question is whether the symptom follows the lock or the door. If a deadbolt or latch works smoothly with the door open but binds when the door is closed, the lock may be reacting to alignment, hinges, weatherstripping, frame movement, or an incorrectly positioned strike. Schlage’s current guidance identifies door sag, seasonal movement, weatherstripping, strike position, and bolt-pocket clearance as common reasons a door will not latch or lock correctly.</p>

            <p>A new lock installed on a misaligned opening can develop the same trouble. Before buying hardware, compare operation carefully with the door open and closed from a safe position. Our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt-alignment guide</Link> explains what that comparison can reveal.</p>

            <h2>What does rekeying change?</h2>
            <p>Rekeying changes the cylinder so a different key operates it. The existing exterior and interior trim, latch or bolt, and much of the lock body can remain in place when they are compatible and in good condition. The old key should no longer operate the rekeyed cylinder after the work is completed and tested.</p>

            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Good reason to rekey:</strong> keys are lost, unreturned, or held by someone who should no longer have access</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Good reason to rekey:</strong> compatible locks should operate from one planned key</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Not fixed by rekeying:</strong> a sagging door, misaligned strike, worn latch, loose chassis, or damaged lock body</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Separate credentials:</strong> keypad codes, app users, cards, and remotes must be managed through their own systems</li>
            </ul>

            <p>Schlage says its residential cylinders can be rekeyed, with warranty-specific instructions about who should perform the work. Kwikset distinguishes rekeying from replacement by describing rekeying as suitable when existing hardware is in good condition and the owner wants different key access. Product design and warranty terms vary, so the exact lock must be identified before disassembly.</p>

            <p>If the original key is missing, rekeying may still be possible depending on the cylinder and condition. See our guide to <Link to="/blog/rekey-lock-without-original-key-nc">rekeying a lock without the original key</Link>.</p>

            <h2>When is replacement the better choice?</h2>
            <p>Replacement becomes more likely when the lock is visibly broken, severely worn, unreliable after proper diagnosis, corroded, missing critical parts, incompatible with the door, or inappropriate for the way the opening is used. It can also make sense when the customer wants a different function, keyway, finish, certified performance level, accessible lever, keypad, or smart-lock feature.</p>

            <p>Schlage lists damaged or insecurely latching hardware among the reasons to replace a lock, while also noting that some apparent lock problems actually come from the door or frame. Kwikset similarly points to worn, damaged, or unreliable hardware and feature upgrades as replacement reasons. Neither source supports replacing every troublesome lock before identifying the cause.</p>

            <p>For residential products, the BHMA Certified Secure Home label reports tested performance in security, durability, and finish. Certification is more useful than judging a lock only by weight, price, appearance, or advertising language. For a broader security upgrade, the frame, strike, door construction, hinges, key control, and safe exit still matter alongside the new lock.</p>

            <h2>Could replacing only the cylinder be enough?</h2>
            <p>Sometimes the cylinder is a separate replaceable component. A locksmith may be able to change the keyed cylinder while retaining the lock body and trim when the design, dimensions, cam or tailpiece, keyway, function, and condition all match. Other residential locksets use cylinders that are not intended as universal drop-in parts.</p>

            <p>A cylinder change is not the same as rekeying and not the same as replacing the entire lock. Our guide to <Link to="/blog/replace-lock-cylinder-keep-existing-lock-nc">replacing only a lock cylinder</Link> explains removable cylinders, interchangeable cores, and compatibility limits.</p>

            <h2>A practical decision guide</h2>
            <ul>
              <li><strong>Choose diagnosis and possible repair</strong> when operation is loose, rough, intermittent, misaligned, or different with the door open versus closed.</li>
              <li><strong>Choose rekeying</strong> when the hardware works correctly but control of existing keys is uncertain or a compatible keying plan should change.</li>
              <li><strong>Choose cylinder replacement</strong> when the cylinder is the failed or incompatible component and the remaining lock accepts a correct replacement.</li>
              <li><strong>Choose full replacement</strong> when the complete lock is damaged, worn out, unreliable, wrong for the opening, or being upgraded for a new function or feature.</li>
              <li><strong>Combine services</strong> when both access control and hardware condition need attention—for example, replacing a failed lock and keying the new compatible hardware into an authorized plan.</li>
            </ul>

            <p>Do not force a key, use the deadbolt to pull a door into position, enlarge a strike opening at random, mix incompatible parts, or spray an unidentified product into the cylinder. Those attempts can hide the original symptom or create additional damage. If a key is already bending or catching, stop before it breaks and use our <Link to="/blog/key-hard-to-turn-broken-key-extraction-nc">key-breakage warning guide</Link>.</p>

            <h2>Commercial and electronic openings need extra care</h2>
            <p>A business door may include a mortise lock, cylindrical lock, panic device, closer, fire label, alarm contact, card reader, electric strike, or other access-control component. Changing one part without understanding the complete opening can affect security, accessibility, fire-door performance, and safe egress.</p>

            <p>Do not add a padlock, chain, slide bolt, or keyed interior lock to compensate for failed hardware on an occupied exit. For commercial doors, document the lock type, door label, inside hardware, access-control equipment, and exact symptom before service. Our <Link to="/blog/mortise-lock-vs-cylindrical-commercial-door-nc">commercial lock-identification guide</Link> can help with the first description.</p>

            <h2>What information helps before a locksmith visit?</h2>
            <ul>
              <li>Which door is affected and whether it is residential, rental, or commercial</li>
              <li>Whether the problem happens with the door open, closed, or both</li>
              <li>Whether the key inserts, turns, sticks, or comes out normally</li>
              <li>Whether the latch or deadbolt fully extends and retracts</li>
              <li>Whether the hardware is loose, damaged, corroded, or missing parts</li>
              <li>Whether keys are lost, unreturned, or supposed to match other doors</li>
              <li>Clear photos of both sides of the door, the door edge, and the frame strike</li>
              <li>The brand or model and any electronic-lock error or warning</li>
            </ul>

            <p>North Carolina General Statutes § 74F-4 includes repairing, rebuilding, rekeying, repinning, servicing, adjusting, and installing locks within the definition of locksmith services. A Good Locksmith evaluates authorized residential and commercial lock work and identifies its license as NCLL #3119.</p>

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
              <li><a href="https://schlage-res.zendesk.com/hc/en-us/articles/39886333039636-Can-I-Rekey-My-Schlage-Lock" target="_blank" rel="noreferrer">Schlage Residential: Can I Rekey My Schlage Lock?</a></li>
              <li><a href="https://www.schlage.com/en/blog/home_security/replace-door-locks.html" target="_blank" rel="noreferrer">Schlage: Signs a Door Lock May Need Replacement</a></li>
              <li><a href="https://www.schlage.com/en/blog/product_updates/door-wont-latch.html" target="_blank" rel="noreferrer">Schlage: Door, Strike, and Latch Alignment Guidance</a></li>
              <li><a href="https://dev-site.kwikset.com/help-me-choose/solutions/need/replacing" target="_blank" rel="noreferrer">Kwikset: Rekeying Compared With Replacing Hardware</a></li>
              <li><a href="https://buildershardware.com/Certification-Program" target="_blank" rel="noreferrer">Builders Hardware Manufacturers Association: Certification Program</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
            </ul>

            <section className="article-cta">
              <span>Fix the cause and meet the access goal</span>
              <h2>Not sure whether your lock needs repair, rekeying, or replacement?</h2>
              <p>Call A Good Locksmith with the door type, lock brand, key-control concern, and exact symptom. Mike can evaluate the opening and explain the appropriate option without assuming every problem requires new hardware.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 10, 2026. This article provides general lock and door-hardware information, not a diagnosis, warranty determination, code decision, or promise that a specific component can be repaired or rekeyed. The correct option depends on the exact hardware, door condition, compatibility, property authorization, manufacturer instructions, and applicable safety requirements.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Three different goals</h2>
              <ul>
                <li>Repair restores operation</li>
                <li>Rekey changes the key</li>
                <li>Replace changes hardware</li>
                <li>Door fit still matters</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Describe the symptom</h2>
              <p>Note what happens with the door open and closed, which keys are affected, and whether parts are loose or damaged.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default RepairRekeyReplaceGuidePost;
