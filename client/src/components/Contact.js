import {React, useState} from "react"

function Contact() {
    const [text, setText] = useState("")

    return (
        <div>
            <h1>Contact</h1>
            <p>Email - gcamoin5@gmail.com</p>

            <form>
                <input 
                    tpye="text"
                    value={text}
                    placeholder="leave a comment"
                    onChange={(e) => setText(e.target.value)}

                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;