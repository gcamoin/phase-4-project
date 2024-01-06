import {React, useState} from "react"

function AddRestaurantForm({handleAddRestaurant}) {
    const [name, setName] = useState("")
    const [cuisineType, setCuisineType] = useState("")
    const [image, setImage] = useState("")

    function onChangeName(e) {
        setName(e.target.value)
    }

    function onChangeCuisine(e) {
        setCuisineType(e.target.value)
    }

    function onChangeImage(e) {
        setImage(e.target.value)
    }

    

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                cusine_type: cuisineType,
                image: image
                
                
                
               


            }),
        })
        .then((r) => r.json())
        .then((restaurantToAdd) => handleAddRestaurant(restaurantToAdd))
        
    }




    return (
        <div className="add-restaurant-form">
            <h2>Add Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="name of restaurant"
                    value={name}
                    onChange={onChangeName}
                />
                <input 
                    type="text"
                    placeholder="cuisine type"
                    value={cuisineType}
                    onChange={onChangeCuisine}
                />
                <input 
                    type="text"
                    placeholder="restaurant image url"
                    value={image}
                    onChange={onChangeImage}
                />
                <button>Add Restaurant!</button>
            </form>
        </div>
    )


}


export default AddRestaurantForm;