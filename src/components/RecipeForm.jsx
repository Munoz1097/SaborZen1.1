import { useState } from "react"; 
import "./RecipeForm.css";

function RecipeForm({ addRecipe }) {
    // Estados para cada campo del formulario
    const [newRecipe, setNewRecipe] = useState(""); // Estado para el nombre de la receta
    const [category, setCategory] = useState(""); // Estado para la categoría de la receta
    const [difficulty, setDificult] = useState(""); // Estado para la dificultad
    const [time, setTime] = useState(""); // Estado para el tiempo de duración
    const [description, setDescription] = useState(""); // Estado para la descripción

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        console.log("Agregando Receta");
        console.log("Receta:", newRecipe);
        console.log("Categoría:", category);
        console.log("Duración:", time);
        console.log("Dificultad:", difficulty);
        console.log("Descripción:", description);

        // Llamada a la función 'addRecipe' que se pasa como prop
        addRecipe(
            newRecipe,
            category,
            time,
            difficulty,
            description,
        );

        // Limpia los campos del formulario después de agregar la receta
        setNewRecipe("");
        setCategory("");
        setDificult("");
        setTime("");
        setDescription("");
    };

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>
            {/* Campo para agregar el nombre de la receta */}
            <input 
                className="InputFrame"
                type="text"
                placeholder='Agregar receta'
                value={newRecipe}
                onChange={(e) => setNewRecipe(e.target.value)} 
            />

            {/* Campo para agregar el tiempo de preparación */}
            <input 
                className="InputFrame" 
                type="number"
                placeholder='Duración en minutos'
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
            />

            {/* Selección de dificultad */}
            <select 
                className="CreateRecipe-select" 
                value={difficulty} 
                onChange={(e) => setDificult(e.target.value)}
            >
                <option value="">Dificultad</option>
                <option value="Fácil">Fácil</option>
                <option value="Medio">Media</option>
                <option value="Difícil">Difícil</option>
            </select>

            {/* Selección de categoría */}
            <select 
                className="CreateRecipe-select" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Categoría</option>
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Cena">Cena</option>
                <option value="Postres">Postres</option>
                <option value="Vegetariana">Vegetariana</option>
                <option value="Bebidas">Bebidas</option>
            </select>

            {/* Campo para agregar la descripción */}
            <input 
                className="InputFrame" 
                type="text"
                placeholder='Descripción...' 
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />

            {/* Botón para agregar la receta */}
            <button className="AddRecipe">Agregar</button>
        </form>
    );
}

export default RecipeForm;
/*
import { useState } from "react";
import "./RecipeForm.css";

function RecipeForm({addRecipe}){
    const [newRecipe, setNewRecipe] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDificult] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Agregando Receta")
        console.log("Receta :", newRecipe)
        console.log("Categoria :", category)
        console.log("fecha :", time)
        console.log("Dificultad :", difficulty)
        console.log("Descripcion :", description)
        addRecipe({create: new Recipe(),
                    name: newRecipe,
                    category: category,
                    time:time,
                    difficulty:difficulty,
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
        <select className="CreateRecipe-select" value={difficulty} onChange={(e)=>setDificult(e.target.value)}>
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
*/