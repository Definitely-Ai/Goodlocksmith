import { motion } from 'framer-motion';
import { FaFire, FaExternalLinkAlt, FaLock, FaKey, FaSprayCan } from 'react-icons/fa';
import './Products.css';

const Products = () => {
    const products = [
        {
            name: 'Affordable Wall Mount Lockbox',
            description: 'Secure key storage solution',
            icon: <FaLock />,
            link: 'https://amazon.com'
        },
        {
            name: 'Hanging Key Safe Lock Box',
            description: 'Convenient and secure',
            icon: <FaKey />,
            link: 'https://amazon.com'
        },
        {
            name: 'Tri-Flow Superior Lubricant (4oz)',
            description: 'Professional grade lubricant',
            icon: <FaSprayCan />,
            link: 'https://amazon.com'
        },
        {
            name: 'Super Slick Stuff Cleaner/Lubricant (11oz)',
            description: 'Cleaner and lubricant combo',
            icon: <FaSprayCan />,
            link: 'https://amazon.com'
        }
    ];

    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-title products-title">
                    <h2>A GOOD <span className="fire-icon">🔥</span> <span className="red-text">PRODUCTS</span></h2>
                    <div className="patriotic-divider">
                        <span className="line"></span>
                        <span>🇺🇸</span>
                        <span className="line"></span>
                    </div>
                    <p>We Recommend these Products below</p>
                </div>

                <motion.div
                    className="products-intro"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Each of the following products are highly recommended by A Good Locksmith.
                        Click the button to connect to the link for purchase options.
                    </p>
                </motion.div>

                <motion.div
                    className="products-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-icon">
                                {product.icon}
                            </div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                View Product <FaExternalLinkAlt />
                            </a>
                        </div>
                    ))}
                </motion.div>

                <div className="products-cta">
                    <h4>Recommended Products</h4>
                    <p>Click Below to View links for purchase</p>
                </div>
            </div>
        </section>
    );
};

export default Products;
