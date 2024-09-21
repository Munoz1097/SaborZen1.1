import RecipeItem from './RecipeItem';
import './RecipeList.css';

function RecipeList({ recipes, toggleRecipeCompletion, removeRecipe }) {
    return (
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeItem
            key={index}
            recipe={recipe}
            index={index}
            toggleRecipeCompletion={toggleRecipeCompletion}
            removeRecipe={removeRecipe}
          />
        ))}
      </ul>
    );
  }
  
  export default RecipeList;