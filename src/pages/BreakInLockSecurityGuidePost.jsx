import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const BreakInLockSecurityGuidePost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">If a door, lock, or window shows signs of forced entry, personal safety and law-enforcement instructions come first. Once the scene is released, document the damage and evaluate the complete opening—not only the cylinder.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>Do not enter if someone may still be inside.</strong> Move to a safe location and call 911 when you are in immediate danger or believe a crime may be in progress. Do not touch or clean the damaged area before law enforcement advises that you may proceed.
            </div>

            <p>Finding a pried door, damaged lock, broken glass, unfamiliar open door, or other sign of forced entry is unsettling. The natural impulse is to walk inside, check valuables, and begin repairing the damage. That can expose you to danger and disturb potential evidence.</p>

            <p>With 35 years in locksmithing, Mike Galdine approaches post-incident lock work in a deliberate order: safety, police instructions, documentation, temporary protection, and then a complete security assessment. This guide is for homeowners, landlords, property managers, and businesses in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, Harnett County, and nearby Wake County.</p>

            <h2>1. Move away and assess from a safe location</h2>
            <p>Do not enter simply to find out whether someone is still there. Return to your vehicle, a neighbor’s property, or another safe and visible location. Avoid standing directly in front of a damaged doorway or window.</p>

            <p>Call 911 for an active threat, crime in progress, fire, medical emergency, or immediate danger. USAGov advises calling 911 when in immediate danger and contacting local law enforcement to report theft or property crime. The Harnett County Sheriff’s Office directs emergencies to 911 and assigns property-crime investigators to burglary and larceny cases.</p>

            <h2>2. Preserve the condition of the scene</h2>
            <p>Until law enforcement gives direction, do not touch the lock, door, frame, glass, tools, footprints, discarded objects, or surfaces around the apparent entry point. Do not sweep, clean, operate the lock repeatedly, or invite several people to walk through the area.</p>

            <p>If you have exterior cameras, a doorbell camera, access-control records, or alarm notifications, preserve the original files and timestamps. Do not publicly post the footage while an incident is being investigated. Tell the responding agency what records exist and follow its instructions for providing them.</p>

            <h2>3. Wait for law enforcement to release the area</h2>
            <p>Emergency securing or locksmith work should not begin on the suspected entry point until the responding agency says it will not interfere with the investigation. Ask whether the door may be photographed, handled, temporarily secured, or repaired.</p>

            <p>The timing can differ based on the situation. A locksmith should respect the direction of the investigating agency and should not move or discard damaged components that may still be relevant.</p>

            <h2>4. Document damage before temporary work</h2>
            <p>After the area is released, take clear wide-angle and close-up photographs of the door, frame, strike, hinges, lock, trim, threshold, glass, and surrounding marks. Make a written list of visible damage and note which keys, credentials, or property are missing.</p>

            <p>North Carolina Department of Insurance guidance says to give prompt notice to the insurer, notify police when a loss involves theft, photograph damage, protect the property from further loss, document temporary repairs, and keep receipts. Coverage and claim requirements depend on the individual policy, so contact the agent or insurer before permanent repairs when practical.</p>

            <div className="article-callout">
              <strong>Temporary security and permanent repair are different.</strong> If the opening cannot be locked, discuss the safest temporary measure with law enforcement, the property owner, and the insurer. Keep photographs, removed parts, invoices, and receipts as directed.
            </div>

            <h2>5. Inspect the complete door opening</h2>
            <p>A lock can appear to be the only damaged item while the door edge, strike pocket, jamb, fasteners, hinges, closer, wiring, or frame has also shifted. Installing a new cylinder in a split door or weakened frame does not restore the opening.</p>

            <p>A professional assessment should check how the door closes, whether the latch and deadbolt align, whether the bolt fully extends, whether the strike remains firmly attached, whether the frame is sound, and whether the lock body or mounting points were distorted. For a broader reference, use our <Link to="/blog/home-door-security-lock-checklist-nc">home door security checklist</Link>.</p>

            <h2>6. Decide whether to rekey or replace</h2>
            <p>Rekeying changes which key operates compatible, serviceable hardware. It may be appropriate when a key was stolen or access is uncertain but the lock and door remain suitable. Replacement installs different hardware and may be necessary when the lock is damaged, bent, forced, missing, unsuitable, or no longer functions correctly.</p>

            <p>If keys, access cards, remotes, or code records are missing, identify every opening or system they could operate. A single lost master key can affect more than one door. Do not focus only on the visibly damaged entrance while another compromised credential remains active.</p>

            <p>Read <Link to="/blog/rekey-now-avoid-big-problems-later">when rekeying should become a priority</Link>, and ask the locksmith to explain why rekeying, repair of compatible components, reinforcement, or replacement is being recommended for each opening.</p>

            <h2>7. Reset electronic access carefully</h2>
            <p>If a keypad code, smart-lock credential, access card, or administrator account may be compromised, use the manufacturer or system administrator’s documented process to remove unauthorized access. Preserve any audit records requested by law enforcement before deleting users or changing system data.</p>

            <p>Change credentials from a known-safe account and device. Review who still has administrator access, remove old users, and confirm that physical backup keys are also accounted for. Electronic access does not eliminate the need to inspect the mechanical lock, latch, door, and frame.</p>

            <h2>8. Use measured upgrades, not fear-driven sales</h2>
            <p>An incident can reveal a genuine weakness, but it should not be used to pressure the property owner into unrelated or unsupported upgrades. Ask for the diagnosis, proposed scope, hardware identification, warranty information, and a written invoice. When insurance is involved, clarify what requires approval before permanent work.</p>

            <p>A higher-security cylinder, better key control, stronger compatible hardware, or door reinforcement may be useful when it addresses the identified weakness. Our <Link to="/blog/high-security-locks-key-control-guide-nc">high-security lock buyer’s guide</Link> explains how to compare certification, hardware grade, cylinder security, and key control without relying on marketing language.</p>

            <h2>Post-incident lock and door checklist</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> Move to safety and call 911 for an immediate threat</li>
              <li><FaCheckCircle /> Avoid entering, touching, or cleaning the suspected scene</li>
              <li><FaCheckCircle /> Preserve camera, alarm, and access records</li>
              <li><FaCheckCircle /> Wait for law enforcement to release the opening</li>
              <li><FaCheckCircle /> Photograph the full door and visible damage</li>
              <li><FaCheckCircle /> Notify the owner, manager, and insurer as appropriate</li>
              <li><FaCheckCircle /> Keep receipts and removed hardware as directed</li>
              <li><FaCheckCircle /> Inspect the lock, door, frame, strike, and hinges together</li>
              <li><FaCheckCircle /> Rekey or replace every opening affected by missing credentials</li>
            </ul>

            <h2>Choose a licensed North Carolina locksmith</h2>
            <p>Verify the person performing the work and confirm the proposed scope before granting access. A Good Locksmith displays active North Carolina locksmith license #3119. Our <Link to="/blog/verify-licensed-locksmith-north-carolina">license-verification guide</Link> explains how to check the Board record, photo identification, authorization process, and invoice.</p>

            <h2>Local lock security service after forced entry</h2>
            <p>Once law enforcement releases the property, A Good Locksmith, LLC can assess residential or commercial lock hardware, rekey compatible locks, install appropriate replacement hardware, and discuss security upgrades within the services advertised on this site. Mike brings 35 years of practical locksmithing experience to each opening.</p>

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
              <li><a href="https://www.harnettsheriff.com/" target="_blank" rel="noreferrer">Harnett County Sheriff’s Office</a></li>
              <li><a href="https://www.harnettsheriff.com/investigations.asp" target="_blank" rel="noreferrer">Harnett County Sheriff’s Office: Criminal Investigations</a></li>
              <li><a href="https://www.usa.gov/report-crime" target="_blank" rel="noreferrer">USAGov: Report a Crime</a></li>
              <li><a href="https://police.virginiabeach.gov/services/filing-and-requesting-police-reports" target="_blank" rel="noreferrer">Virginia Beach Police: Preservation of Evidence</a></li>
              <li><a href="https://www.ncdoi.gov/consumers/homeowners-insurance/loss-prevention-and-aftermath" target="_blank" rel="noreferrer">North Carolina Department of Insurance: Loss Prevention and Aftermath</a></li>
              <li><a href="https://www.ncdps.gov/blog/2020/01/29/theft-prevention-tips-securing-your-home" target="_blank" rel="noreferrer">North Carolina DPS: Theft Prevention and Home Security</a></li>
            </ul>

            <section className="article-cta">
              <span>Safety and evidence first—security work after release</span>
              <h2>Need locks evaluated after forced entry?</h2>
              <p>After law enforcement releases the property, call A Good Locksmith for a careful assessment backed by 35 years in the trade and NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general safety, security, and insurance information based on sources reviewed August 25, 2026. Follow instructions from law enforcement, the property owner, and the insurer. Coverage, evidence needs, and appropriate hardware work vary by incident and property.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>First priorities</h2>
              <ul>
                <li>Move to a safe location</li>
                <li>Call 911 if danger is immediate</li>
                <li>Do not disturb evidence</li>
                <li>Document after scene release</li>
                <li>Secure the complete opening</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h2>A Good Locksmith</h2>
              <p>Residential and commercial lock security service backed by 35 years of experience. NCLL #3119.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default BreakInLockSecurityGuidePost;
