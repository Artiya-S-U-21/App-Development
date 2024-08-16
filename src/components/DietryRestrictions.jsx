import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DietryRestrictions.css'; 
import Header from './Header';
import Footer from './Footer';

const DietaryRestrictions = () => {
  const [goal, setGoal] = useState('');
  const [condition, setCondition] = useState('');

  const grains = [
    { name: 'Kambu', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/tamilnadu/kambu.jpg', path: '/kambu' },
    { name: 'Ragi', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/tamilnadu/ragi.jpg', path: '/ragi' },
    { name: 'Varagu', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: false, image: 'assets/tamilnadu/varagu.jpg', path: '/varagu' },
    { name: 'Saamai', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/tamilnadu/saamai.jpg', path: '/saamai' },
    { name: 'Kuthiraivali', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/tamilnadu/kuthiraivali.jpg', path: '/kuthiraivali' },
    { name: 'Thenai', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/tamilnadu/thenai.jpg', path: '/thenai' },
    { name: 'Sorghum', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/sorghum 9.58.42 AM.jpg', path: '/sorghum' },
    { name: 'Chama', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/chama.jpg', path: '/chama' },
    { name: 'Bean Sprouts', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/bean 9.58.42 AM.jpg', path: '/bean' },
    { name: 'Whole Black Gram', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/blackgram.jpg', path: '/blackgram' },
    { name: 'Moong', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/moong.jpg', path: '/moon' },
    { name: 'White Pea Bean', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/kerala/whitepea.jpg', path: '/whitepea' },
    { name: 'Jowar', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/karnataka/jowar.jpg', path: '/jowar' },
    { name: 'Bajra', weightLoss: true, weightGain: false, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/karnataka/bajra.jpg', path: '/bajra' },
    { name: 'Maize', weightLoss: true, weightGain: true, maintenance: true, diabetes: false, heartHealth: false, image: 'assets/karnataka/maize.jpg', path: '/maize' },
    { name: 'Green Gram', weightLoss: true, weightGain: true, maintenance: true, diabetes: true, heartHealth: true, image: 'assets/karnataka/greengram.jpg', path: '/greengram' },
    { name: 'Peanuts', weightLoss: false, weightGain: true, maintenance: true, diabetes: false, heartHealth: false, image: 'assets/karnataka/peanuts.jpg', path: '/peanuts' },
    { name: 'Sesame', weightLoss: false, weightGain: true, maintenance: true, diabetes: false, heartHealth: true, image: 'assets/karnataka/sesame.jpg', path: '/sesame' },
  ];

  const filteredGrains = grains.filter(grain =>
    ((goal === 'weightLoss' && grain.weightLoss) ||
    (goal === 'weightGain' && grain.weightGain) ||
    (goal === 'maintenance' && grain.maintenance) ||
    goal === '') &&
    ((condition === 'diabetes' && grain.diabetes) ||
    (condition === 'heartHealth' && grain.heartHealth) ||
    condition === '')
  );

  return (
    <>
      <Header />
      <div className="dietary-restrictions">
        <h2>Grains for Different Goals</h2>
        <select className="goal-select" value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="">All Goals</option>
          <option value="weightLoss">Weight Loss</option>
          <option value="weightGain">Weight Gain</option>
          <option value="maintenance">Maintenance</option>
        </select>
        <select className="condition-select" value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="">No Conditions</option>
          <option value="diabetes">Diabetes</option>
          <option value="heartHealth">Heart Health</option>
        </select>
        <div className="grain-cards">
          {filteredGrains.map((grain, index) => (
            <div key={index} className="grain-card">
              <Link to={grain.path} className="grain-button">
                {grain.name}
                <img src={grain.image} alt={grain.name} className="grain-image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DietaryRestrictions;
