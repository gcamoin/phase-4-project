import {useEffect, useState} from "react"

function Profile({user}) {
    
      return (
        <div className="my-restaurants">
            <h2 style={{font: "fantasy"}}>My Restaurants</h2>
            {user.restaurants?.map((myRestaurant) => (
                <li>{myRestaurant.name}</li>
            ))}
        </div>
      )

}

export default Profile;