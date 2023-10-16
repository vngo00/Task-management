import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ToDo(props) {
    const [content, setContent] = useState("");

    // update the value of input if there is any change
    function handleInput(event) {
        setContent(event.target.value);
    }

    // add the todo task to the array if the add button  is clicked and the input is not empty
    function addItem(event) {
        if (content !== ""){
            props.addItem(content);
            setContent("");
        }
        
        event.preventDefault();
    }

     
    return    <form>
            <input className="todo-input" onInput={handleInput} name="todo" placeholder="add your task" value={content}></input>
            {/* <AddCircleIcon onClick={addItem}>
            
            </AddCircleIcon> */}
            <button className="todo-btn" onClick={addItem}>Add</button>
            
        </form>;
}



export default ToDo;