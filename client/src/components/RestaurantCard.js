import React from "react"

function RestaurantCard({restaurant}) {
    const {name, cuisine_type, rating, image} = restaurant

    return (
        <div className="restaurants" style={{margin: "50px", fontFamily:"cursive"}}>
            <h1 className="restaurant-cards">
                {name}
            </h1>
            <img src={image}  alt="restaurant" />
            <br></br>
            <span>{cuisine_type} || </span> <span> Rating {rating}/10</span>
        </div>
    )
}

export default RestaurantCard;