import {React, useState} from "react"

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
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
      </form>
    );
  }

  export default Login;