import {React, useState} from "react"

function AddRestaurantForm() {
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


    return (
        <div classname="add-restaurant-form">
            <h2>Add Restaurant</h2>
            <form>
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