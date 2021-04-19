import axios from 'axios';
import React,{createContext,useState,useEffect} from 'react';

//Crear el context

export const CategoriasContext = createContext();
//Siempre que creamos un context debemos crear un provider
// que es de donde saldran los datos(state) y funciones
const CategoriasProvider = (props) => {
//creamos el state del context
const [categorias,guardarCategorias] = useState([]);
useEffect(() => {
const categorias = async()=>{
const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const resultado = await axios.get(url);
guardarCategorias(resultado.data.drinks);
}
categorias();

}, [])

return(
    <CategoriasContext.Provider
    value={{ 
        categorias
     }}
    >
        {props.children}
    </CategoriasContext.Provider>
)
}

export default CategoriasProvider;