import React from 'react';
import './NutritionalChart.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
const nutritionalData = {
    Jowar: {
        Protein: "10.6g",
        Fiber: "6.7g",
        Iron: "8.0mg",
        Calcium: "55mg",
        Calories: "329kcal",
    },
    Bajra: {
        Protein: "11.6g",
        Fiber: "8.0g",
        Iron: "8.0mg",
        Calcium: "42mg",
        Calories: "378kcal",
    },
    Maize: {
        Protein: "9.4g",
        Fiber: "7.3g",
        Iron: "2.7mg",
        Calcium: "7mg",
        Calories: "365kcal",
    },
    Sesame: {
        Protein: "18.7g",
        Fiber: "9.0g",
        Iron: "14.6mg",
        Calcium: "780mg",
        Calories: "573kcal",
    },
    GreenGram: {
        Protein: "24.0g",
        Fiber: "8.0g",
        Iron: "1.8mg",
        Calcium: "35mg",
        Calories: "347kcal",
    },
    Peanut: {
        Protein: "25.0g",
        Fiber: "8.0g",
        Iron: "4.6mg",
        Calcium: "92mg",
        Calories: "567kcal",
    }
};

const NutritionalChart3 = () => {
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
                                <td>{nutritionalData[grain].Protein}</td>
                                <td>{nutritionalData[grain].Fiber}</td>
                                <td>{nutritionalData[grain].Iron}</td>
                                <td>{nutritionalData[grain].Calcium}</td>
                                <td>{nutritionalData[grain].Calories}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default NutritionalChart3;
