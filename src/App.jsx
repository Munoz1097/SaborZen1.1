import { useState } from "react";
import Header from "./components/Header";
import RecipeSearch from "./components/RecipeSearch";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  /*const [filterCategory, setFilterCategory] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('');*/
  /*const Recipe =[
    { name: "Hambuerger",category:"Lunch", time:40, dificult:"Easy",description:"Delicious Hamburger"}

  ];
  const [SearchQuery, setSearchQuery] = useState("");
  const addRecipe = (Recipe) => {
    Recipe.push(Recipe)
  }*/

  const addRecipe = (name, category, time, difficulty, description) => {
    const newRecipe = {
      name,
      category,
      time,
      difficulty,
      description,
      createdAt: new Date(),
    };
    setRecipes([...recipes, newRecipe]);
  };

  const editRecipe = (index, newName, newCategory, newTime, newDifficulty, newDescription) => {
    const updatedRecipes = recipes.map((recipe, idx) => {
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
  };

  const removeRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, idx) => idx !== index);
    setRecipes(updatedRecipes);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
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
      <RecipeList recipes={filteredRecipes} removeRecipe={removeRecipe} editRecipe={editRecipe} />
    </div>
  );

/*
  return(
    <>
    <Header/>
    <RecipeSearch setSearchQuery={setSearchQuery}/>
    <RecipeForm addRecipe={addRecipe}/>
    <RecipeItem/>

    </>

  )*/
}

export default App
