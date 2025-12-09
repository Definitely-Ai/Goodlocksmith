import { motion } from 'framer-motion';
import { FaGoogle, FaYelp, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdoor } from 'react-icons/si';
import './Reviews.css';

const Reviews = () => {
    const reviewPlatforms = [
        {
            name: 'Google',
            icon: <FaGoogle />,
            color: '#4285F4',
            url: 'https://google.com/search?q=A+Good+Locksmith+Lillington+NC',
            description: 'Read our Google reviews'
        },
        {
            name: 'Yelp',
            icon: <FaYelp />,
            color: '#D32323',
            url: 'https://yelp.com',
            description: 'Check us out on Yelp'
        },
        {
            name: 'Angi',
            icon: <FaStar />,
            color: '#FF6138',
            url: 'https://angi.com',
            description: 'See our Angi ratings'
        },
        {
            name: 'Nextdoor',
            icon: <SiNextdoor />,
            color: '#8ED500',
            url: 'https://nextdoor.com',
            description: 'Neighborhood recommendations'
        }
    ];

    return (
        <section className="reviews" id="reviews">
            <div className="container">
                <div className="section-title">
                    <h2><span className="blue-text">REVIEWS</span></h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <span>⭐</span>
                        <span className="line"></span>
                    </div>
                    <p>Read our Reviews / Review Us</p>
                </div>

                <motion.div
                    className="reviews-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {reviewPlatforms.map((platform, index) => (
                        <motion.a
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="review-card"
                            style={{ '--accent-color': platform.color }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="review-icon" style={{ background: platform.color }}>
                                {platform.icon}
                            </div>
                            <h3>{platform.name}</h3>
                            <p>{platform.description}</p>
                            <span className="review-link">
                                Visit <FaExternalLinkAlt />
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    className="testimonial-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="stars-row">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="star-icon" />
                        ))}
                    </div>
                    <h3>Join Our Satisfied Customers</h3>
                    <p>
                        A Good Locksmith has earned a loyal following of satisfied customers throughout
                        Lillington, Fuquay-Varina, Angier, Dunn, and the surrounding NC Triangle area.
                        By word of mouth, these individuals and companies have referred family and friends
                        who have joined the ever growing ranks of satisfied clientele.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
