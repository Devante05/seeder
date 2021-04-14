import React from 'react'

export const Form = () => {
    return (
        <div>
            <form>
                <input type= "text" placeholder = "Location"></input>
                <input type= "text" placeholder = "Plant/Seed Name"></input>
                <input type= "text" placeholder = "Price"></input>
                <button type = "submit" className = "btn-md">Submit</button>
            </form>
        </div>
    )
}
export default Form
