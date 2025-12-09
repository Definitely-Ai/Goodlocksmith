import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaCheckCircle, FaClock, FaArrowLeft, FaHome, FaCar, FaBuilding, FaMobileAlt } from 'react-icons/fa';
import { cities, services, phoneNumber, phoneLink } from '../data/cities';
import './CityPage.css';

const CityPage = () => {
    const { citySlug } = useParams();
    const city = cities[citySlug];

    if (!city) {
        return (
            <div className="city-page not-found">
                <div className="container">
                    <h1>City Not Found</h1>
                    <p>Sorry, we couldn't find that service area.</p>
                    <Link to="/" className="btn btn-primary">
                        <FaArrowLeft /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const serviceIcons = {
        'Automotive Services': <FaCar />,
        'Residential Services': <FaHome />,
        'Commercial Services': <FaBuilding />,
        'Smart Locks': <FaMobileAlt />,
    };

    return (
        <div className="city-page">
            {/* Hero Section */}
            <section className="city-hero">
                <div className="city-hero-bg"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="back-link">
                            <FaArrowLeft /> Back to Home
                        </Link>

                        <div className="city-badge">
                            <FaMapMarkerAlt /> {city.county}, {city.state}
                        </div>

                        <h1>
                            Locksmith in <span className="red">{city.name}</span>, NC
                            {city.isHomeBase && <span className="home-badge">🏠 Home Base</span>}
                        </h1>

                        <p className="city-tagline">{city.tagline}</p>

                        <p className="city-subtitle">
                            Fast Mobile Service • {phoneNumber}
                        </p>

                        <div className="city-cta">
                            <a href={phoneLink} className="btn btn-primary">
                                <FaPhone /> Call Now: {phoneNumber}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="city-about">
                <div className="container">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2>24/7 Mobile Locksmith Service in {city.name}</h2>
                        <p>{city.description}</p>

                        <div className="why-us">
                            <h3>Why {city.name} Residents Trust Us:</h3>
                            <ul>
                                <li><FaCheckCircle /> 30+ Years of Experience</li>
                                <li><FaCheckCircle /> Family-Owned & Operated</li>
                                <li><FaCheckCircle /> Fair & Transparent Pricing</li>
                                <li><FaCheckCircle /> Fast Arrival to {city.name} Neighborhoods</li>
                                <li><FaCheckCircle /> Fully Equipped Mobile Units</li>
                                <li><FaCheckCircle /> Licensed & Insured</li>
                            </ul>
                        </div>

                        {city.landmarks && city.landmarks.length > 0 && (
                            <div className="local-areas">
                                <h4>We Serve Areas Near:</h4>
                                <div className="landmarks">
                                    {city.landmarks.map((landmark, index) => (
                                        <span key={index} className="landmark-tag">
                                            <FaMapMarkerAlt /> {landmark}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="city-services">
                <div className="container">
                    <h2>Our Services in {city.name}</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="service-icon">
                                    {serviceIcons[service.name] || <span>{service.icon}</span>}
                                </div>
                                <h3>{service.name}</h3>
                                <ul>
                                    {service.items.map((item, i) => (
                                        <li key={i}><FaCheckCircle /> {item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="city-cta-section">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <FaClock className="cta-icon" />
                        <h2>Need a Locksmith in {city.name}?</h2>
                        <p>We're available 24/7 for all your locksmith needs. Call now for fast, professional service!</p>
                        <a href={phoneLink} className="btn btn-primary btn-large">
                            <FaPhone /> Call {phoneNumber}
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CityPage;
