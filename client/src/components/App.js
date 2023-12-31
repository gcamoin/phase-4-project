import React, {useEffect, useState} from "react"
import Header from "/home/gcamoin/phase-4-project/client/src/components/Header.js"
import RestaurantContainer from "/home/gcamoin/phase-4-project/client/src/components/RestaurantContainer.js"
import Login from "/home/gcamoin/phase-4-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-4-project/client/src/components/SignUp.js"
import NavBar from "/home/gcamoin/phase-4-project/client/src/components/NavBar.js"


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <div className="logged-in page"><Header/><NavBar user={user} setUser={setUser}/><RestaurantContainer/></div>;
  } else {
    return <div className="login-page"><Header/><Login onLogin={setUser} /> <br></br> <SignUp onLogin={setUser}/></div>;
  }

  // const [restaurants, setRestaurants] = useState([])

  //   useEffect(() => {
  //     fetch("http://localhost:3000/restaurants")
  //     .then((r) => r.json())
  //     .then(setRestaurants)
  //   }, []);

  return (
    <div className="App">
      <Header/>
      <Login/>
      
      
      {/* <RestaurantContainer restaurants={restaurants} /> */}
      
    </div>
  );
}

export default App;
