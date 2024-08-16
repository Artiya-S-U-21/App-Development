import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Pro.css';
import ragiImage from '/Users/artiya/Documents/app development/app1/src/assets/tamilnadu/ragi.jpg'; // Adjusted path
import Header from './Header';
const Ragi = () => {
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
        <h3>Ragi (Finger Millet)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Protein<br />
                - Dietary Fiber<br />
                - Vitamins: B-complex vitamins (B1, B2, B3), Vitamin E<br />
                - Minerals: Calcium, Iron, Magnesium, Phosphorus, Potassium<br />
                - Amino Acids: Methionine, Lysine<br />
                - Antioxidants
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Strengthens Bones<br />
                - Controls Diabetes<br />
                - Aids in Weight Loss<br />
                - Combats Anemia<br />
                - Improves Heart Health<br />
                - Boosts Digestion<br />
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
                - Ragi Porridge (Ragi Kanji)<br />
                - Ragi Roti (Finger Millet Flatbread)<br />
                - Ragi Dosa (Finger Millet Crepes)<br />
                - Ragi Laddoo (Finger Millet Balls)
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Food Allergy<br />
                - Celiac Disease or Gluten Sensitivity<br />
                - FODMAP Intolerance<br />
                - Lectin Sensitivity
            </p>
        </div>
        <img src={ragiImage} alt="kambu" className="k-image" />
    </div>
</div>


            <div id="contact" ref={contactRef} className="contact">
                <div className="contact-text">
                    <h2>Contact Us</h2>
                    <p>We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to give us feedback, feel free to reach out to us.</p>
                    <p>Email: <a href="mailto:support@grainwise.com" className="email-link">support@grainwise.com</a></p>
                    <p>Phone: +1 (234) 567-8901</p>
                    <p>Address: BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008</p>
                </div>
            </div>
        </>
    );
};

export default Ragi;
