import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const CarKeyReplacementGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A few accurate details can help a locksmith determine what your vehicle may require before traveling to you. Gather the vehicle information, describe the key you need, and be ready to verify your authorization.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Before you call:</strong> Have the vehicle’s year, make, model, VIN, location, and your ownership or authorization documents available. Also say whether every key is lost or you still have a working key.
            </div>

            <p>“Can you make a key for my car?” sounds like a simple question, but modern vehicle keys are not all alike. The same model line may use a mechanical key, remote-head key, transponder key, proximity fob, or different systems across model years and trim levels. Accurate information helps avoid guessing.</p>

            <p>After 35 years in locksmithing, Mike Galdine knows that a productive first call begins with identifying the vehicle and the exact problem. This guide explains what customers in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County should have ready when seeking car key replacement.</p>

            <h2>1. Start with the year, make, and model</h2>
            <p>Provide the complete model year, manufacturer, and model—not only a nickname for the vehicle. If you know the trim level, body style, or whether the vehicle uses a turn-key ignition or push-button start, include that too. A clear photo of the existing key or fob can be helpful when one is available.</p>
            <p>Do not assume that a key from a similar-looking vehicle is interchangeable. Key blade, remote, transponder, and programming requirements can vary even when two vehicles share a model name.</p>

            <h2>2. Locate the 17-character VIN</h2>
            <p>The Vehicle Identification Number identifies the specific vehicle. The National Highway Traffic Safety Administration says the 17-character VIN can generally be found at the lower-left corner of the windshield. It also appears on the vehicle registration and may be listed on insurance documents.</p>
            <p>Read the VIN carefully because letters and numbers can be confused. Keep it private when communicating online; provide it directly to the service professional who needs it rather than posting it publicly.</p>

            <h2>3. Explain whether this is a spare-key job or an all-keys-lost situation</h2>
            <p>Tell the locksmith whether you still have a working key. Making an additional key and originating a key when none remain are different jobs. If a key broke, say where it broke and whether you have all the pieces. If the key turns but the vehicle will not start, describe the dashboard message or symptoms without repeatedly forcing the key.</p>
            <p>If the keys are locked inside rather than lost, see our <Link to="/blog/locked-keys-in-car-safe-next-steps-nc">vehicle lockout safety guide</Link> for immediate next steps.</p>

            <h2>4. Describe the type of key and the result you need</h2>
            <p>Useful descriptions include a plain metal key, a key with buttons in its head, a separate remote, a flip key, or a proximity fob used with push-button start. Say whether you need only entry restored, a key that starts the vehicle, remote-button functions, or a complete working spare.</p>
            <p>Mechanical cutting and electronic programming are separate processes, although a particular replacement may require both. Vehicle support varies by year, make, model, condition, and system, so service availability should be confirmed before dispatch.</p>

            <h2>5. Be ready to verify identity and authorization</h2>
            <p>A responsible locksmith should not create access to a vehicle without reasonable verification that the customer owns it or is authorized by the owner. Have a valid photo ID and available vehicle documentation such as a current registration, title, insurance document, rental agreement, or fleet authorization. The acceptable combination can depend on the circumstances.</p>
            <p>If the registration is locked inside the vehicle, explain that during the initial call. The locksmith can tell you what can be reviewed before service and what must be verified at the vehicle.</p>

            <div className="article-callout">
              <strong>North Carolina licensing:</strong> State law requires locksmiths to be licensed and requires locksmith advertisements to include a valid license number. A North Carolina licensee must also have the Board-issued photo identification card available for inspection while performing locksmith services. A Good Locksmith advertises under NCLL #3119.
            </div>

            <h2>6. Give an accurate location and access description</h2>
            <p>Provide the street address or a safe, precise meeting location, plus any parking-deck level, gate instructions, apartment building, workplace restrictions, or roadside hazards. Say whether the vehicle can be reached safely and whether it is locked, disabled, damaged, or parked somewhere requiring permission.</p>
            <p>Never remain in an unsafe traffic location. If a child, vulnerable person, or animal is locked in a vehicle and may be in danger, call 911 immediately.</p>

            <h2>7. Ask what the proposed service includes</h2>
            <p>Before approving work, confirm which functions the replacement is expected to provide. Depending on the vehicle, that may include the mechanical blade, starting authorization, remote buttons, an emergency insert key, or more than one key. Ask whether programming, the service call, and any diagnostic work are included in the quoted scope.</p>
            <p>No responsible provider can promise identical work for every vehicle without first identifying the system. For more guidance on choosing qualified help, read <Link to="/blog/why-hire-professional-locksmith-avoid-damage">why hiring a professional locksmith helps prevent avoidable damage</Link>.</p>

            <h2>After replacement, make a simple key plan</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Test every promised function before the service is completed</li>
              <li><FaCheckCircle /> Store a working spare securely outside the vehicle</li>
              <li><FaCheckCircle /> Record where the spare is kept and who is authorized to use it</li>
              <li><FaCheckCircle /> Replace weak fob batteries according to the manufacturer’s instructions</li>
              <li><FaCheckCircle /> If a key was stolen, ask what vehicle-specific steps can address the missing key</li>
            </ul>
            <p>Creating a replacement does not necessarily erase a missing electronic key or prevent its mechanical blade from operating a door. Available security options depend on the vehicle, so discuss the lost key itself—not only the new one.</p>

            <h2>Car key replacement in Harnett County and nearby communities</h2>
            <p>A Good Locksmith, LLC provides mobile automotive key cutting, transponder-key, programming, and lockout services for supported vehicles. Call with the details above so Mike can evaluate the request and explain service availability for your vehicle and location.</p>

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

            <h2>Sources and further reading</h2>
            <ul>
              <li><a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noreferrer">NHTSA: Where to Find Your Vehicle Identification Number</a></li>
              <li><a href="https://www.ncdot.gov/dmv/title-registration/vehicle/Pages/documents-forms.aspx" target="_blank" rel="noreferrer">North Carolina DMV: Vehicle Documents and Forms</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina General Statutes, Chapter 74F: Locksmith Licensing Act</a></li>
            </ul>

            <section className="article-cta">
              <span>Accurate details lead to a better first call</span>
              <h2>Need a replacement or spare car key?</h2>
              <p>Call A Good Locksmith with your vehicle’s year, make, model, VIN, key situation, and location to discuss mobile service availability.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general information. Vehicle key systems and documentation requirements vary. Service availability and the correct procedure must be determined for the specific vehicle and circumstances.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Have this ready</h2>
              <ul>
                <li>Year, make, and model</li>
                <li>17-character VIN</li>
                <li>Key or fob description</li>
                <li>Photo ID and vehicle documents</li>
                <li>Exact vehicle location</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>Need a car key?</h2>
              <p>Call with the vehicle details to discuss supported service.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default CarKeyReplacementGuidePost;
