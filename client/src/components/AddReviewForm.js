import {React, useState} from "react"


function AddReviewForm({handleAddReview, restaurantID}) {

    const [content, setContent] = useState("")
    const [errors, setErrors] = useState([])
    

    

     
    
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
        .then((r) => { 
            if(r.ok) {
              r.json().then((reviewToAdd) => handleAddReview(reviewToAdd));
            } else {
              r.json().then((err)=>setErrors(err.errors))
            }
  
          })
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
            <p style={{color: "red"}}>{errors}</p>
            </form>

        </div>
    )

}

export default AddReviewForm;