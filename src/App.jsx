import { useState } from "react"
import Header from "./components/Header"
import RecipeSearch from "./components/RecipeSearch"
import RecipeItem from "./components/RecipeItem"
import RecipeForm from "./components/RecipeForm"
function App() {
  const [Recipe, setNewRecipe]= useState([]);
  const [SearchQuery, setSearchQuery] = useState("");
  const addRecipe= (newRecipe) => {
    setNewRecipe([...Recipe, Recipe])
  }

  return(
    <>
    <Header/>
    <RecipeSearch setSearchQuery={setSearchQuery}/>
    <RecipeForm/>
    <RecipeItem/>

    </>

  )
}

export default App
