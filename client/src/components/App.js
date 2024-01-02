import React, {useEffect, useState} from "react"
import Header from "/home/gcamoin/phase-4-project/client/src/components/Header.js"
import RestaurantContainer from "/home/gcamoin/phase-4-project/client/src/components/RestaurantContainer.js"
import About from "/home/gcamoin/phase-4-project/client/src/components/About.js"
import NavBar from "/home/gcamoin/phase-4-project/client/src/components/NavBar.js"
import {Route, Routes} from "react-router-dom"

function App() {

  const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
    }, []);

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      
      <RestaurantContainer restaurants={restaurants} />
      
    </div>
  );
}

export default App;
