import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Pro.css';
import Header from './Header';
import Footer from './Footer';

const Tamilnadu = () => {
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
                    <Link to="/nutritional-chart">
                        <div className="card-content">
                            <h3>Nutritional Chart</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="products">
                <div className="card">
                    <Link to="/Kambu">
                        <div className="card-image kambu-image"></div>
                    </Link>
                    <h3>Kambu</h3>
                </div>
                <div className="card">
                    <Link to="/Ragi">
                        <div className="card-image ragi-image"></div>
                    </Link>
                    <h3>Ragi</h3>
                </div>
                <div className="card">
                    <Link to="/Saamai">
                        <div className="card-image saamai-image"></div>
                    </Link>
                    <h3>Saamai</h3>
                </div>
            </div>
            <div className="products">
                <div className="card">
                    <Link to="/Varagu">
                        <div className="card-image varagu-image"></div>
                    </Link>
                    <h3>Varagu</h3>
                </div>
                <div className="card">
                    <Link to="/Kuthiraivali">
                        <div className="card-image kuthiraivali-image"></div>
                    </Link>
                    <h3>Kuthiraivali</h3>
                </div>
                <div className="card">
                    <Link to="/Thenai">
                        <div className="card-image thenai-image"></div>
                    </Link>
                    <h3>Thenai</h3>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tamilnadu;
