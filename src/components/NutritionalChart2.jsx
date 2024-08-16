import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './NutritionalChart.css';
import Header from './Header';
import Footer from './Footer';
const nutritionalData = {
    Sorghum: {
        calories: "329kcal",
        protein: "11.3g",
        iron: "4.0mg",
        calcium: "30mg",
        fiber: "6.7g"
    },
    'Small Millet': {
        calories: "378kcal",
        protein: "11.2g",
        iron: "8.0mg",
        calcium: "31mg",
        fiber: "7.6g"
    },
    'Bean Sprouts': {
        calories: "31kcal",
        protein: "3.0g",
        iron: "1.0mg",
        calcium: "35mg",
        fiber: "1.2g"
    },
    'Whole Black Gram': {
        calories: "339kcal",
        protein: "25.0g",
        iron: "5.0mg",
        calcium: "287mg",
        fiber: "11.2g"
    },
    'Moong Dal': {
        calories: "347kcal",
        protein: "24.0g",
        iron: "3.9mg",
        calcium: "132mg",
        fiber: "6.0g"
    },
    'White Pea Bean': {
        calories: "350kcal",
        protein: "22.0g",
        iron: "5.0mg",
        calcium: "284mg",
        fiber: "8.0g"
    }
};

const NutritionalChart2 = () => {
    return (
        <>
            <Header />
            <div className="nutritional-chart">
                <h1>Nutritional Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Grain</th>
                            <th>Protein</th>
                            <th>Fiber</th>
                            <th>Iron</th>
                            <th>Calcium</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(nutritionalData).map(grain => (
                            <tr key={grain}>
                                <td>{grain}</td>
                                <td>{nutritionalData[grain].protein}</td>
                                <td>{nutritionalData[grain].fiber}</td>
                                <td>{nutritionalData[grain].iron}</td>
                                <td>{nutritionalData[grain].calcium}</td>
                                <td>{nutritionalData[grain].calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default NutritionalChart2;
