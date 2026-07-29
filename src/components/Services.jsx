import { motion } from 'framer-motion';
import { FaHome, FaCar, FaBuilding, FaMobileAlt, FaKey, FaLock, FaShieldAlt, FaWrench } from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <FaHome />,
            title: 'Home Services',
            emoji: '🏠',
            description: 'Residential locksmith services including lockouts, rekeying, lock installation, and home security solutions.',
            features: ['Lock Installation', 'Rekeying', 'Lockout Service', 'Security Upgrades']
        },
        {
            icon: <FaCar />,
            title: 'Auto Services',
            emoji: '🚗',
            description: 'Complete automotive locksmith services for all makes and models. Car lockouts, key programming, and more.',
            features: ['Car Lockouts', 'Key Cutting', 'Transponder Keys']
        },
        {
            icon: <FaBuilding />,
            title: 'Business Services',
            emoji: '🏢',
            description: 'Commercial locksmith solutions for businesses of all sizes. High-security locks, access control, and master key systems.',
            features: ['Master Key Systems', 'Access Control', 'Panic Hardware', 'High-Security Locks']
        },
        {
            icon: <FaMobileAlt />,
            title: 'Smart Locks',
            emoji: '📱',
            description: 'Modern smart lock installation and programming. Upgrade your security with the latest technology.',
            features: ['Smart Lock Install', 'Keypad Locks', 'WiFi Locks', 'App Integration']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-title">
                    <h2><span className="title-gradient">Professional Locksmith Services</span></h2>
                    <div className="title-accent">
                        <span className="accent-line"></span>
                        <FaKey className="accent-icon" />
                        <span className="accent-line"></span>
                    </div>
                    <p className="section-subtitle">
                        Available 24/7 for all your security needs — fast, reliable, and guaranteed!
                    </p>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={itemVariants}
                        >
                            <div className="service-icon">
                                {service.icon}
                                <span className="service-emoji">{service.emoji}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <FaShieldAlt /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="cta-content">
                        <FaLock className="cta-icon" />
                        <div>
                            <h3>Need Emergency Service?</h3>
                            <p>We're available 24/7 for all your locksmith needs</p>
                        </div>
                    </div>
                    <a href="tel:984-480-5397" className="btn btn-primary">
                        <FaWrench /> Call Now: (984) 480-5397
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
