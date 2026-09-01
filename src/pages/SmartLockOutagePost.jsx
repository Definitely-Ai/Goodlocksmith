import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const SmartLockOutagePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">Losing electricity does not necessarily mean losing access. The important questions are what powers your lock, which entry methods work offline, and what happens when the lock’s own batteries run out.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />
            <div className="article-callout article-callout-primary">
              <strong>The short answer:</strong> Many battery-powered residential smart locks retain local keypad operation during a household power outage. Remote features may stop working. Dead lock batteries are a separate problem, and the backup method depends on the exact model.
            </div>

            <p>If your smart lock stops responding during a power outage, first identify which part of the access system has stopped working. An unavailable app and a dead keypad are not necessarily the same problem.</p>
            <p>September is a useful time to check that plan. <a href="https://harnett.org/em/hurricane-preparedness.asp" target="_blank" rel="noreferrer">Harnett County Emergency Management</a> identifies June 1 through November 30 as Atlantic hurricane season and encourages advance preparation. This is preparedness guidance, not a forecast of a particular storm or local outage.</p>

            <h2>Three different problems that can look like a failed lock</h2>
            <h3>1. The house loses electricity</h3>
            <p>A lock powered by its own working batteries does not depend on a wall outlet. Schlage’s <a href="https://www.schlage.com/en/blog/technology/how-to-protect-electronics-during-disasters.html" target="_blank" rel="noreferrer">storm-preparation guidance</a> explains that its battery-operated smart locks can keep operating locally during a power outage, although Wi-Fi-dependent remote access is unavailable without connectivity. A loss of household power should not be confused with an instruction to unlock the door.</p>
            <p>This article concerns residential battery-powered locks. Hardwired commercial access systems, electric strikes, and magnetic locks require their own assessment; do not assume they behave the same way.</p>

            <h3>2. The internet connection disappears</h3>
            <p>An app reporting “offline” is not proof that the deadbolt is broken or unlocked. The router, internet connection, hub, or cloud connection may be unavailable while a previously configured local entry method still works. Conversely, an old status shown in an app is not confirmation of the door’s present condition.</p>
            <p>When it is safe to do so, check the lock at the door using an authorized entry method. Do not promise a visitor that you can remotely unlock it until connectivity is confirmed. Nearby Bluetooth access and remote internet access are different features; consult the model’s documentation instead of treating all phone-based entry as interchangeable.</p>

            <h3>3. The lock’s batteries are depleted</h3>
            <p>Restoring the home’s electricity will not replace dead batteries inside a lock. A dark keypad or unresponsive motor may require the manufacturer’s battery-replacement or backup-power procedure. Record any warning lights or sounds and identify the model before attempting a remedy.</p>

            <h2>A backup key and emergency power are not the same thing</h2>
            <p>Some smart locks have a mechanical key cylinder; others are completely keyless. Where a key override is provided, test the correct key beforehand and keep it accessible to an authorized person—not trapped inside the locked home.</p>
            <p>Keyless models may provide temporary external power, but the connector and procedure vary. For example, <a href="https://www.kwikset.com/support/answers/how-do-i-install-replace-my-905-keyless-deadbolt-batteries-" target="_blank" rel="noreferrer">Kwikset’s 905 Keyless Deadbolt instructions</a> describe using a 9-volt alkaline battery at its designated terminals while entering a valid user code. The <a href="https://www.schlage.com/en/blog/product_updates/sense-pro-faq.html" target="_blank" rel="noreferrer">Schlage Sense Pro FAQ</a> instead identifies a USB-C jumpstart port and no mechanical keyway.</p>
            <p>These are model-specific examples, not instructions for every lock or a claim that either product is stocked. Emergency power supplies energy; it does not replace the need for a valid access credential. Do not connect improvised wiring, apply power to undesignated parts, or assume a jumpstart port recharges the installed batteries.</p>

            <h2>Prepare an entry plan before the outage</h2>
            <ol>
              <li><strong>Identify the lock.</strong> Save its exact model number and official instructions where you can read them without internet access.</li>
              <li><strong>Check battery guidance.</strong> Follow the specified battery type, polarity, replacement procedure, and low-battery warnings. Do not substitute a different battery chemistry unless the manufacturer permits it.</li>
              <li><strong>Test local entry.</strong> With the door open and someone remaining inside, confirm the authorized keypad code and any mechanical backup. Then check normal operation with the door closed while preserving another way in.</li>
              <li><strong>Check the backup supplies.</strong> If your model supports external power, keep the specified power source and cable available outside the inaccessible space, under your control.</li>
              <li><strong>Explain the plan.</strong> Make sure household members or an authorized caregiver know the correct door and entry method. A phone-only plan depends on that phone remaining usable.</li>
            </ol>
            <p>ReadyNC’s <a href="https://www.readync.gov/plan-and-prepare/get-kit" target="_blank" rel="noreferrer">emergency-kit guidance</a> emphasizes assembling supplies before a disaster and making sure family members know where they are. Add your lock’s specific access needs to that broader household plan.</p>

            <h2>When the problem is mechanical, not electrical</h2>
            <p>If the keypad accepts a code but the bolt binds, fresh batteries alone may not solve the problem. Do not repeatedly force the door or keep cycling a struggling motor. Our <Link to="/blog/deadbolt-wont-lock-door-alignment-nc">deadbolt alignment guide</Link> explains why a lock may move freely with the door open yet bind when closed.</p>
            <p>If you are already locked out, use only the documented backup method for your own or an authorized property. Avoid drilling, prying, or a factory reset as a first response. See our <Link to="/blog/locked-out-of-house-safe-next-steps-nc">safe house-lockout steps</Link> for what to do while arranging help.</p>

            <div className="article-callout">
              <strong>Put personal safety first:</strong> Do not delay evacuation or enter an unsafe property to troubleshoot a lock. ReadyNC’s <a href="https://www.readync.gov/plan-and-prepare/hurricane-guide" target="_blank" rel="noreferrer">hurricane guide</a> advises checking for hazards before re-entry. Call 911 for immediate danger, and keep emergency exit from inside the home unobstructed.
            </div>

            <h2>Local help with smart locks and dependable entry</h2>
            <p>A Good Locksmith provides smart-lock installation and programming, keypad-lock service, and residential lock assistance. Mike Galdine brings 35 years of locksmith experience to evaluating the hardware, door fit, and practical access needs. Call with the model number, symptoms, and whether you can safely access the inside of the door so support for your particular lock can be confirmed.</p>
            <p>We serve Lillington, Angier, Bunnlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County. If you are still deciding what to install, our <Link to="/blog/smart-lock-vs-traditional-deadbolt-nc">smart-lock versus traditional-deadbolt guide</Link> covers the broader choice.</p>

            <section className="article-cta">
              <span>Know your backup before you need it</span>
              <h2>Need help making your entry plan dependable?</h2>
              <p>Call A Good Locksmith to discuss your smart lock, backup key, or troublesome residential lock.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone aria-hidden="true" /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>
            <p className="article-disclaimer">Sources and manufacturer guidance reviewed September 1, 2026. Features and procedures vary by model and configuration. Follow the instructions for your exact hardware; this guide does not guarantee operation during a particular outage.</p>
          </div>
          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Know what stopped working</h2>
              <ul>
                <li>Household electricity</li>
                <li>Internet or hub connection</li>
                <li>Lock batteries</li>
                <li>Phone or credential</li>
                <li>Mechanical bolt movement</li>
              </ul>
              <p>Each requires a different check. Start with the model’s instructions.</p>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default SmartLockOutagePost;
