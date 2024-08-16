import React, { useRef } from 'react';
import { nutritionalData } from './nutritionalData';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Header from './Header';
import './NutritionalChart.css'; 
import Footer from './Footer';

const NutritionalChart = () => {
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

export default NutritionalChart;
