import React, { useState } from 'react';
import './ProteinCalculator.css';  // Make sure you create this CSS file
import Header from './Header';
import Footer from './Footer';
const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintenance');
  const [proteinNeed, setProteinNeed] = useState(null);
  const [proteinDistribution, setProteinDistribution] = useState({
    breakfast: null,
    midMorning: null,
    lunch: null,
    afternoonSnack: null,
    dinner: null,
  });

  const calculateProtein = () => {
    let protein = 0;
    switch (activityLevel) {
      case 'sedentary':
        protein = weight * 0.8;
        break;
      case 'active':
        protein = weight * 1.2;
        break;
      case 'athlete':
        protein = weight * 1.5;
        break;
      default:
        protein = weight * 0.8;
    }
    if (goal === 'weight loss') {
      protein *= 1.1;
    } else if (goal === 'weight gain') {
      protein *= 1.2;
    }

    const totalProtein = protein.toFixed(2);
    setProteinNeed(totalProtein);

    // Distributing protein into five meals
    const breakfastProtein = (totalProtein * 0.20).toFixed(2);
    const midMorningProtein = (totalProtein * 0.15).toFixed(2);
    const lunchProtein = (totalProtein * 0.25).toFixed(2);
    const afternoonSnackProtein = (totalProtein * 0.15).toFixed(2);
    const dinnerProtein = (totalProtein * 0.25).toFixed(2);

    setProteinDistribution({
      breakfast: breakfastProtein,
      midMorning: midMorningProtein,
      lunch: lunchProtein,
      afternoonSnack: afternoonSnackProtein,
      dinner: dinnerProtein,
    });
  };

  return (
    <><Header /><div className="protein-calculator">
      <h2>Protein Calculator</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Enter your weight in kg"
        className="input-field" />
      <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="select-field">
        <option value="sedentary">Sedentary</option>
        <option value="active">Active</option>
        <option value="athlete">Athlete</option>
      </select>
      <select value={goal} onChange={(e) => setGoal(e.target.value)} className="select-field">
        <option value="maintenance">Maintenance</option>
        <option value="weight loss">Weight Loss</option>
        <option value="weight gain">Weight Gain</option>
      </select>
      <button onClick={calculateProtein} className="calc-bt">Calculate</button>
      {proteinNeed && (
        <div className="protein-results">
          <p>Your daily protein requirement is {proteinNeed} grams.</p>
          <div className="meal-distribution">
            <p>Breakfast: {proteinDistribution.breakfast} grams</p>
            <p>Mid-Morning Snack: {proteinDistribution.midMorning} grams</p>
            <p>Lunch: {proteinDistribution.lunch} grams</p>
            <p>Afternoon Snack: {proteinDistribution.afternoonSnack} grams</p>
            <p>Dinner: {proteinDistribution.dinner} grams</p>
          </div>
        </div>
      )}
    </div><Footer /></>
  );
};

export default ProteinCalculator;
