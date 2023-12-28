import React, {useEffect, useState} from "react"
import Header from "/home/gcamoin/phase-4-project/client/src/components/Header.js"
import RestaurantContainer from "/home/gcamoin/phase-4-project/client/src/components/RestaurantContainer.js"

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
      <RestaurantContainer restaurants={restaurants} />
      
    </div>
  );
}

export default App;
