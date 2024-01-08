import {React, useState} from "react"


function Review({review}) {

const {id, content} = review





return (
    <div className="restaurant-reviews">
    
        <p>{content}</p> - <span>{review.user.user_name}</span>
        
        
        
        
        
        
        
    </div>
)

}

export default Review;