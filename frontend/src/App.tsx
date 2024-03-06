import './App.css';
import {useState, useEffect, FormEvent, useRef} from 'react';
import * as api from './api';
const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("burgers");
  const [recipes, setRecipes] = useState([])

  const handleSearchSubmit = async () => {
    try {
     const recipes = await api.searchRecipes(searchTerm, 1);
     setRecipes(recipes);
    } catch (error) {
      console.log(error)
    }
  }
return(
  <div>Hello from Recipe App</div>
)
}


export default App
