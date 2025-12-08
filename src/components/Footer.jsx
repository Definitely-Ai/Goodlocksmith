import { FaPhone, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>
                                A <span className="red">"Good"</span> <span className="blue">Locksmith</span>, LLC.
                            </h3>
                            <p>
                                Trusted locksmith and security services in Southwest Florida since 1988.
                            </p>
                            <div className="footer-flag">🇺🇸</div>
                        </div>

                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <FaPhone />
                                    <a href="tel:239-278-5397">(239) 278-5397</a>
                                </li>
                                <li>
                                    <FaMapMarkerAlt />
                                    <span>Bonita Springs, FL 34136</span>
                                </li>
                                <li>
                                    <FaClock />
                                    <span>Available 24/7</span>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#reviews">Reviews</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-areas">
                            <h4>Service Areas</h4>
                            <ul>
                                <li>Naples</li>
                                <li>Bonita Springs</li>
                                <li>Estero</li>
                                <li>Fort Myers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>
                        Copyright © 2018 - {currentYear} A Good Locksmith, LLC. - All Rights Reserved.
                    </p>
                    <p className="made-with">
                        Made with <FaHeart className="heart" /> in Southwest Florida
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
