import logo from './cake.svg';
import './App.css';
import axios from "axios";
import React from "react";

const CAKE_URL = "/ingredients/chocolate";



function App() {
  const [ingredients, setIngredients] = React.useState(null);

  React.useEffect(() => {

  }, []);

  const getIngredients = (e) => {
    e.preventDefault()

    axios.get(`${process.env.REACT_APP_API_URL}${CAKE_URL}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/json'
      }
    })
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
