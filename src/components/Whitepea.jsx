import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Pro.css';
import Footer from './Footer';
import wImage from '/Users/artiya/Documents/app development/app1/src/assets/kerala/whitepea.jpg'; // Adjusted path
import Header from './Header';
const Whitepea = () => {
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
            <h3>White Pea Bean (Navy Bean)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein: A substantial source of plant-based protein.<br />
                - Dietary Fiber: Promotes healthy digestion.<br />
                - Vitamins: B-complex vitamins (B1, B2, B3, B6, B9), Vitamin C, and Vitamin E.<br />
                - Minerals: Iron, Calcium, Magnesium, Potassium, Phosphorus, and Zinc.<br />
                - Antioxidants: Contains various antioxidants such as flavonoids and phenolic acids.
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
                - Diabetics: Helps in controlling blood sugar levels.<br />
                - Anemia: Rich in iron, beneficial for those with low hemoglobin levels.<br />
                - Muscle Building: High protein content aids in muscle repair and growth.<br />
                - Heart Health: Rich in nutrients that support cardiovascular health.
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - White Pea Bean Soup<br />
                - White Pea Bean Salad<br />
                - White Pea Bean Stew<br />
                - White Pea Bean Hummus
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked white pea beans per day.<br />
                - Children: 1/4 to 1/2 cup of cooked white pea beans per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Legume Allergy<br />
                - Digestive Issues<br />
                - Cross-Reactivity
            </p>
            
        </div>
        <img src={wImage} alt="kambu" className="k-image" />
    </div>
</div>
<Footer />
        </>
    );
};

export default Whitepea;
