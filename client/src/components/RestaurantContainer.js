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
            handleAddReview={handleAddReview}
        
        />
    ));

    function handleAddRestaurant(newRestaurant) {
        setRestaurants([...restaurants, newRestaurant])
    }

    function handleAddReview(reviewToAdd) {
        console.log(reviewToAdd)
        const addedReview = restaurants.map((restaurant) => {
            if(restaurant.id === reviewToAdd.restaurant_id) {
            const updatedReviews = [...restaurant.reviews, reviewToAdd]
            const updatedRestaurant = {...restaurant, reviews:updatedReviews}
            return updatedRestaurant
            } else {
                return restaurant
            }
        })

        setRestaurants(addedReview)

    }

    return (
        <div className="restaurant_list">
            <AddRestaurantForm handleAddRestaurant={handleAddRestaurant}/>
            {restaurantList}
        </div>
    )


}

export default RestaurantContainer;