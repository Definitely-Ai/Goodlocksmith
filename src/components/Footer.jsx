import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const serviceAreas = [
        { name: 'Lillington', path: '/Lillington' },
        { name: 'Fuquay-Varina', path: '/Fuquay-Varina' },
        { name: 'Angier', path: '/Angier' },
        { name: 'Dunn', path: '/Dunn' },
        { name: 'Harnett County', path: '/Harnett-County' },
        { name: 'Wake County', path: '/Wake-County' },
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>A <span className="red">"Good"</span> <span className="blue">Locksmith</span>, LLC.</h3>
                            <p>Professional locksmith services in the NC Triangle. Fast. Professional. Local.</p>
                            <div className="footer-flag">🇺🇸</div>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li><FaPhone /><a href="tel:984-480-5397">(984) 480-5397</a></li>
                                <li><FaMapMarkerAlt /><span>Lillington, NC</span></li>
                                <li><FaClock /><span>Available 24/7</span></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/#home">Home</a></li>
                                <li><a href="/#about">About Us</a></li>
                                <li><a href="/#services">Services</a></li>
                                <li><a href="/#areas">Service Areas</a></li>
                                <li><Link to="/blog">Security Blog</Link></li>
                                <li><a href="/#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-areas">
                            <h4>Service Areas</h4>
                            <ul>
                                {serviceAreas.map((area) => <li key={area.name}><Link to={area.path}>{area.name}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>Copyright © {currentYear} A Good Locksmith, LLC. - All Rights Reserved.</p>
                    <p className="made-with">Made by <a href="https://aidreambuilders.com" target="_blank" rel="noopener noreferrer" className="builder-link">aidreambuilders.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
