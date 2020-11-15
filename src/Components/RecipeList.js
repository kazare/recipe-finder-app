import React from 'react';
import '../recipe.css';

// Format list of recipes
const RecipeList = ({ label, image, url, servings, calories, cookTime, ingredients, sourceLabel, sourceUrl, diets, healthLabels }) => {
    return (
        <div className="recipe">
            <img src={image} alt={label} />

            <div className="info">
                <h2 className="title">{label}</h2>
                <a className="nutriInfo" href={url} target="_blank" rel=" noreferrer noopener">Nutrition Info</a>

                <div className="cookInfo">
                    <span>Servings: {servings}</span>
                    <span>Calories: {Math.round((calories / servings))}</span>
                    <span>Time: {cookTime}</span>
                </div>

                <p className="diet">
                    {diets.map(diet => {
                        return (<span>{diet}</span>);
                    })}
                </p>

                <h3>Ingredients</h3>
                <ul className="ingredientList">
                    {//Return list elements of ingredients
                        ingredients.map(ingredient => {
                            return (<li>{ingredient}</li>);
                        })}
                </ul>

                <a href={sourceUrl} target="_blank" rel=" noreferrer noopener"><div className="btn">View on {sourceLabel}</div></a>

                <p className="health">
                    {healthLabels.map(label => {
                        return (<span>{label}</span>);
                    })}
                </p>
            </div>
        </div>
    );
}

export default RecipeList;