import {React, useState} from "react"


function Review({review, handleDeleteReview, handleUpdateReview, restaurantID}) {
    const {id, content} = review
    const [editReview, setEditReview] = useState(false)
    const [editContent, setEditContent] = useState(content)
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: editContent,
                restaurant_id: restaurantID
            })
        }).then((r) => { 
            // console.log(editContent)
            if(r.ok) {
              r.json().then((updatedReview) => handleUpdateReview(updatedReview));
            } else {
              r.json().then((err) =>{
                setErrors(err.errors)})
              
            }
  
          })
        
        setEditReview(false)
    }


    console.log(errors)
    function deleteReview() {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                handleDeleteReview(review)
           
            } else {
                r.json().then((err)=>{
                    setErrors(err.error)})
            }
        });
        
    }

   


return (
    <div className= 'movie-details'>
       { editReview ? <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                />
                <button>Submit</button>
                    </form> :
       <div> 
         <p>{content}</p> - <span>{review.user.user_name}</span>
        </div>
       }
       
        
        <button onClick={() => setEditReview(!editReview)}>Edit Review</button>
        <button onClick={deleteReview}>Delete</button>
        <br></br>
        <p style={{color: "red"}}>{errors}</p>
        
        
  
    </div>
    


)

}

export default Review;