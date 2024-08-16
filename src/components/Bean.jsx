import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import Header from './Header';
import './Pro.css';
import Footer from './Footer';
import beanImage from '/Users/artiya/Documents/app development/app1/src/assets/kerala/bean 9.58.42 AM.jpg'; // Adjusted path

const Bean = () => {
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
            <h3>Bean Sprouts</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein<br />
                - Dietry Fiber<br />
                - Vitamins: Vitamin C, Vitamin K, B-complex vitamins (B1, B2, B3, B6)<br />
                - Minerals: Iron, Calcium, Magnesium, Phosphorus, Potassium<br />
                - Antioxidants: Rich in antioxidants that help combat oxidative stress.
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Supports Digestion<br />
                - Regulates Blood Sugar<br />
                - Boosts Heart Health<br />
                - Promotes Weight Loss<br />
                - Enhances Bone Health<br />
                - Prevents Anemia<br />
                - Boosts Metabolism
            </p>
            <p>
                <strong>Good For:</strong><br />
                - Weight Loss: Due to its high fiber content and low glycemic index.<br />
                - Immune Support: High in Vitamin C and antioxidants which enhance immune function.<br />
                - Anemia: Rich in iron, beneficial for those with low hemoglobin levels.<br />
                - Bone Health: High in calcium, great for children, pregnant women, and the elderly<br />
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - Bean Sprout Salad<br />
                - Bean Sprout Stir-Fry<br />
                - Bean Sprout Soup<br />
                - Bean Sprout Stir-Fried Rice
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1 to 2 cups of bean sprouts per day.<br />
                - Children: 1/2 to 1 cup of bean sprouts per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Soy Allergy<br />
                - Legume Allergy<br />
                - Histamine Intolerance<br />
                - Digestive Issues
            </p>
            
        </div>
        <img src={beanImage} alt="kambu" className="k-image" />
    </div>
</div>
            <Footer />
        </>
    );
};

export default Bean;
