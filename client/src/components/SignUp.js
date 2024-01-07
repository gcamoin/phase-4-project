import React, { useState } from "react";



function SignUp({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
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
          <button type="submit">Sign Up</button>
        </form>
        </div>
      );
}


export default SignUp