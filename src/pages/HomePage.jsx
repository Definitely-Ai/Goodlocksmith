import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Reviews />
                <Contact />
                <Products />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
