import { motion } from 'framer-motion';
import { FaPhone, FaInfoCircle, FaClock, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { businessFacts } from '../data/businessFacts';
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
                        <span className="small-text">{businessFacts.licenseNumber}</span>
                    </h1>

                    <p className="hero-subtitle">
                        🇺🇸 Serving the NC Triangle 🇺🇸
                    </p>

                    <div className="hero-features">
                        <div className="feature">
                            <FaStar className="feature-icon" />
                            <span>{businessFacts.experienceYears} Years Experience</span>
                        </div>
                        <div className="feature">
                            <FaClock className="feature-icon" />
                            <span>Fast Response Time</span>
                        </div>
                        <div className="feature">
                            <FaMapMarkerAlt className="feature-icon" />
                            <span>25-Mile Radius</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="tel:984-480-5397" className="btn btn-primary">
                            <FaPhone /> Call Now: (984) 480-5397
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            <FaInfoCircle /> About Us
                        </a>
                    </div>

                    <div className="hero-areas">
                        <span>Serving:</span>
                        <span className="area">Lillington</span>
                        <span className="divider">|</span>
                        <span className="area">Fuquay-Varina</span>
                        <span className="divider">|</span>
                        <span className="area">Angier</span>
                        <span className="divider">|</span>
                        <span className="area">Dunn</span>
                        <span className="divider">|</span>
                        <span className="area">& More</span>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src="/images/Pictrureofownerwithtruck.jpg" alt="A Good Locksmith Mobile Service" className="truck-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
