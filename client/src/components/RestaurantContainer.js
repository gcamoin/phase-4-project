import {React, useState, useEffect} from "react"
import RestaurantCard from "/home/gcamoin/phase-4-project/client/src/components/RestaurantCard.js"
import AddRestaurantForm from "/home/gcamoin/phase-4-project/client/src/components/AddRestaurantForm.js";

function RestaurantContainer({}) {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
      fetch("/restaurants")
      .then((r) => r.json())
      .then(setRestaurants)
    }, []);

    const restaurantList = restaurants?.map((restaurant) => (
        <RestaurantCard 
            key={restaurant.id}
            restaurant={restaurant}
        
        />
    ));

    function handleAddRestaurant(newRestaurant) {
        setRestaurants([...restaurants, newRestaurant])
    }

    return (
        <div className="restaurant_list">
            <AddRestaurantForm handleAddRestaurant={handleAddRestaurant}/>
            {restaurantList}
        </div>
    )


}

export default RestaurantContainer;