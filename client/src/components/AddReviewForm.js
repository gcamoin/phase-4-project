import {React, useState} from "react"


function AddReviewForm({handleAddReview, restaurantID}) {

    const [content, setContent] = useState("")
    

    

     
    
    function handleSubmit(e) {
        e.preventDefault();
       
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                restaurant_id: restaurantID
                
                }),
        })
        .then((r) => r.json())
        .then((reviewToAdd) => handleAddReview(reviewToAdd))
        setContent("")
        
    }


    return (
        <div className="review-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="leave a review.." 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            
            <button>submit</button>
            </form>

        </div>
    )

}

export default AddReviewForm;