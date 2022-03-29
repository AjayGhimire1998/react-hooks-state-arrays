import React from "react";
import { useState } from "react/cjs/react.development";
import { spicyFoods, getNewSpicyFood } from "../data/index";

function SpicyFoodList() {
  const [foods, setFoods]  = useState(spicyFoods);


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArr = [...foods, newFood];
    setFoods(newFoodArr)
  }
  function handleLiClick(id) {
    // const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray);

    const newFoodArray = foods.map((food) => {
      if( food.id === id){
        return{
          ...food,
          heatLevel: food.heatLevel +1
        }
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
