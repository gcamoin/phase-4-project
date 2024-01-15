import {React, useState} from "react"


function Review({review, handleDeleteReview}) {
    const {id, content} = review
    const [editReview, setEditReview] = useState(false)
    const [editContent, setEditContent] = useState(content)
    const [errors, setErrors] = useState([])

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


    function deleteReview() {
        fetch(`/reviews/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                handleDeleteReview(id);
            } else {
                r.json().then((err)=>setErrors(err.errors))
            }
        });
        
    }


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
        <button onClick={deleteReview}>Delete</button>
        <br></br>
        <p>{errors}</p>
        
        
  
    </div>
    


)

}

export default Review;