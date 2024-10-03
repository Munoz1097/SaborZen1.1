import RecipeItem from './RecipeItem';
import './RecipeList.css';

function RecipeList({ recipes, editRecipe, removeRecipe }) {
    return (
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeItem
            key={index}
            recipe={recipe}
            index={index}
            editRecipe={editRecipe}
            removeRecipe={removeRecipe}
          />
        ))}
      </ul>
    );
  }
  
  export default RecipeList;