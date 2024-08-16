import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './Pro.css';
const Kerala = () => {
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
                    <Link to="/nutritional-chart2">
                        <div className="card-content">
                            <h3>Nutritional Chart</h3>
                        </div>
                    </Link>
                </div>
            </div>
        <div className="products">
                <div className="card">
                <Link to="/sorghum">
                   <div className="card-image sorghum-image"></div>
                   </Link>     
                    <h3>Sorghum</h3>
                </div>
                <div className="card">
                <Link to="/chama">
                        <div className="card-image chama-image"></div>
                    </Link>
                    <h3>Chama</h3>
                </div>
                <div className="card">
                <Link to="/bean">
                        <div className="card-image bean-image"></div>
                    </Link>
                    <h3>Bean Sprouts</h3>
                </div>
            </div>
        <div className="products">
                <div className="card">
                <Link to="/blackgram">
                        <div className="card-image blackgram-image"></div>
                        </Link>
                    <h3>Whole Black Gram</h3>
                </div>
                <div className="card">
                <Link to="/moon">
                        <div className="card-image moong-image"></div>
                    </Link>
                    <h3>Moong Dal</h3>
                </div>
                <div className="card">
                <Link to="/whitepea">
                        <div className="card-image whitepea-image"></div>
                    </Link>
                    <h3>White Pea Bean</h3>
                </div>
            </div>
             <Footer />
            </>
    );
};

export default Kerala;
