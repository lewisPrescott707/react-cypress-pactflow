import logo from './cake.svg';
import './App.css';
import React from "react";
import { getCakeIngredients } from './api/ingredients.api';

function App() {
  const [ingredients, setIngredients] = React.useState(null);

  React.useEffect(() => {

  }, []);

  const getIngredients = (e) => {
    e.preventDefault()

    getCakeIngredients({ url: process.env.REACT_APP_API_URL, port: 5000 })
    .then((response) => {
        setIngredients(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ height: '100px', weight: '100px' }} />
        <p>
          Chocolate Cake
        </p>
        <button onClick={(e) => getIngredients(e)} type='button'>Show ingredients</button>
        <ul>
          {ingredients && ingredients.map(item => (
            <li key={item} data-cy={item}>{item}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
