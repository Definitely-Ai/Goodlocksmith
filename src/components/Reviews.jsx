import { motion } from 'framer-motion';
import { FaGoogle, FaYelp, FaStar, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';
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

    const testimonials = [
        {
            title: "Reliable and Efficient",
            text: "The technician arrived exactly when promised and was extremely professional. He handled our lockout quickly and the pricing was very fair. It is great to find a local business that is both reliable and efficient. Highly recommend!",
            rating: 5
        },
        {
            title: "Expert Knowledge and Great Service",
            text: "A professional team that clearly knows their trade. They arrived on time, resolved the issue quickly, and even took the time to adjust a few other locks while they were here. They were friendly, knowledgeable, and the price was very reasonable.",
            rating: 5
        },
        {
            title: "Fast Emergency Response",
            text: "I called in an emergency situation and they were at my location in less than 20 minutes. They had me back inside my home in no time with zero damage to the lock. The service was top-notch and made a stressful situation much easier to handle.",
            rating: 5
        },
        {
            title: "Excellent Value and Reliability",
            text: "We needed several specialized keys cut and the service was quick and accurate. They offer transparent pricing and a high level of customer care that you only get with a local family-owned business. I wouldn't call anyone else for my security needs.",
            rating: 5
        },
        {
            title: "Highly Recommended for Home Security",
            text: "Very impressed with the level of communication and the quality of work. They handled a complex re-keying job for our new house with ease and were very helpful in explaining our security options. Professional, clean, and courteous from start to finish.",
            rating: 5
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

                <div className="section-title" style={{ marginTop: '80px' }}>
                    <h2><span className="red-text">CUSTOMER</span> <span className="blue-text">TESTIMONIALS</span></h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <span>⭐</span>
                        <span className="line"></span>
                    </div>
                </div>

                <motion.div
                    className="testimonials-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="testimonial-quote-icon">
                                <FaQuoteLeft />
                            </div>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <h3>{testimonial.title}</h3>
                            <p>"{testimonial.text}"</p>
                            <div className="testimonial-footer">
                                <span className="verified-badge">Verified Customer</span>
                            </div>
                        </motion.div>
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
