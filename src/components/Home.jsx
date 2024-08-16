import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './Pro.css';
const Home = () => {

    return (
        <>
        <Header />
            <Element name="home" className="element">
                <div className="home">
                </div>
            </Element>
            <Element name="about" className="element about" id="about">
                <div className="about-text">
                    <p><b>Discover the richness and nutritional power of South Indian whole grains with Grainwise, your go-to resource for everything you need to know about these wholesome staples.</b></p>
                    <p>At Grainwise, we believe in the goodness of whole grains and their vital role in a balanced diet. Our mission is to provide you with detailed information and nutritional benefits of a variety of whole grains native to South India.</p>
                    <p>South India is home to a diverse array of whole grains, each with its unique nutritional profile and culinary uses. These grains have been a staple in traditional diets for centuries, offering not just sustenance but also medicinal benefits. By choosing South Indian whole grains, you're not only embracing nutritious food but also preserving cultural heritage and supporting sustainable agriculture.</p>
                    <p>Whether you’re a health-conscious individual, a food enthusiast, or someone looking to explore the rich culinary heritage of South India, Grainwise is here to guide you. Dive into our extensive collection of grain profiles, recipes, and nutritional insights, and discover the myriad ways these humble grains can transform your meals and enhance your health.</p>
                    <p><b>Grainwise –</b> Where South Indian tradition meets modern nutrition. Start your journey to better health and delicious eating today!</p>
                </div>
                <div className="about-image"></div>
            </Element>
            <div className="products">
                <div className="card">
                    <Link to="/Tamilnadu">
                        <div className="card-image tamilnadu-image"></div>
                    </Link>
                    <h3>Tamil Nadu</h3>
                </div>
                <div className="card">
                    <Link to="/Kerala">
                        <div className="card-image kerala-image"></div>
                    </Link>
                    <h3>Kerala</h3>
                </div>
                <div className="card">
                    <Link to="/Karnataka">
                        <div className="card-image karnataka-image"></div>
                    </Link>
                    <h3>Karnataka</h3>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;