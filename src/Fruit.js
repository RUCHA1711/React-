// Props e.g.
import React from "react"

//Function component Example
const Fruit = (props) => {
 
    return (
        <div className="fruit">
        
            <h1>List of Fruits</h1>
            <p>Name: {props.fruits.name}</p>
            <p>Color: {props.fruits.color}</p>
        </div>
    )
}
 
export default Fruit;