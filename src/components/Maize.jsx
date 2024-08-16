import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './Pro.css';
import maiImage from '/Users/artiya/Documents/app development/app1/src/assets/karnataka/maize.jpg'; 

const Maize = () => {
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
            <h3>Maize (Corn)</h3>
            <p>
                <strong>Nutritional Value:</strong><br />
                - Carbohydrates: A good source of complex carbohydrates for energy.<br />
                - Protein: Provides moderate amounts of plant-based protein.<br />
                - Dietary Fiber: Promotes healthy digestion and prevents constipation.<br />
                - Vitamins: Rich in vitamins A, B1 (thiamine), B5 (pantothenic acid), B6, and C.<br />
                - Minerals: Contains Iron, Magnesium, Phosphorus, Potassium, and Zinc.<br />
                - Antioxidants: Contains carotenoids, including lutein and zeaxanthin, which are beneficial for eye health.
            </p>
            <p>
                <strong>Benefits:</strong><br />
                - Boosts Energy<br />
                - Supports Eye Health<br />
                - Enhances Digestive Health<br />
                - Supports Weight Gain<br />
                - Promotes Heart Health<br />
                - Boosts Immunity<br />
                - Prevents Anemia
            </p>
            <p>
                <strong>Good For:</strong><br />
                - Weight Gain: High in calories and carbohydrates, making it ideal for individuals looking to gain weight.<br />
                - Digestive Health: High fiber content promotes healthy digestion and prevents constipation.<br />
                - Immune Support: High in vitamins and antioxidants that boost the immune system.<br />
                - Heart Health: Contains potassium and other nutrients that support cardiovascular health.<br />
                - Anemia Prevention: Good source of iron and vitamin B6, which help in preventing anemia.<br />
            </p>
            <p>
                <strong>Recipes:</strong><br />
                - Corn Soup<br />
                - Corn Salad<br />
                - Corn Pulao<br />
                - Corn Pulao
            </p>
            <p>
                <strong>Recommended Consumption Amount:</strong><br />
                - Adults: 1/2 to 1 cup of cooked maize per day.<br />
                - Children: 1/4 to 1/2 cup of cooked maize per day.<br />
            </p>
            <p>
                <strong>Potential Allergic Conditions:</strong><br />
                - Corn Allergy<br />
                - Digestive Issues<br />
                - Cross-Reactivity
            </p>
            
        </div>
        <img src={maiImage} alt="kambu" className="k-image" />
    </div>
    
</div>
  <Footer />
        </>
    );
};

export default Maize;
