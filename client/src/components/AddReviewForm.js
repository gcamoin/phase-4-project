import {React, useState} from "react"


function AddReviewForm() {

    const [content, setContent] = useState("")
    const [reviews, setReviews] =useState([])

    

      function handleAddReview(newReview) {
        setReviews([...reviews, newReview])
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content
                
                }),
        })
        .then((r) => r.json())
        .then((reviewToAdd) => handleAddReview(reviewToAdd))
        
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