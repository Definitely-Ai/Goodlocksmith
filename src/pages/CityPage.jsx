import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaCheckCircle, FaClock, FaArrowLeft, FaHome, FaCar, FaBuilding, FaMobileAlt } from 'react-icons/fa';
import { cities, services, phoneNumber, phoneLink } from '../data/cities';
import { businessFacts } from '../data/businessFacts';
import './CityPage.css';

const getCityFaqs = (city) => [
    {
        question: `Does A Good Locksmith provide mobile locksmith service in ${city.name}?`,
        answer: `${city.description} Service is provided at the customer's location, subject to current availability and travel distance.`,
    },
    {
        question: 'Is A Good Locksmith licensed in North Carolina?',
        answer: `${businessFacts.legalName} advertises under ${businessFacts.licenseNumber}. Owner ${businessFacts.ownerName} has ${businessFacts.experienceYears} years of professional locksmithing experience.`,
    },
    {
        question: 'How long has A Good Locksmith been in business?',
        answer: `${businessFacts.publicName} was established in ${businessFacts.establishedYear}. ${businessFacts.ownerName}'s ${businessFacts.experienceYears} years in locksmithing include experience gained before he established the company.`,
    },
    {
        question: `What locksmith services are available in ${city.name}?`,
        answer: 'Services include automotive and motorcycle key work, home and business lockouts, rekeying, lock installation, commercial security hardware, and smart-lock service.',
    },
];

const CityPage = () => {
    const { citySlug } = useParams();
    const city = cities[citySlug];
    const cityFaqs = city ? getCityFaqs(city) : [];

    useEffect(() => {
        if (!city) return;
        const canonicalUrl = `https://www.goodlocksmith.com/${city.slug}`;
        const metaDescription = `${businessFacts.legalName} provides licensed mobile locksmith service in ${city.name}, NC. ${businessFacts.experienceYears} years of experience. ${businessFacts.licenseNumber}.`;
        document.title = `Locksmith in ${city.name}, NC | A Good Locksmith`;
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
        if (ogTitle) ogTitle.setAttribute('content', `Locksmith in ${city.name}, NC | A Good Locksmith`);
        if (ogDescription) ogDescription.setAttribute('content', metaDescription);

        const schema = document.createElement('script');
        schema.id = 'city-page-schema';
        schema.type = 'application/ld+json';
        schema.textContent = JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Locksmith',
                    '@id': 'https://www.goodlocksmith.com/#business',
                    name: businessFacts.legalName,
                    url: 'https://www.goodlocksmith.com/',
                    telephone: '+1-984-480-5397',
                    foundingDate: businessFacts.establishedYear,
                    founder: {
                        '@type': 'Person',
                        name: businessFacts.ownerName,
                        jobTitle: 'Licensed Locksmith and Owner',
                    },
                    identifier: {
                        '@type': 'PropertyValue',
                        name: 'North Carolina Locksmith License',
                        value: businessFacts.licenseNumber,
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Lillington',
                        addressRegion: 'NC',
                        addressCountry: 'US',
                    },
                    areaServed: {
                        '@type': city.isCounty ? 'AdministrativeArea' : 'City',
                        name: `${city.name}, NC`,
                    },
                },
                {
                    '@type': 'Service',
                    '@id': `${canonicalUrl}#mobile-locksmith-service`,
                    name: `Mobile locksmith service in ${city.name}, NC`,
                    serviceType: 'Automotive, motorcycle, residential, and commercial locksmith services',
                    provider: { '@id': 'https://www.goodlocksmith.com/#business' },
                    areaServed: {
                        '@type': city.isCounty ? 'AdministrativeArea' : 'City',
                        name: `${city.name}, NC`,
                    },
                },
                {
                    '@type': 'FAQPage',
                    '@id': `${canonicalUrl}#frequently-asked-questions`,
                    mainEntity: getCityFaqs(city).map(({ question, answer }) => ({
                        '@type': 'Question',
                        name: question,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: answer,
                        },
                    })),
                },
            ],
        });
        document.head.appendChild(schema);

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
                                <li><FaCheckCircle /> {businessFacts.experienceYears} Years of Experience</li>
                                <li><FaCheckCircle /> Established in {businessFacts.establishedYear}</li>
                                <li><FaCheckCircle /> Family-Owned & Operated</li>
                                <li><FaCheckCircle /> Fair & Transparent Pricing</li>
                                <li><FaCheckCircle /> Fast Arrival to {city.name} Neighborhoods</li>
                                <li><FaCheckCircle /> Fully Equipped Mobile Units</li>
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
