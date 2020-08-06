import React from "react";
import style from "./recipe.module.css"; // import ccs module

const Recipe = ({ title, calories, image, ingredients }) => {
  // title, calories, image are being taken from the state and passed down to the recipe component
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
