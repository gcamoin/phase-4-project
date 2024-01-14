import React from "react"
import Review from "/home/gcamoin/phase-4-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-4-project/client/src/components/AddReviewForm.js"




function RestaurantCard({restaurant, handleAddReview, handleDeleteReview}) {
    const {name, cuisine_type, rating, image, reviews} = restaurant

    const restaurantReviews = reviews?.map((review) => (
        <Review 
            key={review.id}
            review={review}
            handleDeleteReview={handleDeleteReview}

        />
    ))

    

    

    return (
        <div className="restaurants" style={{margin: "30px", fontFamily:"cursive", alignContent: "center"}}>
            <h1 className="restaurant-names">
                {name}
            </h1>
            <img src={image}  alt="restaurant" />
            <br></br>
            <span>{cuisine_type} || </span> <span> Rating {rating}/10</span>
            <div className="review">
            <h4>Reviews</h4>
            </div>
            {restaurantReviews}
            <AddReviewForm handleAddReview={handleAddReview} restaurantID={restaurant.id}/>
           
            
            
        </div>
        
    )
}

export default RestaurantCard;