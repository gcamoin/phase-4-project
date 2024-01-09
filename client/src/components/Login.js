import {React, useState} from "react"


function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
  
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
            r.json().then((user) => onLogin(user));
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