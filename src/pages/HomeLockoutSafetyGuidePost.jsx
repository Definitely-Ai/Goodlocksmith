import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const HomeLockoutSafetyGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A home lockout is frustrating, but the safest response starts with one question: is anyone or anything inside in immediate danger? Handle emergencies first, then verify your options and choose a licensed locksmith.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Call 911 for an immediate threat to life or property:</strong> Harnett County says to use 911 when police, fire, or medical assistance is needed right now. Tell the dispatcher exactly what is happening and follow the instructions you receive.
            </div>

            <p>Most home lockouts are not emergencies, but a locked door can become urgent when a child, vulnerable adult, pet, active cooking appliance, fire, smoke, gas odor, medical need, or suspected crime is involved. Do not wait for a routine locksmith response when emergency help is needed immediately.</p>

            <p>For an ordinary lockout, a calm checklist can prevent injury and avoid unnecessary damage. With 35 years in locksmithing, Mike Galdine has seen rushed entry attempts turn a simple access problem into a broken window, damaged door, bent hardware, or snapped key. This guide is for residents in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County.</p>

            <h2>Step 1: Decide whether the situation is an emergency</h2>
            <p>Look and listen before doing anything else. If you see smoke or fire, smell gas, hear a smoke or carbon-monoxide alarm, know that a dangerous appliance is operating, believe someone inside needs immediate help, or see signs of a crime in progress, move to a safe location and call 911.</p>

            <p>Do not enter a burning or smoke-filled structure, and do not break into a property when police need to secure a suspected crime scene. Harnett County Emergency Management advises calling 911 only for an emergency involving an immediate need to protect life or property.</p>

            <h2>Step 2: Move to a safe place</h2>
            <p>Stand somewhere visible and away from traffic, severe weather, aggressive animals, electrical hazards, or a person who may pose a threat. At night, use a well-lit location. If you feel unsafe because of another person, contact law enforcement rather than waiting alone at the door.</p>

            <p>Keep your phone available and conserve its battery. Send your location to a trusted person if appropriate, especially when the property is remote or the weather is extreme.</p>

            <h2>Step 3: Check legitimate access options</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Confirm that another authorized exterior door is not already unlocked</li>
              <li><FaCheckCircle /> Contact a household member who has a working key</li>
              <li><FaCheckCircle /> Ask the landlord or property manager about an authorized entry procedure</li>
              <li><FaCheckCircle /> Use the manufacturer’s documented backup method for a smart lock, if you already have authorized access to it</li>
              <li><FaCheckCircle /> Locate identification or ownership records before the locksmith arrives</li>
            </ul>

            <p>Do not climb onto a roof, force a window, enter through an unsafe crawlspace, or ask an unauthorized neighbor to bypass the lock. A fall, broken glass, damaged frame, or security-system alarm can create a larger problem than the original lockout.</p>

            <h2>Step 4: Be ready to prove you belong there</h2>
            <p>North Carolina General Statute 74F-14 requires a licensed locksmith opening a locked residence to make a reasonable effort to verify that the customer owns the property or is authorized by its legal owner. Expect questions. That verification protects residents and property owners.</p>

            <p>Have a government-issued photo ID and a document that connects you to the address when possible. Examples may include a driver license, lease, utility account, property record, homeowner documentation, or written authorization from the owner or manager. If every document is locked inside, explain that before service begins so the locksmith can discuss reasonable alternatives.</p>

            <div className="article-callout">
              <strong>Renters:</strong> Contact the landlord, leasing office, or property manager before authorizing changes to the lock or door. Your lease and the owner’s hardware policy may affect what work can be approved after entry.
            </div>

            <h2>Step 5: Describe the door and lock accurately</h2>
            <p>When calling, provide the address, whether the situation is urgent, your relationship to the property, and the best callback number. Describe the locked door and visible hardware: knob or lever, deadbolt, keyway, keypad, smart lock, storm door, or multiple locks. Mention a key broken in the lock, a deadbolt that was thrown, damaged hardware, or a door that was already difficult to operate.</p>

            <p>Photos can help identify the opening, but do not post close-up key or security details publicly. A phone description is only preliminary; the locksmith still needs to inspect the actual door before confirming the appropriate method.</p>

            <h2>Step 6: Avoid common forced-entry attempts</h2>
            <p>Plastic cards, screwdrivers, coat hangers, improvised picks, drills, and prying tools can damage the latch, weather seal, trim, frame, door edge, wiring, or glass. They can also injure the person attempting entry. A method shown in a short online video may apply to a different lock and can make professional entry harder.</p>

            <p>An experienced locksmith first identifies the lock and chooses an appropriate entry method for that opening. Some damaged, malfunctioning, or unusual locks may require destructive work, but drilling should not be treated as the automatic answer to every home lockout. Read more about <Link to="/blog/why-hire-professional-locksmith-avoid-damage">how professional locksmith work helps prevent avoidable damage</Link>.</p>

            <h2>Step 7: Confirm the provider before granting access</h2>
            <p>Ask for the business name, the name of the person arriving, the North Carolina locksmith license number, and an explanation of the initial pricing and scope. When the locksmith arrives, compare that information and ask to see the Board-issued photo identification.</p>

            <p>A Good Locksmith displays NCLL #3119. For a complete hiring checklist, see <Link to="/blog/verify-licensed-locksmith-north-carolina">how to verify a licensed North Carolina locksmith</Link>.</p>

            <h2>After entry: decide whether the lock should be rekeyed</h2>
            <p>If the key was simply left inside and every copy is accounted for, a security change may not be necessary. If a key is lost, stolen, not returned, or may identify the property, discuss rekeying or replacement based on the hardware’s condition and the access risk.</p>

            <p>Rekeying changes which key operates compatible hardware while allowing the lock itself to remain in service. Replacement may be appropriate when the lock is damaged, worn, unsuitable, or incompatible. Our <Link to="/blog/rekey-now-avoid-big-problems-later">rekeying guide</Link> explains the difference and the situations that deserve prompt attention.</p>

            <h2>Prevent the next home lockout</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Make a properly tested spare key before the only key is lost</li>
              <li><FaCheckCircle /> Give a spare only to a person you trust and authorize</li>
              <li><FaCheckCircle /> Keep landlord or property-manager contact information available</li>
              <li><FaCheckCircle /> Replace weak smart-lock batteries before they fail</li>
              <li><FaCheckCircle /> Address a sticking door or hard-turning key before it breaks</li>
              <li><FaCheckCircle /> Never label a spare with the full property address</li>
            </ul>

            <h2>Home lockout locksmith service in Harnett County</h2>
            <p>A Good Locksmith, LLC provides professional residential lockout service across the listed service area. Mike can inspect the door, verify authorization, explain the proposed method, and help restore access with the care that comes from 35 years in the trade.</p>

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

            <h2>Reliable sources</h2>
            <ul>
              <li><a href="https://www.harnett.org/em/" target="_blank" rel="noreferrer">Harnett County Emergency Management: When to Call 911</a></li>
              <li><a href="https://www.ready.gov/home-fires" target="_blank" rel="noreferrer">Ready.gov: Home Fires</a></li>
              <li><a href="https://www.ready.gov/home-fire-escape-plan" target="_blank" rel="noreferrer">Ready.gov: Home Fire Escape Planning</a></li>
              <li><a href="https://www.ncleg.gov/enactedlegislation/statutes/html/bychapter/chapter_74f.html" target="_blank" rel="noreferrer">North Carolina Locksmith Licensing Act, Chapter 74F</a></li>
            </ul>

            <section className="article-cta">
              <span>Safe, professional help when you are locked out</span>
              <h2>Locked out of your home?</h2>
              <p>For a non-emergency residential lockout, call A Good Locksmith for service backed by 35 years in the trade and active North Carolina locksmith license #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general safety and consumer information based on sources reviewed August 24, 2026. Call 911 when immediate police, fire, or medical assistance is needed to protect life or property. Every lock, door, property, and authorization situation is different.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Home lockout checklist</h2>
              <ul>
                <li>Handle emergencies first</li>
                <li>Wait in a safe location</li>
                <li>Check authorized entry options</li>
                <li>Prepare proof of access</li>
                <li>Verify the locksmith</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Professional residential lockout service backed by 35 years of experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default HomeLockoutSafetyGuidePost;
