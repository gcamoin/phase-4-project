import {React, useState, useEffect, useContext} from "react"
import RestaurantCard from "/home/gcamoin/phase-4-project/client/src/components/RestaurantCard.js"
import AddRestaurantForm from "/home/gcamoin/phase-4-project/client/src/components/AddRestaurantForm.js";
import {UserContext} from "/home/gcamoin/phase-4-project/client/src/components/contexts/UserContext.js"


function RestaurantContainer({}) {
    const [restaurants, setRestaurants] = useState([])
    const {setUser, user} = useContext(UserContext)

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
            handleUpdateReview={handleUpdateReview}
            handleDeleteReview={handleDeleteReview}
        
        />
    ));

    function handleAddRestaurant(newRestaurant) {
        setRestaurants([...restaurants, newRestaurant])
    }

    function handleAddReview(reviewToAdd) {
        
        const updatedRestaurants = restaurants.map((restaurant) => {
            if(restaurant.id === reviewToAdd.restaurant_id) {
            const updatedReviews = [...restaurant.reviews, reviewToAdd]
            const updatedRestaurant = {...restaurant, reviews:updatedReviews}
            return updatedRestaurant
            } else {
                return restaurant
            }
        })
        
        setRestaurants(updatedRestaurants)
        // user adds review and once they add a review their list of restaurants they have left reviews on updates to include the new restaurant

        // make copy of user
        // why am i making copy of user
        // go to restaurants key
    //    add new restaurant 
        // where does the restaurant come from
        // What am i adding the new restaurant to
        // update state of user
        // copy of user with a key of restaurants they have reviewed
        const reviewedRestaurants = [...user.restaurants, reviewToAdd.restaurant ]
        const userObject = {...user, restaurants: reviewedRestaurants}
        // array of restaurants that a user has reviewed
        
        setUser(userObject)
        
        
        
            }
            
    
    function handleDeleteReview(reviewToDeleteID) {
        // console.log(reviewToDeleteID)
        const updatedRestaurants = restaurants.map((restaurant) => {
            if(restaurant.id === reviewToDeleteID.restaurant_id) {
                const updatedReviews = restaurant.reviews.filter((review) => reviewToDeleteID.id !== review.id)
                const updatedRestaurant = {...restaurant, reviews:updatedReviews}
                return updatedRestaurant

            } else {
                return restaurant
            }
        })
        // console.log(updatedRestaurants)
        setRestaurants(updatedRestaurants)

        const updatedReviewedRestaurants = user.restaurants.filter((restaurant) => reviewToDeleteID.restaurant_id !== restaurant.id)
        const userObject = {...user, restaurants: updatedReviewedRestaurants}

        setUser(userObject)
        
    }

    function handleUpdateReview(reviewToUpdate) {
        console.log(reviewToUpdate)
        const updatedRestaurantsArray = restaurants.map((restaurant) => {
           if(restaurant.id === reviewToUpdate.restaurant_id) {
                    const updatedReviews = restaurant.reviews.map((review) => {
                        if(review.id === reviewToUpdate.id) {
                        return reviewToUpdate
                        } else {
                        return review
                        }
                    })
                        const updatedRestaurant = {...restaurant, reviews:updatedReviews}
                        return updatedRestaurant
          
            } else {
            return restaurant
            }}
          
      )
        setRestaurants(updatedRestaurantsArray)
      }



    return (
        <div className="restaurant_list">
            <AddRestaurantForm handleAddRestaurant={handleAddRestaurant}/>
           
            {restaurantList}
        </div>
    )


}

export default RestaurantContainer;