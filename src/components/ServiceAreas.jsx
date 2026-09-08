import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaRoute } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ServiceAreas.css';

const ServiceAreas = () => {
    const mainCities = [
        { name: 'Lillington', slug: 'Lillington', county: 'Harnett County', badge: '🏠 Home Base', description: 'Lillington-based service for rekeying, lockouts, smart locks, homes and businesses' },
        { name: 'Fuquay-Varina', slug: 'Fuquay-Varina', county: 'Wake County', badge: 'Priority Area', description: 'Residential and commercial rekeying, lockouts, smart locks and mobile service' },
        { name: 'Buies Creek', slug: 'Buies-Creek', county: 'Harnett County', badge: 'Campbell University Area', description: 'Locksmith service near Campbell University for homes, rentals and businesses' },
        { name: 'Coats', slug: 'Coats', county: 'Harnett County', badge: null, description: 'Rekeying, lockouts, smart locks and mobile service for Coats' },
        { name: 'Erwin', slug: 'Erwin', county: 'Harnett County', badge: null, description: 'Residential and commercial locksmith service throughout Erwin' },
        { name: 'Bunnlevel', slug: 'Bunnlevel', county: 'Harnett County', badge: null, description: 'Mobile rekeying, lockout and smart-lock service for Bunnlevel' },
        { name: 'Angier', slug: 'Angier', county: 'Harnett County', badge: null, description: 'Residential and commercial locksmith service for Angier' },
        { name: 'Dunn', slug: 'Dunn', county: 'Harnett County', badge: null, description: 'Rekeying, home and business lockouts, smart locks and security hardware' },
        { name: 'Benson', slug: 'Benson', county: 'Johnston County', badge: null, description: 'Residential and commercial rekeying, lockouts and smart locks' },
        { name: 'Mamers', slug: 'Mamers', county: 'Harnett County', badge: null, description: 'Close-in mobile service for homes and businesses in Mamers' },
        { name: 'Kipling', slug: 'Kipling', county: 'Harnett County', badge: null, description: 'Rekeying, lockouts and smart locks along the US 401 corridor' },
        { name: 'Spout Springs', slug: 'Spout-Springs', county: 'Harnett County', badge: null, description: 'New-home rekeying, lockouts, smart locks and security upgrades' },
        { name: 'Anderson Creek', slug: 'Anderson-Creek', county: 'Harnett County', badge: null, description: 'Home rekeying, smart locks, lockouts and security upgrades' },
        { name: 'Broadway', slug: 'Broadway', county: 'Lee County', badge: null, description: 'Mobile residential and commercial locksmith service in Broadway' },
        { name: 'Willow Spring', slug: 'Willow-Spring', county: 'Wake County', badge: null, description: 'Rekeying, smart locks and mobile service for Willow Spring homes and businesses' },
        { name: 'Olivia', slug: 'Olivia', county: 'Harnett County', badge: null, description: 'Residential and commercial rekeying, lockouts and smart locks in Olivia' },
        { name: 'Sanford', slug: 'Sanford', county: 'Lee County', badge: null, description: 'Professional mobile locksmith service for the Sanford area' },
    ];
    const countyAreas = [
        { name: 'Harnett County', slug: 'Harnett-County', description: 'Mobile locksmith coverage from our Lillington home base' },
        { name: 'Wake County', slug: 'Wake-County', description: 'Southern Wake County service with Fuquay-Varina as a priority' },
    ];
    const additionalAreas = ['Holly Springs', 'Cameron', 'Spring Lake', 'Pittsboro', 'Apex', 'Garner'];

    return (
        <section className="service-areas" id="areas">
            <div className="container">
                <div className="section-title">
                    <h2>🇺🇸 <span className="blue-text">SERVICE AREAS</span> 🇺🇸</h2>
                    <div className="patriotic-divider"><span className="line"></span><FaMapMarkerAlt /><span className="line"></span></div>
                    <p>Based in Lillington and serving nearby Harnett County, southern Wake County and surrounding communities</p>
                </div>
                <motion.div className="cities-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                    {mainCities.map((city) => <Link key={city.slug} to={`/${city.slug}`} className="city-card"><div className="city-header"><FaMapMarkerAlt className="city-icon" /><div><h3>{city.name}, NC</h3><span className="county">{city.county}</span></div>{city.badge && <span className="city-badge">{city.badge}</span>}</div><p>{city.description}</p><span className="view-more">View Services →</span></Link>)}
                </motion.div>
                <motion.div className="county-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
                    <h3 className="subsection-title"><FaRoute /> County-Wide Coverage</h3>
                    <div className="county-grid">{countyAreas.map((county) => <Link key={county.slug} to={`/${county.slug}`} className="county-card"><h4>{county.name}</h4><p>{county.description}</p><span className="view-more">View All Areas →</span></Link>)}</div>
                </motion.div>
                <motion.div className="additional-areas" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
                    <h3 className="subsection-title"><FaMapMarkerAlt /> Additional Service Areas</h3>
                    <div className="areas-tags">{additionalAreas.map((area) => <span key={area} className="area-tag"><FaMapMarkerAlt /> {area}</span>)}</div>
                </motion.div>
                <motion.div className="areas-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }}>
                    <div className="cta-content"><FaClock className="cta-icon" /><div><h3>Not sure if we serve your area?</h3><p>Call with your address and we’ll confirm current travel availability.</p></div></div>
                    <a href="tel:984-480-5397" className="btn btn-primary"><FaPhone /> Call (984) 480-5397</a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreas;
