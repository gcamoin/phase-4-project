import {React, useState} from "react"


function Review({review}) {
    const {id, content} = review
    const [editReview, setEditReview] = useState(false)
    const [editContent, setEditContent] = useState(content)

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch(`/reviews/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             content: editContent
               
    
    //         })
    //     })
    //     .then((r) => r.json())
    //     .then((updatedMovie) => handleUpdateMovie(updatedMovie));
    //     setEditMovie(false)
    // }





return (
    <div className= 'movie-details'>
       { editReview ? <form >
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
        
        
  
    </div>
    


)

}

export default Review;