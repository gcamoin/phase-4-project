import React from "react"

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
    <wrapper>
        <nav>
            <button onClick={handleLogoutClick}>
                Logout
            </button>
        </nav>
    </wrapper>
    )
}
  

export default NavBar