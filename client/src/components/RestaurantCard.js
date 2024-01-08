import React from "react"
import Review from "/home/gcamoin/phase-4-project/client/src/components/Review.js"
import AddReviewForm from "/home/gcamoin/phase-4-project/client/src/components/AddReviewForm.js"



function RestaurantCard({restaurant}) {
    const {name, cuisine_type, rating, image, reviews} = restaurant
    
    const restaurantReviews = reviews?.map((review) => (
        <Review 
            key={review.id}
            review={review}
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
            <AddReviewForm/>
            
            
        </div>
        
    )
}

export default RestaurantCard;