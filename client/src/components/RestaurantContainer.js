import React from "react"
import RestaurantCard from "/home/gcamoin/phase-4-project/client/src/components/RestaurantCard.js"

function RestaurantContainer({restaurants}) {
    const restaurantList = restaurants?.map((restaurant) => (
        <RestaurantCard 
            key={restaurant.id}
            restaurant={restaurant}
        
        />
    ));

    return (
        <div className="restaurant_list">
            {restaurantList}
        </div>
    )


}

export default RestaurantContainer;