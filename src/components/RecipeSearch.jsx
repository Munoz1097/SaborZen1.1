//Componente para la barra de busqueda de las recetas en tiempo real...

import { useState, useEffect } from "react"; 
import './RecipeSearch.css';

function RecipeSearch ({ setSearchQuery }) {
  //Se definen dos estados con useState: query y debouncedQuery.
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
    
  // Se implementa el debounce para optimizar las búsquedas en tiempo real.
  // El primer useEffect: se encarga de implementar el debounce.
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Espera de 300ms antes de actualizar la búsqueda.

    // El return es una función de limpieza que se ejecuta antes de que el efecto se vuelva a ejecutar.
    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Se actualiza el estado de búsqueda al cambiar el query.
  // El segundo useEffect: se encarga de actualizar la búsqueda cuando debouncedQuery cambie.
  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  // El return devuelve los resultados de la busqueda.
  return (
    <div className="recipe-search">
      <input
      className="SearchFrame"
        type="text"
        placeholder="Buscar recetas..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
  
export default RecipeSearch;