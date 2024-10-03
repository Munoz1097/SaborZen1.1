import { useState } from "react";
import Header from "./components/Header";
import RecipeSearch from "./components/RecipeSearch";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const addRecipe = (name, category, time, difficulty, description) => {
    const newRecipe = {
      id: Date.now(),
      name,
      category,
      time,
      difficulty,
      description,
      createdAt: new Date(),
    };
    setRecipes([...recipes, newRecipe]);
    console.log(recipes)
  };

  const editRecipe = (index, newName, newCategory, newTime, newDifficulty, newDescription) => {
    console.log(index)
    /*const updatedRecipes = recipes.map((recipe, idx) => {
      if (idx === index) {
        return {
          ...recipe,
          name: newName,
          category: newCategory,
          time: newTime,
          difficulty: newDifficulty,
          description: newDescription,
        };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
    */
    setRecipes(prevRecipes => 
      prevRecipes.map(item => 
        item.id == index ? {
          ...item,
          name: newName,
          category: newCategory,
          time: newTime,
          difficulty: newDifficulty,
          description: newDescription,
        } : item
      )
    );
    console.log(recipes)
  };

  const removeRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, idx) => idx !== index);
    setRecipes(updatedRecipes);
  };

  const [filterCategory, setFilterCategory] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState(''); // También define el estado para dificultad si es necesario
  

const filteredRecipes = recipes.filter((recipe) => {
  const name = typeof recipe.name === 'string' ? recipe.name.toLowerCase() : ''; // Asegúrate de que name sea una cadena
  const matchesSearch = name.includes(searchQuery.toLowerCase());
  
  const matchesCategory = filterCategory === '' || recipe.category === filterCategory;
  const matchesDifficulty = filterDifficulty === '' || recipe.difficulty === filterDifficulty;

  return matchesSearch && matchesCategory && matchesDifficulty;
});


  return (
    <div className="app-container">
      <Header />
            {recipes.length > 1 && (
        <>
          <RecipeSearch setSearchQuery={setSearchQuery} />
        </>
      )}
    
      <RecipeForm addRecipe={addRecipe} />
  +/    <RecipeList recipes={filteredRecipes} removeRecipe={removeRecipe} editRecipe={editRecipe} />
    </div>
  );
 


}

export default App
