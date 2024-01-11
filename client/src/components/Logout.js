import React from "react"


function Logout({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
    <div className="logout">
        
      <button onClick={handleLogoutClick}>
        Logout
      </button>
        
    </div>
    )
}
  

export default Logout;