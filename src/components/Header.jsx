import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useAuth } from './AuthContext'; // Import the custom hook
import './Pro.css';

const Header = () => {
    const { isLoggedIn, logout } = useAuth(); // Get auth state and actions
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to the homepage after logout
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/"></a>
            </div>
            <div className="header-right">
                <Link to="/">Home</Link>
                <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
                <Link to="/faq">Myth Buster</Link>
                <Link to="/DietryRestrictions">Dietary Restrictions</Link>
                <Link to="/ProteinCalculator">Protein Calculator</Link>
                {isLoggedIn ? (
                    <Link className="logout-link" onClick={handleLogout}>Logout</Link>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
