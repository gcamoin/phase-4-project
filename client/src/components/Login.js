import {React, useState, useContext} from "react"
import {UserContext} from "/home/gcamoin/phase-4-project/client/src/components/contexts/UserContext.js"


function Login({ }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const {setUser} = useContext(UserContext)
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => { 
          if(r.ok) {
            r.json().then((user) => setUser(user));
          } else {
            r.json().then((err)=>setErrors(err.errors))
          }

        })
        
    }
  
    return (
      <div className="login">
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <br></br>
        <h3 style={{color: "red"}}>{errors}</h3>
      </form>
      </div>
    );
  }

  export default Login;