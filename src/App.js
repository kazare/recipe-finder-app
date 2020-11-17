import React, { useEffect, useState } from 'react';
import RecipeList from './recipeList';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [error, setError] = useState(' ');
  const [errorDiv, setErrorDiv] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  // Fetch recipes from API
  const getRecipes = () => {
    fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": `${API_KEY}`,
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // If recipes are found set to state
        console.log("Fetching data...");
        setRecipes(data.hits);
        hideErrorDiv();
      },
        (errmsg) => {
          showErrorDiv(errmsg);
        })
  };

  const showErrorDiv = (msg) => {
    // If error encountered print to console
    // Show a message to user
    // Reset recipe field
    console.log(`Error: ${msg.message}`);
    setError(`${query}" not found! Please try again.`);
    setRecipes([]);
    setErrorDiv(true);
  }

  const hideErrorDiv = () => {
    // Remove warning
    setError('');
    setErrorDiv(false);
  };

  // Only update when query changes
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Get value of search and set it to state
  const updateSearch = ({ target }) => {
    setSearch(target.value);
  };

  // Prevent page from refreshing
  // Set query to search value
  // Clear search bar
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  // Error message component
  const Err = () => {
    return (
      /* Error message container */
      <div className="errormsg">{error}</div>
    );
  };

  return (
    <div className="main">
      {/* beginning of header */}
      <header className="header">
        <h1>Recipe Finder</h1>
        <form onSubmit={getSearch}>
          <input type="text" value={search} onChange={updateSearch} />
          <button type="submit">Search</button>
        </form>
      </header>
      <div className="recipeList">
        {/* If true show error div */}
        {errorDiv ? <Err /> : null}

        {/*Retrieve appropiate values to labels and pass to component*/}
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
      {/* Attribution link */}
      <footer>
        <div id="edamam-badge" data-color="white"></div>
      </footer>
    </div>
  );
}

export default App;