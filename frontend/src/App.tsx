import './App.css';
import {useState, useEffect, FormEvent, useRef} from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("burgers");
  const [recipes, setRecipes] = useState([])

return(
  <div>Hello from Recipe App</div>
)
}


export default App
