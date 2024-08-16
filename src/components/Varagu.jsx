import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import './Pro.css';
import Footer from './Footer';
import varaguImage from '/Users/artiya/Documents/app development/app1/src/assets/tamilnadu/varagu.jpg'; // Adjusted path

const Varagu = () => {
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
            <h3>Varagu (Kodo Millet)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein<br />
                - Dietary Fiber<br />
                - Vitamins: B-complex vitamins (B1, B2, B3, B6), Vitamin E<br />
                - Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium<br />
                - Antioxidants
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Supports Digestion<br />
                - Regulates Blood Sugar<br />
                - Boosts Heart Health<br />
                - Supports Weight Loss<br />
                - Boosts Bone Health<br />
                - Combats Anemia
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
                - Varagu Pongal<br />
                - Varagu Upma<br />
                - Varagu Pulao<br />
                - Varagu Kichdi
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked Varagu per day.<br />
                - Children: 1/4 to 1/2 cup of cooked Varagu per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Food Allergy<br />
                - Celiac Disease or Gluten Sensitivity<br />
                - FODMAP Intolerance<br />
                - Lectin Sensitivity
            </p>
            
        </div>
        <img src={varaguImage} alt="kambu" className="k-image" />
    </div>
</div>
   <Footer />
        </>
    );
};

export default Varagu;
