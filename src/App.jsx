import { useState } from "react"
import Header from "./components/Header"
import RecipeSearch from "./components/RecipeSearch"
import RecipeItem from "./components/RecipeItem"
import RecipeForm from "./components/RecipeForm"
function App() {
  const Recipe =[
    { name: "Hambuerger",category:"Lunch", time:40, dificult:"Easy",description:"Delicious Hamburger"}

  ];
  const [SearchQuery, setSearchQuery] = useState("");
  const addRecipe = (Recipe) => {
    Recipe.push(Recipe)
  }

  return(
    <>
    <Header/>
    <RecipeSearch setSearchQuery={setSearchQuery}/>
    <RecipeForm addRecipe={addRecipe}/>
    <RecipeItem/>

    </>

  )
}

export default App
