import React, { useState, useContext } from "react";
import {UserContext} from "/home/gcamoin/phase-4-project/client/src/components/contexts/UserContext.js"


function SignUp({}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const {setUser} = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             user_name: username,
              password,
              password_confirmation: passwordConfirmation, 
            
            }),
        }).then((r) => { 
          if(r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err)=>setErrors(err.errors))
          }

        })
        
    }
      
    
      return (
        <div className='signup'>
            <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br></br>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input 
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <label>Confirm Password</label>
          <br></br>
          <input 
            type="text"
            placeholder="confirm password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br></br>
          <button type="submit">Sign Up</button>
          <h3 style={{color:"red"}}>{errors}</h3>
        </form>
        </div>
      );
}


export default SignUp