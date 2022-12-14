import {useState} from "react"

export const DoubleClickTest = () => {

    const clickHandler = (event, word= true) =>{
        console.log ("button clicked", word, event)}
    return(
    <div>
    <button onClick = {clickHandler}> Click </button>
       
    <button onClick = {(event) => clickHandler(event,false)}> Click 2 </button>

    <button onClick = {(event) => clickHandler(event,true)}> Click 3 </button>
    </div>
    )   
 }

