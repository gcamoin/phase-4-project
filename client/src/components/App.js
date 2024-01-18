import React, {useEffect, useState, useContext} from "react"
import Header from "/home/gcamoin/phase-4-project/client/src/components/Header.js"
import RestaurantContainer from "/home/gcamoin/phase-4-project/client/src/components/RestaurantContainer.js"
import Login from "/home/gcamoin/phase-4-project/client/src/components/Login.js"
import SignUp from "/home/gcamoin/phase-4-project/client/src/components/SignUp.js"
import Logout from "/home/gcamoin/phase-4-project/client/src/components/Logout.js"
import { Routes, Route } from "react-router-dom";
import NavBar from "/home/gcamoin/phase-4-project/client/src/components/NavBar.js"
import About from "/home/gcamoin/phase-4-project/client/src/components/About.js"
import Contact from "/home/gcamoin/phase-4-project/client/src/components/Contact.js"
import { UserContext } from "/home/gcamoin/phase-4-project/client/src/components/contexts/UserContext.js"



function App() {
  const {user, setUser} = useContext(UserContext)
 
if (user) {
    return ( 
    <div className="logged-in page">
      <Header/>
      <NavBar/>
      <Logout user={user} setUser={setUser}/>
      <Routes>
       <Route path="/about" element={<About/>} /> 
       <Route path="/contact" element={<Contact />} />
       <Route path="/" element={<RestaurantContainer/>} />
      </Routes>
      
    </div>
    )
  } else {
    return (
     <div className="login-page">
      <Header/>
      <Login onLogin={setUser} /> 
      <br></br> 
      <SignUp onLogin={setUser}/>
      </div>
    )
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
