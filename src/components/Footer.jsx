import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';

import './Pro.css';

const Footer = () => {

    return (
        
        <Element name="contact" className="element contact" id="contact">
        <div className="contact-text">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to give us feedback, feel free to reach out to us.</p>
            <p>Email: <a href="mailto:support@grainwise.com" className="email-link">support@grainwise.com</a></p>
            <p>Phone: +1 (234) 567</p>
            <p>Address: BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008</p>
        </div>
    </Element>
            );
};
export default Footer;