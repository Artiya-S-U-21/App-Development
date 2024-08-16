import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Pro.css';
import saamaiImage from '/Users/artiya/Documents/app development/app1/src/assets/tamilnadu/saamai.jpg'; // Adjusted path
import Header from './Header';
import Footer from './Footer';
const Saamai = () => {
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
        <h3>Saamai (Little Millet)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein<br />
                - Dietary Fiber<br />
                - Vitamins: B-complex vitamins (B1, B2, B3, B6),Vitamin E<br />
                - Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium<br />
                - Amino Acids: Methionine, Tryptophan<br />
                - Antioxidants
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Regulates Blood Sugar<br />
                - Aids in Weight Loss<br />
                - Strengthens Bones<br />
                - Combats Anemia<br />
                - Boosts Heart Health<br />
                - Gluten-Free
            </p>
            <p>
                <strong>Good For:</strong><br />
                - Weight Loss: Due to its high fiber content and low glycemic index.<br />
                - Diabetics: Helps in controlling blood sugar levels.<br />
                - Anemia: Rich in iron, beneficial for those with low hemoglobin levels.<br />
                - Bone Health: High in calcium, great for children, pregnant women, and the elderly<br />
                - Gluten Sensitivity: Safe for people with celiac disease or gluten intolerance.
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - Saamai Upma<br />
                - Saamai Idli<br />
                - Saamai Pongal<br />
                - Saamai Pulao
            </p>
            <p>
               <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked Saamai per day.<br />
                - Children: 1/4 to 1/2 cup of cooked Saamai per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Food Allergy<br />
                - Celiac Disease or Gluten Sensitivity<br />
                - FODMAP Intolerance<br />
                - Lectin Sensitivity
            </p>
        </div>
        <img src={saamaiImage} alt="kambu" className="k-image" />
    </div>
</div>
<Footer />
        </>
    );
};

export default Saamai;
