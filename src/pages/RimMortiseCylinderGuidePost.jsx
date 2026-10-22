import { Link } from 'react-router-dom';
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const RimMortiseCylinderGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Rim and mortise cylinders can look similar from the key side, but they mount and transfer motion differently. The correct replacement must match the hardware, dimensions, keyway, cam or tailpiece, and door application.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The practical difference:</strong> a traditional mortise cylinder has a threaded housing and usually operates compatible hardware through a cam. A rim cylinder is typically secured from the inside with a bracket or mounting plate and transfers motion through a projecting tailpiece. The keyway on the front does not identify everything behind it.
            </div>

            <p>A round key cylinder on a storefront, office door, exit-device trim, or commercial deadlock may look like a simple replacement part. Ordering by the front face alone can lead to the wrong cylinder, wrong length, wrong cam, wrong tailpiece, or a key system that does not match the property.</p>

            <p>Mike Galdine brings 35 years of locksmith experience to commercial lock service and key-system planning. This guide helps authorized owners and managers in Lillington, Angier, Bunnlevel, Fuquay-Varina, Coats, Dunn, Erwin, Sanford, Harnett County, and nearby Wake County identify the questions that matter before a cylinder is removed or ordered.</p>

            <h2>What is a mortise cylinder?</h2>
            <p>A traditional mortise cylinder is a round keyed cylinder with external threads on its housing. It screws into compatible lock or trim hardware, and a cam attached to the rear of the plug transfers the key’s rotation to the mechanism.</p>

            <p>Mortise cylinders are associated with many mortise locks, narrow-stile storefront locks, key switches, exit-device trims, and other commercial applications, but the word <em>mortise</em> does not prove one universal fit. Schlage’s current cylinder guidance lists multiple mortise-cylinder housing lengths and cam options. Hager likewise lists different lengths and separate cam references for its mortise cylinders.</p>

            <p>The cylinder length affects how the face sits in relation to the trim and door. The cam must engage the exact receiving mechanism. A cylinder collar, spacer, security ring, set screw, or retaining arrangement may also be part of the specified installation.</p>

            <h2>What is a rim cylinder?</h2>
            <p>A rim cylinder generally passes through the outside of a door or trim and is held from the secure side by a bracket or mounting plate and screws. A flat tailpiece or spindle projects from the rear and turns the receiving mechanism when the key turns.</p>

            <p>Rim cylinders are common with rim exit devices, surface-mounted locks, night latches, and some other commercial hardware. Von Duprin’s trim instructions, for example, show a rim cylinder secured by cylinder screws and a bracket, with the tailpiece cut to the required length. Falcon’s rim-device instructions also require checking tailpiece length and cylinder operation for the exact device function.</p>

            <p>Door thickness, trim thickness, tailpiece length, tailpiece orientation, mounting-screw length, and the device’s receiver all matter. A tailpiece that is too short may not engage; one that is too long can bind or prevent proper assembly.</p>

            <h2>Rim cylinder vs. mortise cylinder at a glance</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle aria-hidden="true" /> <strong>Mortise cylinder:</strong> threaded housing, typically uses a rear cam, and screws into compatible hardware</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Rim cylinder:</strong> typically secured from the inside with screws and a mounting plate or bracket, and uses a projecting tailpiece</li>
              <li><FaCheckCircle aria-hidden="true" /> <strong>Both:</strong> may share a keyway or key system without sharing the same housing, actuator, or application</li>
            </ul>

            <p>These are general identification clues, not permission to disassemble an occupied opening. Modified trim, concealed housings, interchangeable-core versions, manufacturer-specific designs, and older hardware can change what is visible.</p>

            <div className="article-callout">
              <strong>Do not order from the face alone:</strong> two cylinders can accept the same key blank and still have incompatible bodies, lengths, cams, tailpieces, retainers, or security features.
            </div>

            <h2>Do not confuse the cylinder with the complete lock</h2>
            <p>A mortise cylinder is one possible keyed component. A mortise lock is the larger lock case installed in a pocket in the door edge. A cylindrical lock is a bored lockset whose chassis passes through round door preparation. A rim exit device is surface-mounted on the inside of the door. These names describe different parts or mounting arrangements.</p>

            <p>Our <Link to="/blog/mortise-lock-vs-cylindrical-commercial-door-nc">mortise-lock versus cylindrical-lock guide</Link> explains the complete lock bodies. The <Link to="/blog/replace-lock-cylinder-keep-existing-lock-nc">cylinder-replacement guide</Link> explains when the keyed component may be changed while the surrounding hardware stays in service.</p>

            <h2>Why the cam or tailpiece matters</h2>
            <p>The key rotates the plug, but the rear actuator delivers that movement to the lock or device. Schlage’s modular-cylinder service guidance distinguishes a mortise cam from a rim tailpiece and documents multiple cam and housing options. That is why matching only the keyway, finish, or face diameter is not enough.</p>

            <p>A wrong cam may miss the lock mechanism, stop in the wrong position, interfere with key removal, or operate the wrong function. A wrong rim tailpiece may not reach, may be oriented incorrectly, or may bind after the device is tightened. Do not bend, stack, grind, or improvise an actuator to force an unverified cylinder into service.</p>

            <h2>Fixed cylinder or interchangeable core is a separate question</h2>
            <p>Mortise and rim housings may be designed around a conventional fixed cylinder or around an interchangeable core, depending on the product. A control key removes a compatible interchangeable core from its housing; it does not convert every mortise or rim cylinder into the same format.</p>

            <p>Our <Link to="/blog/interchangeable-core-locks-business-key-system-nc">interchangeable-core guide</Link> explains SFIC, full-size formats, operating keys, master keys, and control keys. The cylinder or core also must use the planned <Link to="/blog/what-is-lock-keyway-key-compatibility-nc">keyway and compatible key blank</Link>.</p>

            <h2>What to document before requesting service</h2>
            <ol>
              <li><strong>The complete opening:</strong> photograph the outside, inside, door edge, and any visible device or lock labels.</li>
              <li><strong>The current function:</strong> explain what the key is supposed to do—retract a latch, unlock trim, throw a bolt, activate a switch, or control another operation.</li>
              <li><strong>The door and trim thickness:</strong> these dimensions can affect cylinder, collar, screw, and tailpiece requirements.</li>
              <li><strong>The key system:</strong> identify the keyway, existing master-key plan, restricted-key authorization, and whether the property wants the replacement keyed alike or differently.</li>
              <li><strong>The hardware identification:</strong> record manufacturer, model, series, function, and any markings instead of relying on appearance.</li>
              <li><strong>The reason for service:</strong> distinguish a lost-key rekey from a loose cylinder, broken actuator, failed lock body, or hardware upgrade.</li>
            </ol>

            <h2>When replacing the cylinder will not fix the problem</h2>
            <p>A new cylinder will not repair a worn mortise case, broken exit device, loose trim, damaged door, sagging hinges, failed closer, misaligned strike, or incorrect lock function. If the key turns but the door does not unlock, the failure may be in the cam, tailpiece, hub, linkage, latch, bolt, or lock case rather than in the pin tumbler itself.</p>

            <p>Do not remove, disable, dog open, or modify panic hardware or a required exit simply to test a cylinder. Fire-rated and egress doors can carry additional requirements. Use the <Link to="/blog/commercial-panic-hardware-exit-door-safety-nc">commercial exit-door safety checklist</Link> when the opening is part of an exit route.</p>

            <h2>Commercial cylinder service in Harnett County</h2>
            <p>A Good Locksmith provides authorized commercial lock evaluation, rekeying, cylinder replacement, lock installation, and key-system planning. Mike can identify whether an opening uses a rim cylinder, mortise cylinder, key-in-lever cylinder, or interchangeable-core housing and match the service plan to the complete hardware.</p>

            <p>North Carolina defines repairing, rekeying, repinning, servicing, adjusting, and installing locks as locksmith services. State law also requires locksmith advertising to include a valid license number. A Good Locksmith identifies its license as NCLL #3119.</p>

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
              <li><a href="https://commercial.schlage.com/content/dam/allegion-us-2/web-files/schlage/technical-documents/Schlage_Primus_Service_Manual_108482.pdf" target="_blank" rel="noreferrer">Schlage Primus Service Manual: Modular Mortise and Rim Cylinders</a></li>
              <li><a href="https://commercial.schlage.com/en/products/key-systems/conventional-cylinders.html" target="_blank" rel="noreferrer">Schlage: Conventional Cylinder Formats</a></li>
              <li><a href="https://us.allegion.com/content/dam/allegion-us-2/web-files/von-duprin-/installation-documents/Von_Duprin_386DT_NL_Trim_Installation_Instructions_107637.pdf" target="_blank" rel="noreferrer">Von Duprin: Rim Cylinder Trim Installation</a></li>
              <li><a href="https://www.hagerco.com/locks/cylinder-core-keying/cylinders-cores/rim-cylinders/3901-fixed" target="_blank" rel="noreferrer">Hager: Rim Cylinder Components</a></li>
              <li><a href="https://www.hagerco.com/locks/cylinder-core-keying/cylinders-cores/mortise-cylinders/3902-fixed" target="_blank" rel="noreferrer">Hager: Mortise Cylinder and Cam References</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bysection/chapter_74f/gs_74f-4.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-4: Locksmith Services</a></li>
              <li><a href="https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_74F/GS_74F-12.html" target="_blank" rel="noreferrer">North Carolina General Statutes § 74F-12: License Number in Advertising</a></li>
            </ul>

            <section className="article-cta">
              <span>Identify the whole opening before ordering the cylinder</span>
              <h2>Need a commercial cylinder rekeyed or replaced?</h2>
              <p>Call A Good Locksmith with the door location, authorization, hardware details, and clear photos. Mike can evaluate the cylinder format and compatible service options.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">Sources reviewed October 22, 2026. This article provides general commercial-hardware information, not a remote compatibility determination, installation instruction, key-system authorization, fire-door evaluation, or code decision. Verify the exact opening, cylinder, actuator, manufacturer documentation, ownership, and applicable requirements.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Identify more than the keyway</h2>
              <ul>
                <li>Rim or mortise housing</li>
                <li>Length and door thickness</li>
                <li>Cam or tailpiece</li>
                <li>Fixed or interchangeable core</li>
                <li>Lock function and key system</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Commercial cylinder and key-system service backed by 35 years of locksmith experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default RimMortiseCylinderGuidePost;
