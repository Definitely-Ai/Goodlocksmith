import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaClock, FaPhone, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaClock />, value: '30+', label: 'Years Experience' },
        { icon: <FaUsers />, value: '10K+', label: 'Happy Customers' },
        { icon: <FaClock />, value: '24/7', label: 'Availability' },
        { icon: <FaMapMarkerAlt />, value: '25mi', label: 'Service Radius' },
    ];

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>Who Is <span className="red-text">A "Good"</span> <span className="blue-text">Locksmith?</span></h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <span>🇺🇸</span>
                        <span className="line"></span>
                    </div>
                </div>

                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-card">
                            <div className="owner-image-container">
                                <img src="/images/Pictureofowner.jpg" alt="Owner" className="owner-image" />
                            </div>
                            <h3>Our Story</h3>
                            <p>
                                <strong>A Good Locksmith, LLC</strong> has been proudly serving customers since
                                <strong> 1994</strong>, delivering fast, reliable, and professional locksmith
                                services with integrity at the core of everything we do.
                            </p>
                            <p>
                                With fully equipped mobile units and decades of hands-on experience, we provide
                                trusted <strong>automotive, residential, and commercial</strong> solutions —
                                24 hours a day.
                            </p>
                            <p>
                                Now based in <strong>Lillington, North Carolina</strong>, we serve a wide
                                <strong> 25-mile radius</strong>, bringing dependable service to communities
                                throughout the Triangle region including Fuquay-Varina, Angier, Dunn, and more.
                            </p>
                        </div>

                        <div className="team-section">
                            <h4><FaTruck /> Fully Equipped Mobile Units</h4>
                            <p className="mobile-service-text">
                                We come to you! Our mobile locksmith vans are fully stocked with professional
                                tools and equipment to handle any locksmith job on-site — from car lockouts
                                to home rekeying to commercial lock installations.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-sidebar"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="why-choose-card">
                            <h3>Why Choose Us?</h3>
                            <p className="tagline">Fast. Professional. Local.</p>
                            <p>
                                From emergency lockouts to full security upgrades, A Good Locksmith delivers
                                dependable service when you need it most. We're here to help — morning, day, or night.
                            </p>

                            <ul className="benefits-list">
                                <li><FaCheckCircle /> 30+ Years of Experience</li>
                                <li><FaCheckCircle /> We Actually Answer the Phone</li>
                                <li><FaCheckCircle /> Fast Response Times</li>
                                <li><FaCheckCircle /> Fully Equipped Mobile Units</li>
                                <li><FaCheckCircle /> Fair & Affordable Pricing</li>
                                <li><FaCheckCircle /> Serving the Entire Triangle South</li>
                            </ul>

                            <a href="tel:984-480-5397" className="btn btn-primary full-width">
                                <FaPhone /> Call (984) 480-5397
                            </a>
                            <p className="cta-text">Morning, Day or Night — We're Here to Help!</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="stats-row"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
