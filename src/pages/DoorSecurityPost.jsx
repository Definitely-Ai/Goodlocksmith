import { Link } from 'react-router-dom';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { phoneLink } from '../data/cities';
import './Blog.css';

const DoorSecurityPost = ({ post }) => (
  <>
    <Header />
    <main className="article-main">
      <article>
        <header className="article-header">
          <div className="container article-heading">
            <Link to="/blog" className="article-back">← Security Blog</Link>
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="article-lead">A quality lock matters, but the entire doorway has to work together. Check the deadbolt, strike plate, frame, hinges, and garage-entry door before assuming an entrance is secure.</p>
            <div className="article-meta">Published {post.publishedDate} · {post.readingTime} · A Good Locksmith, LLC · NCLL #3119</div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-content">
            <img src={post.image} alt={post.imageAlt} className="article-featured-image" decoding="async" />

            <div className="article-callout article-callout-primary">
              <strong>The practical takeaway:</strong> The best home security lock cannot compensate for a loose strike plate, split frame, misaligned door, or entrance that is routinely left unlocked.
            </div>

            <p>Homeowners searching for the “best lock” often focus on the deadbolt alone. After 35 years in locksmithing, Mike Galdine knows that a professional security review starts with the entire opening. A lock, door, frame, strike plate, fasteners, hinges, and key-control habits form one system. A weakness in any part can reduce the value of the rest.</p>

            <p>This guide gives homeowners in Lillington, Angier, Bunlevel, Coats, Dunn, Erwin, Sanford, Fuquay-Varina, and surrounding Harnett and southern Wake County communities a useful visual checklist. It is not a substitute for an on-site inspection, but it can help you recognize when professional attention is warranted.</p>

            <h2>1. Confirm every exterior door closes and latches correctly</h2>
            <p>Begin with the basics. Close each exterior door slowly and confirm the latch enters the strike without lifting, pulling, or forcing the door. Then extend the deadbolt. It should move fully and smoothly rather than stopping against the strike plate.</p>
            <p>Seasonal humidity, settling, loose hinges, and worn hardware can change alignment. If a deadbolt only works when you push or pull hard on the door, the problem deserves attention. Forcing the key or thumb turn can accelerate wear and may eventually leave the lock difficult to operate.</p>

            <h2>2. Inspect the deadbolt—not just the doorknob lock</h2>
            <p>The North Carolina Department of Public Safety recommends a deadbolt when an exterior door does not already have one. The Raleigh Police Department also advises homeowners to use deadbolts with a one-inch throw. Look for a bolt that extends completely into the frame and does not wobble excessively.</p>
            <p>Also consider the hardware’s tested performance. The Builders Hardware Manufacturers Association explains that certified products are evaluated for security, durability, and finish. Its traditional product grades run from Grade 1 through Grade 3, with Grade 1 representing the highest performance level. Residential Secure Home labels may instead show A, B, or C ratings by category. A professional locksmith can help match hardware to the door, usage, and security goal rather than relying on packaging claims alone.</p>

            <h2>3. Check the strike plate and the wood behind it</h2>
            <p>The strike plate is the metal part attached to the frame where the latch or deadbolt enters. Check for loose screws, movement, cracks, old repair holes, and thin or damaged wood. Raleigh Police specifically recommends a reinforced strike plate secured with three-inch screws so the fastening reaches deeper structural material rather than only the decorative trim.</p>
            <p>Longer screws are not automatically appropriate in every location. Wiring, glass, unusual framing, fire-rated assemblies, and door construction can change the correct approach. Have the opening evaluated when you are unsure.</p>

            <h2>4. Examine the frame, hinges, and door itself</h2>
            <p>North Carolina DPS advises that door frames should be strong and hinges protected. Look for splitting near the strike, soft or deteriorated wood, loose hinge screws, a sagging door, exposed hinge pins on an outward-swinging door, and gaps that prevent the latch from engaging properly.</p>
            <p>A secure lock mounted in a badly deteriorated door or frame is not a complete security solution. Repairs may involve lock adjustment, reinforcement, hardware replacement, or work by another qualified door professional depending on what the inspection finds.</p>

            <h2>5. Do not overlook the door between the garage and house</h2>
            <p>An attached garage can contain tools, vehicles, and another path into the home. Both North Carolina DPS and Raleigh Police recommend keeping the garage secured and locking the connecting door to the house. Treat that connecting door like another exterior entrance: verify that it closes, latches, locks, and is not propped open.</p>

            <h2>6. Review sliding doors, secondary entrances, and windows</h2>
            <p>Raleigh Police recommends securing sliding glass doors against both horizontal movement and lifting. Secondary doors deserve the same attention as the front entrance because convenience doors, patio doors, and side entrances may receive less routine inspection.</p>
            <p>Locksmith service addresses locks and related door hardware, but complete home security can also include lighting, visibility, alarms, cameras, landscaping, and safe family routines. No single product prevents every risk.</p>

            <h2>7. Know when hardware should be serviced or replaced</h2>
            <ul className="article-checklist">
              <li><FaCheckCircle /> The deadbolt will not extend fully without pushing or pulling the door</li>
              <li><FaCheckCircle /> Keys stick, bind, or require excessive force</li>
              <li><FaCheckCircle /> The lock, strike plate, or hinge moves when touched</li>
              <li><FaCheckCircle /> The frame is split, soft, cracked, or heavily repaired</li>
              <li><FaCheckCircle /> Exterior hardware is badly worn, corroded, or damaged</li>
              <li><FaCheckCircle /> You are unsure whether the installed lock fits the door and intended use</li>
            </ul>

            <div className="article-callout">
              <strong>Safety note:</strong> Security hardware must still allow safe emergency exit and comply with applicable building and fire requirements. Avoid changes that could trap occupants or make an emergency exit difficult.
            </div>

            <h2>Local home security lock service</h2>
            <p>A Good Locksmith, LLC provides professional residential locksmith service from Lillington across the listed service area. Mike brings 35 years of locksmithing experience to lock and key problems, hardware evaluations, rekeying, lock replacement, and practical recommendations based on the actual condition of the door.</p>

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
              <li><a href="https://www.ncdps.gov/blog/2020/01/29/theft-prevention-tips-securing-your-home" target="_blank" rel="noreferrer">North Carolina DPS: Theft Prevention—Tips for Securing Your Home</a></li>
              <li><a href="https://raleighnc.gov/police/services/how-prevent-crime" target="_blank" rel="noreferrer">Raleigh Police Department: How to Prevent Crime</a></li>
              <li><a href="https://buildershardware.com/ANSI-BHMA-Standards/Product-Grade-Levels" target="_blank" rel="noreferrer">BHMA: ANSI/BHMA Product Grade Levels</a></li>
            </ul>

            <section className="article-cta">
              <span>One doorway, several points to inspect</span>
              <h2>Not sure whether your exterior locks and doors are working together?</h2>
              <p>Call A Good Locksmith for professional residential locksmith service in our Harnett and southern Wake County service area.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call (984) 480-5397</a>
              <p className="license-line">A Good Locksmith, LLC · NCLL #3119</p>
            </section>

            <p className="article-disclaimer">This article provides general security information. Door construction, code requirements, fire ratings, and hardware needs vary. Request an on-site professional assessment for recommendations specific to your property.</p>
          </div>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <h2>Concerned about an exterior lock?</h2>
              <p>Have the complete opening evaluated—not only the lock cylinder.</p>
              <a className="btn btn-primary" href={phoneLink}><FaPhone /> Call Now</a>
            </div>
            <div className="sidebar-card">
              <h2>Quick inspection</h2>
              <ul>
                <li>Deadbolt extends fully</li>
                <li>Strike plate is secure</li>
                <li>Frame is not split</li>
                <li>Hinges are tight</li>
                <li>Garage-entry door locks</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
);

export default DoorSecurityPost;
