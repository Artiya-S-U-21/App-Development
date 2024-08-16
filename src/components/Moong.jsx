import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './Pro.css';
import moonImage from '/Users/artiya/Documents/app development/app1/src/assets/kerala/moong.jpg'; // Adjusted path

const Moong = () => {
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
            <h3>Moong (Mung Bean)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein: Provides a substantial amount of plant-based protein.<br />
                - Dietary Fiber: Supports healthy digestion.<br />
                - Vitamins: Includes Vitamins A, B-complex (B1, B2, B3, B6, B9), C, and E.<br />
                - Minerals: Contains Iron, Calcium, Magnesium, Potassium, Phosphorus, and Zinc.<br />
                - Antioxidants: Includes various antioxidants such as flavonoids and phenolic acids.
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Supports Digestion<br />
                - Regulates Blood Sugar<br />
                - Boosts Heart Health<br />
                - Promotes Weight Loss<br />
                - Prevents Anemia<br />
                - Enhances Skin Health
            </p>
            <p>
                <strong>Good For:</strong><br />
                - Weight Loss: Due to its high fiber content and low glycemic index.<br />
                - Diabetics: Helps in controlling blood sugar levels.<br />
                - Anemia: Rich in iron, beneficial for those with low hemoglobin levels.<br />
                - Muscle Building: High protein content aids in muscle repair and growth.<br />
                - Heart Health: Rich in nutrients that support cardiovascular health.
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - Moong Dal Soup<br />
                - Moong Dal Khichdi<br />
                - Moong Sprout Salad<br />
                - Moong Dal Chilla (Pancakes)
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked moong dal or sprouts per day.<br />
                - Children: 1/4 to 1/2 cup of cooked moong dal or sprouts per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Legume Allergy<br />
                - Digestive Issues<br />
                - Cross-Reactivity
            </p>
            
        </div>
        <img src={moonImage} alt="kambu" className="k-image" />
    </div>
</div>
   <Footer />
        </>
    );
};

export default Moong;
