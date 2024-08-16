import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import MapComponent from './MapComponent';
import './Pro.css';
import Header from './Header';
import Footer from './Footer';
const ViewMap2 = () => {
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
            <div className="kambu-container">
                <div className="kcard">
                    <div className="content">
                        <main>
                            <h3>Kerala Grain Cultivation</h3>
                            <MapComponent region="Kerala"/>
                            <div className="map-legend">
                                <h4>Map Legend</h4>
                                <div className="legend-item">
                                    <span className="color-box" style={{ backgroundColor: '#FF0000' }}></span>
                                    <span>High Cultivation</span>
                                </div>
                                <div className="legend-item">
                                    <span className="color-box" style={{ backgroundColor: '#FFA500' }}></span>
                                    <span>Moderate Cultivation</span>
                                </div>
                                <div className="legend-item">
                                    <span className="color-box" style={{ backgroundColor: '#FFFF00' }}></span>
                                    <span>Low Cultivation</span>
                                </div>
                            </div>
                        </main>
                    </div>
                    </div>
                </div>
           <Footer />
        </>
    );
};

export default ViewMap2;
