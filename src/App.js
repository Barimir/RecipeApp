import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  // key and ID to be ablet to use API and make requests
  const APP_ID = "11d4d12a";
  const APP_key = "9344b3961e7edb727ac3a386ac7bb622";

  //states
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("beef"); // only submits itself after clik on search button

  useEffect(() => {
    getRecipes();
  }, [query]); // [] to make this use effect run just once (when the page loads); if you add a value inside [], it will run when the value changes

  const getRecipes = async () => {
    // fetch all the data
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`
    ); // request data
    const data = await response.json(); // format data to work with it easier
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value); // this is the value of the input by the user un search bar
  };

  const getSearch = (e) => {
    e.preventDefault(); //stop page refresh
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter an ingredient..."
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-button" type="submit">
          <span>Search</span>
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        {/* map over all the objects in recipes (array) */}
      </div>
    </div>
  );
};

export default App;
