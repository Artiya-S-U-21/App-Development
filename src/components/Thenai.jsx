import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import './Pro.css';
import Footer from './Footer';
import thenaiImage from '/Users/artiya/Documents/app development/app1/src/assets/tamilnadu/thenai.jpg'; // Adjusted path

const Thenai = () => {
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
            <h3>Thenai (Foxtail Millet)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein<br />
                - Dietry Fiber<br />
                - Vitamins: B-complex vitamins (B1, B2, B3, B6)<br />
                - Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium<br />
                - Antioxidants
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
                - Thenai Upma<br />
                - Thenai Pongal<br />
                - Thenai Pulao<br />
                - Thenai Idli
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked Thenai per day.<br />
                - Children: 1/4 to 1/2 cup of cooked Thenai per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Food Allergy<br />
                - Celiac Disease or Gluten Sensitivity<br />
                - FODMAP Intolerance<br />
                - Lectin Sensitivity
            </p>
            
        </div>
        <img src={thenaiImage} alt="kambu" className="k-image" />
    </div>
</div>
<Footer />
        </>
    );
};

export default Thenai;
