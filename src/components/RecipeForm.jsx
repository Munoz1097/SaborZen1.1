import { useState } from "react";
import "./RecipeForm.css"
function RecipeForm(addRecipe){
    const [newRecipe,setNewRecipe] = useState("")
    const [category,setCategory] = useState("")
    const [dificult,setDificult] = useState("")
    const [time,setTime] = useState("")
    const [description,setDescription] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Agreganto Receta")
        console.log("Receta :", newRecipe)
        console.log("Categoria :", category)
        console.log("fecha :", time)
        console.log("Dificultad :", dificult)
        console.log("Descripcion :", description)
        addTask({create: new Recipe(),
                    name: newRecipe,
                    category: category,
                    time:time,
                    dificult:dificult,
                    description:description,

                    
        })

        console.log(addRecipe)
    
    }
    return(
        <form className="recipe-form" onSubmit={(e) => handleSubmit(e)}>

        <input 
            className="InputFrame"
            type="text"
            placeholder='Agregar receta'
            value= {newRecipe}
            onChange={(e)=>setNewRecipe(e.target.value)} />
        <input 
            className="InputFrame" 
            type="number"
            placeholder='Duracion en minutos'
            value={time} 
            onChange={(e)=>setTime(e.target.value)}/>
        <select className="CreateRecipe-select" value={dificult} onChange={(e)=>setDificult(e.target.value)}>
            <option value="">Dificultad</option>
            <option value="Facil">Facil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
        </select>
        <select className="CreateRecipe-select" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">categoria</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
            <option value="Postres">Postres</option>
            <option value="Vegetariana">Vegetariana</option>
            <option value="Bebidas">Bebidas</option>
        </select>
        <input 
            className="InputFrame" 
            type="text"
            placeholder='Descripción...' 
            value={description}
            onChange={setDescription}/>
        <button className="AddRecipe">Agregar</button>
        </form>

    
    )
}
export default RecipeForm;