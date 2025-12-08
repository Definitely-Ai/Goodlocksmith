import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaClock, FaAward, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
    const stats = [
        { icon: <FaClock />, value: '35+', label: 'Years Experience' },
        { icon: <FaUsers />, value: '10K+', label: 'Happy Customers' },
        { icon: <FaClock />, value: '24/7', label: 'Availability' },
        { icon: <FaAward />, value: '100%', label: 'Satisfaction' },
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
                            <h3>Our Story</h3>
                            <p>
                                <strong>A Good Locksmith, LLC</strong> is a reputable, trusted locksmith and security
                                business located in Southwest Florida. We operate out of <strong>Bonita Springs</strong>,
                                located on the border of Lee and Collier counties. Our response time cannot be matched
                                being between Naples and Fort Myers.
                            </p>
                            <p>
                                We have been in operation since <strong>1988</strong> and offer around the clock,
                                24-hour emergency service with fully equipped mobile units. The original founder
                                of the business was <strong>Mr. Harry Good</strong>, thus came the name, A Good Locksmith.
                            </p>
                            <p>
                                In 1994 the business was purchased and taken over by <strong>Mike Galdine</strong>.
                                Over the last 30 years Mike has built up the small business into a much larger operation,
                                creating a following with many local realtors, property managers, shopping centers,
                                outlet malls, law enforcement agencies, and golf communities.
                            </p>
                        </div>

                        <div className="team-section">
                            <h4>Meet Our Team</h4>
                            <div className="team-members">
                                <div className="team-member">
                                    <FaCheckCircle className="check-icon" />
                                    <div>
                                        <strong>Mike Galdine</strong>
                                        <span>Owner & Operator</span>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <FaCheckCircle className="check-icon" />
                                    <div>
                                        <strong>Ryan Delfino</strong>
                                        <span>Senior Technician (Since 2001)</span>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <FaCheckCircle className="check-icon" />
                                    <div>
                                        <strong>Matt Galdine</strong>
                                        <span>Auto Entry Technician</span>
                                    </div>
                                </div>
                            </div>
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
                            <p>
                                Mike Galdine works hard to earn the trust and confidence of his clients by providing
                                solutions to their vital locksmith and security needs. Whatever your problem—automotive,
                                residential, or commercial—we deliver a solution at an affordable price.
                            </p>

                            <ul className="benefits-list">
                                <li><FaCheckCircle /> We actually answer the phone</li>
                                <li><FaCheckCircle /> Return messages promptly</li>
                                <li><FaCheckCircle /> Call back missed calls 24/7</li>
                                <li><FaCheckCircle /> Customer service unmatched</li>
                                <li><FaCheckCircle /> Affordable pricing</li>
                                <li><FaCheckCircle /> Fully equipped mobile units</li>
                            </ul>

                            <a href="tel:239-278-5397" className="btn btn-primary full-width">
                                <FaPhone /> Give Us a Call!
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
