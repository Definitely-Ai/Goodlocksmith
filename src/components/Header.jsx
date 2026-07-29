import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Service Areas', href: '/#areas' },
        { name: 'Security Blog', href: '/blog' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className={'header ' + (isScrolled ? 'scrolled' : '')}>
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="A Good Locksmith" className="logo-image" />
                    <div className="logo-text-wrapper">
                        <span className="logo-text">A <span className="red">"Good"</span> <span className="blue">Locksmith</span></span>
                        <span className="logo-llc">, LLC.</span>
                    </div>
                </Link>
                <nav className={'nav ' + (isMobileMenuOpen ? 'open' : '')}>
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="tel:984-480-5397" className="phone-btn">
                    <FaPhone className="phone-icon" />
                    <span className="phone-number">(984) 480-5397</span>
                </a>
                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}><a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a></li>
                            ))}
                            <li><a href="tel:984-480-5397" className="mobile-phone"><FaPhone /> (984) 480-5397</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
