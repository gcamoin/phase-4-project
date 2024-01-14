import {React, useState, useEffect} from "react"
import RestaurantCard from "/home/gcamoin/phase-4-project/client/src/components/RestaurantCard.js"
import AddRestaurantForm from "/home/gcamoin/phase-4-project/client/src/components/AddRestaurantForm.js";

function RestaurantContainer({}) {
    const [restaurants, setRestaurants] = useState([])
console.log(restaurants)
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
            // handleUpdateReview={handleUpdateReview}
            handleDeleteReview={handleDeleteReview}
        
        />
    ));

    function handleAddRestaurant(newRestaurant) {
        setRestaurants([...restaurants, newRestaurant])
    }

    function handleAddReview(reviewToAdd) {
        console.log(reviewToAdd)
        const updatedRestaurants = restaurants.map((restaurant) => {
            if(restaurant.id === reviewToAdd.restaurant_id) {
            const updatedReviews = [...restaurant.reviews, reviewToAdd]
            const updatedRestaurant = {...restaurant, reviews:updatedReviews}
            return updatedRestaurant
            } else {
                return restaurant
            }
        })
        console.log(updatedRestaurants)
        setRestaurants(updatedRestaurants)
        

    }

    // function handleUpdateReview(reviewToUpdate) {
    //     const updatedReviewArray = restaurants.map((restaurant) => {
    //        if() {
    //       const updatedReviews = restaurant.reviews.map((review) => {
    //         if(restaurant.id === reviewToUpdate.restaurant_id) {
    //           return reviewToUpdate
    //         } else {
    //           return review
    //         }
    //       })
    //       const updatedRestaurant = {...restaurant, reviews:updatedReviews}
    //     return updatedRestaurant
          
    //     } else {
    //       return restaurant
    //     }}
          
    //   )
    //     setRestaurants(updatedReviewArray)
    //   }

    function handleDeleteReview(reviewToDelete) {

        const updatedRestaurants = restaurants.map((restaurant) => {
            if(restaurant.id === reviewToDelete.restaurant_id) {
                const updatedReviews = restaurant.reviews.filter((review) => reviewToDelete.id !== review.id)
                const updatedRestaurant = {...restaurant, reviews:updatedReviews}
                return updatedRestaurant

            } else {
                return restaurant
            }
        })

        setRestaurants(updatedRestaurants)
        
    }


    return (
        <div className="restaurant_list">
            <AddRestaurantForm handleAddRestaurant={handleAddRestaurant}/>
            {restaurantList}
        </div>
    )


}

export default RestaurantContainer;