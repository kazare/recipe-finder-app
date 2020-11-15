import React, { useEffect, useState } from 'react';
import RecipeList from './Components/RecipeList';
//import Search from './Components/search';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  /*
  fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "382628e006msh445d2150702f661p16b8a1jsn50b0984d8709",
          "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
        }
      })
  */


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch("./Chicken.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetching data...");
        setRecipes(data.hits);

        console.log(data);

      },
        (error) => {
          console.log("Err: " + error.message);
        })
  };


  return (
    <div className="main">
      <header className="header">
        <h1>Recipe Finder</h1>
        <form>
          <input type="text" />
          <button>Search</button>
        </form>
      </header>
      <div className="recipeList">
        {recipes.map((recipe, index) => {
          return (

            <RecipeList
              key={recipe.recipe.uri}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              url={recipe.recipe.shareAs}
              servings={recipe.recipe.yield}
              calories={recipe.recipe.calories}
              cookTime={recipe.recipe.totalTime}
              ingredients={recipe.recipe.ingredientLines}
              sourceLabel={recipe.recipe.source}
              sourceUrl={recipe.recipe.url}
              diets={recipe.recipe.dietLabels}
              healthLabels={recipe.recipe.healthLabels}
            />
          );
        })}
      </div>
      <footer>
        <div id="edamam-badge" data-color="white"></div>
      </footer>
    </div>
  );
}

export default App;