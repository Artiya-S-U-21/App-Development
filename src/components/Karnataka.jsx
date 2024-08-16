import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './Pro.css';
const Karnataka = () => {
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <>
        <Header />
        <div className="view-map-container">
                <div className="view-map-card">
                    <Link to="/view-map1">
                        <div className="card-content">
                            <h3>View Map</h3>
                        </div>
                    </Link>
                </div>
                <div className="nutritional-chart-card">
                    <Link to="/nutritional-chart3">
                        <div className="card-content">
                            <h3>Nutritional Chart</h3>
                        </div>
                    </Link>
                </div>
            </div>
        <div className="products">
                <div className="card">
                <Link to="/jowar">
                   <div className="card-image jowar-image"></div>
                   </Link>     
                    <h3>Jowar</h3>
                </div>
                <div className="card">
                    <Link to="/bajra">
                        <div className="card-image bajra-image"></div>
                    </Link>
                    <h3>Bajra</h3>
                </div>
                <div className="card">
                    <Link to="/maize">
                        <div className="card-image maize-image"></div>
                    </Link>
                    <h3>Maize</h3>
                </div>
            </div>
        <div className="products">
                <div className="card">
                <Link to="/Tamilnadu">
                        <div className="card-image greengram-image"></div>
                        </Link>
                    <h3>Green Gram</h3>
                </div>
                <div className="card">
                    <a href="/path-to-kerala-product-page">
                        <div className="card-image peanuts-image"></div>
                    </a>
                    <h3>Peanuts</h3>
                </div>
                <div className="card">
                    <a href="/path-to-karnataka-product-page">
                        <div className="card-image sesame-image"></div>
                    </a>
                    <h3>Sesame</h3>
                </div>
            </div>
        
        <Footer />
        </>
    );
};

export default Karnataka;
