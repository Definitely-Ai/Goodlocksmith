import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaCheckCircle, FaClock, FaArrowLeft, FaHome, FaCar, FaBuilding, FaMobileAlt } from 'react-icons/fa';
import { cities, services, phoneNumber, phoneLink } from '../data/cities';
import { businessFacts } from '../data/businessFacts';
import {
    getCityCanonicalUrl,
    getCityFaqs,
    getCityMetaDescription,
    getCitySchema,
    getCityTitle,
} from '../data/citySeo';
import './CityPage.css';

const CityPage = () => {
    const { citySlug } = useParams();
    const city = cities[citySlug];
    const cityFaqs = city ? getCityFaqs(city) : [];

    useEffect(() => {
        if (!city) return;
        const canonicalUrl = getCityCanonicalUrl(city);
        const metaDescription = getCityMetaDescription(city);
        const pageTitle = getCityTitle(city);
        document.title = pageTitle;
        const canonical = document.querySelector('link[rel="canonical"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const previousValues = {
            canonical: canonical?.getAttribute('href'),
            ogUrl: ogUrl?.getAttribute('content'),
            description: description?.getAttribute('content'),
            ogTitle: ogTitle?.getAttribute('content'),
            ogDescription: ogDescription?.getAttribute('content'),
        };
        if (canonical) canonical.setAttribute('href', canonicalUrl);
        if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
        if (description) description.setAttribute('content', metaDescription);
        if (ogTitle) ogTitle.setAttribute('content', pageTitle);
        if (ogDescription) ogDescription.setAttribute('content', metaDescription);

        const existingSchema = document.getElementById('city-page-schema');
        const schema = existingSchema || document.createElement('script');
        schema.id = 'city-page-schema';
        schema.type = 'application/ld+json';
        schema.textContent = JSON.stringify(getCitySchema(city));
        if (!existingSchema) document.head.appendChild(schema);

        return () => {
            document.title = 'A Good Locksmith, LLC | 24/7 Locksmith Service | Lillington, NC | (984) 480-5397';
            if (canonical && previousValues.canonical) canonical.setAttribute('href', previousValues.canonical);
            if (ogUrl && previousValues.ogUrl) ogUrl.setAttribute('content', previousValues.ogUrl);
            if (description && previousValues.description) description.setAttribute('content', previousValues.description);
            if (ogTitle && previousValues.ogTitle) ogTitle.setAttribute('content', previousValues.ogTitle);
            if (ogDescription && previousValues.ogDescription) ogDescription.setAttribute('content', previousValues.ogDescription);
            schema.remove();
        };
    }, [city]);

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
        'Automotive & Motorcycle': <FaCar />,
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
                    <Motion.div
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
                            <span className="red">{city.name}</span> Locksmith — Licensed Mobile Service
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
                    </Motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="city-about">
                <div className="container">
                    <Motion.div
                        className="about-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2>24/7 Mobile Locksmith Service in {city.name}</h2>
                        <p>{city.description}</p>

                        <div className="city-local-details">
                            <h3>Local Locksmith Information for {city.name}</h3>
                            <p>{city.localContext}</p>
                            <p>{city.serviceFocus}</p>
                        </div>

                        <div className="why-us">
                            <h3>Why {city.name} Residents Trust Us:</h3>
                            <ul>
                                <li><FaCheckCircle /> {businessFacts.experienceYears} Years of Experience</li>
                                <li><FaCheckCircle /> Established in {businessFacts.establishedYear}</li>
                                <li><FaCheckCircle /> Family-Owned & Operated</li>
                                <li><FaCheckCircle /> Fair & Transparent Pricing</li>
                                <li><FaCheckCircle /> Mobile Service to {city.name}</li>
                                <li><FaCheckCircle /> Fully Equipped Mobile Locksmith Service</li>
                                <li><FaCheckCircle /> Licensed & Insured · {businessFacts.licenseNumber}</li>
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
                    </Motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="city-services">
                <div className="container">
                    <h2>Our Services in {city.name}</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <Motion.div
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
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Questions phrased the way customers and AI search tools ask them */}
            <section className="city-faq" aria-labelledby="city-faq-title">
                <div className="container">
                    <h2 id="city-faq-title">Quick Answers About Locksmith Service in {city.name}</h2>
                    <dl className="city-faq-list">
                        {cityFaqs.map(({ question, answer }) => (
                            <div className="city-faq-item" key={question}>
                                <dt>{question}</dt>
                                <dd>{answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* CTA Section */}
            <section className="city-cta-section">
                <div className="container">
                    <Motion.div
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
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default CityPage;
