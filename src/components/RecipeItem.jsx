import { useState } from 'react';
import './RecipeItem.css';

function RecipeItem({ recipe}) {
    const [newName, setNewName] = useState(recipe.name);
    const [newCategory, setNewCategory] = useState(recipe.category);
    const [newTime, setNewTime] = useState(recipe.time);
    const [newDifficulty, setNewDifficulty] = useState(recipe.difficulty);
    const [newDescription, setNewDescription] = useState(recipe.description);
  
    /*const handleEdit = () => {
      if (isEditing) {
        editRecipe(index, newName, newCategory, newTime, newDifficulty, newDescription);
      }
      setIsEditing(!isEditing);
    };*/
  
    return (
      <li className="recipe-item">
        {isEditing ? (
          <div className="edit-form">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nombre de la receta"
            />
            <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
              <option value="Desayuno">Desayuno</option>
              <option value="Almuerzo">Almuerzo</option>
              <option value="Cena">Cena</option>
              <option value="Postres">Postres</option>
              <option value="Vegetariana">Vegetariana</option>
              <option value="Bebidas">Bebidas</option>
            </select>
            <input
              type="number"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              placeholder="Tiempo en minutos"
            />
            <select value={newDifficulty} onChange={(e) => setNewDifficulty(e.target.value)}>
              <option value="Facil">Fácil</option>
              <option value="Medio">Medio</option>
              <option value="Dificil">Difícil</option>
            </select>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Descripción..."
            />
          </div>
        ) : (
          <>
            <h3>{recipe.name}</h3>
            <div className="recipe-info">
              <small>Categoría: {recipe.category}</small>
              <small>Tiempo: {recipe.time} minutos</small>
              <small>Dificultad: {recipe.difficulty}</small>
              <p>Descripción: {recipe.description}</p>
            </div>
          </>
        )}
      </li>
    );
  }
  
  export default RecipeItem;

/*
function RecipeItem({Recipe}){
    const handelEdit = ()=>{}
    const removeRecipe = ()=>{}
    return(
        <div>
            <small>{Recipe}</small>
        </div>
    )
}
export default RecipeItem;*/