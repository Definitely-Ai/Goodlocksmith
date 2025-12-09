import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // For now, simulate form submission
        // Replace with actual Formspree endpoint when available
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1000);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2><span className="red-text">Contact</span> <span className="blue-text">Us</span></h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <span>🇺🇸</span>
                        <span className="line"></span>
                    </div>
                    <p>Get a Free Quote - We're here to help 24/7!</p>
                </div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3>Get a Free Quote</h3>

                            <div className="form-group">
                                <label htmlFor="name">
                                    <FaUser /> Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <FaEnvelope /> Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">
                                    <FaPhone /> Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(984) 000-0000"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">How can we help you?</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Describe your locksmith needs..."
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary full-width"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="success-message">
                                    ✅ Thank you! We'll get back to you soon.
                                </div>
                            )}

                            <p className="form-disclaimer">
                                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                            </p>
                        </form>
                    </motion.div>

                    <motion.div
                        className="contact-info-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-info-card">
                            <div className="emergency-banner">
                                <FaClock />
                                <div>
                                    <strong>24 Hour Emergency Service Available</strong>
                                    <p>For emergency service, please contact us at your convenience.</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>A Good Locksmith, LLC.</p>
                                    <p>Lillington, NC</p>
                                    <p className="service-note">Serving 25-mile radius</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:984-480-5397" className="phone-link">(984) 480-5397</a>
                                    <p className="phone-hint">KEYS</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <FaClock />
                                </div>
                                <div>
                                    <h4>Hours</h4>
                                    <p><strong>Available 24/7</strong></p>
                                    <p>Emergency Service Anytime</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
