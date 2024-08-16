import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Pro.css';
import Header from './Header.jsx';
import Footer from './Footer';
import kambuImage from '/Users/artiya/Documents/app development/app1/src/assets/tamilnadu/kambu.jpg';

const Kambu = () => {
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
                        <h3>Kambu (Pearl Millet)</h3>
                        <p>
                            <strong>Nutritional Value:</strong><br />
                            - Protein<br />
                            - Fiber<br />
                            - Vitamins: B-complex vitamins (B1, B2, B3, B6)<br />
                            - Minerals: Iron, Magnesium, Phosphorus, Zinc<br />
                            - Antioxidants<br />
                            - Essential Amino Acids
                        </p>
                        <p>
                            <strong>Benefits:</strong><br />
                            - Regulates Blood Sugar<br />
                            - Boosts Heart Health<br />
                            - Supports Weight Loss<br />
                            - Enhances Immune System<br />
                            - Prevents Anemia
                        </p>
                        <p>
                            <strong>Recipes:</strong><br />
                            - Kambu Koozh (Pearl Millet Porridge)<br />
                            - Kambu Adai (Pearl Millet Pancake)<br />
                            - Kambu Idli (Pearl Millet Steamed Cakes)<br />
                            - Kambu Roti (Pearl Millet Flatbread)
                        </p>
                        <p>
                            <strong>Recommended Consumption Amount:</strong><br />
                            - Adults: 1/2 to 1 cup of cooked Kambu per day.<br />
                            - Children: 1/4 to 1/2 cup of cooked Kambu per day.<br />
                        </p>
                        <p>
                            <strong>Potential Allergic Conditions:</strong><br />
                            - Food Allergy<br />
                            - Celiac Disease or Gluten Sensitivity<br />
                            - FODMAP Intolerance<br />
                            - Lectin Sensitivity
                        </p>
                    </div>
                    <img src={kambuImage} alt="Kambu" className="k-image" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Kambu;