import { motion } from 'framer-motion';
import { FaPhone, FaInfoCircle, FaClock, FaStar } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg">
                <div className="stars">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="star" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`
                        }}>★</span>
                    ))}
                </div>
                <div className="stripes"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="hero-badge">
                        <FaClock /> 24/7 Emergency Services
                    </div>

                    <h1 className="hero-title">
                        <span className="small-text">Just Don't Call</span>
                        <span className="any-text">Any Locksmith</span>
                        <span className="call-text">CALL</span>
                        <span className="brand-text">
                            A <span className="red">"Good"</span> <span className="blue">Locksmith</span>
                        </span>
                    </h1>

                    <p className="hero-subtitle">
                        🇺🇸 Trusted by Southwest Florida since 1988 🇺🇸
                    </p>

                    <div className="hero-features">
                        <div className="feature">
                            <FaStar className="feature-icon" />
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="feature">
                            <FaClock className="feature-icon" />
                            <span>Fast Response Time</span>
                        </div>
                        <div className="feature">
                            <FaStar className="feature-icon" />
                            <span>Locally Owned</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="tel:239-278-5397" className="btn btn-primary">
                            <FaPhone /> Call Now: (239) 278-5397
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            <FaInfoCircle /> About Us
                        </a>
                    </div>

                    <div className="hero-areas">
                        <span>Serving:</span>
                        <span className="area">Naples</span>
                        <span className="divider">|</span>
                        <span className="area">Bonita Springs</span>
                        <span className="divider">|</span>
                        <span className="area">Estero</span>
                        <span className="divider">|</span>
                        <span className="area">Fort Myers</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
