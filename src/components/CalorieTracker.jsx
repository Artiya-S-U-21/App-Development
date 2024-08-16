import React, { useState } from 'react';

const CaloricTracker = () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');

  const addMeal = () => {
    setMeals([...meals, { name: mealName, calories: parseInt(calories) }]);
    setMealName('');
    setCalories('');
  };

  const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);

  return (
    <div>
      <h2>Caloric Intake Tracker</h2>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Meal name"
      />
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
      />
      <button onClick={addMeal}>Add Meal</button>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal.name} - {meal.calories} kcal</li>
        ))}
      </ul>
      <p>Total Caloric Intake: {totalCalories} kcal</p>
    </div>
  );
};

export default CaloricTracker;
