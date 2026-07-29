import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaRoute } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ServiceAreas.css';

const ServiceAreas = () => {
    const mainCities = [
        {
            name: 'Lillington',
            slug: 'Lillington',
            county: 'Harnett County',
            badge: '🏠 Home Base',
            description: 'Our headquarters - fastest response times guaranteed'
        },
        {
            name: 'Coats',
            slug: 'Coats',
            county: 'Harnett County',
            badge: null,
            description: 'Local service for Coats homes, vehicles, and businesses'
        },
        {
            name: 'Erwin',
            slug: 'Erwin',
            county: 'Harnett County',
            badge: null,
            description: 'Mobile locksmith service throughout the Erwin community'
        },
        {
            name: 'Sanford',
            slug: 'Sanford',
            county: 'Lee County',
            badge: null,
            description: 'Professional locksmith service for the Sanford area'
        },
        {
            name: 'Fuquay-Varina',
            slug: 'Fuquay-Varina',
            county: 'Wake County',
            badge: null,
            description: 'Growing community with trusted locksmith service'
        },
        {
            name: 'Angier',
            slug: 'Angier',
            county: 'Harnett County',
            badge: null,
            description: 'Local service for Angier and surrounding areas'
        },
        {
            name: 'Dunn',
            slug: 'Dunn',
            county: 'Harnett County',
            badge: '🚗 I-95 Corridor',
            description: 'Quick response for I-95 emergency lockouts'
        },
    ];

    const countyAreas = [
        {
            name: 'Harnett County',
            slug: 'Harnett-County',
            type: 'County',
            description: 'Complete coverage for all of Harnett County'
        },
        {
            name: 'Wake County',
            slug: 'Wake-County',
            type: 'County',
            description: 'Southern Wake County including Raleigh area'
        },
    ];

    const additionalAreas = [
        'Holly Springs', 'Cameron',
        'Spring Lake', 'Buies Creek', 'Willow Spring', 'Broadwell',
        'Mamers', 'Olivia', 'Pittsboro', 'Apex', 'Garner'
    ];

    return (
        <section className="service-areas" id="areas">
            <div className="container">
                <div className="section-title">
                    <h2>🇺🇸 <span className="blue-text">SERVICE AREAS</span> 🇺🇸</h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <FaMapMarkerAlt />
                        <span className="line"></span>
                    </div>
                    <p>Serving a 25-mile radius from Lillington, NC</p>
                </div>

                {/* Main Cities Grid */}
                <motion.div
                    className="cities-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {mainCities.map((city, index) => (
                        <Link
                            key={index}
                            to={`/${city.slug}`}
                            className="city-card"
                        >
                            <div className="city-header">
                                <FaMapMarkerAlt className="city-icon" />
                                <div>
                                    <h3>{city.name}, NC</h3>
                                    <span className="county">{city.county}</span>
                                </div>
                                {city.badge && <span className="city-badge">{city.badge}</span>}
                            </div>
                            <p>{city.description}</p>
                            <span className="view-more">View Services →</span>
                        </Link>
                    ))}
                </motion.div>

                {/* County Coverage */}
                <motion.div
                    className="county-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="subsection-title">
                        <FaRoute /> County-Wide Coverage
                    </h3>
                    <div className="county-grid">
                        {countyAreas.map((county, index) => (
                            <Link
                                key={index}
                                to={`/${county.slug}`}
                                className="county-card"
                            >
                                <h4>{county.name}</h4>
                                <p>{county.description}</p>
                                <span className="view-more">View All Areas →</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Additional Areas */}
                <motion.div
                    className="additional-areas"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="subsection-title">
                        <FaMapMarkerAlt /> Additional Service Areas
                    </h3>
                    <div className="areas-tags">
                        {additionalAreas.map((area, index) => (
                            <span key={index} className="area-tag">
                                <FaMapMarkerAlt /> {area}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="areas-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="cta-content">
                        <FaClock className="cta-icon" />
                        <div>
                            <h3>Not sure if we serve your area?</h3>
                            <p>Call us! If you're within 25 miles of Lillington, we can help.</p>
                        </div>
                    </div>
                    <a href="tel:984-480-5397" className="btn btn-primary">
                        <FaPhone /> Call (984) 480-5397
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAreas;
