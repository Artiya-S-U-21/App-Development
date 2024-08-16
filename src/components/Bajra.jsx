import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Pro.css';
import Header from './Header';
import Footer from './Footer';
import bajImage from '/Users/artiya/Documents/app development/app1/src/assets/karnataka/bajra.jpg'; // Adjusted path

const Bajra = () => {
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
            <h3>Bajra (Pearl Millet)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein: A good source of plant-based protein.<br />
                - Dietary Fiber: Promotes healthy digestion and bowel movements.<br />
                - Vitamins: Rich in B-complex vitamins (B1, B2, B3, B6), Vitamin E, and Vitamin K.<br />
                - Minerals: High in Iron, Calcium, Magnesium, Potassium, Phosphorus, and Zinc.<br />
                - Antioxidants: Contains flavonoids and phenolic acids, which are powerful antioxidants.
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
                - Bone Health: High in calcium, great for children, pregnant women, and the elderly<br />
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - Bajra Roti (Pearl Millet Flatbread)<br />
                - Bajra Khichdi<br />
                - Bajra Salad<br />
                - Bajra Porridge
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked bajra per day.<br />
                - Children: 1/4 to 1/2 cup of cooked bajra per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Cereal Allergy<br />
                - Digestive Issues<br />
                - Cross-Reactivity
            </p>
            
        </div>
        <img src={bajImage} alt="kambu" className="k-image" />
    </div>
    
</div>
<Footer />
        </>
    );
};

export default Bajra;
